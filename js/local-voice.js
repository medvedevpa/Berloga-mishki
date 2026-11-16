// Local recordings only: no upload, remote synthesis or speaker cloning.
export const normalizePhrase=text=>String(text||'').replace(/<[^>]*>/g,' ').toLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
export const cleanPhrase=text=>String(text||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
export function sentenceParts(text){
 return (String(text||'').replace(/<[^>]*>/g,' ').match(/[^.!?…;:\n]+(?:[.!?…;:]+|$)/g)||[]).map(cleanPhrase).filter(t=>normalizePhrase(t));
}
const META='speechplay.voice.library.v1',MAX_BYTES=40*1024*1024;
const audioType=/^audio\/(webm|mp4|ogg|wav|x-wav|mpeg|aac)(;.*)?$/i;

function openDatabase(){return new Promise((resolve,reject)=>{
 if(!window.indexedDB){reject(Error('Хранилище записей недоступно'));return;}
 let settled=false;
 const r=indexedDB.open('speechplay-voice',1);
 const timer=setTimeout(()=>{settled=true;reject(Error('Хранилище занято другой вкладкой'));},4000);
 r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains('clips'))r.result.createObjectStore('clips');};
 r.onsuccess=()=>{clearTimeout(timer);if(settled)r.result.close();else resolve(r.result);};
 r.onerror=()=>{clearTimeout(timer);reject(r.error||Error('Хранилище записей недоступно'));};
});}
async function readClips(){
 const db=await openDatabase();
 try{return await new Promise((resolve,reject)=>{
  const rows=[],tx=db.transaction('clips'),r=tx.objectStore('clips').openCursor();
  r.onsuccess=()=>{const c=r.result;if(c){if(c.value instanceof Blob&&c.value.size)rows.push([String(c.key),c.value]);c.continue();}};
  tx.oncomplete=()=>resolve(rows);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Чтение прервано'));
 });}finally{db.close();}
}
async function writeClips(rows,deletions=[]){
 const db=await openDatabase();
 try{await new Promise((resolve,reject)=>{
  const tx=db.transaction('clips','readwrite'),store=tx.objectStore('clips');
  deletions.forEach(k=>store.delete(k));rows.forEach(([k,b])=>store.put(b,k));
  tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Сохранение прервано'));
 });}finally{db.close();}
}

export function createLocalVoice({settings,voice,talk,stopTalk,fast=()=>1}){
 const clips=new Map(),subscribers=new Set();let active=null,meta={custom:[],missing:[]},metaTimer;
 try{const raw=JSON.parse(localStorage.getItem(META)||'null');if(raw){meta.custom=(raw.custom||[]).filter(x=>typeof x==='string').slice(0,200);meta.missing=(raw.missing||[]).filter(x=>typeof x==='string').slice(0,200);}}catch{}
 const persist=()=>{try{localStorage.setItem(META,JSON.stringify(meta));}catch{}};
 const notify=()=>subscribers.forEach(fn=>fn());
 const register=(storedKey,blob)=>{
  const k=normalizePhrase(storedKey);if(!k)return;
  const previous=clips.get(k);if(previous)URL.revokeObjectURL(previous.url);
  clips.set(k,{blob,url:URL.createObjectURL(blob),storedKey});
 };
 const ready=readClips().then(rows=>{rows.forEach(([k,b])=>register(k,b));notify();return true;}).catch(()=>false);
 function remember(text){
  const k=normalizePhrase(text);if(!k||clips.has(k)||meta.missing.some(t=>normalizePhrase(t)===k))return;
  meta.missing.push(cleanPhrase(text).slice(0,300));meta.missing=meta.missing.slice(-200);
  clearTimeout(metaTimer);metaTimer=setTimeout(persist,300);
 }
 function plan(text){
  const full=clips.get(normalizePhrase(text));
  if(full)return [{kind:'clip',text:cleanPhrase(text),key:normalizePhrase(text),url:full.url}];
  // Match complete sentences/cues, not syllables cut from unrelated words.
  const sentences=sentenceParts(text),result=[];
  for(let i=0;i<sentences.length;i++){
   let text=sentences[i],key=normalizePhrase(text),clip=clips.get(key),end=i;
   for(let j=sentences.length-1;j>i;j--){const joined=sentences.slice(i,j+1).join(' '),candidate=clips.get(normalizePhrase(joined));if(candidate){text=joined;key=normalizePhrase(joined);clip=candidate;end=j;break;}}
   result.push({kind:clip?'clip':'tts',text,key,...(clip?{url:clip.url}:{})});i=end;
  }
  return result;
 }
 function stop(){
  const previous=active;active=null;previous?.cancel();
  try{window.speechSynthesis?.cancel();}catch{}stopTalk();
 }
 function say(text,options={}){
  stop();
  return new Promise(resolve=>{
   let cancelled=false,finished=false,cleanup=()=>{};
   const session={cancel:()=>{cancelled=true;cleanup();finish();}};
   function finish(){if(finished)return;finished=true;cleanup();if(active===session){active=null;stopTalk();}resolve();}
   const current=()=>!cancelled&&active===session;
   active=session;
   const estimate=t=>Math.max(800,normalizePhrase(t).replace(/ /g,'').length*130/(settings().rate/.8||1));
   function silent(t){return new Promise(done=>{
    talk(t,estimate(t));const timer=setTimeout(done,estimate(t)*fast());cleanup=()=>{clearTimeout(timer);done();};
   });}
   function device(t){return new Promise(done=>{
    if(!current()){done();return;}
    if(!window.speechSynthesis){silent(t).then(done);return;}
    let timer,ended=false,u;
    const end=()=>{if(ended)return;ended=true;clearTimeout(timer);if(u)u.onstart=u.onend=u.onerror=null;done();};
    cleanup=end;
    try{
     u=new SpeechSynthesisUtterance(t.replace(/[-–—]/g,' '));u.lang='ru-RU';u.rate=settings().rate||.8;u.pitch=1.2;
     if(voice())u.voice=voice();u.onstart=()=>{if(current())talk(t,estimate(t));};u.onend=end;u.onerror=end;
     timer=setTimeout(()=>{if(current())window.speechSynthesis.cancel();end();},Math.min(90000,estimate(t)+5000));
     window.speechSynthesis.speak(u);
    }catch{end();}
   });}
   function recording(part){return new Promise(done=>{
    let a,timer,ended=false;
    const end=ok=>{if(ended)return;ended=true;clearTimeout(timer);if(a){a.onended=a.onerror=a.onloadedmetadata=null;a.pause();a.removeAttribute('src');a.load();}done(ok);};
    cleanup=()=>end(false);
    try{
     a=new Audio(part.url);
     const arm=ms=>{clearTimeout(timer);timer=setTimeout(()=>end(false),ms);};arm(10000);
     a.onloadedmetadata=()=>{if(current()&&Number.isFinite(a.duration)&&a.duration>0){talk(part.text,a.duration*1000);arm(a.duration*1000+5000);}};
     a.onended=()=>end(true);a.onerror=()=>end(false);
     a.play().then(()=>{if(!current()){end(false);return;}talk(part.text,Number.isFinite(a.duration)?a.duration*1000:estimate(part.text));if(!Number.isFinite(a.duration))arm(90000);}).catch(()=>end(false));
    }catch{end(false);}
   });}
   (async()=>{
    if((!settings().voiceOn&&!options.force)||window.__fast){await silent(text);finish();return;}
    await ready;if(!current())return;
    const parts=options.recordingURL?[{kind:'clip',text:cleanPhrase(text),url:options.recordingURL}]:plan(text),queue=[];
    for(const p of parts){
     if(p.kind==='tts'&&options.trackMissing!==false)remember(p.text);
     // Adjacent device sentences stay one utterance for natural intonation.
     if(p.kind==='tts'&&queue.at(-1)?.kind==='tts')queue.at(-1).text+=' '+p.text;else queue.push({...p});
    }
    for(const p of queue){
     if(!current())break;
     if(p.kind==='clip'){
      const ok=await recording(p);if(!ok&&current()&&!options.recordedOnly)await device(p.text);
     }else if(!options.recordedOnly)await device(p.text);
    }
    finish();
   })().catch(finish);
  });
 }
 async function put(text,blob){
  await ready;const k=normalizePhrase(text);if(!k||!(blob instanceof Blob)||!blob.size)throw Error('Пустая запись');
  const aliases=(await readClips()).filter(([key])=>key!==k&&normalizePhrase(key)===k).map(([key])=>key);
  await writeClips([[k,blob]],aliases);
  register(k,blob);meta.missing=meta.missing.filter(t=>normalizePhrase(t)!==k);persist();notify();
 }
 async function remove(text){
  await ready;const k=normalizePhrase(text),clip=clips.get(k);if(!clip)return;
  // A legacy spelling may coexist with a canonical key; remove both aliases.
  const rows=await readClips(),keys=rows.filter(([key])=>normalizePhrase(key)===k).map(([key])=>key);
  await writeClips([],keys);URL.revokeObjectURL(clip.url);clips.delete(k);notify();
 }
 async function exportPack(){
  await ready;
  const entries=[...clips.entries()];if(!entries.length)throw Error('Пока нет записей для копии');
  if(entries.reduce((sum,[,c])=>sum+c.blob.size,0)>MAX_BYTES)throw Error('Объём копии превышает ограничение 40 МБ аудио.');
  const rows=[];
  for(const [text,c]of entries){
   const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]);r.onerror=()=>reject(r.error);r.readAsDataURL(c.blob);});
   rows.push({text,type:c.blob.type||'audio/webm',data});
  }
  return new Blob([JSON.stringify({format:'matvey-local-voice',version:1,custom:meta.custom,clips:rows})],{type:'application/json'});
 }
 async function importPack(file){
  await ready;if(file.size>MAX_BYTES*1.4)throw Error('Файл копии слишком большой (до 40 МБ аудио)');
  const pack=JSON.parse(await file.text());
  if(pack.format!=='matvey-local-voice'||pack.version!==1||!Array.isArray(pack.clips)||pack.clips.length>2000)throw Error('Это не копия голоса Матвея');
  const rows=[];let total=0;const seen=new Set();
  for(const c of pack.clips){
   if(typeof c.text!=='string'||c.text.length>500||!normalizePhrase(c.text)||typeof c.data!=='string'||!audioType.test(c.type||''))throw Error('В копии повреждена запись');
   const key=normalizePhrase(c.text);if(seen.has(key))throw Error('В копии повторяется фраза');seen.add(key);
   const bytes=Uint8Array.from(atob(c.data),x=>x.charCodeAt(0));total+=bytes.length;if(!bytes.length||total>MAX_BYTES)throw Error('В копии слишком много аудио');
   // Existing recordings win. Import adds missing clips without overwriting a parent’s take.
   if(!clips.has(key))rows.push([key,new Blob([bytes],{type:c.type})]);
  }
  await writeClips(rows);rows.forEach(([k,b])=>register(k,b));
  const names=Array.isArray(pack.custom)?pack.custom.filter(t=>typeof t==='string'&&t.length<=300):[];
  for(const text of [...names,...rows.map(([k])=>k)])if(!meta.custom.some(t=>normalizePhrase(t)===normalizePhrase(text)))meta.custom.push(cleanPhrase(text));
  meta.custom=meta.custom.slice(-200);persist();notify();return {added:rows.length,kept:pack.clips.length-rows.length};
 }
 return {ready,say,stop,put,remove,plan,exportPack,importPack,
  preview:(blob,text)=>{const url=URL.createObjectURL(blob);return say(text,{force:true,recordedOnly:true,trackMissing:false,recordingURL:url}).finally(()=>URL.revokeObjectURL(url));},
  has:text=>clips.has(normalizePhrase(text)),keys:()=>[...clips.keys()],
  custom:()=>meta.custom.slice(),missing:()=>meta.missing.filter(t=>!clips.has(normalizePhrase(t))),
  addCustom:text=>{text=cleanPhrase(text).slice(0,300);if(text&&!meta.custom.some(t=>normalizePhrase(t)===normalizePhrase(text))){meta.custom.push(text);meta.custom=meta.custom.slice(-200);persist();}return text;},
  subscribe:fn=>{subscribers.add(fn);return()=>subscribers.delete(fn);}
 };
}
