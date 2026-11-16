/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Hu=0,wl=1,Wu=2;var Sn=1,Oo=2,ga=3,_i=0,Ft=1,ri=2,Di=0,Or=1,El=2,Al=3,Rl=4,Xu=5,rr=100,ju=101,qu=102,Yu=103,Zu=104,Ku=200,Ju=201,$u=202,Qu=203,Bs=204,zs=205,ed=206,td=207,id=208,rd=209,ad=210,nd=211,sd=212,od=213,ld=214,Vs=0,ks=1,Gs=2,zr=3,Hs=4,Ws=5,Xs=6,js=7,qh=0,hd=1,cd=2,gi=0,Yh=1,Zh=2,Kh=3,zn=4,Jh=5,$h=6,Qh=7,Cl="attached",ud="detached",ec=300,or=301,Vr=302,qs=303,Ys=304,Vn=306,Oi=1e3,ni=1001,Sa=1002,yt=1003,Fo=1004;var Nr=1005;var Mt=1006,xa=1007;var fi=1008;var kt=1009,tc=1010,ic=1011,Ta=1012,Bo=1013,xi=1014,Xt=1015,Fi=1016,zo=1017,Vo=1018,wa=1020,rc=35902,ac=35899,nc=1021,sc=1022,jt=1023,Bi=1026,nr=1027,ko=1028,Go=1029,kr=1030,Ho=1031;var Wo=1033,Tn=33776,wn=33777,En=33778,An=33779,Zs=35840,Ks=35841,Js=35842,$s=35843,Qs=36196,eo=37492,to=37496,io=37488,ro=37489,ao=37490,no=37491,so=37808,oo=37809,lo=37810,ho=37811,co=37812,uo=37813,po=37814,mo=37815,fo=37816,go=37817,vo=37818,_o=37819,xo=37820,yo=37821,Mo=36492,bo=36494,So=36495,To=36283,wo=36284,Eo=36285,Ao=36286;var Gr=2300,Hr=2301,es=2302,Il=2400,Pl=2401,Ll=2402,dd=2500;var oc=0,kn=1,La=2,pd=3200;var lc=0,md=1,Xi="",ut="srgb",Pt="srgb-linear",Pn="linear",rt="srgb";var gr=7680;var Ul=519,fd=512,gd=513,vd=514,Xo=515,_d=516,xd=517,jo=518,yd=519,Ro=35044;var Dl="300 es",si=2e3,Ln=2001;function hc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Md(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bd(){let t=Ea("canvas");return t.style.display="block",t}var Nl={},Wr=null;function Un(...t){let e="THREE."+t.shift();Wr?Wr("log",e,...t):console.log(e,...t)}function Ce(...t){let e="THREE."+t.shift();Wr?Wr("warn",e,...t):console.warn(e,...t)}function Be(...t){let e="THREE."+t.shift();Wr?Wr("error",e,...t):console.error(e,...t)}function Aa(...t){let e=t.join(" ");e in Nl||(Nl[e]=!0,Ce(...t))}function Sd(t,e,i){return new Promise(function(r,a){function n(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Yr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,t);t.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=1234567,Fr=Math.PI/180,Xr=180/Math.PI;function qt(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[t&255]+Rt[t>>8&255]+Rt[t>>16&255]+Rt[t>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[i&63|128]+Rt[i>>8&255]+"-"+Rt[i>>16&255]+Rt[i>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function je(t,e,i){return Math.max(e,Math.min(i,t))}function qo(t,e){return(t%e+e)%e}function Td(t,e,i,r,a){return r+(t-e)*(a-r)/(i-e)}function wd(t,e,i){return t!==e?(i-t)/(e-t):0}function ya(t,e,i){return(1-i)*t+i*e}function Ed(t,e,i,r){return ya(t,e,1-Math.exp(-i*r))}function Ad(t,e=1){return e-Math.abs(qo(t,e*2)-e)}function Rd(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function Cd(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function Id(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Pd(t,e){return t+Math.random()*(e-t)}function Ld(t){return t*(.5-Math.random())}function Ud(t){t!==void 0&&(Ol=t);let e=Ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dd(t){return t*Fr}function Nd(t){return t*Xr}function Od(t){return(t&t-1)===0&&t!==0}function Fd(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Bd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zd(t,e,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((e+r)/2),c=s((e+r)/2),u=n((e-r)/2),d=s((e-r)/2),p=n((r-e)/2),v=s((r-e)/2);switch(a){case"XYX":t.set(o*c,l*u,l*d,o*h);break;case"YZY":t.set(l*d,o*c,l*u,o*h);break;case"ZXZ":t.set(l*u,l*d,o*c,o*h);break;case"XZX":t.set(o*c,l*v,l*p,o*h);break;case"YXY":t.set(l*p,o*c,l*v,o*h);break;case"ZYZ":t.set(l*v,l*p,o*c,o*h);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var ur={DEG2RAD:Fr,RAD2DEG:Xr,generateUUID:qt,clamp:je,euclideanModulo:qo,mapLinear:Td,inverseLerp:wd,lerp:ya,damp:Ed,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Id,randFloat:Pd,randFloatSpread:Ld,seededRandom:Ud,degToRad:Dd,radToDeg:Nd,isPowerOfTwo:Od,ceilPowerOfTwo:Fd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:at,denormalize:ai},$=class cc{constructor(e=0,i=0){cc.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,a=e.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=je(this.x,e.x,i.x),this.y=je(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=je(this.x,e,i),this.y=je(this.y,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*a+e.x,this.y=n*a+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oi=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[n+0],d=a[n+1],p=a[n+2],v=a[n+3];if(s<=0){t[e+0]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c;return}if(s>=1){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=v;return}if(c!==v||o!==u||l!==d||h!==p){let g=o*u+l*d+h*p+c*v;g<0&&(u=-u,d=-d,p=-p,v=-v,g=-g);let f=1-s;if(g<.9995){let m=Math.acos(g),M=Math.sin(m);f=Math.sin(f*m)/M,s=Math.sin(s*m)/M,o=o*f+u*s,l=l*f+d*s,h=h*f+p*s,c=c*f+v*s}else{o=o*f+u*s,l=l*f+d*s,h=h*f+p*s,c=c*f+v*s;let m=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=m,l*=m,h*=m,c*=m}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[n],u=a[n+1],d=a[n+2],p=a[n+3];return t[e]=s*p+h*c+o*d-l*u,t[e+1]=o*p+h*u+l*c-s*d,t[e+2]=l*p+h*d+s*u-o*c,t[e+3]=h*p-s*c-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,a=t._z,n=t._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],n=e[1],s=e[5],o=e[9],l=e[2],h=e[6],c=e[10],u=i+s+c;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>c){let d=2*Math.sqrt(1+i-s-c);this._w=(h-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-i-c);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+h)/d}else{let d=2*Math.sqrt(1+c-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,n=t._w,s=e._x,o=e._y,l=e._z,h=e._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,r=t._y,a=t._z,n=t._w,s=this.dot(t);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-e;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,e=Math.sin(e*l)/h,this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+a*e,this._w=this._w*o+n*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+a*e,this._w=this._w*o+n*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class uc{constructor(e=0,i=0,r=0){uc.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Fl.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,a=this.z,n=e.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(e){let i=this.x,r=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,h=2*(s*a-o*r),c=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*h+s*u-o*c,this.y=r+l*c+o*h-n*u,this.z=a+l*u+n*c-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=je(this.x,e.x,i.x),this.y=je(this.y,e.y,i.y),this.z=je(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=je(this.x,e,i),this.y=je(this.y,e,i),this.z=je(this.z,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,a=e.y,n=e.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(je(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return i*i+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let a=Math.sin(i)*e;return this.x=a*Math.sin(r),this.y=Math.cos(i)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ts=new A,Fl=new oi,Ye=class dc{constructor(e,i,r,a,n,s,o,l,h){dc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,a,n,s,o,l,h)}set(e,i,r,a,n,s,o,l,h){let c=this.elements;return c[0]=e,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],u=r[7],d=r[2],p=r[5],v=r[8],g=a[0],f=a[3],m=a[6],M=a[1],x=a[4],y=a[7],C=a[2],E=a[5],P=a[8];return n[0]=s*g+o*M+l*C,n[3]=s*f+o*x+l*E,n[6]=s*m+o*y+l*P,n[1]=h*g+c*M+u*C,n[4]=h*f+c*x+u*E,n[7]=h*m+c*y+u*P,n[2]=d*g+p*M+v*C,n[5]=d*f+p*x+v*E,n[8]=d*m+p*y+v*P,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return i*s*c-i*o*h-r*n*c+r*o*l+a*n*h-a*s*l}invert(){let e=this.elements,i=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*s-o*h,d=o*l-c*n,p=h*n-s*l,v=i*u+r*d+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=u*g,e[1]=(a*h-c*r)*g,e[2]=(o*r-a*s)*g,e[3]=d*g,e[4]=(c*i-a*l)*g,e[5]=(a*n-o*i)*g,e[6]=p*g,e[7]=(r*l-h*i)*g,e[8]=(s*i-r*n)*g,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+e,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(e,i){return this.premultiply(is.makeScale(e,i)),this}rotate(e){return this.premultiply(is.makeRotation(-e)),this}translate(e,i){return this.premultiply(is.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},is=new Ye,Bl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){let t={enabled:!0,workingColorSpace:Pt,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===rt&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(a.r=Br(a.r),a.g=Br(a.g),a.b=Br(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Xi?Pn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Pt]:{primaries:e,whitePoint:r,transfer:Pn,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:r,transfer:rt,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),t}var $e=Vd();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Br(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var vr,kd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vr===void 0&&(vr=Ea("canvas")),vr.width=t.width,vr.height=t.height;let r=vr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=vr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Ni(a[n]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gd=0,Yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=qt(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(rs(r[n].image)):a.push(rs(r[n]))}else a=rs(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function rs(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Hd=0,as=new A,Lt=class Rn extends Yr{constructor(e=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,r=ni,a=ni,n=Mt,s=fi,o=jt,l=kt,h=Rn.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=qt(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(as).x}get height(){return this.source.getSize(as).y}get depth(){return this.source.getSize(as).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let r=e[i];if(r===void 0){Ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ce(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ec;Lt.DEFAULT_ANISOTROPY=1;var mt=class pc{constructor(e=0,i=0,r=0,a=1){pc.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,a){return this.x=e,this.y=i,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,a,n,s=e.elements,o=s[0],l=s[4],h=s[8],c=s[1],u=s[5],d=s[9],p=s[2],v=s[6],g=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(d-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,M=(u+1)/2,x=(g+1)/2,y=(l+c)/4,C=(h+p)/4,E=(d+v)/4;return m>M&&m>x?m<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(m),a=y/r,n=C/r):M>x?M<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(M),r=y/a,n=E/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=C/n,a=E/n),this.set(r,a,n,i),this}let f=Math.sqrt((v-d)*(v-d)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(v-d)/f,this.y=(h-p)/f,this.z=(c-l)/f,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=je(this.x,e.x,i.x),this.y=je(this.y,e.y,i.y),this.z=je(this.z,e.z,i.z),this.w=je(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=je(this.x,e,i),this.y=je(this.y,e,i),this.z=je(this.z,e,i),this.w=je(this.w,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(je(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wd=class extends Yr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new mt(0,0,t,e),this.scissorTest=!1,this.viewport=new mt(0,0,t,e);let r={width:t,height:e,depth:i.depth},a=new Lt(r);this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Yo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Wd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},mc=class extends Lt{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xd=class extends Lt{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)t.isMesh===!0?t.getVertexPosition(n,ei):ei.fromBufferAttribute(a,n),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let r=t.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oa),Xa.subVectors(this.max,oa),_r.subVectors(t.a,oa),xr.subVectors(t.b,oa),yr.subVectors(t.c,oa),zi.subVectors(xr,_r),Vi.subVectors(yr,xr),Ji.subVectors(_r,yr);let e=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-Ji.z,Ji.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,Ji.z,0,-Ji.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-Ji.y,Ji.x,0];return!ns(e,_r,xr,yr,Xa)||(e=[1,0,0,0,1,0,0,0,1],!ns(e,_r,xr,yr,Xa))?!1:(ja.crossVectors(zi,Vi),e=[ja.x,ja.y,ja.z],ns(e,_r,xr,yr,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new A,new A,new A,new A,new A,new A,new A,new A],ei=new A,Wa=new Yt,_r=new A,xr=new A,yr=new A,zi=new A,Vi=new A,Ji=new A,oa=new A,Xa=new A,ja=new A,$i=new A;function ns(t,e,i,r,a){for(let n=0,s=t.length-3;n<=s;n+=3){$i.fromArray(t,n);let o=a.x*Math.abs($i.x)+a.y*Math.abs($i.y)+a.z*Math.abs($i.z),l=e.dot($i),h=i.dot($i),c=r.dot($i);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var jd=new Yt,la=new A,ss=new A,Zt=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):jd.setFromPoints(t).getCenter(i);let r=0;for(let a=0,n=t.length;a<n;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;la.subVectors(t,this.center);let e=la.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(la.copy(t.center).add(ss)),this.expandByPoint(la.copy(t.center).sub(ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ai=new A,os=new A,qa=new A,ki=new A,ls=new A,Ya=new A,hs=new A,Ua=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){os.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(os);let a=t.distanceTo(e)*.5,n=-this.direction.dot(qa),s=ki.dot(this.direction),o=-ki.dot(qa),l=ki.lengthSq(),h=Math.abs(1-n*n),c,u,d,p;if(h>0)if(c=n*o-s,u=n*s-o,p=a*h,c>=0)if(u>=-p)if(u<=p){let v=1/h;c*=v,u*=v,d=c*(c+n*u+2*s)+u*(n*c+u+2*o)+l}else u=a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u=-a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;else u<=-p?(c=Math.max(0,-(-n*a+s)),u=c>0?-a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l):u<=p?(c=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(c=Math.max(0,-(n*a+s)),u=c>0?a:Math.min(Math.max(-a,-o),a),d=-c*c+u*(u+2*o)+l);else u=n>0?-a:a,c=Math.max(0,-(n*u+s)),d=-c*c+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(os).addScaledVector(qa,u),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,a=t.radius*t.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,e):this.at(s,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(a=(t.min.y-u.y)*h,n=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,n=(t.min.y-u.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(t.min.z-u.z)*c,o=(t.max.z-u.z)*c):(s=(t.max.z-u.z)*c,o=(t.min.z-u.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,a){ls.subVectors(e,t),Ya.subVectors(i,t),hs.crossVectors(ls,Ya);let n=this.direction.dot(hs),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;ki.subVectors(this.origin,t);let o=s*this.direction.dot(Ya.crossVectors(ki,Ya));if(o<0)return null;let l=s*this.direction.dot(ls.cross(ki));if(l<0||o+l>n)return null;let h=-s*ki.dot(hs);return h<0?null:this.at(h/n,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class Co{constructor(e,i,r,a,n,s,o,l,h,c,u,d,p,v,g,f){Co.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,a,n,s,o,l,h,c,u,d,p,v,g,f)}set(e,i,r,a,n,s,o,l,h,c,u,d,p,v,g,f){let m=this.elements;return m[0]=e,m[4]=i,m[8]=r,m[12]=a,m[1]=n,m[5]=s,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=v,m[11]=g,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let i=this.elements,r=e.elements,a=1/Mr.setFromMatrixColumn(e,0).length(),n=1/Mr.setFromMatrixColumn(e,1).length(),s=1/Mr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,a=e.y,n=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){let d=s*c,p=s*u,v=o*c,g=o*u;i[0]=l*c,i[4]=-l*u,i[8]=h,i[1]=p+v*h,i[5]=d-g*h,i[9]=-o*l,i[2]=g-d*h,i[6]=v+p*h,i[10]=s*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,v=h*c,g=h*u;i[0]=d+g*o,i[4]=v*o-p,i[8]=s*h,i[1]=s*u,i[5]=s*c,i[9]=-o,i[2]=p*o-v,i[6]=g+d*o,i[10]=s*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,v=h*c,g=h*u;i[0]=d-g*o,i[4]=-s*u,i[8]=v+p*o,i[1]=p+v*o,i[5]=s*c,i[9]=g-d*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(e.order==="ZYX"){let d=s*c,p=s*u,v=o*c,g=o*u;i[0]=l*c,i[4]=v*h-p,i[8]=d*h+g,i[1]=l*u,i[5]=g*h+d,i[9]=p*h-v,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(e.order==="YZX"){let d=s*l,p=s*h,v=o*l,g=o*h;i[0]=l*c,i[4]=g-d*u,i[8]=v*u+p,i[1]=u,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*u+v,i[10]=d-g*u}else if(e.order==="XZY"){let d=s*l,p=s*h,v=o*l,g=o*h;i[0]=l*c,i[4]=-u,i[8]=h*c,i[1]=d*u+g,i[5]=s*c,i[9]=p*u-v,i[2]=v*u-p,i[6]=o*c,i[10]=g*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qd,e,Yd)}lookAt(e,i,r){let a=this.elements;return zt.subVectors(e,i),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gi.crossVectors(r,zt),Gi.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gi.crossVectors(r,zt)),Gi.normalize(),Za.crossVectors(zt,Gi),a[0]=Gi.x,a[4]=Za.x,a[8]=zt.x,a[1]=Gi.y,a[5]=Za.y,a[9]=zt.y,a[2]=Gi.z,a[6]=Za.z,a[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],u=r[5],d=r[9],p=r[13],v=r[2],g=r[6],f=r[10],m=r[14],M=r[3],x=r[7],y=r[11],C=r[15],E=a[0],P=a[4],R=a[8],T=a[12],b=a[1],L=a[5],F=a[9],k=a[13],B=a[2],K=a[6],G=a[10],H=a[14],J=a[3],se=a[7],oe=a[11],xe=a[15];return n[0]=s*E+o*b+l*B+h*J,n[4]=s*P+o*L+l*K+h*se,n[8]=s*R+o*F+l*G+h*oe,n[12]=s*T+o*k+l*H+h*xe,n[1]=c*E+u*b+d*B+p*J,n[5]=c*P+u*L+d*K+p*se,n[9]=c*R+u*F+d*G+p*oe,n[13]=c*T+u*k+d*H+p*xe,n[2]=v*E+g*b+f*B+m*J,n[6]=v*P+g*L+f*K+m*se,n[10]=v*R+g*F+f*G+m*oe,n[14]=v*T+g*k+f*H+m*xe,n[3]=M*E+x*b+y*B+C*J,n[7]=M*P+x*L+y*K+C*se,n[11]=M*R+x*F+y*G+C*oe,n[15]=M*T+x*k+y*H+C*xe,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14],v=e[3],g=e[7],f=e[11],m=e[15],M=l*p-h*d,x=o*p-h*u,y=o*d-l*u,C=s*p-h*c,E=s*d-l*c,P=s*u-o*c;return i*(g*M-f*x+m*y)-r*(v*M-f*C+m*E)+a*(v*x-g*C+m*P)-n*(v*y-g*E+f*P)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=i,a[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],v=e[12],g=e[13],f=e[14],m=e[15],M=u*f*h-g*d*h+g*l*p-o*f*p-u*l*m+o*d*m,x=v*d*h-c*f*h-v*l*p+s*f*p+c*l*m-s*d*m,y=c*g*h-v*u*h+v*o*p-s*g*p-c*o*m+s*u*m,C=v*u*l-c*g*l-v*o*d+s*g*d+c*o*f-s*u*f,E=i*M+r*x+a*y+n*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=M*P,e[1]=(g*d*n-u*f*n-g*a*p+r*f*p+u*a*m-r*d*m)*P,e[2]=(o*f*n-g*l*n+g*a*h-r*f*h-o*a*m+r*l*m)*P,e[3]=(u*l*n-o*d*n-u*a*h+r*d*h+o*a*p-r*l*p)*P,e[4]=x*P,e[5]=(c*f*n-v*d*n+v*a*p-i*f*p-c*a*m+i*d*m)*P,e[6]=(v*l*n-s*f*n-v*a*h+i*f*h+s*a*m-i*l*m)*P,e[7]=(s*d*n-c*l*n+c*a*h-i*d*h-s*a*p+i*l*p)*P,e[8]=y*P,e[9]=(v*u*n-c*g*n-v*r*p+i*g*p+c*r*m-i*u*m)*P,e[10]=(s*g*n-v*o*n+v*r*h-i*g*h-s*r*m+i*o*m)*P,e[11]=(c*o*n-s*u*n-c*r*h+i*u*h+s*r*p-i*o*p)*P,e[12]=C*P,e[13]=(c*g*a-v*u*a+v*r*d-i*g*d-c*r*f+i*u*f)*P,e[14]=(v*o*a-s*g*a-v*r*l+i*g*l+s*r*f-i*o*f)*P,e[15]=(s*u*a-c*o*a+c*r*l-i*u*l-s*r*d+i*o*d)*P,this}scale(e){let i=this.elements,r=e.x,a=e.y,n=e.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=e.x,o=e.y,l=e.z,h=n*s,c=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,c*o+r,c*l-a*s,0,h*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,a,n,s){return this.set(1,r,n,0,e,1,s,0,i,a,1,0,0,0,0,1),this}compose(e,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,c=s+s,u=o+o,d=n*h,p=n*c,v=n*u,g=s*c,f=s*u,m=o*u,M=l*h,x=l*c,y=l*u,C=r.x,E=r.y,P=r.z;return a[0]=(1-(g+m))*C,a[1]=(p+y)*C,a[2]=(v-x)*C,a[3]=0,a[4]=(p-y)*E,a[5]=(1-(d+m))*E,a[6]=(f+M)*E,a[7]=0,a[8]=(v+x)*P,a[9]=(f-M)*P,a[10]=(1-(d+g))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,i,r){let a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let n=Mr.set(a[0],a[1],a[2]).length(),s=Mr.set(a[4],a[5],a[6]).length(),o=Mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),ti.copy(this);let l=1/n,h=1/s,c=1/o;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=c,ti.elements[9]*=c,ti.elements[10]*=c,i.setFromRotationMatrix(ti),r.x=n,r.y=s,r.z=o,this}makePerspective(e,i,r,a,n,s,o=si,l=!1){let h=this.elements,c=2*n/(i-e),u=2*n/(r-a),d=(i+e)/(i-e),p=(r+a)/(r-a),v,g;if(l)v=n/(s-n),g=s*n/(s-n);else if(o===si)v=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===Ln)v=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,a,n,s,o=si,l=!1){let h=this.elements,c=2/(i-e),u=2/(r-a),d=-(i+e)/(i-e),p=-(r+a)/(r-a),v,g;if(l)v=1/(s-n),g=s/(s-n);else if(o===si)v=-2/(s-n),g=-(s+n)/(s-n);else if(o===Ln)v=-1/(s-n),g=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=v,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},Mr=new A,ti=new ke,qd=new A(0,0,0),Yd=new A(1,1,1),Gi=new A,Za=new A,zt=new A,Vl=new ke,kl=new oi,qi=class fc{constructor(e=0,i=0,r=0,a=fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,a=this._order){return this._x=e,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],c=a[9],u=a[2],d=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zd=0,Gl=new A,br=new oi,Ri=new ke,Ka=new A,ha=new A,Kd=new A,Jd=new oi,Hl=new A(1,0,0),Wl=new A(0,1,0),Xl=new A(0,0,1),jl={type:"added"},$d={type:"removed"},Sr={type:"childadded",child:null},cs={type:"childremoved",child:null},lt=class Cn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();let e=new A,i=new qi,r=new oi,a=new A(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ye}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,i){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ka.copy(e):Ka.set(e,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ha,Ka,this.up):Ri.lookAt(Ka,ha,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),br.setFromRotationMatrix(Ri),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jl),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent($d),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jl),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(e,i);if(n!==void 0)return n}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(e.animations,l))}}if(i){let o=s(e.geometries),l=s(e.materials),h=s(e.textures),c=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),v.length>0&&(r.nodes=v)}return r.object=a,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let a=e.children[r];this.add(a.clone())}return this}};lt.DEFAULT_UP=new A(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new A,Ci=new A,us=new A,Ii=new A,Tr=new A,wr=new A,ql=new A,ds=new A,ps=new A,ms=new A,fs=new mt,gs=new mt,vs=new mt,Lr=class Ur{constructor(e=new A,i=new A,r=new A){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,a){a.subVectors(r,i),ii.subVectors(e,i),a.cross(ii);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,i,r,a,n){ii.subVectors(a,i),Ci.subVectors(r,i),us.subVectors(e,i);let s=ii.dot(ii),o=ii.dot(Ci),l=ii.dot(us),h=Ci.dot(Ci),c=Ci.dot(us),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,v=(s*c-o*l)*d;return n.set(1-p-v,v,p)}static containsPoint(e,i,r,a){return this.getBarycoord(e,i,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,i,r,a,n,s,o,l){return this.getBarycoord(e,i,r,a,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ii.x),l.addScaledVector(s,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,i,r,a,n,s){return fs.setScalar(0),gs.setScalar(0),vs.setScalar(0),fs.fromBufferAttribute(e,i),gs.fromBufferAttribute(e,r),vs.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(fs,n.x),s.addScaledVector(gs,n.y),s.addScaledVector(vs,n.z),s}static isFrontFacing(e,i,r,a){return ii.subVectors(r,i),Ci.subVectors(e,i),ii.cross(Ci).dot(a)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,a){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,i,r,a){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ii.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ur.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,a,n){return Ur.getInterpolation(e,this.a,this.b,this.c,i,r,a,n)}containsPoint(e){return Ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,a=this.b,n=this.c,s,o;Tr.subVectors(a,r),wr.subVectors(n,r),ds.subVectors(e,r);let l=Tr.dot(ds),h=wr.dot(ds);if(l<=0&&h<=0)return i.copy(r);ps.subVectors(e,a);let c=Tr.dot(ps),u=wr.dot(ps);if(c>=0&&u<=c)return i.copy(a);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(Tr,s);ms.subVectors(e,n);let p=Tr.dot(ms),v=wr.dot(ms);if(v>=0&&p<=v)return i.copy(n);let g=p*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),i.copy(r).addScaledVector(wr,o);let f=c*v-p*u;if(f<=0&&u-c>=0&&p-v>=0)return ql.subVectors(n,a),o=(u-c)/(u-c+(p-v)),i.copy(a).addScaledVector(ql,o);let m=1/(f+g+d);return s=g*m,o=d*m,i.copy(r).addScaledVector(Tr,s).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function _s(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ut){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=$e.workingColorSpace){return this.r=t,this.g=e,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=$e.workingColorSpace){if(t=qo(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,n=2*i-a;this.r=_s(n,a,t+1/3),this.g=_s(n,a,t),this.b=_s(n,a,t-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(t,e=ut){function i(a){a!==void 0&&parseFloat(a)<1&&Ce("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ce("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(n===6)return this.setHex(parseInt(a,16),e);Ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ut){let i=gc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ut){return $e.workingToColorSpace(Ct.copy(this),t),Math.round(je(Ct.r*255,0,255))*65536+Math.round(je(Ct.g*255,0,255))*256+Math.round(je(Ct.b*255,0,255))}getHexString(t=ut){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$e.workingColorSpace){$e.workingToColorSpace(Ct.copy(this),e);let i=Ct.r,r=Ct.g,a=Ct.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=h<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=$e.workingColorSpace){return $e.workingToColorSpace(Ct.copy(this),e),t.r=Ct.r,t.g=Ct.g,t.b=Ct.b,t}getStyle(t=ut){$e.workingToColorSpace(Ct.copy(this),t);let e=Ct.r,i=Ct.g,r=Ct.b;return t!==ut?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ja);let i=ya(Hi.h,Ja.h,e),r=ya(Hi.s,Ja.s,e),a=ya(Hi.l,Ja.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Le;Le.NAMES=gc;var Qd=0,li=class extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=Or,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ce(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bs&&(i.blendSrc=this.blendSrc),this.blendDst!==zs&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(e){let a=r(t.textures),n=r(t.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gt=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gx=ep();function ep(){let t=new ArrayBuffer(4),e=new Float32Array(t),i=new Uint32Array(t),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[l]=h|c}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var xt=new A,$a=new $,tp=0,It=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ro,this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$a.fromBufferAttribute(this,e),$a.applyMatrix3(t),this.setXY(e,$a.x,$a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xt.fromBufferAttribute(this,e),xt.applyMatrix3(t),this.setXYZ(e,xt.x,xt.y,xt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xt.fromBufferAttribute(this,e),xt.applyMatrix4(t),this.setXYZ(e,xt.x,xt.y,xt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xt.fromBufferAttribute(this,e),xt.applyNormalMatrix(t),this.setXYZ(e,xt.x,xt.y,xt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xt.fromBufferAttribute(this,e),xt.transformDirection(t),this.setXYZ(e,xt.x,xt.y,xt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=at(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=at(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=at(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=at(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=at(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=at(e,this.array),i=at(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=at(e,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=at(e,this.array),i=at(i,this.array),r=at(r,this.array),a=at(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}};var vc=class extends It{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var _c=class extends It{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ge=class extends It{constructor(t,e,i){super(new Float32Array(t),e,i)}},ip=0,Wt=new ke,xs=new lt,Er=new A,Vt=new Yt,ca=new Yt,wt=new A,ht=class xc extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hc(e)?_c:vc)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ye().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,i,r){return Wt.makeTranslation(e,i,r),this.applyMatrix4(Wt),this}scale(e,i,r){return Wt.makeScale(e,i,r),this.applyMatrix4(Wt),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=e.length;a<n;a++){let s=e[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ge(r,3))}else{let r=Math.min(e.length,i.count);for(let a=0;a<r;a++){let n=e[a];i.setXYZ(a,n.x,n.y,n.z||0)}e.length>i.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Vt.setFromBufferAttribute(n),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,ca.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,ca.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(ca.min),Vt.expandByPoint(ca.max))}Vt.getCenter(r);let a=0;for(let n=0,s=e.count;n<s;n++)wt.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(wt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)wt.fromBufferAttribute(o,h),l&&(Er.fromBufferAttribute(e,h),wt.add(Er)),a=Math.max(a,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<r.count;R++)o[R]=new A,l[R]=new A;let h=new A,c=new A,u=new A,d=new $,p=new $,v=new $,g=new A,f=new A;function m(R,T,b){h.fromBufferAttribute(r,R),c.fromBufferAttribute(r,T),u.fromBufferAttribute(r,b),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,T),v.fromBufferAttribute(n,b),c.sub(h),u.sub(h),p.sub(d),v.sub(d);let L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(L),f.copy(u).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(L),o[R].add(g),o[T].add(g),o[b].add(g),l[R].add(f),l[T].add(f),l[b].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,T=M.length;R<T;++R){let b=M[R],L=b.start,F=b.count;for(let k=L,B=L+F;k<B;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let x=new A,y=new A,C=new A,E=new A;function P(R){C.fromBufferAttribute(a,R),E.copy(C);let T=o[R];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(E,T);let b=y.dot(l[R])<0?-1:1;s.setXYZW(R,x.x,x.y,x.z,b)}for(let R=0,T=M.length;R<T;++R){let b=M[R],L=b.start,F=b.count;for(let k=L,B=L+F;k<B;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new It(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);let a=new A,n=new A,s=new A,o=new A,l=new A,h=new A,c=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let v=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,f),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,g),h.fromBufferAttribute(r,f),o.add(c),l.add(c),h.add(c),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=i.count;d<p;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),c.subVectors(s,n),u.subVectors(a,n),c.cross(u),r.setXYZ(d+0,c.x,c.y,c.z),r.setXYZ(d+1,c.x,c.y,c.z),r.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)wt.fromBufferAttribute(e,i),wt.normalize(),e.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,v=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*c;for(let m=0;m<c;m++)d[v++]=h[p++]}return new It(d,c,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new xc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=e(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],p=e(d,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];e.data.attributes[l]=h.toJSON(e.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(a[l]=c,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let a=e.attributes;for(let h in a){let c=a[h];this.setAttribute(h,c.clone(i))}let n=e.morphAttributes;for(let h in n){let c=[],u=n[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let h=0,c=s.length;h<c;h++){let u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yl=new ke,Qi=new Ua,Qa=new Zt,Zl=new A,en=new A,tn=new A,rn=new A,ys=new A,an=new A,Kl=new A,nn=new A,_t=class extends lt{constructor(t=new ht,e=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let s=this.morphTargetInfluences;if(a&&s){an.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],c=a[o];h!==0&&(ys.fromBufferAttribute(c,t),n?an.addScaledVector(ys,h):an.addScaledVector(ys.sub(e),h))}e.add(an)}return e}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(a),Qi.copy(t.ray).recast(t.near),!(Qa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Qa,Zl)===null||Qi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Yl.copy(a).invert(),Qi.copy(t.ray).applyMatrix4(Yl),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,v=u.length;p<v;p++){let g=u[p],f=n[g.materialIndex],m=Math.max(g.start,d.start),M=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,y=M;x<y;x+=3){let C=s.getX(x),E=s.getX(x+1),P=s.getX(x+2);r=sn(this,f,t,i,l,h,c,C,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let g=p,f=v;g<f;g+=3){let m=s.getX(g),M=s.getX(g+1),x=s.getX(g+2);r=sn(this,n,t,i,l,h,c,m,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,v=u.length;p<v;p++){let g=u[p],f=n[g.materialIndex],m=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,y=M;x<y;x+=3){let C=x,E=x+1,P=x+2;r=sn(this,f,t,i,l,h,c,C,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,f=v;g<f;g+=3){let m=g,M=g+1,x=g+2;r=sn(this,n,t,i,l,h,c,m,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function rp(t,e,i,r,a,n,s,o){let l;if(e.side===Ft?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,e.side===_i,o),l===null)return null;nn.copy(o),nn.applyMatrix4(t.matrixWorld);let h=i.ray.origin.distanceTo(nn);return h<i.near||h>i.far?null:{distance:h,point:nn.clone(),object:t}}function sn(t,e,i,r,a,n,s,o,l,h){t.getVertexPosition(o,en),t.getVertexPosition(l,tn),t.getVertexPosition(h,rn);let c=rp(t,e,i,r,en,tn,rn,Kl);if(c){let u=new A;Lr.getBarycoord(Kl,en,tn,rn,u),a&&(c.uv=Lr.getInterpolatedAttribute(a,o,l,h,u,new $)),n&&(c.uv1=Lr.getInterpolatedAttribute(n,o,l,h,u,new $)),s&&(c.normal=Lr.getInterpolatedAttribute(s,o,l,h,u,new A),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new A,materialIndex:0};Lr.getNormal(en,tn,rn,d.normal),c.face=d,c.barycoord=u}return c}var Gn=class yc extends ht{constructor(e=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],u=[],d=0,p=0;v("z","y","x",-1,-1,r,i,e,s,n,0),v("z","y","x",1,-1,r,i,-e,s,n,1),v("x","z","y",1,1,e,r,i,a,s,2),v("x","z","y",1,-1,e,r,-i,a,s,3),v("x","y","z",1,-1,e,i,r,a,n,4),v("x","y","z",-1,-1,e,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2));function v(g,f,m,M,x,y,C,E,P,R,T){let b=y/P,L=C/R,F=y/2,k=C/2,B=E/2,K=P+1,G=R+1,H=0,J=0,se=new A;for(let oe=0;oe<G;oe++){let xe=oe*L-k;for(let Ue=0;Ue<K;Ue++){let et=Ue*b-F;se[g]=et*M,se[f]=xe*x,se[m]=B,h.push(se.x,se.y,se.z),se[g]=0,se[f]=0,se[m]=E>0?1:-1,c.push(se.x,se.y,se.z),u.push(Ue/P),u.push(1-oe/R),H+=1}}for(let oe=0;oe<R;oe++)for(let xe=0;xe<P;xe++){let Ue=d+xe+K*oe,et=d+xe+K*(oe+1),tt=d+(xe+1)+K*(oe+1),q=d+(xe+1)+K*oe;l.push(Ue,et,q),l.push(et,tt,q),J+=6}o.addGroup(p,J,T),p+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let a=t[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=a.clone():Array.isArray(a)?e[i][r]=a.slice():e[i][r]=a}}return e}function Dt(t){let e={};for(let i=0;i<t.length;i++){let r=jr(t[i]);for(let a in r)e[a]=r[a]}return e}function ap(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Mc(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var np={clone:jr,merge:Dt},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ko=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new A,Jl=new $,$l=new $,At=class extends Ko{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,$l),e.subVectors($l,Jl)}setViewOffset(t,e,i,r,a,n){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,e-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ar=-90,Rr=1,lp=class extends lt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new At(Ar,Rr,t,e);r.layers=this.layers,this.add(r);let a=new At(Ar,Rr,t,e);a.layers=this.layers,this.add(a);let n=new At(Ar,Rr,t,e);n.layers=this.layers,this.add(n);let s=new At(Ar,Rr,t,e);s.layers=this.layers,this.add(s);let o=new At(Ar,Rr,t,e);o.layers=this.layers,this.add(o);let l=new At(Ar,Rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,n,s,o]=e;for(let l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ln)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,c=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,a),t.setRenderTarget(i,1,r),t.render(e,n),t.setRenderTarget(i,2,r),t.render(e,s),t.setRenderTarget(i,3,r),t.render(e,o),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(c,u,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},bc=class extends Lt{constructor(t=[],e=or,i,r,a,n,s,o,l,h){super(t,e,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sc=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new bc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gn(5,5,5),a=new yi({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Di});a.uniforms.tEquirect.value=e;let n=new _t(r,a),s=e.minFilter;return e.minFilter===fi&&(e.minFilter=Mt),new lp(1,10,this).update(t,n),e.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let a=t.getRenderTarget();for(let n=0;n<6;n++)t.setRenderTarget(this,n),t.clear(e,i,r);t.setRenderTarget(a)}},gt=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hp={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){n=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),f=this._getHandJoint(l,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=h.position.distanceTo(c.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Tc=class wc{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=i,this.far=r}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hn=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ec=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new A,Ac=class Rc{constructor(e,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Ut.fromBufferAttribute(this,i),Ut.applyMatrix4(e),this.setXYZ(i,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Ut.fromBufferAttribute(this,i),Ut.applyNormalMatrix(e),this.setXYZ(i,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Ut.fromBufferAttribute(this,i),Ut.transformDirection(e),this.setXYZ(i,Ut.x,Ut.y,Ut.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=ai(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=at(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=ai(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=ai(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=ai(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=ai(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(i=at(i,this.array),r=at(r,this.array),a=at(a,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,i,r,a,n){return e=e*this.data.stride+this.offset,this.normalized&&(i=at(i,this.array),r=at(r,this.array),a=at(a,this.array),n=at(n,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=n,this}clone(e){if(e===void 0){Un("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new It(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Un("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var vx=new A,_x=new A,xx=new A,yx=new $,Mx=new $,bx=new ke,Sx=new A,Tx=new A,wx=new A,Ex=new $,Ax=new $,Rx=new $;var Cx=new A,Ix=new A;var Ql=new A,eh=new mt,th=new mt,cp=new A,ih=new ke,on=new A,bs=new Zt,rh=new ke,Ss=new Ua,Cc=class extends _t{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,on),this.boundingBox.expandByPoint(on)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,on),this.boundingSphere.expandByPoint(on)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(r),t.ray.intersectsSphere(bs)!==!1&&(rh.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(rh),!(this.boundingBox!==null&&Ss.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new mt,e=this.geometry.attributes.skinWeight;for(let i=0,r=e.count;i<r;i++){t.fromBufferAttribute(e,i);let a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,r=this.geometry;eh.fromBufferAttribute(r.attributes.skinIndex,t),th.fromBufferAttribute(r.attributes.skinWeight,t),Ql.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){let n=th.getComponent(a);if(n!==0){let s=eh.getComponent(a);ih.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),e.addScaledVector(cp.copy(Ql).applyMatrix4(ih),n)}}return e.applyMatrix4(this.bindMatrixInverse)}},Jo=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$o=class extends Lt{constructor(t=null,e=1,i=1,r,a,n,s,o,l=yt,h=yt,c,u){super(null,n,s,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ah=new ke,up=new ke,Ic=class Pc{constructor(e=[],i=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=i,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),i.length===0)this.calculateInverses();else if(e.length!==i.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,i=this.bones.length;e<i;e++){let r=new ke;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,i=this.bones.length;e<i;e++){let r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,i=this.bones.length;e<i;e++){let r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let e=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=e.length;n<s;n++){let o=e[n]?e[n].matrixWorld:up;ah.multiplyMatrices(o,i[n]),ah.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let i=new Float32Array(e*e*4);i.set(this.boneMatrices);let r=new $o(i,e,e,jt,Xt);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(e){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,i){this.uuid=e.uuid;for(let r=0,a=e.bones.length;r<a;r++){let n=e.bones[r],s=i[n];s===void 0&&(Ce("Skeleton: No bone found with UUID:",n),s=new Jo),this.bones.push(s),this.boneInverses.push(new ke().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];e.bones.push(s.uuid);let o=r[a];e.boneInverses.push(o.toArray())}return e}},Dn=class extends It{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cr=new ke,nh=new ke,ln=[],sh=new Yt,dp=new ke,ua=new _t,da=new Zt,Zr=class extends _t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cr),sh.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cr),da.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=t*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(t,e){let i=this.matrixWorld,r=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),t.ray.intersectsSphere(da)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Cr),nh.multiplyMatrices(i,Cr),ua.matrixWorld=nh,ua.raycast(t,ln);for(let n=0,s=ln.length;n<s;n++){let o=ln[n];o.instanceId=a,o.object=this,e.push(o)}ln.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(r*this.count),r,this.count,ko,Xt));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*t;a[o]=s,a.set(i,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new A,pp=new A,mp=new Ye,Li=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Ts.subVectors(i,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ts),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||mp.getNormalMatrix(t),r=this.coplanarPoint(Ts).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},er=new Zt,fp=new $(.5,.5),hn=new A,Da=class{constructor(t=new Li,e=new Li,i=new Li,r=new Li,a=new Li,n=new Li){this.planes=[t,e,i,r,a,n]}set(t,e,i,r,a,n){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si,i=!1){let r=this.planes,a=t.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],c=a[5],u=a[6],d=a[7],p=a[8],v=a[9],g=a[10],f=a[11],m=a[12],M=a[13],x=a[14],y=a[15];if(r[0].setComponents(l-n,d-h,f-p,y-m).normalize(),r[1].setComponents(l+n,d+h,f+p,y+m).normalize(),r[2].setComponents(l+s,d+c,f+v,y+M).normalize(),r[3].setComponents(l-s,d-c,f-v,y-M).normalize(),i)r[4].setComponents(o,u,g,x).normalize(),r[5].setComponents(l-o,d-u,f-g,y-x).normalize();else if(r[4].setComponents(l-o,d-u,f-g,y-x).normalize(),e===si)r[5].setComponents(l+o,d+u,f+g,y+x).normalize();else if(e===Ln)r[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);let e=fp.distanceTo(t.center);return er.radius=.7071067811865476+e,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(hn.x=r.normal.x>0?t.max.x:t.min.x,hn.y=r.normal.y>0?t.max.y:t.min.y,hn.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(hn)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=new ke,di=new Da,gp=class Lc{constructor(){this.coordinateSystem=si}intersectsObject(e,i){if(!i.isArrayCamera||i.cameras.length===0)return!1;for(let r=0;r<i.cameras.length;r++){let a=i.cameras[r];if(ui.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),di.setFromProjectionMatrix(ui,a.coordinateSystem,a.reversedDepth),di.intersectsObject(e))return!0}return!1}intersectsSprite(e,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let r=0;r<i.cameras.length;r++){let a=i.cameras[r];if(ui.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),di.setFromProjectionMatrix(ui,a.coordinateSystem,a.reversedDepth),di.intersectsSprite(e))return!0}return!1}intersectsSphere(e,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let r=0;r<i.cameras.length;r++){let a=i.cameras[r];if(ui.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),di.setFromProjectionMatrix(ui,a.coordinateSystem,a.reversedDepth),di.intersectsSphere(e))return!0}return!1}intersectsBox(e,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let r=0;r<i.cameras.length;r++){let a=i.cameras[r];if(ui.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),di.setFromProjectionMatrix(ui,a.coordinateSystem,a.reversedDepth),di.intersectsBox(e))return!0}return!1}containsPoint(e,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let r=0;r<i.cameras.length;r++){let a=i.cameras[r];if(ui.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),di.setFromProjectionMatrix(ui,a.coordinateSystem,a.reversedDepth),di.containsPoint(e))return!0}return!1}clone(){return new Lc}};var vp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=t,s.count=e,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Px=new ke,Lx=new Le(1,1,1),Ux=new Da,Dx=new gp,Nx=new Yt,Ox=new Zt,Fx=new A,Bx=new A,zx=new A,Vx=new vp,kx=new _t;var Qo=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Nn=new A,On=new A,oh=new ke,pa=new Ua,cn=new Zt,ws=new A,lh=new A,Wn=class extends lt{constructor(t=new ht,e=new Qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)Nn.fromBufferAttribute(e,r-1),On.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Nn.distanceTo(On);t.setAttribute("lineDistance",new Ge(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(r),cn.radius+=a,t.ray.intersectsSphere(cn)===!1)return;oh.copy(r).invert(),pa.copy(t.ray).applyMatrix4(oh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let p=u,v=d-1;p<v;p+=l){let g=h.getX(p),f=h.getX(p+1),m=un(this,t,pa,o,g,f,p);m&&e.push(m)}if(this.isLineLoop){let p=h.getX(d-1),v=h.getX(u),g=un(this,t,pa,o,p,v,d-1);g&&e.push(g)}}else{let u=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let p=u,v=d-1;p<v;p+=l){let g=un(this,t,pa,o,p,p+1,p);g&&e.push(g)}if(this.isLineLoop){let p=un(this,t,pa,o,d-1,u,d-1);p&&e.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function un(t,e,i,r,a,n,s){let o=t.geometry.attributes.position;if(Nn.fromBufferAttribute(o,a),On.fromBufferAttribute(o,n),i.distanceSqToSegment(Nn,On,ws,lh)>r)return;ws.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(ws);if(!(l<e.near||l>e.far))return{distance:l,point:lh.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}var hh=new A,ch=new A,Uc=class extends Wn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)hh.fromBufferAttribute(e,r),ch.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hh.distanceTo(ch);t.setAttribute("lineDistance",new Ge(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dc=class extends Wn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},el=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new ke,Io=new Ua,dn=new Zt,pn=new A,Nc=class extends lt{constructor(t=new ht,e=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dn.copy(i.boundingSphere),dn.applyMatrix4(r),dn.radius+=a,t.ray.intersectsSphere(dn)===!1)return;uh.copy(r).invert(),Io.copy(t.ray).applyMatrix4(uh);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,n.start),u=Math.min(l.count,n.start+n.count);for(let d=c,p=u;d<p;d++){let v=l.getX(d);pn.fromBufferAttribute(h,v),dh(pn,v,o,r,t,e,this)}}else{let c=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let d=c,p=u;d<p;d++)pn.fromBufferAttribute(h,d),dh(pn,d,o,r,t,e,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function dh(t,e,i,r,a,n,s){let o=Io.distanceSqToPoint(t);if(o<i){let l=new A;Io.closestPointToPoint(t,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Xn=class extends Lt{constructor(t,e,i,r,a,n,s,o,l){super(t,e,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ra=class extends Lt{constructor(t,e,i=xi,r,a,n,s=yt,o=yt,l,h=Bi,c=1){if(h!==Bi&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:c};super(u,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_p=class extends Ra{constructor(t,e=xi,i=or,r,a,n=yt,s=yt,o,l=Bi){let h={width:t,height:t,depth:1},c=[h,h,h,h,h,h];super(t,t,e,i,r,a,n,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Oc=class extends Lt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xp=class Fc extends ht{constructor(e=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],c=i/2,u=Math.PI/2*e,d=i,p=2*u+d,v=r*2+n,g=a+1,f=new A,m=new A;for(let M=0;M<=v;M++){let x=0,y=0,C=0,E=0;if(M<=r){let T=M/r,b=T*Math.PI/2;y=-c-e*Math.cos(b),C=e*Math.sin(b),E=-e*Math.cos(b),x=T*u}else if(M<=r+n){let T=(M-r)/n;y=-c+T*i,C=e,E=0,x=u+T*d}else{let T=(M-r-n)/r,b=T*Math.PI/2;y=c+e*Math.sin(b),C=e*Math.cos(b),E=e*Math.sin(b),x=u+d+T*u}let P=Math.max(0,Math.min(1,x/p)),R=0;M===0?R=.5/a:M===v&&(R=-.5/a);for(let T=0;T<=a;T++){let b=T/a,L=b*Math.PI*2,F=Math.sin(L),k=Math.cos(L);m.x=-C*k,m.y=y,m.z=C*F,o.push(m.x,m.y,m.z),f.set(-C*k,E,C*F),f.normalize(),l.push(f.x,f.y,f.z),h.push(b+R,P)}if(M>0){let T=(M-1)*g;for(let b=0;b<a;b++){let L=T+b,F=T+b+1,k=M*g+b,B=M*g+b+1;s.push(L,F,k),s.push(F,B,k)}}}this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},yp=class Bc extends ht{constructor(e=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new A,c=new $;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=i;u++,d+=3){let p=r+u/i*a;h.x=e*Math.cos(p),h.y=e*Math.sin(p),s.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(s[d]/e+1)/2,c.y=(s[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=i;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kr=class zc extends ht{constructor(e=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let c=[],u=[],d=[],p=[],v=0,g=[],f=r/2,m=0;M(),s===!1&&(e>0&&x(!0),i>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2));function M(){let y=new A,C=new A,E=0,P=(i-e)/r;for(let R=0;R<=n;R++){let T=[],b=R/n,L=b*(i-e)+e;for(let F=0;F<=a;F++){let k=F/a,B=k*l+o,K=Math.sin(B),G=Math.cos(B);C.x=L*K,C.y=-b*r+f,C.z=L*G,u.push(C.x,C.y,C.z),y.set(K,P,G).normalize(),d.push(y.x,y.y,y.z),p.push(k,1-b),T.push(v++)}g.push(T)}for(let R=0;R<a;R++)for(let T=0;T<n;T++){let b=g[T][R],L=g[T+1][R],F=g[T+1][R+1],k=g[T][R+1];(e>0||T!==0)&&(c.push(b,L,k),E+=3),(i>0||T!==n-1)&&(c.push(L,F,k),E+=3)}h.addGroup(m,E,0),m+=E}function x(y){let C=v,E=new $,P=new A,R=0,T=y===!0?e:i,b=y===!0?1:-1;for(let F=1;F<=a;F++)u.push(0,f*b,0),d.push(0,b,0),p.push(.5,.5),v++;let L=v;for(let F=0;F<=a;F++){let k=F/a*l+o,B=Math.cos(k),K=Math.sin(k);P.x=T*K,P.y=f*b,P.z=T*B,u.push(P.x,P.y,P.z),d.push(0,b,0),E.x=B*.5+.5,E.y=K*.5*b+.5,p.push(E.x,E.y),v++}for(let F=0;F<a;F++){let k=C+F,B=L+F;y===!0?c.push(B,B+1,k):c.push(B+1,B,k),R+=3}h.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Na=class Vc extends Kr{constructor(e=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,e,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Vc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oa=class kc extends ht{constructor(e=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),c(),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(n.slice(),3)),this.setAttribute("uv",new Ge(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new A,y=new A,C=new A;for(let E=0;E<i.length;E+=3)p(i[E+0],x),p(i[E+1],y),p(i[E+2],C),l(x,y,C,M)}function l(M,x,y,C){let E=C+1,P=[];for(let R=0;R<=E;R++){P[R]=[];let T=M.clone().lerp(y,R/E),b=x.clone().lerp(y,R/E),L=E-R;for(let F=0;F<=L;F++)F===0&&R===E?P[R][F]=T:P[R][F]=T.clone().lerp(b,F/L)}for(let R=0;R<E;R++)for(let T=0;T<2*(E-R)-1;T++){let b=Math.floor(T/2);T%2===0?(d(P[R][b+1]),d(P[R+1][b]),d(P[R][b])):(d(P[R][b+1]),d(P[R+1][b+1]),d(P[R+1][b]))}}function h(M){let x=new A;for(let y=0;y<n.length;y+=3)x.x=n[y+0],x.y=n[y+1],x.z=n[y+2],x.normalize().multiplyScalar(M),n[y+0]=x.x,n[y+1]=x.y,n[y+2]=x.z}function c(){let M=new A;for(let x=0;x<n.length;x+=3){M.x=n[x+0],M.y=n[x+1],M.z=n[x+2];let y=f(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;s.push(y,1-C)}v(),u()}function u(){for(let M=0;M<s.length;M+=6){let x=s[M+0],y=s[M+2],C=s[M+4],E=Math.max(x,y,C),P=Math.min(x,y,C);E>.9&&P<.1&&(x<.2&&(s[M+0]+=1),y<.2&&(s[M+2]+=1),C<.2&&(s[M+4]+=1))}}function d(M){n.push(M.x,M.y,M.z)}function p(M,x){let y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function v(){let M=new A,x=new A,y=new A,C=new A,E=new $,P=new $,R=new $;for(let T=0,b=0;T<n.length;T+=9,b+=6){M.set(n[T+0],n[T+1],n[T+2]),x.set(n[T+3],n[T+4],n[T+5]),y.set(n[T+6],n[T+7],n[T+8]),E.set(s[b+0],s[b+1]),P.set(s[b+2],s[b+3]),R.set(s[b+4],s[b+5]),C.copy(M).add(x).add(y).divideScalar(3);let L=f(C);g(E,b+0,M,L),g(P,b+2,x,L),g(R,b+4,y,L)}}function g(M,x,y,C){C<0&&M.x===1&&(s[x]=M.x-1),y.x===0&&y.z===0&&(s[x]=C/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.vertices,e.indices,e.radius,e.detail)}},Mp=class Gc extends Oa{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Gc(e.radius,e.detail)}},mn=new A,fn=new A,Es=new A,gn=new Lr,bp=class extends ht{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Fr*e),a=t.getIndex(),n=t.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},u=[];for(let d=0;d<s;d+=3){a?(o[0]=a.getX(d),o[1]=a.getX(d+1),o[2]=a.getX(d+2)):(o[0]=d,o[1]=d+1,o[2]=d+2);let{a:p,b:v,c:g}=gn;if(p.fromBufferAttribute(n,o[0]),v.fromBufferAttribute(n,o[1]),g.fromBufferAttribute(n,o[2]),gn.getNormal(Es),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){let m=(f+1)%3,M=h[f],x=h[m],y=gn[l[f]],C=gn[l[m]],E=`${M}_${x}`,P=`${x}_${M}`;P in c&&c[P]?(Es.dot(c[P].normal)<=r&&(u.push(y.x,y.y,y.z),u.push(C.x,C.y,C.z)),c[P]=null):E in c||(c[E]={index0:o[f],index1:o[m],normal:Es.clone()})}}for(let d in c)if(c[d]){let{index0:p,index1:v}=c[d];mn.fromBufferAttribute(n,p),fn.fromBufferAttribute(n,v),u.push(mn.x,mn.y,mn.z),u.push(fn.x,fn.y,fn.z)}this.setAttribute("position",new Ge(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),a=0;e.push(0);for(let n=1;n<=t;n++)i=this.getPoint(n/t),a+=i.distanceTo(r),e.push(a),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,a=i.length,n;e?n=e:n=t*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],c=i[r+1]-h,u=(n-h)/c;return(r+u)/(a-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=e||(a.isVector2?new $:new A);return s.copy(n).sub(a).normalize(),s}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,r=[],a=[],n=[],s=new A,o=new ke;for(let d=0;d<=t;d++){let p=d/t;r[d]=this.getTangentAt(p,new A)}a[0]=new A,n[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),n[d]=n[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(je(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(o.makeRotationAxis(s,p))}n[d].crossVectors(r[d],a[d])}if(e===!0){let d=Math.acos(je(a[0].dot(a[t]),-1,1));d/=t,r[0].dot(s.crossVectors(a[0],a[t]))>0&&(d=-d);for(let p=1;p<=t;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],d*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tl=class extends Mi{constructor(t=0,e=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(t,e=new $){let i=e,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+t*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*h-d*c+this.aX,l=u*c+d*h+this.aY}return i.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sp=class extends tl{constructor(t,e,i,r,a,n){super(t,e,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function il(){let t=0,e=0,i=0,r=0;function a(n,s,o,l){t=n,e=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,c,u){let d=(s-n)/h-(o-n)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+u)+(l-o)/u;d*=c,p*=c,a(s,o,d,p)},calc:function(n){let s=n*n,o=s*n;return t+e*n+i*s+r*o}}}var vn=new A,As=new il,Rs=new il,Cs=new il,rl=class extends Mi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new A){let i=e,r=this.points,a=r.length,n=(a-(this.closed?0:1))*t,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(vn.subVectors(r[0],r[1]).add(r[0]),l=vn);let c=r[s%a],u=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(vn.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=vn),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),As.initNonuniformCatmullRom(l.x,c.x,u.x,h.x,p,v,g),Rs.initNonuniformCatmullRom(l.y,c.y,u.y,h.y,p,v,g),Cs.initNonuniformCatmullRom(l.z,c.z,u.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(As.initCatmullRom(l.x,c.x,u.x,h.x,this.tension),Rs.initCatmullRom(l.y,c.y,u.y,h.y,this.tension),Cs.initCatmullRom(l.z,c.z,u.z,h.z,this.tension));return i.set(As.calc(o),Rs.calc(o),Cs.calc(o)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ph(t,e,i,r,a){let n=(r-e)*.5,s=(a-i)*.5,o=t*t,l=t*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*t+i}function Tp(t,e){let i=1-t;return i*i*e}function wp(t,e){return 2*(1-t)*t*e}function Ep(t,e){return t*t*e}function Ma(t,e,i,r){return Tp(t,e)+wp(t,i)+Ep(t,r)}function Ap(t,e){let i=1-t;return i*i*i*e}function Rp(t,e){let i=1-t;return 3*i*i*t*e}function Cp(t,e){return 3*(1-t)*t*t*e}function Ip(t,e){return t*t*t*e}function ba(t,e,i,r,a){return Ap(t,e)+Rp(t,i)+Cp(t,r)+Ip(t,a)}var Hc=class extends Mi{constructor(t=new $,e=new $,i=new $,r=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new $){let i=e,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ba(t,r.x,a.x,n.x,s.x),ba(t,r.y,a.y,n.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pp=class extends Mi{constructor(t=new A,e=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new A){let i=e,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(ba(t,r.x,a.x,n.x,s.x),ba(t,r.y,a.y,n.y,s.y),ba(t,r.z,a.z,n.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wc=class extends Mi{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lp=class extends Mi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends Mi{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,r=this.v0,a=this.v1,n=this.v2;return i.set(Ma(t,r.x,a.x,n.x),Ma(t,r.y,a.y,n.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends Mi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,r=this.v0,a=this.v1,n=this.v2;return i.set(Ma(t,r.x,a.x,n.x),Ma(t,r.y,a.y,n.y),Ma(t,r.z,a.z,n.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qc=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){let i=e,r=this.points,a=(r.length-1)*t,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(ph(s,o.x,l.x,h.x,c.x),ph(s,o.y,l.y,h.y,c.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new $().fromArray(r))}return this}},Fn=Object.freeze({__proto__:null,ArcCurve:Sp,CatmullRomCurve3:rl,CubicBezierCurve:Hc,CubicBezierCurve3:Pp,EllipseCurve:tl,LineCurve:Wc,LineCurve3:Lp,QuadraticBezierCurve:Xc,QuadraticBezierCurve3:jc,SplineCurve:qc}),Up=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fn[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,e)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?t*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?t*n.points.length:t,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Fn[r.type]().fromJSON(r))}return this}},mh=class extends Up{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Wc(this.currentPoint.clone(),new $(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let a=new Xc(this.currentPoint.clone(),new $(t,e),new $(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,a,n){let s=new Hc(this.currentPoint.clone(),new $(t,e),new $(i,r),new $(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+s,e+o,i,r,a,n),this}absarc(t,e,i,r,a,n){return this.absellipse(t,e,i,i,r,a,n),this}ellipse(t,e,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,a,n,s,o),this}absellipse(t,e,i,r,a,n,s,o){let l=new tl(t,e,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jr=class extends mh{constructor(t){super(t),this.uuid=qt(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new mh().fromJSON(r))}return this}};function Dp(t,e,i=2){let r=e&&e.length,a=r?e[0]*i:t.length,n=Yc(t,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=zp(t,e,n,i)),t.length>80*i){o=t[0],l=t[1];let c=o,u=l;for(let d=i;d<a;d+=i){let p=t[d],v=t[d+1];p<o&&(o=p),v<l&&(l=v),p>c&&(c=p),v>u&&(u=v)}h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return Ca(n,s,i,o,l,h,0),s}function Yc(t,e,i,r,a){let n;if(a===Kp(t,e,i,r)>0)for(let s=e;s<i;s+=r)n=fh(s/r|0,t[s],t[s+1],n);else for(let s=i-r;s>=e;s-=r)n=fh(s/r|0,t[s],t[s+1],n);return n&&qr(n,n.next)&&(Pa(n),n=n.next),n}function lr(t,e){if(!t)return t;e||(e=t);let i=t,r;do if(r=!1,!i.steiner&&(qr(i,i.next)||ft(i.prev,i,i.next)===0)){if(Pa(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function Ca(t,e,i,r,a,n,s){if(!t)return;!s&&n&&Wp(t,r,a,n);let o=t;for(;t.prev!==t.next;){let l=t.prev,h=t.next;if(n?Op(t,r,a,n):Np(t)){e.push(l.i,t.i,h.i),Pa(t),t=h.next,o=h.next;continue}if(t=h,t===o){s?s===1?(t=Fp(lr(t),e),Ca(t,e,i,r,a,n,2)):s===2&&Bp(t,e,i,r,a,n):Ca(lr(t),e,i,r,a,n,1);break}}}function Np(t){let e=t.prev,i=t,r=t.next;if(ft(e,i,r)>=0)return!1;let a=e.x,n=i.x,s=r.x,o=e.y,l=i.y,h=r.y,c=Math.min(a,n,s),u=Math.min(o,l,h),d=Math.max(a,n,s),p=Math.max(o,l,h),v=r.next;for(;v!==e;){if(v.x>=c&&v.x<=d&&v.y>=u&&v.y<=p&&va(a,o,n,l,s,h,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Op(t,e,i,r){let a=t.prev,n=t,s=t.next;if(ft(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,c=a.y,u=n.y,d=s.y,p=Math.min(o,l,h),v=Math.min(c,u,d),g=Math.max(o,l,h),f=Math.max(c,u,d),m=Po(p,v,e,i,r),M=Po(g,f,e,i,r),x=t.prevZ,y=t.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=p&&x.x<=g&&x.y>=v&&x.y<=f&&x!==a&&x!==s&&va(o,c,l,u,h,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=g&&y.y>=v&&y.y<=f&&y!==a&&y!==s&&va(o,c,l,u,h,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=g&&x.y>=v&&x.y<=f&&x!==a&&x!==s&&va(o,c,l,u,h,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=g&&y.y>=v&&y.y<=f&&y!==a&&y!==s&&va(o,c,l,u,h,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Fp(t,e){let i=t;do{let r=i.prev,a=i.next.next;!qr(r,a)&&Kc(r,i,i.next,a)&&Ia(r,a)&&Ia(a,r)&&(e.push(r.i,i.i,a.i),Pa(i),Pa(i.next),i=t=a),i=i.next}while(i!==t);return lr(i)}function Bp(t,e,i,r,a,n){let s=t;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&qp(s,o)){let l=Jc(s,o);s=lr(s,s.next),l=lr(l,l.next),Ca(s,e,i,r,a,n,0),Ca(l,e,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==t)}function zp(t,e,i,r){let a=[];for(let n=0,s=e.length;n<s;n++){let o=e[n]*r,l=n<s-1?e[n+1]*r:t.length,h=Yc(t,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(jp(h))}a.sort(Vp);for(let n=0;n<a.length;n++)i=kp(a[n],i);return i}function Vp(t,e){let i=t.x-e.x;if(i===0&&(i=t.y-e.y,i===0)){let r=(t.next.y-t.y)/(t.next.x-t.x),a=(e.next.y-e.y)/(e.next.x-e.x);i=r-a}return i}function kp(t,e){let i=Gp(t,e);if(!i)return e;let r=Jc(i,t);return lr(r,r.next),lr(i,i.next)}function Gp(t,e){let i=e,r=t.x,a=t.y,n=-1/0,s;if(qr(t,i))return i;do{if(qr(t,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let u=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(u<=r&&u>n&&(n=u,s=i.x<i.next.x?i:i.next,u===r))return s}i=i.next}while(i!==e);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Zc(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let u=Math.abs(a-i.y)/(r-i.x);Ia(i,t)&&(u<c||u===c&&(i.x>s.x||i.x===s.x&&Hp(s,i)))&&(s=i,c=u)}i=i.next}while(i!==o);return s}function Hp(t,e){return ft(t.prev,t,e.prev)<0&&ft(e.next,t,t.next)<0}function Wp(t,e,i,r){let a=t;do a.z===0&&(a.z=Po(a.x,a.y,e,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==t);a.prevZ.nextZ=null,a.prevZ=null,Xp(a)}function Xp(t){let e,i=1;do{let r=t,a;t=null;let n=null;for(e=0;r;){e++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:t=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(e>1);return t}function Po(t,e,i,r,a){return t=(t-i)*a|0,e=(e-r)*a|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function jp(t){let e=t,i=t;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==t);return i}function Zc(t,e,i,r,a,n,s,o){return(a-s)*(e-o)>=(t-s)*(n-o)&&(t-s)*(r-o)>=(i-s)*(e-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function va(t,e,i,r,a,n,s,o){return!(t===s&&e===o)&&Zc(t,e,i,r,a,n,s,o)}function qp(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Yp(t,e)&&(Ia(t,e)&&Ia(e,t)&&Zp(t,e)&&(ft(t.prev,t,e.prev)||ft(t,e.prev,e))||qr(t,e)&&ft(t.prev,t,t.next)>0&&ft(e.prev,e,e.next)>0)}function ft(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function qr(t,e){return t.x===e.x&&t.y===e.y}function Kc(t,e,i,r){let a=xn(ft(t,e,i)),n=xn(ft(t,e,r)),s=xn(ft(i,r,t)),o=xn(ft(i,r,e));return!!(a!==n&&s!==o||a===0&&_n(t,i,e)||n===0&&_n(t,r,e)||s===0&&_n(i,t,r)||o===0&&_n(i,e,r))}function _n(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function xn(t){return t>0?1:t<0?-1:0}function Yp(t,e){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&Kc(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function Ia(t,e){return ft(t.prev,t,t.next)<0?ft(t,e,t.next)>=0&&ft(t,t.prev,e)>=0:ft(t,e,t.prev)<0||ft(t,t.next,e)<0}function Zp(t,e){let i=t,r=!1,a=(t.x+e.x)/2,n=(t.y+e.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}function Jc(t,e){let i=Lo(t.i,t.x,t.y),r=Lo(e.i,e.x,e.y),a=t.next,n=e.prev;return t.next=e,e.prev=t,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function fh(t,e,i,r){let a=Lo(t,e,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Pa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Lo(t,e,i){return{i:t,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(t,e,i,r){let a=0;for(let n=e,s=i-r;n<i;n+=r)a+=(t[s]-t[n])*(t[n+1]+t[s+1]),s=n;return a}var Jp=class{static triangulate(t,e,i=2){return Dp(t,e,i)}},sr=class $c{static area(e){let i=e.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=e[a].x*e[n].y-e[n].x*e[a].y;return r*.5}static isClockWise(e){return $c.area(e)<0}static triangulateShape(e,i){let r=[],a=[],n=[];gh(e),vh(r,e);let s=e.length;i.forEach(gh);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,vh(r,i[l]);let o=Jp.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function gh(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function vh(t,e){for(let i=0;i<e.length;i++)t.push(e[i].x),t.push(e[i].y)}var Fa=class Qc extends ht{constructor(e=new Jr([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];let r=this,a=[],n=[];for(let o=0,l=e.length;o<l;o++){let h=e[o];s(h)}this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,u=i.depth!==void 0?i.depth:1,d=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:p-.1,g=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,M=i.UVGenerator!==void 0?i.UVGenerator:$p,x,y=!1,C,E,P,R;if(m){x=m.getSpacedPoints(c),y=!0,d=!1;let Y=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(c,Y),E=new A,P=new A,R=new A}d||(f=0,p=0,v=0,g=0);let T=o.extractPoints(h),b=T.shape,L=T.holes;if(!sr.isClockWise(b)){b=b.reverse();for(let Y=0,re=L.length;Y<re;Y++){let te=L[Y];sr.isClockWise(te)&&(L[Y]=te.reverse())}}function F(Y){let re=10000000000000001e-36,te=Y[0];for(let ge=1;ge<=Y.length;ge++){let I=ge%Y.length,Ne=Y[I],pe=Ne.x-te.x,Oe=Ne.y-te.y,ue=pe*pe+Oe*Oe,He=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(te.x),Math.abs(te.y)),w=re*He*He;if(ue<=w){Y.splice(I,1),ge--;continue}te=Ne}}F(b),L.forEach(F);let k=L.length,B=b;for(let Y=0;Y<k;Y++){let re=L[Y];b=b.concat(re)}function K(Y,re,te){return re||Be("ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(re,te)}let G=b.length;function H(Y,re,te){let ge,I,Ne,pe=Y.x-re.x,Oe=Y.y-re.y,ue=te.x-Y.x,He=te.y-Y.y,w=pe*pe+Oe*Oe,_=pe*He-Oe*ue;if(Math.abs(_)>Number.EPSILON){let N=Math.sqrt(w),X=Math.sqrt(ue*ue+He*He),Z=re.x-Oe/N,j=re.y+pe/N,we=te.x-He/X,le=te.y+ue/X,Ie=((we-Z)*He-(le-j)*ue)/(pe*He-Oe*ue);ge=Z+pe*Ie-Y.x,I=j+Oe*Ie-Y.y;let Ae=ge*ge+I*I;if(Ae<=2)return new $(ge,I);Ne=Math.sqrt(Ae/2)}else{let N=!1;pe>Number.EPSILON?ue>Number.EPSILON&&(N=!0):pe<-Number.EPSILON?ue<-Number.EPSILON&&(N=!0):Math.sign(Oe)===Math.sign(He)&&(N=!0),N?(ge=-Oe,I=pe,Ne=Math.sqrt(w)):(ge=pe,I=Oe,Ne=Math.sqrt(w/2))}return new $(ge/Ne,I/Ne)}let J=[];for(let Y=0,re=B.length,te=re-1,ge=Y+1;Y<re;Y++,te++,ge++)te===re&&(te=0),ge===re&&(ge=0),J[Y]=H(B[Y],B[te],B[ge]);let se=[],oe,xe=J.concat();for(let Y=0,re=k;Y<re;Y++){let te=L[Y];oe=[];for(let ge=0,I=te.length,Ne=I-1,pe=ge+1;ge<I;ge++,Ne++,pe++)Ne===I&&(Ne=0),pe===I&&(pe=0),oe[ge]=H(te[ge],te[Ne],te[pe]);se.push(oe),xe=xe.concat(oe)}let Ue;if(f===0)Ue=sr.triangulateShape(B,L);else{let Y=[],re=[];for(let te=0;te<f;te++){let ge=te/f,I=p*Math.cos(ge*Math.PI/2),Ne=v*Math.sin(ge*Math.PI/2)+g;for(let pe=0,Oe=B.length;pe<Oe;pe++){let ue=K(B[pe],J[pe],Ne);Me(ue.x,ue.y,-I),ge===0&&Y.push(ue)}for(let pe=0,Oe=k;pe<Oe;pe++){let ue=L[pe];oe=se[pe];let He=[];for(let w=0,_=ue.length;w<_;w++){let N=K(ue[w],oe[w],Ne);Me(N.x,N.y,-I),ge===0&&He.push(N)}ge===0&&re.push(He)}}Ue=sr.triangulateShape(Y,re)}let et=Ue.length,tt=v+g;for(let Y=0;Y<G;Y++){let re=d?K(b[Y],xe[Y],tt):b[Y];y?(P.copy(C.normals[0]).multiplyScalar(re.x),E.copy(C.binormals[0]).multiplyScalar(re.y),R.copy(x[0]).add(P).add(E),Me(R.x,R.y,R.z)):Me(re.x,re.y,0)}for(let Y=1;Y<=c;Y++)for(let re=0;re<G;re++){let te=d?K(b[re],xe[re],tt):b[re];y?(P.copy(C.normals[Y]).multiplyScalar(te.x),E.copy(C.binormals[Y]).multiplyScalar(te.y),R.copy(x[Y]).add(P).add(E),Me(R.x,R.y,R.z)):Me(te.x,te.y,u/c*Y)}for(let Y=f-1;Y>=0;Y--){let re=Y/f,te=p*Math.cos(re*Math.PI/2),ge=v*Math.sin(re*Math.PI/2)+g;for(let I=0,Ne=B.length;I<Ne;I++){let pe=K(B[I],J[I],ge);Me(pe.x,pe.y,u+te)}for(let I=0,Ne=L.length;I<Ne;I++){let pe=L[I];oe=se[I];for(let Oe=0,ue=pe.length;Oe<ue;Oe++){let He=K(pe[Oe],oe[Oe],ge);y?Me(He.x,He.y+x[c-1].y,x[c-1].x+te):Me(He.x,He.y,u+te)}}}q(),he();function q(){let Y=a.length/3;if(d){let re=0,te=G*re;for(let ge=0;ge<et;ge++){let I=Ue[ge];De(I[2]+te,I[1]+te,I[0]+te)}re=c+f*2,te=G*re;for(let ge=0;ge<et;ge++){let I=Ue[ge];De(I[0]+te,I[1]+te,I[2]+te)}}else{for(let re=0;re<et;re++){let te=Ue[re];De(te[2],te[1],te[0])}for(let re=0;re<et;re++){let te=Ue[re];De(te[0]+G*c,te[1]+G*c,te[2]+G*c)}}r.addGroup(Y,a.length/3-Y,0)}function he(){let Y=a.length/3,re=0;ce(B,re),re+=B.length;for(let te=0,ge=L.length;te<ge;te++){let I=L[te];ce(I,re),re+=I.length}r.addGroup(Y,a.length/3-Y,1)}function ce(Y,re){let te=Y.length;for(;--te>=0;){let ge=te,I=te-1;I<0&&(I=Y.length-1);for(let Ne=0,pe=c+f*2;Ne<pe;Ne++){let Oe=G*Ne,ue=G*(Ne+1),He=re+ge+Oe,w=re+I+Oe,_=re+I+ue,N=re+ge+ue;be(He,w,_,N)}}}function Me(Y,re,te){l.push(Y),l.push(re),l.push(te)}function De(Y,re,te){qe(Y),qe(re),qe(te);let ge=a.length/3,I=M.generateTopUV(r,a,ge-3,ge-2,ge-1);Je(I[0]),Je(I[1]),Je(I[2])}function be(Y,re,te,ge){qe(Y),qe(re),qe(ge),qe(re),qe(te),qe(ge);let I=a.length/3,Ne=M.generateSideWallUV(r,a,I-6,I-3,I-2,I-1);Je(Ne[0]),Je(Ne[1]),Je(Ne[3]),Je(Ne[1]),Je(Ne[2]),Je(Ne[3])}function qe(Y){a.push(l[Y*3+0]),a.push(l[Y*3+1]),a.push(l[Y*3+2])}function Je(Y){n.push(Y.x),n.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Qp(i,r,e)}static fromJSON(e,i){let r=[];for(let n=0,s=e.shapes.length;n<s;n++){let o=i[e.shapes[n]];r.push(o)}let a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Fn[a.type]().fromJSON(a)),new Qc(r,e.options)}},$p={generateTopUV:function(t,e,i,r,a){let n=e[i*3],s=e[i*3+1],o=e[r*3],l=e[r*3+1],h=e[a*3],c=e[a*3+1];return[new $(n,s),new $(o,l),new $(h,c)]},generateSideWallUV:function(t,e,i,r,a,n){let s=e[i*3],o=e[i*3+1],l=e[i*3+2],h=e[r*3],c=e[r*3+1],u=e[r*3+2],d=e[a*3],p=e[a*3+1],v=e[a*3+2],g=e[n*3],f=e[n*3+1],m=e[n*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new $(s,1-l),new $(h,1-u),new $(d,1-v),new $(g,1-m)]:[new $(o,1-l),new $(c,1-u),new $(p,1-v),new $(f,1-m)]}};function Qp(t,e,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let n=t[r];i.shapes.push(n.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}var em=class eu extends Oa{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new eu(e.radius,e.detail)}},al=class tu extends ht{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=je(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],c=1/i,u=new A,d=new $,p=new A,v=new A,g=new A,f=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:f=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,p.x=m*1,p.y=-f,p.z=m*0,v.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(v)}for(let M=0;M<=i;M++){let x=r+M*c*a,y=Math.sin(x),C=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*C,s.push(u.x,u.y,u.z),d.x=M/i,d.y=E/(e.length-1),o.push(d.x,d.y);let P=l[3*E+0]*y,R=l[3*E+1],T=l[3*E+0]*C;h.push(P,R,T)}}for(let M=0;M<i;M++)for(let x=0;x<e.length-1;x++){let y=x+M*e.length,C=y,E=y+e.length,P=y+e.length+1,R=y+1;n.push(C,E,R),n.push(P,R,E)}this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.points,e.segments,e.phiStart,e.phiLength)}},tm=class iu extends Oa{constructor(e=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new iu(e.radius,e.detail)}},Kt=class ru extends ht{constructor(e=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:a};let n=e/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,c=l+1,u=e/o,d=i/l,p=[],v=[],g=[],f=[];for(let m=0;m<c;m++){let M=m*d-s;for(let x=0;x<h;x++){let y=x*u-n;v.push(y,-M,0),g.push(0,0,1),f.push(x/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let x=M+h*m,y=M+h*(m+1),C=M+1+h*(m+1),E=M+1+h*m;p.push(x,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}},im=class au extends ht{constructor(e=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],c=[],u=e,d=(i-e)/a,p=new A,v=new $;for(let g=0;g<=a;g++){for(let f=0;f<=r;f++){let m=n+f/r*s;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(p.x/i+1)/2,v.y=(p.y/i+1)/2,c.push(v.x,v.y)}u+=d}for(let g=0;g<a;g++){let f=g*(r+1);for(let m=0;m<r;m++){let M=m+f,x=M,y=M+r+1,C=M+r+2,E=M+1;o.push(x,y,E),o.push(y,C,E)}}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},rm=class nu extends ht{constructor(e=new Jr([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(n,3)),this.setAttribute("uv",new Ge(s,2));function h(c){let u=a.length/3,d=c.extractPoints(i),p=d.shape,v=d.holes;sr.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=v.length;f<m;f++){let M=v[f];sr.isClockWise(M)===!0&&(v[f]=M.reverse())}let g=sr.triangulateShape(p,v);for(let f=0,m=v.length;f<m;f++){let M=v[f];p=p.concat(M)}for(let f=0,m=p.length;f<m;f++){let M=p[f];a.push(M.x,M.y,0),n.push(0,0,1),s.push(M.x,M.y)}for(let f=0,m=g.length;f<m;f++){let M=g[f],x=M[0]+u,y=M[1]+u,C=M[2]+u;r.push(x,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes;return am(i,e)}static fromJSON(e,i){let r=[];for(let a=0,n=e.shapes.length;a<n;a++){let s=i[e.shapes[a]];r.push(s)}return new nu(r,e.curveSegments)}};function am(t,e){if(e.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let a=t[i];e.shapes.push(a.uuid)}else e.shapes.push(t.uuid);return e}var $r=class su extends ht{constructor(e=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,c=[],u=new A,d=new A,p=[],v=[],g=[],f=[];for(let m=0;m<=r;m++){let M=[],x=m/r,y=0;m===0&&s===0?y=.5/i:m===r&&l===Math.PI&&(y=-.5/i);for(let C=0;C<=i;C++){let E=C/i;u.x=-e*Math.cos(a+E*n)*Math.sin(s+x*o),u.y=e*Math.cos(s+x*o),u.z=e*Math.sin(a+E*n)*Math.sin(s+x*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(E+y,1-x),M.push(h++)}c.push(M)}for(let m=0;m<r;m++)for(let M=0;M<i;M++){let x=c[m][M+1],y=c[m][M],C=c[m+1][M],E=c[m+1][M+1];(m!==0||s>0)&&p.push(x,y,E),(m!==r-1||l<Math.PI)&&p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new Ge(v,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},nm=class ou extends Oa{constructor(e=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ou(e.radius,e.detail)}},nl=class lu extends ht{constructor(e=1,i=.4,r=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:a,arc:n},r=Math.floor(r),a=Math.floor(a);let s=[],o=[],l=[],h=[],c=new A,u=new A,d=new A;for(let p=0;p<=r;p++)for(let v=0;v<=a;v++){let g=v/a*n,f=p/r*Math.PI*2;u.x=(e+i*Math.cos(f))*Math.cos(g),u.y=(e+i*Math.cos(f))*Math.sin(g),u.z=i*Math.sin(f),o.push(u.x,u.y,u.z),c.x=e*Math.cos(g),c.y=e*Math.sin(g),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(v/a),h.push(p/r)}for(let p=1;p<=r;p++)for(let v=1;v<=a;v++){let g=(a+1)*p+v-1,f=(a+1)*(p-1)+v-1,m=(a+1)*(p-1)+v,M=(a+1)*p+v;s.push(g,f,M),s.push(f,m,M)}this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},sm=class hu extends ht{constructor(e=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],u=new A,d=new A,p=new A,v=new A,g=new A,f=new A,m=new A;for(let x=0;x<=r;++x){let y=x/r*n*Math.PI*2;M(y,n,s,e,p),M(y+.01,n,s,e,v),f.subVectors(v,p),m.addVectors(v,p),g.crossVectors(f,m),m.crossVectors(g,f),g.normalize(),m.normalize();for(let C=0;C<=a;++C){let E=C/a*Math.PI*2,P=-i*Math.cos(E),R=i*Math.sin(E);u.x=p.x+(P*m.x+R*g.x),u.y=p.y+(P*m.y+R*g.y),u.z=p.z+(P*m.z+R*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(x/r),c.push(C/a)}}for(let x=1;x<=r;x++)for(let y=1;y<=a;y++){let C=(a+1)*(x-1)+(y-1),E=(a+1)*x+(y-1),P=(a+1)*x+y,R=(a+1)*(x-1)+y;o.push(C,E,R),o.push(E,P,R)}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(c,2));function M(x,y,C,E,P){let R=Math.cos(x),T=Math.sin(x),b=C/y*x,L=Math.cos(b);P.x=E*(2+L)*.5*R,P.y=E*(2+L)*T*.5,P.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},sl=class cu extends ht{constructor(e=new jc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=e.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new A,l=new A,h=new $,c=new A,u=[],d=[],p=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(p,2));function g(){for(let x=0;x<i;x++)f(x);f(n===!1?i:0),M(),m()}function f(x){c=e.getPointAt(x/i,c);let y=s.normals[x],C=s.binormals[x];for(let E=0;E<=a;E++){let P=E/a*Math.PI*2,R=Math.sin(P),T=-Math.cos(P);l.x=T*y.x+R*C.x,l.y=T*y.y+R*C.y,l.z=T*y.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=i;x++)for(let y=1;y<=a;y++){let C=(a+1)*(x-1)+(y-1),E=(a+1)*x+(y-1),P=(a+1)*x+y,R=(a+1)*(x-1)+y;v.push(C,E,R),v.push(E,P,R)}}function M(){for(let x=0;x<=i;x++)for(let y=0;y<=a;y++)h.x=x/i,h.y=y/a,p.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new cu(new Fn[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},om=class extends ht{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,r=new A,a=new A;if(t.index!==null){let n=t.attributes.position,s=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],u=c.start,d=c.count;for(let p=u,v=u+d;p<v;p+=3)for(let g=0;g<3;g++){let f=s.getX(p+g),m=s.getX(p+(g+1)%3);r.fromBufferAttribute(n,f),a.fromBufferAttribute(n,m),_h(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{let n=t.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,c=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,c),_h(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ge(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function _h(t,e,i){let r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var Gx=Object.freeze({__proto__:null,BoxGeometry:Gn,CapsuleGeometry:xp,CircleGeometry:yp,ConeGeometry:Na,CylinderGeometry:Kr,DodecahedronGeometry:Mp,EdgesGeometry:bp,ExtrudeGeometry:Fa,IcosahedronGeometry:em,LatheGeometry:al,OctahedronGeometry:tm,PlaneGeometry:Kt,PolyhedronGeometry:Oa,RingGeometry:im,ShapeGeometry:rm,SphereGeometry:$r,TetrahedronGeometry:nm,TorusGeometry:nl,TorusKnotGeometry:sm,TubeGeometry:sl,WireframeGeometry:om});var lm=class extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hi=class extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nt=class extends hi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var hm=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cm=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yn(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function um(t){function e(a,n){return t[a]-t[n]}let i=t.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(e),r}function xh(t,e,i){let r=t.length,a=new t.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*e;for(let l=0;l!==e;++l)a[s++]=t[o+l]}return a}function uu(t,e,i,r){let a=1,n=t[0];for(;n!==void 0&&n[r]===void 0;)n=t[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(e.push(n.time),i.push(...s)),n=t[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(e.push(n.time),s.toArray(i,i.length)),n=t[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(e.push(n.time),i.push(s)),n=t[a++];while(n!==void 0)}var Qr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];i:{e:{let n;t:{r:if(!(t<r)){for(let s=i+2;;){if(r===void 0){if(t<a)break r;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=e[++i],t<r)break e}n=e.length;break t}if(!(t>=a)){let s=e[1];t<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=e[--i-1],t>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;t<e[s]?n=s:i=s+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let n=0;n!==r;++n)e[n]=i[a+n];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dm=class extends Qr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,n=t+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Pl:a=t,s=2*e-i;break;case Ll:a=r.length-2,s=e+r[a]-r[a+1];break;default:a=t,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Pl:n=t,o=2*i-e;break;case Ll:n=1,o=i+r[1]-r[0];break;default:n=t-1,o=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(t,e,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-e)/(r-e),v=p*p,g=v*p,f=-u*g+2*u*v-u*p,m=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*p+1,M=(-1-d)*g+(1.5+d)*v+.5*p,x=d*g-d*v;for(let y=0;y!==s;++y)a[y]=f*n[h+y]+m*n[l+y]+M*n[o+y]+x*n[c+y];return a}},pm=class extends Qr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=(i-e)/(r-e),c=1-h;for(let u=0;u!==s;++u)a[u]=n[l+u]*c+n[o+u]*h;return a}},mm=class extends Qr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yn(e,this.TimeBufferType),this.values=yn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yn(t.times,Array),values:yn(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Hr:e=this.InterpolantFactoryMethodLinear;break;case es:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return es}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<t;)++a;for(;n!==-1&&i[n]>e;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Be("KeyframeTrack: Track is empty.",this),t=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Be("KeyframeTrack: Time is not a valid number.",this,s,o),t=!1;break}if(n!==null&&n>o){Be("KeyframeTrack: Out of order keys.",this,s,o,n),t=!1;break}n=o}if(r!==void 0&&Md(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,s,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===es,a=t.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=t[s],h=t[s+1];if(l!==h&&(s!==1||l!==t[0]))if(r)o=!0;else{let c=s*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let v=e[c+p];if(v!==e[u+p]||v!==e[d+p]){o=!0;break}}}if(o){if(s!==n){t[n]=t[s];let c=s*i,u=n*i;for(let d=0;d!==i;++d)e[u+d]=e[c+d]}++n}}if(a>0){t[n]=t[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)e[o+l]=e[s+l];++n}return n!==t.length?(this.times=t.slice(0,n),this.values=e.slice(0,n*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Hr;var ea=class extends ci{constructor(t,e,i){super(t,e,i)}};ea.prototype.ValueTypeName="bool";ea.prototype.ValueBufferType=Array;ea.prototype.DefaultInterpolation=Gr;ea.prototype.InterpolantFactoryMethodLinear=void 0;ea.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends ci{constructor(t,e,i,r){super(t,e,i,r)}};du.prototype.ValueTypeName="color";var hr=class extends ci{constructor(t,e,i,r){super(t,e,i,r)}};hr.prototype.ValueTypeName="number";var fm=class extends Qr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-e)/(r-e),l=t*s;for(let h=l+s;l!==h;l+=4)oi.slerpFlat(a,0,n,l-s,n,l,o);return a}},dr=class extends ci{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new fm(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends ci{constructor(t,e,i){super(t,e,i)}};ta.prototype.ValueTypeName="string";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=Gr;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends ci{constructor(t,e,i,r){super(t,e,i,r)}};cr.prototype.ValueTypeName="vector";var pu=class{constructor(t="",e=-1,i=[],r=dd){this.name=t,this.tracks=i,this.duration=e,this.blendMode=r,this.uuid=qt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,r=1/(t.fps||1);for(let n=0,s=i.length;n!==s;++n)e.push(vm(i[n]).scale(r));let a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a.userData=JSON.parse(t.userData||"{}"),a}static toJSON(t){let e=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let a=0,n=i.length;a!==n;++a)e.push(ci.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(t,e,i,r){let a=e.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let h=um(o);o=xh(o,1,h),l=xh(l,1,h),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new hr(".morphTargetInfluences["+e[s].name+"]",o,l).scale(1/i))}return new this(t,-1,n)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===e)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=t.length;s<o;s++){let l=t[s],h=l.name.match(a);if(h&&h.length>1){let c=h[1],u=r[c];u||(r[c]=u=[]),u.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],e,i));return n}static parseAnimation(t,e){if(Ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Be("AnimationClip: No animation in JSONLoader data."),null;let i=function(h,c,u,d,p){if(u.length!==0){let v=[],g=[];uu(u,v,g,d),v.length!==0&&p.push(new h(c,v,g))}},r=[],a=t.name||"default",n=t.fps||30,s=t.blendMode,o=t.length||-1,l=t.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let u={},d;for(d=0;d<c.length;d++)if(c[d].morphTargets)for(let p=0;p<c[d].morphTargets.length;p++)u[c[d].morphTargets[p]]=-1;for(let p in u){let v=[],g=[];for(let f=0;f!==c[d].morphTargets.length;++f){let m=c[d];v.push(m.time),g.push(m.morphTarget===p?1:0)}r.push(new hr(".morphTargetInfluence["+p+"]",v,g))}o=u.length*n}else{let u=".bones["+e[h].name+"]";i(cr,u+".position",c,"pos",r),i(dr,u+".quaternion",c,"rot",r),i(cr,u+".scale",c,"scl",r)}}return r.length===0?null:new this(a,o,r,s)}resetDuration(){let t=this.tracks,e=0;for(let i=0,r=t.length;i!==r;++i){let a=this.tracks[i];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function gm(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return du;case"quaternion":return dr;case"bool":case"boolean":return ea;case"string":return ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function vm(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gm(t.type);if(t.times===void 0){let i=[],r=[];uu(t.keys,i,r,"value"),t.times=i,t.values=r}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var Ui={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},_m=class{constructor(t,e,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,u=l.length;c<u;c+=2){let d=l[c],p=l[c+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new _m,pr=class{constructor(t){this.manager=t!==void 0?t:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,a){i.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},ym=class extends Error{constructor(t,e){super(t),this.response=e}},ol=class extends pr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=Ui.get(`file:${t}`);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:i,onError:r});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:i,onError:r});let n=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Pi[t],c=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0,v=0,g=new ReadableStream({start(f){m();function m(){c.read().then(({done:M,value:x})=>{if(M)f.close();else{v+=x.byteLength;let y=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let C=0,E=h.length;C<E;C++){let P=h[C];P.onProgress&&P.onProgress(y)}f.enqueue(x),m()}},M=>{f.error(M)})}}});return new Response(g)}else throw new ym(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(s),c=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(c);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{Ui.add(`file:${t}`,l);let h=Pi[t];delete Pi[t];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Pi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Pi[t];for(let c=0,u=h.length;c<u;c++){let d=h[c];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=new WeakMap,Mm=class extends pr{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,n=Ui.get(`image:${t}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(t),setTimeout(function(){e&&e(n),a.manager.itemEnd(t)},0);else{let c=Ir.get(n);c===void 0&&(c=[],Ir.set(n,c)),c.push({onLoad:e,onError:r})}return n}let s=Ea("img");function o(){h(),e&&e(this);let c=Ir.get(this)||[];for(let u=0;u<c.length;u++){let d=c[u];d.onLoad&&d.onLoad(this)}Ir.delete(this),a.manager.itemEnd(t)}function l(c){h(),r&&r(c),Ui.remove(`image:${t}`);let u=Ir.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onError&&p.onError(c)}Ir.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ui.add(`image:${t}`,s),a.manager.itemStart(t),s.src=t,s}};var jn=class extends pr{constructor(t){super(t)}load(t,e,i,r){let a=new Lt,n=new Mm(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(t,function(s){a.image=s,a.needsUpdate=!0,e!==void 0&&e(a)},i,r),a}},qn=class extends lt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mu=class extends qn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Is=new ke,yh=new A,Mh=new A,ll=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),Is.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Is,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Is)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bm=class extends ll{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Xr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(i!==e.fov||r!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=r,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},fu=class extends qn{constructor(t,e,i=0,r=Math.PI/3,a=0,n=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new bm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Sm=class extends ll{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0}},gu=class extends qn{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Sm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ba=class extends Ko{constructor(t=-1,e=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,n=i+t,s=r+e,o=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tm=class extends ll{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends qn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Tm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ia=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Ps=new WeakMap,vu=class extends pr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,n=Ui.get(`image-bitmap:${t}`);if(n!==void 0){if(a.manager.itemStart(t),n.then){n.then(l=>{if(Ps.has(n)===!0)r&&r(Ps.get(n)),a.manager.itemError(t),a.manager.itemEnd(t);else return e&&e(l),a.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(n),a.manager.itemEnd(t)},0),n}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ui.add(`image-bitmap:${t}`,l),e&&e(l),a.manager.itemEnd(t),l}).catch(function(l){r&&r(l),Ps.set(o,l),Ui.remove(`image-bitmap:${t}`),a.manager.itemError(t),a.manager.itemEnd(t)});Ui.add(`image-bitmap:${t}`,o),a.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hx=new ke,Wx=new ke,Xx=new ke;var wm=class extends At{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jx=new A,qx=new oi,Yx=new A,Zx=new A,Kx=new A;var Jx=new A,$x=new oi,Qx=new A,ey=new A;var hl="\\[\\]\\.:\\/",Em=new RegExp("["+hl+"]","g"),cl="[^"+hl+"]",Am="[^"+hl.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",cl),Cm=/(WCOD+)?/.source.replace("WCOD",Am),Im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Lm=new RegExp("^"+Rm+Cm+Im+Pm+"$"),Um=["material","materials","bones","map"],Dm=class{constructor(t,e,i){let r=i||ct.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ct=class Dr{constructor(e,i,r){this.path=i,this.parsedPath=r||Dr.parseTrackName(i),this.node=Dr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new Dr.Composite(e,i,r):new Dr(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(e){let i=Lm.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Um.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)e[i++]=r[a]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(e||(e=Dr.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let s=e[a];if(s===void 0){let h=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Dm;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);var bh=new ke,_u=class{constructor(t,e,i=0,r=1/0){this.ray=new Ua(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,i=[]){return Uo(t,this,i,e),i.sort(Sh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,a=t.length;r<a;r++)Uo(t[r],this,i,e);return i.sort(Sh),i}};function Sh(t,e){return t.distance-e.distance}function Uo(t,e,i,r){let a=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(a=!1),a===!0&&r===!0){let n=t.children;for(let s=0,o=n.length;s<o;s++)Uo(n[s],e,i,!0)}}var iy=new $;var ry=new A,ay=new A,ny=new A,sy=new A,oy=new A,ly=new A,hy=new A;var cy=new A;var uy=new A,dy=new ke,py=new ke;var my=new A,fy=new Le,gy=new Le;var vy=new A,_y=new A,xy=new A;var yy=new A,My=new Ko;var by=new Yt;var Sy=new A;function Th(t,e,i,r){let a=Nm(r);switch(i){case nc:return t*e;case ko:return t*e/a.components*a.byteLength;case Go:return t*e/a.components*a.byteLength;case kr:return t*e*2/a.components*a.byteLength;case Ho:return t*e*2/a.components*a.byteLength;case sc:return t*e*3/a.components*a.byteLength;case jt:return t*e*4/a.components*a.byteLength;case Wo:return t*e*4/a.components*a.byteLength;case Tn:case wn:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case En:case An:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ks:case $s:return Math.max(t,16)*Math.max(e,8)/4;case Zs:case Js:return Math.max(t,8)*Math.max(e,8)/2;case Qs:case eo:case io:case ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case to:case ao:case no:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mo:case bo:case So:return Math.ceil(t/4)*Math.ceil(e/4)*16;case To:case wo:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Eo:case Ao:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nm(t){switch(t){case kt:case tc:return{byteLength:1,components:1};case Ta:case ic:case Fi:return{byteLength:2,components:1};case zo:case Vo:return{byteLength:2,components:4};case xi:case Bo:case Xt:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function xu(){let t=null,e=!1,i=null,r=null;function a(n,s){i(n,s),r=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&i!==null&&(r=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){i=n},setContext:function(n){t=n}}}function Om(t){let e=new WeakMap;function i(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=t.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=t.SHORT;else if(h instanceof Uint32Array)p=t.UNSIGNED_INT;else if(h instanceof Int32Array)p=t.INT;else if(h instanceof Int8Array)p=t.BYTE;else if(h instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,h){let c=l.array,u=l.updateRanges;if(t.bindBuffer(h,o),u.length===0)t.bufferSubData(h,0,c);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){let v=u[d],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){let g=u[p];t.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Fm,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:Vm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:jm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:Km,bumpmap_pars_fragment:Jm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:rf,color_pars_fragment:af,color_pars_vertex:nf,color_vertex:sf,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:hf,displacementmap_pars_vertex:cf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:ff,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:xf,envmap_physical_pars_fragment:If,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:Tf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Rf,lights_pars_begin:Cf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Uf,lights_phong_pars_fragment:Df,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:Bf,lights_fragment_end:zf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Hf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:jf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:$f,morphtarget_pars_vertex:Qf,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ig,normal_pars_fragment:rg,normal_pars_vertex:ag,normal_vertex:ng,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:cg,opaque_fragment:ug,packing:dg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:fg,dithering_pars_fragment:gg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:yg,shadowmap_vertex:Mg,shadowmask_pars_fragment:bg,skinbase_vertex:Sg,skinning_pars_vertex:Tg,skinning_vertex:wg,skinnormal_vertex:Eg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Ig,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Ug,uv_pars_vertex:Dg,uv_vertex:Ng,worldpos_vertex:Og,background_vert:Fg,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:Vg,cube_vert:kg,cube_frag:Gg,depth_vert:Hg,depth_frag:Wg,distance_vert:Xg,distance_frag:jg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:Zg,linedashed_frag:Kg,meshbasic_vert:Jg,meshbasic_frag:$g,meshlambert_vert:Qg,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:a0,meshphong_vert:n0,meshphong_frag:s0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:h0,meshtoon_frag:c0,points_vert:u0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:f0,sprite_frag:g0},me={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},mi={basic:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Dt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Dt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Dt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Dt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Dt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Dt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Dt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Dt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Dt([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Dt([me.lights,me.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mi.physical={uniforms:Dt([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Mn={r:0,b:0,g:0},tr=new qi,v0=new ke;function _0(t,e,i,r,a,n,s){let o=new Le(0),l=n===!0?0:1,h,c,u=null,d=0,p=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?i:e).get(y)),y}function g(x){let y=!1,C=v(x);C===null?m(o,l):C&&C.isColor&&(m(C,1),y=!0);let E=t.xr.getEnvironmentBlendMode();E==="additive"?r.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(x,y){let C=v(y);C&&(C.isCubeTexture||C.mapping===Vn)?(c===void 0&&(c=new _t(new Gn(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:jr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),tr.copy(y.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),c.material.uniforms.envMap.value=C,c.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(tr)),c.material.toneMapped=$e.getTransfer(C.colorSpace)!==rt,(u!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new _t(new Kt(2,2),new yi({name:"BackgroundMaterial",uniforms:jr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=$e.getTransfer(C.colorSpace)!==rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function m(x,y){x.getRGB(Mn,Mc(t)),r.buffers.color.setClear(Mn.r,Mn.g,Mn.b,y,s)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:g,addToRenderList:f,dispose:M}}function x0(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(b,L,F,k,B){let K=!1,G=u(k,F,L);n!==G&&(n=G,h(n.object)),K=p(b,k,F,B),K&&v(b,k,F,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,y(b,L,F,k),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function h(b){return t.bindVertexArray(b)}function c(b){return t.deleteVertexArray(b)}function u(b,L,F){let k=F.wireframe===!0,B=r[b.id];B===void 0&&(B={},r[b.id]=B);let K=B[L.id];K===void 0&&(K={},B[L.id]=K);let G=K[k];return G===void 0&&(G=d(l()),K[k]=G),G}function d(b){let L=[],F=[],k=[];for(let B=0;B<i;B++)L[B]=0,F[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,L,F,k){let B=n.attributes,K=L.attributes,G=0,H=F.getAttributes();for(let J in H)if(H[J].location>=0){let se=B[J],oe=K[J];if(oe===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),se===void 0||se.attribute!==oe||oe&&se.data!==oe.data)return!0;G++}return n.attributesNum!==G||n.index!==k}function v(b,L,F,k){let B={},K=L.attributes,G=0,H=F.getAttributes();for(let J in H)if(H[J].location>=0){let se=K[J];se===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));let oe={};oe.attribute=se,se&&se.data&&(oe.data=se.data),B[J]=oe,G++}n.attributes=B,n.attributesNum=G,n.index=k}function g(){let b=n.newAttributes;for(let L=0,F=b.length;L<F;L++)b[L]=0}function f(b){m(b,0)}function m(b,L){let F=n.newAttributes,k=n.enabledAttributes,B=n.attributeDivisors;F[b]=1,k[b]===0&&(t.enableVertexAttribArray(b),k[b]=1),B[b]!==L&&(t.vertexAttribDivisor(b,L),B[b]=L)}function M(){let b=n.newAttributes,L=n.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==b[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function x(b,L,F,k,B,K,G){G===!0?t.vertexAttribIPointer(b,L,F,B,K):t.vertexAttribPointer(b,L,F,k,B,K)}function y(b,L,F,k){g();let B=k.attributes,K=F.getAttributes(),G=L.defaultAttributeValues;for(let H in K){let J=K[H];if(J.location>=0){let se=B[H];if(se===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let oe=se.normalized,xe=se.itemSize,Ue=e.get(se);if(Ue===void 0)continue;let et=Ue.buffer,tt=Ue.type,q=Ue.bytesPerElement,he=tt===t.INT||tt===t.UNSIGNED_INT||se.gpuType===Bo;if(se.isInterleavedBufferAttribute){let ce=se.data,Me=ce.stride,De=se.offset;if(ce.isInstancedInterleavedBuffer){for(let be=0;be<J.locationSize;be++)m(J.location+be,ce.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<J.locationSize;be++)f(J.location+be);t.bindBuffer(t.ARRAY_BUFFER,et);for(let be=0;be<J.locationSize;be++)x(J.location+be,xe/J.locationSize,tt,oe,Me*q,(De+xe/J.locationSize*be)*q,he)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)m(J.location+ce,se.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<J.locationSize;ce++)f(J.location+ce);t.bindBuffer(t.ARRAY_BUFFER,et);for(let ce=0;ce<J.locationSize;ce++)x(J.location+ce,xe/J.locationSize,tt,oe,xe*q,xe/J.locationSize*ce*q,he)}}else if(G!==void 0){let oe=G[H];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(J.location,oe);break;case 3:t.vertexAttrib3fv(J.location,oe);break;case 4:t.vertexAttrib4fv(J.location,oe);break;default:t.vertexAttrib1fv(J.location,oe)}}}}M()}function C(){R();for(let b in r){let L=r[b];for(let F in L){let k=L[F];for(let B in k)c(k[B].object),delete k[B];delete L[F]}delete r[b]}}function E(b){if(r[b.id]===void 0)return;let L=r[b.id];for(let F in L){let k=L[F];for(let B in k)c(k[B].object),delete k[B];delete L[F]}delete r[b.id]}function P(b){for(let L in r){let F=r[L];if(F[b.id]===void 0)continue;let k=F[b.id];for(let B in k)c(k[B].object),delete k[B];delete F[b.id]}}function R(){T(),s=!0,n!==a&&(n=a,h(n.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:f,disableUnusedAttributes:M}}function y0(t,e,i){let r;function a(h){r=h}function n(h,c){t.drawArrays(r,h,c),i.update(c,r,1)}function s(h,c,u){u!==0&&(t.drawArraysInstanced(r,h,c,u),i.update(c,r,u))}function o(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];i.update(d,r,1)}function l(h,c,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h.length;v++)s(h[v],c[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(r,h,0,c,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=c[g]*d[g];i.update(v,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M0(t,e,i,r){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(P){return!(P!==jt&&r.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let R=P===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==kt&&r.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Xt&&!R)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(Ce("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,maxSamples:C,samples:E}}function b0(t){let e=this,i=null,r=0,a=!1,n=!1,s=new Li,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||r!==0||a;return a=d,r=u.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=c(u,d,0)},this.setState=function(u,d,p){let v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,m=t.get(u);if(!a||v===null||v.length===0||n&&!f)n?c(null):h();else{let M=n?0:r,x=M*4,y=m.clippingState||null;l.value=y,y=c(v,d,x,p);for(let C=0;C!==x;++C)y[C]=i[C];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(u,d,p,v){let g=u!==null?u.length:0,f=null;if(g!==0){if(f=l.value,v!==!0||f===null){let m=p+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,y=p;x!==g;++x,y+=4)s.copy(u[x]).applyMatrix4(M,o),s.normal.toArray(f,y),f[y+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function S0(t){let e=new WeakMap;function i(s,o){return o===qs?s.mapping=or:o===Ys&&(s.mapping=Vr),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===qs||o===Ys)if(e.has(s)){let l=e.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let h=new Sc(l.height);return h.fromEquirectangularTexture(t,s),e.set(s,h),s.addEventListener("dispose",a),i(h.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}var ji=4,wh=[.125,.215,.35,.446,.526,.582],ar=20,T0=256,ma=new Ba,Eh=new Le,Ls=null,Us=0,Ds=0,Ns=!1,w0=new A,Bn=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,a={}){let{size:n=256,position:s=w0}=a;Ls=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o,s),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ls,Us,Ds),this._renderer.xr.enabled=Ns,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ls=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Fi,format:jt,colorSpace:Pt,depthBuffer:!1},r=Ah(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E0(a)),this._blurMaterial=R0(a,t,e),this._ggxMaterial=A0(a,t,e)}return r}_compileMaterial(t){let e=new _t(new ht,t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,i,r,a){let n=new At(90,1,e,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Eh),l.toneMapping=gi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Gn,new Gt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));let u=this._backgroundBox,d=u.material,p=!1,v=t.background;v?v.isColor&&(d.color.copy(v),t.background=null,p=!0):(d.color.copy(Eh),p=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[g],a.y,a.z)):f===1?(n.up.set(0,0,s[g]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[g],a.z)):(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[g]));let m=this._cubeSize;Pr(r,f*m,g>2?m:0,m,m),l.setRenderTarget(r),p&&l.render(u,n),l.render(t,n)}l.toneMapping=c,l.autoClear=h,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===or||t.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=t;let o=this._cubeSize;Pr(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(n,ma)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),u=0+l*1.25,d=c*u,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-ji?i-p+ji:0),f=4*(this._cubeSize-v);o.envMap.value=t.texture,o.roughness.value=d,o.mipInt.value=p-e,Pr(a,g,f,3*v,2*v),r.setRenderTarget(a),r.render(s,ma),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,Pr(t,g,f,3*v,2*v),r.setRenderTarget(t),r.render(s,ma)}_blur(t,e,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(t,n,e,i,r,"latitudinal",a),this._halfBlur(n,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");let h=3,c=this._lodMeshes[r];c.material=l;let u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ar-1),v=a/p,g=isFinite(a)?1+Math.floor(h*v):ar;g>ar&&Ce(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ar}`);let f=[],m=0;for(let E=0;E<ar;++E){let P=E/v,R=Math.exp(-P*P/2);f.push(R),E===0?m+=R:E<g&&(m+=2*R)}for(let E=0;E<f.length;E++)f[E]=f[E]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=n==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-i;let x=this._sizeLods[r],y=3*x*(r>M-ji?r-M+ji:0),C=4*(this._cubeSize-x);Pr(e,y,C,3*x,2*x),o.setRenderTarget(e),o.render(c,ma)}};function E0(t){let e=[],i=[],r=[],a=t,n=t-ji+1+wh.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);e.push(o);let l=1/o;s>t-ji?l=wh[s-t+ji-1]:s===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,v=6,g=3,f=2,m=1,M=new Float32Array(g*v*p),x=new Float32Array(f*v*p),y=new Float32Array(m*v*p);for(let E=0;E<p;E++){let P=E%3*2/3-1,R=E>2?0:-1,T=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];M.set(T,g*v*E),x.set(d,f*v*E);let b=[E,E,E,E,E,E];y.set(b,m*v*E)}let C=new ht;C.setAttribute("position",new It(M,g)),C.setAttribute("uv",new It(x,f)),C.setAttribute("faceIndex",new It(y,m)),r.push(new _t(C,null)),a>ji&&a--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ah(t,e,i){let r=new vi(t,e,i);return r.texture.mapping=Vn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pr(t,e,i,r,a){t.viewport.set(e,i,r,a),t.scissor.set(e,i,r,a)}function A0(t,e,i){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function R0(t,e,i){let r=new Float32Array(ar),a=new A(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Rh(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ch(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Yn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(t){let e=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,h=l===qs||l===Ys,c=l===or||l===Vr;if(h||c){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new Bn(t)),u=h?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&a(p)?(i===null&&(i=new Bn(t)),u=h?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function n(o){let l=o.target;l.removeEventListener("dispose",n);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function I0(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let a=t.getExtension(r);return e[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Aa("WebGLRenderer: "+r+" extension not supported."),a}}}function P0(t,e,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",s),delete a[d.id];let p=n.get(d);p&&(e.remove(p),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],t.ARRAY_BUFFER)}function h(u){let d=[],p=u.index,v=u.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let x=0,y=M.length;x<y;x+=3){let C=M[x+0],E=M[x+1],P=M[x+2];d.push(C,E,E,P,P,C)}}else if(v!==void 0){let M=v.array;g=v.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let C=x+0,E=x+1,P=x+2;d.push(C,E,E,P,P,C)}}else return;let f=new(hc(d)?_c:vc)(d,1);f.version=g;let m=n.get(u);m&&e.remove(m),n.set(u,f)}function c(u){let d=n.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function L0(t,e,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(r,p,n,d*s),i.update(p,r,1)}function h(d,p,v){v!==0&&(t.drawElementsInstanced(r,p,n,d*s,v),i.update(p,r,v))}function c(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,n,d,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];i.update(g,r,1)}function u(d,p,v,g){if(v===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)h(d[m]/s,p[m],g[m]);else{f.multiDrawElementsInstancedWEBGL(r,p,0,n,d,0,g,0,v);let m=0;for(let M=0;M<v;M++)m+=p[M]*g[M];i.update(m,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function U0(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case t.TRIANGLES:i.triangles+=o*(n/3);break;case t.LINES:i.lines+=o*(n/2);break;case t.LINE_STRIP:i.lines+=o*(n-1);break;case t.LINE_LOOP:i.lines+=o*n;break;case t.POINTS:i.points+=o*n;break;default:Be("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:a,update:r}}function D0(t,e,i){let r=new WeakMap,a=new mt;function n(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,d=r.get(o);if(d===void 0||d.count!==u){let p=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();let v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;v===!0&&(y=1),g===!0&&(y=2),f===!0&&(y=3);let C=o.attributes.position.count*y,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let P=new Float32Array(C*E*4*u),R=new mc(P,C,E,u);R.type=Xt,R.needsUpdate=!0;let T=y*4;for(let b=0;b<u;b++){let L=m[b],F=M[b],k=x[b],B=C*E*4*b;for(let K=0;K<L.count;K++){let G=K*T;v===!0&&(a.fromBufferAttribute(L,K),P[B+G+0]=a.x,P[B+G+1]=a.y,P[B+G+2]=a.z,P[B+G+3]=0),g===!0&&(a.fromBufferAttribute(F,K),P[B+G+4]=a.x,P[B+G+5]=a.y,P[B+G+6]=a.z,P[B+G+7]=0),f===!0&&(a.fromBufferAttribute(k,K),P[B+G+8]=a.x,P[B+G+9]=a.y,P[B+G+10]=a.z,P[B+G+11]=k.itemSize===4?a.w:1)}}d={count:u,texture:R,size:new $(C,E)},r.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,i);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:n}}function N0(t,e,i,r){let a=new WeakMap;function n(l){let h=r.render.frame,c=l.geometry,u=e.get(l,c);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==h&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function s(){a=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:n,dispose:s}}var O0={[Yh]:"LINEAR_TONE_MAPPING",[Zh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[zn]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function F0(t,e,i,r,a){let n=new vi(e,i,{type:t,depthBuffer:r,stencilBuffer:a}),s=new vi(e,i,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),o=new ht;o.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let l=new lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new _t(o,l),c=new Ba(-1,1,1,-1,0,1),u=null,d=null,p=!1,v,g=null,f=[],m=!1;this.setSize=function(M,x){n.setSize(M,x),s.setSize(M,x);for(let y=0;y<f.length;y++){let C=f[y];C.setSize&&C.setSize(M,x)}},this.setEffects=function(M){f=M,m=f.length>0&&f[0].isRenderPass===!0;let x=n.width,y=n.height;for(let C=0;C<f.length;C++){let E=f[C];E.setSize&&E.setSize(x,y)}},this.begin=function(M,x){if(p||M.toneMapping===gi&&f.length===0)return!1;if(g=x,x!==null){let y=x.width,C=x.height;(n.width!==y||n.height!==C)&&this.setSize(y,C)}return m===!1&&M.setRenderTarget(n),v=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return m},this.end=function(M,x){M.toneMapping=v,p=!0;let y=n,C=s;for(let E=0;E<f.length;E++){let P=f[E];if(P.enabled!==!1&&(P.render(M,C,y,x),P.needsSwap!==!1)){let R=y;y=C,C=R}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},$e.getTransfer(u)===rt&&(l.defines.SRGB_TRANSFER="");let E=O0[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(g),M.render(h,c),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){n.dispose(),s.dispose(),o.dispose(),l.dispose()}}var yu=new Lt,Do=new Ra(1,1),Mu=new mc,bu=new Xd,Su=new bc,Ih=[],Ph=[],Lh=new Float32Array(16),Uh=new Float32Array(9),Dh=new Float32Array(4);function ra(t,e,i){let r=t[0];if(r<=0||r>0)return t;let a=e*i,n=Ih[a];if(n===void 0&&(n=new Float32Array(a),Ih[a]=n),e!==0){r.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=i,t[s].toArray(n,o)}return n}function St(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function Tt(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Zn(t,e){let i=Ph[e];i===void 0&&(i=new Int32Array(e),Ph[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function B0(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function z0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(St(i,e))return;t.uniform2fv(this.addr,e),Tt(i,e)}}function V0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(St(i,e))return;t.uniform3fv(this.addr,e),Tt(i,e)}}function k0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(St(i,e))return;t.uniform4fv(this.addr,e),Tt(i,e)}}function G0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(St(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(i,e)}else{if(St(i,r))return;Dh.set(r),t.uniformMatrix2fv(this.addr,!1,Dh),Tt(i,r)}}function H0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(St(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(i,e)}else{if(St(i,r))return;Uh.set(r),t.uniformMatrix3fv(this.addr,!1,Uh),Tt(i,r)}}function W0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(St(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(i,e)}else{if(St(i,r))return;Lh.set(r),t.uniformMatrix4fv(this.addr,!1,Lh),Tt(i,r)}}function X0(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function j0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(St(i,e))return;t.uniform2iv(this.addr,e),Tt(i,e)}}function q0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(St(i,e))return;t.uniform3iv(this.addr,e),Tt(i,e)}}function Y0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(St(i,e))return;t.uniform4iv(this.addr,e),Tt(i,e)}}function Z0(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function K0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(St(i,e))return;t.uniform2uiv(this.addr,e),Tt(i,e)}}function J0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(St(i,e))return;t.uniform3uiv(this.addr,e),Tt(i,e)}}function $0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(St(i,e))return;t.uniform4uiv(this.addr,e),Tt(i,e)}}function Q0(t,e,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(t.uniform1i(this.addr,a),r[0]=a);let n;this.type===t.SAMPLER_2D_SHADOW?(Do.compareFunction=i.isReversedDepthBuffer()?jo:Xo,n=Do):n=yu,i.setTexture2D(e||n,a)}function ev(t,e,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(t.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(e||bu,a)}function tv(t,e,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(t.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(e||Su,a)}function iv(t,e,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(t.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(e||Mu,a)}function rv(t){switch(t){case 5126:return B0;case 35664:return z0;case 35665:return V0;case 35666:return k0;case 35674:return G0;case 35675:return H0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return j0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return Z0;case 36294:return K0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return iv}}function av(t,e){t.uniform1fv(this.addr,e)}function nv(t,e){let i=ra(e,this.size,2);t.uniform2fv(this.addr,i)}function sv(t,e){let i=ra(e,this.size,3);t.uniform3fv(this.addr,i)}function ov(t,e){let i=ra(e,this.size,4);t.uniform4fv(this.addr,i)}function lv(t,e){let i=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function hv(t,e){let i=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function cv(t,e){let i=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function uv(t,e){t.uniform1iv(this.addr,e)}function dv(t,e){t.uniform2iv(this.addr,e)}function pv(t,e){t.uniform3iv(this.addr,e)}function mv(t,e){t.uniform4iv(this.addr,e)}function fv(t,e){t.uniform1uiv(this.addr,e)}function gv(t,e){t.uniform2uiv(this.addr,e)}function vv(t,e){t.uniform3uiv(this.addr,e)}function _v(t,e){t.uniform4uiv(this.addr,e)}function xv(t,e,i){let r=this.cache,a=e.length,n=Zn(i,a);St(r,n)||(t.uniform1iv(this.addr,n),Tt(r,n));let s;this.type===t.SAMPLER_2D_SHADOW?s=Do:s=yu;for(let o=0;o!==a;++o)i.setTexture2D(e[o]||s,n[o])}function yv(t,e,i){let r=this.cache,a=e.length,n=Zn(i,a);St(r,n)||(t.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(e[s]||bu,n[s])}function Mv(t,e,i){let r=this.cache,a=e.length,n=Zn(i,a);St(r,n)||(t.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(e[s]||Su,n[s])}function bv(t,e,i){let r=this.cache,a=e.length,n=Zn(i,a);St(r,n)||(t.uniform1iv(this.addr,n),Tt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(e[s]||Mu,n[s])}function Sv(t){switch(t){case 5126:return av;case 35664:return nv;case 35665:return sv;case 35666:return ov;case 35674:return lv;case 35675:return hv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return fv;case 36294:return gv;case 36295:return vv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}var Tv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rv(e.type)}},wv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sv(e.type)}},Ev=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(t,e[s.id],i)}}},Os=/(\w+)(\])?(\[|\.)?/g;function Nh(t,e){t.seq.push(e),t.map[e.id]=e}function Av(t,e,i){let r=t.name,a=r.length;for(Os.lastIndex=0;;){let n=Os.exec(r),s=Os.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){Nh(i,h===void 0?new Tv(o,t,e):new wv(o,t,e));break}else{let c=i.map[o];c===void 0&&(c=new Ev(o),Nh(i,c)),i=c}}}var In=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);Av(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===t.SAMPLER_2D_SHADOW||n.type===t.SAMPLER_CUBE_SHADOW||n.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,n=e.length;a!==n;++a){let s=e[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(t,o.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let n=t[r];n.id in e&&i.push(n)}return i}};function Oh(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var Rv=37297,Cv=0;function Iv(t,e){let i=t.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===e?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Fh=new Ye;function Pv(t){$e._getMatrix(Fh,$e.workingColorSpace,t);let e=`mat3( ${Fh.elements.map(i=>i.toFixed(4))} )`;switch($e.getTransfer(t)){case Pn:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Bh(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Iv(t.getShaderSource(e),s)}else return a}function Lv(t,e){let i=Pv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Uv={[Yh]:"Linear",[Zh]:"Reinhard",[Kh]:"Cineon",[zn]:"ACESFilmic",[$h]:"AgX",[Qh]:"Neutral",[Jh]:"Custom"};function Dv(t,e){let i=Uv[e];return i===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var bn=new A;function Nv(){$e.getLuminanceCoefficients(bn);let t=bn.x.toFixed(4),e=bn.y.toFixed(4),i=bn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function Fv(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Bv(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=t.getActiveAttrib(e,a),s=n.name,o=1;n.type===t.FLOAT_MAT2&&(o=2),n.type===t.FLOAT_MAT3&&(o=3),n.type===t.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:t.getAttribLocation(e,s),locationSize:o}}return i}function _a(t){return t!==""}function zh(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(t){return t.replace(zv,kv)}var Vv=new Map;function kv(t,e){let i=Xe[e];if(i===void 0){let r=Vv.get(e);if(r!==void 0)i=Xe[r],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return No(i)}var Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(t){return t.replace(Gv,Hv)}function Hv(t,e,i,r){let a="";for(let n=parseInt(e);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Gh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Wv={[Sn]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function Xv(t){return Wv[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jv={[or]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[Vn]:"ENVMAP_TYPE_CUBE_UV"};function qv(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jv[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yv={[Vr]:"ENVMAP_MODE_REFRACTION"};function Zv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Yv[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kv={[qh]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function Jv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[t.combine]||"ENVMAP_BLENDING_NONE"}function $v(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Qv(t,e,i,r){let a=t.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Xv(i),h=qv(i),c=Zv(i),u=Jv(i),d=$v(i),p=Ov(i),v=Fv(n),g=a.createProgram(),f,m,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(_a).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(f=[Gh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Gh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==gi?"#define TONE_MAPPING":"",i.toneMapping!==gi?Xe.tonemapping_pars_fragment:"",i.toneMapping!==gi?Dv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Lv("linearToOutputTexel",i.outputColorSpace),Nv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_a).join(`
`)),s=No(s),s=zh(s,i),s=Vh(s,i),o=No(o),o=zh(o,i),o=Vh(o,i),s=kh(s),o=kh(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",i.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+f+s,y=M+m+o,C=Oh(a,a.VERTEX_SHADER,x),E=Oh(a,a.FRAGMENT_SHADER,y);a.attachShader(g,C),a.attachShader(g,E),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function P(L){if(t.debug.checkShaderErrors){let F=a.getProgramInfoLog(g)||"",k=a.getShaderInfoLog(C)||"",B=a.getShaderInfoLog(E)||"",K=F.trim(),G=k.trim(),H=B.trim(),J=!0,se=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,g,C,E);else{let oe=Bh(a,C,"vertex"),xe=Bh(a,E,"fragment");Be("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+oe+`
`+xe)}else K!==""?Ce("WebGLProgram: Program Info Log:",K):(G===""||H==="")&&(se=!1);se&&(L.diagnostics={runnable:J,programLog:K,vertexShader:{log:G,prefix:f},fragmentShader:{log:H,prefix:m}})}a.deleteShader(C),a.deleteShader(E),R=new In(a,g),T=Bv(a,g)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(g,Rv)),b},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=E,this}var e_=0,t_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(t);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new i_(t),e.set(t,i)),i}},i_=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function r_(t,e,i,r,a,n,s){let o=new Zo,l=new t_,h=new Set,c=[],u=new Map,d=a.logarithmicDepthBuffer,p=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return h.add(T),T===0?"uv":`uv${T}`}function f(T,b,L,F,k){let B=F.fog,K=k.geometry,G=T.isMeshStandardMaterial?F.environment:null,H=(T.isMeshStandardMaterial?i:e).get(T.envMap||G),J=H&&H.mapping===Vn?H.image.height:null,se=v[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&Ce("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xe=oe!==void 0?oe.length:0,Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let et,tt,q,he;if(se){let it=mi[se];et=it.vertexShader,tt=it.fragmentShader}else et=T.vertexShader,tt=T.fragmentShader,l.update(T),q=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);let ce=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,qe=!!T.map,Je=!!T.matcap,Y=!!H,re=!!T.aoMap,te=!!T.lightMap,ge=!!T.bumpMap,I=!!T.normalMap,Ne=!!T.displacementMap,pe=!!T.emissiveMap,Oe=!!T.metalnessMap,ue=!!T.roughnessMap,He=T.anisotropy>0,w=T.clearcoat>0,_=T.dispersion>0,N=T.iridescence>0,X=T.sheen>0,Z=T.transmission>0,j=He&&!!T.anisotropyMap,we=w&&!!T.clearcoatMap,le=w&&!!T.clearcoatNormalMap,Ie=w&&!!T.clearcoatRoughnessMap,Ae=N&&!!T.iridescenceMap,Q=N&&!!T.iridescenceThicknessMap,ae=X&&!!T.sheenColorMap,Pe=X&&!!T.sheenRoughnessMap,Ee=!!T.specularMap,ve=!!T.specularColorMap,Ze=!!T.specularIntensityMap,U=Z&&!!T.transmissionMap,de=Z&&!!T.thicknessMap,ne=!!T.gradientMap,Se=!!T.alphaMap,ee=T.alphaTest>0,W=!!T.alphaHash,Te=!!T.extensions,Fe=gi;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Fe=t.toneMapping);let bt={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:tt,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Pt,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:Je,envMap:Y,envMapMode:Y&&H.mapping,envMapCubeUVHeight:J,aoMap:re,lightMap:te,bumpMap:ge,normalMap:I,displacementMap:Ne,emissiveMap:pe,normalMapObjectSpace:I&&T.normalMapType===md,normalMapTangentSpace:I&&T.normalMapType===lc,metalnessMap:Oe,roughnessMap:ue,anisotropy:He,anisotropyMap:j,clearcoat:w,clearcoatMap:we,clearcoatNormalMap:le,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:N,iridescenceMap:Ae,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ae,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:ve,specularIntensityMap:Ze,transmission:Z,transmissionMap:U,thicknessMap:de,gradientMap:ne,opaque:T.transparent===!1&&T.blending===Or&&T.alphaToCoverage===!1,alphaMap:Se,alphaTest:ee,alphaHash:W,combine:T.combine,mapUv:qe&&g(T.map.channel),aoMapUv:re&&g(T.aoMap.channel),lightMapUv:te&&g(T.lightMap.channel),bumpMapUv:ge&&g(T.bumpMap.channel),normalMapUv:I&&g(T.normalMap.channel),displacementMapUv:Ne&&g(T.displacementMap.channel),emissiveMapUv:pe&&g(T.emissiveMap.channel),metalnessMapUv:Oe&&g(T.metalnessMap.channel),roughnessMapUv:ue&&g(T.roughnessMap.channel),anisotropyMapUv:j&&g(T.anisotropyMap.channel),clearcoatMapUv:we&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(T.sheenRoughnessMap.channel),specularMapUv:Ee&&g(T.specularMap.channel),specularColorMapUv:ve&&g(T.specularColorMap.channel),specularIntensityMapUv:Ze&&g(T.specularIntensityMap.channel),transmissionMapUv:U&&g(T.transmissionMap.channel),thicknessMapUv:de&&g(T.thicknessMap.channel),alphaMapUv:Se&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(I||He),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(qe||Se),fog:!!B,useFog:T.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:pe&&T.emissiveMap.isVideoTexture===!0&&$e.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ri,flipSided:T.side===Ft,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Te&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&T.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function m(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let L in T.defines)b.push(L),b.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(M(b,T),x(b,T),b.push(t.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){let b=v[T.type],L;if(b){let F=mi[b];L=np.clone(F.uniforms)}else L=T.uniforms;return L}function C(T,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new Qv(t,b,T,n),c.push(L),u.set(b,L)),L}function E(T){if(--T.usedTimes===0){let b=c.indexOf(T);c[b]=c[c.length-1],c.pop(),u.delete(T.cacheKey),T.destroy()}}function P(T){l.remove(T)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:R}}function a_(){let t=new WeakMap;function e(s){return t.has(s)}function i(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function r(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function n(){t=new WeakMap}return{has:e,get:i,remove:r,update:a,dispose:n}}function n_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wh(){let t=[],e=0,i=[],r=[],a=[];function n(){e=0,i.length=0,r.length=0,a.length=0}function s(u,d,p,v,g,f){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},t[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=g,m.group=f),e++,m}function o(u,d,p,v,g,f){let m=s(u,d,p,v,g,f);p.transmission>0?r.push(m):p.transparent===!0?a.push(m):i.push(m)}function l(u,d,p,v,g,f){let m=s(u,d,p,v,g,f);p.transmission>0?r.unshift(m):p.transparent===!0?a.unshift(m):i.unshift(m)}function h(u,d){i.length>1&&i.sort(u||n_),r.length>1&&r.sort(d||Hh),a.length>1&&a.sort(d||Hh)}function c(){for(let u=e,d=t.length;u<d;u++){let p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:c,sort:h}}function s_(){let t=new WeakMap;function e(r,a){let n=t.get(r),s;return n===void 0?(s=new Wh,t.set(r,[s])):a>=n.length?(s=new Wh,n.push(s)):s=n[a],s}function i(){t=new WeakMap}return{get:e,dispose:i}}function o_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new A,color:new Le};break;case"SpotLight":i={position:new A,direction:new A,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new A,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new A,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new A,halfWidth:new A,halfHeight:new A};break}return t[e.id]=i,i}}}function l_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var h_=0;function c_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u_(t){let e=new o_,i=l_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new A);let a=new A,n=new ke,s=new ke;function o(h){let c=0,u=0,d=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let p=0,v=0,g=0,f=0,m=0,M=0,x=0,y=0,C=0,E=0,P=0;h.sort(c_);for(let T=0,b=h.length;T<b;T++){let L=h[T],F=L.color,k=L.intensity,B=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===kr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=F.r*k,u+=F.g*k,d+=F.b*k;else if(L.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(L.sh.coefficients[G],k);P++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let H=L.shadow,J=i.get(L);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[p]=J,r.directionalShadowMap[p]=K,r.directionalShadowMatrix[p]=L.shadow.matrix,M++}r.directional[p]=G,p++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=B,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,r.spot[g]=G;let H=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&E++),r.spotLightMatrix[g]=H.matrix,L.castShadow){let J=i.get(L);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[g]=J,r.spotShadowMap[g]=K,y++}g++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),r.rectArea[f]=G,f++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let H=L.shadow,J=i.get(L);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[v]=J,r.pointShadowMap[v]=K,r.pointShadowMatrix[v]=L.shadow.matrix,x++}r.point[v]=G,v++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(k),G.groundColor.copy(L.groundColor).multiplyScalar(k),r.hemi[m]=G,m++}}f>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=u,r.ambient[2]=d;let R=r.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==f||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==P)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=f,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=y+C-E,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=P,R.directionalLength=p,R.pointLength=v,R.spotLength=g,R.rectAreaLength=f,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=P,r.version=h_++)}function l(h,c){let u=0,d=0,p=0,v=0,g=0,f=c.matrixWorldInverse;for(let m=0,M=h.length;m<M;m++){let x=h[m];if(x.isDirectionalLight){let y=r.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(f),u++}else if(x.isSpotLight){let y=r.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(f),p++}else if(x.isRectAreaLight){let y=r.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(f),s.identity(),n.copy(x.matrixWorld),n.premultiply(f),s.extractRotation(n),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){let y=r.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let y=r.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:r}}function Xh(t){let e=new u_(t),i=[],r=[];function a(c){h.camera=c,i.length=0,r.length=0}function n(c){i.push(c)}function s(c){r.push(c)}function o(){e.setup(i)}function l(c){e.setupView(i,c)}let h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function d_(t){let e=new WeakMap;function i(a,n=0){let s=e.get(a),o;return s===void 0?(o=new Xh(t),e.set(a,[o])):n>=s.length?(o=new Xh(t),s.push(o)):o=s[n],o}function r(){e=new WeakMap}return{get:i,dispose:r}}var p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f_=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],g_=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],jh=new ke,fa=new A,Fs=new A;function v_(t,e,i){let r=new Da,a=new $,n=new $,s=new mt,o=new hm,l=new cm,h={},c=i.maxTextureSize,u={[_i]:Ft,[Ft]:_i,[ri]:ri},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let v=new ht;v.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new _t(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sn;let m=this.type;this.render=function(E,P,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;E.type===Oo&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Sn);let T=t.getRenderTarget(),b=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Di),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=m!==this.type;k&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(K=>K.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,K=E.length;B<K;B++){let G=E[B],H=G.shadow;if(H===void 0){Ce("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let J=H.getFrameExtents();if(a.multiply(J),n.copy(H.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/J.x),a.x=n.x*J.x,H.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/J.y),a.y=n.y*J.y,H.mapSize.y=n.y)),H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ga){if(G.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new vi(a.x,a.y,{format:kr,type:Fi,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new Ra(a.x,a.y,Xt),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=Bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt}else{G.isPointLight?(H.map=new Sc(a.x),H.map.depthTexture=new _p(a.x,xi)):(H.map=new vi(a.x,a.y),H.map.depthTexture=new Ra(a.x,a.y,xi)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=Bi;let oe=t.state.buffers.depth.getReversed();this.type===Sn?(H.map.depthTexture.compareFunction=oe?jo:Xo,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt)}H.camera.updateProjectionMatrix()}let se=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<se;oe++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(H.map),t.clear());let xe=H.getViewport(oe);s.set(n.x*xe.x,n.y*xe.y,n.x*xe.z,n.y*xe.w),F.viewport(s)}if(G.isPointLight){let xe=H.camera,Ue=H.matrix,et=G.distance||xe.far;et!==xe.far&&(xe.far=et,xe.updateProjectionMatrix()),fa.setFromMatrixPosition(G.matrixWorld),xe.position.copy(fa),Fs.copy(xe.position),Fs.add(f_[oe]),xe.up.copy(g_[oe]),xe.lookAt(Fs),xe.updateMatrixWorld(),Ue.makeTranslation(-fa.x,-fa.y,-fa.z),jh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jh,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(G);r=H.getFrustum(),y(P,R,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===ga&&M(H,R),H.needsUpdate=!1}m=this.type,f.needsUpdate=!1,t.setRenderTarget(T,b,L)};function M(E,P){let R=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vi(a.x,a.y,{format:kr,type:Fi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(P,null,R,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(P,null,R,p,g,null)}function x(E,P,R,T){let b=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=b.uuid,k=P.uuid,B=h[F];B===void 0&&(B={},h[F]=B);let K=B[k];K===void 0&&(K=b.clone(),B[k]=K,P.addEventListener("dispose",C)),b=K}if(b.visible=P.visible,b.wireframe=P.wireframe,T===ga?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=t.properties.get(b);F.light=R}return b}function y(E,P,R,T,b){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ga)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=e.update(E),k=E.material;if(Array.isArray(k)){let B=F.groups;for(let K=0,G=B.length;K<G;K++){let H=B[K],J=k[H.materialIndex];if(J&&J.visible){let se=x(E,J,T,b);E.onBeforeShadow(t,E,P,R,F,se,H),t.renderBufferDirect(R,null,F,se,E,H),E.onAfterShadow(t,E,P,R,F,se,H)}}}else if(k.visible){let B=x(E,k,T,b);E.onBeforeShadow(t,E,P,R,F,B,null),t.renderBufferDirect(R,null,F,B,E,null),E.onAfterShadow(t,E,P,R,F,B,null)}}let L=E.children;for(let F=0,k=L.length;F<k;F++)y(L[F],P,R,T,b)}function C(E){E.target.removeEventListener("dispose",C);for(let P in h){let R=h[P],T=E.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}var __={[Vs]:ks,[Gs]:Xs,[Hs]:js,[zr]:Ws,[ks]:Vs,[Xs]:Gs,[js]:Hs,[Ws]:zr};function x_(t,e){function i(){let U=!1,de=new mt,ne=null,Se=new mt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!U&&(t.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){U=ee},setClear:function(ee,W,Te,Fe,bt){bt===!0&&(ee*=Fe,W*=Fe,Te*=Fe),de.set(ee,W,Te,Fe),Se.equals(de)===!1&&(t.clearColor(ee,W,Te,Fe),Se.copy(de))},reset:function(){U=!1,ne=null,Se.set(-1,0,0,0)}}}function r(){let U=!1,de=!1,ne=null,Se=null,ee=null;return{setReversed:function(W){if(de!==W){let Te=e.get("EXT_clip_control");W?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),de=W;let Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return de},setTest:function(W){W?ce(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(W){ne!==W&&!U&&(t.depthMask(W),ne=W)},setFunc:function(W){if(de&&(W=__[W]),Se!==W){switch(W){case Vs:t.depthFunc(t.NEVER);break;case ks:t.depthFunc(t.ALWAYS);break;case Gs:t.depthFunc(t.LESS);break;case zr:t.depthFunc(t.LEQUAL);break;case Hs:t.depthFunc(t.EQUAL);break;case Ws:t.depthFunc(t.GEQUAL);break;case Xs:t.depthFunc(t.GREATER);break;case js:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=W}},setLocked:function(W){U=W},setClear:function(W){ee!==W&&(de&&(W=1-W),t.clearDepth(W),ee=W)},reset:function(){U=!1,ne=null,Se=null,ee=null,de=!1}}}function a(){let U=!1,de=null,ne=null,Se=null,ee=null,W=null,Te=null,Fe=null,bt=null;return{setTest:function(it){U||(it?ce(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(it){de!==it&&!U&&(t.stencilMask(it),de=it)},setFunc:function(it,Si,Ti){(ne!==it||Se!==Si||ee!==Ti)&&(t.stencilFunc(it,Si,Ti),ne=it,Se=Si,ee=Ti)},setOp:function(it,Si,Ti){(W!==it||Te!==Si||Fe!==Ti)&&(t.stencilOp(it,Si,Ti),W=it,Te=Si,Fe=Ti)},setLocked:function(it){U=it},setClear:function(it){bt!==it&&(t.clearStencil(it),bt=it)},reset:function(){U=!1,de=null,ne=null,Se=null,ee=null,W=null,Te=null,Fe=null,bt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,p=[],v=null,g=!1,f=null,m=null,M=null,x=null,y=null,C=null,E=null,P=new Le(0,0,0),R=0,T=!1,b=null,L=null,F=null,k=null,B=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,H=0,J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=H>=2);let se=null,oe={},xe=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),et=new mt().fromArray(xe),tt=new mt().fromArray(Ue);function q(U,de,ne,Se){let ee=new Uint8Array(4),W=t.createTexture();t.bindTexture(U,W),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<ne;Te++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,ee):t.texImage2D(de+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ee);return W}let he={};he[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(zr),ge(!1),I(wl),ce(t.CULL_FACE),re(Di);function ce(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function Me(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function De(U,de){return u[U]!==de?(t.bindFramebuffer(U,de),u[U]=de,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function be(U,de){let ne=p,Se=!1;if(U){ne=d.get(de),ne===void 0&&(ne=[],d.set(de,ne));let ee=U.textures;if(ne.length!==ee.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let W=0,Te=ee.length;W<Te;W++)ne[W]=t.COLOR_ATTACHMENT0+W;ne.length=ee.length,Se=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,Se=!0);Se&&t.drawBuffers(ne)}function qe(U){return v!==U?(t.useProgram(U),v=U,!0):!1}let Je={[rr]:t.FUNC_ADD,[ju]:t.FUNC_SUBTRACT,[qu]:t.FUNC_REVERSE_SUBTRACT};Je[Yu]=t.MIN,Je[Zu]=t.MAX;let Y={[Ku]:t.ZERO,[Ju]:t.ONE,[$u]:t.SRC_COLOR,[Bs]:t.SRC_ALPHA,[ad]:t.SRC_ALPHA_SATURATE,[id]:t.DST_COLOR,[ed]:t.DST_ALPHA,[Qu]:t.ONE_MINUS_SRC_COLOR,[zs]:t.ONE_MINUS_SRC_ALPHA,[rd]:t.ONE_MINUS_DST_COLOR,[td]:t.ONE_MINUS_DST_ALPHA,[nd]:t.CONSTANT_COLOR,[sd]:t.ONE_MINUS_CONSTANT_COLOR,[od]:t.CONSTANT_ALPHA,[ld]:t.ONE_MINUS_CONSTANT_ALPHA};function re(U,de,ne,Se,ee,W,Te,Fe,bt,it){if(U===Di){g===!0&&(Me(t.BLEND),g=!1);return}if(g===!1&&(ce(t.BLEND),g=!0),U!==Xu){if(U!==f||it!==T){if((m!==rr||y!==rr)&&(t.blendEquation(t.FUNC_ADD),m=rr,y=rr),it)switch(U){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case El:t.blendFunc(t.ONE,t.ONE);break;case Al:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",U);break}else switch(U){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case El:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Al:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",U);break}M=null,x=null,C=null,E=null,P.set(0,0,0),R=0,f=U,T=it}return}ee=ee||de,W=W||ne,Te=Te||Se,(de!==m||ee!==y)&&(t.blendEquationSeparate(Je[de],Je[ee]),m=de,y=ee),(ne!==M||Se!==x||W!==C||Te!==E)&&(t.blendFuncSeparate(Y[ne],Y[Se],Y[W],Y[Te]),M=ne,x=Se,C=W,E=Te),(Fe.equals(P)===!1||bt!==R)&&(t.blendColor(Fe.r,Fe.g,Fe.b,bt),P.copy(Fe),R=bt),f=U,T=!1}function te(U,de){U.side===ri?Me(t.CULL_FACE):ce(t.CULL_FACE);let ne=U.side===Ft;de&&(ne=!ne),ge(ne),U.blending===Or&&U.transparent===!1?re(Di):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),n.setMask(U.colorWrite);let Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function ge(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function I(U){U!==Hu?(ce(t.CULL_FACE),U!==L&&(U===wl?t.cullFace(t.BACK):U===Wu?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),L=U}function Ne(U){U!==F&&(G&&t.lineWidth(U),F=U)}function pe(U,de,ne){U?(ce(t.POLYGON_OFFSET_FILL),(k!==de||B!==ne)&&(t.polygonOffset(de,ne),k=de,B=ne)):Me(t.POLYGON_OFFSET_FILL)}function Oe(U){U?ce(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function ue(U){U===void 0&&(U=t.TEXTURE0+K-1),se!==U&&(t.activeTexture(U),se=U)}function He(U,de,ne){ne===void 0&&(se===null?ne=t.TEXTURE0+K-1:ne=se);let Se=oe[ne];Se===void 0&&(Se={type:void 0,texture:void 0},oe[ne]=Se),(Se.type!==U||Se.texture!==de)&&(se!==ne&&(t.activeTexture(ne),se=ne),t.bindTexture(U,de||he[U]),Se.type=U,Se.texture=de)}function w(){let U=oe[se];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function X(){try{t.texSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function Z(){try{t.texSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function Ie(){try{t.texStorage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function Ae(){try{t.texImage2D(...arguments)}catch(U){Be("WebGLState:",U)}}function Q(){try{t.texImage3D(...arguments)}catch(U){Be("WebGLState:",U)}}function ae(U){et.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Pe(U){tt.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function Ee(U,de){let ne=h.get(de);ne===void 0&&(ne=new WeakMap,h.set(de,ne));let Se=ne.get(U);Se===void 0&&(Se=t.getUniformBlockIndex(de,U.name),ne.set(U,Se))}function ve(U,de){let ne=h.get(de).get(U);l.get(de)!==ne&&(t.uniformBlockBinding(de,ne,U.__bindingPointIndex),l.set(de,ne))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},se=null,oe={},u={},d=new WeakMap,p=[],v=null,g=!1,f=null,m=null,M=null,x=null,y=null,C=null,E=null,P=new Le(0,0,0),R=0,T=!1,b=null,L=null,F=null,k=null,B=null,et.set(0,0,t.canvas.width,t.canvas.height),tt.set(0,0,t.canvas.width,t.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ce,disable:Me,bindFramebuffer:De,drawBuffers:be,useProgram:qe,setBlending:re,setMaterial:te,setFlipSided:ge,setCullFace:I,setLineWidth:Ne,setPolygonOffset:pe,setScissorTest:Oe,activeTexture:ue,bindTexture:He,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ae,texImage3D:Q,updateUBOMapping:Ee,uniformBlockBinding:ve,texStorage2D:le,texStorage3D:Ie,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:we,scissor:ae,viewport:Pe,reset:Ze}}function y_(t,e,i,r,a,n,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return p?new OffscreenCanvas(w,_):Ea("canvas")}function g(w,_,N){let X=1,Z=He(w);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let j=Math.floor(X*Z.width),we=Math.floor(X*Z.height);u===void 0&&(u=v(j,we));let le=_?v(j,we):u;return le.width=j,le.height=we,le.getContext("2d").drawImage(w,0,0,j,we),Ce("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+we+")."),le}else return"data"in w&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps}function m(w){t.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,_,N,X,Z=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=_;if(_===t.RED&&(N===t.FLOAT&&(j=t.R32F),N===t.HALF_FLOAT&&(j=t.R16F),N===t.UNSIGNED_BYTE&&(j=t.R8)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.R8UI),N===t.UNSIGNED_SHORT&&(j=t.R16UI),N===t.UNSIGNED_INT&&(j=t.R32UI),N===t.BYTE&&(j=t.R8I),N===t.SHORT&&(j=t.R16I),N===t.INT&&(j=t.R32I)),_===t.RG&&(N===t.FLOAT&&(j=t.RG32F),N===t.HALF_FLOAT&&(j=t.RG16F),N===t.UNSIGNED_BYTE&&(j=t.RG8)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RG8UI),N===t.UNSIGNED_SHORT&&(j=t.RG16UI),N===t.UNSIGNED_INT&&(j=t.RG32UI),N===t.BYTE&&(j=t.RG8I),N===t.SHORT&&(j=t.RG16I),N===t.INT&&(j=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGB8UI),N===t.UNSIGNED_SHORT&&(j=t.RGB16UI),N===t.UNSIGNED_INT&&(j=t.RGB32UI),N===t.BYTE&&(j=t.RGB8I),N===t.SHORT&&(j=t.RGB16I),N===t.INT&&(j=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),N===t.UNSIGNED_INT&&(j=t.RGBA32UI),N===t.BYTE&&(j=t.RGBA8I),N===t.SHORT&&(j=t.RGBA16I),N===t.INT&&(j=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),_===t.RGBA){let we=Z?Pn:$e.getTransfer(X);N===t.FLOAT&&(j=t.RGBA32F),N===t.HALF_FLOAT&&(j=t.RGBA16F),N===t.UNSIGNED_BYTE&&(j=we===rt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(w,_){let N;return w?_===null||_===xi||_===wa?N=t.DEPTH24_STENCIL8:_===Xt?N=t.DEPTH32F_STENCIL8:_===Ta&&(N=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===wa?N=t.DEPTH_COMPONENT24:_===Xt?N=t.DEPTH_COMPONENT32F:_===Ta&&(N=t.DEPTH_COMPONENT16),N}function C(w,_){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==Mt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function E(w){let _=w.target;_.removeEventListener("dispose",E),R(_),_.isVideoTexture&&c.delete(_)}function P(w){let _=w.target;_.removeEventListener("dispose",P),b(_)}function R(w){let _=r.get(w);if(_.__webglInit===void 0)return;let N=w.source,X=d.get(N);if(X){let Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(w),Object.keys(X).length===0&&d.delete(N)}r.remove(w)}function T(w){let _=r.get(w);t.deleteTexture(_.__webglTexture);let N=w.source,X=d.get(N);delete X[_.__cacheKey],s.memory.textures--}function b(w){let _=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let X=0,Z=N.length;X<Z;X++){let j=r.get(N[X]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),s.memory.textures--),r.remove(N[X])}r.remove(w)}let L=0;function F(){L=0}function k(){let w=L;return w>=a.maxTextures&&Ce("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),L+=1,w}function B(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function K(w,_){let N=r.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let X=w.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function G(w,_){let N=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){he(N,w,_);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function H(w,_){let N=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){he(N,w,_);return}i.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function J(w,_){let N=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){ce(N,w,_);return}i.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}let se={[Oi]:t.REPEAT,[ni]:t.CLAMP_TO_EDGE,[Sa]:t.MIRRORED_REPEAT},oe={[yt]:t.NEAREST,[Fo]:t.NEAREST_MIPMAP_NEAREST,[Nr]:t.NEAREST_MIPMAP_LINEAR,[Mt]:t.LINEAR,[xa]:t.LINEAR_MIPMAP_NEAREST,[fi]:t.LINEAR_MIPMAP_LINEAR},xe={[fd]:t.NEVER,[yd]:t.ALWAYS,[gd]:t.LESS,[Xo]:t.LEQUAL,[vd]:t.EQUAL,[jo]:t.GEQUAL,[_d]:t.GREATER,[xd]:t.NOTEQUAL};function Ue(w,_){if(_.type===Xt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mt||_.magFilter===xa||_.magFilter===Nr||_.magFilter===fi||_.minFilter===Mt||_.minFilter===xa||_.minFilter===Nr||_.minFilter===fi)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,se[_.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,se[_.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,se[_.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,oe[_.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yt||_.minFilter!==Nr&&_.minFilter!==fi||_.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function et(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",E));let X=_.source,Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));let j=B(_);if(j!==w.__cacheKey){Z[j]===void 0&&(Z[j]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Z[j].usedTimes++;let we=Z[w.__cacheKey];we!==void 0&&(Z[w.__cacheKey].usedTimes--,we.usedTimes===0&&T(_)),w.__cacheKey=j,w.__webglTexture=Z[j].texture}return N}function tt(w,_,N){return Math.floor(Math.floor(w/N)/_)}function q(w,_,N,X){let Z=w.updateRanges;if(Z.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,X,_.data);else{Z.sort((Ae,Q)=>Ae.start-Q.start);let j=0;for(let Ae=1;Ae<Z.length;Ae++){let Q=Z[j],ae=Z[Ae],Pe=Q.start+Q.count,Ee=tt(ae.start,_.width,4),ve=tt(Q.start,_.width,4);ae.start<=Pe+1&&Ee===ve&&tt(ae.start+ae.count-1,_.width,4)===Ee?Q.count=Math.max(Q.count,ae.start+ae.count-Q.start):(++j,Z[j]=ae)}Z.length=j+1;let we=t.getParameter(t.UNPACK_ROW_LENGTH),le=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,Q=Z.length;Ae<Q;Ae++){let ae=Z[Ae],Pe=Math.floor(ae.start/4),Ee=Math.ceil(ae.count/4),ve=Pe%_.width,Ze=Math.floor(Pe/_.width),U=Ee;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ze),i.texSubImage2D(t.TEXTURE_2D,0,ve,Ze,U,1,N,X,_.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,we),t.pixelStorei(t.UNPACK_SKIP_PIXELS,le),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function he(w,_,N){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);let Z=et(w,_),j=_.source;i.bindTexture(X,w.__webglTexture,t.TEXTURE0+N);let we=r.get(j);if(j.version!==we.__version||Z===!0){i.activeTexture(t.TEXTURE0+N);let le=$e.getPrimaries($e.workingColorSpace),Ie=_.colorSpace===Xi?null:$e.getPrimaries(_.colorSpace),Ae=_.colorSpace===Xi||le===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Q=g(_.image,!1,a.maxTextureSize);Q=ue(_,Q);let ae=n.convert(_.format,_.colorSpace),Pe=n.convert(_.type),Ee=x(_.internalFormat,ae,Pe,_.colorSpace,_.isVideoTexture);Ue(X,_);let ve,Ze=_.mipmaps,U=_.isVideoTexture!==!0,de=we.__version===void 0||Z===!0,ne=j.dataReady,Se=C(_,Q);if(_.isDepthTexture)Ee=y(_.format===nr,_.type),de&&(U?i.texStorage2D(t.TEXTURE_2D,1,Ee,Q.width,Q.height):i.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ae,Pe,null));else if(_.isDataTexture)if(Ze.length>0){U&&de&&i.texStorage2D(t.TEXTURE_2D,Se,Ee,Ze[0].width,Ze[0].height);for(let ee=0,W=Ze.length;ee<W;ee++)ve=Ze[ee],U?ne&&i.texSubImage2D(t.TEXTURE_2D,ee,0,0,ve.width,ve.height,ae,Pe,ve.data):i.texImage2D(t.TEXTURE_2D,ee,Ee,ve.width,ve.height,0,ae,Pe,ve.data);_.generateMipmaps=!1}else U?(de&&i.texStorage2D(t.TEXTURE_2D,Se,Ee,Q.width,Q.height),ne&&q(_,Q,ae,Pe)):i.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ae,Pe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&de&&i.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ee,Ze[0].width,Ze[0].height,Q.depth);for(let ee=0,W=Ze.length;ee<W;ee++)if(ve=Ze[ee],_.format!==jt)if(ae!==null)if(U){if(ne)if(_.layerUpdates.size>0){let Te=Th(ve.width,ve.height,_.format,_.type);for(let Fe of _.layerUpdates){let bt=ve.data.subarray(Fe*Te/ve.data.BYTES_PER_ELEMENT,(Fe+1)*Te/ve.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,Fe,ve.width,ve.height,1,ae,bt)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,Q.depth,ae,ve.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ee,ve.width,ve.height,Q.depth,0,ve.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ne&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,Q.depth,ae,Pe,ve.data):i.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ee,ve.width,ve.height,Q.depth,0,ae,Pe,ve.data)}else{U&&de&&i.texStorage2D(t.TEXTURE_2D,Se,Ee,Ze[0].width,Ze[0].height);for(let ee=0,W=Ze.length;ee<W;ee++)ve=Ze[ee],_.format!==jt?ae!==null?U?ne&&i.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ve.width,ve.height,ae,ve.data):i.compressedTexImage2D(t.TEXTURE_2D,ee,Ee,ve.width,ve.height,0,ve.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ne&&i.texSubImage2D(t.TEXTURE_2D,ee,0,0,ve.width,ve.height,ae,Pe,ve.data):i.texImage2D(t.TEXTURE_2D,ee,Ee,ve.width,ve.height,0,ae,Pe,ve.data)}else if(_.isDataArrayTexture)if(U){if(de&&i.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ee,Q.width,Q.height,Q.depth),ne)if(_.layerUpdates.size>0){let ee=Th(Q.width,Q.height,_.format,_.type);for(let W of _.layerUpdates){let Te=Q.data.subarray(W*ee/Q.data.BYTES_PER_ELEMENT,(W+1)*ee/Q.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,W,Q.width,Q.height,1,ae,Pe,Te)}_.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Pe,Q.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,ae,Pe,Q.data);else if(_.isData3DTexture)U?(de&&i.texStorage3D(t.TEXTURE_3D,Se,Ee,Q.width,Q.height,Q.depth),ne&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Pe,Q.data)):i.texImage3D(t.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,ae,Pe,Q.data);else if(_.isFramebufferTexture){if(de)if(U)i.texStorage2D(t.TEXTURE_2D,Se,Ee,Q.width,Q.height);else{let ee=Q.width,W=Q.height;for(let Te=0;Te<Se;Te++)i.texImage2D(t.TEXTURE_2D,Te,Ee,ee,W,0,ae,Pe,null),ee>>=1,W>>=1}}else if(Ze.length>0){if(U&&de){let ee=He(Ze[0]);i.texStorage2D(t.TEXTURE_2D,Se,Ee,ee.width,ee.height)}for(let ee=0,W=Ze.length;ee<W;ee++)ve=Ze[ee],U?ne&&i.texSubImage2D(t.TEXTURE_2D,ee,0,0,ae,Pe,ve):i.texImage2D(t.TEXTURE_2D,ee,Ee,ae,Pe,ve);_.generateMipmaps=!1}else if(U){if(de){let ee=He(Q);i.texStorage2D(t.TEXTURE_2D,Se,Ee,ee.width,ee.height)}ne&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Pe,Q)}else i.texImage2D(t.TEXTURE_2D,0,Ee,ae,Pe,Q);f(_)&&m(X),we.__version=j.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ce(w,_,N){if(_.image.length!==6)return;let X=et(w,_),Z=_.source;i.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+N);let j=r.get(Z);if(Z.version!==j.__version||X===!0){i.activeTexture(t.TEXTURE0+N);let we=$e.getPrimaries($e.workingColorSpace),le=_.colorSpace===Xi?null:$e.getPrimaries(_.colorSpace),Ie=_.colorSpace===Xi||we===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let W=0;W<6;W++)!Ae&&!Q?ae[W]=g(_.image[W],!0,a.maxCubemapSize):ae[W]=Q?_.image[W].image:_.image[W],ae[W]=ue(_,ae[W]);let Pe=ae[0],Ee=n.convert(_.format,_.colorSpace),ve=n.convert(_.type),Ze=x(_.internalFormat,Ee,ve,_.colorSpace),U=_.isVideoTexture!==!0,de=j.__version===void 0||X===!0,ne=Z.dataReady,Se=C(_,Pe);Ue(t.TEXTURE_CUBE_MAP,_);let ee;if(Ae){U&&de&&i.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ze,Pe.width,Pe.height);for(let W=0;W<6;W++){ee=ae[W].mipmaps;for(let Te=0;Te<ee.length;Te++){let Fe=ee[Te];_.format!==jt?Ee!==null?U?ne&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te,0,0,Fe.width,Fe.height,Ee,Fe.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te,Ze,Fe.width,Fe.height,0,Fe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te,0,0,Fe.width,Fe.height,Ee,ve,Fe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te,Ze,Fe.width,Fe.height,0,Ee,ve,Fe.data)}}}else{if(ee=_.mipmaps,U&&de){ee.length>0&&Se++;let W=He(ae[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Ze,W.width,W.height)}for(let W=0;W<6;W++)if(Q){U?ne&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ae[W].width,ae[W].height,Ee,ve,ae[W].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ze,ae[W].width,ae[W].height,0,Ee,ve,ae[W].data);for(let Te=0;Te<ee.length;Te++){let Fe=ee[Te].image[W].image;U?ne&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te+1,0,0,Fe.width,Fe.height,Ee,ve,Fe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te+1,Ze,Fe.width,Fe.height,0,Ee,ve,Fe.data)}}else{U?ne&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ee,ve,ae[W]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ze,Ee,ve,ae[W]);for(let Te=0;Te<ee.length;Te++){let Fe=ee[Te];U?ne&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te+1,0,0,Ee,ve,Fe.image[W]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te+1,Ze,Ee,ve,Fe.image[W])}}}f(_)&&m(t.TEXTURE_CUBE_MAP),j.__version=Z.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Me(w,_,N,X,Z,j){let we=n.convert(N.format,N.colorSpace),le=n.convert(N.type),Ie=x(N.internalFormat,we,le,N.colorSpace),Ae=r.get(_),Q=r.get(N);if(Q.__renderTarget=_,!Ae.__hasExternalTextures){let ae=Math.max(1,_.width>>j),Pe=Math.max(1,_.height>>j);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?i.texImage3D(Z,j,Ie,ae,Pe,_.depth,0,we,le,null):i.texImage2D(Z,j,Ie,ae,Pe,0,we,le,null)}i.bindFramebuffer(t.FRAMEBUFFER,w),pe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Z,Q.__webglTexture,0,Ne(_)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Z,Q.__webglTexture,j),i.bindFramebuffer(t.FRAMEBUFFER,null)}function De(w,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,w),_.depthBuffer){let X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,j=y(_.stencilBuffer,Z),we=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(_),j,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(_),j,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,j,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,w)}else{let X=_.textures;for(let Z=0;Z<X.length;Z++){let j=X[Z],we=n.convert(j.format,j.colorSpace),le=n.convert(j.type),Ie=x(j.internalFormat,we,le,j.colorSpace);pe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne(_),Ie,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne(_),Ie,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(w,_,N){let X=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=r.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,_.depthTexture);let Ae=n.convert(_.depthTexture.format),Q=n.convert(_.depthTexture.type),ae;_.depthTexture.format===Bi?ae=t.DEPTH_COMPONENT24:_.depthTexture.format===nr&&(ae=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ae,_.width,_.height,0,Ae,Q,null)}}else K(_.depthTexture,0);let j=Z.__webglTexture,we=Ne(_),le=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Ie=_.depthTexture.format===nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bi)pe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ie,le,j,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Ie,le,j,0);else if(_.depthTexture.format===nr)pe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ie,le,j,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Ie,le,j,0);else throw new Error("Unknown depthTexture format")}function qe(w){let _=r.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)be(_.__webglFramebuffer[X],w,X);else{let X=w.texture.mipmaps;X&&X.length>0?be(_.__webglFramebuffer[0],w,0):be(_.__webglFramebuffer,w,0)}else if(N){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),De(_.__webglDepthbuffer[X],w,!1);else{let Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,j)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),De(_.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,j)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(w,_,N){let X=r.get(w);_!==void 0&&Me(X.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&qe(w)}function Y(w){let _=w.texture,N=r.get(w),X=r.get(_);w.addEventListener("dispose",P);let Z=w.textures,j=w.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,s.memory.textures++),j){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)N.__webglFramebuffer[le][Ie]=t.createFramebuffer()}else N.__webglFramebuffer[le]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[le]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(we)for(let le=0,Ie=Z.length;le<Ie;le++){let Ae=r.get(Z[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&pe(w)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){let Ie=Z[le];N.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[le]);let Ae=n.convert(Ie.format,Ie.colorSpace),Q=n.convert(Ie.type),ae=x(Ie.internalFormat,Ae,Q,Ie.colorSpace,w.isXRRenderTarget===!0),Pe=Ne(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ae,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,N.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),De(N.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){i.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Me(N.__webglFramebuffer[le][Ie],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie);else Me(N.__webglFramebuffer[le],w,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);f(_)&&m(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let le=0,Ie=Z.length;le<Ie;le++){let Ae=Z[le],Q=r.get(Ae),ae=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ae,Q.__webglTexture),Ue(ae,Ae),Me(N.__webglFramebuffer,w,Ae,t.COLOR_ATTACHMENT0+le,ae,0),f(Ae)&&m(ae)}i.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(le,X.__webglTexture),Ue(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Me(N.__webglFramebuffer[Ie],w,_,t.COLOR_ATTACHMENT0,le,Ie);else Me(N.__webglFramebuffer,w,_,t.COLOR_ATTACHMENT0,le,0);f(_)&&m(le),i.unbindTexture()}w.depthBuffer&&qe(w)}function re(w){let _=w.textures;for(let N=0,X=_.length;N<X;N++){let Z=_[N];if(f(Z)){let j=M(w),we=r.get(Z).__webglTexture;i.bindTexture(j,we),m(j),i.unbindTexture()}}}let te=[],ge=[];function I(w){if(w.samples>0){if(pe(w)===!1){let _=w.textures,N=w.width,X=w.height,Z=t.COLOR_BUFFER_BIT,j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=r.get(w),le=_.length>1;if(le)for(let Ae=0;Ae<_.length;Ae++)i.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Ie=w.texture.mipmaps;Ie&&Ie.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let Q=r.get(_[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,N,X,0,0,N,X,Z,t.NEAREST),l===!0&&(te.length=0,ge.length=0,te.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(te.push(j),ge.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<_.length;Ae++){i.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let Q=r.get(_[Ae]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Q,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ne(w){return Math.min(a.maxSamples,w.samples)}function pe(w){let _=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(w){let _=s.render.frame;c.get(w)!==_&&(c.set(w,_),w.update())}function ue(w,_){let N=w.colorSpace,X=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Pt&&N!==Xi&&($e.getTransfer(N)===rt?(X!==jt||Z!==kt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",N)),_}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Je,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function M_(t,e){function i(r,a=Xi){let n,s=$e.getTransfer(a);if(r===kt)return t.UNSIGNED_BYTE;if(r===zo)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Vo)return t.UNSIGNED_SHORT_5_5_5_1;if(r===rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===ac)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===tc)return t.BYTE;if(r===ic)return t.SHORT;if(r===Ta)return t.UNSIGNED_SHORT;if(r===Bo)return t.INT;if(r===xi)return t.UNSIGNED_INT;if(r===Xt)return t.FLOAT;if(r===Fi)return t.HALF_FLOAT;if(r===nc)return t.ALPHA;if(r===sc)return t.RGB;if(r===jt)return t.RGBA;if(r===Bi)return t.DEPTH_COMPONENT;if(r===nr)return t.DEPTH_STENCIL;if(r===ko)return t.RED;if(r===Go)return t.RED_INTEGER;if(r===kr)return t.RG;if(r===Ho)return t.RG_INTEGER;if(r===Wo)return t.RGBA_INTEGER;if(r===Tn||r===wn||r===En||r===An)if(s===rt)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Tn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===An)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Tn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===En)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===An)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zs||r===Ks||r===Js||r===$s)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Zs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ks)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Js)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$s)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qs||r===eo||r===to||r===io||r===ro||r===ao||r===no)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Qs||r===eo)return s===rt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===to)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===io)return n.COMPRESSED_R11_EAC;if(r===ro)return n.COMPRESSED_SIGNED_R11_EAC;if(r===ao)return n.COMPRESSED_RG11_EAC;if(r===no)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===so||r===oo||r===lo||r===ho||r===co||r===uo||r===po||r===mo||r===fo||r===go||r===vo||r===_o||r===xo||r===yo)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===so)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ho)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===co)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===po)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===go)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_o)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yo)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mo||r===bo||r===So)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===Mo)return s===rt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===So)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===To||r===wo||r===Eo||r===Ao)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===To)return n.COMPRESSED_RED_RGTC1_EXT;if(r===wo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ao)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,T_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Oc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new yi({vertexShader:b_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},w_=class extends Yr{constructor(t,e){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",g=new T_,f={},m=e.getContextAttributes(),M=null,x=null,y=[],C=[],E=new $,P=null,R=new At;R.viewport=new mt;let T=new At;T.viewport=new mt;let b=[R,T],L=new wm,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=y[q];return he===void 0&&(he=new Ms,y[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=y[q];return he===void 0&&(he=new Ms,y[q]=he),he.getGripSpace()},this.getHand=function(q){let he=y[q];return he===void 0&&(he=new Ms,y[q]=he),he.getHandSpace()};function B(q){let he=C.indexOf(q.inputSource);if(he===-1)return;let ce=y[he];ce!==void 0&&(ce.update(q.inputSource,q.frame,l||n),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let q=0;q<y.length;q++){let he=C[q];he!==null&&(C[q]=null,y[q].disconnect(he))}F=null,k=null,g.reset();for(let q in f)delete f[q];t.setRenderTarget(M),d=null,u=null,c=null,r=null,x=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,e)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ce=null,Me=null;m.depth&&(Me=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,he=m.stencil?nr:Bi,ce=m.stencil?wa:xi);let De={colorFormat:e.RGBA8,depthFormat:Me,scaleFactor:a};c=this.getBinding(),u=c.createProjectionLayer(De),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new vi(u.textureWidth,u.textureHeight,{format:jt,type:kt,depthTexture:new Ra(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,e,he),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new vi(d.framebufferWidth,d.framebufferHeight,{format:jt,type:kt,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(q){for(let he=0;he<q.removed.length;he++){let ce=q.removed[he],Me=C.indexOf(ce);Me>=0&&(C[Me]=null,y[Me].disconnect(ce))}for(let he=0;he<q.added.length;he++){let ce=q.added[he],Me=C.indexOf(ce);if(Me===-1){for(let be=0;be<y.length;be++)if(be>=C.length){C.push(ce),Me=be;break}else if(C[be]===null){C[be]=ce,Me=be;break}if(Me===-1)break}let De=y[Me];De&&De.connect(ce)}}let H=new A,J=new A;function se(q,he,ce){H.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);let Me=H.distanceTo(J),De=he.projectionMatrix.elements,be=ce.projectionMatrix.elements,qe=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),Y=(De[9]+1)/De[5],re=(De[9]-1)/De[5],te=(De[8]-1)/De[0],ge=(be[8]+1)/be[0],I=qe*te,Ne=qe*ge,pe=Me/(-te+ge),Oe=pe*-te;if(he.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let ue=qe+pe,He=Je+pe,w=I-Oe,_=Ne+(Me-Oe),N=Y*Je/He*ue,X=re*Je/He*ue;q.projectionMatrix.makePerspective(w,_,N,X,ue,He),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let he=q.near,ce=q.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),L.near=T.near=R.near=he,L.far=T.far=R.far=ce,(F!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,k=L.far),L.layers.mask=q.layers.mask|6,R.layers.mask=L.layers.mask&3,T.layers.mask=L.layers.mask&5;let Me=q.parent,De=L.cameras;oe(L,Me);for(let be=0;be<De.length;be++)oe(De[be],Me);De.length===2?se(L,R,T):L.projectionMatrix.copy(R.projectionMatrix),xe(q,L,Me)};function xe(q,he,ce){ce===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(q){o=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return f[q]};let Ue=null;function et(q,he){if(h=he.getViewerPose(l||n),p=he,h!==null){let ce=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Me=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,Me=!0);for(let be=0;be<ce.length;be++){let qe=ce[be],Je=null;if(d!==null)Je=d.getViewport(qe);else{let re=c.getViewSubImage(u,qe);Je=re.viewport,be===0&&(t.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(x))}let Y=b[be];Y===void 0&&(Y=new At,Y.layers.enable(be),Y.viewport=new mt,b[be]=Y),Y.matrix.fromArray(qe.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(qe.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Me===!0&&L.cameras.push(Y)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();let be=c.getDepthInformation(ce[0]);be&&be.isValid&&be.texture&&g.init(be,r.renderState)}if(De&&De.includes("camera-access")&&v){t.state.unbindTexture(),c=i.getBinding();for(let be=0;be<ce.length;be++){let qe=ce[be].camera;if(qe){let Je=f[qe];Je||(Je=new Oc,f[qe]=Je);let Y=c.getCameraImage(qe);Je.sourceTexture=Y}}}}for(let ce=0;ce<y.length;ce++){let Me=C[ce],De=y[ce];Me!==null&&De!==void 0&&De.update(Me,he,l||n)}Ue&&Ue(q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}let tt=new xu;tt.setAnimationLoop(et),this.setAnimationLoop=function(q){Ue=q},this.dispose=function(){}}},ir=new qi,E_=new ke;function A_(t,e){function i(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function r(f,m){m.color.getRGB(f.fogColor.value,Mc(t)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function a(f,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?n(f,m):m.isMeshToonMaterial?(n(f,m),u(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m)):m.isMeshStandardMaterial?(n(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,y)):m.isMeshMatcapMaterial?(n(f,m),v(f,m)):m.isMeshDepthMaterial?n(f,m):m.isMeshDistanceMaterial?(n(f,m),g(f,m)):m.isMeshNormalMaterial?n(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,M,x):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,i(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ft&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,i(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ft&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,i(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,i(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let M=e.get(m),x=M.envMap,y=M.envMapRotation;x&&(f.envMap.value=x,ir.copy(y),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),f.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(ir)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,f.aoMapTransform))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=x*.5,m.map&&(f.map.value=m.map,i(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,i(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,i(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){let M=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function R_(t,e,i,r){let a={},n={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;r.uniformBlockBinding(M,y)}function h(M,x){let y=a[M.id];y===void 0&&(v(M),y=c(M),a[M.id]=y,M.addEventListener("dispose",f));let C=x.program;r.updateUBOMapping(M,C);let E=e.render.frame;n[M.id]!==E&&(d(M),n[M.id]=E)}function c(M){let x=u();M.__bindingPointIndex=x;let y=t.createBuffer(),C=M.__size,E=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=a[M.id],y=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,P=y.length;E<P;E++){let R=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,b=R.length;T<b;T++){let L=R[T];if(p(L,E,T,C)===!0){let F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],B=0;for(let K=0;K<k.length;K++){let G=k[K],H=g(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+B,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,B),B+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,x,y,C){let E=M.value,P=x+"_"+y;if(C[P]===void 0)return typeof E=="number"||typeof E=="boolean"?C[P]=E:C[P]=E.clone(),!0;{let R=C[P];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[P]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function v(M){let x=M.uniforms,y=0,C=16;for(let P=0,R=x.length;P<R;P++){let T=Array.isArray(x[P])?x[P]:[x[P]];for(let b=0,L=T.length;b<L;b++){let F=T[b],k=Array.isArray(F.value)?F.value:[F.value];for(let B=0,K=k.length;B<K;B++){let G=k[B],H=g(G),J=y%C,se=J%H.boundary,oe=J+se;y+=se,oe!==0&&C-oe<H.storage&&(y+=C-oe),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=H.storage}}}let E=y%C;return E>0&&(y+=C-E),M.__size=y,M.__cache={},this}function g(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){let x=M.target;x.removeEventListener("dispose",f);let y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function m(){for(let M in a)t.deleteBuffer(a[M]);s=[],a={},n={}}return{bind:l,update:h,dispose:m}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function I_(){return pi===null&&(pi=new $o(C_,16,16,kr,Fi),pi.name="DFG_LUT",pi.minFilter=Mt,pi.magFilter=Mt,pi.wrapS=ni,pi.wrapT=ni,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var Tu=class{constructor(t={}){let{canvas:e=bd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:u=!1,outputBufferType:d=kt}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let v=d,g=new Set([Wo,Ho,Go]),f=new Set([kt,xi,Ta,wa,zo,Vo]),m=new Uint32Array(4),M=new Int32Array(4),x=null,y=null,C=[],E=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,T=!1;this._outputColorSpace=ut;let b=0,L=0,F=null,k=-1,B=null,K=new mt,G=new mt,H=null,J=new Le(0),se=0,oe=e.width,xe=e.height,Ue=1,et=null,tt=null,q=new mt(0,0,oe,xe),he=new mt(0,0,oe,xe),ce=!1,Me=new Da,De=!1,be=!1,qe=new ke,Je=new A,Y=new mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ge(){return F===null?Ue:1}let I=i;function Ne(S,D){return e.getContext(S,D)}try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r182"),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",bt,!1),I===null){let D="webgl2";if(I=Ne(D,S),I===null)throw Ne(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Be("WebGLRenderer: "+S.message),S}let pe,Oe,ue,He,w,_,N,X,Z,j,we,le,Ie,Ae,Q,ae,Pe,Ee,ve,Ze,U,de,ne,Se;function ee(){pe=new I0(I),pe.init(),de=new M_(I,pe),Oe=new M0(I,pe,t,de),ue=new x_(I,pe),Oe.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),He=new U0(I),w=new a_,_=new y_(I,pe,ue,w,Oe,de,He),N=new S0(R),X=new C0(R),Z=new Om(I),ne=new x0(I,Z),j=new P0(I,Z,He,ne),we=new N0(I,j,Z,He),ve=new D0(I,Oe,_),ae=new b0(w),le=new r_(R,N,X,pe,Oe,ne,ae),Ie=new A_(R,w),Ae=new s_,Q=new d_(pe),Ee=new _0(R,N,X,ue,we,p,o),Pe=new v_(R,we,Oe),Se=new R_(I,He,Oe,ue),Ze=new y0(I,pe,He),U=new L0(I,pe,He),He.programs=le.programs,R.capabilities=Oe,R.extensions=pe,R.properties=w,R.renderLists=Ae,R.shadowMap=Pe,R.state=ue,R.info=He}ee(),v!==kt&&(P=new F0(v,e.width,e.height,r,a));let W=new w_(R,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(S){S!==void 0&&(Ue=S,this.setSize(oe,xe,!1))},this.getSize=function(S){return S.set(oe,xe)},this.setSize=function(S,D,V=!0){if(W.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=S,xe=D,e.width=Math.floor(S*Ue),e.height=Math.floor(D*Ue),V===!0&&(e.style.width=S+"px",e.style.height=D+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(oe*Ue,xe*Ue).floor()},this.setDrawingBufferSize=function(S,D,V){oe=S,xe=D,Ue=V,e.width=Math.floor(S*V),e.height=Math.floor(D*V),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(v===kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(K)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,D,V,z){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,D,V,z),ue.viewport(K.copy(q).multiplyScalar(Ue).round())},this.getScissor=function(S){return S.copy(he)},this.setScissor=function(S,D,V,z){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,D,V,z),ue.scissor(G.copy(he).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){ue.setScissorTest(ce=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,V=!0){let z=0;if(S){let O=!1;if(F!==null){let ie=F.texture.format;O=g.has(ie)}if(O){let ie=F.texture.type,fe=f.has(ie),ye=Ee.getClearColor(),_e=Ee.getClearAlpha(),Ve=ye.r,We=ye.g,ze=ye.b;fe?(m[0]=Ve,m[1]=We,m[2]=ze,m[3]=_e,I.clearBufferuiv(I.COLOR,0,m)):(M[0]=Ve,M[1]=We,M[2]=ze,M[3]=_e,I.clearBufferiv(I.COLOR,0,M))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),V&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Ee.dispose(),Ae.dispose(),Q.dispose(),w.dispose(),N.dispose(),X.dispose(),we.dispose(),ne.dispose(),Se.dispose(),le.dispose(),W.dispose(),W.removeEventListener("sessionstart",_l),W.removeEventListener("sessionend",xl),Zi.stop()};function Te(S){S.preventDefault(),Un("WebGLRenderer: Context Lost."),T=!0}function Fe(){Un("WebGLRenderer: Context Restored."),T=!1;let S=He.autoReset,D=Pe.enabled,V=Pe.autoUpdate,z=Pe.needsUpdate,O=Pe.type;ee(),He.autoReset=S,Pe.enabled=D,Pe.autoUpdate=V,Pe.needsUpdate=z,Pe.type=O}function bt(S){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){let D=S.target;D.removeEventListener("dispose",it),Si(D)}function Si(S){Ti(S),w.remove(S)}function Ti(S){let D=w.get(S).programs;D!==void 0&&(D.forEach(function(V){le.releaseProgram(V)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,V,z,O,ie){D===null&&(D=re);let fe=O.isMesh&&O.matrixWorld.determinant()<0,ye=Fu(S,D,V,z,O);ue.setMaterial(z,fe);let _e=V.index,Ve=1;if(z.wireframe===!0){if(_e=j.getWireframeAttribute(V),_e===void 0)return;Ve=2}let We=V.drawRange,ze=V.attributes.position,Qe=We.start*Ve,nt=(We.start+We.count)*Ve;ie!==null&&(Qe=Math.max(Qe,ie.start*Ve),nt=Math.min(nt,(ie.start+ie.count)*Ve)),_e!==null?(Qe=Math.max(Qe,0),nt=Math.min(nt,_e.count)):ze!=null&&(Qe=Math.max(Qe,0),nt=Math.min(nt,ze.count));let vt=nt-Qe;if(vt<0||vt===1/0)return;ne.setup(O,z,ye,V,_e);let dt,st=Ze;if(_e!==null&&(dt=Z.get(_e),st=U,st.setIndex(dt)),O.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*ge()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(O.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),ue.setLineWidth(Re*ge()),O.isLineSegments?st.setMode(I.LINES):O.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else O.isPoints?st.setMode(I.POINTS):O.isSprite&&st.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Aa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Re=O._multiDrawStarts,pt=O._multiDrawCounts,wi=O._multiDrawCount,$t=_e?Z.get(_e).bytesPerElement:1,fr=w.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<wi;Bt++)fr.setValue(I,"_gl_DrawID",Bt),st.render(Re[Bt]/$t,pt[Bt])}else if(O.isInstancedMesh)st.renderInstances(Qe,vt,O.count);else if(V.isInstancedBufferGeometry){let Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pt=Math.min(V.instanceCount,Re);st.renderInstances(Qe,vt,pt)}else st.render(Qe,vt)};function vl(S,D,V){S.transparent===!0&&S.side===ri&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,Ha(S,D,V),S.side=_i,S.needsUpdate=!0,Ha(S,D,V),S.side=ri):Ha(S,D,V)}this.compile=function(S,D,V=null){V===null&&(V=S),y=Q.get(V),y.init(D),E.push(y),V.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),S!==V&&S.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();let z=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){let ye=ie[fe];vl(ye,V,O),z.add(ye)}else vl(ie,V,O),z.add(ie)}),y=E.pop(),z},this.compileAsync=function(S,D,V=null){let z=this.compile(S,D,V);return new Promise(O=>{function ie(){if(z.forEach(function(fe){w.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){O(S);return}setTimeout(ie,10)}pe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Jn=null;function Ou(S){Jn&&Jn(S)}function _l(){Zi.stop()}function xl(){Zi.start()}let Zi=new xu;Zi.setAnimationLoop(Ou),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(S){Jn=S,W.setAnimationLoop(S),S===null?Zi.stop():Zi.start()},W.addEventListener("sessionstart",_l),W.addEventListener("sessionend",xl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let V=W.enabled===!0&&W.isPresenting===!0,z=P!==null&&(F===null||V)&&P.begin(R,F);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,F),y=Q.get(S,E.length),y.init(D),E.push(y),qe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Me.setFromProjectionMatrix(qe,si,D.reversedDepth),be=this.localClippingEnabled,De=ae.init(this.clippingPlanes,be),x=Ae.get(S,C.length),x.init(),C.push(x),W.enabled===!0&&W.isPresenting===!0){let ie=R.xr.getDepthSensingMesh();ie!==null&&$n(ie,D,-1/0,R.sortObjects)}$n(S,D,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(et,tt),te=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,te&&Ee.addToRenderList(x,S),this.info.render.frame++,De===!0&&ae.beginShadows();let O=y.state.shadowsArray;if(Pe.render(O,S,D),De===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&P.hasRenderPass())===!1){let ie=x.opaque,fe=x.transmissive;if(y.setupLights(),D.isArrayCamera){let ye=D.cameras;if(fe.length>0)for(let _e=0,Ve=ye.length;_e<Ve;_e++){let We=ye[_e];Ml(ie,fe,S,We)}te&&Ee.render(S);for(let _e=0,Ve=ye.length;_e<Ve;_e++){let We=ye[_e];yl(x,S,We,We.viewport)}}else fe.length>0&&Ml(ie,fe,S,D),te&&Ee.render(S),yl(x,S,D)}F!==null&&L===0&&(_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F)),z&&P.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),ne.resetDefaultState(),k=-1,B=null,E.pop(),E.length>0?(y=E[E.length-1],De===!0&&ae.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function $n(S,D,V,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Me.intersectsSprite(S)){z&&Y.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qe);let ie=we.update(S),fe=S.material;fe.visible&&x.push(S,ie,fe,V,Y.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Me.intersectsObject(S))){let ie=we.update(S),fe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Y.copy(S.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Y.copy(ie.boundingSphere.center)),Y.applyMatrix4(S.matrixWorld).applyMatrix4(qe)),Array.isArray(fe)){let ye=ie.groups;for(let _e=0,Ve=ye.length;_e<Ve;_e++){let We=ye[_e],ze=fe[We.materialIndex];ze&&ze.visible&&x.push(S,ie,ze,V,Y.z,We)}}else fe.visible&&x.push(S,ie,fe,V,Y.z,null)}}let O=S.children;for(let ie=0,fe=O.length;ie<fe;ie++)$n(O[ie],D,V,z)}function yl(S,D,V,z){let{opaque:O,transmissive:ie,transparent:fe}=S;y.setupLightsView(V),De===!0&&ae.setGlobalState(R.clippingPlanes,V),z&&ue.viewport(K.copy(z)),O.length>0&&Ga(O,D,V),ie.length>0&&Ga(ie,D,V),fe.length>0&&Ga(fe,D,V),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ml(S,D,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){let ze=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new vi(1,1,{generateMipmaps:!0,type:ze?Fi:kt,minFilter:fi,samples:Oe.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let O=y.state.transmissionRenderTarget[z.id],ie=z.viewport||K;O.setSize(ie.z*R.transmissionResolutionScale,ie.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),ye=R.getActiveCubeFace(),_e=R.getActiveMipmapLevel();R.setRenderTarget(O),R.getClearColor(J),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),te&&Ee.render(V);let Ve=R.toneMapping;R.toneMapping=gi;let We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),De===!0&&ae.setGlobalState(R.clippingPlanes,z),Ga(S,V,z),_.updateMultisampleRenderTarget(O),_.updateRenderTargetMipmap(O),pe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Qe=0,nt=D.length;Qe<nt;Qe++){let vt=D[Qe],{object:dt,geometry:st,material:Re,group:pt}=vt;if(Re.side===ri&&dt.layers.test(z.layers)){let wi=Re.side;Re.side=Ft,Re.needsUpdate=!0,bl(dt,V,z,st,Re,pt),Re.side=wi,Re.needsUpdate=!0,ze=!0}}ze===!0&&(_.updateMultisampleRenderTarget(O),_.updateRenderTargetMipmap(O))}R.setRenderTarget(fe,ye,_e),R.setClearColor(J,se),We!==void 0&&(z.viewport=We),R.toneMapping=Ve}function Ga(S,D,V){let z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ie=S.length;O<ie;O++){let fe=S[O],{object:ye,geometry:_e,group:Ve}=fe,We=fe.material;We.allowOverride===!0&&z!==null&&(We=z),ye.layers.test(V.layers)&&bl(ye,D,V,_e,We,Ve)}}function bl(S,D,V,z,O,ie){S.onBeforeRender(R,D,V,z,O,ie),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(R,D,V,z,S,ie),O.transparent===!0&&O.side===ri&&O.forceSinglePass===!1?(O.side=Ft,O.needsUpdate=!0,R.renderBufferDirect(V,D,z,O,S,ie),O.side=_i,O.needsUpdate=!0,R.renderBufferDirect(V,D,z,O,S,ie),O.side=ri):R.renderBufferDirect(V,D,z,O,S,ie),S.onAfterRender(R,D,V,z,O,ie)}function Ha(S,D,V){D.isScene!==!0&&(D=re);let z=w.get(S),O=y.state.lights,ie=y.state.shadowsArray,fe=O.state.version,ye=le.getParameters(S,O.state,ie,D,V),_e=le.getProgramCacheKey(ye),Ve=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?X:N).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",it),Ve=new Map,z.programs=Ve);let We=Ve.get(_e);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===fe)return Tl(S,ye),We}else ye.uniforms=le.getUniforms(S),S.onBeforeCompile(ye,R),We=le.acquireProgram(ye,_e),Ve.set(_e,We),z.uniforms=ye.uniforms;let ze=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=ae.uniform),Tl(S,ye),z.needsLights=zu(S),z.lightsStateVersion=fe,z.needsLights&&(ze.ambientLightColor.value=O.state.ambient,ze.lightProbe.value=O.state.probe,ze.directionalLights.value=O.state.directional,ze.directionalLightShadows.value=O.state.directionalShadow,ze.spotLights.value=O.state.spot,ze.spotLightShadows.value=O.state.spotShadow,ze.rectAreaLights.value=O.state.rectArea,ze.ltc_1.value=O.state.rectAreaLTC1,ze.ltc_2.value=O.state.rectAreaLTC2,ze.pointLights.value=O.state.point,ze.pointLightShadows.value=O.state.pointShadow,ze.hemisphereLights.value=O.state.hemi,ze.directionalShadowMap.value=O.state.directionalShadowMap,ze.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ze.spotShadowMap.value=O.state.spotShadowMap,ze.spotLightMatrix.value=O.state.spotLightMatrix,ze.spotLightMap.value=O.state.spotLightMap,ze.pointShadowMap.value=O.state.pointShadowMap,ze.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=We,z.uniformsList=null,We}function Sl(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=In.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Tl(S,D){let V=w.get(S);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Fu(S,D,V,z,O){D.isScene!==!0&&(D=re),_.resetTextureUnits();let ie=D.fog,fe=z.isMeshStandardMaterial?D.environment:null,ye=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Pt,_e=(z.isMeshStandardMaterial?X:N).get(z.envMap||fe),Ve=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,We=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ze=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color,vt=gi;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=R.toneMapping);let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=dt!==void 0?dt.length:0,Re=w.get(z),pt=y.state.lights;if(De===!0&&(be===!0||S!==B)){let Et=S===B&&z.id===k;ae.setState(z,S,Et)}let wi=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==pt.state.version||Re.outputColorSpace!==ye||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==_e||z.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ae.numPlanes||Re.numIntersection!==ae.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==We||Re.morphTargets!==ze||Re.morphNormals!==Qe||Re.morphColors!==nt||Re.toneMapping!==vt||Re.morphTargetsCount!==st)&&(wi=!0):(wi=!0,Re.__version=z.version);let $t=Re.currentProgram;wi===!0&&($t=Ha(z,D,O));let fr=!1,Bt=!1,sa=!1,ot=$t.getUniforms(),Ot=Re.uniforms;if(ue.useProgram($t.program)&&(fr=!0,Bt=!0,sa=!0),z.id!==k&&(k=z.id,Bt=!0),fr||B!==S){ue.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",S.projectionMatrix),ot.setValue(I,"viewMatrix",S.matrixWorldInverse);let Et=ot.map.cameraPosition;Et!==void 0&&Et.setValue(I,Je.setFromMatrixPosition(S.matrixWorld)),Oe.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Bt=!0,sa=!0)}if(Re.needsLights&&(pt.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",pt.state.directionalShadowMap,_),pt.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",pt.state.spotShadowMap,_),pt.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",pt.state.pointShadowMap,_)),O.isSkinnedMesh){ot.setOptional(I,O,"bindMatrix"),ot.setOptional(I,O,"bindMatrixInverse");let Et=O.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(I,"boneTexture",Et.boneTexture,_))}O.isBatchedMesh&&(ot.setOptional(I,O,"batchingTexture"),ot.setValue(I,"batchingTexture",O._matricesTexture,_),ot.setOptional(I,O,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",O._indirectTexture,_),ot.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",O._colorsTexture,_));let Ht=V.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&ve.update(O,V,$t),(Bt||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,ot.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ot.envMap.value=_e,Ot.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=I_()),Bt&&(ot.setValue(I,"toneMappingExposure",R.toneMappingExposure),Re.needsLights&&Bu(Ot,sa),ie&&z.fog===!0&&Ie.refreshFogUniforms(Ot,ie),Ie.refreshMaterialUniforms(Ot,z,Ue,xe,y.state.transmissionRenderTarget[S.id]),In.upload(I,Sl(Re),Ot,_)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(In.upload(I,Sl(Re),Ot,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(I,"center",O.center),ot.setValue(I,"modelViewMatrix",O.modelViewMatrix),ot.setValue(I,"normalMatrix",O.normalMatrix),ot.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Et=z.uniformsGroups;for(let Qt=0,Qn=Et.length;Qt<Qn;Qt++){let Ki=Et[Qt];Se.update(Ki,$t),Se.bind(Ki,$t)}}return $t}function Bu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function zu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,D,V){let z=w.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),w.get(S.texture).__webglTexture=D,w.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let V=w.get(S);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0};let Vu=I.createFramebuffer();this.setRenderTarget=function(S,D=0,V=0){F=S,b=D,L=V;let z=null,O=!1,ie=!1;if(S){let fe=w.get(S);if(fe.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),K.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest,ue.viewport(K),ue.scissor(G),ue.setScissorTest(H),k=-1;return}else if(fe.__webglFramebuffer===void 0)_.setupRenderTarget(S);else if(fe.__hasExternalTextures)_.rebindTextures(S,w.get(S.texture).__webglTexture,w.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ve=S.depthTexture;if(fe.__boundDepthTexture!==Ve){if(Ve!==null&&w.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(S)}}let ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ie=!0);let _e=w.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(_e[D])?z=_e[D][V]:z=_e[D],O=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?z=w.get(S).__webglMultisampledFramebuffer:Array.isArray(_e)?z=_e[V]:z=_e,K.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else K.copy(q).multiplyScalar(Ue).floor(),G.copy(he).multiplyScalar(Ue).floor(),H=ce;if(V!==0&&(z=Vu),ue.bindFramebuffer(I.FRAMEBUFFER,z)&&ue.drawBuffers(S,z),ue.viewport(K),ue.scissor(G),ue.setScissorTest(H),O){let fe=w.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,V)}else if(ie){let fe=D;for(let ye=0;ye<S.textures.length;ye++){let _e=w.get(S.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,_e.__webglTexture,V,fe)}}else if(S!==null&&V!==0){let fe=w.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,V)}k=-1},this.readRenderTargetPixels=function(S,D,V,z,O,ie,fe,ye=0){if(!(S&&S.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){ue.bindFramebuffer(I.FRAMEBUFFER,_e);try{let Ve=S.textures[ye],We=Ve.format,ze=Ve.type;if(!Oe.textureFormatReadable(We)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(ze)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&V>=0&&V<=S.height-O&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(D,V,z,O,de.convert(We),de.convert(ze),ie))}finally{let Ve=F!==null?w.get(F).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,D,V,z,O,ie,fe,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e)if(D>=0&&D<=S.width-z&&V>=0&&V<=S.height-O){ue.bindFramebuffer(I.FRAMEBUFFER,_e);let Ve=S.textures[ye],We=Ve.format,ze=Ve.type;if(!Oe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(D,V,z,O,de.convert(We),de.convert(ze),0);let nt=F!==null?w.get(F).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,nt);let vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sd(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Qe),I.deleteSync(vt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,V=0){let z=Math.pow(2,-V),O=Math.floor(S.image.width*z),ie=Math.floor(S.image.height*z),fe=D!==null?D.x:0,ye=D!==null?D.y:0;_.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,fe,ye,O,ie),ue.unbindTexture()};let ku=I.createFramebuffer(),Gu=I.createFramebuffer();this.copyTextureToTexture=function(S,D,V=null,z=null,O=0,ie=null){ie===null&&(O!==0?(Aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let fe,ye,_e,Ve,We,ze,Qe,nt,vt,dt=S.isCompressedTexture?S.mipmaps[ie]:S.image;if(V!==null)fe=V.max.x-V.min.x,ye=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Ve=V.min.x,We=V.min.y,ze=V.isBox3?V.min.z:0;else{let Ht=Math.pow(2,-O);fe=Math.floor(dt.width*Ht),ye=Math.floor(dt.height*Ht),S.isDataArrayTexture?_e=dt.depth:S.isData3DTexture?_e=Math.floor(dt.depth*Ht):_e=1,Ve=0,We=0,ze=0}z!==null?(Qe=z.x,nt=z.y,vt=z.z):(Qe=0,nt=0,vt=0);let st=de.convert(D.format),Re=de.convert(D.type),pt;D.isData3DTexture?(_.setTexture3D(D,0),pt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(_.setTexture2DArray(D,0),pt=I.TEXTURE_2D_ARRAY):(_.setTexture2D(D,0),pt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let wi=I.getParameter(I.UNPACK_ROW_LENGTH),$t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fr=I.getParameter(I.UNPACK_SKIP_PIXELS),Bt=I.getParameter(I.UNPACK_SKIP_ROWS),sa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze);let ot=S.isDataArrayTexture||S.isData3DTexture,Ot=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Ht=w.get(S),Et=w.get(D),Qt=w.get(Ht.__renderTarget),Qn=w.get(Et.__renderTarget);ue.bindFramebuffer(I.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ki=0;Ki<_e;Ki++)ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(S).__webglTexture,O,ze+Ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(D).__webglTexture,ie,vt+Ki)),I.blitFramebuffer(Ve,We,fe,ye,Qe,nt,fe,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||w.has(S)){let Ht=w.get(S),Et=w.get(D);ue.bindFramebuffer(I.READ_FRAMEBUFFER,ku),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gu);for(let Qt=0;Qt<_e;Qt++)ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,O,ze+Qt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,O),Ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,ie,vt+Qt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,ie),O!==0?I.blitFramebuffer(Ve,We,fe,ye,Qe,nt,fe,ye,I.COLOR_BUFFER_BIT,I.NEAREST):Ot?I.copyTexSubImage3D(pt,ie,Qe,nt,vt+Qt,Ve,We,fe,ye):I.copyTexSubImage2D(pt,ie,Qe,nt,Ve,We,fe,ye);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ot?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(pt,ie,Qe,nt,vt,fe,ye,_e,st,Re,dt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(pt,ie,Qe,nt,vt,fe,ye,_e,st,dt.data):I.texSubImage3D(pt,ie,Qe,nt,vt,fe,ye,_e,st,Re,dt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,Qe,nt,fe,ye,st,Re,dt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,Qe,nt,dt.width,dt.height,st,dt.data):I.texSubImage2D(I.TEXTURE_2D,ie,Qe,nt,fe,ye,st,Re,dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,wi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sa),ie===0&&D.generateMipmaps&&I.generateMipmap(pt),ue.unbindTexture()},this.initRenderTarget=function(S){w.get(S).__webglFramebuffer===void 0&&_.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){b=0,L=0,F=null,ue.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(t),e.unpackColorSpace=$e._getUnpackColorSpace()}};var P_=new Set([14000493,9593668,12094040,11302214,11041102,11960912,14925448,13743251,15849645,13804147,11697483,12293215,12158293,10779731,13937270,13080419,14859401,14793091,14332545,15982514,14992782,12490606]),L_=new Set([3317693,8115172,9791173,14864621,16774364,15058849,7384763,8895684,6330276,8699077]),U_=new Set([14400418,13350810,14466983,16049612,14203291,15785408]),D_=new Set([7122855,16115130,2663269]),Kn=class{constructor(e){this.owner=e,this.textures=new Set,this.maps=new Map,this.materials=new Map,this.disposed=!1,this.seed=919}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}texture(e){if(this.maps.has(e))return this.maps.get(e);let i=document.createElement("canvas");i.width=i.height=512;let r=i.getContext("2d");if(r.fillStyle="#fff",r.fillRect(0,0,512,512),e==="wood"){r.fillStyle="#fbe6bf",r.fillRect(0,0,512,512);for(let n=0;n<190;n++){let s=n*3;r.strokeStyle=n%7?"#89501820":"#88501a55",r.lineWidth=n%7?.6:1.2,r.beginPath();for(let o=0;o<=512;o+=8){let l=s+Math.sin(o/67+n*.7)*2.5+Math.sin(o/19+n)*.4;o?r.lineTo(o,l):r.moveTo(o,l)}r.stroke()}for(let[n,s]of[[130,180],[400,380]])for(let o=0;o<8;o++)r.strokeStyle="#a3672626",r.lineWidth=1,r.beginPath(),r.ellipse(n,s,8+o*6,1.5+o*.8,0,0,Math.PI*2),r.stroke()}else if(e==="cloth"){r.fillStyle="#faf7e9",r.fillRect(0,0,512,512);for(let n=0;n<512;n+=4)r.fillStyle=n%12?"#a38e6522":"#fff9",r.fillRect(n,0,1,512),r.fillRect(0,n,512,1);for(let n=0;n<512;n+=64)r.fillStyle="#789a7733",r.fillRect(n,0,32,512),r.fillRect(0,n,512,32)}else if(e==="fur"){r.fillStyle="#fff3d9",r.fillRect(0,0,512,512);for(let n=0;n<16e3;n++){let s=this.random()*512,o=this.random()*512;r.strokeStyle=n%2?"#9c75452b":"#fffdf7b0",r.lineWidth=.6,r.beginPath(),r.moveTo(s,o),r.quadraticCurveTo(s+2,o+4,s+this.random()*5-1,o+7+this.random()*8),r.stroke()}}else if(e==="grass"){r.fillStyle="#468b2a",r.fillRect(0,0,512,512);for(let n=0;n<13e3;n++){let s=this.random()*512,o=this.random()*512;r.strokeStyle=["#32712170","#83bd4b80","#acd56665","#2d6c2450"][n%4],r.lineWidth=.5+this.random(),r.beginPath(),r.moveTo(s,o),r.lineTo(s+this.random()*5-2,o-3-this.random()*9),r.stroke()}}else if(e==="soil"){r.fillStyle="#654326",r.fillRect(0,0,512,512);for(let n=0;n<9500;n++)r.fillStyle=["#9f744b","#4a3321","#bd9465","#765534"][n%4],r.beginPath(),r.ellipse(this.random()*512,this.random()*512,1+this.random()*4,1+this.random()*2,this.random()*6,0,7),r.fill()}else if(e==="tile"){r.fillStyle="#fff1cf",r.fillRect(0,0,512,512);for(let n=0;n<4;n++)for(let s=0;s<4;s++)r.fillStyle=(n+s)%2?"#57b4b0":"#fff1cf",r.fillRect(n*128+2,s*128+2,124,124),r.strokeStyle="#b3a47e",r.lineWidth=2,r.strokeRect(n*128+2,s*128+2,124,124)}else for(let n=0;n<6500;n++)r.fillStyle=n%2?"#9b68331a":"#fff9",r.fillRect(this.random()*512,this.random()*512,1,1);let a=new Xn(i);return a.colorSpace=ut,a.wrapS=a.wrapT=Oi,a.anisotropy=Math.min(8,this.owner.renderer.capabilities.getMaxAnisotropy()),this.maps.set(e,a),this.textures.add(a),a}material(e,i=.58,r){r=r||(P_.has(e)?"wood":L_.has(e)?"glaze":U_.has(e)?"fur":D_.has(e)?"cloth":e===6834738||e===6835509?"soil":"paint");let a=r+e+i;if(this.materials.has(a))return this.materials.get(a);let n={color:e,roughness:r==="glaze"?.18:r==="paint"?.36:r==="fur"?.94:r==="cloth"?.9:i,metalness:0};["wood","fur","cloth","soil"].includes(r)&&(n.map=this.texture(r),n.bumpMap=n.map,n.bumpScale=r==="fur"?.023:r==="wood"?.018:.012),(r==="glaze"||r==="paint")&&Object.assign(n,{clearcoat:r==="glaze"?.8:.4,clearcoatRoughness:.22});let s=new Nt(n);return this.materials.set(a,s),s}environment(){let e=new Hn;e.background=new Le(11983338);let i=new Kt(10,7),r=[];for(let[n,s,o]of[[[-5,5,2],16774871,4],[[5,3,1],14284031,2],[[0,6,-4],16777215,2]]){let l=new Gt({color:new Le(s).multiplyScalar(o)});r.push(l);let h=new _t(i,l);h.position.set(...n),h.lookAt(0,0,0),e.add(h)}let a=new Bn(this.owner.renderer);this.environmentTarget=a.fromScene(e,.08,.1,30,{size:128}),this.owner.scene.environment=this.environmentTarget.texture,this.owner.scene.environmentIntensity=.38,a.dispose(),i.dispose(),r.forEach(n=>n.dispose())}backdrop(e=this.owner.scene,i=0,r=4.9,a=-7.5,n=25,s=15){let o=new Gt({color:16777215,toneMapped:!1}),l=new _t(new Kt(n,s),o);l.position.set(i,r,a),e.add(l);let h=new jn().load(new URL("assets/forest-backdrop-v14.png",document.baseURI).href,()=>{this.disposed||this.owner.render()});return h.colorSpace=ut,o.map=h,this.textures.add(h),l}ground(){let e=this.texture("grass");e.repeat.set(5,4);let i=new _t(new Kt(22,17),new hi({map:e,color:11784056,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=-.125,i.receiveShadow=!0,this.owner.scene.add(i)}flower(e,i,r,a,n=.18,s=16774357){let o=this.owner,l=new gt;l.position.set(i,r,a),l.scale.setScalar(n),e.add(l);let h=new Zr(new $r(1,12,8),this.material(s,.48),7),c=new lt;for(let u=0;u<7;u++){let d=u*Math.PI*2/7;c.position.set(Math.sin(d)*.48,Math.cos(d)*.48,0),c.scale.set(.17,.33,.065),c.rotation.z=-d,c.updateMatrix(),h.setMatrixAt(u,c.matrix)}return l.add(h),o.orb(l,16039992,0,0,.06,.23,.23,.08),l}specks(e,i,r,a=16638389,n=1){let s=new $r(1,7,5),o=this.material(a,.85,"paint"),l=new Zr(s,o,i),h=new lt;for(let c=0;c<i;c++){let u=c*2.39996+n,d=1-2*(c+.5)/i,p=Math.sqrt(1-d*d);h.position.set(Math.cos(u)*p*r[0],d*r[1],Math.sin(u)*p*r[2]),h.scale.set(.012,.019,.008),h.lookAt(0,0,0),h.updateMatrix(),l.setMatrixAt(c,h.matrix)}return e.add(l),l}fur(e,i,r,a,n,s=520){let o=new Na(.007,.036,3),l=this.material(14926749,.98,"fur"),h=new Zr(o,l,s),c=new lt;for(let u=0;u<s;u++){let d=1-2*(u+.5)/s,p=u*2.39996,v=Math.sqrt(1-d*d),g=Math.sin(p)*v,f=Math.cos(p)*v,m=g>.5&&d<.45&&d>-.75;c.position.set(i+f*n[0],r+d*n[1],a+g*n[2]),c.scale.setScalar(m?0:1),c.quaternion.setFromUnitVectors(new A(0,1,0),new A(f,d,g).normalize()),c.updateMatrix(),h.setMatrixAt(u,c.matrix)}h.castShadow=!1,e.add(h)}leaf(e,i,r,a,n=.3,s=0){let o=this.owner,l=o.orb(e,3906361,i,r,a,n,n*.35,n*.3);l.rotation.z=s;let h=o.curve(e,10865235,[[i-n*.75,r,a+n*.25],[i,r,a+n*.32],[i+n*.75,r,a+n*.25]],.008);return h.rotation.z=s,h.castShadow=!1,l}decorateCafe(){let e=this.owner;for(let a of[-6.2,-1.65,1.7,6.2])e.box(e.scene,9593668,a,3.2,-4.4,.17,6.5,.25);let i=e.mesh(new Kt(3.6,1.2),new hi({map:this.texture("tile"),roughness:.24}),e.scene,3.8,1.95,-4.42);for(let a=0;a<3;a++){let n=2.7+a*.85,s=e.orb(e.scene,new Nt({color:[16757540,15426891,8828985][a],roughness:.12,clearcoat:.9}),n,3.35,-3.68,.19,.22,.2);s.castShadow=!1,e.box(e.scene,16774364,n,3.35,-3.45,.26,.18,.025)}for(let a of[-5.57,-2.03])e.mesh(new Kt(.38,3.5),this.material(15312746,.95,"cloth"),e.scene,a,3.85,-3.25);let r=e.mesh(new Kt(1.7,1.05),this.material(15895683,.9,"cloth"),e.scene,-.6,1.4,2.22);r.rotation.x=-Math.PI/2;for(let a of[-3.8,3.5]){let n=new gt;n.position.set(a,1.39,1.8),e.scene.add(n),e.cyl(n,12090709,0,.14,0,.2,.16,.28);for(let s=0;s<3;s++){let o=s*2.1;e.curve(n,5213239,[[0,.25,0],[Math.cos(o)*.1,.55,0]],.015),this.flower(n,Math.cos(o)*.12,.6+s*.05,.02,.11)}}for(let[a,n]of Object.entries(e.foods))n.traverse(s=>{if(s.isMesh&&s.material.color){let o=s.material.color.getHex();[15224117,15818562].includes(o)&&(s.material=this.material(14492965,.24,"glaze")),o===11913285&&(s.material=this.material(11453224,.27,"glaze"))}}),a==="apple"&&this.specks(n,100,[.42,.34,.32],16760169);for(let a=0;a<6;a++){let n=a*Math.PI/3,s=this.flower(e.bowl,Math.sin(n)*.84,.36,Math.cos(n)*.84,.12);s.rotation.y=n}e.torus(e.bowl,16439177,0,.69,0,.92,.025),e.torus(e.sink,12973551,0,.18,0,.95,.035),this.rabbitDetails()}rabbitDetails(){let e=this.owner,i=e.head;if(i){i.scale.setScalar(1.08),this.fur(i,0,0,0,[.79,.73,.62],800),e.ears.forEach(r=>this.fur(r,0,.5,0,[.235,.78,.235],230)),e.eyes.forEach(r=>{r.material=new Nt({color:4727830,roughness:.055,clearcoat:1,clearcoatRoughness:.07})});for(let r of[-1,1]){for(let a=0;a<3;a++){let n=e.curve(i,16772555,[[r*.38,-.24+a*.045,.72],[r*.64,-.21+a*.07,.75],[r*.85,-.25+a*.13,.67]],.007);n.castShadow=!1}e.orb(i,16767412,r*.28,-.32,.73,.1,.08,.06),e.orb(e.rabbitRoot,15844183,r*.35,2.48,.58,.065)}for(let r=0;r<9;r++)e.box(e.rabbitRoot,16773827,-.25+r*.06,1.8,.72,.025,.018,.018,.002);this.flower(e.rabbitRoot,.02,2,.735,.12),e.box(e.rabbitRoot,16772297,0,2.57,.63,.72,.08,.07)}}houseDetails(e,i){let r=this.owner,a=[14569776,2591942,15449638];for(let o of[-.93,.93])r.box(e,16639160,o,1.12,.83,.12,2,.1);for(let o of[-.65,.65]){r.box(e,4959435,o,1.38,.85,.32,.4,.05),r.box(e,16770994,o,1.38,.9,.035,.43,.03),r.box(e,16770994,o,1.38,.9,.35,.035,.03),r.box(e,11040067,o,1.06,.98,.48,.16,.24);for(let l=0;l<3;l++)this.flower(e,o-.14+l*.14,1.17,.99,.07,[16772026,16416172,16763207][(i+l)%3])}for(let o=0;o<4;o++)r.box(e,10709810,-.3+o*.2,.83,.902,.012,1.3,.01,.003);let n=new Jr;n.moveTo(-1.28,0),n.lineTo(0,1.06),n.lineTo(1.28,0),n.closePath();let s=new Fa(n,{depth:2.05,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2});s.translate(0,0,-1.025),r.mesh(s,this.material(a[i],.45,"paint"),e,0,2.2,0);for(let o of[-1,1])for(let l=0;l<4;l++)for(let h=0;h<5;h++){let c=o*(.16+l*.32),u=3.26-Math.abs(c)*.82,d=-.86+h*.43,p=r.mesh(new Kr(.19,.19,.43,10,1,!0,0,Math.PI),this.material(a[i],.4,"paint"),e,c,u,d);p.rotation.set(Math.PI/2,0,o*.68),p.castShadow=!1}r.torus(e,16508599,0,2.57,1.08,.19,.045).rotation.x=0,r.orb(e,4956078,0,2.57,1.07,.16,.16,.035)}parcelDetails(){let e=this.owner;for(let i of[-.85,.85])for(let r of[-.5,.5]){let a=i<0?-1:1,n=e.cyl(e.cart,12949073,i+a*.09,-.23,r,.12,.12,.05);n.rotation.z=Math.PI/2,e.torus(e.cart,14727798,i+a*.09,-.23,r,.21,.025).rotation.set(0,Math.PI/2,0);for(let o=0;o<6;o++){let l=o*Math.PI/3;e.curve(e.cart,10317885,[[i+a*.1,-.23,r],[i+a*.1,-.23+Math.sin(l)*.19,r+Math.cos(l)*.19]],.015)}}}gardenDetails(){let e=this.owner;for(let r=0;r<3;r++){let a=e.homes["pot"+r];for(let n=0;n<20;n++){let s=n*Math.PI/10,o=e.orb(a,16176029,Math.sin(s)*.66,.72,Math.cos(s)*.66,.025);o.castShadow=!1}e.torus(a,11889467,0,.06,0,.54,.035)}let i=e.basket;for(let r=0;r<30;r++){let a=r*Math.PI/15;e.curve(i,10249262,[[Math.sin(a)*.63,-.17,Math.cos(a)*.63],[Math.sin(a)*.72,0,Math.cos(a)*.72],[Math.sin(a)*.78,.18,Math.cos(a)*.78]],.013)}this.flower(e.can,0,-.03,.37,.13),e.torus(e.can,16177795,0,-.3,0,.39,.015)}dispose(){this.disposed=!0,this.environmentTarget?.dispose()}};function Eu(t,e){if(e===oc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===La||e===kn){let i=t.getIndex();if(i===null){let s=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);t.setIndex(s),i=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let r=i.count-2,a=[];if(e===La)for(let s=1;s<=r;s++)a.push(i.getX(0)),a.push(i.getX(s)),a.push(i.getX(s+1));else for(let s=0;s<r;s++)s%2===0?(a.push(i.getX(s)),a.push(i.getX(s+1)),a.push(i.getX(s+2))):(a.push(i.getX(s+2)),a.push(i.getX(s+1)),a.push(i.getX(s)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=t.clone();return n.setIndex(a),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}var Pu=class extends pr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new z_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new Q_(e)})}load(t,e,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=ia.extractUrlBase(t);n=ia.resolveURL(l,this.path)}else n=ia.extractUrlBase(t);this.manager.itemStart(t);let s=function(l){r?r(l):console.error(l),a.manager.itemError(t),a.manager.itemEnd(t)},o=new ol(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{a.parse(l,n,function(h){e(h),a.manager.itemEnd(t)},s)}catch(h){s(h)}},i,s)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,r){let a,n={},s={},o=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(o.decode(new Uint8Array(t,0,4))===Lu){try{n[Ke.KHR_BINARY_GLTF]=new ex(t)}catch(h){r&&r(h);return}a=JSON.parse(n[Ke.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new px(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[c.name]=c,n[c.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let c=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(c){case Ke.KHR_MATERIALS_UNLIT:n[c]=new F_;break;case Ke.KHR_DRACO_MESH_COMPRESSION:n[c]=new tx(a,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:n[c]=new ix;break;case Ke.KHR_MESH_QUANTIZATION:n[c]=new rx;break;default:u.indexOf(c)>=0&&s[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(n),l.setPlugins(s),l.parse(i,r)}parseAsync(t,e){let i=this;return new Promise(function(r,a){i.parse(t,e,r,a)})}};function N_(){let t={};return{get:function(e){return t[e]},add:function(e,i){t[e]=i},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},O_=class{constructor(t){this.parser=t,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,r=e.length;i<r;i++){let a=e[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,r=e.cache.get(i);if(r)return r;let a=e.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t],s,o=new Le(16777215);n.color!==void 0&&o.setRGB(n.color[0],n.color[1],n.color[2],Pt);let l=n.range!==void 0?n.range:0;switch(n.type){case"directional":s=new za(o),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new gu(o),s.distance=l;break;case"spot":s=new fu(o),s.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle!==void 0?n.spot.innerConeAngle:0,n.spot.outerConeAngle=n.spot.outerConeAngle!==void 0?n.spot.outerConeAngle:Math.PI/4,s.angle=n.spot.outerConeAngle,s.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return s.position.set(0,0,0),bi(s,n),n.intensity!==void 0&&(s.intensity=n.intensity),s.name=e.createUniqueName(n.name||"light_"+t),r=Promise.resolve(s),e.cache.add(i,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,r=i.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(e.cache,a,n)})}},F_=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(t,e,i){let r=[];t.color=new Le(1,1,1),t.opacity=1;let a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;t.color.setRGB(n[0],n[1],n[2],Pt),t.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(t,"map",a.baseColorTexture,ut))}return Promise.all(r)}},B_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},z_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $(s,s)}return Promise.all(a)}},V_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},k_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}},G_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];e.sheenColor=new Le(0,0,0),e.sheenRoughness=0,e.sheen=1;let n=r.extensions[this.name];if(n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],Pt)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(i.assignTexture(e,"sheenColorMap",n.sheenColorTexture,ut)),n.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},H_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&a.push(i.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(a)}},W_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&a.push(i.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return e.attenuationColor=new Le().setRGB(s[0],s[1],s[2],Pt),Promise.all(a)}},X_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},j_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&a.push(i.assignTexture(e,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return e.specularColor=new Le().setRGB(s[0],s[1],s[2],Pt),n.specularColorTexture!==void 0&&a.push(i.assignTexture(e,"specularColorMap",n.specularColorTexture,ut)),Promise.all(a)}},q_=class{constructor(t){this.parser=t,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&a.push(i.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(a)}},Y_=class{constructor(t){this.parser=t,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let e=this.parser.json.materials[t];return!e.extensions||!e.extensions[this.name]?null:Nt}extendMaterialParams(t,e){let i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&a.push(i.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(a)}},Z_=class{constructor(t){this.parser=t,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,r=i.textures[t];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=e.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,n)}},K_=class{constructor(t){this.parser=t,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[e])return null;let n=a.extensions[e],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(t,n.source,o)}},J_=class{constructor(t){this.parser=t,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[e])return null;let n=a.extensions[e],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(t,n.source,o)}},$_=class{constructor(t){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){let o=r.byteOffset||0,l=r.byteLength||0,h=r.count,c=r.byteStride,u=new Uint8Array(s,o,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(h,c,u,r.mode,r.filter).then(function(d){return d.buffer}):n.ready.then(function(){let d=new ArrayBuffer(h*c);return n.decodeGltfBuffer(new Uint8Array(d),h,c,u,r.mode,r.filter),d})})}else return null}},Q_=class{constructor(t){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=e.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==Jt.TRIANGLES&&o.mode!==Jt.TRIANGLE_STRIP&&o.mode!==Jt.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let o in a)n.push(this.parser.getDependency("accessor",a[o]).then(l=>(s[o]=l,s[o])));return n.length<1?null:(n.push(this.parser.createNodeMesh(t)),Promise.all(n).then(o=>{let l=o.pop(),h=l.isGroup?l.children:[l],c=o[0].count,u=[];for(let d of h){let p=new ke,v=new A,g=new oi,f=new A(1,1,1),m=new Zr(d.geometry,d.material,c);for(let M=0;M<c;M++)s.TRANSLATION&&v.fromBufferAttribute(s.TRANSLATION,M),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,M),s.SCALE&&f.fromBufferAttribute(s.SCALE,M),m.setMatrixAt(M,p.compose(v,g,f));for(let M in s)if(M==="_COLOR_0"){let x=s[M];m.instanceColor=new Dn(x.array,x.itemSize,x.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&d.geometry.setAttribute(M,s[M]);lt.prototype.copy.call(m,d),this.parser.assignFinalMaterial(m),u.push(m)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]}))}},Lu="glTF",Va=12,Au={JSON:1313821514,BIN:5130562},ex=class{constructor(t){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Va),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Va,a=new DataView(t,Va),n=0;for(;n<r;){let s=a.getUint32(n,!0);n+=4;let o=a.getUint32(n,!0);if(n+=4,o===Au.JSON){let l=new Uint8Array(t,Va+n,s);this.content=i.decode(l)}else if(o===Au.BIN){let l=Va+n;this.body=t.slice(l,l+s)}n+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tx=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,r=this.dracoLoader,a=t.extensions[this.name].bufferView,n=t.extensions[this.name].attributes,s={},o={},l={};for(let h in n){let c=ml[h]||h.toLowerCase();s[c]=n[h]}for(let h in t.attributes){let c=ml[h]||h.toLowerCase();if(n[h]!==void 0){let u=i.accessors[t.attributes[h]],d=aa[u.componentType];l[c]=d.name,o[c]=u.normalized===!0}}return e.getDependency("bufferView",a).then(function(h){return new Promise(function(c,u){r.decodeDracoFile(h,function(d){for(let p in d.attributes){let v=d.attributes[p],g=o[p];g!==void 0&&(v.normalized=g)}c(d)},s,l,Pt,u)})})}},ix=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},rx=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Uu=class extends Qr{constructor(t,e,i,r){super(t,e,i,r)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r*3+r;for(let n=0;n!==r;n++)e[n]=i[a+n];return e}interpolate_(t,e,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,h=r-e,c=(i-e)/h,u=c*c,d=u*c,p=t*l,v=p-l,g=-2*d+3*u,f=d-u,m=1-g,M=f-u+c;for(let x=0;x!==s;x++){let y=n[v+x+s],C=n[v+x+o]*h,E=n[p+x+s],P=n[p+x]*h;a[x]=m*y+M*C+g*E+f*P}return a}},ax=new oi,nx=class extends Uu{interpolate_(t,e,i,r){let a=super.interpolate_(t,e,i,r);return ax.fromArray(a).normalize().toArray(a),a}},Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ru={9728:yt,9729:Mt,9984:Fo,9985:xa,9986:Nr,9987:fi},Cu={33071:ni,33648:Sa,10497:Oi},ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sx={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Gr},dl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ox(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new hi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),t.DefaultMaterial}function mr(t,e,i){for(let r in i.extensions)t[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=i.extensions[r])}function bi(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lx(t,e,i){let r=!1,a=!1,n=!1;for(let h=0,c=e.length;h<c;h++){let u=e[h];if(u.POSITION!==void 0&&(r=!0),u.NORMAL!==void 0&&(a=!0),u.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(t);let s=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){let u=e[h];if(r){let d=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):t.attributes.position;s.push(d)}if(a){let d=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):t.attributes.normal;o.push(d)}if(n){let d=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):t.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],u=h[1],d=h[2];return r&&(t.morphAttributes.position=c),a&&(t.morphAttributes.normal=u),n&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function hx(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let i=0,r=e.weights.length;i<r;i++)t.morphTargetInfluences[i]=e.weights[i];if(e.extras&&Array.isArray(e.extras.targetNames)){let i=e.extras.targetNames;if(t.morphTargetInfluences.length===i.length){t.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)t.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cx(t){let e,i=t.extensions&&t.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(i?e="draco:"+i.bufferView+":"+i.indices+":"+pl(i.attributes):e=t.indices+":"+pl(t.attributes)+":"+t.mode,t.targets!==void 0)for(let r=0,a=t.targets.length;r<a;r++)e+=":"+pl(t.targets[r]);return e}function pl(t){let e="",i=Object.keys(t).sort();for(let r=0,a=i.length;r<a;r++)e+=i[r]+":"+t[i[r]]+";";return e}function fl(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ux(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dx=new ke,px=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new N_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,n=-1;if(typeof navigator<"u"){let s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;let o=s.match(/Version\/(\d+)/);r=i&&o?parseInt(o[1],10):-1,a=s.indexOf("Firefox")>-1,n=a?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&n<98?this.textureLoader=new jn(this.options.manager):this.textureLoader=new vu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ol(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let s={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return mr(a,s,r),bi(s,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(s)})).then(function(){for(let o of s.scenes)o.updateMatrixWorld();t(s)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=e.length;r<a;r++){let n=e[r].joints;for(let s=0,o=n.length;s<o;s++)t[n[s]].isBone=!0}for(let r=0,a=t.length;r<a;r++){let n=t[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let r=i.clone(),a=(n,s)=>{let o=this.associations.get(n);o!=null&&this.associations.set(s,o);for(let[l,h]of n.children.entries())a(h,s.children[l])};return a(i,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let r=t(e[i]);if(r)return r}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let r=0;r<e.length;r++){let a=t(e[r]);a&&i.push(a)}return i}getDependency(t,e){let i=t+":"+e,r=this.cache.get(i);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(i,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(a,n){return i.getDependency(t,n)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(ia.resolveURL(e.uri,r.path),a,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let r=e.byteLength||0,a=e.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(t){let e=this,i=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){let n=ul[r.type],s=aa[r.componentType],o=r.normalized===!0,l=new s(r.count*n);return Promise.resolve(new It(l,n,o))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let s=n[0],o=ul[r.type],l=aa[r.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,u=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0,v,g;if(d&&d!==c){let f=Math.floor(u/d),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,M=e.cache.get(m);M||(v=new l(s,f*d,r.count*d/h),M=new Ec(v,d/h),e.cache.add(m,M)),g=new Ac(M,o,u%d/h,p)}else s===null?v=new l(r.count*o):v=new l(s,u,r.count*o),g=new It(v,o,p);if(r.sparse!==void 0){let f=ul.SCALAR,m=aa[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,y=new m(n[1],M,r.sparse.count*f),C=new l(n[2],x,r.sparse.count*o);s!==null&&(g=new It(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=y.length;E<P;E++){let R=y[E];if(g.setX(R,C[E*o]),o>=2&&g.setY(R,C[E*o+1]),o>=3&&g.setZ(R,C[E*o+2]),o>=4&&g.setW(R,C[E*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){let e=this.json,i=this.options,r=e.textures[t].source,a=e.images[r],n=this.textureLoader;if(a.uri){let s=i.manager.getHandler(a.uri);s!==null&&(n=s)}return this.loadTextureImage(t,r,n)}loadTextureImage(t,e,i){let r=this,a=this.json,n=a.textures[t],s=a.images[e],o=(s.uri||s.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=n.name||s.name||"",h.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(h.name=s.uri);let c=(a.samplers||{})[n.sampler]||{};return h.magFilter=Ru[c.magFilter]||Mt,h.minFilter=Ru[c.minFilter]||fi,h.wrapS=Cu[c.wrapS]||Oi,h.wrapT=Cu[c.wrapT]||Oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==yt&&h.minFilter!==Mt,r.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(t,e){let i=this,r=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(c=>c.clone());let n=r.images[t],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(c){l=!0;let u=new Blob([c],{type:n.mimeType});return o=s.createObjectURL(u),o});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(c){return new Promise(function(u,d){let p=u;e.isImageBitmapLoader===!0&&(p=function(v){let g=new Lt(v);g.needsUpdate=!0,u(g)}),e.load(ia.resolveURL(c,a.path),p,void 0,d)})}).then(function(c){return l===!0&&s.revokeObjectURL(o),bi(c,n),c.userData.mimeType=n.mimeType||ux(n.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[t]=h,h}assignTexture(t,e,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let s=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(s){let o=a.associations.get(n);n=a.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),a.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),t[e]=n,n})}assignFinalMaterial(t){let e=t.geometry,i=t.material,r=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,n=e.attributes.normal===void 0;if(t.isPoints){let s="PointsMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new el,li.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(s,o)),i=o}else if(t.isLine){let s="LineBasicMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new Qo,li.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(s,o)),i=o}if(r||a||n){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),n&&(s+="flat-shading:");let o=this.cache.get(s);o||(o=i.clone(),a&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(s,o),this.associations.set(o,this.associations.get(i))),i=o}t.material=i}getMaterialType(){return hi}loadMaterial(t){let e=this,i=this.json,r=this.extensions,a=i.materials[t],n,s={},o=a.extensions||{},l=[];if(o[Ke.KHR_MATERIALS_UNLIT]){let c=r[Ke.KHR_MATERIALS_UNLIT];n=c.getMaterialType(),l.push(c.extendParams(s,a,e))}else{let c=a.pbrMetallicRoughness||{};if(s.color=new Le(1,1,1),s.opacity=1,Array.isArray(c.baseColorFactor)){let u=c.baseColorFactor;s.color.setRGB(u[0],u[1],u[2],Pt),s.opacity=u[3]}c.baseColorTexture!==void 0&&l.push(e.assignTexture(s,"map",c.baseColorTexture,ut)),s.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,s.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(s,"metalnessMap",c.metallicRoughnessTexture)),l.push(e.assignTexture(s,"roughnessMap",c.metallicRoughnessTexture))),n=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,s)})))}a.doubleSided===!0&&(s.side=ri);let h=a.alphaMode||dl.OPAQUE;if(h===dl.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,h===dl.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&n!==Gt&&(l.push(e.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new $(1,1),a.normalTexture.scale!==void 0)){let c=a.normalTexture.scale;s.normalScale.set(c,c)}if(a.occlusionTexture!==void 0&&n!==Gt&&(l.push(e.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==Gt){let c=a.emissiveFactor;s.emissive=new Le().setRGB(c[0],c[1],c[2],Pt)}return a.emissiveTexture!==void 0&&n!==Gt&&l.push(e.assignTexture(s,"emissiveMap",a.emissiveTexture,ut)),Promise.all(l).then(function(){let c=new n(s);return a.name&&(c.name=a.name),bi(c,a),e.associations.set(c,{materials:t}),a.extensions&&mr(r,c,a),c})}createUniqueName(t){let e=ct.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,e).then(function(o){return Iu(o,s,e)})}let n=[];for(let s=0,o=t.length;s<o;s++){let l=t[s],h=cx(l),c=r[h];if(c)n.push(c.promise);else{let u;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=a(l):u=Iu(new ht,l,e),r[h]={primitive:l,promise:u},n.push(u)}}return Promise.all(n)}loadMesh(t){let e=this,i=this.json,r=this.extensions,a=i.meshes[t],n=a.primitives,s=[];for(let o=0,l=n.length;o<l;o++){let h=n[o].material===void 0?ox(this.cache):this.getDependency("material",n[o].material);s.push(h)}return s.push(e.loadGeometries(n)),Promise.all(s).then(function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let d=0,p=h.length;d<p;d++){let v=h[d],g=n[d],f,m=l[d];if(g.mode===Jt.TRIANGLES||g.mode===Jt.TRIANGLE_STRIP||g.mode===Jt.TRIANGLE_FAN||g.mode===void 0)f=a.isSkinnedMesh===!0?new Cc(v,m):new _t(v,m),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Jt.TRIANGLE_STRIP?f.geometry=Eu(f.geometry,kn):g.mode===Jt.TRIANGLE_FAN&&(f.geometry=Eu(f.geometry,La));else if(g.mode===Jt.LINES)f=new Uc(v,m);else if(g.mode===Jt.LINE_STRIP)f=new Wn(v,m);else if(g.mode===Jt.LINE_LOOP)f=new Dc(v,m);else if(g.mode===Jt.POINTS)f=new Nc(v,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&hx(f,a),f.name=e.createUniqueName(a.name||"mesh_"+t),bi(f,a),g.extensions&&mr(r,f,g),e.assignFinalMaterial(f),c.push(f)}for(let d=0,p=c.length;d<p;d++)e.associations.set(c[d],{meshes:t,primitives:d});if(c.length===1)return a.extensions&&mr(r,c[0],a),c[0];let u=new gt;a.extensions&&mr(r,u,a),e.associations.set(u,{meshes:t});for(let d=0,p=c.length;d<p;d++)u.add(c[d]);return u})}loadCamera(t){let e,i=this.json.cameras[t],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new At(ur.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(e=new Ba(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),bi(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let r=0,a=e.joints.length;r<a;r++)i.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),n=r,s=[],o=[];for(let l=0,h=n.length;l<h;l++){let c=n[l];if(c){s.push(c);let u=new ke;a!==null&&u.fromArray(a.array,l*16),o.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ic(s,o)})}loadAnimation(t){let e=this.json,i=this,r=e.animations[t],a=r.name?r.name:"animation_"+t,n=[],s=[],o=[],l=[],h=[];for(let c=0,u=r.channels.length;c<u;c++){let d=r.channels[c],p=r.samplers[d.sampler],v=d.target,g=v.node,f=r.parameters!==void 0?r.parameters[p.input]:p.input,m=r.parameters!==void 0?r.parameters[p.output]:p.output;v.node!==void 0&&(n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",m)),l.push(p),h.push(v))}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(c){let u=c[0],d=c[1],p=c[2],v=c[3],g=c[4],f=[];for(let M=0,x=u.length;M<x;M++){let y=u[M],C=d[M],E=p[M],P=v[M],R=g[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let T=i._createAnimationTracks(y,C,E,P,R);if(T)for(let b=0;b<T.length;b++)f.push(T[b])}let m=new pu(a,void 0,f);return bi(m,r),m})}createNodeMesh(t){let e=this.json,i=this,r=e.nodes[t];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(s){if(s.isMesh)for(let o=0,l=r.weights.length;o<l;o++)s.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(t){let e=this.json,i=this,r=e.nodes[t],a=i._loadNodeShallow(t),n=[],s=r.children||[];for(let l=0,h=s.length;l<h;l++)n.push(i.getDependency("node",s[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),o]).then(function(l){let h=l[0],c=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,dx)});for(let d=0,p=c.length;d<p;d++)h.add(c[d]);return h})}_loadNodeShallow(t){let e=this.json,i=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let a=e.nodes[t],n=a.name?r.createUniqueName(a.name):"",s=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return o&&s.push(o),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){s.push(l)}),this.nodeCache[t]=Promise.all(s).then(function(l){let h;if(a.isBone===!0?h=new Jo:l.length>1?h=new gt:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let c=0,u=l.length;c<u;c++)h.add(l[c]);if(a.name&&(h.userData.name=a.name,h.name=n),bi(h,a),a.extensions&&mr(i,h,a),a.matrix!==void 0){let c=new ke;c.fromArray(a.matrix),h.applyMatrix4(c)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){let c=r.associations.get(h);r.associations.set(h,{...c})}return r.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],r=this,a=new gt;i.name&&(a.name=r.createUniqueName(i.name)),bi(a,i),i.extensions&&mr(e,a,i);let n=i.nodes||[],s=[];for(let o=0,l=n.length;o<l;o++)s.push(r.getDependency("node",n[o]));return Promise.all(s).then(function(o){for(let h=0,c=o.length;h<c;h++)a.add(o[h]);let l=h=>{let c=new Map;for(let[u,d]of r.associations)(u instanceof li||u instanceof Lt)&&c.set(u,d);return h.traverse(u=>{let d=r.associations.get(u);d!=null&&c.set(u,d)}),c};return r.associations=l(a),a})}_createAnimationTracks(t,e,i,r,a){let n=[],s=t.name?t.name:t.uuid,o=[];Yi[a.path]===Yi.weights?t.traverse(function(u){u.morphTargetInfluences&&o.push(u.name?u.name:u.uuid)}):o.push(s);let l;switch(Yi[a.path]){case Yi.weights:l=hr;break;case Yi.rotation:l=dr;break;case Yi.translation:case Yi.scale:l=cr;break;default:switch(i.itemSize){case 1:l=hr;break;case 2:case 3:default:l=cr;break}break}let h=r.interpolation!==void 0?sx[r.interpolation]:Hr,c=this._getArrayFromAccessor(i);for(let u=0,d=o.length;u<d;u++){let p=new l(o[u]+"."+Yi[a.path],e.array,c,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),n.push(p)}return n}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=fl(e.constructor),r=new Float32Array(e.length);for(let a=0,n=e.length;a<n;a++)r[a]=e[a]*i;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(e){let i=this instanceof dr?nx:Uu;return new i(this.times,this.values,this.getValueSize()/3,e)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mx(t,e,i){let r=e.attributes,a=new Yt;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(a.set(new A(l[0],l[1],l[2]),new A(h[0],h[1],h[2])),o.normalized){let c=fl(aa[o.componentType]);a.min.multiplyScalar(c),a.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=e.targets;if(n!==void 0){let o=new A,l=new A;for(let h=0,c=n.length;h<c;h++){let u=n[h];if(u.POSITION!==void 0){let d=i.json.accessors[u.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){let g=fl(aa[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}t.boundingBox=a;let s=new Zt;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,t.boundingSphere=s}function Iu(t,e,i){let r=e.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){t.setAttribute(o,l)})}for(let s in r){let o=ml[s]||s.toLowerCase();o in t.attributes||a.push(n(r[s],o))}if(e.indices!==void 0&&!t.index){let s=i.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});a.push(s)}return $e.workingColorSpace!==Pt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),bi(t,e),mx(t,e,i),Promise.all(a).then(function(){return e.targets!==void 0?lx(t,e.targets,i):t})}var fx=t=>new URL("assets/models/"+t,document.baseURI).href;function gl(t){let e=new Set,i=new Set,r=new Set;t.traverse(a=>{a.geometry&&e.add(a.geometry);for(let n of Array.isArray(a.material)?a.material:[a.material])if(n){i.add(n);for(let s of Object.values(n))s?.isTexture&&r.add(s)}}),e.forEach(a=>a.dispose()),i.forEach(a=>a.dispose()),r.forEach(a=>a.dispose())}function na(t,e,i){t.traverse(r=>{if(r.isMesh&&(r.castShadow=!0,r.receiveShadow=!String(r.material?.name).startsWith("Roof"),r.userData.pick=e,i)){let a=String(r.material?.name),n=/fur|muzzle/.test(a)?"fur":/linen/.test(a)?"cloth":/timber/.test(a)?"wood":null;n&&(r.material.map=i.texture(n),r.material.bumpMap=r.material.map,r.material.bumpScale=n==="fur"?.012:.007,r.material.needsUpdate=!0)}})}function Du(t){t.modelAssets={loaded:[],failed:[]};let e=new Pu;async function i(r,a){try{let n=await e.loadAsync(fx(r));if(t.art.disposed){gl(n.scene);return}a(n.scene),t.modelAssets.loaded.push(r),t.render()}catch{t.art.disposed||t.modelAssets.failed.push(r)}}return t.kind?t.kind==="parcels"?i("cottage-v15.glb",r=>{let a=[14965300,3313350,15185966];Object.values(t.homes).forEach((n,s)=>{let o=n.getObjectByName("GiftBadge");n.children.forEach(h=>{h!==o&&(h.visible=!1)});let l=r.clone(!0);l.traverse(h=>{h.isMesh&&["RoofClay","RoofShade"].includes(h.material?.name)&&(h.material=h.material.clone(),h.material.color.setHex(a[s]),h.material.name==="RoofShade"&&h.material.color.multiplyScalar(.76))}),n.add(l),o&&(o.visible=!0,o.position.set(0,1.99,1.12)),na(l,["red","blue","yellow"][s],t.art)})}):Promise.all(["sunflower","berry","pea"].map((r,a)=>i(r+"-v15.glb",n=>{let s=n.getObjectByName("PlantBody"),o=n.getObjectByName("Harvest");if(!s||!o)throw gl(n),Error("Incomplete plant");let l=t.growth[a],h=l.children.at(-1);l.children.forEach(d=>{d!==h&&(d.visible=!1)}),s.removeFromParent(),l.add(s),l.remove(h),l.add(h),h.children.forEach(d=>d.visible=!1),o.removeFromParent(),o.position.set(0,0,0),o.scale.multiplyScalar(1/1.3),h.add(o);let c=t.gifts[a];c.children.forEach(d=>d.visible=!1);let u=o.clone(!0);c.add(u),na(u,"basket"),na(o,"harvest"+a),na(s,"harvest"+a),t.interact.push(s)}))):Promise.all([i("bunny-chef-v15.glb",r=>{let n=["HeadRig","EarLeftRig","EarRightRig","EyeLeftRig","EyeRightRig","ArmLeftRig","ArmRightRig"].map(o=>r.getObjectByName(o));if(n.some(o=>!o))throw gl(r),Error("Incomplete bunny rig");let s=t.rabbitRoot;r.position.copy(s.position),r.scale.copy(s.scale).multiplyScalar(1.18),r.position.y=-.68,t.rabbitRestY=-.68,na(r,"guest",t.art),t.scene.add(r),s.visible=!1,t.interact=t.interact.filter(o=>o!==s),t.interact.push(r),t.rabbitRoot=r,t.head=n[0],t.ears=n.slice(1,3),t.eyes=n.slice(3,5),t.eyes.forEach(o=>o.userData.openScaleY=o.scale.y),t.arms=n.slice(5,7)}),i("produce-v15.glb",r=>{for(let a of["apple","carrot","pear"]){let n=r.getObjectByName(a);if(!n)throw Error("Incomplete produce");let s=t.foods[a];s.children.forEach(o=>o.visible=!1),n.removeFromParent(),s.add(n),na(n,a,t.art)}})])}var ka={wood:14000493,edge:9593668,cream:16774364,sage:11191970,blue:4240590,purple:9791173},Nu=class t{constructor(e,{action:i,onError:r,reduced:a=!1}){this.host=e,this.action=i,this.onError=r,this.reduced=a,this.abort=new AbortController,this.interact=[],this.foods={},this.selected=null,this.goal=null,this.drag=null,this.tweens=[],this.time=0,this.last=0,this.progress=0,this.celebration=0,this.scene=new Hn,this.scene.background=new Le(15328714),this.scene.fog=new Tc(15328714,20,40),this.camera=new At(39,1,.1,65),this.renderer=new Tu({antialias:!0,alpha:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.shadowMap.type=Oo,this.renderer.outputColorSpace=ut,this.renderer.toneMapping=zn,this.renderer.toneMappingExposure=.96,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","\u041E\u0431\u044A\u0451\u043C\u043D\u0430\u044F \u043B\u0435\u0441\u043D\u0430\u044F \u043A\u0443\u0445\u043D\u044F. \u0412\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438 \u043F\u043E\u0434 \u0441\u0446\u0435\u043D\u043E\u0439."),this.ray=new _u,this.point=new $,this.plane=new Li(new A(0,1,0),-1.8),this.hit=new A;let n=new mu(16775139,6654533,1.25);this.scene.add(n);let s=new za(16769195,3.7);s.position.set(-4,9,5),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:25}),s.shadow.normalBias=.035,s.shadow.bias=-3e-4,this.scene.add(s);let o=new za(13101055,1.2);o.position.set(6,5,-3),this.scene.add(o),this.art=new Kn(this),this.art.environment(),this.build(),this.constructor===t&&this.art.decorateCafe();for(let c of this.interact)c.traverse(u=>{u.isMesh&&!u.userData.pick&&(u.userData.pick=c.userData.pickRoot)});this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.inView=!0,this.visibilityObserver=new IntersectionObserver(c=>{this.inView=c[0].isIntersecting,this.inView?document.hidden||(this.last=0,this.renderer.setAnimationLoop(u=>this.frame(u))):this.renderer.setAnimationLoop(null)}),this.visibilityObserver.observe(e);let l={signal:this.abort.signal},h=this.renderer.domElement;h.addEventListener("pointerdown",c=>this.down(c),l),h.addEventListener("pointermove",c=>this.move(c),l),h.addEventListener("pointerup",c=>this.up(c),l),h.addEventListener("pointercancel",()=>this.cancel(),l),h.addEventListener("lostpointercapture",()=>this.cancel(),l),h.addEventListener("contextmenu",c=>c.preventDefault(),l),h.addEventListener("webglcontextlost",c=>{c.preventDefault(),this.renderer.setAnimationLoop(null),this.onError()},l),document.addEventListener("visibilitychange",()=>{document.hidden||!this.inView?this.renderer.setAnimationLoop(null):(this.last=0,this.renderer.setAnimationLoop(c=>this.frame(c)))},l),this.renderer.setAnimationLoop(c=>this.frame(c)),this.modelsReady=Du(this)}mat(e,i=.62){return this.art?this.art.material(e,i):new hi({color:e,roughness:i})}mesh(e,i,r=this.scene,a=0,n=0,s=0){let o=new _t(e,typeof i=="number"?this.mat(i):i);return o.position.set(a,n,s),o.castShadow=!0,o.receiveShadow=!0,r.add(o),o}orb(e,i,r,a,n,s,o=s,l=s){let h=this.mesh(new $r(1,28,20),i,e,r,a,n);return h.scale.set(s,o,l),h}box(e,i,r,a,n,s,o,l,h=.08){let c=new Jr,u=-s/2,d=-o/2;h=Math.min(h,s/2,o/2),c.moveTo(u+h,d),c.lineTo(u+s-h,d),c.quadraticCurveTo(u+s,d,u+s,d+h),c.lineTo(u+s,d+o-h),c.quadraticCurveTo(u+s,d+o,u+s-h,d+o),c.lineTo(u+h,d+o),c.quadraticCurveTo(u,d+o,u,d+o-h),c.lineTo(u,d+h),c.quadraticCurveTo(u,d,u+h,d);let p=new Fa(c,{depth:l,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.025,bevelThickness:.025});return p.translate(0,0,-l/2),this.mesh(p,i,e,r,a,n)}cyl(e,i,r,a,n,s,o,l){return this.mesh(new Kr(s,o,l,40),i,e,r,a,n)}torus(e,i,r,a,n,s,o){let l=this.mesh(new nl(s,o,12,56),i,e,r,a,n);return l.rotation.x=Math.PI/2,l}curve(e,i,r,a=.04){return this.mesh(new sl(new rl(r.map(n=>new A(...n))),32,a,10,!1),i,e)}label(e,i=2.5,r=.55,a="#73503c",n="#fff3d7"){let s=document.createElement("canvas");s.width=768,s.height=192;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,s.width,s.height),o.fillStyle=a,o.font="bold 65px Trebuchet MS, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,384,100,725);let l=new Xn(s);l.colorSpace=ut;let h=new _t(new Kt(i,r),new Gt({map:l}));return this.scene.add(h),h}clickable(e,i){return e.userData.pickRoot=i,e.traverse(r=>{r.isMesh&&(r.userData.pick=i)}),this.interact.push(e),e}build(){this.box(this.scene,10863760,0,2.2,-4.7,18,9,.2),this.box(this.scene,14796445,0,-.42,1,22,.2,22);for(let s=-9;s<=9;s+=1.5)this.box(this.scene,14531728,s,-.27,1,1.46,.1,15,.01);this.box(this.scene,16247239,-3.8,3.9,-4.25,4.6,4.2,.25),this.box(this.scene,10410216,-3.8,3.9,-4.03,4.1,3.7,.05),this.art.backdrop(this.scene,-3.8,3.9,-3.96,4.08,3.68),this.box(this.scene,16773329,-3.8,3.9,-3.3,.1,3.6,.2),this.box(this.scene,16773329,-3.8,3.9,-3.3,4.1,.1,.2),this.box(this.scene,ka.wood,-3.8,1.9,-3.7,4.8,.18,1),this.box(this.scene,12094040,3.8,3,-4,3.5,.14,1.1),this.box(this.scene,12094040,3.8,4.8,-4,3.5,.14,1.1);for(let s=0;s<3;s++)this.jar(2.7+s*.85,3.35,-3.7,[14920313,10140079,16246453][s]);this.plant(4.6,4.92,-3.7),this.jar(2.8,5.15,-3.7,14464438);let e=this.box(this.scene,11302214,0,5.45,-4.05,3.2,.8,.2,.18);this.label("\u041B\u0415\u0421\u041D\u041E\u0415 \u041A\u0410\u0424\u0415",2.95,.48,"#fff2ce","#ac7546").position.set(0,5.45,-3.89);for(let s of[-1.1,1.1])this.curve(this.scene,10125911,[[s,5.7,-4],[s,6.4,-4]],.025);this.box(this.scene,ka.edge,0,.62,.9,10.6,1.1,5.1,.25),this.box(this.scene,ka.wood,0,1.24,.9,10.8,.25,5.25,.25),this.box(this.scene,13743251,0,.65,3.51,10.4,.65,.08);for(let s=-4.5;s<5;s+=1.5)this.box(this.scene,15849645,s,.65,3.58,1.4,.55,.05);this.sink=new gt,this.sink.position.set(-3,1.44,.35),this.scene.add(this.sink),this.cyl(this.sink,3317693,0,.05,0,.98,.88,.18),this.torus(this.sink,8115172,0,.15,0,.94,.11),this.water=this.cyl(this.sink,new hi({color:9427691,transparent:!0,opacity:.8,roughness:.2}),0,.13,0,.83,.83,.04),this.curve(this.sink,15323026,[[-.7,.2,-.6],[-.7,1.2,-.6],[-.35,1.4,-.6],[0,1.25,-.6],[0,1,-.6]],.075),this.stream=this.cyl(this.sink,new hi({color:11791868,transparent:!0,opacity:.65}),0,.61,-.6,.045,.08,.75),this.stream.visible=!1,this.clickable(this.sink,"sink"),this.bowl=new gt,this.bowl.position.set(2.85,1.43,.5),this.scene.add(this.bowl);let r=[[0,0],[.5,0],[.68,.08],[.87,.35],[.95,.65],[.89,.69],[.82,.37],[.61,.15],[.48,.1],[0,.1]].map(([s,o])=>new $(s,o));this.mesh(new al(r,56),ka.purple,this.bowl),this.torus(this.bowl,14864621,0,.66,0,.91,.07),this.salad=new gt,this.salad.position.y=.26,this.bowl.add(this.salad);for(let s=0;s<12;s++){let o=s*2.4;this.orb(this.salad,[15963244,12240987,16768160][s%3],Math.cos(o)*.48,.12+Math.sin(s)*.05,Math.sin(o)*.48,.16,.12,.14)}this.salad.visible=!1,this.spoon=new gt,this.spoon.position.set(.18,.44,0),this.bowl.add(this.spoon),this.orb(this.spoon,13804147,0,.02,0,.23,.06,.3);let a=this.box(this.spoon,11697483,0,.42,-.16,.1,.8,.1);a.rotation.x=-.4,this.spoon.rotation.z=-.5,this.clickable(this.bowl,"bowl"),this.plate=new gt,this.plate.position.set(0,1.43,.45),this.scene.add(this.plate);let n=this.box(this.plate,15056261,0,0,0,2.4,.04,2.1,.2);this.cyl(this.plate,ka.cream,0,.08,0,.85,.75,.09),this.torus(this.plate,15058849,0,.13,0,.78,.05),this.clickable(this.plate,"guest"),this.box(this.scene,11960912,0,1.44,2.4,5.9,.13,1.4,.22),this.box(this.scene,14925448,0,1.52,2.4,5.6,.07,1.2,.18),["apple","carrot","pear"].forEach((s,o)=>{let l=this.food(s);l.position.set((o-1)*1.7,1.88,2.4),l.userData.home=l.position.clone(),this.foods[s]=l,this.scene.add(l),this.clickable(l,s)}),this.rabbit(),this.rabbitRoot.scale.setScalar(1.12),this.rabbitRoot.position.y=this.rabbitRestY??-.23,this.plant(-4.6,1.4,-1.1),this.rings={};for(let[s,o]of[["sink",[-3,1.63,.35]],["bowl",[2.85,1.5,.5]],["guest",[0,1.63,.45]]]){let l=this.torus(this.scene,16768887,...o,1.11,.035);l.material.emissive=new Le(16761417),l.material.emissiveIntensity=.45,l.visible=!1,this.rings[s]=l}this.sparkles=new gt,this.scene.add(this.sparkles);for(let s=0;s<12;s++){let o=this.orb(this.sparkles,s%2?16765020:16774348,0,0,0,.06);o.visible=!1,o.userData.i=s}}jar(e,i,r,a){this.cyl(this.scene,a,e,i,r,.23,.26,.55),this.cyl(this.scene,12293215,e,i+.31,r,.27,.27,.09)}plant(e,i,r){this.cyl(this.scene,13471595,e,i+.23,r,.28,.2,.45);for(let a=0;a<7;a++){let n=a*2.4,s=this.orb(this.scene,7837533,e+Math.cos(n)*.22,i+.65+Math.sin(a)*.1,r+Math.sin(n)*.22,.13,.4,.08);s.rotation.z=Math.cos(n)*.6}}food(e){let i=new gt;if(e==="apple"){this.orb(i,15224117,-.14,0,0,.34,.36,.34),this.orb(i,15818562,.14,.02,0,.33,.36,.33),this.cyl(i,7884854,0,.41,0,.04,.05,.2);let r=this.orb(i,7575901,.18,.43,0,.22,.07,.11);r.rotation.z=.35}else if(e==="pear")this.orb(i,11913285,0,-.04,0,.37,.35,.34),this.orb(i,14734970,0,.24,0,.22,.33,.22),this.cyl(i,8412217,0,.58,0,.035,.045,.15),this.orb(i,9020257,.14,.59,0,.2,.06,.1);else{let r=this.mesh(new Na(.25,.85,32),16156451,i);r.rotation.z=Math.PI,this.orb(i,16298066,0,.37,0,.25,.12,.25);for(let a=-1;a<=1;a++){let n=this.orb(i,7642201,a*.1,.68,0,.07,.28,.08);n.rotation.z=-a*.4}for(let a=0;a<3;a++)this.curve(i,14190640,[[-.15,.2-a*.16,.17],[.02,.18-a*.16,.22],[.14,.2-a*.16,.16]],.012);i.rotation.z=-.25}return i}rabbit(){let e=new gt;this.rabbitRoot=e,e.position.set(0,0,-1.65),this.scene.add(e),this.orb(e,14400418,0,1.95,0,.72,.95,.56),this.orb(e,13350810,-.4,1.12,.25,.35,.18,.45),this.orb(e,13350810,.4,1.12,.25,.35,.18,.45),this.orb(e,2663269,0,2.05,.2,.64,.63,.48),this.box(e,16115130,0,1.96,.67,.55,.4,.07,.12),this.head=new gt,this.head.position.y=3.13,e.add(this.head);let i=this.head;this.orb(i,14466983,0,0,0,.78,.72,.61),this.orb(i,16049612,0,-.22,.47,.57,.4,.29),this.ears=[];for(let r of[-1,1]){let a=new gt;a.position.set(r*.4,.61,-.02),a.rotation.z=-r*.14,i.add(a),this.orb(a,14466983,0,.5,0,.23,.77,.23),this.orb(a,15119011,0,.52,.19,.125,.59,.055),this.ears.push(a),this.orb(i,16051424,r*.3,.05,.51,.22,.29,.12);let n=this.orb(i,5783598,r*.3,.045,.61,.135,.19,.065);this.eyes||(this.eyes=[]),this.eyes.push(n),this.orb(i,16776435,r*.3-.04,.12,.665,.042),this.orb(i,15382176,r*.49,-.18,.58,.14,.075,.035)}this.orb(i,12553338,0,-.14,.76,.105,.065,.065),this.curve(i,8543817,[[-.18,-.31,.71],[0,-.37,.75],[.18,-.31,.71]],.017),this.arms=[];for(let r of[-1,1]){let a=new gt;a.position.set(r*.62,2.35,.03),e.add(a),this.orb(a,14203291,0,-.34,.08,.22,.5,.23),this.orb(a,15785408,0,-.69,.15,.24,.22,.25),this.arms.push(a)}this.clickable(e,"guest")}setStep({stage:e,food:i,selected:r}){this.stage=e,this.foodId=i,this.selected=r,this.progress=0,this.stream.visible=!1,this.salad.visible=e==="serve",this.salad.scale.setScalar(1),this.bowl.position.set(2.85,1.43,.5),this.bowl.scale.setScalar(1),this.rabbitRoot.position.y=this.rabbitRestY??-.23;for(let[a,n]of Object.entries(this.foods))n.visible=e==="choose"||a===i,n.position.copy(n.userData.home),n.scale.setScalar(1);e==="stir"&&this.foods[i].position.set(2.85,1.85,.5),e==="serve"&&(this.foods[i].visible=!1),this.setGoal(e==="wash"?"sink":e==="stir"?"bowl":e==="serve"?"guest":null),this.render()}setGoal(e){this.goal=e;for(let[i,r]of Object.entries(this.rings))r.visible=i===e}select(e){this.selected=e;for(let[i,r]of Object.entries(this.foods))r.visible&&(r.position.y=r.userData.home.y+(i===e?.24:0));this.render()}transfer(e){let i=this.foods[this.foodId],r=e==="sink"?new A(-3,1.78,.35):new A(2.85,1.9,.5);this.tween(i,r),this.stream.visible=e==="sink"}work(e,i){this.progress=i/3,e==="wash"?(this.stream.visible=!0,this.water.scale.setScalar(1+.025*i)):(this.salad.visible=!0,this.foods[this.foodId].visible=!1,this.spoon.rotation.y+=2.1,this.bowl.rotation.z=i%2?.035:-.035),this.celebrate(e==="wash"?[-3,1.8,.4]:[2.85,2,.5],!1),this.render()}served(){this.eating=2.8,this.stream.visible=!1,this.tween(this.bowl,new A(0,1.57,.35)),this.celebrate([0,2,-.6],!0)}celebrate(e,i=!0){this.celebration=this.reduced?0:1,this.sparkles.position.set(...e),this.sparkles.children.forEach(r=>{r.visible=!this.reduced,r.userData.big=i}),this.head.rotation.z=.06,this.render()}tween(e,i){if(this.reduced){e.position.copy(i);return}this.tweens=this.tweens.filter(r=>r.o!==e),this.tweens.push({o:e,from:e.position.clone(),to:i,t:0})}pick(e){let i=this.renderer.domElement.getBoundingClientRect();return this.point.set((e.clientX-i.left)/i.width*2-1,-(e.clientY-i.top)/i.height*2+1),this.ray.setFromCamera(this.point,this.camera),this.ray.intersectObjects(this.interact,!0).find(r=>r.object.visible&&this.visible(r.object))}visible(e){for(let i=e;i;i=i.parent)if(!i.visible)return!1;return!0}down(e){if(e.button!==0&&e.pointerType==="mouse")return;e.preventDefault();let r=this.pick(e)?.object.userData.pick;r&&(this.renderer.domElement.setPointerCapture(e.pointerId),this.drag={id:r,pid:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,distance:0,moved:!1},this.foods[r]&&this.stage==="choose"&&this.action("choose",r),this.foods[r]&&this.stage==="wash"&&(this.selected=r),this.stage==="serve"&&r==="bowl"&&this.action("select-bowl"),(r==="sink"&&this.stage==="wash"||r==="bowl"&&this.stage==="stir")&&this.action("target",r),r==="guest"&&this.stage==="serve"&&this.action("target","guest"))}move(e){if(!this.drag||this.drag.pid!==e.pointerId)return;let i=this.drag,r=e.clientX-i.lastX,a=e.clientY-i.lastY;if(i.distance+=Math.hypot(r,a),i.lastX=e.clientX,i.lastY=e.clientY,Math.hypot(e.clientX-i.x,e.clientY-i.y)>9&&(i.moved=!0),i.id==="sink"&&this.stage==="wash"||i.id==="bowl"&&this.stage==="stir"){i.id==="bowl"&&(this.spoon.rotation.y+=r*.025,this.render(!1)),i.distance>65&&(i.distance=0,this.action("work"));return}this.foods[i.id]&&i.id===this.foodId&&this.stage==="wash"&&i.moved&&(this.pick(e),this.ray.ray.intersectPlane(this.plane,this.hit)&&(this.foods[i.id].position.copy(this.hit),this.foods[i.id].position.x=ur.clamp(this.hit.x,-4.3,4.3),this.foods[i.id].position.z=ur.clamp(this.hit.z,-.8,2.7)),this.render()),i.id==="bowl"&&this.stage==="serve"&&i.moved&&(this.pick(e),this.ray.ray.intersectPlane(this.plane,this.hit)&&this.bowl.position.set(ur.clamp(this.hit.x,-3,3),1.8,ur.clamp(this.hit.z,-.5,1.5)),this.render())}up(e){if(!this.drag)return;let i=this.drag;this.drag=null;let r=this.pick(e);i.moved&&this.foods[i.id]&&this.stage==="wash"&&(this.foods[i.id].position.distanceTo(new A(-3,1.8,.35))<1.35?this.action("target","sink"):this.tween(this.foods[i.id],this.foods[i.id].userData.home.clone().add(new A(0,.24,0)))),i.moved&&i.id==="bowl"&&this.stage==="serve"&&(this.bowl.position.x<1.3&&this.bowl.position.x>-1.3?this.action("target","guest"):this.tween(this.bowl,new A(2.85,1.43,.5))),this.renderer.domElement.hasPointerCapture(e.pointerId)&&this.renderer.domElement.releasePointerCapture(e.pointerId)}cancel(){if(this.drag){let e=this.drag;this.foods[e.id]&&this.stage==="wash"&&this.tween(this.foods[e.id],this.foods[e.id].userData.home),e.id==="bowl"&&this.stage==="serve"&&this.tween(this.bowl,new A(2.85,1.43,.5)),this.drag=null}}resize(){let{width:e,height:i}=this.host.getBoundingClientRect();if(!e||!i)return;this.renderer.setSize(e,i,!1),this.camera.aspect=e/i;let r=e/i<.95;this.camera.position.set(0,r?5.3:5.8,r?11.6:12),this.camera.fov=r?47:39,this.camera.lookAt(0,r?2.55:2.45,.2),this.camera.updateProjectionMatrix(),this.render()}frame(e){if(document.hidden)return;if(this.reduced){this.renderer.setAnimationLoop(null),this.render();return}if(this.last&&e-this.last<41)return;let i=Math.min((e-(this.last||e))/1e3,.05);this.last=e,this.time+=i;for(let r of this.tweens){r.t=Math.min(1,r.t+i*2.8);let a=1-(1-r.t)**3;r.o.position.lerpVectors(r.from,r.to,a),r.o.position.y+=Math.sin(a*Math.PI)*.35}if(this.tweens=this.tweens.filter(r=>r.t<1),!this.reduced){this.head.rotation.z=Math.sin(this.time*.9)*.025,this.eating>0?(this.eating-=i,this.head.rotation.x=Math.sin(this.time*9)*.055,this.arms[0].rotation.x=-.6,this.salad.scale.setScalar(Math.max(.15,this.eating/2.8))):(this.head.rotation.x=0,this.arms[0].rotation.x=0),this.ears[0].rotation.z=.14+Math.sin(this.time*1.2)*.025,this.ears[1].rotation.z=-.14-Math.sin(this.time*1.2)*.025;let r=this.time%5>.12?1:.08;if(this.eyes.forEach(a=>a.scale.y=(a.userData.openScaleY??.19)*r),this.celebration>0){this.celebration=Math.max(0,this.celebration-i*.7);let a=1-this.celebration;this.sparkles.children.forEach(n=>{let s=n.userData.i,o=s*2.4;n.position.set(Math.cos(o)*a*1.7,Math.sin(a*Math.PI)*1.5+Math.sin(o)*a,.3+Math.sin(o)*a*.8),n.visible=this.celebration>0,n.scale.setScalar(.065*this.celebration)}),this.arms[1].rotation.z=-Math.sin(a*Math.PI)*.8}}this.render(!1)}render(e=!0){(e||this.tweens.length)&&(this.renderer.shadowMap.needsUpdate=!0),this.renderer.render(this.scene,this.camera)}dispose(){this.art.disposed=!0,this.abort.abort(),this.resizeObserver.disconnect(),this.visibilityObserver.disconnect(),this.renderer.setAnimationLoop(null);let e=new Set,i=new Set,r=new Set;this.scene.traverse(a=>{a.geometry&&e.add(a.geometry);for(let n of Array.isArray(a.material)?a.material:[a.material])if(n){i.add(n);for(let s of Object.values(n))s?.isTexture&&r.add(s)}});for(let a of this.art.textures)r.add(a);this.art.dispose(),e.forEach(a=>a.dispose()),r.forEach(a=>a.dispose()),i.forEach(a=>a.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}};export{ur as a,$ as b,A as c,gt as d,Kr as e,al as f,Nu as g};
