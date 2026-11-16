(function(){
const STORY_EPISODES=[
 {title:'Кто как говорит?',forest:'forest-animals',kind:'animal',intro:'Пойдём в лес! Послушай и найди всех животных!',steps:[
  {id:'cow',label:'корова',sound:'МУ-МУ',text:'Слышишь? МУ-МУ! Кто так говорит? Найди корову!',choices:['cow','bear','wolf']},
  {id:'wolf',label:'волк',sound:'У-У-У',text:'Вдалеке слышно У-У-У! Найди волка!',choices:['wolf','goose','sheep']},
  {id:'duck',label:'утка',sound:'КРЯ-КРЯ',text:'На речке КРЯ-КРЯ! Покажи утку!',choices:['duck','chicken','frog']},
  {id:'chicken',label:'курица',sound:'КО-КО',text:'Слышно КО-КО! Кто спрятался возле воды?',choices:['chicken','cow','fox']},
  {id:'frog',label:'лягушка',sound:'КВА-КВА',text:'У пруда КВА-КВА! Найди лягушку!',choices:['frog','rabbit','bear']},
  {id:'bear',label:'медведь',sound:'Р-Р-Р',text:'Большой мишка рычит Р-Р-Р! Где медведь?',choices:['bear','wolf','fox']}
 ]},
 {title:'Где растёт?',forest:'forest-plants',kind:'plant',intro:'Ура! Теперь посмотрим, что растёт в лесу.',steps:[
  {id:'tree',label:'дерево',sound:'ДЕ-РЕ-ВО',text:'Посмотри, какие высокие ветки! Найди дерево!',choices:['tree','bush','grass']},
  {id:'strawberry',label:'клубника',sound:'КЛУБ-НИ-КА',text:'Мишка учуял ягоды! Где красная клубника?',choices:['strawberry','daisy','mushroom2']},
  {id:'mushroom2',label:'гриб',sound:'ГРИБ',text:'Под деревом вырос гриб. Где он?',choices:['mushroom2','strawberry','grass']},
  {id:'bush',label:'куст',sound:'КУСТ',text:'Что растёт рядом с ягодами? Найди куст!',choices:['bush','tree','daisy']},
  {id:'daisy',label:'ромашка',sound:'РО-МАШ-КА',text:'Белые лепестки и жёлтая серединка! Найди ромашку!',choices:['daisy','grass','strawberry']}
 ]}
];
const STORY_IMAGES={
 cow:'animal-cow',sheep:'animal-sheep',bear:'animal-bear',wolf:'animal-wolf',rabbit:'animal-rabbit',
 chicken:'animal-chicken',goose:'animal-goose',duck:'animal-duck',frog:'animal-frog',tit:'animal-tit',fox:'animal-fox',
 tree:'plant-tree',strawberry:'plant-strawberry',mushroom2:'plant-mushroom2',bush:'plant-bush',grass:'plant-grass',daisy:'plant-daisy'
};
const STORY_LABELS={cow:'Корова',sheep:'Овца',bear:'Медведь',wolf:'Волк',rabbit:'Заяц',chicken:'Курица',goose:'Гусь',duck:'Утка',frog:'Лягушка',tit:'Синица',fox:'Лиса',tree:'Дерево',strawberry:'Клубника',mushroom2:'Гриб',bush:'Куст',grass:'Трава',daisy:'Ромашка'};
// Относительные координаты элементов непосредственно на двух предоставленных лесных иллюстрациях.
// Непересекающиеся зоны: пять столбцов × два ряда (животные),
// три столбца × два ряда (растения). Масштабируются вместе со сценой.
const STORY_SPOTS={
 animal:{cow:[10,28],wolf:[90,28],duck:[50,74],chicken:[70,74],frog:[30,74],bear:[50,28],sheep:[70,28],rabbit:[10,74],fox:[90,74],goose:[30,28]},
 plant:{tree:[17,28],strawberry:[83,74],mushroom2:[17,74],bush:[83,28],grass:[50,74],daisy:[50,28]}
};
const STORY_SIZES=Object.fromEntries(Object.keys(STORY_SPOTS.animal).map(k=>[k,16]).concat(Object.keys(STORY_SPOTS.plant).map(k=>[k,25])));
// Точное попадание в рисунок: невидимые пиксели не засчитываются.

Object.assign(window.MATVEY_GAME_DATA,{STORY_EPISODES,STORY_IMAGES,STORY_LABELS,STORY_SPOTS,STORY_SIZES});
})();
