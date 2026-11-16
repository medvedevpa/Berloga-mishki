/* Independent family rewards. Tokens are awarded by an adult for real-world play. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),dialog=$('familyDialog'),host=$('familyContent');
const missions=[['give','ДАЙ','Попросить настоящую игрушку словом или жестом.'],['sound','МУ-МУ','Поиграть с игрушечным зверьком и попробовать его звук.'],['help','НА','Передать предмет взрослому и сказать или показать «НА».'],['more','ЕЩЁ','Попросить продолжить совместную игру.']];
let adult=false,answer=0,opener=null;
function state(){const v=window.MatveyFamilyStore.get();return v&&v.version===1?v:{version:1,tokens:0,total:0,done:{},claims:[],prize:'Семейная прогулка',cost:5};}
function commit(v){if(window.MatveyFamilyStore.put(v)){render();return true;}$('familyMessage').textContent='Не удалось сохранить. Проверьте свободное место и настройки браузера.';return false;}
function node(tag,text,cls){const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;}
function button(text,fn,cls='btn ghost'){const b=node('button',text,cls);b.type='button';b.onclick=fn;return b;}
function render(){
 host.replaceChildren();$('familyMessage').textContent='';const v=state();
 host.append(node('div','⭐ '+v.tokens+' семейных жетонов','family-balance'),node('p','Звёзды игр и наклейки остаются с тобой. Семейные жетоны — за маленькие открытия с близкими.'));
 const badges=node('div',null,'family-badges');[[1,'Первый шаг'],[5,'Играем вместе'],[15,'Друг леса']].forEach(([n,title])=>badges.append(node('span',(v.total>=n?'🏅 ':'🔒 ')+title)));host.append(badges);
 host.append(node('h3','Приключения без экрана'),node('p','Можно ответить звуком, словом или жестом. Каждая попытка важна. Взрослый отмечает выполненное действие, по одному разу в день.'));
 const day=new Date().toLocaleDateString('sv-SE');
 missions.forEach(([id,word,text])=>{const row=node('div',null,'family-mission');row.append(node('strong',word),node('span',text));const done=v.done[day+id];const b=button(done?'✓ Сегодня получилось':adult?'Отметить · +1':'Играем со взрослым',()=>{
 const next=structuredClone(state());if(!adult||next.done[day+id])return;next.done[day+id]=true;next.tokens++;next.total++;commit(next);
 });b.disabled=!!done||!adult;row.append(b);host.append(row)});
 const prize=node('div',null,'family-prize');prize.append(node('h3','🎁 '+v.prize),node('p','Нужно '+v.cost+' жетонов. Приз выбирает и выдаёт взрослый.'));
 if(adult){
 const label=node('label','Приз вашей семьи');const input=node('input');input.value=v.prize;input.maxLength=80;label.append(input);
 const costLabel=node('label','Сколько жетонов');const cost=node('input');cost.type='number';cost.min='1';cost.max='100';cost.value=v.cost;costLabel.append(cost);
 prize.append(label,costLabel,button('Сохранить приз',()=>{const n=Number(cost.value);if(!input.value.trim()||!Number.isInteger(n)||n<1||n>100){$('familyMessage').textContent='Введите название и число от 1 до 100.';return;}const next=structuredClone(state());next.prize=input.value.trim();next.cost=n;commit(next)}));
 const claim=button('Обменять на приз',()=>{const next=structuredClone(state());if(!adult||next.tokens<next.cost)return;if(!confirm('Выдать приз «'+next.prize+'» за '+next.cost+' жетонов?'))return;next.tokens-=next.cost;next.claims.unshift({prize:next.prize,cost:next.cost,date:new Date().toISOString()});next.claims=next.claims.slice(0,30);if(commit(next))$('familyMessage').textContent='Приз получен! Приятного времени вместе.';},'btn green');claim.disabled=v.tokens<v.cost;prize.append(claim);
 prize.append(node('small','Например: прогулка, книжка вместе, мороженое или другой согласованный семейный приз.'));
 }else prize.append(node('p','Покажи награды взрослому — он поможет отметить успехи и получить приз.'));
 host.append(prize);
 if(v.claims.length){host.append(node('h3','Наши воспоминания'));v.claims.slice(0,5).forEach(x=>host.append(node('p','🎉 '+x.prize+' · '+new Date(x.date).toLocaleDateString('ru-RU'))));}
 if(!adult)host.append(button('Для родителей',gate));else host.append(button('Закрыть родительский режим',()=>{adult=false;render()}));
}
function gate(){host.replaceChildren();const a=3+Math.floor(Math.random()*6),b=2+Math.floor(Math.random()*5);answer=a+b;host.append(node('h3','Проверка для взрослого'),node('p','Сколько будет '+a+' + '+b+'?'));
 const input=node('input');input.type='number';input.inputMode='numeric';input.setAttribute('aria-label','Ответ на пример');
 host.append(input,button('Продолжить',()=>{if(Number(input.value)===answer){adult=true;render();}else $('familyMessage').textContent='Попробуйте ещё раз.'}),button('Назад',render));input.focus();}
$('familyOpen').onclick=()=>{adult=false;opener=document.activeElement;render();dialog.showModal()};
$('familyClose').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{adult=false;if(opener)opener.focus()});
})();
