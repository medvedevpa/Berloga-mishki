import * as T from './vendor/three.min.js?v=15';
const WOOD=new Set([0xd5a16d,0x926344,0xb88a58,0xac7546,0xa8794e,0xb68250,0xe3be88,0xd1b493,0xf1d8ad,0xd2a273,0xb27d4b,0xbb945f,0xb98555,0xa47c53,0xd4aa76,0xc79763,0xe2bc89,0xe1b983,0xdab281,0xf3dfb2,0xe4c58e,0xbe976e]);
const CERAMIC=new Set([0x329fbd,0x7bd3e4,0x9566c5,0xe2d0ed,0xfff4dc,0xe5c7a1,0x70aebb,0x87bcc4,0x6097a4,0x84bcc5]);
const FUR=new Set([0xdbbba2,0xcbb79a,0xdcbfa7,0xf4e5cc,0xd8b99b,0xf0ddc0]);
const CLOTH=new Set([0x6cafa7,0xf5e5ba,0x28a365]);
export class StorybookArt{
 constructor(owner){this.owner=owner;this.textures=new Set();this.maps=new Map();this.materials=new Map();this.disposed=false;this.seed=919;}
 random(){this.seed=(this.seed*1664525+1013904223)>>>0;return this.seed/4294967296;}
 texture(kind){if(this.maps.has(kind))return this.maps.get(kind);const c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,512,512);
  if(kind==='wood'){
   x.fillStyle='#fbe6bf';x.fillRect(0,0,512,512);for(let i=0;i<190;i++){const y=i*3; x.strokeStyle=i%7?'#89501820':'#88501a55';x.lineWidth=i%7?.6:1.2;x.beginPath();for(let a=0;a<=512;a+=8){const b=y+Math.sin(a/67+i*.7)*2.5+Math.sin(a/19+i)*.4;a?x.lineTo(a,b):x.moveTo(a,b);}x.stroke();}
   for(const [a,b]of [[130,180],[400,380]])for(let i=0;i<8;i++){x.strokeStyle='#a3672626';x.lineWidth=1;x.beginPath();x.ellipse(a,b,8+i*6,1.5+i*.8,0,0,Math.PI*2);x.stroke();}
  }else if(kind==='cloth'){
   x.fillStyle='#faf7e9';x.fillRect(0,0,512,512);for(let i=0;i<512;i+=4){x.fillStyle=i%12?'#a38e6522':'#fff9';x.fillRect(i,0,1,512);x.fillRect(0,i,512,1);}for(let i=0;i<512;i+=64){x.fillStyle='#789a7733';x.fillRect(i,0,32,512);x.fillRect(0,i,512,32);}
  }else if(kind==='fur'){
   x.fillStyle='#fff3d9';x.fillRect(0,0,512,512);for(let i=0;i<16000;i++){const a=this.random()*512,b=this.random()*512;x.strokeStyle=i%2?'#9c75452b':'#fffdf7b0';x.lineWidth=.6;x.beginPath();x.moveTo(a,b);x.quadraticCurveTo(a+2,b+4,a+this.random()*5-1,b+7+this.random()*8);x.stroke();}
  }else if(kind==='grass'){
   x.fillStyle='#468b2a';x.fillRect(0,0,512,512);for(let i=0;i<13000;i++){const a=this.random()*512,b=this.random()*512;x.strokeStyle=['#32712170','#83bd4b80','#acd56665','#2d6c2450'][i%4];x.lineWidth=.5+this.random();x.beginPath();x.moveTo(a,b);x.lineTo(a+this.random()*5-2,b-3-this.random()*9);x.stroke();}
  }else if(kind==='soil'){
   x.fillStyle='#654326';x.fillRect(0,0,512,512);for(let i=0;i<9500;i++){x.fillStyle=['#9f744b','#4a3321','#bd9465','#765534'][i%4];x.beginPath();x.ellipse(this.random()*512,this.random()*512,1+this.random()*4,1+this.random()*2,this.random()*6,0,7);x.fill();}
  }else if(kind==='tile'){
   x.fillStyle='#fff1cf';x.fillRect(0,0,512,512);for(let a=0;a<4;a++)for(let b=0;b<4;b++){x.fillStyle=(a+b)%2?'#57b4b0':'#fff1cf';x.fillRect(a*128+2,b*128+2,124,124);x.strokeStyle='#b3a47e';x.lineWidth=2;x.strokeRect(a*128+2,b*128+2,124,124);}
  }else{
   for(let i=0;i<6500;i++){x.fillStyle=i%2?'#9b68331a':'#fff9';x.fillRect(this.random()*512,this.random()*512,1,1);}
  }
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=Math.min(8,this.owner.renderer.capabilities.getMaxAnisotropy());this.maps.set(kind,t);this.textures.add(t);return t;
 }
 material(color,roughness=.58,type){type=type||(WOOD.has(color)?'wood':CERAMIC.has(color)?'glaze':FUR.has(color)?'fur':CLOTH.has(color)?'cloth':color===0x684a32||color===0x684d35?'soil':'paint');const key=type+color+roughness;if(this.materials.has(key))return this.materials.get(key);
  const opts={color,roughness:type==='glaze'?.18:type==='paint'?.36:type==='fur'?.94:type==='cloth'?.9:roughness,metalness:0};
  if(['wood','fur','cloth','soil'].includes(type)){opts.map=this.texture(type);opts.bumpMap=opts.map;opts.bumpScale=type==='fur'?.023:type==='wood'?.018:.012;}
  if(type==='glaze'||type==='paint')Object.assign(opts,{clearcoat:type==='glaze'?.8:.4,clearcoatRoughness:.22});
  const m=new T.MeshPhysicalMaterial(opts);this.materials.set(key,m);return m;
 }
 environment(){const scene=new T.Scene();scene.background=new T.Color(0xb6d9ea);const geo=new T.PlaneGeometry(10,7);const mats=[];for(const [pos,col,scale]of [[[-5,5,2],0xfff6d7,4],[[5,3,1],0xd9f4ff,2],[[0,6,-4],0xffffff,2]]){const mat=new T.MeshBasicMaterial({color:new T.Color(col).multiplyScalar(scale)});mats.push(mat);const panel=new T.Mesh(geo,mat);panel.position.set(...pos);panel.lookAt(0,0,0);scene.add(panel);}const pmrem=new T.PMREMGenerator(this.owner.renderer);this.environmentTarget=pmrem.fromScene(scene,.08,.1,30,{size:128});this.owner.scene.environment=this.environmentTarget.texture;this.owner.scene.environmentIntensity=.38;pmrem.dispose();geo.dispose();mats.forEach(m=>m.dispose());}
 backdrop(parent=this.owner.scene,x=0,y=4.9,z=-7.5,w=25,h=15){const material=new T.MeshBasicMaterial({color:0xffffff,toneMapped:false});const plane=new T.Mesh(new T.PlaneGeometry(w,h),material);plane.position.set(x,y,z);parent.add(plane);const tex=new T.TextureLoader().load(new URL('assets/forest-backdrop-v14.png',document.baseURI).href,()=>{if(!this.disposed)this.owner.render();});tex.colorSpace=T.SRGBColorSpace;material.map=tex;this.textures.add(tex);return plane;}
 ground(){const tex=this.texture('grass');tex.repeat.set(5,4);const o=new T.Mesh(new T.PlaneGeometry(22,17),new T.MeshStandardMaterial({map:tex,color:0xb3cf78,roughness:1}));o.rotation.x=-Math.PI/2;o.position.y=-.125;o.receiveShadow=true;this.owner.scene.add(o);}
 flower(parent,x,y,z,size=.18,color=0xfff4d5){const p=this.owner,g=new T.Group();g.position.set(x,y,z);g.scale.setScalar(size);parent.add(g);const mesh=new T.InstancedMesh(new T.SphereGeometry(1,12,8),this.material(color,.48),7),d=new T.Object3D();for(let i=0;i<7;i++){const a=i*Math.PI*2/7;d.position.set(Math.sin(a)*.48,Math.cos(a)*.48,0);d.scale.set(.17,.33,.065);d.rotation.z=-a;d.updateMatrix();mesh.setMatrixAt(i,d.matrix);}g.add(mesh);p.orb(g,0xf4c038,0,0,.06,.23,.23,.08);return g;}
 specks(parent,count,axes,color=0xfde1b5,seed=1){const geo=new T.SphereGeometry(1,7,5),mat=this.material(color,.85,'paint'),mesh=new T.InstancedMesh(geo,mat,count);const dummy=new T.Object3D();for(let i=0;i<count;i++){const a=i*2.39996+seed,y=1-2*(i+.5)/count,r=Math.sqrt(1-y*y);dummy.position.set(Math.cos(a)*r*axes[0],y*axes[1],Math.sin(a)*r*axes[2]);dummy.scale.set(.012,.019,.008);dummy.lookAt(0,0,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}parent.add(mesh);return mesh;}
 fur(parent,x,y,z,axes,count=520){const geo=new T.ConeGeometry(.007,.036,3),mat=this.material(0xe3c39d,.98,'fur'),mesh=new T.InstancedMesh(geo,mat,count);const d=new T.Object3D();for(let i=0;i<count;i++){const yy=1-2*(i+.5)/count,a=i*2.39996,r=Math.sqrt(1-yy*yy),zz=Math.sin(a)*r,xx=Math.cos(a)*r;const face=zz>.5&&yy<.45&&yy>-.75;d.position.set(x+xx*axes[0],y+yy*axes[1],z+zz*axes[2]);d.scale.setScalar(face?0:1);d.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),new T.Vector3(xx,yy,zz).normalize());d.updateMatrix();mesh.setMatrixAt(i,d.matrix);}mesh.castShadow=false;parent.add(mesh);}
 leaf(parent,x,y,z,s=.3,angle=0){const p=this.owner,o=p.orb(parent,0x3b9b39,x,y,z,s,s*.35,s*.3);o.rotation.z=angle;const vein=p.curve(parent,0xa5ca53,[[x-s*.75,y,z+s*.25],[x,y,z+s*.32],[x+s*.75,y,z+s*.25]],.008);vein.rotation.z=angle;vein.castShadow=false;return o;}
 decorateCafe(){const p=this.owner;
  // Timber wall framing, backsplash tiles and richly patterned linen.
  for(const x of [-6.2,-1.65,1.7,6.2])p.box(p.scene,0x926344,x,3.2,-4.4,.17,6.5,.25);
  const tiles=p.mesh(new T.PlaneGeometry(3.6,1.2),new T.MeshStandardMaterial({map:this.texture('tile'),roughness:.24}),p.scene,3.8,1.95,-4.42);
  for(let i=0;i<3;i++){const x=2.7+i*.85;const jar=p.orb(p.scene,new T.MeshPhysicalMaterial({color:[0xffb324,0xeb654b,0x86b839][i],roughness:.12,clearcoat:.9}),x,3.35,-3.68,.19,.22,.2);jar.castShadow=false;p.box(p.scene,0xfff4dc,x,3.35,-3.45,.26,.18,.025);}
  for(const x of [-5.57,-2.03])p.mesh(new T.PlaneGeometry(.38,3.5),this.material(0xe9a76a,.95,'cloth'),p.scene,x,3.85,-3.25);
  const linen=p.mesh(new T.PlaneGeometry(1.7,1.05),this.material(0xf28c83,.9,'cloth'),p.scene,-.6,1.4,2.22);linen.rotation.x=-Math.PI/2;
  for(const x of [-3.8,3.5]){const g=new T.Group();g.position.set(x,1.39,1.8);p.scene.add(g);p.cyl(g,0xb87d55,0,.14,0,.2,.16,.28);for(let i=0;i<3;i++){const a=i*2.1;p.curve(g,0x4f8c37,[[0,.25,0],[Math.cos(a)*.1,.55,0]],.015);this.flower(g,Math.cos(a)*.12,.6+i*.05,.02,.11);}}
  // Vivid, glossy food with pores and leaf details.
  for(const [id,g]of Object.entries(p.foods)){g.traverse(o=>{if(o.isMesh&&o.material.color){const c=o.material.color.getHex();if([0xe84d35,0xf15f42].includes(c))o.material=this.material(0xdd2525,.24,'glaze');if(c===0xb5c845)o.material=this.material(0xaec328,.27,'glaze');}});if(id==='apple')this.specks(g,100,[.42,.34,.32],0xffbd69);}
  // Glazed floral bowls and gold rim; these decorations follow the moving objects.
  for(let i=0;i<6;i++){const a=i*Math.PI/3;const flower=this.flower(p.bowl,Math.sin(a)*.84,.36,Math.cos(a)*.84,.12);flower.rotation.y=a;}
  p.torus(p.bowl,0xfad789,0,.69,0,.92,.025);p.torus(p.sink,0xc5f5ef,0,.18,0,.95,.035);
  this.rabbitDetails();
 }
 rabbitDetails(){const p=this.owner,h=p.head;if(!h)return;h.scale.setScalar(1.08);this.fur(h,0,0,0,[.79,.73,.62],800);p.ears.forEach(ear=>this.fur(ear,0,.5,0,[.235,.78,.235],230));
  p.eyes.forEach(eye=>{eye.material=new T.MeshPhysicalMaterial({color:0x482416,roughness:.055,clearcoat:1,clearcoatRoughness:.07});});
  for(const s of [-1,1]){for(let i=0;i<3;i++){const hair=p.curve(h,0xffedcb,[[s*.38,-.24+i*.045,.72],[s*.64,-.21+i*.07,.75],[s*.85,-.25+i*.13,.67]],.007);hair.castShadow=false;}p.orb(h,0xffd9b4,s*.28,-.32,.73,.1,.08,.06);p.orb(p.rabbitRoot,0xf1c357,s*.35,2.48,.58,.065);}
  // Stitched pocket and tiny daisy, keeping the original rabbit proportions.
  for(let i=0;i<9;i++)p.box(p.rabbitRoot,0xfff2c3,-.25+i*.06,1.8,.72,.025,.018,.018,.002);
  this.flower(p.rabbitRoot,.02,2,.735,.12);p.box(p.rabbitRoot,0xffecc9,0,2.57,.63,.72,.08,.07);
 }
 houseDetails(home,i){const p=this.owner,roofColors=[0xde5130,0x278cc6,0xebbe26];
  for(const x of [-.93,.93])p.box(home,0xfde4b8,x,1.12,.83,.12,2,.1);
  for(const x of [-.65,.65]){p.box(home,0x4baccb,x,1.38,.85,.32,.4,.05);p.box(home,0xffe7b2,x,1.38,.9,.035,.43,.03);p.box(home,0xffe7b2,x,1.38,.9,.35,.035,.03);p.box(home,0xa87543,x,1.06,.98,.48,.16,.24);for(let j=0;j<3;j++)this.flower(home,x-.14+j*.14,1.17,.99,.07,[0xffebba,0xfa7dac,0xffc947][(i+j)%3]);}
  for(let j=0;j<4;j++)p.box(home,0xa36b32,-.3+j*.2,.83,.902,.012,1.3,.01,.003);
  const shape=new T.Shape();shape.moveTo(-1.28,0);shape.lineTo(0,1.06);shape.lineTo(1.28,0);shape.closePath();const geo=new T.ExtrudeGeometry(shape,{depth:2.05,bevelEnabled:true,bevelSize:.03,bevelThickness:.03,bevelSegments:2});geo.translate(0,0,-1.025);p.mesh(geo,this.material(roofColors[i],.45,'paint'),home,0,2.2,0);
  for(const side of [-1,1])for(let row=0;row<4;row++)for(let col=0;col<5;col++){const x=side*(.16+row*.32),y=3.26-Math.abs(x)*.82,z=-.86+col*.43;const tile=p.mesh(new T.CylinderGeometry(.19,.19,.43,10,1,true,0,Math.PI),this.material(roofColors[i],.4,'paint'),home,x,y,z);tile.rotation.set(Math.PI/2,0,side*.68);tile.castShadow=false;}
  p.torus(home,0xfbe6b7,0,2.57,1.08,.19,.045).rotation.x=0;p.orb(home,0x4b9fae,0,2.57,1.07,.16,.16,.035);
 }
 parcelDetails(){const p=this.owner;for(const x of [-.85,.85])for(const z of [-.5,.5]){const side=x<0?-1:1;const hub=p.cyl(p.cart,0xc59651,x+side*.09,-.23,z,.12,.12,.05);hub.rotation.z=Math.PI/2;const rim=p.torus(p.cart,0xe0ba76,x+side*.09,-.23,z,.21,.025);rim.rotation.set(0,Math.PI/2,0);for(let i=0;i<6;i++){const a=i*Math.PI/3;p.curve(p.cart,0x9d703d,[[x+side*.1,-.23,z],[x+side*.1,-.23+Math.sin(a)*.19,z+Math.cos(a)*.19]],.015);}}}
 gardenDetails(){const p=this.owner;
  for(let i=0;i<3;i++){const pot=p.homes['pot'+i];for(let j=0;j<20;j++){const a=j*Math.PI/10;const dot=p.orb(pot,0xf6d39d,Math.sin(a)*.66,.72,Math.cos(a)*.66,.025);dot.castShadow=false;}p.torus(pot,0xb56b3b,0,.06,0,.54,.035);}
  const basket=p.basket;
  for(let i=0;i<30;i++){const a=i*Math.PI/15;p.curve(basket,0x9c642e,[[Math.sin(a)*.63,-.17,Math.cos(a)*.63],[Math.sin(a)*.72,0,Math.cos(a)*.72],[Math.sin(a)*.78,.18,Math.cos(a)*.78]],.013);}
  this.flower(p.can,0,-.03,.37,.13);p.torus(p.can,0xf6da83,0,-.3,0,.39,.015);
 }
 dispose(){this.disposed=true;this.environmentTarget?.dispose();}
}
