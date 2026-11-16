
(function(){
  const update=()=>document.querySelectorAll('[data-v8-art]').forEach(el=>{
    const art=window.MATVEY_ART&&window.MATVEY_ART[el.dataset.v8Art];
    if(art&&el.getAttribute('src')!==art)el.src=art;
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update,{once:true});else update();
})();
