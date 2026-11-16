
(function(){
'use strict';
const {STORY_EPISODES,STORY_IMAGES,STORY_LABELS,STORY_SPOTS,STORY_SIZES,M_MODES,M_CONTENT,M_COLORS,M_SHAPES,M_FRIENDS,LIVE_DATA,D_GAMES,D_R,D_HOMES}=window.MATVEY_GAME_DATA;

const {KNOWN,SND,MOUTH,ACTS,TAPS,FILLS,BREAK_IDEAS,CORE,REQ,ITEMS,ANIMAL_SND,ACTIONS,STICKERS,PER_STICKER,PRAISE,LESSON_LEN}=window.MATVEY_LESSON_DATA;

/* ======================= ХРАНИЛИЩЕ ======================= */
const KEY='speechplay.v3';
let S={stars:0,lessons:0,sound:true,auto:false,voiceOn:true,voiceURI:'',rate:0.8,stage:1,sessionMin:10,mic:false,missed:{}};
try{
  const raw=localStorage.getItem(KEY)||localStorage.getItem('speechplay.v2')||localStorage.getItem('speechplay.v1');
  if(raw)S=Object.assign(S,JSON.parse(raw));
}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));return true;}catch(e){return false;}}
window.MatveyFamilyStore={get:()=>S.familyRewards,put:value=>{const old=S.familyRewards;S.familyRewards=value;if(save())return true;S.familyRewards=old;return false;}};

/* ======================= УТИЛИТЫ ======================= */
const $=id=>document.getElementById(id);
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const isImg=e=>/\.(png|jpe?g|webp|svg|gif)$/i.test(e);
const glyph=e=>window.MATVEY_ILLUSTRATIONS[e]?'<img class="illustrated-object" src="'+MATVEY_ART[MATVEY_ILLUSTRATIONS[e]]+'" alt="">':(isImg(e)?'<img src="'+e+'" alt="" style="width:80%;height:80%;object-fit:contain">':e);
const spoken=w=>w.toLowerCase().replace(/<[^>]+>/g,'').replace(/[-!?.,…«»]/g,' ').replace(/\s+/g,' ').trim();
function cue(w){const s=w.split(/[- ]/)[0].replace(/[!]/g,'');return (s.length<=2?s.slice(0,1):s.slice(0,2))+'…';}
const FAST=()=>window.__fast?0.02:1;
const sleep=ms=>new Promise(r=>setTimeout(r,ms*FAST()));
function weightedPick(list,exclude){
  const pool=list.filter(x=>!exclude||!exclude.has(x.e));
  const src=pool.length?pool:list;
  let total=0;const w=src.map(x=>{const v=1+2*(S.missed[x.e]||0);total+=v;return v;});
  let r=Math.random()*total;
  for(let i=0;i<src.length;i++){r-=w[i];if(r<=0)return src[i];}
  return src[src.length-1];
}
const others=(list,not,n)=>shuffle(list.filter(x=>x.e!==not.e)).slice(0,n);
const mk=(it,ok)=>({e:it.e,ok:!!ok});

/* ======================= МИШКА (рот меняется при речи) ======================= */
const MASCOT='<svg viewBox="0 0 200 200" aria-hidden="true">'+
'<circle cx="45" cy="45" r="28" fill="#c98f5a"/><circle cx="155" cy="45" r="28" fill="#c98f5a"/>'+
'<circle cx="45" cy="45" r="15" fill="#f3c9a0"/><circle cx="155" cy="45" r="15" fill="#f3c9a0"/>'+
'<circle cx="100" cy="108" r="82" fill="#d28b4b"/>'+
'<path d="M23 156 Q100 135 177 156 L187 203 L13 203Z" fill="#1684eb"/><path d="M45 156 Q100 181 155 156" fill="none" stroke="#46b1ff" stroke-width="7"/>'+
'<path d="M53 43 Q60 10 80 32 Q87 4 104 30 Q113 10 129 35 Q145 14 156 47 L136 46 Q120 31 106 52 L94 37 L77 52Z" fill="#965526"/>'+
'<ellipse cx="100" cy="132" rx="46" ry="38" fill="#f6dcb8"/>'+
'<g class="eyes"><ellipse cx="68" cy="92" rx="11" ry="13" fill="#fff"/><ellipse cx="132" cy="92" rx="11" ry="13" fill="#fff"/>'+
'<circle cx="68" cy="94" r="8" fill="#218dda"/><circle cx="132" cy="94" r="8" fill="#218dda"/>'+
'<circle cx="69" cy="95" r="4.5" fill="#162338"/><circle cx="133" cy="95" r="4.5" fill="#162338"/>'+
'<circle cx="71" cy="87" r="3.5" fill="#fff"/><circle cx="135" cy="87" r="3.5" fill="#fff"/></g>'+
'<ellipse cx="100" cy="115" rx="12" ry="8" fill="#2b1d12"/>'+
'<circle cx="52" cy="118" r="10" fill="#f0a08a" opacity=".6"/><circle cx="148" cy="118" r="10" fill="#f0a08a" opacity=".6"/>'+
'<path data-s="rest" d="M84 134 Q100 148 116 134" fill="none" stroke="#2b1d12" stroke-width="5" stroke-linecap="round"/>'+
'<path data-s="closed" d="M84 138 L116 138" stroke="#2b1d12" stroke-width="8" stroke-linecap="round"/>'+
'<g data-s="A"><ellipse cx="100" cy="146" rx="21" ry="18" fill="#8a2b2b"/><ellipse cx="100" cy="155" rx="12" ry="6" fill="#e07070"/></g>'+
'<ellipse data-s="O" cx="100" cy="144" rx="12" ry="14" fill="#8a2b2b"/>'+
'<ellipse data-s="U" cx="100" cy="141" rx="7" ry="8" fill="#8a2b2b"/>'+
'<path data-s="I" d="M76 136 Q100 156 124 136 Q100 143 76 136Z" fill="#fff" stroke="#2b1d12" stroke-width="4" stroke-linejoin="round"/>'+
'<ellipse data-s="mid" cx="100" cy="142" rx="14" ry="8" fill="#8a2b2b"/>'+
'<g data-s="FV"><path d="M84 139 L116 139" stroke="#2b1d12" stroke-width="7" stroke-linecap="round"/><rect x="92" y="132" width="16" height="7" rx="2" fill="#fff"/></g>'+
'<path d="M80 174 Q50 156 54 180 Q52 202 82 185 L96 180Z" fill="#8c3cec"/><path d="M120 174 Q150 156 146 180 Q148 202 118 185 L104 180Z" fill="#8c3cec"/><circle cx="100" cy="181" r="8" fill="#b97bff"/>'+
'</svg>';
function mouthSet(m){document.querySelectorAll('.mascot').forEach(e=>e.setAttribute('data-m',m));}
let talkTm=[];
function stopTalk(){talkTm.forEach(clearTimeout);talkTm=[];mouthSet('rest');}
function shapeOf(c){
  if('мпб'.indexOf(c)>=0)return 'closed';
  if('аяэ'.indexOf(c)>=0)return 'A';
  if('оё'.indexOf(c)>=0)return 'O';
  if('уюы'.indexOf(c)>=0)return 'U';
  if('иеь'.indexOf(c)>=0)return 'I';
  if('фв'.indexOf(c)>=0)return 'FV';
  return 'mid';
}
function talk(text,dur){
  stopTalk();
  const letters=[...text.toLowerCase()].filter(c=>/[а-яё]/.test(c));
  if(!letters.length)return;
  const seq=[];letters.forEach(c=>{const s=shapeOf(c);if(seq[seq.length-1]!==s)seq.push(s);});
  const step=Math.max(110,Math.min(320,dur/seq.length));
  seq.forEach((s,i)=>talkTm.push(setTimeout(()=>mouthSet(s),i*step)));
  talkTm.push(setTimeout(()=>mouthSet('rest'),seq.length*step));
}
function cheer(){
  document.querySelectorAll('.mascot').forEach(m=>{m.classList.remove('cheer');void m.offsetWidth;m.classList.add('cheer');});
  mouthSet('I');setTimeout(()=>mouthSet('rest'),900);
}

/* ======================= ЗВУКИ-ЭФФЕКТЫ ======================= */
let ac=null;
function ctx(){ac=ac||new (window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();return ac;}
function tone(notes){
  if(!S.sound)return;
  try{
    const c=ctx();let t=c.currentTime;
    notes.forEach(([f,d,v,type])=>{
      const o=c.createOscillator(),g=c.createGain();
      o.type=type||'sine';o.frequency.value=f;
      g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(v||.2,t+.02);
      g.gain.exponentialRampToValueAtTime(0.0001,t+d);
      o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d+.02);t+=d*.7;
    });
  }catch(e){}
}
const sndGood=()=>tone([[784,.15],[988,.15],[1319,.3]]);
const sndBad=()=>tone([[260,.18,.12,'triangle']]);
const sndEnd=()=>tone([[523,.15],[659,.15],[784,.15],[1047,.4]]);
const sndTap=()=>tone([[520+Math.random()*300,.12,.15]]);

/* ======================= ГОЛОС ======================= */
const V={voice:null,clips:{}};
function ruVoices(){try{return speechSynthesis.getVoices().filter(v=>/^ru/i.test(v.lang));}catch(e){return[];}}
function scoreVoice(v){
  const n=(v.name+' '+v.voiceURI).toLowerCase();let s=0;
  if(/natural|neural|online|premium|enhanced|улучш/.test(n))s+=100;
  if(/svetlana|dariya|daria|irina|milena|katya|alena|alina|tatyana|anna|yana|ekaterina|elena|vera|sveta|female|женск|google/.test(n))s+=50;
  if(/pavel|dmitry|dmitri|maxim|yuri|ivan|aleksandr|alexander|nikolai|male\b|мужск/.test(n)&&!/female/.test(n))s-=80;
  if(v.localService===false)s+=5;
  return s;
}
function pickVoice(){
  const list=ruVoices();
  if(!list.length){V.voice=null;return;}
  const f=S.voiceURI&&list.find(v=>v.voiceURI===S.voiceURI);
  V.voice=f||list.slice().sort((a,b)=>scoreVoice(b)-scoreVoice(a))[0];
}
try{speechSynthesis.onvoiceschanged=()=>{pickVoice();fillVoiceList();};}catch(e){}
pickVoice();

let curAudio=null,speakTok=0;
function stopSpeak(){
  speakTok++;
  try{speechSynthesis.cancel();}catch(e){}
  if(curAudio){try{curAudio.pause();}catch(e){}curAudio=null;}
  stopTalk();
}
function estMs(text,rate){return Math.max(800,spoken(text).replace(/ /g,'').length*130/((rate||S.rate||.8)/.8));}
function say(text){
  return new Promise(res=>{
    stopSpeak();
    const tok=speakTok;
    const done=()=>{if(tok===speakTok){stopTalk();}res();};
    const key=spoken(text);
    const est=estMs(text);
    const guard=()=>setTimeout(()=>{if(tok===speakTok)done();else res();},(est+3500)*FAST());
    if(!S.voiceOn||window.__fast){talk(text,est);setTimeout(done,est*FAST());return;}
    const clip=V.clips[key];
    if(clip){
      const a=new Audio(clip);curAudio=a;
      let started=false;
      a.onloadedmetadata=()=>{if(isFinite(a.duration))talk(text,a.duration*1000);started=true;};
      a.onended=done;a.onerror=done;
      a.play().then(()=>{if(!started)talk(text,est);}).catch(()=>{talk(text,est);setTimeout(done,est);});
      guard();return;
    }
    if(!('speechSynthesis' in window)){talk(text,est);setTimeout(done,est);return;}
    try{
      const u=new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g,'').replace(/-/g,' '));
      u.lang='ru-RU';u.rate=S.rate||.8;u.pitch=1.2;
      if(V.voice)u.voice=V.voice;
      u.onstart=()=>talk(text,est);
      u.onend=done;u.onerror=done;
      speechSynthesis.speak(u);
      guard();
    }catch(e){talk(text,est);setTimeout(done,est);}
  });
}

/* ---- записанный голос мамы (IndexedDB) ---- */
function idb(){return new Promise((res,rej)=>{
  if(!window.indexedDB)return rej();
  const r=indexedDB.open('speechplay-voice',1);
  r.onupgradeneeded=()=>r.result.createObjectStore('clips');
  r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);
});}
async function loadClips(){
  try{
    const db=await idb();
    await new Promise(res=>{
      const req=db.transaction('clips').objectStore('clips').openCursor();
      req.onsuccess=()=>{const c=req.result;if(c){V.clips[c.key]=URL.createObjectURL(c.value);c.continue();}else res();};
      req.onerror=()=>res();
    });
  }catch(e){}
}
async function putClip(k,blob){
  const db=await idb();
  await new Promise((res,rej)=>{const tx=db.transaction('clips','readwrite');tx.objectStore('clips').put(blob,k);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});
  if(V.clips[k])URL.revokeObjectURL(V.clips[k]);
  V.clips[k]=URL.createObjectURL(blob);
}
async function delClip(k){
  try{const db=await idb();await new Promise(res=>{const tx=db.transaction('clips','readwrite');tx.objectStore('clips').delete(k);tx.oncomplete=res;tx.onerror=res;});}catch(e){}
  if(V.clips[k]){URL.revokeObjectURL(V.clips[k]);delete V.clips[k];}
}
function phraseList(){
  const m=new Map();
  const add=(w,e)=>{const k=spoken(w);if(k&&!m.has(k))m.set(k,{k,w:w.replace(/<[^>]+>/g,''),e});};
  PRAISE.forEach(p=>add(p,'🌟'));
  add('Я тебя услышала!','👂');add('Всё! Пока-пока!','👋');add('Молодец! Давай дальше!','🌟');add('Давай дальше!','➡️');
  KNOWN.forEach(x=>add(x.w,x.e));SND.forEach(x=>add(x.w,x.e));CORE.forEach(x=>add(x.w,x.e));
  MOUTH.forEach(x=>add(x.w,x.e));TAPS.forEach(x=>add(x.w,x.e));
  ACTS.forEach(a=>{add(a.w,a.a);add(a.r,a.b);});
  FILLS.forEach(f=>add(f.w,f.e));
  return [...m.values()];
}

/* ---- микрофон: «ребёнок издал звук» ---- */
let micStream=null,micAn=null,micBuf=null;
async function micStart(){
  if(micStream)return true;
  try{
    micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});
    const c=ctx();const src=c.createMediaStreamSource(micStream);
    micAn=c.createAnalyser();micAn.fftSize=1024;src.connect(micAn);micBuf=new Uint8Array(micAn.fftSize);
    return true;
  }catch(e){micStream=null;micAn=null;return false;}
}
function micStop(){
  if(micStream){micStream.getTracks().forEach(t=>t.stop());}
  micStream=null;micAn=null;$('micDot').hidden=true;
}
function micLevel(){
  micAn.getByteTimeDomainData(micBuf);let s=0;
  for(let i=0;i<micBuf.length;i++){const d=(micBuf[i]-128)/128;s+=d*d;}
  return Math.sqrt(s/micBuf.length);
}

/* ======================= ЗАДАНИЯ ======================= */
const TIPS={
  warm:'Начинаем с того, что уже получается: успех в начале занятия мотивирует.',
  toy:'Говорите звук вместе с экраном, коротко и чётко, 2–3 раза. Потом помолчите — вдруг ребёнок повторит.',
  say:'Скажите слово медленно, лицом к ребёнку, чтобы он видел ваши губы. Засчитывайте любую попытку, даже один звук.',
  gesture:'Показывайте жест и слово вместе: жест помогает слову «запуститься».',
  request:'Не давайте сразу: подождите 10 секунд. Если молчит — подскажите первый звук. Потом дайте настоящий предмет.',
  two:'Скажите фразу целиком, затем оставьте паузу на второе слово. Достаточно любой попытки.',
  find:'Называйте слово 2–3 раза, пока ребёнок ищет. Сначала ребёнок понимает, потом говорит.',
  sound:'Скажите звук сами, дайте ребёнку найти картинку и повторите звук ещё раз вместе.',
  action:'Покажите действие телом: поспите, похлопайте. Движение запоминается лучше.',
  mouth:'Сядьте лицом к ребёнку, лучше перед зеркалом, показывайте рот крупно. Засчитывайте любую попытку: звук или движение губ.',
  act:'Говорите слово в момент действия, не до и не после: так слово связывается с действием.',
  fill:'Скажите строку и сделайте паузу на последнем слове. Если молчит — повторите сами, без нажима.',
  scene:'Говорите короткими фразами из 1–2 слов и повторяйте. Если ребёнок исказил слово — не поправляйте, просто скажите правильно ещё раз.',
  tap3:'Говорите звук вместе с каждым нажатием: ритм помогает повторять. Хороший способ размяться, если ребёнок ёрзает.',
  cups:'Здесь тренируются слова «ОТКРОЙ», «ТАМ», «НЕТ». Подождите, пока ребёнок сам выберет коробку.'
};
const imit=(type,o)=>Object.assign({kind:'imitate',type,tip:TIPS[type]||''},o);

function tWarm(){
  const k=rnd(KNOWN);
  return imit('warm',{key:'w'+k.e,w:k.w,word:spoken(k.w),big:k.e,fx:'jump',prompt:'Скажи: <b>'+k.w+'</b>',speak:'Скажи '+spoken(k.w),tip:TIPS.warm});
}
function tToy(used){
  const t=weightedPick(SND,used);
  return imit('toy',{key:t.e,w:t.w,word:spoken(t.w),big:t.e,fx:t.fx,toy:true,prompt:'Нажми на картинку!',speak:'Нажми на картинку',tip:TIPS.toy});
}
function tSayNew(used){
  const t=weightedPick(SND,used);
  return imit('say',{key:t.e,w:t.w,word:spoken(t.w),big:t.e,fx:t.fx,prompt:'Скажи: <b>'+t.w+'</b>',speak:'Скажи '+spoken(t.w)});
}
function tGesture(used){
  const t=weightedPick(CORE,used);
  return imit('gesture',{key:t.e,w:t.w,word:spoken(t.w),big:t.e,fx:'jump',hint:t.g,prompt:'Сделай как я: <b>'+t.w+'</b>',speak:'Делай как я '+spoken(t.w)});
}
function tMouth(used){
  const t=weightedPick(MOUTH,used);
  return imit('mouth',{key:t.e,w:t.w,word:spoken(t.w),big:t.e,fx:'jump',hint:t.g,prompt:'Делай как я: <b>'+t.w+'</b>',speak:'Делай как я '+spoken(t.w)});
}
function tAct(used){
  const t=weightedPick(ACTS.map(a=>Object.assign({e:a.a+a.b},a)),used);
  return imit('act',{key:t.a+t.b,w:t.w,word:spoken(t.w),big:t.a,b:t.b,r:t.r,fx:t.fx,prompt:'Скажи <b>'+t.w+'</b> и нажми!',speak:'Скажи '+spoken(t.w)+' и нажми'});
}
function tFill(used){
  const t=weightedPick(FILLS,used);
  const plain=t.line.replace(/<[^>]+>/g,'');
  return imit('fill',{key:'f'+t.e,w:t.w,word:spoken(t.w),lead:spoken(plain.replace('…','')),big:t.e,fx:'jump',
    prompt:t.line,full:plain.replace('…',t.w),speak:spoken(plain.replace('…',''))});
}
function tTwo(used){
  const t=rnd(REQ);const p=rnd(['ДАЙ','ЕЩЁ','НА']);
  return imit('two',{key:'t'+t.e,w:p+' '+t.w,word:spoken(p+' '+t.w),big:t.e,fx:'jump',
    prompt:'Скажи: <b>'+p+'</b> <b>'+t.w+'</b>',speak:'Скажи '+spoken(p+' '+t.w),done:t.food?'Держи! АМ-АМ!':'Держи! Играем!'});
}
function tRequest(){
  const opts=shuffle(REQ).slice(0,2);
  return {kind:'request',type:'request',key:'r'+opts[0].e,opts,phrase:'ДАЙ',prompt:'Что хочешь?',speak:'Что хочешь?',tip:TIPS.request};
}
function tScene(){
  const sc=rnd([
    {title:'Мишка хочет есть. Что дадим?',good:()=>rnd(['🍎','🍪','🍌','🥕']),bad:()=>rnd(['⚽','🚗','🧦']),phrase:'АМ-АМ',done:'Мишка ест! АМ-АМ!'},
    {title:'Мишка хочет пить. Что дадим?',good:()=>rnd(['🥛','🥤']),bad:()=>rnd(['⚽','🚗','🧦']),phrase:'ПИ-ПИ',done:'Мишка пьёт! ПИ-ПИ!'},
    {title:'Мишка хочет спать. Куда?',good:()=>'🛏️',bad:()=>rnd(['⚽','🍎','🚗']),phrase:'БАЙ-БАЙ',done:'Мишка спит! ТИ-ХО!'}
  ]);
  const g=sc.good(),x=sc.bad();
  return {kind:'scene',type:'scene',key:'s'+sc.phrase+g,scene:1,who:'🐻',prompt:sc.title,speak:sc.title,
    phrase:sc.phrase,done:sc.done,tip:TIPS.scene,opts:shuffle([{e:g,ok:true},{e:x,ok:false}])};
}
function tTap3(used){
  const t=weightedPick(TAPS,used);
  return {kind:'tap3',type:'tap3',key:'p'+t.e,w:t.w,big:t.e,fx:t.fx,prompt:'Нажимай! <b>'+t.w+'-'+t.w+'-'+t.w+'</b>',speak:'Нажимай '+spoken(t.w)+' '+spoken(t.w)+' '+spoken(t.w),tip:TIPS.tap3};
}
function tCups(){
  const it=rnd(REQ);
  return {kind:'cups',type:'cups',key:'c'+it.e,item:it.e,name:it.w,hide:Math.floor(Math.random()*3),
    prompt:'Где <b>'+it.w+'</b>? Открой!',speak:'Где '+spoken(it.w)+'? Открой!',tip:TIPS.cups};
}
function tFind(used){
  const t=weightedPick(ITEMS,used);const d=others(ITEMS,t,2);
  const prompt=t.fam?'Где <b>'+t.n.toUpperCase()+'</b>?':'Покажи: <b>'+t.n.toUpperCase()+'</b>';
  return {kind:'choice',type:'find',key:t.e,prompt,speak:t.fam?'Где '+t.n+'?':'Покажи '+t.n,tip:TIPS.find,choices:shuffle([mk(t,1),...d.map(x=>mk(x))])};
}
function tSound(used){
  const animals=ITEMS.filter(i=>ANIMAL_SND[i.e]);
  const t=weightedPick(animals,used);const snd=ANIMAL_SND[t.e];const d=others(animals,t,2);
  return {kind:'choice',type:'sound',key:t.e,prompt:'Кто говорит «<b>'+snd+'</b>»?',speak:'Кто говорит '+spoken(snd)+'?',tip:TIPS.sound,choices:shuffle([mk(t,1),...d.map(x=>mk(x))])};
}
function tAction(used){
  const t=weightedPick(ACTIONS,used);const d=others(ACTIONS,t,2);
  return {kind:'choice',type:'action',key:t.e,prompt:t.q,speak:spoken(t.q),tip:TIPS.action,choices:shuffle([mk(t,1),...d.map(x=>mk(x))])};
}
const STAGE_W={
  1:[[tToy,14],[tSayNew,14],[tGesture,10],[tMouth,10],[tAct,12],[tFind,10],[tSound,7],[tScene,7],[tFill,3],[tRequest,7],[tTap3,10],[tCups,6]],
  2:[[tToy,7],[tSayNew,11],[tGesture,9],[tMouth,5],[tAct,12],[tFind,7],[tSound,5],[tRequest,14],[tScene,7],[tFill,7],[tAction,5],[tTwo,6],[tTap3,7],[tCups,9]],
  3:[[tToy,3],[tSayNew,7],[tGesture,5],[tMouth,3],[tAct,8],[tFind,5],[tRequest,12],[tScene,7],[tFill,9],[tAction,5],[tTwo,26],[tTap3,5],[tCups,6]]
};
function pickBuilder(){
  const list=STAGE_W[S.stage]||STAGE_W[1];
  const total=list.reduce((s,b)=>s+b[1],0);let r=Math.random()*total;
  for(const [f,w] of list){r-=w;if(r<=0)return f;}
  return list[0][0];
}
function buildLesson(){
  const used=new Set(),tasks=[tWarm()];
  let last=null,guard=0;
  while(tasks.length<LESSON_LEN&&guard++<80){
    const f=pickBuilder();
    if(f===last&&Math.random()<.85)continue;
    const t=f(used);
    if(used.has(t.key))continue;
    used.add(t.key);tasks.push(t);last=f;
  }
  while(tasks.length<LESSON_LEN)tasks.push(tFind(new Set()));
  return tasks;
}

/* ======================= СОСТОЯНИЕ ЭКРАНОВ ======================= */
let L=null,waitTm=null,sessionStart=Date.now(),bubTm=null,childMode=false,wakeLock=null,breakShown=false;
const SCREENS=['home','lesson','end','roomScr','bubScr','recScr','adventureScr','montessoriScr','discoveryScr','liveScr','magicScr','picnicScr'];
function show(id){SCREENS.forEach(s=>$(s).hidden=(s!==id));}
const alive=tok=>!!L&&L.tok===tok&&childMode&&!breakShown;
function overLimit(){return !!S.sessionMin&&(Date.now()-sessionStart)>=S.sessionMin*60000*FAST()*(window.__fast?50:1);}

function renderHome(){
  stopWait();clearInterval(bubTm);stopSpeak();
  $('homeStars').textContent=S.stars;
  const got=Math.floor(S.stars/PER_STICKER);
  $('collection').innerHTML=STICKERS.map((s,i)=>'<div class="sticker'+(i<got?'':' locked')+'">'+(i<got?s:'❓')+'</div>').join('');
  const into=S.stars%PER_STICKER;
  $('nextBar').style.width=(into/PER_STICKER*100)+'%';
  $('nextTxt').textContent=got>=STICKERS.length?'Вся коллекция собрана!':'До новой наклейки: '+(PER_STICKER-into)+' ⭐';
  show('home');
}

/* --- ожидание (полоска): «подожди 10 секунд, потом подскажи первый звук» --- */
const WAIT_MS=10000;
function stopWait(){clearTimeout(waitTm);waitTm=null;}
function startWait(t,ms){
  stopWait();
  const lab=$('wlabel'),bar=$('wfill'),card=$('bigCard');
  if(!lab||!bar)return;
  const dur=ms||WAIT_MS;
  lab.innerHTML='⏳ Ждём… пусть попробует сам';
  bar.style.transition='none';bar.style.width='0%';void bar.offsetWidth;
  bar.style.transition='width '+dur*FAST()+'ms linear';bar.style.width='100%';
  if(card)card.classList.remove('hint');
  if(childMode)return;
  waitTm=setTimeout(()=>{
    const l2=$('wlabel');if(!l2)return;
    l2.innerHTML='Подскажите первый звук: <b>'+cue(t.w)+'</b>';
    const c2=$('bigCard');if(c2)c2.classList.add('hint');
    if(S.auto)say(spoken(cue(t.w).replace('…','')));
  },dur*FAST());
}

function startLesson(){
  breakShown=false;
  L={tasks:buildLesson(),i:0,wrong:0,first:true,locked:false,earned:0,startStars:S.stars,tok:(L?L.tok:0)+1,lastTap:0,tapped:false};
  $('dots').innerHTML=L.tasks.map(()=>'<div class="dot"></div>').join('');
  $('stars').textContent=S.stars;
  show('lesson');showTask();
}
function updateDots(){[...$('dots').children].forEach((d,i)=>{d.className='dot'+(i<L.i?' done':(i===L.i?' now':''));});}
function anim(el,fx){
  if(!el||!fx)return;
  ['a-drive','a-shake','a-fall','a-jump','a-ring'].forEach(c=>el.classList.remove(c));
  void el.offsetWidth;el.classList.add('a-'+fx);
}
function addTip(st,t){
  if(!t||!t.tip)return;
  const d=document.createElement('div');d.className='tip p-only';d.textContent='👩‍👦 '+t.tip;st.appendChild(d);
}
function fillMascots(root){(root||document).querySelectorAll('[data-mascot]').forEach(e=>{if(!e.firstChild)e.innerHTML=MASCOT;});}

function showTask(){
  stopWait();
  L.tok++;L.wrong=0;L.first=true;L.locked=false;L.tapped=false;L.lastTap=Date.now();L.stepStarted=Date.now();
  const tok=L.tok,t=L.tasks[L.i];
  updateDots();
  $('promptTxt').innerHTML=t.prompt;
  $('sayBtn').hidden=!('speechSynthesis' in window)&&!Object.keys(V.clips).length;
  const st=$('stage');st.innerHTML='';
  if(t.kind==='imitate')renderImitate(t,st);
  else if(t.kind==='request'||t.kind==='scene')renderRequest(t,st);
  else if(t.kind==='tap3')renderTap3(t,st);
  else if(t.kind==='cups')renderCups(t,st);
  else renderChoice(t,st);
  if(childMode)runChild(t,tok);
  else if(S.auto)say(t.speak);
}

// Засчитываем касание в начале контакта: долгое удержание не теряет ответ.
// click остаётся для мыши и клавиатуры, а после pointerdown не дублируется.
function bindKidTap(el,fn){
 let last=0;
 el.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0)return;
  e.preventDefault();last=Date.now();fn(e);
 },{passive:false});
 el.addEventListener('click',e=>{
  if(Date.now()-last<850){e.preventDefault();return;}
  fn(e);
 });
 el.addEventListener('contextmenu',e=>e.preventDefault());
 el.addEventListener('dragstart',e=>e.preventDefault());
}
/* --- выбор картинки --- */
function renderChoice(t,st){
  const box=document.createElement('div');box.className='choices';
  t.choices.forEach(ch=>{
    const b=document.createElement('button');b.className='pick';b.innerHTML=glyph(ch.e);
    b.setAttribute('aria-label',spoken(ch.e)||'Выбрать картинку');if(ch.ok)b.dataset.target='1';
    bindKidTap(b,()=>onPick(b,ch,t,box));
    box.appendChild(b);
  });
  st.appendChild(box);addTip(st,t);
}
function onPick(btn,ch,t,box){
  if(L.locked||btn.classList.contains('bad'))return;
  L.lastTap=Date.now();
  if(ch.ok){
    L.locked=true;
    if(L.first&&S.missed[t.key])S.missed[t.key]=Math.max(0,S.missed[t.key]-1);
    const m=reward(btn);
    [...box.children].forEach(c=>{if(c!==btn)c.style.opacity=.35;});
    afterWin(m,1500);
  }else{
    sndBad();
    if(L.first){S.missed[t.key]=(S.missed[t.key]||0)+1;save();}
    L.first=false;L.wrong++;btn.classList.add('bad');
    if(L.wrong>=2){const tg=box.querySelector('[data-target]');if(tg)tg.classList.add('hint','handhint');}
  }
}
const MIN_STEP_MS=3000;
function advanceAfterMinimum(tok,extra=0){
 if(!L||L.tok!==tok)return;
 const old=document.getElementById('lessonNext');if(old)old.remove();
 const btn=document.createElement('button');btn.id='lessonNext';btn.className='btn green';btn.textContent='Дальше ➜';btn.disabled=true;
 $('stage').appendChild(btn);
 const delay=Math.max(extra,MIN_STEP_MS-(Date.now()-L.stepStarted));
 setTimeout(()=>{if(L&&L.tok===tok&&!$('lesson').hidden)btn.disabled=false;},delay);
 btn.onclick=()=>{if(!btn.disabled&&L&&L.tok===tok){btn.disabled=true;next();}};
}
function afterWin(msg,delay){
 const tok=L.tok;
 if(childMode){say(msg).then(()=>{if(alive(tok))advanceAfterMinimum(tok);});}
 else advanceAfterMinimum(tok,delay);
}

/* --- повтори / жест / игрушка / фраза --- */
function renderImitate(t,st){
  if(t.ref){const r=document.createElement('div');r.className='ref';r.innerHTML=glyph(t.ref);st.appendChild(r);}
  if(t.hint){const h=document.createElement('div');h.className='tip p-only';h.style.fontSize='clamp(16px,3vmin,22px)';h.style.color='var(--ink)';h.textContent='✋ '+t.hint;st.appendChild(h);}
  const row=document.createElement('div');row.className='row-stage';
  const m=document.createElement('div');m.className='mascot big';m.setAttribute('data-m','rest');m.innerHTML=MASCOT;
  const c=document.createElement('button');c.id='bigCard';c.className='pick big-card';c.innerHTML=glyph(t.big);c.dataset.target='1';
  row.appendChild(m);row.appendChild(c);st.appendChild(row);
  let swapped=false;
  bindKidTap(c,()=>{
    L.tapped=true;L.lastTap=Date.now();
    anim(c,t.fx||'jump');sndTap();c.classList.remove('handhint');
    if(t.b){swapped=!swapped;c.innerHTML=glyph(swapped?t.b:t.big);}
    const shown=(t.b&&swapped)?t.r:(t.full||t.w);
    $('promptTxt').innerHTML='<b>'+shown+'</b>';
    say(shown);
    if(t.toy&&!childMode)startWait(t);
  });
  const w=document.createElement('div');w.className='wait';
  w.innerHTML='<div class="wlabel" id="wlabel"></div><div class="wbar"><i id="wfill"></i></div>';
  st.appendChild(w);
  const a=document.createElement('div');a.className='actions p-only';
  a.innerHTML='<button class="btn green" id="didBtn">✅ Попытался!</button><button class="btn ghost" id="skipBtn">дальше ›</button>';
  st.appendChild(a);
  addTip(st,t);
  $('didBtn').onclick=()=>{
    if(L.locked)return;L.locked=true;stopWait();
    if(S.missed[t.key])S.missed[t.key]=Math.max(0,S.missed[t.key]-1);
    reward(c,t.done);advanceAfterMinimum(L.tok,t.done?1900:1400);
  };
  $('skipBtn').onclick=()=>{
    if(L.locked)return;L.locked=true;stopWait();
    S.missed[t.key]=(S.missed[t.key]||0)+1;save();advanceAfterMinimum(L.tok);
  };
  if(!childMode){
    if(!t.toy)startWait(t);
    else $('wlabel').textContent='Нажмите на картинку';
  }
}

/* --- просим / мишка (выбор → слово) --- */
function renderRequest(t,st){
  if(t.who){const r=document.createElement('div');r.className='ref';r.innerHTML=glyph(t.who);st.appendChild(r);}
  const box=document.createElement('div');box.className='choices';
  t.opts.forEach(o=>{
    const b=document.createElement('button');b.className='pick';b.innerHTML=glyph(o.e);
    if(o.ok!==false)b.dataset.target='1';
    bindKidTap(b,()=>{
      if(L.locked||t.chosen)return;
      L.lastTap=Date.now();
      if(o.ok===false){sndBad();b.classList.add('bad');return;}
      sndTap();t.chosen=true;
      const phrase=t.phrase;
      const t2=imit('request',{key:t.key,w:phrase,word:spoken(phrase),big:o.e,fx:'jump',
        prompt:'Скажи: <b>'+phrase+'</b>',speak:'Скажи '+spoken(phrase),tip:t.scene?TIPS.scene:TIPS.request,ref:t.who,
        done:t.scene?t.done:(o.food?'Держи! АМ-АМ!':'Держи! Играем!')});
      L.tasks[L.i]=t2;L.tapped=false;
      $('promptTxt').innerHTML=t2.prompt;
      st.innerHTML='';renderImitate(t2,st);
      if(childMode)childImitate(t2,L.tok);
      else if(S.auto)say(t2.speak);
    });
    box.appendChild(b);
  });
  st.appendChild(box);addTip(st,t);
}

/* --- нажми 3 раза (для непосед) --- */
function renderTap3(t,st){
  const pips=document.createElement('div');pips.className='pips';pips.innerHTML='<i></i><i></i><i></i>';
  const row=document.createElement('div');row.className='row-stage';
  const m=document.createElement('div');m.className='mascot big';m.setAttribute('data-m','rest');m.innerHTML=MASCOT;
  const c=document.createElement('button');c.id='bigCard';c.className='pick big-card';c.innerHTML=glyph(t.big);c.dataset.target='1';
  row.appendChild(m);row.appendChild(c);
  st.appendChild(row);st.appendChild(pips);
  let n=0;
  bindKidTap(c,()=>{
    if(L.locked)return;
    L.lastTap=Date.now();n++;
    anim(c,t.fx);sndTap();c.classList.remove('handhint');
    pips.children[n-1].classList.add('on');
    if(n<3){$('promptTxt').innerHTML='<b>'+t.w+'!</b>';say(t.w);}
    else{L.locked=true;const msg=reward(c);afterWin(msg,1500);}
  });
  addTip(st,t);
}

/* --- где спрятано? (ОТКРОЙ / ТАМ / НЕТ) --- */
function renderCups(t,st){
  const box=document.createElement('div');box.className='choices';
  let opened=0;
  for(let i=0;i<3;i++){
    const b=document.createElement('button');b.className='pick';b.innerHTML='📦';b.dataset.target='1';
    bindKidTap(b,()=>{
      if(L.locked||b.classList.contains('open'))return;
      L.lastTap=Date.now();sndTap();b.classList.add('open');opened++;
      if(i===t.hide){
        L.locked=true;b.innerHTML=glyph(t.item);
        const msg=reward(b,'ВОТ ОН! '+t.name);afterWin(msg,1700);
      }else{
        b.innerHTML='💨';sndBad();
        $('promptTxt').innerHTML='<b>НЕТ!</b> Ищем дальше';say('Нет! Ищем дальше');
      }
    });
    box.appendChild(b);
  }
  st.appendChild(box);addTip(st,t);
}

/* ======================= ДЕТСКИЙ РЕЖИМ: автономный сценарий ======================= */
async function runChild(t,tok){
  try{
    if(t.kind==='imitate')await childImitate(t,tok);
    else await childPrompt(t,tok);
  }catch(e){}
}
function showHand(){
  const el=document.querySelector('#stage [data-target]:not(.bad):not(.open)');
  if(el){el.classList.add('handhint');}
}
async function childPrompt(t,tok){
  await sleep(500);if(!alive(tok))return;
  await say(t.speak);
  let idle=0;
  while(alive(tok)&&!L.locked&&!t.chosen){
    await sleep(6500);
    if(!alive(tok)||L.locked||t.chosen)break;
    if(Date.now()-L.lastTap<5000*FAST()+1){idle=0;continue;}
    idle++;
    if(idle>=6){idle=2;showHand();} // Нет ответа — остаёмся на этом задании
    if(idle>=2)showHand();
    await say(t.speak);
  }
}
async function listen(ms,tok){
  const t0=Date.now(),lim=ms*FAST();
  const base=[];let hits=0;
  if(S.mic&&micAn)$('micDot').hidden=false;
  while(Date.now()-t0<lim){
    if(!alive(tok)){$('micDot').hidden=true;return 'dead';}
    if(L.tapped){$('micDot').hidden=true;return 'tap';}
    await new Promise(r=>setTimeout(r,60));
    if(S.mic&&micAn){
      const lv=micLevel(),el=Date.now()-t0;
      if(el<400){base.push(lv);continue;}
      const b=base.length?base.reduce((a,c)=>a+c,0)/base.length:0.01;
      if(lv>Math.max(0.06,b*3))hits++;else hits=Math.max(0,hits-1);
      if(hits>=3){$('micDot').hidden=true;return 'voice';}
    }
  }
  $('micDot').hidden=true;
  return 'none';
}
async function childImitate(t,tok){
 L.tapped=false;
 await sleep(500);if(!alive(tok))return;
 const card=$('bigCard');if(card)card.classList.add('handhint');
 await say(t.lead||t.word);if(!alive(tok))return;
 let got=false,heard=false;
 while(alive(tok)&&!got){
   startWait(t,6000);
   let res=await listen(6000,tok);if(res==='dead'||!alive(tok))return;
   got=res==='tap'||res==='voice'||L.tapped;
   heard=res==='voice';
   if(!got){
     const c=cue(t.w).replace('…','');
     await say(spoken(c));if(!alive(tok))return;
     await say(t.word);if(!alive(tok))return;
     // Приложение не переходит далее, пока ребёнок не отреагирует.
   }
 }
 if(!alive(tok))return;
 L.locked=true;stopWait();
 if(card)card.classList.remove('handhint');
 const msg=heard?'Я тебя услышала!':(t.done||rnd(PRAISE));
 reward(card,msg,heard?2:1);if(heard)burst();
 await say(msg);
 if(alive(tok))advanceAfterMinimum(tok);
}

/* ======================= НАГРАДА / ПЕРЕХОДЫ ======================= */
function reward(el,msg,n){
  sndGood();
  if(el)el.classList.add('good');
  n=n||1;
  S.stars+=n;L.earned+=n;save();
  $('stars').textContent=S.stars;
  $('starChip').classList.remove('pop');void $('starChip').offsetWidth;$('starChip').classList.add('pop');
  const p=msg||rnd(PRAISE);
  $('promptTxt').innerHTML='<b>'+p+'</b>';
  cheer();burst();
  if(S.auto&&!childMode)say(p);
  return p;
}
function burst(){
  const fx=$('fx');
  for(let i=0;i<12;i++){
    const s=document.createElement('span');s.className='burst';
    s.textContent=rnd(['⭐','✨','🌟','💫']);
    const a=Math.random()*Math.PI*2,d=110+Math.random()*160;
    s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');
    fx.appendChild(s);setTimeout(()=>s.remove(),1050);
  }
}
function next(){
  stopWait();
  if(!L)return;
  L.i++;
  if(childMode&&overLimit())return showBreak();
  if(L.i>=L.tasks.length)return finish();
  showTask();
}
function finish(){
  stopWait();
  S.lessons++;save();sndEnd();
  const before=Math.floor(L.startStars/PER_STICKER),after=Math.floor(S.stars/PER_STICKER);
  $('endStars').textContent=L.earned;
  if(after>before&&STICKERS[after-1]){
    $('endHero').textContent=STICKERS[after-1];
    $('endTitle').textContent='Новая наклейка!';
    $('endSticker').textContent='Она уже в коллекции';
  }else{
    $('endHero').textContent=rnd(['🎉','🌈','🦄','🚀','🏆']);
    $('endTitle').textContent=rnd(PRAISE);
    $('endSticker').textContent='';
  }
  if(!childMode&&overLimit()){
    $('endHero').textContent='🧸';
    $('endTitle').textContent='Пора отдохнуть от экрана!';
    $('endSticker').textContent='Поиграйте вживую: '+rnd(BREAK_IDEAS).toLowerCase();
    sessionStart=Date.now();
  }
  show('end');burst();
  if(childMode){
    const tok=L.tok+1;L.tok=tok;
    say('Молодец!').then(()=>sleep(1500)).then(()=>{
      if(L.tok!==tok||!childMode||breakShown)return;
      if(overLimit())showBreak();else startLesson();
    });
  }
}
function showBreak(){
  breakShown=true;L.tok++;stopWait();stopSpeak();
  $('breakIdea').textContent='Поиграйте вживую: '+rnd(BREAK_IDEAS).toLowerCase();
  $('breakOv').hidden=false;sndEnd();
  say('Всё! Пока-пока!').then(()=>{});
}

/* ======================= КОМНАТА И ПУЗЫРИ ======================= */
function openRoom(){
  const room=$('room');room.innerHTML='';
  SND.forEach(s=>{
    const b=document.createElement('button');b.className='pick';b.innerHTML=glyph(s.e);
    bindKidTap(b,()=>{
      anim(b,s.fx);sndTap();
      const wp=document.createElement('div');wp.className='word-pop';wp.textContent=s.w;
      $('fx').appendChild(wp);setTimeout(()=>wp.remove(),1350);
      say(s.w);
    });
    room.appendChild(b);
  });
  show('roomScr');
}
function openBubbles(){
  show('bubScr');
  const box=$('bubbles');box.innerHTML='';
  clearInterval(bubTm);
  const spawn=()=>{
    if($('bubScr').hidden){clearInterval(bubTm);return;}
    if(box.children.length>9)return;
    const sz=70+Math.random()*60;
    const b=document.createElement('button');b.className='bub';b.setAttribute('aria-label','пузырь');
    b.style.width=b.style.height=sz+'px';
    b.style.left=Math.random()*Math.max(20,box.clientWidth-sz)+'px';
    b.style.setProperty('--h',(box.clientHeight+160)+'px');
    b.style.setProperty('--dur',(5+Math.random()*4)+'s');
    bindKidTap(b,()=>{
      const w=rnd(['ПУФ!','ЛОП!','П-П-П!']);
      b.remove();sndTap();
      const wp=document.createElement('div');wp.className='word-pop';wp.textContent=w;
      $('fx').appendChild(wp);setTimeout(()=>wp.remove(),1350);
      say(w);
    });
    b.addEventListener('animationend',()=>b.remove());
    box.appendChild(b);
  };
  spawn();bubTm=setInterval(spawn,700);
}

/* ======================= ЗАПИСЬ ГОЛОСА ======================= */
const REC={list:[],i:0,mr:null,busy:false};
$('recEnhance').checked=S.voiceEnhance!==false;
$('recEnhance').onchange=()=>{S.voiceEnhance=$('recEnhance').checked;save()};
function openRec(){
  $('parent').hidden=true;
  REC.list=phraseList();REC.i=Math.min(REC.i,REC.list.length-1);
  show('recScr');renderRec();
}
function renderRec(msg){
  const p=REC.list[REC.i];if(!p)return;
  $('recEmoji').innerHTML=glyph(p.e);
  $('recWord').textContent=p.w;
  const done=REC.list.filter(x=>V.clips[x.k]).length;
  $('recCount').textContent=done+' из '+REC.list.length;
  $('recMsg').textContent=msg||(V.clips[p.k]?'Запись есть ✓ — можно перезаписать':'Скажите слово ласково и чётко (1–2 секунды)');
  $('recPlay').style.opacity=V.clips[p.k]?1:.3;$('recDel').style.opacity=V.clips[p.k]?1:.3;
}
async function recToggle(){
  let acquiredStream=null,processingContext=null;
  const p=REC.list[REC.i];if(!p)return;
  if(REC.mr&&REC.mr.state==='recording'){REC.mr.stop();return;}
  try{
    stopSpeak();
    const enhance=$('recEnhance').checked;
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:enhance,autoGainControl:enhance,channelCount:1}});
    acquiredStream=stream;let audioCtx=null,recordStream=stream;
    // WebAudio: фильтруем низкий гул, выравниваем громкость мягким компрессором.
    // Нативное шумоподавление браузера по возможности убирает фоновый шум.
    if(enhance&&window.AudioContext){
      try{
        audioCtx=new AudioContext();processingContext=audioCtx;await audioCtx.resume();
        const source=audioCtx.createMediaStreamSource(stream);
        const highpass=audioCtx.createBiquadFilter();highpass.type='highpass';highpass.frequency.value=105;highpass.Q.value=.7;
        const lowpass=audioCtx.createBiquadFilter();lowpass.type='lowpass';lowpass.frequency.value=7300;
        const comp=audioCtx.createDynamicsCompressor();comp.threshold.value=-28;comp.knee.value=22;comp.ratio.value=2.7;comp.attack.value=.008;comp.release.value=.22;
        const gain=audioCtx.createGain();gain.gain.value=1.18;
        const destination=audioCtx.createMediaStreamDestination();
        source.connect(highpass);highpass.connect(lowpass);lowpass.connect(comp);comp.connect(gain);gain.connect(destination);
        recordStream=destination.stream;
      }catch(e){if(audioCtx){audioCtx.close().catch(()=>{});audioCtx=null;}recordStream=stream;}
    }
    if(!window.MediaRecorder)throw Error('Браузер не поддерживает запись');
    const types=['audio/mp4','audio/webm;codecs=opus','audio/webm'];
    const mime=types.find(t=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t));
    const mr=new MediaRecorder(recordStream,mime?{mimeType:mime}:undefined);const chunks=[];
    REC.mr=mr;
    mr.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data);};
    mr.onstop=async()=>{
      stream.getTracks().forEach(t=>t.stop());
      recordStream.getTracks().forEach(t=>t.stop());
      if(audioCtx)audioCtx.close().catch(()=>{});
      $('recBtn').classList.remove('on');
      if(!chunks.length){renderRec('Ничего не записалось, попробуйте ещё раз');return;}
      try{await putClip(p.k,new Blob(chunks,{type:mr.mimeType||mime||'audio/webm'}));renderRec(enhance?'Сохранено ✓ · звук обработан':'Сохранено ✓');}
      catch(e){renderRec('Не удалось сохранить запись на этом устройстве');}
    };
    mr.start();$('recBtn').classList.add('on');$('recMsg').textContent=enhance?'Говорите… подавление шума включено':'Говорите…';
    setTimeout(()=>{if(mr.state==='recording')mr.stop();},3500);
  }catch(e){if(acquiredStream)acquiredStream.getTracks().forEach(t=>t.stop());if(processingContext)processingContext.close().catch(()=>{});renderRec('Не удалось записать голос. Проверьте разрешение микрофона и откройте приложение по HTTPS или localhost.');}
}

/* ======================= РЕЖИМЫ И БЛОКИРОВКА ======================= */
const fsOK=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);
async function reqFS(){
  try{
    const el=document.documentElement;
    if(el.requestFullscreen)await el.requestFullscreen({navigationUI:'hide'});
    else if(el.webkitRequestFullscreen)el.webkitRequestFullscreen();
  }catch(e){}
  try{if(navigator.keyboard&&navigator.keyboard.lock)await navigator.keyboard.lock();}catch(e){}
}
function inFS(){return !!(document.fullscreenElement||document.webkitFullscreenElement);}
function openModeSheet(){$('parent').hidden=true;$('sheetMin').textContent=S.sessionMin?S.sessionMin:'∞ (без лимита)';$('modeSheet').hidden=false;}
async function enterChild(){
  $('modeSheet').hidden=true;
  const p=reqFS();                       /* вызывается сразу — нужен жест пользователя */
  childMode=true;breakShown=false;document.body.classList.add('child');
  try{ctx();}catch(e){}
  try{if(navigator.wakeLock)wakeLock=await navigator.wakeLock.request('screen');}catch(e){}
  if(S.mic)await micStart();
  try{history.pushState({c:1},'');history.pushState({c:2},'');}catch(e){}
  sessionStart=Date.now();
  await p;
  startLesson();
}
function exitChild(){
  childMode=false;breakShown=false;document.body.classList.remove('child');
  if(L)L.tok++;
  stopWait();stopSpeak();micStop();
  $('breakOv').hidden=true;$('resume').hidden=true;$('gate').hidden=true;
  try{if(navigator.keyboard&&navigator.keyboard.unlock)navigator.keyboard.unlock();}catch(e){}
  try{if(wakeLock){wakeLock.release();wakeLock=null;}}catch(e){}
  try{if(inFS()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);}}catch(e){}
  renderHome();
}
/* страж: в детском режиме гасим всё лишнее */
function guard(e){if(childMode){e.preventDefault();e.stopPropagation();}}
['keydown','keyup','keypress','contextmenu','dragstart','selectstart','dblclick','gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,guard,true));
document.addEventListener('wheel',e=>{if(childMode)e.preventDefault();},{passive:false,capture:true});
document.addEventListener('touchmove',e=>{if(childMode)e.preventDefault();},{passive:false,capture:true});
document.addEventListener('touchstart',e=>{if(childMode&&e.touches&&e.touches.length>1)e.preventDefault();},{passive:false,capture:true});
window.addEventListener('beforeunload',e=>{if(childMode){e.preventDefault();e.returnValue='';return '';}});
window.addEventListener('popstate',()=>{if(childMode){try{history.pushState({c:3},'');}catch(e){}}});
document.addEventListener('fullscreenchange',()=>{
  if(childMode&&fsOK&&!inFS()&&!breakShown){stopSpeak();if(L)L.tok++;$('resume').hidden=false;}
});
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible'&&childMode&&!wakeLock&&navigator.wakeLock){navigator.wakeLock.request('screen').then(w=>{wakeLock=w;}).catch(()=>{});}
});
$('resumeBtn').onclick=async()=>{
  await reqFS();$('resume').hidden=true;
  if(L&&!breakShown&&$('lesson').hidden===false)showTask();
};
/* родительский замок */
let lockTm=null;
$('lockBtn').addEventListener('pointerdown',e=>{e.preventDefault();clearTimeout(lockTm);lockTm=setTimeout(openGate,3000*FAST());});
['pointerup','pointerleave','pointercancel'].forEach(ev=>$('lockBtn').addEventListener(ev,()=>clearTimeout(lockTm)));
function openGate(){
  const a=6+Math.floor(Math.random()*4),b=4+Math.floor(Math.random()*5),ans=a+b;
  $('gateQ').textContent=a+' + '+b;
  const set=new Set([ans]);while(set.size<4){const d=ans+(Math.floor(Math.random()*7)-3);if(d>0)set.add(d);}
  $('gateOpts').innerHTML='';
  shuffle([...set]).forEach(n=>{
    const bt=document.createElement('button');bt.className='btn';bt.textContent=n;
    bt.onclick=()=>{if(n===ans)exitChild();else $('gate').hidden=true;};
    $('gateOpts').appendChild(bt);
  });
  $('gate').hidden=false;
}
$('gateNo').onclick=()=>{$('gate').hidden=true;};

/* ======================= ПАНЕЛЬ ДЛЯ РОДИТЕЛЕЙ ======================= */
function fillVoiceList(){
  const sel=$('voiceSel');if(!sel)return;
  const list=ruVoices();
  sel.innerHTML='<option value="">Автоматически (лучший женский)</option>'+
    list.map(v=>'<option value="'+v.voiceURI.replace(/"/g,'&quot;')+'">'+v.name+(v.localService===false?' (онлайн)':'')+'</option>').join('');
  sel.value=S.voiceURI||'';
  $('voiceHint').textContent=list.length
    ?'Сейчас выбран: '+(V.voice?V.voice.name:'—')+'. Самые приятные голоса обычно «естественные»/Online/Premium (например, в браузере Edge на компьютере или на iPhone «Милена»). Если ничего не нравится — запишите свой голос.'
    :'На этом устройстве не найдено русских голосов. Попробуйте Chrome/Edge/Safari или запишите свой голос.';
}
function syncPanel(){
  document.querySelectorAll('.switch').forEach(s=>s.classList.toggle('on',!!S[s.dataset.set]));
  document.querySelectorAll('.stagebtn').forEach(b=>b.classList.toggle('on',+b.dataset.stage===S.stage));
  document.querySelectorAll('[data-sess]').forEach(b=>b.classList.toggle('on',+b.dataset.sess===(S.sessionMin||0)));
  $('rate').value=S.rate;$('rateVal').textContent=S.rate.toFixed(2);
  fillVoiceList();
  const names={};ITEMS.forEach(i=>names[i.e]=i.n);
  [SND,CORE,MOUTH,TAPS].forEach(arr=>arr.forEach(i=>{names[i.e]=i.w;}));
  const weak=Object.entries(S.missed).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,8)
    .map(([k])=>(names[k]?k+' '+names[k]:null)).filter(Boolean);
  $('weak').textContent=weak.length?'Слова, которые даются сложнее (будут встречаться чаще): '+weak.join(', '):'Слова, которые даются сложнее: пока нет данных.';
  $('statsTxt').textContent='Всего звёзд: '+S.stars+' · занятий: '+S.lessons;
  $('resetBtn').textContent='Сбросить прогресс';$('resetBtn').dataset.sure='';
}
document.querySelectorAll('[data-gear]').forEach(g=>{
  let tm=null;
  const start=e=>{e.preventDefault();tm=setTimeout(()=>{syncPanel();$('parent').hidden=false;},900);};
  const stop=()=>clearTimeout(tm);
  g.addEventListener('pointerdown',start);
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>g.addEventListener(ev,stop));
});
document.querySelectorAll('.switch').forEach(s=>s.addEventListener('click',async()=>{
  const k=s.dataset.set;S[k]=!S[k];
  if(k==='mic'){
    if(S.mic){const ok=await micStart();if(!ok){S.mic=false;alert_('Микрофон недоступен. Разрешите доступ в браузере (работает при открытии файла с устройства или по https).');}else micStop();}
  }
  save();syncPanel();
}));
function alert_(t){$('voiceHint').textContent=t;}
document.querySelectorAll('.stagebtn').forEach(b=>bindKidTap(b,()=>{S.stage=+b.dataset.stage;save();syncPanel();}));
document.querySelectorAll('[data-sess]').forEach(b=>bindKidTap(b,()=>{S.sessionMin=+b.dataset.sess;sessionStart=Date.now();save();syncPanel();}));
$('voiceSel').addEventListener('change',e=>{S.voiceURI=e.target.value;pickVoice();save();fillVoiceList();});
$('rate').addEventListener('input',e=>{S.rate=+e.target.value;$('rateVal').textContent=S.rate.toFixed(2);save();});
$('voiceTest').onclick=()=>{S.voiceOn=true;say('Привет! Давай поиграем! Ма-ма, па-па, дай!');};
$('recOpen').onclick=openRec;
$('panelChild').onclick=openModeSheet;
$('closeParent').onclick=()=>{$('parent').hidden=true;};
$('resetBtn').onclick=()=>{
  const b=$('resetBtn');
  if(b.dataset.sure){S=Object.assign(S,{stars:0,lessons:0,missed:{}});save();syncPanel();renderHome();}
  else{b.dataset.sure='1';b.textContent='Точно сбросить? Нажмите ещё раз';}
};

/* ======================= КНОПКИ ======================= */
$('playBtn').onclick=()=>{tone([[660,.08,.1]]);sessionStart=Date.now();startLesson();};
$('childBtn').onclick=openModeSheet;
$('roomBtn').onclick=()=>{tone([[660,.08,.1]]);openRoom();};
$('bubBtn').onclick=()=>{tone([[660,.08,.1]]);openBubbles();};
$('againBtn').onclick=()=>{startLesson();};
$('endHome').onclick=renderHome;
$('homeBtn').onclick=renderHome;
$('roomHome').onclick=renderHome;
$('bubHome').onclick=renderHome;
$('recHome').onclick=()=>{stopSpeak();renderHome();$('parent').hidden=false;syncPanel();};
$('sayBtn').onclick=()=>{if(L&&L.tasks[L.i])say(L.tasks[L.i].speak);};
$('sheetGo').onclick=enterChild;
$('sheetNo').onclick=()=>{$('modeSheet').hidden=true;};
$('recBtn').onclick=recToggle;
$('recPlay').onclick=()=>{const p=REC.list[REC.i];if(p&&V.clips[p.k])say(p.w);};
$('recDel').onclick=async()=>{const p=REC.list[REC.i];if(p&&V.clips[p.k]){await delClip(p.k);renderRec('Запись удалена');}};
$('recPrev').onclick=()=>{REC.i=(REC.i-1+REC.list.length)%REC.list.length;renderRec();};
$('recNext').onclick=()=>{REC.i=(REC.i+1)%REC.list.length;renderRec();};


/* =================== ЛЕСНОЕ ПРИКЛЮЧЕНИЕ МАТВЕЯ =================== */
const STORY_ALPHA=new Map();
function alphaAt(img,x,y){
 try{
  if(!img.complete||!img.naturalWidth)return false;
  let mask=STORY_ALPHA.get(img.src);
  if(!mask){const c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);mask={data:ctx.getImageData(0,0,c.width,c.height).data,w:c.width,h:c.height};STORY_ALPHA.set(img.src,mask);}
  let r=img.getBoundingClientRect();let ix=Math.floor((x-r.left)/r.width*mask.w);let iy=Math.floor((y-r.top)/r.height*mask.h);
  return ix>=0&&iy>=0&&ix<mask.w&&iy<mask.h&&mask.data[(iy*mask.w+ix)*4+3]>65;
 }catch(e){return true;}
}
const ADV={episode:0,index:0,locked:false,completed:false,mistakes:0,timer:null};
function storyStop(){clearTimeout(ADV.timer);ADV.timer=null;}
function storyEnter(which){
 storyStop();ADV.episode=which||0;ADV.index=0;ADV.completed=false;
 $('matveyBearStory').src=MATVEY_ART['bear-hero'];
 show('adventureScr');storyStep();
}
function storyEpisode(which){storyStop();stopSpeak();ADV.episode=which;ADV.index=0;ADV.completed=false;storyStep();}
function storyStep(){
 storyStop();ADV.locked=false;ADV.mistakes=0;ADV.stepStarted=Date.now();
 const e=STORY_EPISODES[ADV.episode],t=e.steps[ADV.index];
 $('storyAnimals').classList.toggle('on',ADV.episode===0);
 $('storyPlants').classList.toggle('on',ADV.episode===1);
 $('storyForest').style.backgroundImage='url("'+MATVEY_ART[e.forest]+'")';
 $('adventureStars').textContent=S.stars;
 $('storyNext').hidden=true;
 $('storyCards').hidden=false;$('storyChoicesTitle').hidden=false;
 $('storyFeedback').className='story-feedback';
 $('storyPrompt').textContent=t.text;
 $('storyProgress').textContent='Задание '+(ADV.index+1)+' из '+e.steps.length+' · '+(ADV.episode+1)+'/2';
 $('storyFeedback').textContent='Найди героя в лесу или на карточке!';
 $('storyChoicesTitle').textContent=ADV.episode===0?'🐾 Кто это?':'🌿 Что это?';
 const cards=$('storyCards');cards.innerHTML='';
 shuffle(t.choices).forEach(key=>{
  const b=document.createElement('button');b.className='story-card';b.dataset.storyKey=key;
  b.setAttribute('aria-label',STORY_LABELS[key]);
  b.innerHTML='<img draggable="false" src="'+MATVEY_ART[STORY_IMAGES[key]]+'" alt=""><span>'+STORY_LABELS[key]+'</span>';
  bindKidTap(b,()=>storyPick(key,b));
  cards.appendChild(b);
 });

 $('storyForest').onpointerdown=(ev)=>{
  if(ADV.locked)return;
  if(ev.pointerType==='mouse'&&ev.button!==0)return;
  ev.preventDefault();
  const items=[...$('storyHotspots').querySelectorAll('.story-hotspot')].reverse();
  const picked=items.find(b=>alphaAt(b.querySelector('img'),ev.clientX,ev.clientY));
  if(picked)storyPick(picked.dataset.storyKey,picked);
 };
 $('storyForest').onclick=(ev)=>{
  if(ADV.locked||ev.detail!==0)return; // only keyboard-triggered click
 };
 $('storyForest').querySelectorAll('.story-actor').forEach(n=>n.remove());
 const spots=$('storyHotspots');spots.innerHTML='';
 Object.entries(STORY_SPOTS[e.kind]).forEach(([key,pos])=>{
  const b=document.createElement('button');b.className='story-hotspot';b.style.left=pos[0]+'%';b.style.top=pos[1]+'%';
  b.style.width=(STORY_SIZES[key]||14)+'%';b.style.height=(e.kind==='animal'?36:36)+'%';
  b.setAttribute('aria-label',STORY_LABELS[key]||key);b.title=STORY_LABELS[key]||key;b.dataset.storyKey=key;
  const im=document.createElement('img');im.src=MATVEY_ART[STORY_IMAGES[key]];im.alt='';im.draggable=false;
  b.appendChild(im);b.onclick=e=>e.preventDefault();spots.appendChild(b);
 });
 if(S.voiceOn)say(t.text); // Озвучиваем начало каждого шага после нажатия пользователя.
}
function storyPick(key,btn){
 if(ADV.locked)return;
 const e=STORY_EPISODES[ADV.episode],t=e.steps[ADV.index];
 if(key!==t.id){
  ADV.mistakes++;
  $('storyFeedback').className='story-feedback';
  $('storyFeedback').textContent='Это '+(STORY_LABELS[key]||'другой герой')+'! Поищем '+t.label+'.';
  if(btn){btn.classList.remove('nope');void btn.offsetWidth;btn.classList.add('nope');}
  if(ADV.mistakes>1){const hint=$('storyCards').querySelector('[data-story-key="'+t.id+'"]');if(hint)hint.classList.add('hint');}
  sndTap();return;
 }
 ADV.locked=true;sndGood();S.stars++;S.adventureWins=(S.adventureWins||0)+1;save();
 $('adventureStars').textContent=S.stars;
 $('storyFeedback').className='story-feedback celebrate';
 $('storyFeedback').textContent='⭐ Ура! '+STORY_LABELS[key]+'! +1 звезда';
 $('storyPrompt').textContent=ADV.episode===0?'Молодец, Матвей! '+STORY_LABELS[key]+' говорит: '+t.sound+'!':'Молодец, Матвей! '+STORY_LABELS[key]+'! Повтори: '+t.sound+'!';
 document.querySelectorAll('[data-story-key="'+key+'"]').forEach(b=>{b.classList.add(b.classList.contains('story-hotspot')?'found':'right');});
 $('storyForest').classList.remove('sway');void $('storyForest').offsetWidth;$('storyForest').classList.add('sway');
 // Подсветка выбранного объекта вместо большой копии поверх соседей.
 animateStoryFind(key);burst();say(ADV.episode===0?STORY_LABELS[key]+' говорит '+t.sound:t.sound);
 $('storyNext').hidden=false;
 $('storyNext').disabled=true;
 const readyIn=Math.max(0,MIN_STEP_MS-(Date.now()-ADV.stepStarted));
 const ep=ADV.episode,idx=ADV.index;
 ADV.timer=setTimeout(()=>{if(ADV.episode===ep&&ADV.index===idx&&ADV.locked)$('storyNext').disabled=false;},readyIn);
 $('storyNext').textContent=ADV.index===e.steps.length-1?(ADV.episode===0?'В мир растений ➜':'Финиш! ⭐'):'Дальше ➜';
}
function storyDone(){
 ADV.completed=true;storyStop();
 $('storyHotspots').innerHTML='';$('storyCards').hidden=true;$('storyChoicesTitle').hidden=true;
 $('storyFeedback').className='story-feedback celebrate';
 $('storyFeedback').textContent='🌟 Все задания выполнены!';
 $('storyPrompt').textContent='Ты молодец, Матвей! Волшебный лес радуется!';
 $('storyProgress').textContent='Приключение пройдено';
 $('storyNext').textContent='Сыграть ещё ↻';$('storyNext').hidden=false;
 sndEnd();burst();say('Ура, Матвей! Ты молодец!');
}
function storyNext(){
 stopSpeak();if(ADV.completed){storyEpisode(0);return;}
 if(!ADV.locked||$('storyNext').disabled||Date.now()-ADV.stepStarted<MIN_STEP_MS)return;
 const e=STORY_EPISODES[ADV.episode];
 if(ADV.index<e.steps.length-1){ADV.index++;storyStep();return;}
 if(ADV.episode===0){storyEpisode(1);return;}
 storyDone();
}

// Эффект правильного ответа: персонаж подпрыгивает, появляется облачко со звуком.
// Без автоматической смены задания: сохраняется кнопка «Дальше» и таймер v3.
function animateStoryFind(key){
 const scene=$('storyForest'),hot=scene.querySelector('.story-hotspot[data-story-key="'+key+'"]');
 if(!scene||!hot)return;
 scene.querySelectorAll('.story-speech,.story-celebration-spark').forEach(n=>n.remove());
 const bounds=scene.getBoundingClientRect(),rect=hot.getBoundingClientRect();
 const x=(rect.left+rect.width/2-bounds.left)/bounds.width*100;
 const y=(rect.top+rect.height/2-bounds.top)/bounds.height*100;
 const e=STORY_EPISODES[ADV.episode],t=e.steps[ADV.index];
 const bubble=document.createElement('div');
 bubble.className='story-speech';bubble.textContent=e.kind==='animal'?t.sound+'!':'⭐ '+STORY_LABELS[key]+'!';
 bubble.style.left=Math.max(16,Math.min(84,x))+'%';
 bubble.style.top=Math.max(23,Math.min(85,y-9))+'%';
 scene.appendChild(bubble);setTimeout(()=>bubble.remove(),2300);
 for(let i=0;i<6;i++){
  const p=document.createElement('span');p.className='story-celebration-spark';p.textContent=i%2?'✦':'⭐';
  p.style.left=Math.max(4,Math.min(92,x+(i%3-1)*11))+'%';
  p.style.top=Math.max(8,Math.min(91,y+(Math.floor(i/3)-.5)*20))+'%';
  p.style.animationDelay=(i*75)+'ms';
  scene.appendChild(p);setTimeout(()=>p.remove(),1700);
 }
}


/* === Монтессори-вдохновлённая мастерская Матвея ===
   Каждое задание изолирует один признак, позволяет исправиться и не переключается само.
   Перетаскивание, касание по предмету + касание по месту, клавиатура.
*/
const M={mode:'colors',done:new Set(),selected:null,started:0,finished:false,drag:null,timer:null,round:0,items:[]};
function mSvg(id,ghost){
 const shape=id==='circle'?'<circle cx="50" cy="49" r="35"/>':id==='square'?'<rect x="17" y="16" width="66" height="66" rx="12"/>':'<path d="M50 12 L90 82 Q90 87 84 87 L16 87 Q10 87 12 82 Z"/>';
 return '<svg class="m-shape-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+
 '<defs><linearGradient id="mwood'+id+(ghost?'g':'')+'" x1="0" x2="1" y1="0" y2="1"><stop stop-color="'+(ghost?'#99633e':'#fff2c0')+'"/><stop offset=".55" stop-color="'+(ghost?'#99633e':'#e5b16a')+'"/><stop offset="1" stop-color="'+(ghost?'#99633e':'#a66e3b')+'"/></linearGradient></defs><g fill="url(#mwood'+id+(ghost?'g':'')+')" stroke="'+(ghost?'#8f5c3b':'#9c6139')+'" stroke-width="3">'+shape+'</g>'+
 (ghost?'':'<path d="M33 32 Q50 20 68 36" stroke="#fff7d5" stroke-width="5" stroke-linecap="round" fill="none" opacity=".6"/>')+'</svg>';
}
function mToyContent(item){
 if(M.mode==='colors')return '<span class="m-ball '+item.group+'" aria-hidden="true"></span>';
 if(M.mode==='shapes')return mSvg(item.group,false);
 return '<span class="m-food" aria-hidden="true">'+item.emoji+'</span>';
}
function mSetMessage(text,good=false){const el=$('mMessage');el.textContent=text;el.classList.toggle('good',good);}
function mClearTimer(){clearTimeout(M.timer);M.timer=null;}
function mReset(mode){
 mClearTimer();mClearDrag();stopSpeak();
 M.mode=mode;M.done=new Set();M.selected=null;M.finished=false;M.started=Date.now();M.round++;
 const c=M_CONTENT[mode];$('mHeading').textContent=c.name;$('mInstruction').textContent=c.text;
 $('mBoardTitle').textContent=c.board;$('mTrayTitle').textContent=c.tray;
 $('mNext').hidden=true;$('mNext').disabled=true;$('mStars').textContent=S.stars;
 document.querySelectorAll('[data-m-mode]').forEach(btn=>{btn.classList.toggle('active',btn.dataset.mMode===mode);btn.setAttribute('aria-pressed',String(btn.dataset.mMode===mode));});
 if(mode==='colors')M.items=[{id:'r1',group:'red'},{id:'y1',group:'yellow'},{id:'b1',group:'blue'},
                                     {id:'b2',group:'blue'},{id:'r2',group:'red'},{id:'y2',group:'yellow'}];
 else if(mode==='shapes')M.items=[{id:'t1',group:'triangle'},{id:'c1',group:'circle'},{id:'s1',group:'square'}];
 else M.items=[{id:'f1',group:'rabbit',emoji:'🥕'},{id:'f2',group:'bear',emoji:'🍯'},{id:'f3',group:'duck',emoji:'🌾'}];
 mRender();mSetMessage('Можно перетащить или выбрать предмет и его место.');
 if(S.voiceOn)say(c.prompt);
}
function mTargets(){
 let groups=M.mode==='colors'?M_COLORS:M.mode==='shapes'?M_SHAPES:M_FRIENDS;
 return groups.map(item=>{
 const placed=M.items.filter(x=>M.done.has(x.id)&&x.group===item.id);
 let visual='';
 if(M.mode==='colors')visual='<div class="m-bowl '+item.id+'">'+placed.map(x=>'<span class="m-mini-ball" style="background:radial-gradient(circle at 30% 20%,#fff9,'+item.paint+' 45%,#3334)"></span>').join('')+'</div>';
 if(M.mode==='shapes')visual='<div class="m-wood-slot '+(placed.length?'has-piece':'')+'">'+mSvg(item.id,!placed.length)+'</div>';
 if(M.mode==='friends')visual='<img class="m-animal-img '+(placed.length?'m-fed':'')+'" src="'+MATVEY_ART[item.art]+'" alt="" draggable="false">'+(placed.length?'<span class="m-animal-heart">♥</span>':'');
 return '<button class="m-target '+(placed.length?'m-complete':'')+'" data-m-target="'+item.id+'" aria-label="'+item.label+'">'+
 '<div class="m-visual">'+visual+'</div><span class="m-target-label">'+item.label+'</span>'+
 (M.mode==='colors'?'<span class="m-count">'+placed.length+' / 2</span>':'')+'</button>';
 }).join('');
}
function mRender(){
 $('mTargets').innerHTML=mTargets();
 $('mToys').innerHTML=M.items.map(item=>'<button class="m-toy '+(M.done.has(item.id)?'m-used':M.selected===item.id?'m-picked':'')+'" '+
 'data-m-toy="'+item.id+'" aria-label="'+(M.mode==='colors'?({red:'Красный шарик',yellow:'Жёлтый шарик',blue:'Синий шарик'}[item.group]):M.mode==='shapes'?M_SHAPES.find(x=>x.id===item.group).label:'Угощение для '+M_FRIENDS.find(x=>x.id===item.group).label)+'" '+(M.done.has(item.id)?'disabled':'')+'>'+mToyContent(item)+'</button>').join('');
 const total=M.items.length;$('mProgress').textContent='Готово: '+M.done.size+' из '+total;
 $('mToys').querySelectorAll('.m-toy').forEach(node=>mInstallDrag(node));
 $('mTargets').querySelectorAll('.m-target').forEach(node=>{
  bindKidTap(node,()=>mDropAt(node.dataset.mTarget,node));
 });
}
function mPick(id){
 if(M.done.has(id)||M.finished)return;
 M.selected=id;
 $('mToys').querySelectorAll('.m-toy').forEach(b=>b.classList.toggle('m-picked',b.dataset.mToy===id));
 const item=M.items.find(x=>x.id===id);
 if(item)mSetMessage('Теперь найди подходящее место для '+(M.mode==='shapes'?'фигуры':M.mode==='colors'?'шарика':'угощения')+'.');
}
function mInstallDrag(node){
 let startX=0,startY=0,pid=null,moved=false;
 node.addEventListener('pointerdown',ev=>{
  if(M.done.has(node.dataset.mToy)||M.finished||(ev.pointerType==='mouse'&&ev.button!==0))return;
  ev.preventDefault();mClearDrag();mPick(node.dataset.mToy);
  pid=ev.pointerId;startX=ev.clientX;startY=ev.clientY;moved=false;
  try{node.setPointerCapture(pid);}catch(e){}
  M.drag={id:node.dataset.mToy,node,ghost:null,pid};
 },{passive:false});
 node.addEventListener('pointermove',ev=>{
  if(!M.drag||M.drag.node!==node||M.drag.pid!==ev.pointerId)return;
  if(!moved&&Math.hypot(ev.clientX-startX,ev.clientY-startY)<8)return;
  moved=true;
  if(!M.drag.ghost){
    const g=document.createElement('div');g.className='m-drag-ghost';g.innerHTML=node.innerHTML;document.body.appendChild(g);M.drag.ghost=g;
  }
  M.drag.ghost.style.left=ev.clientX+'px';M.drag.ghost.style.top=ev.clientY+'px';
  $('mTargets').querySelectorAll('.m-target').forEach(target=>{
   const r=target.getBoundingClientRect();target.classList.toggle('m-hover',ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom);
  });
 },{passive:false});
 node.addEventListener('pointerup',ev=>{
  if(!M.drag||M.drag.node!==node||M.drag.pid!==ev.pointerId)return;
  if(moved){
   const target=[...$('mTargets').querySelectorAll('.m-target')].find(el=>{
    const r=el.getBoundingClientRect();return ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom;
   });
   const targetId=target&&target.dataset.mTarget;
   mClearDrag();
   if(targetId)mDropAt(targetId,target);
  }else mClearDrag();
 });
 node.addEventListener('pointercancel',()=>mClearDrag());
 node.addEventListener('click',ev=>{ev.preventDefault();if(!M.done.has(node.dataset.mToy))mPick(node.dataset.mToy);});
 node.addEventListener('contextmenu',ev=>ev.preventDefault());
}
function mClearDrag(){
 if(M.drag&&M.drag.ghost)M.drag.ghost.remove();M.drag=null;
 $('mTargets').querySelectorAll('.m-target').forEach(t=>t.classList.remove('m-hover'));
}
function mDropAt(group,target){
 if(!M.selected||M.finished)return;
 const item=M.items.find(x=>x.id===M.selected);if(!item||M.done.has(item.id))return;
 if(item.group!==group){
  sndTap();mSetMessage('Почти! Попробуем ещё — найди подходящее место.');
  target.classList.remove('m-nope');void target.offsetWidth;target.classList.add('m-nope');return;
 }
 M.done.add(item.id);M.selected=null;sndGood();S.stars++;S.montessoriWins=(S.montessoriWins||0)+1;save();
 $('mStars').textContent=S.stars;mRender();
 const updated=$('mTargets').querySelector('[data-m-target="'+group+'"]');
 if(updated)updated.classList.add('m-complete');
 mFireworks(updated||$('mWorld'));
 const word=M.mode==='colors'?({red:'Красный',yellow:'Жёлтый',blue:'Синий'}[group]):M.mode==='shapes'?M_SHAPES.find(x=>x.id===group).label:M_FRIENDS.find(x=>x.id===group).label;
 mSetMessage('⭐ Получилось! '+word+'! Молодец, Матвей!',true);
 if(S.voiceOn)say(M.mode==='friends'?'Ам-ам! Спасибо!':'Молодец! '+word+'!');
 if(M.done.size===M.items.length)mFinish();
}
function mFireworks(anchor){
 const outer=$('mWorld'), a=anchor.getBoundingClientRect(),b=outer.getBoundingClientRect();
 for(let i=0;i<7;i++){
  const el=document.createElement('span');el.className='m-confetti';el.textContent=['⭐','✦','✨','🌟'][i%4];
  el.style.left=Math.max(8,Math.min(91,(a.left+a.width/2-b.left)/b.width*100+(i-3)*5))+'%';
  el.style.top=Math.max(8,Math.min(84,(a.top+a.height/2-b.top)/b.height*100))+'%';
  el.style.animationDelay=i*65+'ms';outer.appendChild(el);setTimeout(()=>el.remove(),1800);
 }
}
function mFinish(){
 M.finished=true;mSetMessage('🎉 Всё на месте! Хочешь попробовать ещё или открыть новую игру?',true);
 const btn=$('mNext');btn.hidden=false;btn.disabled=true;btn.textContent=M.mode==='friends'?'Сыграть ещё ↻':'Новая игра ➜';
 const round=M.round;
 M.timer=setTimeout(()=>{if(M.round===round&&M.finished)btn.disabled=false;},Math.max(0,3000-(Date.now()-M.started)));
}
function mOpen(){show('montessoriScr');$('mBear').src=MATVEY_ART['bear-hero'];mReset('colors');}
$('montessoriBtn').onclick=mOpen;
$('mHome').onclick=()=>{mClearTimer();mClearDrag();stopSpeak();renderHome();};
document.querySelectorAll('[data-m-mode]').forEach(b=>bindKidTap(b,()=>mReset(b.dataset.mMode)));
$('mReplay').onclick=()=>say(M_CONTENT[M.mode].prompt);
$('mRepeat').onclick=()=>mReset(M.mode);
$('mNext').onclick=()=>{
 if(!M.finished||$('mNext').disabled||Date.now()-M.started<3000)return;
 mReset(M_MODES[(M_MODES.indexOf(M.mode)+1)%M_MODES.length]);
 $('mScroll').scrollTo({top:0,behavior:'smooth'});
};
window.__montessori={open:mOpen,state:()=>({mode:M.mode,completed:M.done.size,total:M.items.length,selected:M.selected,finished:M.finished}),pick:id=>mPick(id),drop:g=>mDropAt(g,$('mTargets').querySelector('[data-m-target="'+g+'"]'))};


/* ---- V6 · самостоятельные анимированные живые карточки ---- */
let LIVE_TOKEN=0,liveActive=null,liveIndex=0;
function liveFocus(index){
 const cards=[...$('liveCards').querySelectorAll('.v6-live-card')];
 if(!cards.length){$('liveNavigation').hidden=true;$('liveThumbs').replaceChildren();return;}
 $('liveNavigation').hidden=false;liveIndex=(index+cards.length)%cards.length;
 cards.forEach((c,i)=>c.hidden=i!==liveIndex);
 $('liveCounter').textContent=(liveIndex+1)+' / '+cards.length;
 $('liveThumbs').replaceChildren();
 cards.forEach((c,i)=>{const b=document.createElement('button');b.className='live-thumb';b.setAttribute('aria-label',c.getAttribute('aria-label'));b.setAttribute('aria-pressed',String(i===liveIndex));const img=c.querySelector('img').cloneNode();img.alt='';b.append(img);b.onclick=()=>{stopSpeak();liveFocus(i)};$('liveThumbs').append(b)});
}
$('livePrev').onclick=()=>{stopSpeak();liveFocus(liveIndex-1)};
$('liveNext').onclick=()=>{stopSpeak();liveFocus(liveIndex+1)};
function liveOpen(){stopSpeak();show('liveScr');$('liveBear').src=MATVEY_ART['bear-hero'];$('liveStars').textContent=S.stars;
 const box=$('liveCards');box.innerHTML='';LIVE_DATA.filter(x=>!cardFiltered(x.key)).forEach(x=>{
  const btn=document.createElement('button');btn.type='button';btn.className='v6-live-card';btn.dataset.liveKey=x.key;
  btn.setAttribute('aria-label',x.word+' — '+x.sound);btn.innerHTML='<span class="v6-star a">⭐</span><span class="v6-star b">✨</span><div class="v6-speech">'+x.sound+'!</div><img class="v6-animal" alt="'+x.word+'" draggable="false" src="'+MATVEY_ART['animal-'+x.key]+'"><span class="v6-card-title">'+x.word+'</span>';
  bindKidTap(btn,()=>liveSpeak(x,btn));box.appendChild(btn);
 });
 liveIndex=0;liveFocus(0);
 if(!box.children.length)box.innerHTML='<p class="v6-soft-note">Все карточки скрыты в настройках родителей. Откройте ⚙️ → Проверка карточек.</p>';
 $('liveInstruction').textContent='Послушай, кто как говорит!';if(S.voiceOn)say('Привет! Нажми на животное. Послушай и повтори!');
}
function liveSpeak(x,btn){
 LIVE_TOKEN++;const tok=LIVE_TOKEN;stopSpeak();sndTap();
 if(liveActive&&liveActive!==btn)liveActive.classList.remove('is-talking');liveActive=btn;
 btn.classList.remove('is-talking');void btn.offsetWidth;btn.classList.add('is-talking');
 $('liveInstruction').textContent=x.word+'! '+x.sound+'! Попробуй повторить!';
 say(reviewPhrase(x));setTimeout(()=>{if(tok===LIVE_TOKEN){btn.classList.remove('is-talking');}},2150);
}
$('liveBtn').onclick=liveOpen;$('liveHome').onclick=()=>{LIVE_TOKEN++;stopSpeak();renderHome()};$('liveRepeat').onclick=()=>say('Нажми на животное, послушай и повтори!');


/* v10 · локальная редакторская проверка карточек: без базы, без отправки данных */
S.reviewCards=S.reviewCards&&typeof S.reviewCards==='object'?S.reviewCards:{};
function cardReview(key){return S.reviewCards[key]||{};}
function cardFiltered(key){return cardReview(key).status==='hidden';}
function reviewPhrase(x){return (cardReview(x.key).voice||'').trim()||x.voice;}
function reviewEntries(){
 const items=LIVE_DATA.map(x=>({key:x.key,word:x.word,voice:x.voice,img:'animal-'+x.key}));
 Object.keys(STORY_LABELS).forEach(k=>{if(items.some(x=>x.key===k))return;items.push({key:k,word:STORY_LABELS[k],voice:'',img:STORY_IMAGES[k]});});
 return items;
}
function reviewRender(){
 const host=$('reviewList');if(!host)return;
 const term=($('reviewSearch').value||'').toLowerCase().trim(),filter=$('reviewFilter').value;
 const entries=reviewEntries().filter(x=>(x.word+' '+x.key).toLowerCase().includes(term)&& (filter==='all'||(cardReview(x.key).status||'new')===filter));
 const count=reviewEntries();$('reviewSummary').textContent=count.length+' карточек · ⚑ '+count.filter(x=>cardReview(x.key).status==='flagged').length+' на проверке · 🙈 '+count.filter(x=>cardReview(x.key).status==='hidden').length+' скрыто';
 host.textContent='';
 entries.forEach(x=>{
  const r=cardReview(x.key),item=document.createElement('div');item.className='review-card is-'+(r.status||'new');
  const top=document.createElement('div');top.className='review-top';
  const img=document.createElement('img');img.src=MATVEY_ART[x.img];img.alt='';const title=document.createElement('span');title.textContent=x.word;
  top.append(img,title);item.append(top);
  const status=document.createElement('select');status.setAttribute('aria-label','Статус '+x.word);
  [['new','Без пометки'],['ok','✓ Проверена'],['flagged','⚑ Неправильный звук / рисунок'],['hidden','🙈 Скрыть из живых карточек']].forEach(([value,label])=>{const opt=document.createElement('option');opt.value=value;opt.textContent=label;status.append(opt)});status.value=r.status||'new';
  status.onchange=()=>{const old=cardReview(x.key);S.reviewCards[x.key]={...old,status:status.value};save();reviewRender()};item.append(status);
  const voice=document.createElement('input');voice.type='text';voice.placeholder=x.voice?'Своя фраза озвучки':'Примечание: текст озвучки';voice.value=r.voice||'';voice.setAttribute('aria-label','Своя фраза '+x.word);voice.addEventListener('change',()=>{S.reviewCards[x.key]={...cardReview(x.key),voice:voice.value.slice(0,150)};save()});item.append(voice);
  const note=document.createElement('textarea');note.placeholder='Что исправить? Например: неправильно говорит МУ-МУ';note.value=r.note||'';note.setAttribute('aria-label','Замечание '+x.word);note.addEventListener('change',()=>{S.reviewCards[x.key]={...cardReview(x.key),note:note.value.slice(0,500)};save()});item.append(note);
  const acts=document.createElement('div');acts.className='review-actions';const test=document.createElement('button');test.type='button';test.textContent='🔊 Проверить';test.onclick=()=>say(voice.value.trim()||x.voice||x.word);
  const flag=document.createElement('button');flag.type='button';flag.textContent='⚑ Отметить';flag.onclick=()=>{S.reviewCards[x.key]={...cardReview(x.key),status:'flagged',note:note.value.slice(0,500),voice:voice.value.slice(0,150)};save();reviewRender()};acts.append(test,flag);item.append(acts);host.append(item);
 });
 if(!entries.length)host.textContent='Карточки по этому фильтру не найдены.';
}
$('reviewSearch').addEventListener('input',reviewRender);
$('reviewFilter').addEventListener('change',reviewRender);
$('reviewDetails').addEventListener('toggle',()=>{if($('reviewDetails').open)reviewRender()});
$('reviewExport').onclick=()=>{
 const json=JSON.stringify({format:'matvey-cards-v1',exportedAt:new Date().toISOString(),reviews:S.reviewCards},null,2);
 const a=document.createElement('a');const url=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.href=url;a.download='matvey-card-review.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);
};
$('reviewImportBtn').onclick=()=>$('reviewImport').click();
$('reviewImport').onchange=async e=>{
 const f=e.target.files&&e.target.files[0];if(!f)return;
 try{if(f.size>150000)throw Error('Слишком большой файл');const data=JSON.parse(await f.text());if(data.format!=='matvey-cards-v1'||!data.reviews||typeof data.reviews!=='object')throw Error('Неверный формат');
  const allowed=new Set(reviewEntries().map(x=>x.key)),next={};for(const [key,r] of Object.entries(data.reviews)){if(!allowed.has(key)||!r||typeof r!=='object')continue;next[key]={status:['new','ok','flagged','hidden'].includes(r.status)?r.status:'new',voice:String(r.voice||'').slice(0,150),note:String(r.note||'').slice(0,500)}}
  S.reviewCards={...S.reviewCards,...next};save();reviewRender();alert('Импортировано карточек: '+Object.keys(next).length);
 }catch(err){alert('Не удалось импортировать: '+err.message)}finally{e.target.value=''}
};
window.__matveyReview={get:()=>structuredClone(S.reviewCards),set:(key,data)=>{S.reviewCards[key]={...data};save();reviewRender()}};

/* ---- V6 · маленькие действия в волшебной мастерской ---- */
const MAGIC={mode:'house',done:new Set(),started:0,finished:false,round:0,timer:null};
const MAGIC_TYPES={
 house:{name:'Откроем домики!',sub:'Нажми на дверь, скажи «ОТКРОЙ» и посмотри, кто живёт внутри.',speech:'Открой домик. Ку ку! Кто там?'},
 garden:{name:'Волшебный сад!',sub:'Нажми на горшочек: кап-кап! Вырасти красивый цветок.',speech:'Давай польём цветы. Кап кап! Расти, цветочек!'},
 tower:{name:'Собери пирамидку!',sub:'Сначала большое колечко, потом среднее и маленькое.',speech:'Собираем пирамидку. Большое, среднее, маленькое!'}
};
function magicClear(){clearTimeout(MAGIC.timer);MAGIC.timer=null;}
function magicOpen(mode='house'){show('magicScr');$('magicBear').src=MATVEY_ART['bear-hero'];magicReset(mode)}
function magicReset(mode){
 magicClear();stopSpeak();MAGIC.mode=mode;MAGIC.started=Date.now();MAGIC.done=new Set();MAGIC.finished=false;MAGIC.round++;
 const d=MAGIC_TYPES[mode];$('magicInstruction').textContent=d.name;$('magicSub').textContent=d.sub;$('magicStars').textContent=S.stars;
 $('magicNext').hidden=true;$('magicNext').disabled=true;$('magicStatus').textContent='Нажми на предмет и попробуй сказать слово!';$('magicStatus').classList.remove('good');
 document.querySelectorAll('[data-magic-mode]').forEach(b=>{b.classList.toggle('on',b.dataset.magicMode===mode);b.setAttribute('aria-pressed',String(b.dataset.magicMode===mode));});
 const sc=$('magicScene');sc.innerHTML='';
 if(mode==='house'){
   const names=[{id:'rabbit',name:'Зайчик',sound:'ПРЫГ-ПРЫГ',roof:['#fda14e','#eb6139']},{id:'duck',name:'Уточка',sound:'КРЯ-КРЯ',roof:['#ffe476','#e4a12b']},{id:'cow',name:'Коровка',sound:'МУ-МУ',roof:['#a7a5ff','#6b68df']}];
   const row=document.createElement('div');row.className='magic-row';
   names.forEach((a,i)=>{const btn=document.createElement('button');btn.className='magic-house';btn.dataset.magicId=a.id;btn.style.setProperty('--roofa',a.roof[0]);btn.style.setProperty('--roofb',a.roof[1]);btn.setAttribute('aria-label','Открой домик: '+a.name);
    btn.innerHTML='<div class="magic-roof"></div><div class="magic-house-body"><img class="magic-reveal" draggable="false" src="'+MATVEY_ART['animal-'+a.id]+'"><div class="magic-door"></div></div><div class="magic-label">ДОМИК '+(i+1)+'</div>';
    bindKidTap(btn,()=>magicHouse(a,btn));row.appendChild(btn);});sc.appendChild(row);
 }else if(mode==='garden'){
   const names=[{id:'pink',flower:'🌸',number:'1'},{id:'yellow',flower:'🌼',number:'2'},{id:'red',flower:'🌺',number:'3'}];
   const row=document.createElement('div');row.className='magic-garden';names.forEach(a=>{const btn=document.createElement('button');btn.className='magic-plant';btn.dataset.magicId=a.id;btn.setAttribute('aria-label','Полить цветок '+a.number);
    btn.innerHTML='<div class="magic-water"><span>💦</span></div><div class="magic-flower"><div class="magic-stem"></div><span class="magic-blossom" style="font-size:clamp(65px,12vw,110px)">'+a.flower+'</span></div><div class="magic-pot">'+a.number+'</div>';
    bindKidTap(btn,()=>magicPlant(a,btn));row.appendChild(btn);});sc.appendChild(row);
 }else{
   const stack=document.createElement('div');stack.className='magic-stack';stack.innerHTML='<div class="magic-tower-visual" id="magicTower"><div class="magic-tower-base"></div></div><div class="magic-ring-tray" id="magicRings"></div>';sc.appendChild(stack);
   const list=[{id:'big',label:'Большое!',speech:'Большое колечко!'},{id:'mid',label:'Среднее!',speech:'Среднее колечко!'},{id:'small',label:'Маленькое!',speech:'Маленькое колечко!'}];
   const box=$('magicRings');list.forEach(a=>{const btn=document.createElement('button');btn.className='magic-ring-toy';btn.dataset.magicId=a.id;btn.setAttribute('aria-label',a.label);btn.innerHTML='<span class="magic-ring '+a.id+'"></span>';bindKidTap(btn,()=>magicRing(a,btn));box.appendChild(btn);});
 }
 magicProgress();if(S.voiceOn)say(d.speech);
}
function magicHouse(a,el){if(MAGIC.done.has(a.id)||MAGIC.finished)return;MAGIC.done.add(a.id);el.classList.add('open');
 el.querySelector('.magic-label').textContent=a.name;magicWin('КУ-КУ! '+a.name+'! '+a.sound+'!',a.sound+'!');}
function magicPlant(a,el){if(MAGIC.done.has(a.id)||MAGIC.finished)return;MAGIC.done.add(a.id);el.classList.add('grown','splash');
 setTimeout(()=>el.classList.remove('splash'),950);magicWin('КАП-КАП! Цветочек растёт!','Кап кап! Цветочек!');}
function magicRing(a,el){if(MAGIC.finished||MAGIC.done.has(a.id))return;
 const expected=['big','mid','small'][MAGIC.done.size];if(a.id!==expected){el.classList.remove('nope');void el.offsetWidth;el.classList.add('nope');$('magicStatus').textContent='Попробуй сначала '+(MAGIC.done.size===0?'БОЛЬШОЕ':'следующее')+' колечко!';sndTap();return;}
 MAGIC.done.add(a.id);el.disabled=true;const ring=document.createElement('div');ring.className='magic-ring '+a.id;
 $('magicTower').insertBefore(ring,$('magicTower').firstElementChild);magicWin(a.label,a.speech);}
function magicWin(message,speech){sndGood();S.stars++;S.magicWins=(S.magicWins||0)+1;save();$('magicStars').textContent=S.stars;
 $('magicStatus').textContent='⭐ '+message;$('magicStatus').classList.add('good');burst();if(S.voiceOn)say(speech);magicProgress();if(MAGIC.done.size===3)magicFinish();}
function magicProgress(){$('magicProgress').textContent='Готово: '+MAGIC.done.size+' из 3';}
function magicFinish(){MAGIC.finished=true;$('magicStatus').textContent='🎉 Отлично! Всё получилось! Поиграем ещё?';
 $('magicNext').hidden=false;$('magicNext').disabled=true;const round=MAGIC.round;
 MAGIC.timer=setTimeout(()=>{if(MAGIC.round===round&&MAGIC.finished)$('magicNext').disabled=false;},Math.max(0,3000-(Date.now()-MAGIC.started)));
}
$('magicBtn').onclick=()=>magicOpen('house');$('magicHome').onclick=()=>{magicClear();stopSpeak();renderHome()};
$('magicRepeat').onclick=()=>say(MAGIC_TYPES[MAGIC.mode].speech);
$('magicReset').onclick=()=>magicReset(MAGIC.mode);
$('magicNext').onclick=()=>{if(!MAGIC.finished||$('magicNext').disabled||Date.now()-MAGIC.started<3000)return;const n=['house','garden','tower'];magicReset(n[(n.indexOf(MAGIC.mode)+1)%n.length]);$('magicScene').scrollIntoView({block:'nearest',behavior:'smooth'});};
document.querySelectorAll('[data-magic-mode]').forEach(b=>bindKidTap(b,()=>magicReset(b.dataset.magicMode)));
window.__magic={open:magicOpen,state:()=>({mode:MAGIC.mode,done:MAGIC.done.size,finished:MAGIC.finished}),act:id=>{$('magicScene').querySelector('[data-magic-id="'+id+'"]').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}))}};

/* === V9: Лесная школа. 10 независимых мини-игр с речевыми подсказками. === */
const D={mode:null,round:0,data:null,started:0,solved:false,finished:false,stamp:0,selected:null,matched:new Set(),deck:[],count:0,sequence:0,cleared:new Set(),timer:null,errors:0};
const dGame=id=>D_GAMES.find(x=>x.id===id);
const dArt=id=>MATVEY_ART[id]||MATVEY_ART['animal-'+id];
const dPicture=id=>'<img src="'+dArt(id)+'" alt="" draggable="false">';
function dTile(id,label='',cls=''){
 const pic=String(id).startsWith('emoji:')?'<span class="disc-emoji">'+id.slice(6)+'</span>':dPicture(id);
 return '<span class="disc-picture">'+pic+'</span>'+(label?'<strong>'+label+'</strong>':'');
}
function dButton(id,label='',cls='',data=''){
 return '<button type="button" class="disc-tile '+cls+'" data-d-choice="'+data+'" aria-label="'+(label||data)+'">'+dTile(id,label)+'</button>';
}
function dStatus(text,good=false){const n=$('discStatus');n.textContent=text;n.classList.toggle('good',good);}
function dPlayPhrase(text){if(S.voiceOn)say(text)}
function dAnimateError(btn){if(btn){btn.classList.remove('wrong');void btn.offsetWidth;btn.classList.add('wrong');}D.errors++;dStatus('Попробуй ещё — у тебя получится! 🐾');}
function dRenderMenu(){
 $('discGrid').innerHTML=D_GAMES.map((g,i)=>'<button class="disc-entry" data-d-game="'+g.id+'" aria-label="Открыть игру '+g.name+'"><span class="disc-index">'+(i+1)+'/'+D_GAMES.length+'</span>'+(Array.isArray(S.discoveryDone)&&S.discoveryDone.includes(g.id)?'<span class="disc-mark">✓</span>':'')+'<div class="disc-picture">'+(g.icon?dPicture(g.icon):'<span>'+g.emoji+'</span>')+'</div><strong>'+g.name+'</strong><small>'+g.tag+'</small></button>').join('');
 $('discGrid').querySelectorAll('[data-d-game]').forEach(b=>bindKidTap(b,()=>dStart(b.dataset.dGame)));
}
function dCatalog(){clearTimeout(D.timer);D.stamp++;D.mode=null;D.finished=false;stopSpeak();show('discoveryScr');$('discCatalog').hidden=false;$('discPlay').hidden=true;$('discStars').textContent=S.stars;$('discBearMenu').src=dArt('bear-hero');dRenderMenu();$('discScroll').scrollTop=0;}
function dStart(mode){
 if(!D_R[mode])return;clearTimeout(D.timer);D.mode=mode;D.round=0;D.finished=false;show('discoveryScr');$('discCatalog').hidden=true;$('discPlay').hidden=false;$('discBearPlay').src=dArt('bear-hero');dRound();$('discScroll').scrollTop=0;
}
function dRound(){
 clearTimeout(D.timer);stopSpeak();D.stamp++;D.started=Date.now();D.solved=false;D.data=D_R[D.mode][D.round];D.selected=null;D.matched=new Set();D.deck=[];D.count=0;D.sequence=0;D.cleared=new Set();D.errors=0;
 const g=dGame(D.mode),r=D.data;$('discGameName').textContent=g.name;$('discPrompt').textContent=r.prompt;
 $('discSteps').innerHTML=[0,1,2].map(i=>'<i class="'+(i<D.round?'done':i===D.round?'on':'')+'"></i>').join('');
 $('discStars').textContent=S.stars;$('discNext').hidden=true;$('discNext').disabled=true;$('discNext').textContent='Дальше ➜';
 $('discScene').innerHTML='';$('discChoices').innerHTML='';dStatus('Послушай и попробуй!');
 dRender();dPlayPhrase(r.prompt);
}
function dSuccess(speech){
 if(D.solved)return;D.solved=true;const stamp=D.stamp;
 S.stars++;S.discoveryWins=(S.discoveryWins||0)+1;save();$('discStars').textContent=S.stars;
 try{tone([[730,.11,.2],[980,.13,.16],[1200,.16,.12]])}catch(e){};
 burst();dStatus('⭐ Отлично! '+speech,true);
 $('discScene').insertAdjacentHTML('beforeend','<div class="disc-success"><div class="disc-wow">🌟 🐾 🌟</div><h3>Молодец!</h3><p>'+speech+'</p></div>');
 dPlayPhrase('Молодец! '+speech);
 const b=$('discNext');b.hidden=false;b.disabled=true;b.textContent=D.round===2?'Завершить игру ✓':'Дальше ➜';
 D.timer=setTimeout(()=>{if(D.stamp===stamp&&D.solved)b.disabled=false;},Math.max(0,3000-(Date.now()-D.started)));
}
function dFinish(){
 D.finished=true;const list=Array.isArray(S.discoveryDone)?S.discoveryDone:[];
 if(!list.includes(D.mode)){list.push(D.mode);S.discoveryDone=list;save()}
 $('discSteps').innerHTML=[0,1,2].map(()=>'<i class="done"></i>').join('');
 $('discPrompt').textContent='Ура! Все три задания выполнены!';
 $('discScene').innerHTML='<div class="disc-success" style="position:relative;min-height:270px;width:100%;border-radius:22px"><div class="disc-wow">🏆 ⭐ 🐻</div><h3>Игра пройдена!</h3><p>Матвей, ты молодец!</p></div>';
 $('discChoices').innerHTML='';dStatus('Поиграем ещё или выберем другую игру?',true);
 const b=$('discNext');b.hidden=false;b.disabled=false;b.textContent='Сыграть ещё ↻';
 dPlayPhrase('Отлично! Ты справился! Давай поиграем ещё!');
}
function dBindChoices(onChoice){const run=b=>{if(D.solved||D.finished)return;onChoice(b.dataset.dChoice,b)};
 $('discScene').querySelectorAll('[data-d-choice]').forEach(b=>bindKidTap(b,()=>run(b)));
 $('discChoices').querySelectorAll('[data-d-choice]').forEach(b=>bindKidTap(b,()=>run(b)));}
function dRender(){
 const s=$('discScene'),c=$('discChoices'),r=D.data;
 if(D.mode==='echo'){
  s.innerHTML='<div class="disc-label">Послушай, повтори и выбери звук!</div><div class="disc-feature-art">'+dPicture(r.art)+'</div><div class="disc-action-callout">🐾 Как говорит этот зверёк?</div>';
  c.innerHTML=r.options.map((x,i)=>'<button type="button" class="disc-sound-choice" data-d-choice="'+i+'" aria-label="'+x+'">'+x+'</button>').join('');
  dBindChoices((v,b)=>{if(r.options[+v]===r.answer){b.classList.add('matched');dSuccess(r.success)}else{dAnimateError(b);dPlayPhrase('Послушай ещё раз!')}});
 }else if(D.mode==='gesture'){
  s.innerHTML='<div class="disc-label">Настоящие слова в настоящей игре</div><div class="disc-gesture-scene"><div class="disc-gesture-object">'+r.object+'</div><div class="disc-gesture-speech">Скажи или покажи жест 👋</div></div><div class="disc-action-callout">Попроси взрослого поиграть вместе!</div>';
  c.innerHTML=r.options.map((x,i)=>'<button type="button" class="disc-sound-choice" data-d-choice="'+i+'" aria-label="'+x+'">'+x+'</button>').join('');
  dBindChoices((v,b)=>{if(r.options[+v]===r.word)dSuccess(r.success);else dAnimateError(b)});
 }else if(D.mode==='size'){
  s.innerHTML='<div class="disc-label">Найди '+(r.want==='big'?'БОЛЬШОГО':'МАЛЕНЬКОГО')+' зверька</div><div class="disc-row">'+dButton(r.art,'Большой','big','big')+dButton(r.art,'Маленький','small','small')+'</div>';
  dBindChoices((v,b)=>v===r.want?dSuccess(r.success):dAnimateError(b));
 }else if(D.mode==='shadow'){
  s.innerHTML='<div class="disc-label">Кто спрятался?</div><div class="disc-shadow">'+dPicture(r.art)+'</div>';
  c.innerHTML=r.options.map(a=>dButton(a,{'cow':'Коровка','fox':'Лиса','rabbit':'Зайчик','duck':'Уточка','bear':'Мишка','sheep':'Овечка'}[a]||'Зверёк','',''+a)).join('');
  dBindChoices((v,b)=>v===r.art?dSuccess(r.success):dAnimateError(b));
 }else if(D.mode==='pairs'){
  D.deck=shuffle(r.animals.flatMap(a=>[a,a])).map((a,i)=>({art:a,index:i}));dPairs();
 }else if(D.mode==='habitat'){
  s.innerHTML='<div class="disc-label">Найди подходящее место</div><div class="disc-feature-animal">'+dPicture(r.art)+'</div>';
  c.innerHTML=D_HOMES.map(x=>dButton('emoji:'+x.emoji,x.name,'disc-emoji-card',x.id)).join('');
  dBindChoices((v,b)=>v===r.answer?dSuccess(r.success):dAnimateError(b));
 }else if(D.mode==='odd'){
  s.innerHTML='<div class="disc-label">Один предмет не подходит</div><div class="disc-row">'+r.things.map((a,i)=>dButton('emoji:'+a,'','disc-emoji-card',String(i))).join('')+'</div>';
  dBindChoices((v,b)=>r.things[+v]===r.answer?dSuccess(r.success):dAnimateError(b));
 }else if(D.mode==='count'){
  s.innerHTML='<div class="disc-label">Собери '+r.need+' '+(r.need===1?'яблоко':r.need===2?'яблока':'яблока')+'</div><div class="disc-counter">🧺 <span id="discAppleCount">0</span> / '+r.need+'</div><div class="disc-apple-grid">'+[0,1,2,3,4].map(i=>'<button class="disc-apple" data-d-choice="'+i+'" aria-label="Положить яблоко в корзинку">🍎</button>').join('')+'</div>';
  dBindChoices((v,b)=>{if(b.classList.contains('used'))return;b.classList.add('used');D.count++;$('discAppleCount').textContent=D.count;dStatus('Считаем: '+D.count+'!');if(D.count===r.need)dSuccess(r.success)});
 }else if(D.mode==='pattern'){
  s.innerHTML='<div class="disc-label">Что будет следующим?</div><div class="disc-pattern"><span>'+r.a+'</span><span>'+r.b+'</span><span>'+r.a+'</span><span>'+r.b+'</span><span>❓</span></div>';
  const options=shuffle([r.a,r.b,r.a==='🍓'?'🌳':'🍓']);
  c.innerHTML=options.map((e,i)=>dButton('emoji:'+e,'','disc-emoji-card',String(i))).join('');
  dBindChoices((v,b)=>options[+v]===r.a?dSuccess(r.success):dAnimateError(b));
 }else if(D.mode==='order'){
  D.deck=shuffle([0,1,2]);dOrder();
 }else if(D.mode==='path'){
  dPath();
 }else if(D.mode==='wash'){
  dWash();
 }
}
function dPairs(){
 const s=$('discScene');s.innerHTML='<div class="disc-label">Найди одинаковых зверят</div><div class="disc-row">'+D.deck.map((x,i)=>'<button type="button" class="disc-tile '+(D.matched.has(i)?'matched':D.selected===i?'chosen':'')+'" data-d-choice="'+i+'" aria-label="Выбрать зверька">'+dTile(x.art)+'</button>').join('')+'</div>';
 dBindChoices((v,b)=>{
  const i=Number(v);if(D.matched.has(i))return;
  if(D.selected===null){D.selected=i;dStatus('Найди такого же!');dPairs();return}
  if(D.selected===i){D.selected=null;dPairs();return}
  if(D.deck[D.selected].art===D.deck[i].art){D.matched.add(D.selected);D.matched.add(i);D.selected=null;dStatus('Пара найдена! ✨',true);dPairs();if(D.matched.size===D.deck.length)dSuccess('Все пары найдены!');}
  else{D.selected=null;dAnimateError(b);dPairs()}
 });
}
function dOrder(){
 const r=D.data,s=$('discScene');const ratios=[.54,.74,1];
 const pic=(scale)=>'<img style="height:'+Math.round(scale*90)+'px;width:100%;object-fit:contain" src="'+dArt(r.art)+'" alt="">';
 s.innerHTML='<div class="disc-label">Маленький → средний → большой</div><div class="disc-shelf">'+[0,1,2].map(i=>'<div class="disc-placed">'+(i<D.sequence?pic(ratios[i]):'<span style="font-size:32px;opacity:.45">'+(i+1)+'</span>')+'</div>').join('')+'</div><div class="disc-row">'+D.deck.filter(x=>x>=D.sequence).map(i=>'<button class="disc-tile" data-d-choice="'+i+'" aria-label="'+['Маленький','Средний','Большой'][i]+'">'+pic(ratios[i])+'<strong>'+['Маленький','Средний','Большой'][i]+'</strong></button>').join('')+'</div>';
 dBindChoices((v,b)=>{if(+v!==D.sequence){dAnimateError(b);return;}D.sequence++;dStatus(['Маленький!','Средний!','Большой!'][D.sequence-1],true);dPlayPhrase(['Маленький!','Средний!','Большой!'][D.sequence-1]);if(D.sequence===3)dSuccess('От маленького к большому!');else dOrder();});
}
function dPath(){
 const r=D.data,s=$('discScene');const places=[[15,48],[38,64],[62,43],[85,61]];
 s.innerHTML='<div class="disc-label">Топ-топ! Идём по камушкам</div><div class="disc-path">'+places.map((p,i)=>'<button class="disc-stone '+(i<D.sequence?'passed':'')+'" style="left:'+p[0]+'%;top:'+p[1]+'%" data-d-choice="'+i+'" aria-label="Камушек номер '+(i+1)+'">'+(i<D.sequence?'✓':i+1)+'</button>').join('')+'<img class="disc-character" id="discWalker" src="'+dArt(r.friend)+'" alt=""><div class="disc-finish">'+r.goal+'</div></div>';
 const walker=$('discWalker');walker.style.left=(D.sequence?Math.min(80,D.sequence*20):1)+'%';
 dBindChoices((v,b)=>{if(+v!==D.sequence){dAnimateError(b);return;}D.sequence++;dStatus('Топ-топ! '+D.sequence+'!',true);if(D.sequence===4)dSuccess('Дошли до цели! Ура!');else dPath();});
}
function dWash(){
 const r=D.data,s=$('discScene');const spots=[[10,20],[61,13],[34,61],[75,55]];
 s.innerHTML='<div class="disc-label">Три, три! Чисто-чисто!</div><div class="disc-wash" id="discWashSurface">'+dPicture(r.art)+spots.map((p,i)=>'<button type="button" class="disc-mud '+(D.cleared.has(i)?'gone':'')+'" style="left:'+p[0]+'%;top:'+p[1]+'%" data-d-choice="'+i+'" aria-label="Убрать пятнышко">🫧</button>').join('')+'</div>';
 const wash=i=>{
  if(D.solved||D.cleared.has(i))return;D.cleared.add(i);
  const b=s.querySelector('[data-d-choice="'+i+'"]');if(b)b.classList.add('gone');
  dStatus('Чисто! Убрали '+D.cleared.size+' из '+spots.length+' пятнышек.',true);
  if(D.cleared.size===spots.length)dSuccess(r.success);
 };
 dBindChoices(v=>wash(Number(v)));
 const area=$('discWashSurface');area.style.touchAction='none';
 let isWiping=false;
 area.addEventListener('pointerdown',e=>{isWiping=true;if(e.pointerType!=='mouse'||e.button===0){e.preventDefault();}}, {passive:false});
 area.addEventListener('pointermove',e=>{if(!isWiping)return;e.preventDefault();const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-d-choice]');if(target&&area.contains(target))wash(Number(target.dataset.dChoice));},{passive:false});
 const done=()=>isWiping=false;area.addEventListener('pointerup',done);area.addEventListener('pointercancel',done);area.addEventListener('lostpointercapture',done);
}
function dNext(){if(!D.solved&&!D.finished)return;if(D.finished){dStart(D.mode);return}if(Date.now()-D.started<3000||$('discNext').disabled)return;if(D.round<2){D.round++;dRound();$('discScroll').scrollTop=0}else dFinish();}
$('discHome').onclick=()=>{clearTimeout(D.timer);D.stamp++;stopSpeak();renderHome()};
$('discBack').onclick=dCatalog;
$('discReplay').onclick=()=>D.mode&&dPlayPhrase(D.finished?'Молодец, Матвей!':D.data.prompt);
$('discRestart').onclick=()=>D.mode&&dStart(D.mode);
$('discNext').onclick=dNext;
$('discoveryBtn').onclick=dCatalog;
$('discMoreBtn').onclick=dCatalog;
window.__discovery={menu:dCatalog,start:dStart,next:dNext,state:()=>({mode:D.mode,round:D.round,solved:D.solved,finished:D.finished,started:D.started,matched:D.matched.size,count:D.count,sequence:D.sequence,cleared:D.cleared.size,errors:D.errors}),choose:value=>{const b=$('discScene').querySelector('[data-d-choice="'+value+'"]')||$('discChoices').querySelector('[data-d-choice="'+value+'"]');if(!b)throw Error('no choice '+value);b.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerType:'touch'}))},catalog:dCatalog};

$('adventureBtn').onclick=()=>{tone([[730,.1,.15]]);storyEnter(0);};
$('adventureHome').onclick=()=>{storyStop();stopSpeak();renderHome();};
$('storyAnimals').onclick=()=>storyEpisode(0);
$('storyPlants').onclick=()=>storyEpisode(1);
$('storyNext').onclick=storyNext;
$('storyReplay').onclick=()=>{const e=STORY_EPISODES[ADV.episode],t=e.steps[ADV.index];say(ADV.completed?'Молодец, Матвей!':ADV.locked?t.sound:t.text);};
$('matveyBearHome').src=MATVEY_ART['bear-hero'];
document.documentElement.style.setProperty('--bear-portrait','url(\"'+MATVEY_ART['bear-hero']+'\")');

fillMascots();
loadClips();
renderHome();
window.MatveyGameBridge={
 say,stop:stopSpeak,tap:sndTap,good:sndGood,
 enter:()=>{L=null;stopWait();clearInterval(bubTm);storyStop();mClearTimer();magicClear();clearTimeout(D.timer);D.stamp++;stopSpeak();show('picnicScr');},
 home:()=>renderHome(),
 award:()=>{S.stars++;S.picnicServed=(S.picnicServed||0)+1;save();}
};
window.__sp={buildLesson,S:()=>S,setStage:n=>{S.stage=n;},
  b:{tMouth,tAct,tFill,tScene,tRequest,tTap3,tCups,tToy,tFind,tWarm,tSayNew},
  run:task=>{L={tasks:[task],i:0,wrong:0,first:true,locked:false,earned:0,startStars:S.stars,tok:(L?L.tok:0)+1,lastTap:0,tapped:false};
    $('dots').innerHTML='<div class="dot"></div>';show('lesson');showTask();},
  phrases:()=>phraseList().map(p=>p.k),scoreVoice,
  state:()=>({childMode,breakShown,i:L&&L.i,locked:L&&L.locked}),
  setSession:n=>{S.sessionMin=n;sessionStart=Date.now();}};
})();
