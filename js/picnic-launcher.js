// One launcher, explicit routes and a single active 3D section.
(()=>{
 let loading=false;const entries={cafe:'picnicBtn',parcels:'parcelsBtn',garden:'gardenBtn'};
 async function launch(route){if(loading||!entries[route])return;loading=true;const b=document.getElementById(entries[route]);b.disabled=true;document.getElementById('gameLoadError').hidden=true;
  try{const cafeActive=window.__picnic?.state().active,worldState=window.__worldGames?.state();if(route==='cafe'&&cafeActive||worldState?.active&&worldState.kind===route)return;const direct=location.hash.slice(1)===route;
   if(cafeActive)(await import('./picnic-game.js?v=16')).close();if(worldState?.active)(await import('./world-games.js?v=16')).close();if(direct)history.replaceState(null,'',location.pathname+location.search+'#'+route);
   if(route==='cafe'){const game=await import('./picnic-game.js?v=16');game.open();}else{const game=await import('./world-games.js?v=16');game.open(route);}}
  catch(e){document.getElementById('gameLoadError').hidden=false;}finally{loading=false;b.disabled=false;}
 }
 for(const [route,id]of Object.entries(entries))document.getElementById(id).addEventListener('click',()=>launch(route));
 const followRoute=()=>{const route=location.hash.slice(1);if(entries[route])launch(route);};window.addEventListener('hashchange',followRoute);followRoute();
})();
