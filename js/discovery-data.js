(function(){
const D_GAMES=[
 {id:'size',name:'Большой и маленький',tag:'Сравниваем',icon:'animal-rabbit',description:'Кто больше?'},
 {id:'shadow',name:'Чья это тень?',tag:'Узнаём силуэт',icon:'animal-fox',description:'Найди зверька'},
 {id:'pairs',name:'Найди пару',tag:'Внимание',icon:'animal-cow',description:'Два одинаковых'},
 {id:'habitat',name:'Чей домик?',tag:'Окружающий мир',icon:'animal-duck',description:'Где живёт?'},
 {id:'odd',name:'Кто лишний?',tag:'Мышление',icon:'animal-mushroom',description:'Что не подходит?'},
 {id:'count',name:'Собери яблоки',tag:'Счёт от 1 до 3',emoji:'🍎',description:'Посчитай урожай'},
 {id:'pattern',name:'Продолжи узор',tag:'Последовательности',emoji:'🌼',description:'Что дальше?'},
 {id:'order',name:'По росту',tag:'Порядок величин',emoji:'🌲',description:'От малого к большому'},
 {id:'path',name:'Тропинка зайчика',tag:'Движения пальцем',icon:'animal-rabbit',description:'Топ-топ по камням'},
 {id:'wash',name:'Умой зверёнка',tag:'Забота и самостоятельность',icon:'animal-bear',description:'Сделай чистым!'},
 {id:'echo',name:'Звуковое эхо',tag:'Слушай · повторяй',icon:'animal-frog',description:'Выбери звук и повтори'},
 {id:'gesture',name:'Волшебные слова',tag:'ДАЙ · ЕЩЁ · НА',icon:'animal-rabbit',description:'Просим и показываем жесты'}
];
const D_R={
 size:[{art:'rabbit',word:'зайчик',want:'big',prompt:'Где БОЛЬШОЙ зайчик?',success:'Большой зайчик!'},
       {art:'fox',word:'лисичка',want:'small',prompt:'Где МАЛЕНЬКАЯ лисичка?',success:'Маленькая лисичка!'},
       {art:'cow',word:'коровка',want:'big',prompt:'Покажи БОЛЬШУЮ коровку!',success:'Большая коровка!'}],
 shadow:[{art:'cow',options:['rabbit','cow','fox'],prompt:'Чья это тень? Найди коровку!',success:'Это коровка! Му-му!'},
         {art:'duck',options:['duck','rabbit','bear'],prompt:'Кто спрятался в тени?',success:'Это уточка! Кря-кря!'},
         {art:'fox',options:['sheep','cow','fox'],prompt:'Посмотри на тень. Кто это?',success:'Это лисичка!'}],
 pairs:[{animals:['cow','rabbit'],prompt:'Найди две одинаковые картинки!'},
        {animals:['fox','duck'],prompt:'Найди пару для каждого зверька!'},
        {animals:['sheep','bear'],prompt:'Соедини одинаковых зверят!'}],
 habitat:[{art:'cow',prompt:'Где живёт коровка?',answer:'farm',success:'Коровка живёт на ферме!'},
          {art:'fox',prompt:'Где живёт лисичка?',answer:'forest',success:'Лисичка живёт в лесу!'},
          {art:'duck',prompt:'Где любит плавать уточка?',answer:'pond',success:'Уточка плавает в пруду!'}],
 odd:[{things:['🍐','🍎','🍓','🚗'],answer:'🚗',prompt:'Здесь фрукты и ягода. Что лишнее?',success:'Машинка не фрукт!'},
      {things:['🐻','🐰','🐸','🍄'],answer:'🍄',prompt:'Покажи то, что не животное!',success:'Гриб — не животное!'},
      {things:['🚙','🚕','🚜','🐣'],answer:'🐣',prompt:'Найди того, кто не машина!',success:'Цыплёнок — не машина!'}],
 count:[{need:1,prompt:'Положи в корзину ОДНО яблоко!',success:'Одно яблоко!'},
        {need:2,prompt:'Собери ДВА яблока!',success:'Два яблока!'},
        {need:3,prompt:'Собери ТРИ яблока!',success:'Три яблока!'}],
 pattern:[{a:'🍎',b:'🌼',prompt:'Яблоко, цветок, яблоко, цветок. Что дальше?',success:'Яблоко! Правильно!'},
          {a:'🔵',b:'🟡',prompt:'Синий, жёлтый, синий, жёлтый. Что дальше?',success:'Синий кружочек!'},
          {a:'🍓',b:'🍄',prompt:'Клубника, гриб, клубника, гриб. Что дальше?',success:'Клубника!'}],
 order:[{art:'plant-tree',word:'деревья',prompt:'Сначала маленькое, потом среднее, потом большое дерево!'},
        {art:'animal-rabbit',word:'зайчики',prompt:'Поставь зайчиков по росту: маленький, средний, большой!'},
        {art:'animal-bear',word:'мишки',prompt:'Расставь мишек от маленького к большому!'}],
 path:[{friend:'rabbit',goal:'🥕',prompt:'Помоги зайчику дойти до морковки! Нажимай на камушки по порядку.'},
       {friend:'duck',goal:'🌾',prompt:'Уточка идёт за зёрнышками! Раз, два, три, четыре.'},
       {friend:'fox',goal:'🍎',prompt:'Проведи лисичку по тропинке к яблоку!'}],
 wash:[{art:'rabbit',word:'зайчика',prompt:'Зайчик испачкался! Убери пятнышки пальчиком.',success:'Зайчик чистый!'},
       {art:'cow',word:'коровку',prompt:'Помоги умыть коровку! Нажми на грязные пятнышки.',success:'Коровка чистая! Му-му!'},
       {art:'bear',word:'мишку',prompt:'Умой мишку! Три, три — будет чисто!',success:'Чистый мишка!'}],
 echo:[{art:'cow',answer:'МУ-МУ',options:['МУ-МУ','КВА-КВА','КРЯ-КРЯ'],prompt:'Послушай коровку. Найди МУ-МУ и повтори!',success:'Му-му! Это коровка!'},
       {art:'duck',answer:'КРЯ-КРЯ',options:['БЕ-БЕ','КРЯ-КРЯ','МУ-МУ'],prompt:'Как говорит уточка? Кря-кря! Повтори!',success:'Кря-кря! Так говорит уточка!'},
       {art:'frog',answer:'КВА-КВА',options:['КО-КО','МУ-МУ','КВА-КВА'],prompt:'Лягушка говорит КВА-КВА. Попробуй повторить!',success:'Ква-ква! Это лягушка!'}],
 gesture:[{object:'🧸',word:'ДАЙ',options:['ДАЙ','НА','ПОКА'],prompt:'Хочешь мишку? Попроси: ДАЙ! Можно показать ладошкой.',success:'Дай! Молодец!'},
          {object:'🍎',word:'ЕЩЁ',options:['НЕТ','ЕЩЁ','НА'],prompt:'Хочешь ещё яблоко? Скажи: ЕЩЁ! Или покажи жест.',success:'Ещё! Ура!'},
          {object:'🟡',word:'НА',options:['ПОКА','ДАЙ','НА'],prompt:'Передай мяч взрослому и скажи: НА!',success:'На! Спасибо!'}]
};
const D_HOMES=[{id:'farm',emoji:'🏡',name:'Ферма'},{id:'forest',emoji:'🌲',name:'Лес'},{id:'pond',emoji:'🏞️',name:'Пруд'}];

Object.assign(window.MATVEY_GAME_DATA,{D_GAMES,D_R,D_HOMES});
})();
