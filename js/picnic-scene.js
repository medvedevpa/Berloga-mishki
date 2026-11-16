import * as T from './vendor/three.min.js';
const palette={wood:0xd5a16d,edge:0x926344,cream:0xfff4dc,sage:0xaac6a2,blue:0x40b4ce,purple:0x9566c5};
export class PicnicScene{
 constructor(host,{action,onError,reduced=false}){
  this.host=host;this.action=action;this.onError=onError;this.reduced=reduced;this.abort=new AbortController();this.interact=[];this.foods={};this.selected=null;this.goal=null;this.drag=null;this.tweens=[];this.time=0;this.last=0;this.progress=0;this.celebration=0;
  this.scene=new T.Scene();this.scene.background=new T.Color(0xe9e5ca);this.scene.fog=new T.Fog(0xe9e5ca,20,40);
  this.camera=new T.PerspectiveCamera(39,1,.1,65);
  this.renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.autoUpdate=false;this.renderer.shadowMap.needsUpdate=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.08;
  host.append(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','Объёмная лесная кухня. Все действия также доступны кнопками под сценой.');
  this.ray=new T.Raycaster();this.point=new T.Vector2();this.plane=new T.Plane(new T.Vector3(0,1,0),-1.8);this.hit=new T.Vector3();
  const ambient=new T.HemisphereLight(0xfff7e3,0x758b6f,1.85);this.scene.add(ambient);const sun=new T.DirectionalLight(0xffdfae,3.4);sun.position.set(-4,9,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:25});sun.shadow.normalBias=.035;sun.shadow.bias=-.0003;this.scene.add(sun);
  const fill=new T.DirectionalLight(0xc7e7ff,1.4);fill.position.set(6,5,-3);this.scene.add(fill);
  this.build();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(host);this.resize();
  this.inView=true;this.visibilityObserver=new IntersectionObserver(entries=>{this.inView=entries[0].isIntersecting;if(!this.inView)this.renderer.setAnimationLoop(null);else if(!document.hidden){this.last=0;this.renderer.setAnimationLoop(t=>this.frame(t));}});this.visibilityObserver.observe(host);
  const options={signal:this.abort.signal};const canvas=this.renderer.domElement;
  canvas.addEventListener('pointerdown',e=>this.down(e),options);canvas.addEventListener('pointermove',e=>this.move(e),options);canvas.addEventListener('pointerup',e=>this.up(e),options);canvas.addEventListener('pointercancel',()=>this.cancel(),options);canvas.addEventListener('lostpointercapture',()=>this.cancel(),options);canvas.addEventListener('contextmenu',e=>e.preventDefault(),options);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.renderer.setAnimationLoop(null);this.onError();},options);
  document.addEventListener('visibilitychange',()=>{if(document.hidden||!this.inView)this.renderer.setAnimationLoop(null);else{this.last=0;this.renderer.setAnimationLoop(t=>this.frame(t));}},options);
  this.renderer.setAnimationLoop(t=>this.frame(t));
 }
 mat(color,roughness=.62){return new T.MeshStandardMaterial({color,roughness});}
 mesh(g,m,parent=this.scene,x=0,y=0,z=0){const o=new T.Mesh(g,typeof m==='number'?this.mat(m):m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 orb(parent,color,x,y,z,sx,sy=sx,sz=sx){const o=this.mesh(new T.SphereGeometry(1,28,20),color,parent,x,y,z);o.scale.set(sx,sy,sz);return o;}
 box(parent,color,x,y,z,w,h,d,r=.08){const shape=new T.Shape();const a=-w/2,b=-h/2;r=Math.min(r,w/2,h/2);shape.moveTo(a+r,b);shape.lineTo(a+w-r,b);shape.quadraticCurveTo(a+w,b,a+w,b+r);shape.lineTo(a+w,b+h-r);shape.quadraticCurveTo(a+w,b+h,a+w-r,b+h);shape.lineTo(a+r,b+h);shape.quadraticCurveTo(a,b+h,a,b+h-r);shape.lineTo(a,b+r);shape.quadraticCurveTo(a,b,a+r,b);const g=new T.ExtrudeGeometry(shape,{depth:d,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.025,bevelThickness:.025});g.translate(0,0,-d/2);return this.mesh(g,color,parent,x,y,z);}
 cyl(parent,color,x,y,z,rt,rb,h){return this.mesh(new T.CylinderGeometry(rt,rb,h,40),color,parent,x,y,z);}
 torus(parent,color,x,y,z,r,t){const o=this.mesh(new T.TorusGeometry(r,t,12,56),color,parent,x,y,z);o.rotation.x=Math.PI/2;return o;}
 curve(parent,color,points,r=.04){return this.mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),32,r,10,false),color,parent);}
 label(text,w=2.5,h=.55,color='#73503c',bg='#fff3d7'){
  const c=document.createElement('canvas');c.width=768;c.height=192;const x=c.getContext('2d');x.fillStyle=bg;x.fillRect(0,0,c.width,c.height);x.fillStyle=color;x.font='bold 65px Trebuchet MS, sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(text,384,100,725);
  const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;const o=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:tex}));this.scene.add(o);return o;
 }
 clickable(o,id){o.traverse(c=>{if(c.isMesh)c.userData.pick=id});this.interact.push(o);return o;}
 build(){
  this.box(this.scene,0xa5c490,0,2.2,-4.7,18,9,.2);this.box(this.scene,0xe1c69d,0,-.42,1,22,.2,22);
  for(let x=-9;x<=9;x+=1.5){this.box(this.scene,0xddbc90,x,-.27,1,1.46,.1,15,.01);}
  // Window, timber mullions, and a small, genuinely three-dimensional garden.
  this.box(this.scene,0xf7e9c7,-3.8,3.9,-4.25,4.6,4.2,.25);this.box(this.scene,0x9ed8e8,-3.8,3.9,-4.03,4.1,3.7,.05);
  this.orb(this.scene,0xffe3a1,-4.9,5.1,-3.9,.48);
  for(let i=0;i<6;i++){const x=-5.3+i*.6;this.cyl(this.scene,0x9c8055,x,2.8,-3.7,.06,.1,1.5);this.orb(this.scene,i%2?0x8fb578:0xa9c985,x,3.5+Math.sin(i)*.3,-3.65,.7,.95,.25);}
  this.box(this.scene,0xfff0d1,-3.8,3.9,-3.3,.1,3.6,.2);this.box(this.scene,0xfff0d1,-3.8,3.9,-3.3,4.1,.1,.2);this.box(this.scene,palette.wood,-3.8,1.9,-3.7,4.8,.18,1);
  this.box(this.scene,0xb88a58,3.8,3.0,-4,3.5,.14,1.1);this.box(this.scene,0xb88a58,3.8,4.8,-4,3.5,.14,1.1);
  for(let i=0;i<3;i++){this.jar(2.7+i*.85,3.35,-3.7,[0xe3aa79,0x9ab9af,0xf7e6b5][i]);}
  this.plant(4.6,4.92,-3.7);this.jar(2.8,5.15,-3.7,0xdcb5b6);
  const sign=this.box(this.scene,0xac7546,0,5.45,-4.05,3.2,.8,.2,.18);const text=this.label('ЛЕСНОЕ КАФЕ',2.95,.48,'#fff2ce','#ac7546');text.position.set(0,5.45,-3.89);
  for(const x of [-1.1,1.1])this.curve(this.scene,0x9a8257,[[x,5.7,-4],[x,6.4,-4]],.025);
  // Tactile timber counter, rounded edge, apron and chamfered legs.
  this.box(this.scene,palette.edge,0,.62,.9,10.6,1.1,5.1,.25);this.box(this.scene,palette.wood,0,1.24,.9,10.8,.25,5.25,.25);
  for(let z=-1.4;z<3.5;z+=.62)this.box(this.scene,0xa8794e,0,1.385,z,10.4,.012,.018,.005);
  this.box(this.scene,0xd1b493,0,.65,3.51,10.4,.65,.08);
  for(let x=-4.5;x<5;x+=1.5)this.box(this.scene,0xf1d8ad,x,.65,3.58,1.4,.55,.05);
  // Sink and running water.
  this.sink=new T.Group();this.sink.position.set(-3,1.44,.35);this.scene.add(this.sink);this.cyl(this.sink,0x329fbd,0,.05,0,.98,.88,.18);this.torus(this.sink,0x7bd3e4,0,.15,0,.94,.11);this.water=this.cyl(this.sink,new T.MeshStandardMaterial({color:0x8fdaeb,transparent:true,opacity:.8,roughness:.2}),0,.13,0,.83,.83,.04);
  this.curve(this.sink,0xe9cf92,[[-.7,.2,-.6],[-.7,1.2,-.6],[-.35,1.4,-.6],[0,1.25,-.6],[0,1.0,-.6]],.075);
  this.stream=this.cyl(this.sink,new T.MeshStandardMaterial({color:0xb3edfc,transparent:true,opacity:.65}),0,.61,-.6,.045,.08,.75);this.stream.visible=false;this.clickable(this.sink,'sink');
  // Mixing bowl with an actual concave interior.
  this.bowl=new T.Group();this.bowl.position.set(2.85,1.43,.5);this.scene.add(this.bowl);
  const profile=[[0,0],[.5,0],[.68,.08],[.87,.35],[.95,.65],[.89,.69],[.82,.37],[.61,.15],[.48,.1],[0,.1]].map(([x,y])=>new T.Vector2(x,y));this.mesh(new T.LatheGeometry(profile,56),palette.purple,this.bowl);this.torus(this.bowl,0xe2d0ed,0,.66,0,.91,.07);
  this.salad=new T.Group();this.salad.position.y=.26;this.bowl.add(this.salad);for(let i=0;i<12;i++){const a=i*2.4;this.orb(this.salad,[0xf3946c,0xbac85b,0xffdca0][i%3],Math.cos(a)*.48,.12+Math.sin(i)*.05,Math.sin(a)*.48,.16,.12,.14);}this.salad.visible=false;
  this.spoon=new T.Group();this.spoon.position.set(.18,.44,0);this.bowl.add(this.spoon);this.orb(this.spoon,0xd2a273,0,.02,0,.23,.06,.3);const handle=this.box(this.spoon,0xb27d4b,0,.42,-.16,.1,.8,.1);handle.rotation.x=-.4;this.spoon.rotation.z=-.5;this.clickable(this.bowl,'bowl');
  // Serving mat and low plate; large, independent target.
  this.plate=new T.Group();this.plate.position.set(0,1.43,.45);this.scene.add(this.plate);const mat=this.box(this.plate,0xe5bd85,0,0,0,2.4,.04,2.1,.2);this.cyl(this.plate,palette.cream,0,.08,0,.85,.75,.09);this.torus(this.plate,0xe5c7a1,0,.13,0,.78,.05);this.clickable(this.plate,'guest');
  // Fruit tray, with three graspable, volumetric food models.
  this.box(this.scene,0xb68250,0,1.44,2.4,5.9,.13,1.4,.22);this.box(this.scene,0xe3be88,0,1.52,2.4,5.6,.07,1.2,.18);
  ['apple','carrot','pear'].forEach((id,i)=>{const o=this.food(id);o.position.set((i-1)*1.7,1.88,2.4);o.userData.home=o.position.clone();this.foods[id]=o;this.scene.add(o);this.clickable(o,id)});
  this.rabbit();this.rabbitRoot.scale.setScalar(1.12);this.rabbitRoot.position.y=-.23;this.plant(-4.6,1.4,-1.1);
  this.rings={};for(const [id,pos] of [['sink',[-3,1.63,.35]],['bowl',[2.85,1.5,.5]],['guest',[0,1.63,.45]]]){const ring=this.torus(this.scene,0xffdf77,...pos,1.11,.035);ring.material.emissive=new T.Color(0xffc249);ring.material.emissiveIntensity=.45;ring.visible=false;this.rings[id]=ring;}
  this.sparkles=new T.Group();this.scene.add(this.sparkles);for(let i=0;i<12;i++){const o=this.orb(this.sparkles,i%2?0xffd05c:0xfff4cc,0,0,0,.06);o.visible=false;o.userData.i=i;}
 }
 jar(x,y,z,color){this.cyl(this.scene,color,x,y,z,.23,.26,.55);this.cyl(this.scene,0xbb945f,x,y+.31,z,.27,.27,.09);}
 plant(x,y,z){this.cyl(this.scene,0xcd8f6b,x,y+.23,z,.28,.2,.45);for(let i=0;i<7;i++){const a=i*2.4;const leaf=this.orb(this.scene,0x77975d,x+Math.cos(a)*.22,y+.65+Math.sin(i)*.1,z+Math.sin(a)*.22,.13,.4,.08);leaf.rotation.z=Math.cos(a)*.6;}}
 food(id){const g=new T.Group();if(id==='apple'){this.orb(g,0xe84d35,-.14,0,0,.34,.36,.34);this.orb(g,0xf15f42,.14,.02,0,.33,.36,.33);this.cyl(g,0x785036,0,.41,0,.04,.05,.2);const leaf=this.orb(g,0x73995d,.18,.43,0,.22,.07,.11);leaf.rotation.z=.35;}
 else if(id==='pear'){this.orb(g,0xb5c845,0,-.04,0,.37,.35,.34);this.orb(g,0xe0d67a,0,.24,0,.22,.33,.22);this.cyl(g,0x805c39,0,.58,0,.035,.045,.15);this.orb(g,0x89a361,.14,.59,0,.2,.06,.1);}
 else{const body=this.mesh(new T.ConeGeometry(.25,.85,32),0xf68723,g);body.rotation.z=Math.PI;this.orb(g,0xf8b052,0,.37,0,.25,.12,.25);for(let i=-1;i<=1;i++){const l=this.orb(g,0x749c59,i*.1,.68,0,.07,.28,.08);l.rotation.z=-i*.4;}for(let i=0;i<3;i++)this.curve(g,0xd88830,[[-.15,.2-i*.16,.17],[.02,.18-i*.16,.22],[.14,.2-i*.16,.16]],.012);g.rotation.z=-.25;}
 return g;}
 rabbit(){
  const g=new T.Group();this.rabbitRoot=g;g.position.set(0,0,-1.65);this.scene.add(g);
  this.orb(g,0xdbbba2,0,1.95,0,.72,.95,.56);this.orb(g,0xcbb79a,-.4,1.12,.25,.35,.18,.45);this.orb(g,0xcbb79a,.4,1.12,.25,.35,.18,.45);
  this.orb(g,0x6cafa7,0,2.05,.2,.64,.63,.48);this.box(g,0xf5e5ba,0,1.96,.67,.55,.4,.07,.12);
  this.head=new T.Group();this.head.position.y=3.13;g.add(this.head);const h=this.head;
  this.orb(h,0xdcbfa7,0,0,0,.78,.72,.61);this.orb(h,0xf4e5cc,0,-.22,.47,.57,.4,.29);
  this.ears=[];for(const sign of [-1,1]){const ear=new T.Group();ear.position.set(sign*.4,.61,-.02);ear.rotation.z=-sign*.14;h.add(ear);this.orb(ear,0xdcbfa7,0,.5,0,.23,.77,.23);this.orb(ear,0xe6b2a3,0,.52,.19,.125,.59,.055);this.ears.push(ear);
   this.orb(h,0xf4ece0,sign*.3,.05,.51,.22,.29,.12);const eye=this.orb(h,0x58402e,sign*.3,.045,.61,.135,.19,.065);if(!this.eyes)this.eyes=[];this.eyes.push(eye);this.orb(h,0xfffcf3,sign*.3-.04,.12,.665,.042);this.orb(h,0xeab6a0,sign*.49,-.18,.58,.14,.075,.035);
  }
  this.orb(h,0xbf8c7a,0,-.14,.76,.105,.065,.065);this.curve(h,0x825e49,[[-.18,-.31,.71],[0,-.37,.75],[.18,-.31,.71]],.017);
  this.arms=[];for(const sign of [-1,1]){const arm=new T.Group();arm.position.set(sign*.62,2.35,.03);g.add(arm);this.orb(arm,0xd8b99b,0,-.34,.08,.22,.5,.23);this.orb(arm,0xf0ddc0,0,-.69,.15,.24,.22,.25);this.arms.push(arm);}
  this.clickable(g,'guest');
 }
 setStep({stage,food,selected}){
  this.stage=stage;this.foodId=food;this.selected=selected;this.progress=0;this.stream.visible=false;this.salad.visible=stage==='serve';this.salad.scale.setScalar(1);this.bowl.position.set(2.85,1.43,.5);this.bowl.scale.setScalar(1);this.rabbitRoot.position.y=-.23;
  for(const [id,o] of Object.entries(this.foods)){o.visible=stage==='choose'||id===food;o.position.copy(o.userData.home);o.scale.setScalar(1);}
  if(stage==='stir')this.foods[food].position.set(2.85,1.85,.5);
  if(stage==='serve')this.foods[food].visible=false;
  this.setGoal(stage==='wash'?'sink':stage==='stir'?'bowl':stage==='serve'?'guest':null);this.render();
 }
 setGoal(id){this.goal=id;for(const [key,o] of Object.entries(this.rings))o.visible=key===id;}
 select(id){this.selected=id;for(const [key,o] of Object.entries(this.foods))if(o.visible)o.position.y=o.userData.home.y+(key===id?.24:0);this.render();}
 transfer(target){const o=this.foods[this.foodId];const pos=target==='sink'?new T.Vector3(-3,1.78,.35):new T.Vector3(2.85,1.9,.5);this.tween(o,pos);this.stream.visible=target==='sink';}
 work(stage,n){this.progress=n/3;if(stage==='wash'){this.stream.visible=true;this.water.scale.setScalar(1+.025*n);}else{this.salad.visible=true;this.foods[this.foodId].visible=false;this.spoon.rotation.y+=2.1;this.bowl.rotation.z=n%2?.035:-.035;}this.celebrate(stage==='wash'?[-3,1.8,.4]:[2.85,2,.5],false);this.render();}
 served(){this.eating=2.8;this.stream.visible=false;this.tween(this.bowl,new T.Vector3(0,1.57,.35));this.celebrate([0,2,-.6],true);}
 celebrate(pos,big=true){this.celebration=this.reduced?0:1;this.sparkles.position.set(...pos);this.sparkles.children.forEach(o=>{o.visible=!this.reduced;o.userData.big=big});this.head.rotation.z=.06;this.render();}
 tween(o,to){if(this.reduced){o.position.copy(to);return;}this.tweens=this.tweens.filter(t=>t.o!==o);this.tweens.push({o,from:o.position.clone(),to,t:0});}
 pick(e){const r=this.renderer.domElement.getBoundingClientRect();this.point.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.ray.setFromCamera(this.point,this.camera);return this.ray.intersectObjects(this.interact,true).find(h=>h.object.visible&&this.visible(h.object));}
 visible(o){for(let p=o;p;p=p.parent)if(!p.visible)return false;return true;}
 down(e){if(e.button!==0&&e.pointerType==='mouse')return;e.preventDefault();const h=this.pick(e);const id=h?.object.userData.pick;if(!id)return;this.renderer.domElement.setPointerCapture(e.pointerId);this.drag={id,pid:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,distance:0,moved:false};
  if(this.foods[id]&&this.stage==='choose'){this.action('choose',id);}
  if(this.foods[id]&&this.stage==='wash')this.selected=id;
  if(this.stage==='serve'&&id==='bowl'){this.action('select-bowl');}
  if((id==='sink'&&this.stage==='wash')||(id==='bowl'&&this.stage==='stir'))this.action('target',id);
  if(id==='guest'&&this.stage==='serve')this.action('target','guest');
 }
 move(e){if(!this.drag||this.drag.pid!==e.pointerId)return;const d=this.drag;const dx=e.clientX-d.lastX,dy=e.clientY-d.lastY;d.distance+=Math.hypot(dx,dy);d.lastX=e.clientX;d.lastY=e.clientY;if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>9)d.moved=true;
  if((d.id==='sink'&&this.stage==='wash')||(d.id==='bowl'&&this.stage==='stir')){if(d.id==='bowl'){this.spoon.rotation.y+=dx*.025;this.render(false);}if(d.distance>65){d.distance=0;this.action('work');}return;}
  if(this.foods[d.id]&&d.id===this.foodId&&this.stage==='wash'&&d.moved){this.pick(e);if(this.ray.ray.intersectPlane(this.plane,this.hit)){this.foods[d.id].position.copy(this.hit);this.foods[d.id].position.x=T.MathUtils.clamp(this.hit.x,-4.3,4.3);this.foods[d.id].position.z=T.MathUtils.clamp(this.hit.z,-.8,2.7);}this.render();}
  if(d.id==='bowl'&&this.stage==='serve'&&d.moved){this.pick(e);if(this.ray.ray.intersectPlane(this.plane,this.hit)){this.bowl.position.set(T.MathUtils.clamp(this.hit.x,-3,3),1.8,T.MathUtils.clamp(this.hit.z,-.5,1.5));}this.render();}
 }
 up(e){if(!this.drag)return;const d=this.drag;this.drag=null;const h=this.pick(e);if(d.moved&&this.foods[d.id]&&this.stage==='wash'){const pos=this.foods[d.id].position;const ok=pos.distanceTo(new T.Vector3(-3,1.8,.35))<1.35;if(ok)this.action('target','sink');else this.tween(this.foods[d.id],this.foods[d.id].userData.home.clone().add(new T.Vector3(0,.24,0)));}
  if(d.moved&&d.id==='bowl'&&this.stage==='serve'){if(this.bowl.position.x<1.3&&this.bowl.position.x>-1.3)this.action('target','guest');else this.tween(this.bowl,new T.Vector3(2.85,1.43,.5));}
  if(this.renderer.domElement.hasPointerCapture(e.pointerId))this.renderer.domElement.releasePointerCapture(e.pointerId);
 }
 cancel(){if(this.drag){const d=this.drag;if(this.foods[d.id]&&this.stage==='wash')this.tween(this.foods[d.id],this.foods[d.id].userData.home);if(d.id==='bowl'&&this.stage==='serve')this.tween(this.bowl,new T.Vector3(2.85,1.43,.5));this.drag=null;}}
 resize(){const {width:w,height:h}=this.host.getBoundingClientRect();if(!w||!h)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;const portrait=w/h<.95;this.camera.position.set(0,portrait?6.8:6.5,portrait?11.6:12);this.camera.fov=portrait?47:39;this.camera.lookAt(0,portrait?2.7:2.4,.2);this.camera.updateProjectionMatrix();this.render();}
 frame(ms){if(document.hidden)return;if(this.reduced){this.renderer.setAnimationLoop(null);this.render();return;}if(this.last&&ms-this.last<41)return;const dt=Math.min((ms-(this.last||ms))/1000,.05);this.last=ms;this.time+=dt;for(const tw of this.tweens){tw.t=Math.min(1,tw.t+dt*2.8);const t=1-(1-tw.t)**3;tw.o.position.lerpVectors(tw.from,tw.to,t);tw.o.position.y+=Math.sin(t*Math.PI)*.35;}this.tweens=this.tweens.filter(t=>t.t<1);
  if(!this.reduced){this.head.rotation.z=Math.sin(this.time*.9)*.025;if(this.eating>0){this.eating-=dt;this.head.rotation.x=Math.sin(this.time*9)*.055;this.arms[0].rotation.x=-.6;this.salad.scale.setScalar(Math.max(.15,this.eating/2.8));}else{this.head.rotation.x=0;this.arms[0].rotation.x=0;}this.ears[0].rotation.z=.14+Math.sin(this.time*1.2)*.025;this.ears[1].rotation.z=-.14-Math.sin(this.time*1.2)*.025;const blink=this.time%5>.12?1:.08;this.eyes.forEach(o=>o.scale.y=.19*blink);
   if(this.celebration>0){this.celebration=Math.max(0,this.celebration-dt*.7);const t=1-this.celebration;this.sparkles.children.forEach(o=>{const i=o.userData.i,a=i*2.4;o.position.set(Math.cos(a)*t*1.7,Math.sin(t*Math.PI)*1.5+Math.sin(a)*t,.3+Math.sin(a)*t*.8);o.visible=this.celebration>0;o.scale.setScalar(.065*this.celebration)});this.arms[1].rotation.z=-Math.sin(t*Math.PI)*.8;}
  }
  this.render(false);
 }
 render(shadows=true){if(shadows||this.tweens.length)this.renderer.shadowMap.needsUpdate=true;this.renderer.render(this.scene,this.camera);}
 dispose(){this.abort.abort();this.resizeObserver.disconnect();this.visibilityObserver.disconnect();this.renderer.setAnimationLoop(null);const geoms=new Set(),mats=new Set(),tex=new Set();this.scene.traverse(o=>{if(o.geometry)geoms.add(o.geometry);for(const m of (Array.isArray(o.material)?o.material:[o.material]))if(m){mats.add(m);if(m.map)tex.add(m.map)}});geoms.forEach(g=>g.dispose());tex.forEach(t=>t.dispose());mats.forEach(m=>m.dispose());this.renderer.dispose();this.renderer.forceContextLoss();this.renderer.domElement.remove();}
}
