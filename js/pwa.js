// Check for updates without deleting local progress, voice recordings or caches.
(()=>{
 const button=document.getElementById('appUpdate'),label=document.getElementById('appUpdateStatus');
 if(!('serviceWorker'in navigator)||!(location.protocol==='https:'||location.hostname==='localhost')){button.hidden=true;return;}
 const hadController=!!navigator.serviceWorker.controller;let registration=null,requested=false;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(requested){location.reload();return;}
  if(hadController){button.textContent='Открыть новую версию';label.textContent='Обновление готово';button.onclick=()=>location.reload();}
 });
 const ready=navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(r=>{registration=r;return r;}).catch(()=>{label.textContent='Проверка обновлений недоступна. Попробуйте позже.';return null;});
 button.onclick=async()=>{button.disabled=true;label.textContent='Проверяем обновление…';try{const r=registration||await ready;if(!r)throw Error();requested=true;await r.update();if(r.installing){label.textContent='Загружаем новую версию…';r.installing.addEventListener('statechange',function(){if(this.state==='redundant'){requested=false;button.disabled=false;label.textContent='Не удалось загрузить обновление. Попробуйте позже.';}});return;}
   // A query bypasses an old cache entry for index.html without touching stored data.
   const url=new URL(location.href);url.searchParams.set('update',Date.now().toString());location.replace(url.href);
  }catch(e){requested=false;button.disabled=false;label.textContent='Нет связи. Ваш прогресс сохранён; можно продолжить офлайн.';}};
})();
