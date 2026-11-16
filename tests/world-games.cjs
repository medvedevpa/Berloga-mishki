const {chromium}=require('playwright');const assert=require('node:assert/strict');const fs=require('node:fs');const os=require('node:os');const path=require('node:path');
let browser;
(async()=>{browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--enable-unsafe-swiftshader']});const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});const base=process.env.MATVEY_TEST_URL||'http://localhost:8765';const out=fs.mkdtempSync(path.join(os.tmpdir(),'matvey-worlds-'));await page.goto(base);await page.evaluate(()=>window.__sp.S().voiceOn=false);const initial=await page.evaluate(()=>window.__sp.S().stars);
 const state=()=>page.evaluate(()=>window.__worldGames.state());
 async function click(id){await page.click('[data-world-action="'+id+'"]');}
 async function next(){await page.waitForFunction(()=>!document.getElementById('worldNext').disabled);await page.click('#worldNext');}
 async function drag(source,target){const a=await page.evaluate(id=>window.__worldGames.project(id),source),b=await page.evaluate(id=>window.__worldGames.project(id),target);await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(b.x,b.y,{steps:12});await page.mouse.up();}
 for(const kind of ['parcels','garden']){
  await page.click('#'+kind+'Btn');await page.waitForFunction(()=>window.__worldGames?.state().webgl);assert.equal(await page.locator('#worldCanvas canvas').count(),1);
  for(const width of [320,390,768,1280]){await page.setViewportSize({width,height:width>700?900:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(out,kind+'-'+width+'.png')});}await page.setViewportSize({width:390,height:844});
  await page.waitForTimeout(3100);assert.equal((await state()).step,0);assert(await page.locator('#worldNext').isHidden());
  const items=kind==='parcels'?['ball','block','ring']:['sunflower','berry','pea'];const homes=kind==='parcels'?['red','blue','yellow']:['pot0','pot1','pot2'];
  for(let r=0;r<3;r++){
   await click(items[(r+1)%3]);assert.equal((await state()).solved,false);await click(items[r]);assert.equal((await state()).solved,true);await next();
   if(r===0){await drag(items[r],kind==='parcels'?'box':homes[r]);assert.equal((await state()).solved,true);}else{await click('select');await click(kind==='parcels'?'box':homes[r]);assert.equal((await state()).solved,true);}await next();
   if(kind==='garden'){await click(homes[(r+1)%3]);assert.equal((await state()).count,0);await click('can');}
   for(let i=0;i<3;i++)await click(kind==='parcels'?'box':homes[r]);assert.equal((await state()).count,3);assert.equal((await state()).solved,true);await next();
   await click(kind==='parcels'?homes[r]:'basket');assert.equal((await state()).solved,false);await click(kind==='parcels'?'select':'harvest');
   if(kind==='parcels'){await click(homes[(r+1)%3]);assert.equal((await state()).solved,false);}
   await click(kind==='parcels'?homes[r]:'basket');assert.equal((await state()).solved,true);assert.equal(await page.evaluate(()=>window.__sp.S().stars),initial+(kind==='parcels'?0:3)+r+1);assert.equal(await page.locator('#worldActions button:enabled').count(),0);
   await page.screenshot({path:path.join(out,kind+'-complete-'+r+'.png')});await next();
  }
  assert.equal(await page.locator('[data-world-action=restart]').count(),1);await click('restart');assert.equal((await state()).round,0);await page.click('#worldHome');assert.equal(await page.locator('#worldCanvas canvas').count(),0);console.log('PASS:',kind,'3 rounds, wrong choices, real raycast drag, manual steps, one reward, restart, four widths');
 }
 // Direct routes plus offline queries must work after old PWA users open a fresh link.
 await page.goto(base+'/?update=13#cafe');await page.waitForFunction(()=>window.__picnic?.state().webgl);await page.click('#picnicHome');await page.goto(base+'/?update=13#garden');await page.waitForFunction(()=>window.__worldGames?.state().webgl);assert.equal((await state()).kind,'garden');
 await page.click('#worldHome');await page.evaluate(async()=>await navigator.serviceWorker.ready);await page.reload();await page.context().setOffline(true);await page.goto(base+'/?update=offline#parcels');await page.waitForFunction(()=>window.__worldGames?.state().webgl);assert.equal((await state()).kind,'parcels');await page.click('#worldHome');await page.context().setOffline(false);
 assert.deepEqual(errors,[]);console.log('PASS: direct routes, offline versioned modules/query fallback. Screenshots:',out);await browser.close();})().catch(async e=>{console.error(e);await browser?.close();process.exit(1)});
