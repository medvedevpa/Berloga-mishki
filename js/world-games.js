import {WORLD_GAMES} from './world-games-data.js?v=14';
import {ParcelWorld,GardenWorld} from './world-games-scene.js?v=14';
const $=id=>document.getElementById(id);
let world=null,active=false,kind='parcels',round=0,step=0,solved=false,selected=null,count=0,started=0,level=1,timer=0,epoch=0,abort=null;
const bridge=()=>window.MatveyGameBridge;
const config=()=>WORLD_GAMES[kind];const item=()=>config().rounds[round];const task=()=>config().steps[step];
const fill=text=>text.replaceAll('{item}',item().acc).replaceAll('{house}',item().house);
const say=text=>bridge().say(text);const status=text=>$('worldStatus').textContent=text;
function effect(){bridge().tap();if($('worldHaptic').checked&&navigator.vibrate)navigator.vibrate(12);}
function makeButton(text,id,fn){const b=document.createElement('button');b.type='button';b.className='picnic-action';b.dataset.worldAction=id;b.textContent=text;b.onclick=fn;return b;}
function actions(){
 const host=$('worldActions');host.replaceChildren();const id=task().id;
 if(id==='choose')config().rounds.forEach(r=>host.append(makeButton(r.emoji+' '+r.name,r.id,()=>act('pick',r.id))));
 if(id==='pack'||id==='plant'){
  host.append(makeButton(selected===item().id?'✓ Предмет в руках':'Возьми '+item().acc,'select',()=>act('pick',item().id)));
  if(kind==='parcels')host.append(makeButton('📦 В коробку','box',()=>act('pick','box')));
  else config().rounds.forEach((r,i)=>host.append(makeButton((i+1)+' · '+r.emoji,r.home,()=>act('pick',r.home))));
 }
 if(id==='close')host.append(makeButton('📦 Закрой · '+count+'/3','box',()=>act('pick','box')));
 if(id==='deliver'){
  host.append(makeButton(selected==='box'?'✓ Посылка у тебя':'📦 Возьми посылку','select',()=>act('pick','box')));
  config().rounds.forEach(r=>host.append(makeButton(r.emoji+' '+r.house,r.home,()=>act('pick',r.home))));
 }
 if(id==='water'){
  host.append(makeButton(selected==='can'?'✓ Лейка у тебя':'💧 Возьми лейку','can',()=>act('pick','can')));
  config().rounds.forEach(r=>host.append(makeButton(r.emoji+' Полей'+(r.id===item().id?' · '+count+'/3':''),r.home,()=>act('pick',r.home))));
 }
 if(id==='harvest')host.append(makeButton(selected==='harvest'?'✓ Урожай в руках':'Возьми '+item().acc,'harvest',()=>act('pick','harvest'+round)),makeButton('🧺 В корзинку','basket',()=>act('pick','basket')));
 if(solved)host.querySelectorAll('button').forEach(b=>b.disabled=true);
}
function begin(){
 clearTimeout(timer);epoch++;solved=false;selected=null;count=0;started=performance.now();world.configure(task(),round);
 $('worldTitle').textContent=task().title;$('worldWord').textContent=fill(task().words[level]);$('worldInstruction').textContent=fill(task().instruction);$('worldReal').textContent=task().real;$('worldRound').textContent=(round+1)+' из 3 · '+item().name;
 $('worldNext').hidden=true;$('worldNext').disabled=true;$('worldSpeech').hidden=true;
 $('worldSteps').replaceChildren(...config().steps.map((s,i)=>{const span=document.createElement('span');span.textContent=(i+1)+' · '+s.title.split(' ')[0];span.className=i<step?'done':i===step?'current':'';if(i===step)span.setAttribute('aria-current','step');return span;}));
 actions();status(fill(task().instruction));world.highlight(task().id==='choose'?item().id:task().id==='pack'||task().id==='close'?'box':task().id==='harvest'?'harvest':item().home);say(fill(task().words[level])+'. '+fill(task().instruction));
}
function succeed(){
 if(solved||!active)return false;solved=true;world.complete();actions();bridge().good();status('Получилось! Попробуй сказать «'+fill(task().words[level])+'» или покажи жест. Мы подождём.');$('worldSpeech').hidden=false;$('worldSpeechWord').textContent=fill(task().words[level]);
 $('worldNext').hidden=false;$('worldNext').textContent=step===3?(round===2?'Наши открытия ➜':'Следующее приключение ➜'):'Дальше ➜';const token=epoch;timer=setTimeout(()=>{if(active&&token===epoch&&solved)$('worldNext').disabled=false;},Math.max(0,3000-(performance.now()-started)));
 if(step===3)bridge().award(kind);say('Получилось! '+fill(task().words[level]));return true;
}
function act(type,id){
 if(!active||solved||!world)return false;const stage=task().id;
 if(type==='rub'){if(stage==='close'&&id==='box'||stage==='water'&&selected==='can'&&id===item().home)return work();return false;}
 if(stage==='choose'){
  if(!config().rounds.some(r=>r.id===id))return false;
  world.choose(id);effect();if(id!==item().id){status('Попробуй ещё. Найди '+item().acc+'.');say('Найди '+item().acc);return false;}selected=id;return succeed();
 }
 if((stage==='pack'||stage==='plant')&&id===item().id){selected=id;world.choose(id);effect();status('Теперь выбери '+(stage==='pack'?'коробку.':item().house+'.'));actions();return false;}
 if(stage==='deliver'&&id==='box'){selected='box';world.markSelected(id);effect();status('Теперь отвези посылку в '+item().house+'.');actions();return false;}
 if(stage==='water'&&id==='can'){selected='can';world.markSelected(id);effect();status('Лейка у тебя. Полей '+item().house+'.');actions();return false;}
 if(stage==='harvest'&&id==='harvest'+round){selected='harvest';world.markSelected('harvest');effect();status('Теперь положи урожай в корзинку.');actions();return false;}
 const expected=stage==='pack'||stage==='close'?'box':stage==='harvest'?'basket':item().home;
 if(id!==expected){status(stage==='water'?'Этот горшочек подождёт. Полей горшочек с такой же картинкой.':'Попробуй другое место. Смотри на картинку и цвет.');effect();return false;}
 if(stage==='close')return work();
 if(stage==='water'){if(selected!=='can'){status('Сначала возьми лейку.');return false;}return work();}
 const required=stage==='deliver'?'box':stage==='harvest'?'harvest':item().id;
 if(selected!==required){status('Сначала возьми '+(required==='box'?'посылку':item().acc)+'.');return false;}
 effect();return succeed();
}
function work(){if(solved)return false;count++;world.work(count);effect();actions();status((task().id==='close'?'Тук-тук':'Кап-кап')+' · '+count+' из 3');return count>=3?succeed():false;}
function next(){if(!active||!solved||$('worldNext').disabled||performance.now()-started<3000)return;if(step<3){step++;begin();}else if(round<2){round++;step=0;begin();}else finish();}
function finish(){clearTimeout(timer);epoch++;$('worldTitle').textContent=kind==='parcels'?'Все друзья с подарками!':'Наш сад вырос!';$('worldInstruction').textContent='Спасибо за помощь! Теперь повторим любимое действие с настоящими предметами вместе со взрослым.';$('worldWord').textContent='УРА';$('worldNext').hidden=true;$('worldSpeech').hidden=true;status('Мы выбирали, помогали и пробовали слова. Это здорово.');$('worldActions').replaceChildren(makeButton('Поиграть ещё','restart',()=>{round=0;step=0;begin();}));say('Молодец! Давай поиграем вместе без экрана.');}
function failure(){clearTimeout(timer);world?.dispose();world=null;$('worldError').hidden=false;$('worldActions').replaceChildren();$('worldNext').hidden=true;$('worldSpeech').hidden=true;status('3D недоступно. Можно попробовать снова или вернуться к другим играм.');}
function create(){try{$('worldError').hidden=true;const Type=kind==='parcels'?ParcelWorld:GardenWorld;world=new Type($('worldCanvas'),{action:act,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,onError:()=>queueMicrotask(failure)});round=0;step=0;begin();}catch(e){failure();}}
export function open(game){
 if(active||!WORLD_GAMES[game])return;kind=game;active=true;bridge().enter('worldScr');abort=new AbortController();const o={signal:abort.signal};
 $('worldName').textContent=config().title;$('worldTag').textContent=config().subtitle;$('worldHaptic').disabled=typeof navigator.vibrate!=='function';
 $('worldHome').addEventListener('click',close,o);$('worldNext').addEventListener('click',next,o);$('worldReplay').addEventListener('click',()=>say(fill(task().words[level])+'. '+fill(task().instruction)),o);
 $('worldLevel').addEventListener('change',()=>{level=Number($('worldLevel').value);$('worldWord').textContent=fill(task().words[level]);say(fill(task().words[level]));},o);
 $('worldTry').addEventListener('click',()=>{status('Спасибо за попытку! Можно отвечать звуком, словом или жестом.');say('Спасибо за попытку!');},o);
 $('worldRetry').addEventListener('click',create,o);window.addEventListener('pagehide',close,o);create();
}
export function close(){if(!active)return;active=false;epoch++;clearTimeout(timer);abort?.abort();world?.dispose();world=null;bridge().home();}
window.__worldGames={state:()=>({kind,active,round,step,solved,selected,count,started,webgl:!!world}),project:id=>world?.project(id)};
