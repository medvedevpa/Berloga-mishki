import {GLTFLoader} from './vendor/gltf-loader.min.js?v=16';
const path=name=>new URL('assets/models/'+name,document.baseURI).href;
function disposeTree(root){const geo=new Set(),mats=new Set(),tex=new Set();root.traverse(o=>{if(o.geometry)geo.add(o.geometry);for(const m of(Array.isArray(o.material)?o.material:[o.material]))if(m){mats.add(m);for(const v of Object.values(m))if(v?.isTexture)tex.add(v);}});geo.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());tex.forEach(t=>t.dispose());}
function decorate(root,id,art){root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=!String(o.material?.name).startsWith('Roof');o.userData.pick=id;if(art){const name=String(o.material?.name);const type=/fur|muzzle/.test(name)?'fur':/linen/.test(name)?'cloth':/timber/.test(name)?'wood':null;if(type){o.material.map=art.texture(type);o.material.bumpMap=o.material.map;o.material.bumpScale=type==='fur'?.012:.007;o.material.needsUpdate=true;}}}});}
export function loadSculptedModels(owner){
 owner.modelAssets={loaded:[],failed:[]};const loader=new GLTFLoader();
 async function load(name,apply){try{const gltf=await loader.loadAsync(path(name));if(owner.art.disposed){disposeTree(gltf.scene);return;}apply(gltf.scene);owner.modelAssets.loaded.push(name);owner.render();}catch(error){if(!owner.art.disposed)owner.modelAssets.failed.push(name);}}
 if(!owner.kind){
  return Promise.all([load('bunny-chef-v15.glb',model=>{
   const names=['HeadRig','EarLeftRig','EarRightRig','EyeLeftRig','EyeRightRig','ArmLeftRig','ArmRightRig'];const parts=names.map(n=>model.getObjectByName(n));if(parts.some(n=>!n)){disposeTree(model);throw Error('Incomplete bunny rig');}
   const old=owner.rabbitRoot;model.position.copy(old.position);model.scale.copy(old.scale).multiplyScalar(1.18);model.position.y=-.68;owner.rabbitRestY=-.68;decorate(model,'guest',owner.art);owner.scene.add(model);old.visible=false;owner.interact=owner.interact.filter(o=>o!==old);owner.interact.push(model);
   owner.rabbitRoot=model;owner.head=parts[0];owner.ears=parts.slice(1,3);owner.eyes=parts.slice(3,5);owner.eyes.forEach(o=>o.userData.openScaleY=o.scale.y);owner.arms=parts.slice(5,7);
  }),load('produce-v15.glb',source=>{for(const id of ['apple','carrot','pear']){const model=source.getObjectByName(id);if(!model)throw Error('Incomplete produce');const target=owner.foods[id];target.children.forEach(o=>o.visible=false);model.removeFromParent();target.add(model);decorate(model,id,owner.art);}})]);
 }
 if(owner.kind==='parcels')return load('cottage-v15.glb',source=>{
  const roofs=[0xe45a34,0x328ec6,0xe7b82e];Object.values(owner.homes).forEach((home,i)=>{
   const badge=home.getObjectByName('GiftBadge');home.children.forEach(o=>{if(o!==badge)o.visible=false;});const model=source.clone(true);
   model.traverse(o=>{if(o.isMesh&&['RoofClay','RoofShade'].includes(o.material?.name)){o.material=o.material.clone();o.material.color.setHex(roofs[i]);if(o.material.name==='RoofShade')o.material.color.multiplyScalar(.76);}});
   home.add(model);if(badge){badge.visible=true;badge.position.set(0,1.99,1.12);}decorate(model,['red','blue','yellow'][i],owner.art);
  });
 });
 return Promise.all(['sunflower','berry','pea'].map((name,i)=>load(name+'-v15.glb',source=>{
  const body=source.getObjectByName('PlantBody'),fruit=source.getObjectByName('Harvest');if(!body||!fruit){disposeTree(source);throw Error('Incomplete plant');}
  const plant=owner.growth[i],harvest=plant.children.at(-1);plant.children.forEach(o=>{if(o!==harvest)o.visible=false;});
  body.removeFromParent();plant.add(body);plant.remove(harvest);plant.add(harvest);harvest.children.forEach(o=>o.visible=false);fruit.removeFromParent();fruit.position.set(0,0,0);fruit.scale.multiplyScalar(1/1.3);harvest.add(fruit);const gift=owner.gifts[i];gift.children.forEach(o=>o.visible=false);const collected=fruit.clone(true);gift.add(collected);decorate(collected,'basket');decorate(fruit,'harvest'+i);decorate(body,'harvest'+i);owner.interact.push(body);
 })));
}
