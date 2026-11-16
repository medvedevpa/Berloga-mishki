// Load the local 3D engine only when the family chooses this game.
(()=>{let loading=false;const b=document.getElementById('picnicBtn');b.addEventListener('click',async()=>{if(loading)return;loading=true;b.disabled=true;try{const game=await import('./picnic-game.js');game.open();}catch(e){document.getElementById('picnicLoadError').hidden=false;}finally{loading=false;b.disabled=false;}})})();
