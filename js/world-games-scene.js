import * as T from './vendor/three.min.js?v=16';
import {PicnicScene} from './picnic-scene.js?v=16';
import {WORLD_GAMES} from './world-games-data.js?v=16';
// Share renderer, primitive modelling, picking, observers and disposal with the cafe.
class PlayWorld extends PicnicScene{
 build(){
  this.items={};this.homes={};this.growth=[];this.pending=[];this.phase=0;this.stage='choose';this.selectedId=null;this.scene.background.set(0xcce8dc);this.scene.fog.color.set(0xcce8dc);
  this.box(this.scene,0x9ebd76,0,-.36,0,22,.4,17,.3);
  this.art.backdrop();this.art.ground();
  for(let x=-6;x<=6;x+=.7){this.box(this.scene,0xf3dfb2,x,.66,-4.1,.16,1.75,.14,.05);}
  for(const y of [.32,1])this.box(this.scene,0xe4c58e,0,y,-4.15,13,.13,.16);
  for(let i=0;i<12;i++){const x=(i%2?1:-1)*(4.5+(i%3)*.35),z=-3.3+(i%6)*1.1;this.art.flower(this.scene,x,.1,z,.12,[0xfff5c9,0xf575a7,0xad80d9][i%3]);}
  this.pointerRing=this.torus(this.scene,0xffe89f,0,.05,0,.7,.035);this.pointerRing.visible=false;
  if(this.kind==='parcels'){this.buildParcels();this.art.parcelDetails();}else{this.buildGarden();this.art.gardenDetails();}
  this.bits=new T.Group();this.scene.add(this.bits);for(let i=0;i<14;i++){const o=this.orb(this.bits,i%2?0xffd369:0xffffde,0,0,0,.055);o.visible=false;}
 }
 toy(id,color){const g=new T.Group();if(id==='ball'){this.orb(g,color,0,0,0,.36);this.torus(g,0xffebc9,0,0,0,.35,.025).rotation.x=0;}
  else if(id==='block')this.box(g,color,0,0,0,.67,.67,.67,.13);
  else this.torus(g,color,0,0,0,.3,.12).rotation.x=0;
  return g;
 }
 buildParcels(){
  for(let x=-3;x<=3;x+=1.5)this.box(this.scene,0xe2cfab,x,-.06,.4,1.25,.07,4.5,.1);
  const specs=WORLD_GAMES.parcels.rounds;
  specs.forEach((r,i)=>{const x=(i-1)*3;const home=new T.Group();home.position.set(x,0,-2.3);this.scene.add(home);
   this.box(home,[0xe8ae8a,0xa1c5ce,0xe7d28c][i],0,1.1,0,2,2.2,1.55,.18);
   this.art.houseDetails(home,i);
   this.box(home,0x8c7157,0,.83,.83,.84,1.55,.09,.18);this.orb(home,0xf3d58a,.27,.75,.92,.06);
   const badge=this.toy(r.id,r.color);badge.name='GiftBadge';badge.scale.setScalar(.65);badge.position.set(0,1.95,.91);home.add(badge);
   this.clickable(home,r.home);this.homes[r.home]=home;
  });
  this.cart=new T.Group();this.cart.position.set(0,.45,.6);this.scene.add(this.cart);
  this.box(this.cart,0xb98555,0,0,0,2.2,.18,1.5,.15);for(const x of [-.85,.85])for(const z of [-.5,.5]){const wheel=this.cyl(this.cart,0x756c5a,x,-.23,z,.24,.24,.15);wheel.rotation.z=Math.PI/2;}
  this.curve(this.cart,0xa47c53,[[1,0,.4],[1.7,.45,.4],[1.7,.7,.4]],.055);
  this.parcel=new T.Group();this.parcel.position.set(0,.1,0);this.cart.add(this.parcel);
  this.box(this.parcel,0xd4aa76,0,.05,0,1.6,.1,1.15,.03);for(const x of [-.77,.77])this.box(this.parcel,0xc79763,x,.5,0,.1,1,1.15,.04);for(const z of [-.53,.53])this.box(this.parcel,0xe2bc89,0,.5,z,1.5,1,.1,.04);
  this.lid=new T.Group();this.lid.position.set(0,1.02,-.53);this.parcel.add(this.lid);this.box(this.lid,0xe1b983,0,0,.55,1.6,.1,1.16,.05);this.lid.rotation.x=-1.8;
  this.ribbon=new T.Group();this.parcel.add(this.ribbon);this.box(this.ribbon,0x9850d7,0,1.12,0,.22,.035,1.18,.015);this.box(this.ribbon,0x9850d7,0,1.12,0,1.6,.035,.22,.015);for(const side of [-1,1]){const bow=this.torus(this.ribbon,0xb56ae9,side*.18,1.2,0,.18,.065);bow.scale.set(1,.65,1);bow.rotation.z=side*.35;}this.orb(this.ribbon,0xd290f3,0,1.22,0,.1,.08,.09);this.ribbon.visible=false;this.clickable(this.cart,'box');
  this.box(this.scene,0xdab281,0,.12,2.65,6.8,.18,1.3,.18);
  specs.forEach((r,i)=>{const o=this.toy(r.id,r.color);o.position.set((i-1)*2,.65,2.65);o.userData.home=o.position.clone();this.scene.add(o);this.clickable(o,r.id);this.items[r.id]=o;});
 }
 symbol(id,color){const g=new T.Group();
  if(id==='sunflower'){
   this.orb(g,0x70502c,0,0,0,.19,.19,.07);
   for(let i=0;i<18;i++){const a=i*Math.PI/9;const o=this.orb(g,i%2?0xffc529:0xffd94d,Math.sin(a)*.29,Math.cos(a)*.29,0,.065,.2,.045);o.rotation.z=-a;o.castShadow=false;}
   for(let i=0;i<24;i++){const a=i*2.4,r=Math.sqrt(i/24)*.16;const seed=this.orb(g,0xbd8a3a,Math.cos(a)*r,Math.sin(a)*r,.07,.018,.025,.016);seed.castShadow=false;}
  }else if(id==='berry'){
   const points=[[0,-.3],[.08,-.25],[.2,-.12],[.26,.1],[.23,.23],[.12,.28],[0,.27]].map(([x,y])=>new T.Vector2(x,y));this.mesh(new T.LatheGeometry(points,40),this.art.material(0xe52d38,.24,'glaze'),g);
   this.art.specks(g,55,[.24,.25,.215],0xffe1a0);
   for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const leaf=this.orb(g,0x3c9935,Math.cos(a)*.12,.27,Math.sin(a)*.12,.09,.04,.18);leaf.rotation.y=-a;leaf.castShadow=false;}
  }else{this.orb(g,0x389541,0,0,0,.39,.16,.11);for(let i=-1;i<=1;i++)this.orb(g,0x8fc53c,i*.2,0,.09,.12,.12,.09);this.curve(g,0xbce06e,[[-.34,.05,.09],[0,.14,.1],[.34,.05,.09]],.013);}
  return g;
 }
 buildGarden(){
  this.box(this.scene,0xbe976e,0,.16,-.55,8.5,.5,2.4,.2);this.box(this.scene,0x684d35,0,.44,-.55,8.1,.09,2.1,.1);
  WORLD_GAMES.garden.rounds.forEach((r,i)=>{const x=(i-1)*2.65;const pot=new T.Group();pot.position.set(x,.47,-.5);this.scene.add(pot);
   this.mesh(new T.CylinderGeometry(.7,.52,.84,40,1,true),0xbf825e,pot,0,.42,0);this.torus(pot,0xe0a47c,0,.86,0,.65,.085);this.cyl(pot,0x684a32,0,.82,0,.59,.59,.04);
   const badge=this.symbol(r.id,r.color);badge.scale.setScalar(.7);badge.position.set(0,.42,.65);pot.add(badge);this.clickable(pot,r.home);this.homes[r.home]=pot;
   const plant=new T.Group();plant.position.set(x,1.3,-.5);this.scene.add(plant);plant.scale.setScalar(.01);this.growth.push(plant);
   this.cyl(plant,0x739c54,0,.7,0,.04,.07,1.4);for(let j=0;j<4;j++){this.art.leaf(plant,(j%2?1:-1)*.23,.35+j*.2,0,.32,j%2?.4:-.4);}
   const harvest=this.symbol(r.id,r.color);harvest.scale.setScalar(1.3);harvest.position.set(0,1.4,0);plant.add(harvest);this.clickable(harvest,'harvest'+i);
   const pack=new T.Group();pack.position.set(x,.55,2.1);this.scene.add(pack);this.box(pack,0xf4dfad,0,0,0,.95,.9,.2,.1);const symbol=this.symbol(r.id,r.color);symbol.position.z=.16;pack.add(symbol);pack.userData.home=pack.position.clone();this.clickable(pack,r.id);this.items[r.id]=pack;
  });
  this.can=new T.Group();this.can.position.set(3.05,.7,.65);this.scene.add(this.can);this.cyl(this.can,0x70aebb,0,0,0,.34,.4,.65);this.torus(this.can,0x87bcc4,0,.33,0,.31,.035);this.curve(this.can,0x6097a4,[[.3,.2,0],[.7,.4,0],[.7,-.25,0],[.3,-.25,0]],.06);this.curve(this.can,0x84bcc5,[[-.2,-.15,0],[-.7,0,0],[-1,.35,0]],.1);this.clickable(this.can,'can');this.can.userData.home=this.can.position.clone();
  this.basket=new T.Group();this.basket.position.set(0,.28,3.3);this.scene.add(this.basket);this.cyl(this.basket,0xcaa16c,0,0,0,.78,.63,.4);for(let i=0;i<5;i++)this.torus(this.basket,0xe3bd88,0,-.16+i*.08,0,.65+i*.025,.025);this.curve(this.basket,0xa87f4d,[[-.73,.1,0],[-.5,.85,0],[.5,.85,0],[.73,.1,0]],.05);this.clickable(this.basket,'basket');this.gifts=WORLD_GAMES.garden.rounds.map((r,i)=>{const gift=this.symbol(r.id,r.color);gift.scale.setScalar(.7);gift.position.set((i-1)*.35,.3,0);gift.userData.slot=gift.position.clone();gift.visible=false;this.basket.add(gift);return gift;});
  this.drops=new T.Group();this.scene.add(this.drops);for(let i=0;i<14;i++)this.orb(this.drops,0x82c9e4,(i%3-.8)*.18,i*.09,Math.sin(i)*.2,.035,.08,.035);this.drops.visible=false;
 }
 configure(step,round){
  this.stage=step.id;this.scaleMotion=null;this.round=round;this.item=WORLD_GAMES[this.kind].rounds[round];this.selectedId=null;this.progress=0;this.pending=[];this.phase=0;
  Object.values(this.items).forEach(o=>{o.visible=true;o.position.copy(o.userData.home);o.scale.setScalar(1);});this.pointerRing.visible=false;
  if(this.kind==='parcels'){
   this.cart.position.set(0,.45,.6);this.lid.rotation.x=step.id==='deliver'?0:-1.8;this.ribbon.visible=step.id==='deliver';
   if(['close','deliver'].includes(step.id)){const o=this.items[this.item.id];o.position.set(0,1.1,.6);o.scale.setScalar(.8);}
   if(step.id==='deliver')this.items[this.item.id].visible=false;
  }else{
   if(round===0&&step.id==='choose')this.gifts.forEach(o=>o.visible=false);this.can.position.copy(this.can.userData.home);this.can.rotation.z=0;this.drops.visible=false;
   for(let i=0;i<3;i++){this.growth[i].visible=i<round||i===round&&['water','harvest'].includes(step.id);this.growth[i].scale.setScalar(i<round?1:i===round&&step.id==='harvest'?1:.12);}
   for(let i=0;i<3;i++)this.growth[i].children.at(-1).visible=i>=round;
   if(step.id!=='choose')Object.values(this.items).forEach((o,i)=>o.visible=i===round&&step.id==='plant');
  }
  this.render();
 }
 choose(id){this.selectedId=id;const o=this.items[id];if(o){this.to(o,o.userData.home.clone().add(new T.Vector3(0,.2,0)));}this.render();}
 highlight(target){const obj=this.items[target]||this.homes[target]||({box:this.cart,can:this.can,basket:this.basket,harvest:this.growth[this.round]}[target]);if(obj){const p=obj.getWorldPosition(new T.Vector3());this.pointerRing.position.set(p.x,.08,p.z);this.pointerRing.visible=true;}else this.pointerRing.visible=false;this.render();}
 markSelected(id){this.selectedId=id;this.highlight(id);}
 work(count){this.progress=count;
  if(this.kind==='parcels'){this.lid.rotation.x=-1.8*(1-count/3);this.ribbon.visible=count===3;}
  else{const target=this.homes[this.item.home];this.can.position.set(target.position.x+1,2.3,-.25);this.can.rotation.z=.65;this.drops.position.set(target.position.x,1.35,-.5);this.drops.visible=true;this.phase=.8;this.grow(.1+count*.3);}
  this.render();
 }
 complete(){
  this.highlight(null);if(this.stage==='pack'){this.to(this.items[this.item.id],new T.Vector3(0,1.1,.6));}
  if(this.stage==='deliver'){const target=this.homes[this.item.home].position.clone();target.y=.45;target.z+=1.5;this.to(this.cart,target);}
  if(this.stage==='plant'){this.items[this.item.id].visible=false;this.growth[this.round].visible=true;this.growth[this.round].scale.setScalar(.12);}
  if(this.stage==='water'){this.grow(1);this.drops.visible=false;this.can.rotation.z=0;}
  if(this.stage==='harvest'){const obj=this.growth[this.round].children.at(-1);const from=obj.getWorldPosition(new T.Vector3());obj.visible=false;const gift=this.gifts[this.round];gift.visible=true;gift.position.copy(this.basket.worldToLocal(from));this.to(gift,gift.userData.slot.clone());}
  this.pop=1;this.bits.position.set(this.kind==='parcels'?0:this.homes[this.item.home].position.x,1.5,-.1);this.bits.children.forEach(o=>o.visible=!this.reduced);this.render();
 }
 grow(size){const o=this.growth[this.round];if(this.reduced)o.scale.setScalar(size);else this.scaleMotion={o,from:o.scale.x,to:size,t:0};}
 to(o,target){if(this.reduced){o.position.copy(target);this.render();return;}this.pending=this.pending.filter(t=>t.o!==o);this.pending.push({o,from:o.position.clone(),target,t:0});}
 down(e){if(e.pointerType==='mouse'&&e.button!==0)return;e.preventDefault();const hit=this.pick(e);let id=hit?.object.userData.pick;if(this.stage==='water'&&id==='harvest'+this.round)id=this.item.home;if(!id)return;this.renderer.domElement.setPointerCapture(e.pointerId);this.drag={id,pid:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,distance:0,moved:false};this.action('pick',id);}
 move(e){const d=this.drag;if(!d||d.pid!==e.pointerId)return;const dx=e.clientX-d.lastX,dy=e.clientY-d.lastY;d.distance+=Math.hypot(dx,dy);d.lastX=e.clientX;d.lastY=e.clientY;d.moved=Math.hypot(e.clientX-d.x,e.clientY-d.y)>10;
  if(this.stage==='close'&&d.id==='box'){if(d.distance>65){d.distance=0;this.action('rub','box');}return;}
  if(this.stage==='water'&&(d.id==='can'||d.id===this.item.home)){const p=this.project(this.item.home);if(d.id==='can'&&Math.hypot(e.clientX-p.x,e.clientY-p.y)>80)return;if(d.distance>65){d.distance=0;this.action('rub',this.item.home);}return;}
  const o=this.dragObject(d.id);if(o&&d.moved){this.pick(e);this.plane.constant=-1.25;if(this.ray.ray.intersectPlane(this.plane,this.hit)){o.position.set(T.MathUtils.clamp(this.hit.x,-4.2,4.2),1.25,T.MathUtils.clamp(this.hit.z,-2,3.2));this.render();}}
 }
 dragObject(id){if(this.stage==='pack'||this.stage==='plant')return this.items[id];if(this.stage==='deliver'&&id==='box')return this.cart;return null;}
 up(e){const d=this.drag;if(!d)return;this.drag=null;const hit=this.pick(e);if(d.moved){let id=hit?.object.userData.pick;
   const o=this.dragObject(d.id);if(o){let target=null;for(const [key,h] of Object.entries(this.homes))if(o.position.distanceTo(h.position.clone().setY(1.25))<1.65)target=key;
    if(this.stage==='pack'&&Math.abs(o.position.x)<1.1&&Math.abs(o.position.z-.6)<1.4)target='box';
    const accepted=this.action('drop',target||id);if(!accepted){if(this.stage!=='deliver')this.to(o,o.userData.home||new T.Vector3(0,.45,.6));else this.to(this.cart,new T.Vector3(0,.45,.6));}
   }else if(this.stage==='harvest')this.action('drop',id);
  }
  if(this.renderer.domElement.hasPointerCapture(e.pointerId))this.renderer.domElement.releasePointerCapture(e.pointerId);
 }
 cancel(){const d=this.drag;if(d){const o=this.dragObject(d.id);if(o)this.to(o,o.userData.home||new T.Vector3(0,.45,.6));}this.drag=null;}
 resize(){const {width:w,height:h}=this.host.getBoundingClientRect();if(!w||!h)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.fov=w/h<1?49:40;this.camera.position.set(0,w/h<1?8:7,12);this.camera.lookAt(0,1.25,0);this.camera.updateProjectionMatrix();this.render();}
 frame(ms){if(document.hidden)return;if(this.reduced){this.renderer.setAnimationLoop(null);this.render();return;}if(this.last&&ms-this.last<41)return;const dt=Math.min((ms-(this.last||ms))/1000,.06);this.last=ms;this.time+=dt;
  for(const t of this.pending){t.t=Math.min(1,t.t+dt*1.7);const v=1-(1-t.t)**3;t.o.position.lerpVectors(t.from,t.target,v);t.o.position.y+=Math.sin(v*Math.PI)*.15;}this.pending=this.pending.filter(t=>t.t<1);
  if(this.scaleMotion){const s=this.scaleMotion;s.t=Math.min(1,s.t+dt*1.8);s.o.scale.setScalar(T.MathUtils.lerp(s.from,s.to,1-(1-s.t)**3));if(s.t===1)this.scaleMotion=null;}
  if(this.pop>0){this.pop-=dt*.7;this.bits.children.forEach((o,i)=>{const t=1-this.pop;o.position.set(Math.cos(i*2.4)*t,Math.sin(t*Math.PI)+Math.sin(i)*t*.3,Math.sin(i*2.4)*t);o.visible=this.pop>0;});}
  if(this.phase>0){this.phase-=dt;this.drops.children.forEach((o,i)=>o.position.y=(this.time*1.5+i*.09)%1.2);if(this.phase<=0)this.drops.visible=false;}
  this.render(false);
 }
 render(shadows=true){if(shadows||this.pending?.length||this.scaleMotion)this.renderer.shadowMap.needsUpdate=true;this.renderer.render(this.scene,this.camera);}
 project(id){const obj=this.items[id]||this.homes[id]||({box:this.cart,can:this.can,basket:this.basket,harvest:this.growth[this.round]}[id]);if(!obj)return null;const v=obj.getWorldPosition(new T.Vector3()).project(this.camera);const r=this.renderer.domElement.getBoundingClientRect();return{x:r.x+(v.x+1)*r.width/2,y:r.y+(1-v.y)*r.height/2};}
}
export class ParcelWorld extends PlayWorld{get kind(){return 'parcels';}}
export class GardenWorld extends PlayWorld{get kind(){return 'garden';}}
