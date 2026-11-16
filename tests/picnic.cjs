const {chromium}=require('playwright');const assert=require('node:assert/strict');const os=require('node:os');const path=require('node:path');const fs=require('node:fs');
let runningBrowser;
(async()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'matvey-3d-'));const browser=runningBrowser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--enable-unsafe-swiftshader']});const page=await browser.newPage({viewport:{width:1280,height:900},...(process.env.MATVEY_TEST_MOTION?{reducedMotion:process.env.MATVEY_TEST_MOTION}:{})});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});
 const base=process.env.MATVEY_TEST_URL||'http://localhost:8765';await page.goto(base);await page.evaluate(()=>window.__sp.S().voiceOn=false);const initial=await page.evaluate(()=>window.__sp.S().stars);await page.click('#picnicBtn');await page.waitForFunction(()=>window.__picnic?.state().webgl);assert.equal(await page.locator('#picnicCanvas canvas').count(),1);
 for(const width of [320,390,768,1280]){await page.setViewportSize({width,height:width>700?900:844});await page.waitForTimeout(150);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(out,'cafe-'+width+'.png')});}
 await page.setViewportSize({width:390,height:844});await page.waitForTimeout(300);assert.equal(await page.locator('#picnicNext').isVisible(),false);await page.waitForTimeout(3100);assert.equal(await page.evaluate(()=>window.__picnic.state().step),0);console.log('idle passed');
 await page.click('[data-picnic-action=pear]');assert.equal(await page.evaluate(()=>window.__picnic.state().solved),false);
 async function next(){await page.waitForFunction(()=>!document.getElementById('picnicNext').disabled);await page.click('#picnicNext');}
 async function canvasPoint(id){return page.evaluate(id=>window.__picnic.project(id),id)}
 async function click3d(id){const p=await canvasPoint(id);await page.mouse.click(p.x,p.y);}
 for(const [order,food] of ['apple','carrot','pear'].entries()){
  console.log('order',order);if(order===0){await click3d(food);}else await page.click('[data-picnic-action='+food+']');
  assert.equal(await page.evaluate(()=>window.__picnic.state().solved),true);await next();
  assert.equal(await page.evaluate(()=>window.__picnic.state().step),1);assert(await page.locator('#picnicNext').isHidden());
  if(order===0){
   const start=await canvasPoint(food),sink=await canvasPoint('sink');await page.mouse.move(start.x,start.y);await page.mouse.down();await page.mouse.move(sink.x,sink.y,{steps:12});await page.mouse.up();assert.equal(await page.evaluate(()=>window.__picnic.state().placed),true);
  }else await page.click('[data-picnic-action=sink]');
  for(let i=0;i<3;i++)await page.click('[data-picnic-action=sink]');assert.equal(await page.evaluate(()=>window.__picnic.state().works),3);assert.equal(await page.evaluate(()=>window.__picnic.state().solved),true);await next();
  for(let i=0;i<3;i++)await page.click('[data-picnic-action=bowl]');await next();
  await page.click('[data-picnic-action=guest]');assert.equal(await page.evaluate(()=>window.__picnic.state().solved),false);
  await page.click('[data-picnic-action=select-bowl]');await page.click('[data-picnic-action=guest]');assert.equal(await page.evaluate(()=>window.__sp.S().stars),initial+order+1);assert(await page.locator('[data-picnic-action=guest]').isDisabled());await page.screenshot({path:path.join(out,'cafe-served-'+order+'.png')});await next();
 }
 assert.equal(await page.locator('#picnicTitle').textContent(),'Друг сыт — мы молодцы!');await page.click('[data-picnic-action=restart]');assert.equal(await page.evaluate(()=>window.__picnic.state().round),0);await page.click('#picnicHome');assert(await page.locator('#home').isVisible());assert.equal(await page.locator('#picnicCanvas canvas').count(),0);
 await page.click('#picnicBtn');await page.waitForFunction(()=>window.__picnic.state().webgl);assert.equal(await page.locator('#picnicCanvas canvas').count(),1);
 await page.evaluate(()=>document.querySelector('#picnicCanvas canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());await page.waitForFunction(()=>!document.getElementById('picnicError').hidden);assert.equal(await page.locator('#picnicCanvas canvas').count(),0);await page.click('#picnicRetry');await page.waitForFunction(()=>window.__picnic.state().webgl);assert.equal(await page.locator('#picnicCanvas canvas').count(),1);await page.click('#picnicHome');
 await page.emulateMedia({reducedMotion:'reduce'});await page.click('#picnicBtn');await page.waitForFunction(()=>window.__picnic.state().webgl);await page.click('[data-picnic-action=apple]');assert(await page.locator('#picnicNext').isDisabled());await next();
 // Cancel a drag: no wash progress, no award, fruit remains available.
 const pos=await canvasPoint('apple');await page.mouse.move(pos.x,pos.y);await page.mouse.down();await page.mouse.move(pos.x-50,pos.y-30);await page.locator('#picnicCanvas canvas').dispatchEvent('pointercancel',{pointerId:1,pointerType:'touch'});await page.mouse.up();assert.equal(await page.evaluate(()=>window.__picnic.state().works),0);
 await page.click('#picnicHome');await page.evaluate(async()=>await navigator.serviceWorker.ready);await page.reload();await page.context().setOffline(true);await page.reload();await page.click('#picnicBtn');await page.waitForFunction(()=>window.__picnic?.state().webgl);assert(await page.locator('#picnicCanvas canvas').isVisible());await page.click('#picnicHome');assert(await page.locator('#home').isVisible());await page.context().setOffline(false);
 assert.deepEqual(errors,[]);console.log('PASS: real WebGL, 4 widths, no idle transition, wrong choice, raycast selection, drag to sink, 3 complete recipes, one reward per serving, restart, cleanup, context loss/retry, reduced motion, pointercancel, offline modules. Screenshots:',out);await browser.close();
})().catch(async e=>{console.error(e);await runningBrowser?.close();process.exit(1)});
