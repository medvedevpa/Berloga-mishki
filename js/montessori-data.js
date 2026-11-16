(function(){
const M_MODES=['colors','shapes','friends'];
const M_CONTENT={
 colors:{name:'Разложим шарики!',text:'Каждому цвету — своя корзинка!',board:'Три цветные корзинки',tray:'Положи шарики по цветам 👆',prompt:'Разложи шарики по цветам. Красный, жёлтый, синий!'},
 shapes:{name:'Найди домик для фигуры!',text:'Подбери каждой фигуре её окошко.',board:'Доска с формами',tray:'Найди место каждой фигуре 👆',prompt:'Найди домик для каждой фигуры. Круг, квадрат, треугольник!'},
 friends:{name:'Покормим друзей!',text:'Кто что любит? Угостим друзей!',board:'Друзья ждут угощения',tray:'Перетащи угощение другу 👆',prompt:'Помоги друзьям. Зайчику — морковку, уточке — зёрнышки, мишке — мёд!'}
};
const M_COLORS=[{id:'red',label:'Красная',paint:'#f44462'},{id:'yellow',label:'Жёлтая',paint:'#ffce35'},{id:'blue',label:'Синяя',paint:'#338ff4'}];
const M_SHAPES=[{id:'circle',label:'Круг'},{id:'square',label:'Квадрат'},{id:'triangle',label:'Треугольник'}];
const M_FRIENDS=[{id:'rabbit',label:'Зайчик',art:'animal-rabbit',food:'🥕'},{id:'duck',label:'Уточка',art:'animal-duck',food:'🌾'},{id:'bear',label:'Мишка',art:'bear-hero',food:'🍯'}];

Object.assign(window.MATVEY_GAME_DATA,{M_MODES,M_CONTENT,M_COLORS,M_SHAPES,M_FRIENDS});
})();
