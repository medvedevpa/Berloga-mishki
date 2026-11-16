import {FOODS,STEPS} from './picnic-data.js';
import {PicnicScene} from './picnic-scene.js';
const $=id=>document.getElementById(id);
let world=null,active=false,round=0,step=0,solved=false,selected=null,placed=false,works=0,started=0,timer=0,level=1,epoch=0,granted=false,abort=null;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const bridge=()=>window.MatveyGameBridge;
const food=()=>FOODS[round%FOODS.length];
const word=()=>STEPS[step].word[level].replace('{food}',food().acc);
function status(text){$('picnicStatus').textContent=text;}
function speak(text){bridge().say(text);}
function buzz(){if($('picnicHaptic').checked&&navigator.vibrate)navigator.vibrate(14);}
function sound(){bridge().tap();buzz();}
function button(text,id,fn,cls='picnic-action'){
 const b=document.createElement('button');b.type='button';b.textContent=text;b.className=cls;b.dataset.picnicAction=id;b.onclick=fn;return b;
}
function controls(){
 const host=$('picnicActions');host.replaceChildren();
 if(step===0){FOODS.forEach(f=>{const b=button(f.emoji+' '+f.name,f.id,()=>act('choose',f.id));b.setAttribute('aria-label','Выбрать '+f.acc);host.append(b);});}
 if(step===1){host.append(button(food().emoji+' Взять '+food().acc,'select',()=>{if(solved)return;selected=food().id;world.select(selected);sound();status('Теперь нажми на голубую мойку.')}),button(placed?'💧 Кап-кап · '+works+'/3':'💧 В мойку','sink',()=>act('target','sink')));}
 if(step===2)host.append(button('🥄 Мешай · '+works+'/3','bowl',()=>act('target','bowl')));
 if(step===3)host.append(button(selected==='bowl'?'✓ Миска в руках':'🥣 Возьми миску','select-bowl',()=>act('select-bowl')),button('🐰 Угостить · НА','guest',()=>act('target','guest')));
 if(solved)host.querySelectorAll('button').forEach(b=>b.disabled=true);
}
function showStep(){
 clearTimeout(timer);epoch++;solved=false;selected=step===1?food().id:null;placed=false;works=0;granted=false;started=performance.now();
 $('picnicNext').hidden=true;$('picnicNext').disabled=true;$('picnicSpeech').hidden=true;$('picnicTitle').textContent=STEPS[step].title;$('picnicWord').textContent=word();
 $('picnicInstruction').textContent=STEPS[step].instruction.replace('{food}',food().acc);
 $('picnicRealText').textContent=STEPS[step].real;
 $('picnicOrder').textContent='Угощение '+(round+1)+' из 3 · '+food().name;
 $('picnicSteps').replaceChildren(...STEPS.map((s,i)=>{const n=document.createElement('span');n.textContent=['Беру','Мою','Мешаю','Угощаю'][i];n.className=i<step?'done':i===step?'current':'';if(i===step)n.setAttribute('aria-current','step');return n;}));
 status($('picnicInstruction').textContent);
 world.setStep({stage:STEPS[step].id,food:food().id,selected});controls();speak(word()+'. '+$('picnicInstruction').textContent);
}
function success(){
 if(solved||!active)return;solved=true;world.setGoal(null);buzz();bridge().good();controls();status(STEPS[step].success);
 $('picnicSpeech').hidden=false;$('picnicSpeechWord').textContent=word();
 $('picnicNext').hidden=false;$('picnicNext').textContent=step===3?(round===2?'Наш праздник ➜':'Ещё угощение ➜'):'Дальше ➜';
 const token=epoch;timer=setTimeout(()=>{if(active&&solved&&token===epoch)$('picnicNext').disabled=false;},Math.max(0,3000-(performance.now()-started)));
 if(step===3&&!granted){granted=true;bridge().award();}
 speak(STEPS[step].success);
}
function act(type,id){
 if(!active||solved||!world)return;
 if(type==='choose'){
  if(step!==0)return;
  if(id!==food().id){world.select(id);sound();status('Это '+FOODS.find(f=>f.id===id).name+'. Зайчик просит '+food().acc+'. Можно попробовать ещё.');speak('Найди '+food().acc);return;}
  selected=id;world.select(id);sound();world.celebrate([0,2.3,2.2],false);success();return;
 }
 if(type==='select-bowl'&&step===3){selected='bowl';sound();status('Миска у тебя. Передай её зайчику: «НА».');controls();return;}
 if(type==='target'){
  if(step===1&&id==='sink'){
   if(!selected){status('Сначала возьми '+food().acc+'.');return;}
   if(!placed){placed=true;world.transfer('sink');sound();status('Кап-кап! Проведи по воде или нажми ещё три раза.');controls();return;}
   work();return;
  }
  if(step===2&&id==='bowl'){work();return;}
  if(step===3&&id==='guest'){
   if(selected!=='bowl'){status('Сначала возьми миску. Потом угости зайчика.');speak('Возьми миску');return;}
   world.served();success();return;
  }
  status('Попробуй другое место.');return;
 }
 if(type==='work')work();
}
function work(){if(solved||!active||(step!==1&&step!==2)||step===1&&!placed)return;works++;world.work(STEPS[step].id,works);sound();controls();status((step===1?'Кап-кап':'Мешаем')+' · '+works+' из 3');if(works>=3)success();}
function next(){if(!active||!solved||$('picnicNext').disabled||performance.now()-started<3000)return;if(step<3){step++;showStep();}else if(round<2){round++;step=0;showStep();}else finish();}
function finish(){
 clearTimeout(timer);epoch++;$('picnicActions').replaceChildren(button('Сыграть ещё','restart',()=>{round=0;step=0;showStep();}));$('picnicNext').hidden=true;$('picnicSpeech').hidden=true;$('picnicTitle').textContent='Друг сыт — мы молодцы!';$('picnicWord').textContent='СПАСИБО';$('picnicInstruction').textContent='Три угощения приготовлены. Теперь можно поиграть с настоящей миской и игрушечным зайчиком.';status('Пробовать, помогать и играть вместе — уже успех.');world.celebrate([0,2.3,-.7]);speak('Спасибо! Давай теперь поиграем с настоящими игрушками.');}
function failed(){
 clearTimeout(timer);if(world){world.dispose();world=null;}$('picnicError').hidden=false;$('picnicActions').replaceChildren();$('picnicNext').hidden=true;$('picnicSpeech').hidden=true;$('picnicErrorText').textContent='Не удалось открыть 3D-сцену. Попробуйте перезапустить её. Остальные игры доступны на главной.';status('3D-сцена недоступна в этом браузере.');}
export function open(){
 if(active)return;active=true;$('picnicHaptic').disabled=typeof navigator.vibrate!=='function';bridge().enter();abort=new AbortController();const opts={signal:abort.signal};
 $('picnicHome').addEventListener('click',close,opts);$('picnicNext').addEventListener('click',next,opts);$('picnicReplay').addEventListener('click',()=>speak(solved?STEPS[step].success:word()+'. '+$('picnicInstruction').textContent),opts);
 $('picnicLevel').addEventListener('change',()=>{level=Number($('picnicLevel').value);$('picnicWord').textContent=word();speak(word());},opts);
 $('picnicTry').addEventListener('click',()=>{status('Спасибо за попытку! Звук, слово и жест — всё подходит.');speak('Молодец! Спасибо за попытку.');},opts);
 $('picnicRetry').addEventListener('click',()=>{if(world)world.dispose();create();},opts);
 window.addEventListener('pagehide',close,opts);create();
}
function create(){
 $('picnicError').hidden=true;try{world=new PicnicScene($('picnicCanvas'),{action:act,reduced:reduced.matches,onError:()=>queueMicrotask(failed)});round=0;step=0;showStep();}catch(e){failed();}
}
export function close(){if(!active)return;active=false;clearTimeout(timer);epoch++;abort?.abort();world?.dispose();world=null;bridge().home();}
// State-only diagnostics are useful for repeatable regressions, not for awarding success.
window.__picnic={state:()=>({active,round,step,solved,selected,placed,works,webgl:!!world,started}),project:id=>{
 if(!world)return null;const obj=world.foods[id]||({sink:world.sink,bowl:world.bowl,guest:world.head}[id]);if(!obj)return null;const v=obj.getWorldPosition(new (world.camera.position.constructor)()).project(world.camera);const r=world.renderer.domElement.getBoundingClientRect();return{x:r.x+(v.x+1)*r.width/2,y:r.y+(-v.y+1)*r.height/2};
}};
