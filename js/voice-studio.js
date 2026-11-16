import {VOICE_GROUPS,buildVoiceCatalogue} from './voice-data.js';
import {normalizePhrase} from './local-voice.js';
import {prepareVoiceClip} from './voice-processing.js';

export function createVoiceStudio({library,settings,save,glyph,onOpen}){
 const $=id=>document.getElementById(id);
 let rows=[],index=0,group='starter',query='',phase='idle',epoch=0,mr=null,stream=null,audioContext=null,frame=0,timer=0,opened=false,discard=false,original=null;
 const busy=()=>phase!=='idle';
 const current=()=>rows[index];
 $('recGroup').replaceChildren(...VOICE_GROUPS.map(([value,label])=>new Option(label,value)));
 $('recEnhance').checked=settings().voiceEnhance!==false;
 $('recGain').value=Math.max(.6,Math.min(1.8,settings().voiceGain||1));
 $('recGainValue').textContent=Number($('recGain').value).toFixed(1)+'×';
 function render(message){
  const p=current(),done=rows.filter(r=>library.has(r.k)).length;
  $('recCount').textContent=done+' / '+rows.length;
  $('recProgress').max=rows.length||1;$('recProgress').value=done;
  $('recSummary').textContent=rows.length?`Записано ${done} из ${rows.length} в этом наборе · всего ваших записей: ${library.keys().length}`:'В этом списке пока нет фраз. Можно выбрать другой набор или добавить свою.';
  $('recEmoji').innerHTML=p?glyph(p.e):'🎙️';$('recWord').textContent=p?.w||'Здесь пока пусто';
  $('recMsg').textContent=message||(p?(library.has(p.k)?'Ваша запись уже используется в игре. Можно послушать или перезаписать.':'Нажмите «Записать», произнесите фразу и нажмите «Стоп». До 30 секунд.'):'В списке «Игра прозвучала без записи» появятся фразы, которые игра озвучила голосом устройства.');
  for(const id of ['recGroup','recSearch','recPhrase','recPrev','recNext','recSkip','recCustomText','recAdd','recExport','recImportBtn','recEnhance','recGain'])$(id).disabled=busy()||(!p&&['recPrev','recNext','recSkip'].includes(id));
  $('recPlay').disabled=busy()||!p||!library.has(p.k);$('recDel').disabled=busy()||!p||!library.has(p.k);
  $('recOriginal').disabled=busy()||!original||original.k!==p?.k;
  $('recBtn').disabled=!p||phase==='requesting'||phase==='processing'||phase==='file';
  $('recBtn').classList.toggle('on',phase==='recording');$('recBtn').textContent=phase==='recording'?'■ Стоп':phase==='requesting'?'Микрофон…':phase==='processing'?'Сохраняем…':'● Записать';
  $('recBtn').setAttribute('aria-label',phase==='recording'?'Остановить запись':'Записать фразу');
  $('recPhrase').value=p?.k||'';
 }
 function refresh(message,keepKey=current()?.k){
  const all=buildVoiceCatalogue(library),search=normalizePhrase(query);
  rows=all.filter(r=>r.group===group&&(!search||normalizePhrase(r.w).includes(search)));
  index=Math.max(0,rows.findIndex(r=>r.k===keepKey));
  $('recPhrase').replaceChildren(...rows.map(r=>new Option((library.has(r.k)?'✓ ':'○ ')+r.w,r.k)));
  render(message);
 }
 function release(){
  clearTimeout(timer);cancelAnimationFrame(frame);frame=0;
  stream?.getTracks().forEach(track=>track.stop());stream=null;
  if(audioContext)audioContext.close().catch(()=>{});audioContext=null;
  $('recMeter').value=0;$('recLevelText').textContent='Микрофон выключен';
 }
 function close(){
  if(!opened&&phase==='idle')return;
  opened=false;epoch++;discard=true;
  if(mr&&mr.state!=='inactive')try{mr.stop();}catch{}
  mr=null;release();phase='idle';original=null;library.stop();
 }
 async function toggle(){
  if(phase==='recording'){mr?.stop();return;}
  if(busy()||!current())return;
  const p={...current()},token=++epoch;discard=false;phase='requesting';library.stop();render('Разрешите доступ к микрофону. Аудио останется на этом устройстве.');
  try{
   if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder)throw Error('Запись недоступна. Откройте приложение по HTTPS в Safari, Chrome или Edge.');
   const enhance=$('recEnhance').checked,boost=Number($('recGain').value);
   const acquired=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:enhance,autoGainControl:enhance,channelCount:1}});
   if(token!==epoch||!opened){acquired.getTracks().forEach(t=>t.stop());return;}
   stream=acquired;
   let analyser,data,lastMeter=0;const start=performance.now();
   try{
    const Context=window.AudioContext||window.webkitAudioContext;
    const meterContext=new Context();audioContext=meterContext;await meterContext.resume();
    if(token!==epoch||!opened){acquired.getTracks().forEach(t=>t.stop());meterContext.close().catch(()=>{});return;}
    const source=audioContext.createMediaStreamSource(stream);analyser=audioContext.createAnalyser();analyser.fftSize=1024;data=new Float32Array(1024);source.connect(analyser);
   }catch{if(token!==epoch)return;if(audioContext)audioContext.close().catch(()=>{});audioContext=null;}
   const mime=['audio/mp4','audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus'].find(type=>MediaRecorder.isTypeSupported?.(type));
   const recorder=new MediaRecorder(stream,mime?{mimeType:mime}:undefined),chunks=[];mr=recorder;
   recorder.ondataavailable=event=>{if(event.data?.size)chunks.push(event.data);};
   recorder.onerror=()=>{if(token!==epoch)return;discard=true;release();phase='idle';render('Не удалось завершить запись. Попробуйте ещё раз.');};
   recorder.onstop=async()=>{
    if(token!==epoch)return;
    const elapsed=performance.now()-start;release();mr=null;
    if(discard||token!==epoch||!opened)return;
    phase='processing';render('Обрабатываем запись на устройстве…');
    try{
     if(!chunks.length||elapsed<350)throw Error('Запись слишком короткая. Произнесите фразу и нажмите «Стоп».');
     const raw=new Blob(chunks,{type:recorder.mimeType||mime||'audio/webm'});
     const prepared=await prepareVoiceClip(raw,enhance,boost);
     if(token!==epoch||!opened)return;
     await library.put(p.k,prepared.blob);
     if(token!==epoch||!opened)return;
     original={k:p.k,blob:raw};
     phase='idle';refresh('Сохранено ✓ · '+prepared.note+'. Нажмите «Послушать».',p.k);
    }catch(error){if(token===epoch&&opened){phase='idle';render(error.name==='QuotaExceededError'?'Не хватает места на устройстве. Сохраните резервную копию записей.':error.message||'Не удалось сохранить запись.');}}
   };
   recorder.start(200);phase='recording';render('Говорите спокойно и чётко. Нажмите «Стоп», когда закончите.');
   const meter=now=>{
    if(token!==epoch||phase!=='recording')return;
    if(now-lastMeter>120){
     let rms=0,peak=0;if(analyser){analyser.getFloatTimeDomainData(data);for(const n of data){rms+=n*n;peak=Math.max(peak,Math.abs(n));}rms=Math.sqrt(rms/data.length);}
     $('recMeter').value=Math.min(1,rms*5);
     $('recLevelText').textContent=(Math.min(30,(now-start)/1000)).toFixed(1)+' / 30 с · '+(analyser?(peak>.97?'Очень громко — чуть дальше от микрофона':rms>.012?'Голос слышно':'Говорите ближе к микрофону'):'Запись идёт');lastMeter=now;
    }frame=requestAnimationFrame(meter);
   };frame=requestAnimationFrame(meter);
   timer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},30000);
  }catch(error){
   if(token!==epoch)return;release();phase='idle';render(error.name==='NotAllowedError'?'Микрофон не разрешён. Разрешите его в настройках сайта и попробуйте ещё раз.':error.message||'Не удалось включить микрофон.');
  }
 }
 $('recBtn').onclick=toggle;
 $('recPlay').onclick=()=>{const p=current();if(p)library.say(p.w,{force:true,recordedOnly:true,trackMissing:false});};
 $('recOriginal').onclick=()=>{if(original&&current()?.k===original.k)library.preview(original.blob,current().w);};
 $('recDel').onclick=async()=>{if(busy()||!current())return;const key=current().k,token=epoch;library.stop();phase='file';render('Удаляем запись…');try{await library.remove(key);if(token!==epoch||!opened)return;if(original?.k===key)original=null;phase='idle';refresh('Запись удалена. Остальные записи сохранены.');}catch{if(token!==epoch||!opened)return;phase='idle';render('Не удалось удалить запись. Попробуйте ещё раз.');}};
 const move=delta=>{if(busy()||!rows.length)return;library.stop();index=(index+delta+rows.length)%rows.length;render();};
 $('recPrev').onclick=()=>move(-1);$('recNext').onclick=()=>move(1);
 $('recSkip').onclick=()=>{if(busy()||!rows.length)return;for(let n=1;n<=rows.length;n++){const i=(index+n)%rows.length;if(!library.has(rows[i].k)){library.stop();index=i;render();return;}}render('Все фразы этого набора уже записаны ✓');};
 $('recGroup').onchange=()=>{library.stop();group=$('recGroup').value;query='';$('recSearch').value='';refresh();};
 $('recSearch').oninput=()=>{query=$('recSearch').value;refresh();};
 $('recPhrase').onchange=()=>{library.stop();index=Math.max(0,rows.findIndex(r=>r.k===$('recPhrase').value));render();};
 $('recEnhance').onchange=()=>{settings().voiceEnhance=$('recEnhance').checked;save();};
 $('recGain').oninput=()=>{settings().voiceGain=Number($('recGain').value);$('recGainValue').textContent=Number($('recGain').value).toFixed(1)+'×';save();};
 $('recAdd').onclick=()=>{
  if(busy())return;const value=$('recCustomText').value;if(!normalizePhrase(value)){render('Введите слово или фразу для записи.');return;}
  const text=library.addCustom(value);group='custom';query='';$('recSearch').value='';$('recGroup').value=group;$('recCustomText').value='';refresh('Ваша фраза добавлена. Теперь запишите её.',normalizePhrase(text));
 };
 $('recExport').onclick=async()=>{
  if(busy())return;const token=epoch;phase='file';render('Готовим копию на устройстве…');
  try{const blob=await library.exportPack(),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='matvey-voice-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);if(token!==epoch||!opened)return;phase='idle';render('Копия готова. Сохраните скачанный файл; его можно перенести на другое устройство.');}catch(error){if(token!==epoch||!opened)return;phase='idle';render(error.message||'Не удалось сохранить копию.');}
 };
 $('recImportBtn').onclick=()=>{if(!busy())$('recImport').click();};
 $('recImport').onchange=async()=>{
  const file=$('recImport').files?.[0];$('recImport').value='';if(!file||busy()||!opened)return;const token=epoch;phase='file';library.stop();render('Читаем локальную копию…');
  try{const result=await library.importPack(file);if(token!==epoch||!opened)return;phase='idle';refresh(`Добавлено записей: ${result.added}. Уже существовали и сохранены: ${result.kept}.`);}catch(error){if(token!==epoch||!opened)return;phase='idle';render('Копия не загружена. '+(error.message||'Проверьте файл.'));}
 };
 document.addEventListener('visibilitychange',()=>{if(document.hidden){if(phase==='requesting'){const wasOpened=opened;close();opened=wasOpened;render('Запрос микрофона отменён. Нажмите «Записать», чтобы попробовать снова.');}else if(phase==='recording')mr?.stop();library.stop();}});
 window.addEventListener('pagehide',close);
 library.subscribe(()=>{if(opened&&phase==='idle')refresh();});
 return {open:async()=>{opened=true;onOpen();$('recGroup').value=group;refresh('Загружаем ваши записи…');await library.ready;if(opened)refresh();},close};
}
