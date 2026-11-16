const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const base=process.env.MATVEY_TEST_URL||'http://localhost:8765';
const out=fs.mkdtempSync(path.join(os.tmpdir(),'matvey-voice-'));
// Synthetic microphone input with quiet edges and a speech-like amplitude envelope.
const rate=48000,samples=rate*4,wav=Buffer.alloc(44+samples*2);
wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(samples*2,40);
for(let i=0;i<samples;i++){const t=i/rate,amp=t>.4&&t<3.2?.18*(.6+.4*Math.sin(t*11)**2):0;wav.writeInt16LE(Math.round(Math.sin(t*440*Math.PI*2)*amp*32767),44+i*2);}
const input=path.join(out,'mic.wav');fs.writeFileSync(input,wav);
let browser;
(async()=>{
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream','--use-file-for-fake-audio-capture='+input]});
 const context=await browser.newContext({viewport:{width:390,height:844},permissions:['microphone'],reducedMotion:'reduce'});
 const p=await context.newPage(),errors=[],uploads=[];
 p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(!['GET','HEAD'].includes(r.method()))uploads.push(r.url());});
 await p.goto(base);await p.evaluate(()=>window.__matveyVoice.ready);
 // Seed a real v15-style database with noncanonical ё and a phrase spanning two sentences.
 const fixture=wav.toString('base64');
 const processing=await p.evaluate(async data=>{
  const {prepareVoiceClip}=await import('/js/voice-processing.js');
  const bytes=Uint8Array.from(atob(data),c=>c.charCodeAt(0)),blob=new Blob([bytes],{type:'audio/wav'});
  const quiet=await prepareVoiceClip(blob,true,.6),loud=await prepareVoiceClip(blob,true,1.8),raw=await prepareVoiceClip(blob,false);
  const ctx=new AudioContext();
  const measure=async b=>{const a=await ctx.decodeAudioData(await b.arrayBuffer());let peak=0;for(const n of a.getChannelData(0))peak=Math.max(peak,Math.abs(n));return {duration:a.duration,peak};};
  const soft=await measure(quiet.blob),strong=await measure(loud.blob);
  const silence=bytes.slice();silence.fill(0,44);let rejectedSilence=false;
  try{await prepareVoiceClip(new Blob([silence],{type:'audio/wav'}),true);}catch{rejectedSilence=true;}
  await ctx.close();return {soft,strong,rawUnchanged:raw.blob===blob,rejectedSilence};
 },fixture);
 assert(processing.soft.duration>2.8&&processing.soft.duration<3.4);assert(processing.strong.peak<=.981);assert(processing.strong.peak>processing.soft.peak*1.3);assert(processing.rawUnchanged);assert(processing.rejectedSilence);
 await p.evaluate(async data=>{
  const db=await new Promise((res,rej)=>{const r=indexedDB.open('speechplay-voice',1);r.onsuccess=()=>res(r.result);r.onerror=rej;});
  const blob=new Blob([Uint8Array.from(atob(data),c=>c.charCodeAt(0))],{type:'audio/wav'});
  await new Promise((res,rej)=>{const tx=db.transaction('clips','readwrite');for(const k of ['дай','ещё','молодец давай дальше'])tx.objectStore('clips').put(blob,k);tx.oncomplete=res;tx.onerror=rej;});db.close();
  const state=window.__sp.S();state.stars=23;state.voiceOn=true;localStorage.setItem('speechplay.v3',JSON.stringify(state));
 },fixture);
 await p.reload();await p.evaluate(()=>window.__matveyVoice.ready);
 assert.deepEqual(await p.evaluate(()=>window.__matveyVoice.plan('ДАЙ. Зайчик просит яблоко. Ещё!').map(p=>p.kind)),['clip','tts','clip']);
 assert.deepEqual(await p.evaluate(()=>window.__matveyVoice.plan('Молодец! Давай дальше! ЕЩЕ!').map(p=>p.kind)),['clip','clip']);
 assert.deepEqual(await p.evaluate(()=>window.__matveyVoice.plan('Отдай яблоко.').map(p=>p.kind)),['tts']);
 // Deterministic playback checks: cancellation settles promises, failures use device TTS.
 await p.evaluate(()=>{
  window.__nativeAudio=window.Audio;window.__audioLog=[];window.__holdClip=false;window.__rejectClip=false;
  window.Audio=class{
   constructor(){this.duration=.02;}
   play(){window.__audioLog.push('clip');if(window.__rejectClip)return Promise.reject(Error('blocked'));
    setTimeout(()=>this.onloadedmetadata?.(),0);if(!window.__holdClip)setTimeout(()=>this.onended?.(),20);return Promise.resolve();}
   pause(){}removeAttribute(){}load(){}
  };
  speechSynthesis.speak=u=>{window.__audioLog.push(u.text);setTimeout(()=>u.onend?.(),20);};
  speechSynthesis.cancel=()=>{};
 });
 await p.evaluate(()=>window.__matveyVoice.say('ДАЙ. Зайчик просит яблоко. ЕЩЁ!'));
 assert.deepEqual(await p.evaluate(()=>window.__audioLog),['clip','Зайчик просит яблоко.','clip']);
 const cancellation=await p.evaluate(async()=>{
  window.__audioLog=[];window.__holdClip=true;let settled=false;
  const prior=window.__matveyVoice.say('ДАЙ. Не должно прозвучать.').then(()=>settled=true);
  await new Promise(r=>setTimeout(r,10));window.__matveyVoice.stop();
  await Promise.race([prior,new Promise(r=>setTimeout(r,150))]);window.__holdClip=false;return {settled,log:window.__audioLog};
 });assert.equal(cancellation.settled,true);assert.deepEqual(cancellation.log,['clip']);
 await p.evaluate(async()=>{window.__audioLog=[];window.__rejectClip=true;await window.__matveyVoice.say('ДАЙ');window.__rejectClip=false;});
 assert.deepEqual(await p.evaluate(()=>window.__audioLog),['clip','ДАЙ']);
 await p.evaluate(()=>{window.Audio=window.__nativeAudio;window.__sp.S().voiceOn=false;});
 console.log('Legacy recordings, sentence matching, boundaries, fallback and cancellation passed');
 // Real recorder + real IndexedDB + local signal processing (not a mocked MediaRecorder).
 async function openStudio(){await p.evaluate(()=>document.getElementById('parent').hidden=false);await p.click('#recOpen');await p.waitForFunction(()=>!document.getElementById('recMsg').textContent.includes('Загружаем'));}
 await openStudio();assert.equal(await p.locator('#recPhrase option').count(),24);
 for(const width of [320,390,768,1280]){
  await p.setViewportSize({width,height:width>700?900:844});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.screenshot({path:path.join(out,'studio-'+width+'.png')});
 }
 await p.setViewportSize({width:390,height:844});
 await p.selectOption('#recGroup','games');assert(await p.locator('#recPhrase option').count()>50);
 await p.fill('#recSearch','горшочек');assert(await p.locator('#recPhrase option').count()>0);
 await p.selectOption('#recGroup','missing');assert((await p.locator('#recPhrase').textContent()).includes('Зайчик просит яблоко'));
 await p.locator('.voice-custom summary').click();await p.fill('#recCustomText','Матвей, привет!');await p.click('#recAdd');
 await p.click('#recBtn');await p.waitForFunction(()=>document.getElementById('recBtn').textContent.includes('Стоп'));
 assert(await p.locator('#recNext').isDisabled());await p.waitForTimeout(2300);await p.click('#recBtn');
 await p.waitForFunction(()=>document.getElementById('recMsg').textContent.includes('Сохранено ✓'));
 assert(await p.locator('#recPlay').isEnabled());assert(await p.locator('#recOriginal').isEnabled());
 const stored=await p.evaluate(async()=>{
  const db=await new Promise(r=>{const q=indexedDB.open('speechplay-voice',1);q.onsuccess=()=>r(q.result);});
  const blob=await new Promise(r=>{const q=db.transaction('clips').objectStore('clips').get('матвей привет');q.onsuccess=()=>r(q.result);});db.close();
  const buffer=await new AudioContext().decodeAudioData(await blob.arrayBuffer());return {type:blob.type,duration:buffer.duration,channels:buffer.numberOfChannels,rate:buffer.sampleRate};
 });assert.equal(stored.type,'audio/wav');assert.equal(stored.channels,1);assert(stored.duration>.3&&stored.duration<3);
 await p.click('#recPlay');await p.waitForTimeout(100);await p.click('#recOriginal');await p.waitForTimeout(100);
 // Exported clips are a local download; import merges without changing existing takes.
 const download= p.waitForEvent('download');await p.click('#recExport');const file=await download;const backup=path.join(out,'backup.json');await file.saveAs(backup);
 const pack=JSON.parse(fs.readFileSync(backup,'utf8'));assert.equal(pack.clips.length,4);
 await p.click('#recDel');assert(await p.locator('#recPlay').isDisabled());
 await p.setInputFiles('#recImport',backup);await p.waitForFunction(()=>document.getElementById('recMsg').textContent.includes('Добавлено записей: 1'));
 assert.equal(await p.evaluate(()=>window.__matveyVoice.keys().length),4);
 // Invalid packs must not partially write clips.
 const bad=path.join(out,'invalid.json');fs.writeFileSync(bad,JSON.stringify({...pack,clips:[{...pack.clips[0],text:'Новая фраза'}, {text:'Ошибка',type:'text/html',data:'eA=='}]}));
 await p.setInputFiles('#recImport',bad);await p.waitForFunction(()=>document.getElementById('recMsg').textContent.includes('Копия не загружена'));
 assert(!(await p.evaluate(()=>window.__matveyVoice.keys())).includes('новая фраза'));
 console.log('Real recording, processing, preview, export, merge and atomic validation passed');
 // Transfer to a clean browser profile; recorded speech also works without device TTS.
 const transferred=await browser.newContext({viewport:{width:390,height:844}});
 await transferred.addInitScript(()=>Object.defineProperty(window,'speechSynthesis',{value:undefined,configurable:true}));
 const phone=await transferred.newPage(),phoneErrors=[];phone.on('pageerror',e=>phoneErrors.push(e.message));
 await phone.goto(base);await phone.evaluate(()=>window.__matveyVoice.ready);await phone.evaluate(()=>document.getElementById('parent').hidden=false);await phone.click('#recOpen');
 await phone.setInputFiles('#recImport',backup);await phone.waitForFunction(()=>document.getElementById('recMsg').textContent.includes('Добавлено записей: 4'));
 assert.equal(await phone.evaluate(()=>window.__matveyVoice.keys().length),4);
 await phone.click('#recHome');await phone.click('#closeParent');
 await phone.evaluate(()=>window.__sp.run({kind:'choice',prompt:'Выбери',speak:'ДАЙ',w:'ДАЙ',key:'voice-test',choices:[{e:'🐮',ok:true}]}));
 assert(await phone.locator('#sayBtn').isVisible());assert.deepEqual(phoneErrors,[]);await transferred.close();
 // Leaving during a recording closes every microphone track and discards that take.
 await p.evaluate(()=>{
  window.__micTracks=[];const original=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia=async opts=>{const s=await original(opts);window.__micTracks.push(...s.getTracks());return s;};
 });
 await p.selectOption('#recGroup','starter');await p.selectOption('#recPhrase','на');await p.click('#recBtn');await p.waitForFunction(()=>document.getElementById('recBtn').textContent.includes('Стоп'));
 await p.click('#recHome');assert(await p.evaluate(()=>window.__micTracks.every(t=>t.readyState==='ended')));
 assert(!(await p.evaluate(()=>window.__matveyVoice.keys())).includes('на'));
 // A delayed permission result after leaving must also release its stream.
 await openStudio();await p.evaluate(()=>{
  const original=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia=async opts=>{const s=await original(opts);await new Promise(r=>setTimeout(r,500));return s;};
 });
 await p.click('#recBtn');await p.click('#recHome');await p.waitForTimeout(700);assert(await p.evaluate(()=>window.__micTracks.every(t=>t.readyState==='ended')));
 await openStudio();await p.evaluate(()=>navigator.mediaDevices.getUserMedia=async()=>{throw new DOMException('denied','NotAllowedError');});
 await p.click('#recBtn');await p.waitForFunction(()=>document.getElementById('recMsg').textContent.includes('Микрофон не разрешён'));
 assert(await p.locator('#recBtn').isEnabled());
 await p.click('#recHome');await p.click('#closeParent');
 await p.evaluate(async()=>{await navigator.serviceWorker.ready;});await p.waitForFunction(()=>!!navigator.serviceWorker.controller);
 await context.setOffline(true);await p.reload();await p.evaluate(()=>window.__matveyVoice.ready);await openStudio();
 assert.equal(await p.evaluate(()=>window.__sp.S().stars),23);assert.equal(await p.evaluate(()=>window.__matveyVoice.keys().length),4);
 assert.equal(await p.evaluate(()=>window.__matveyVoice.plan('Матвей, привет!')[0].kind),'clip');
 assert.deepEqual(uploads,[]);assert.deepEqual(errors,[]);
 console.log('Mic cleanup, late permission, denial, offline persistence and no uploads passed');
 console.log('Voice screenshots:',out);
 await browser.close();
})().catch(async error=>{console.error(error);await browser?.close();process.exit(1);});
