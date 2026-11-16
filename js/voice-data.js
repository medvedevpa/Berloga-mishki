import {FOODS,STEPS} from './picnic-data.js';
import {WORLD_GAMES} from './world-games-data.js';
import {normalizePhrase,cleanPhrase,sentenceParts} from './local-voice.js';

export const VOICE_GROUPS=[['starter','Быстрый старт · 24 реплики'],['words','Слова и звуки'],['cards','Живые карточки'],['games','Все три 3D-игры'],['more','Приключения и мини-игры'],['missing','Игра прозвучала без записи'],['custom','Мои фразы'],['saved','Все мои записи']];
export function buildVoiceCatalogue(library){
 const rows=[],seen=new Set(),lesson=window.MATVEY_LESSON_DATA,data=window.MATVEY_GAME_DATA;
 const add=(w,e='🎙️',group='words')=>{
  if(typeof w!=='string')return;const k=normalizePhrase(w),id=group+'|'+k;
  if(k&&!seen.has(id)){seen.add(id);rows.push({k,w:cleanPhrase(w),e,group});}
 };
 const sentences=(text,e,group)=>sentenceParts(text).forEach(t=>add(t,e,group));
 ['ДАЙ','НА','ЕЩЁ','МОЙ','МЕШАЙ','ЛЕЙ','САЖАЙ','ЗАКРОЙ','ОП','КАП-КАП','ТУК-ТУК','АМ-АМ','ТУ-ТУ','МЕШ-МЕШ','Молодец!','Ура!','Получилось!','Давай дальше!','Я тебя услышала!','Спасибо!','ДА','НЕТ','Привет!','Пока-пока!'].forEach(w=>add(w,'🌟','starter'));
 lesson.PRAISE.forEach(p=>{add(p,'🌟');sentences(p,'🌟','words');});
 ['Я тебя услышала!','Всё! Пока-пока!','Молодец! Давай дальше!','Давай дальше!'].forEach(t=>{add(t,'🌟');sentences(t,'🌟','words');});
 ['KNOWN','SND','CORE','MOUTH','TAPS','FILLS'].forEach(key=>lesson[key].forEach(x=>add(x.w,x.e)));
 lesson.ACTS.forEach(a=>{add(a.w,a.a);add(a.r,a.b);});
 data.LIVE_DATA.forEach(c=>{add(c.word,'🐾','cards');add(c.sound,'🐾','cards');add(c.voice,'🐾','cards');});
 sentences('Привет! Нажми на животное. Послушай и повтори!','🐾','cards');
 const fill=(s,item,house)=>s.replace(/\{(food|item)\}/g,item).replace(/\{house\}/g,house||'');
 FOODS.forEach(food=>STEPS.forEach(step=>{
  step.word.forEach(w=>add(fill(w,food.acc),'🥕','games'));
  sentences(fill(step.instruction,food.acc),'🥕','games');sentences(step.success,'🌟','games');
 }));
 Object.values(WORLD_GAMES).forEach(game=>game.rounds.forEach(item=>game.steps.forEach(step=>{
  step.words.forEach(w=>add(fill(w,item.acc,item.house),'🧸','games'));
  sentences(fill(step.instruction,item.acc,item.house),'🧸','games');
  add('Найди '+item.acc,'🧸','games');
 })));
 sentences('Получилось! Молодец! Давай поиграем вместе без экрана.','🌟','games');
 const walk=(node,group)=>{
  if(Array.isArray(node)){node.forEach(v=>walk(v,group));return;}
  if(!node||typeof node!=='object')return;
  Object.entries(node).forEach(([key,value])=>{
   if(['prompt','sound','success','speech','text'].includes(key)&&typeof value==='string')sentences(value,'🦋',group);
   else if(typeof value==='object')walk(value,group);
  });
 };
 [data.STORY_EPISODES,data.M_CONTENT,data.D_R].forEach(v=>walk(v,'more'));
 ['Круг','Квадрат','Треугольник','Красный','Жёлтый','Синий','Ам-ам! Спасибо!','Маленький!','Средний!','Большой!'].forEach(w=>sentences(w,'🌈','more'));
 library.custom().forEach(w=>add(w,'💬','custom'));
 library.missing().forEach(w=>add(w,'📝','missing'));
 const labels=new Map(rows.map(r=>[r.k,r]));
 library.keys().forEach(k=>add(labels.get(k)?.w||k,labels.get(k)?.e||'🎙️','saved'));
 return rows;
}
