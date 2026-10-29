var uu=Object.defineProperty;var hu=(n,e,t)=>e in n?uu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>hu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class fu{constructor(e){je(this,"ctx",null);je(this,"master",null);je(this,"drone",null);je(this,"rain",null);je(this,"muted",!1);je(this,"started",!1);je(this,"music",null);je(this,"mood","title");je(this,"variant",0);je(this,"step",0);je(this,"musicTimer",null);this.muted=e}async unlock(){if(this.started){this.ctx?.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.muted?0:.55,i.connect(t.destination),this.master=i;const a=t.createGain();a.gain.value=.12,a.connect(i),this.music=a;const r=t.createGain();r.gain.value=.05;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=420,s.Q.value=.8,r.connect(s),s.connect(i);const o=t.createOscillator();o.type="sawtooth",o.frequency.value=55;const l=t.createOscillator();l.type="sine",l.frequency.value=82.5;const c=t.createOscillator();c.frequency.value=.07;const d=t.createGain();d.gain.value=6,c.connect(d),d.connect(o.frequency),o.connect(r),l.connect(r),o.start(),l.start(),c.start(),this.drone=r;const f=t.createBuffer(1,t.sampleRate*3,t.sampleRate),u=f.getChannelData(0);let p=0;for(let h=0;h<u.length;h++){const A=Math.random()*2-1;p=p*.97+A*.03,u[h]=p*2.2}const _=t.createBufferSource();_.buffer=f,_.loop=!0;const M=t.createBiquadFilter();M.type="highpass",M.frequency.value=900;const g=t.createGain();g.gain.value=.11,_.connect(M),M.connect(g),g.connect(i),_.start(),this.rain=g,this.started=!0,this.musicTimer=window.setInterval(()=>this.tickMusic(),620),t.state==="suspended"&&await t.resume()}catch{this.ctx=null}}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.08)}setIntensity(e){if(!this.ctx||!this.drone||!this.rain)return;const t=this.ctx.currentTime;this.drone.gain.setTargetAtTime(.04+Math.min(e,120)*35e-5,t,.4),this.rain.gain.setTargetAtTime(.09+Math.max(0,e-60)*4e-4,t,.4)}sfx(e){if(!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,a=t.createGain();if(a.connect(this.master),e==="click"){const r=t.createOscillator();r.type="square",r.frequency.setValueAtTime(320,i),r.frequency.exponentialRampToValueAtTime(160,i+.05),a.gain.setValueAtTime(.035,i),a.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),r.start(i),r.stop(i+.07);return}if(e==="confirm"){const r=t.createOscillator();r.type="triangle",r.frequency.setValueAtTime(220,i),r.frequency.exponentialRampToValueAtTime(440,i+.12),a.gain.setValueAtTime(.05,i),a.gain.exponentialRampToValueAtTime(.001,i+.35),r.connect(a),r.start(i),r.stop(i+.36);return}if(e==="danger"){const r=t.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(90,i),r.frequency.linearRampToValueAtTime(70,i+.5);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,a.gain.setValueAtTime(.08,i),a.gain.exponentialRampToValueAtTime(.001,i+.55),r.connect(s),s.connect(a),r.start(i),r.stop(i+.56);return}if(e==="dice"){for(let r=0;r<3;r++){const s=i+r*.045,o=t.createOscillator();o.type="square",o.frequency.setValueAtTime(700+r*90,s);const l=t.createGain();l.gain.setValueAtTime(.02,s),l.gain.exponentialRampToValueAtTime(.001,s+.035),o.connect(l),l.connect(this.master),o.start(s),o.stop(s+.04)}return}if(e==="mark"||e==="bond"){const r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(e==="mark"?520:392,i),r.frequency.exponentialRampToValueAtTime(e==="mark"?760:523,i+.18),a.gain.setValueAtTime(.04,i),a.gain.exponentialRampToValueAtTime(.001,i+.4),r.connect(a),r.start(i),r.stop(i+.41)}}setMood(e,t=0){(this.mood!==e||this.variant!==t)&&(this.mood=e,this.variant=t,this.step=0)}tone(e,t,i,a,r="sine"){if(!this.ctx||!this.music)return;const s=this.ctx,o=s.createOscillator(),l=s.createGain();o.type=r,o.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(a,t+.04),l.gain.exponentialRampToValueAtTime(1e-4,t+i),o.connect(l),l.connect(this.music),o.start(t),o.stop(t+i+.05)}tickMusic(){if(!this.ctx||!this.music||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime+.08,t=this.step++,i=this.variant%3;if(this.mood==="title"){const r=[[146.83,220,293.66],[130.81,196,261.63],[164.81,246.94,329.63]][i];this.tone(r[0],e,2.4,.035,"sine"),this.tone(r[1],e,2.2,.022,"triangle"),this.tone(r[2],e+.32,1.8,.018,"sine"),t%4===0&&this.tone(r[2]*2,e+.7,1.2,.012,"sine")}else if(this.mood==="city"){const a=[55,58.27,49],r=[[146.83,174.61,220],[130.81,155.56,196],[123.47,146.83,185]],s=a[i],o=r[i];t%2===0&&this.tone(s,e,1.1,.06,"triangle"),t%4===0&&(this.tone(o[0],e,2.8,.018,"sine"),this.tone(o[1],e+.18,2.4,.014,"sine"),this.tone(o[2],e+.36,2,.012,"sine")),t%8===5&&this.tone(o[2]*2,e+.2,1.6,.014,"sine")}else if(this.mood==="tension"){const r=[55,58.27,61.74][i];t%2===0&&this.tone(r,e,.45,.075,"sawtooth"),t%4===0&&this.tone(r*1.414,e+.2,.8,.022,"sine"),t%8===0&&this.tone(r*4,e+.1,.18,.02,"square")}else if(this.mood==="battle"){const a=[55,65.41,73.42][i];t%2===0&&this.tone(a,e,.22,.085,"sawtooth"),t%4===0&&this.tone(a*2,e+.1,.3,.05,"square"),t%8===3&&this.tone(a*1.5,e+.4,.4,.03,"triangle")}else{const r=[[130.81,164.81,196],[146.83,185,220],[123.47,155.56,196]][i];this.tone(r[0],e,3.6,.03,"sine"),this.tone(r[1],e+.4,3,.02,"sine"),this.tone(r[2],e+.8,2.4,.018,"sine")}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="186",pu=0,Ll=1,mu=2,Rr=1,gu=2,wa=3,bi=0,nn=1,Vn=2,Xn=0,Pa=1,Il=2,Dl=3,Nl=4,_u=5,ji=100,vu=101,xu=102,yu=103,Mu=104,Su=200,bu=201,Eu=202,Tu=203,zc=204,Hc=205,Au=206,wu=207,Ru=208,Cu=209,Pu=210,Lu=211,Iu=212,Du=213,Nu=214,Xs=0,qs=1,Ys=2,Da=3,Ks=4,Zs=5,Js=6,Qs=7,Gc=0,Uu=1,Fu=2,Pn=0,Vc=1,Wc=2,$c=3,Wo=4,Xc=5,qc=6,Yc=7,Kc=300,Ei=301,oa=302,ns=303,is=304,Xr=306,js=1e3,$n=1001,eo=1002,kt=1003,Ou=1004,Ja=1005,Wt=1006,as=1007,Mi=1008,on=1009,Zc=1010,Jc=1011,Na=1012,$o=1013,In=1014,Rn=1015,Dn=1016,Xo=1017,qo=1018,Ua=1020,Qc=35902,jc=35899,ed=1021,td=1022,_n=1023,Yn=1026,Si=1027,nd=1028,Yo=1029,Ti=1030,Ko=1031,Zo=1033,Cr=33776,Pr=33777,Lr=33778,Ir=33779,to=35840,no=35841,io=35842,ao=35843,ro=36196,so=37492,oo=37496,lo=37488,co=37489,Nr=37490,uo=37491,ho=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,vo=37814,xo=37815,yo=37816,Mo=37817,So=37818,bo=37819,Eo=37820,To=37821,Ao=36492,wo=36494,Ro=36495,Co=36283,Po=36284,Ur=36285,Lo=36286,Bu=3200,Io=0,ku=1,oi="",Jt="srgb",Fr="srgb-linear",Or="linear",ot="srgb",rs=7680,zu=519,Hu=512,Gu=513,Vu=514,Jo=515,Wu=516,$u=517,Qo=518,Xu=519,id=35044,Ul="300 es",Cn=2e3,Fa=2001;function qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yu(){const n=Br("canvas");return n.style.display="block",n}const Fl={};function kr(...n){const e="THREE."+n.shift();console.log(e,...n)}function ad(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ia(...n){const e=n.join(" ");e in Fl||(Fl[e]=!0,Le(...n))}function Ku(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Zu={[Xs]:qs,[Ys]:Js,[Ks]:Qs,[Da]:Zs,[qs]:Xs,[Js]:Ys,[Qs]:Ks,[Zs]:Da};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Do=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Ju(n,e){return(n%e+e)%e}function os(n,e,t){return(1-t)*n+t*e}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gl=class gl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;let Fe=gl;class fa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],f=i[a+3],u=r[s+0],p=r[s+1],_=r[s+2],M=r[s+3];if(f!==M||l!==u||c!==p||d!==_){let g=l*u+c*p+d*_+f*M;g<0&&(u=-u,p=-p,_=-_,M=-M,g=-g);let h=1-o;if(g<.9995){const A=Math.acos(g),P=Math.sin(A);h=Math.sin(h*A)/P,o=Math.sin(o*A)/P,l=l*h+u*o,c=c*h+p*o,d=d*h+_*o,f=f*h+M*o}else{l=l*h+u*o,c=c*h+p*o,d=d*h+_*o,f=f*h+M*o;const A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],f=r[s],u=r[s+1],p=r[s+2],_=r[s+3];return e[t]=o*_+d*f+l*p-c*u,e[t+1]=l*_+d*u+c*f-o*p,e[t+2]=c*_+d*p+o*u-l*f,e[t+3]=d*_-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),f=o(r/2),u=l(i/2),p=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=u*d*f+c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f-u*p*_;break;case"YXZ":this._x=u*d*f+c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f+u*p*_;break;case"ZXY":this._x=u*d*f-c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f-u*p*_;break;case"ZYX":this._x=u*d*f-c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f+u*p*_;break;case"YZX":this._x=u*d*f+c*p*_,this._y=c*p*f+u*d*_,this._z=c*d*_-u*p*f,this._w=c*d*f-u*p*_;break;case"XZY":this._x=u*d*f-c*p*_,this._y=c*p*f-u*d*_,this._z=c*d*_+u*p*f,this._w=c*d*f+u*p*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _l=class _l{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*t-r*a),f=2*(r*i-s*t);return this.x=t+l*c+s*f-o*d,this.y=i+l*d+o*c-r*f,this.z=a+l*f+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;let U=_l;const ls=new U,Ol=new fa,vl=class vl{constructor(e,t,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c)}set(e,t,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],_=i[8],M=a[0],g=a[3],h=a[6],A=a[1],P=a[4],y=a[7],S=a[2],T=a[5],w=a[8];return r[0]=s*M+o*A+l*S,r[3]=s*g+o*P+l*T,r[6]=s*h+o*y+l*w,r[1]=c*M+d*A+f*S,r[4]=c*g+d*P+f*T,r[7]=c*h+d*y+f*w,r[2]=u*M+p*A+_*S,r[5]=u*g+p*P+_*T,r[8]=u*h+p*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*r,p=c*r-s*l,_=t*f+i*u+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(a*c-d*i)*M,e[2]=(o*i-a*s)*M,e[3]=u*M,e[4]=(d*t-a*l)*M,e[5]=(a*r-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(s*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return ia("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cs.makeScale(e,t)),this}rotate(e){return ia("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cs.makeRotation(-e)),this}translate(e,t){return ia("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vl.prototype.isMatrix3=!0;let Ne=vl;const cs=new Ne,Bl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){const n={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ot&&(a.r=qn(a.r),a.g=qn(a.g),a.b=qn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===oi?Or:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fr]:{primaries:e,whitePoint:i,transfer:Or,toXYZ:Bl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Bl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const Ze=Qu();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class ju{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=Br("canvas")),Ni.width=e.width,Ni.height=e.height;const a=Ni.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=qn(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class jo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ds(a[s].image)):r.push(ds(a[s]))}else r=ds(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function ds(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let th=0;const us=new U;class $t extends Pi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=$n,a=$n,r=Wt,s=Mi,o=_n,l=on,c=$t.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=ci(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(us).x}get height(){return this.source.getSize(us).y}get depth(){return this.source.getSize(us).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Kc;$t.DEFAULT_ANISOTROPY=1;const xl=class xl{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,y=(p+1)/2,S=(h+1)/2,T=(d+u)/4,w=(f+M)/4,v=(_+g)/4;return P>y&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=T/i,r=w/i):y>S?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=v/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=w/r,a=v/r),this.set(i,a,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(u-d)*(u-d));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(f-M)/A,this.z=(u-d)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xl.prototype.isVector4=!0;let Tt=xl;class nh extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new $t(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new jo(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends nh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rd extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $r=class $r{constructor(e,t,i,a,r,s,o,l,c,d,f,u,p,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c,d,f,u,p,_,M,g)}set(e,t,i,a,r,s,o,l,c,d,f,u,p,_,M,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $r().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),s=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=s*d,p=s*f,_=o*d,M=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=_+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,_=c*d,M=c*f;t[0]=u+M*o,t[4]=_*o-p,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=p*o-_,t[6]=M+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,_=c*d,M=c*f;t[0]=u-M*o,t[4]=-s*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*d,t[9]=M-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*f,_=o*d,M=o*f;t[0]=l*d,t[4]=_*c-p,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,_=o*l,M=o*c;t[0]=l*d,t[4]=M-u*f,t[8]=_*f+p,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+_,t[10]=u-M*f}else if(e.order==="XZY"){const u=s*l,p=s*c,_=o*l,M=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+M,t[5]=s*d,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*d,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,rh)}lookAt(e,t,i){const a=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),jn.crossVectors(i,an),jn.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),jn.crossVectors(i,an)),jn.normalize(),Qa.crossVectors(an,jn),a[0]=jn.x,a[4]=Qa.x,a[8]=an.x,a[1]=jn.y,a[5]=Qa.y,a[9]=an.y,a[2]=jn.z,a[6]=Qa.z,a[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],_=i[2],M=i[6],g=i[10],h=i[14],A=i[3],P=i[7],y=i[11],S=i[15],T=a[0],w=a[4],v=a[8],E=a[12],R=a[1],D=a[5],O=a[9],V=a[13],N=a[2],H=a[6],Z=a[10],$=a[14],ie=a[3],q=a[7],ee=a[11],ne=a[15];return r[0]=s*T+o*R+l*N+c*ie,r[4]=s*w+o*D+l*H+c*q,r[8]=s*v+o*O+l*Z+c*ee,r[12]=s*E+o*V+l*$+c*ne,r[1]=d*T+f*R+u*N+p*ie,r[5]=d*w+f*D+u*H+p*q,r[9]=d*v+f*O+u*Z+p*ee,r[13]=d*E+f*V+u*$+p*ne,r[2]=_*T+M*R+g*N+h*ie,r[6]=_*w+M*D+g*H+h*q,r[10]=_*v+M*O+g*Z+h*ee,r[14]=_*E+M*V+g*$+h*ne,r[3]=A*T+P*R+y*N+S*ie,r[7]=A*w+P*D+y*H+S*q,r[11]=A*v+P*O+y*Z+S*ee,r[15]=A*E+P*V+y*$+S*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],_=e[3],M=e[7],g=e[11],h=e[15],A=l*p-c*u,P=o*p-c*f,y=o*u-l*f,S=s*p-c*d,T=s*u-l*d,w=s*f-o*d;return t*(M*A-g*P+h*y)-i*(_*A-g*S+h*T)+a*(_*P-M*S+h*w)-r*(_*y-M*T+g*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],_=e[12],M=e[13],g=e[14],h=e[15],A=t*o-i*s,P=t*l-a*s,y=t*c-r*s,S=i*l-a*o,T=i*c-r*o,w=a*c-r*l,v=d*M-f*_,E=d*g-u*_,R=d*h-p*_,D=f*g-u*M,O=f*h-p*M,V=u*h-p*g,N=A*V-P*O+y*D+S*R-T*E+w*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/N;return e[0]=(o*V-l*O+c*D)*H,e[1]=(a*O-i*V-r*D)*H,e[2]=(M*w-g*T+h*S)*H,e[3]=(u*T-f*w-p*S)*H,e[4]=(l*R-s*V-c*E)*H,e[5]=(t*V-a*R+r*E)*H,e[6]=(g*y-_*w-h*P)*H,e[7]=(d*w-u*y+p*P)*H,e[8]=(s*O-o*R+c*v)*H,e[9]=(i*R-t*O-r*v)*H,e[10]=(_*T-M*y+h*A)*H,e[11]=(f*y-d*T-p*A)*H,e[12]=(o*E-s*D-l*v)*H,e[13]=(t*D-i*E+a*v)*H,e[14]=(M*P-_*S-g*A)*H,e[15]=(d*S-f*P+u*A)*H,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,f=o+o,u=r*c,p=r*d,_=r*f,M=s*d,g=s*f,h=o*f,A=l*c,P=l*d,y=l*f,S=i.x,T=i.y,w=i.z;return a[0]=(1-(M+h))*S,a[1]=(p+y)*S,a[2]=(_-P)*S,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(u+h))*T,a[6]=(g+A)*T,a[7]=0,a[8]=(_+P)*w,a[9]=(g-A)*w,a[10]=(1-(u+M))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Ui.set(a[0],a[1],a[2]).length();const o=Ui.set(a[4],a[5],a[6]).length(),l=Ui.set(a[8],a[9],a[10]).length();r<0&&(s=-s),pn.copy(this);const c=1/s,d=1/o,f=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,a,r,s,o=Cn,l=!1){const c=this.elements,d=2*r/(t-e),f=2*r/(i-a),u=(t+e)/(t-e),p=(i+a)/(i-a);let _,M;if(l)_=r/(s-r),M=s*r/(s-r);else if(o===Cn)_=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(o===Fa)_=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Cn,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-a),u=-(t+e)/(t-e),p=-(i+a)/(i-a);let _,M;if(l)_=1/(s-r),M=s/(s-r);else if(o===Cn)_=-2/(s-r),M=-(s+r)/(s-r);else if(o===Fa)_=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$r.prototype.isMatrix4=!0;let _t=$r;const Ui=new U,pn=new _t,ah=new U(0,0,0),rh=new U(1,1,1),jn=new U,Qa=new U,an=new U,zl=new _t,Hl=new fa;class ui{constructor(e=0,t=0,i=0,a=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const Gl=new U,Fi=new fa,Fn=new _t,ja=new U,ma=new U,oh=new U,lh=new fa,Vl=new U(1,0,0),Wl=new U(0,1,0),$l=new U(0,0,1),Xl={type:"added"},ch={type:"removed"},Oi={type:"childadded",child:null},hs={type:"childremoved",child:null};class Bt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,t=new ui,i=new fa,a=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ne}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ma,ja,this.up):Fn.lookAt(ja,ma,this.up),this.quaternion.setFromRotationMatrix(Fn),a&&(Fn.extractRotation(a.matrixWorld),Fi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),hs.child=e,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ra extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dh={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dh)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ra;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},er={h:0,s:0,l:0};function ps(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ze.workingColorSpace){if(e=Ju(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=ps(s,r,e+1/3),this.g=ps(s,r,e),this.b=ps(s,r,e-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.workingToColorSpace(Vt.copy(this),e),Math.round(Xe(Vt.r*255,0,255))*65536+Math.round(Xe(Vt.g*255,0,255))*256+Math.round(Xe(Vt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,a=Vt.g,r=Vt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Jt){Ze.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,a=Vt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(er);const i=os(ei.h,er.h,t),a=os(ei.s,er.s,t),r=os(ei.l,er.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ge;Ge.NAMES=od;class el{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uh extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new U,On=new U,ms=new U,Bn=new U,Bi=new U,ki=new U,ql=new U,gs=new U,_s=new U,vs=new U,xs=new Tt,ys=new Tt,Ms=new Tt;class un{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),mn.subVectors(e,t),a.cross(mn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){mn.subVectors(a,t),On.subVectors(i,t),ms.subVectors(e,t);const s=mn.dot(mn),o=mn.dot(On),l=mn.dot(ms),c=On.dot(On),d=On.dot(ms),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,_=(s*d-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,a,r,s,o,l){return this.getBarycoord(e,t,i,a,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(s,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,i,a,r,s){return xs.setScalar(0),ys.setScalar(0),Ms.setScalar(0),xs.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,i),Ms.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(xs,r.x),s.addScaledVector(ys,r.y),s.addScaledVector(Ms,r.z),s}static isFrontFacing(e,t,i,a){return mn.subVectors(i,t),On.subVectors(e,t),mn.cross(On).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return un.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;Bi.subVectors(a,i),ki.subVectors(r,i),gs.subVectors(e,i);const l=Bi.dot(gs),c=ki.dot(gs);if(l<=0&&c<=0)return t.copy(i);_s.subVectors(e,a);const d=Bi.dot(_s),f=ki.dot(_s);if(d>=0&&f<=d)return t.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Bi,s);vs.subVectors(e,r);const p=Bi.dot(vs),_=ki.dot(vs);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ki,o);const g=d*_-p*f;if(g<=0&&f-d>=0&&p-_>=0)return ql.subVectors(r,a),o=(f-d)/(f-d+(p-_)),t.copy(a).addScaledVector(ql,o);const h=1/(g+M+u);return s=M*h,o=u*h,t.copy(i).addScaledVector(Bi,s).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,gn):gn.fromBufferAttribute(r,s),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tr.copy(i.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),nr.subVectors(this.max,ga),zi.subVectors(e.a,ga),Hi.subVectors(e.b,ga),Gi.subVectors(e.c,ga),ti.subVectors(Hi,zi),ni.subVectors(Gi,Hi),mi.subVectors(zi,Gi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!Ss(t,zi,Hi,Gi,nr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,zi,Hi,Gi,nr))?!1:(ir.crossVectors(ti,ni),t=[ir.x,ir.y,ir.z],Ss(t,zi,Hi,Gi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,tr=new Va,zi=new U,Hi=new U,Gi=new U,ti=new U,ni=new U,mi=new U,ga=new U,nr=new U,ir=new U,gi=new U;function Ss(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){gi.fromArray(n,r);const o=a.x*Math.abs(gi.x)+a.y*Math.abs(gi.y)+a.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),d=i.dot(gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new U,ar=new Fe;let hh=0;class xn extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=id,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ld extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cd extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const fh=new Va,_a=new U,bs=new U;class Wa{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fh.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(_a,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(bs)),this.expandByPoint(_a.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ph=0;const cn=new _t,Es=new Bt,Vi=new U,rn=new Va,va=new Va,Ot=new U;class qt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?cd:ld)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Es.lookAt(e),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(rn.min,va.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,va.max),rn.expandByPoint(Ot)):(rn.expandByPoint(va.min),rn.expandByPoint(va.max))}rn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Ot.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Ot));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ot.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Ot.add(Vi)),a=Math.max(a,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new U,l[v]=new U;const c=new U,d=new U,f=new U,u=new Fe,p=new Fe,_=new Fe,M=new U,g=new U;function h(v,E,R){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,R),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),d.sub(c),f.sub(c),p.sub(u),_.sub(u);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),o[v].add(M),o[E].add(M),o[R].add(M),l[v].add(g),l[E].add(g),l[R].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let v=0,E=A.length;v<E;++v){const R=A[v],D=R.start,O=R.count;for(let V=D,N=D+O;V<N;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const P=new U,y=new U,S=new U,T=new U;function w(v){S.fromBufferAttribute(a,v),T.copy(S);const E=o[v];P.copy(E),P.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(T,E);const D=y.dot(l[v])<0?-1:1;s.setXYZW(v,P.x,P.y,P.z,D)}for(let v=0,E=A.length;v<E;++v){const R=A[v],D=R.start,O=R.count;for(let V=D,N=D+O;V<N;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new U,r=new U,s=new U,o=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,g),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let h=0;h<d;h++)u[_++]=c[p++]}return new xn(u,d,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=id,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Kt=new U;class zr{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ts=new U,gh=new U,_h=new Ne;class ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ts.subVectors(i,t).cross(gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Ts),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_h.getNormalMatrix(e),a=this.coplanarPoint(Ts).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vh=0;class fi extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Pa,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dd extends fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const xa=new U,$i=new U,Xi=new U,qi=new Fe,ya=new Fe,ud=new _t,rr=new U,Ma=new U,sr=new U,Yl=new Fe,As=new Fe,Kl=new Fe;class xh extends Bt{constructor(e=new dd){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mh(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new zr(i,3,0,!1)),Wi.setAttribute("uv",new zr(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Xi.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;or(rr.set(-.5,-.5,0),Xi,s,$i,a,r),or(Ma.set(.5,-.5,0),Xi,s,$i,a,r),or(sr.set(.5,.5,0),Xi,s,$i,a,r),Yl.set(0,0),As.set(1,0),Kl.set(1,1);let o=e.ray.intersectTriangle(rr,Ma,sr,!1,xa);if(o===null&&(or(Ma.set(-.5,.5,0),Xi,s,$i,a,r),As.set(0,1),o=e.ray.intersectTriangle(rr,sr,Ma,!1,xa),o===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:un.getInterpolation(xa,rr,Ma,sr,Yl,As,Kl,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function or(n,e,t,i,a,r){qi.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ya.x=r*qi.x-a*qi.y,ya.y=a*qi.x+r*qi.y):ya.copy(qi),n.copy(e),n.x+=ya.x,n.y+=ya.y,n.applyMatrix4(ud)}const zn=new U,ws=new U,lr=new U,cr=new U;class tl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ws.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(ws);const r=e.distanceTo(t)*.5,s=-this.direction.dot(lr),o=cr.dot(this.direction),l=-cr.dot(lr),c=cr.lengthSq(),d=Math.abs(1-s*s);let f,u,p,_;if(d>0)if(f=s*l-o,u=s*o-l,_=r*d,f>=0)if(u>=-_)if(u<=_){const M=1/d;f*=M,u*=M,p=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-s*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(s*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=s>0?-r:r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(ws).addScaledVector(lr,u),p}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),a=zn.dot(zn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,p=e.z-s.z,_=t.x-s.x,M=t.y-s.y,g=t.z-s.z,h=i.x-s.x,A=i.y-s.y,P=i.z-s.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(d);let w,v,E,R,D,O,V,N,H,Z,$,ie;if(y>=S&&y>=T?(E=l,O=f,H=_,ie=h,l>=0?(w=c,v=d,R=u,D=p,V=M,N=g,Z=A,$=P):(w=d,v=c,R=p,D=u,V=g,N=M,Z=P,$=A)):S>=T?(E=c,O=u,H=M,ie=A,c>=0?(w=d,v=l,R=p,D=f,V=g,N=_,Z=P,$=h):(w=l,v=d,R=f,D=p,V=_,N=g,Z=h,$=P)):(E=d,O=p,H=g,ie=P,d>=0?(w=l,v=c,R=f,D=u,V=_,N=M,Z=h,$=A):(w=c,v=l,R=u,D=f,V=M,N=_,Z=A,$=h)),E===0)return null;const q=w/E,ee=v/E,ne=1/E,Re=R-q*O,Ae=D-ee*O,ht=V-q*H,Je=N-ee*H,nt=Z-q*ie,Y=$-ee*ie,j=nt*Je-Y*ht,xe=Re*Y-Ae*nt,De=ht*Ae-Je*Re;if(a){if(j<0||xe<0||De<0)return null}else if((j<0||xe<0||De<0)&&(j>0||xe>0||De>0))return null;const _e=j+xe+De;if(_e===0)return null;const Ve=ne*(j*O+xe*H+De*ie);return(_e>0?Ve<0:Ve>0)?null:this.at(Ve/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zl=new _t,_i=new tl,dr=new Wa,Jl=new U,ur=new U,hr=new U,fr=new U,Rs=new U,pr=new U,Ql=new U,mr=new U;class ut extends Bt{constructor(e=new qt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Rs.fromBufferAttribute(f,e),s?pr.addScaledVector(Rs,d):pr.addScaledVector(Rs.sub(t),d))}t.add(pr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(dr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(dr,Jl)===null||_i.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Zl.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Zl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const g=u[_],h=s[g.materialIndex],A=Math.max(g.start,p.start),P=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=o.getX(y),w=o.getX(y+1),v=o.getX(y+2);a=gr(this,h,e,i,c,d,f,T,w,v),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const A=o.getX(g),P=o.getX(g+1),y=o.getX(g+2);a=gr(this,s,e,i,c,d,f,A,P,y),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,M=u.length;_<M;_++){const g=u[_],h=s[g.materialIndex],A=Math.max(g.start,p.start),P=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=y,w=y+1,v=y+2;a=gr(this,h,e,i,c,d,f,T,w,v),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const A=g,P=g+1,y=g+2;a=gr(this,s,e,i,c,d,f,A,P,y),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function yh(n,e,t,i,a,r,s,o){let l;if(e.side===nn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===bi,o),l===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:n}}function gr(n,e,t,i,a,r,s,o,l,c){n.getVertexPosition(o,ur),n.getVertexPosition(l,hr),n.getVertexPosition(c,fr);const d=yh(n,e,t,i,ur,hr,fr,Ql);if(d){const f=new U;un.getBarycoord(Ql,ur,hr,fr,f),a&&(d.uv=un.getInterpolatedAttribute(a,o,l,c,f,new Fe)),r&&(d.uv1=un.getInterpolatedAttribute(r,o,l,c,f,new Fe)),s&&(d.normal=un.getInterpolatedAttribute(s,o,l,c,f,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};un.getNormal(ur,hr,fr,u.normal),d.face=u,d.barycoord=f}return d}class Mh extends $t{constructor(e=null,t=1,i=1,a,r,s,o,l,c=kt,d=kt,f,u){super(null,s,o,l,c,d,a,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vi=new Wa,Sh=new Fe(.5,.5),_r=new U;class nl{constructor(e=new ai,t=new ai,i=new ai,a=new ai,r=new ai,s=new ai){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],p=r[7],_=r[8],M=r[9],g=r[10],h=r[11],A=r[12],P=r[13],y=r[14],S=r[15];if(a[0].setComponents(c-s,p-d,h-_,S-A).normalize(),a[1].setComponents(c+s,p+d,h+_,S+A).normalize(),a[2].setComponents(c+o,p+f,h+M,S+P).normalize(),a[3].setComponents(c-o,p-f,h-M,S-P).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,p-u,h-g,S-y).normalize();else if(a[4].setComponents(c-l,p-u,h-g,S-y).normalize(),t===Cn)a[5].setComponents(c+l,p+u,h+g,S+y).normalize();else if(t===Fa)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=Sh.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(_r.x=a.normal.x>0?e.max.x:e.min.x,_r.y=a.normal.y>0?e.max.y:e.min.y,_r.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hd extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hr=new U,Gr=new U,jl=new _t,Sa=new tl,vr=new Wa,Cs=new U,ec=new U;class tc extends Bt{constructor(e=new qt,t=new hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,r=t.count;a<r;a++)Hr.fromBufferAttribute(t,a-1),Gr.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Hr.distanceTo(Gr);e.setAttribute("lineDistance",new Xt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(a),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;jl.copy(a).invert(),Sa.copy(e.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let M=p,g=_-1;M<g;M+=c){const h=d.getX(M),A=d.getX(M+1),P=xr(this,e,Sa,l,h,A,M);P&&t.push(P)}if(this.isLineLoop){const M=d.getX(_-1),g=d.getX(p),h=xr(this,e,Sa,l,M,g,_-1);h&&t.push(h)}}else{const p=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let M=p,g=_-1;M<g;M+=c){const h=xr(this,e,Sa,l,M,M+1,M);h&&t.push(h)}if(this.isLineLoop){const M=xr(this,e,Sa,l,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xr(n,e,t,i,a,r,s){const o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,a),Gr.fromBufferAttribute(o,r),t.distanceSqToSegment(Hr,Gr,Cs,ec)>i)return;Cs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cs);if(!(c<e.near||c>e.far))return{distance:c,point:ec.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class fd extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new _t,No=new tl,yr=new Wa,Mr=new U;class ic extends Bt{constructor(e=new qt,t=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(a),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;nc.copy(a).invert(),No.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=u,M=p;_<M;_++){const g=c.getX(_);Mr.fromBufferAttribute(f,g),ac(Mr,g,l,a,e,t,this)}}else{const u=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let _=u,M=p;_<M;_++)Mr.fromBufferAttribute(f,_),ac(Mr,_,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ac(n,e,t,i,a,r,s){const o=No.distanceSqToPoint(n);if(o<t){const l=new U;No.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class pd extends $t{constructor(e=[],t=Ei,i,a,r,s,o,l,c,d){super(e,t,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends $t{constructor(e,t,i,a,r,s,o,l,c){super(e,t,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oa extends $t{constructor(e,t,i=In,a,r,s,o=kt,l=kt,c,d=Yn,f=1){if(d!==Yn&&d!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bh extends Oa{constructor(e,t=In,i=Ei,a,r,s=kt,o=kt,l,c=Yn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,a,r,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gd extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dn extends qt{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,i,t,e,s,r,0),_("z","y","x",1,-1,i,t,-e,s,r,1),_("x","z","y",1,1,e,i,t,a,s,2),_("x","z","y",1,-1,e,i,-t,a,s,3),_("x","y","z",1,-1,e,t,i,a,r,4),_("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(M,g,h,A,P,y,S,T,w,v,E){const R=y/w,D=S/v,O=y/2,V=S/2,N=T/2,H=w+1,Z=v+1;let $=0,ie=0;const q=new U;for(let ee=0;ee<Z;ee++){const ne=ee*D-V;for(let Re=0;Re<H;Re++){const Ae=Re*R-O;q[M]=Ae*A,q[g]=ne*P,q[h]=N,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[h]=T>0?1:-1,d.push(q.x,q.y,q.z),f.push(Re/w),f.push(1-ee/v),$+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<w;ne++){const Re=u+ne+H*ee,Ae=u+ne+H*(ee+1),ht=u+(ne+1)+H*(ee+1),Je=u+(ne+1)+H*ee;l.push(Re,Ae,Je),l.push(Ae,ht,Je),ie+=6}o.addGroup(p,ie,E),p+=ie,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vr extends qt{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],f=[],u=[],p=[];let _=0;const M=[],g=i/2;let h=0;A(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(p,2));function A(){const y=new U,S=new U;let T=0;const w=(t-e)/i;for(let v=0;v<=r;v++){const E=[],R=v/r,D=R*(t-e)+e;for(let O=0;O<=a;O++){const V=O/a,N=V*l+o,H=Math.sin(N),Z=Math.cos(N);S.x=D*H,S.y=-R*i+g,S.z=D*Z,f.push(S.x,S.y,S.z),y.set(H,w,Z).normalize(),u.push(y.x,y.y,y.z),p.push(V,1-R),E.push(_++)}M.push(E)}for(let v=0;v<a;v++)for(let E=0;E<r;E++){const R=M[E][v],D=M[E+1][v],O=M[E+1][v+1],V=M[E][v+1];(e>0||E!==0)&&(d.push(R,D,V),T+=3),(t>0||E!==r-1)&&(d.push(D,O,V),T+=3)}c.addGroup(h,T,0),h+=T}function P(y){const S=_,T=new Fe,w=new U;let v=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let O=1;O<=a;O++)f.push(0,g*R,0),u.push(0,R,0),p.push(.5,.5),_++;const D=_;for(let O=0;O<=a;O++){const N=O/a*l+o,H=Math.cos(N),Z=Math.sin(N);w.x=E*Z,w.y=g*R,w.z=E*H,f.push(w.x,w.y,w.z),u.push(0,R,0),T.x=H*.5+.5,T.y=Z*.5*R+.5,p.push(T.x,T.y),_++}for(let O=0;O<a;O++){const V=S+O,N=D+O;y===!0?d.push(N,N+1,V):d.push(N+1,N,V),v+=3}c.addGroup(h,v,y===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eh{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(r-1);const d=i[a],u=i[a+1]-d,p=(s-d)/u;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=t||(s.isVector2?new Fe:new U);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,a=[],r=[],s=[],o=new U,l=new _t;for(let p=0;p<=e;p++){const _=p/e;a[p]=this.getTangentAt(_,new U)}r[0]=new U,s[0]=new U;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),f=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Xe(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Xe(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(a[_],p*_)),s[_].crossVectors(a[_],r[_])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function il(){let n=0,e=0,t=0,i=0;function a(r,s,o,l){n=r,e=o,t=-3*r+3*s-2*o-l,i=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,f){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,p=(o-s)/d-(l-s)/(d+f)+(l-o)/f;u*=d,p*=d,a(s,o,u,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const rc=new U,sc=new U,Ps=new il,Ls=new il,Is=new il;class Th extends Eh{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new U){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%r]:(sc.subVectors(a[0],a[1]).add(a[0]),c=sc);const f=a[o%r],u=a[(o+1)%r];if(this.closed||o+2<r?d=a[(o+2)%r]:(rc.subVectors(a[r-1],a[r-2]).add(a[r-1]),d=rc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),Ps.initNonuniformCatmullRom(c.x,f.x,u.x,d.x,_,M,g),Ls.initNonuniformCatmullRom(c.y,f.y,u.y,d.y,_,M,g),Is.initNonuniformCatmullRom(c.z,f.z,u.z,d.z,_,M,g)}else this.curveType==="catmullrom"&&(Ps.initCatmullRom(c.x,f.x,u.x,d.x,this.tension),Ls.initCatmullRom(c.y,f.y,u.y,d.y,this.tension),Is.initCatmullRom(c.z,f.z,u.z,d.z,this.tension));return i.set(Ps.calc(l),Ls.calc(l),Is.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new U().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Wn extends qt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,f=e/o,u=t/l,p=[],_=[],M=[],g=[];for(let h=0;h<d;h++){const A=h*u-s;for(let P=0;P<c;P++){const y=P*f-r;_.push(y,-A,0),M.push(0,0,1),g.push(P/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const P=A+c*h,y=A+c*(h+1),S=A+1+c*(h+1),T=A+1+c*h;p.push(P,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class La extends qt{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],f=new U,u=new U,p=[],_=[],M=[],g=[];for(let h=0;h<=i;h++){const A=[],P=h/i,y=s+P*o,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S);let w=0;h===0&&s===0?w=.5/t:h===i&&l===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){const E=v/t,R=a+E*r;f.x=-T*Math.cos(R),f.y=S,f.z=T*Math.sin(R),_.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),g.push(E+w,1-P),A.push(c++)}d.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const P=d[h][A+1],y=d[h][A],S=d[h+1][A],T=d[h+1][A+1];(h!==0||s>0)&&p.push(P,y,T),(h!==i-1||l<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(oc(a))a.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(oc(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const a in i)e[a]=i[a]}return e}function oc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ah(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _d(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const wh={clone:la,merge:Zt};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=Ah(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(a.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(a.value);break;case"v3":this.uniforms[i].value=new U().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(a.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ph extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hn extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lh extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ih extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class al extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Dh extends al{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ds=new _t,lc=new U,cc=new U;class Nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ds,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Fa||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sr=new U,br=new fa,bn=new U;class vd extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sr,br,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Sr,br,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,br,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new U,dc=new Fe,uc=new Fe;class sn extends vd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,dc,uc),t.subVectors(uc,dc)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Uh extends Nh{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Yi extends al{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class xd extends vd{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fh extends al{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ki=-90,Zi=1;class Oh extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new sn(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const r=new sn(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new sn(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const o=new sn(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const l=new sn(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new sn(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bh extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yl=class yl{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};yl.prototype.isMatrix2=!0;let hc=yl;function fc(n,e,t,i){const a=zh(i);switch(t){case ed:return n*e;case nd:return n*e/a.components*a.byteLength;case Yo:return n*e/a.components*a.byteLength;case Ti:return n*e*2/a.components*a.byteLength;case Ko:return n*e*2/a.components*a.byteLength;case td:return n*e*3/a.components*a.byteLength;case _n:return n*e*4/a.components*a.byteLength;case Zo:return n*e*4/a.components*a.byteLength;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:case ao:return Math.max(n,16)*Math.max(e,8)/4;case to:case io:return Math.max(n,8)*Math.max(e,8)/2;case ro:case so:case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case Nr:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ao:case wo:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ur:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zh(n){switch(n){case on:case Zc:return{byteLength:1,components:1};case Na:case Jc:case Dn:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case In:case $o:case Rn:return{byteLength:4,components:1};case Qc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yd(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hh(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const M=f[p];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
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
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Hf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Gf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jf=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
void main() {
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,dm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,hm=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,Mm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Gh,alphahash_pars_fragment:Vh,alphamap_fragment:Wh,alphamap_pars_fragment:$h,alphatest_fragment:Xh,alphatest_pars_fragment:qh,aomap_fragment:Yh,aomap_pars_fragment:Kh,batching_pars_vertex:Zh,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:jh,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:af,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:df,color_vertex:uf,common:hf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:bf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:Tf,fog_vertex:Af,fog_pars_vertex:wf,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Df,lights_pars_begin:Nf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:kf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,lightprobes_pars_fragment:$f,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Kf,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:jf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:ap,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:dp,normal_vertex:up,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:yp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:wp,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:kp,uv_pars_vertex:zp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:$p,backgroundCube_frag:Xp,cube_vert:qp,cube_frag:Yp,depth_vert:Kp,depth_frag:Zp,distance_vert:Jp,distance_frag:Qp,equirect_vert:jp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:am,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:dm,meshphong_vert:um,meshphong_frag:hm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:ym,sprite_vert:Mm,sprite_frag:Sm},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Tn={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Tn.physical={uniforms:Zt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Er={r:0,b:0,g:0},bm=new _t,Md=new Ne;Md.set(-1,0,0,0,1,0,0,0,1);function Em(n,e,t,i,a,r){const s=new Ge(0);let o=a===!0?0:1,l,c,d=null,f=0,u=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function _(A){let P=!1;const y=p(A);y===null?g(s,o):y&&y.isColor&&(g(y,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(A,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===Xr)?(c===void 0&&(c=new ut(new dn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:la(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Md),c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,(d!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ut(new Wn(2,2),new Nn({name:"BackgroundMaterial",uniforms:la(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,P){A.getRGB(Er,_d(n)),t.buffers.color.setClear(Er.r,Er.g,Er.b,P,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,P=1){s.set(A),o=P,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(s,o)},render:_,addToRenderList:M,dispose:h}}function Tm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(D,O,V,N,H){let Z=!1;const $=f(D,N,V,O);r!==$&&(r=$,c(r.object)),Z=p(D,N,V,H),Z&&_(D,N,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(D,O,V,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function f(D,O,V,N){const H=N.wireframe===!0;let Z=i[O.id];Z===void 0&&(Z={},i[O.id]=Z);const $=D.isInstancedMesh===!0?D.id:0;let ie=Z[$];ie===void 0&&(ie={},Z[$]=ie);let q=ie[V.id];q===void 0&&(q={},ie[V.id]=q);let ee=q[H];return ee===void 0&&(ee=u(l()),q[H]=ee),ee}function u(D){const O=[],V=[],N=[];for(let H=0;H<t;H++)O[H]=0,V[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,O,V,N){const H=r.attributes,Z=O.attributes;let $=0;const ie=V.getAttributes();for(const q in ie)if(ie[q].location>=0){const ne=H[q];let Re=Z[q];if(Re===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Re=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Re=D.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;$++}return r.attributesNum!==$||r.index!==N}function _(D,O,V,N){const H={},Z=O.attributes;let $=0;const ie=V.getAttributes();for(const q in ie)if(ie[q].location>=0){let ne=Z[q];ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),H[q]=Re,$++}r.attributes=H,r.attributesNum=$,r.index=N}function M(){const D=r.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function g(D){h(D,0)}function h(D,O){const V=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;V[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),H[D]!==O&&(n.vertexAttribDivisor(D,O),H[D]=O)}function A(){const D=r.newAttributes,O=r.enabledAttributes;for(let V=0,N=O.length;V<N;V++)O[V]!==D[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function P(D,O,V,N,H,Z,$){$===!0?n.vertexAttribIPointer(D,O,V,H,Z):n.vertexAttribPointer(D,O,V,N,H,Z)}function y(D,O,V,N){M();const H=N.attributes,Z=V.getAttributes(),$=O.defaultAttributeValues;for(const ie in Z){const q=Z[ie];if(q.location>=0){let ee=H[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ne=ee.normalized,Re=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const ht=Ae.buffer,Je=Ae.type,nt=Ae.bytesPerElement,Y=Je===n.INT||Je===n.UNSIGNED_INT||ee.gpuType===$o;if(ee.isInterleavedBufferAttribute){const j=ee.data,xe=j.stride,De=ee.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)h(q.location+_e,j.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let _e=0;_e<q.locationSize;_e++)P(q.location+_e,Re/q.locationSize,Je,ne,xe*nt,(De+Re/q.locationSize*_e)*nt,Y)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)h(q.location+j,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<q.locationSize;j++)g(q.location+j);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let j=0;j<q.locationSize;j++)P(q.location+j,Re/q.locationSize,Je,ne,Re*nt,Re/q.locationSize*j*nt,Y)}}else if($!==void 0){const ne=$[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(q.location,ne);break;case 3:n.vertexAttrib3fv(q.location,ne);break;case 4:n.vertexAttrib4fv(q.location,ne);break;default:n.vertexAttrib1fv(q.location,ne)}}}}A()}function S(){E();for(const D in i){const O=i[D];for(const V in O){const N=O[V];for(const H in N){const Z=N[H];for(const $ in Z)d(Z[$].object),delete Z[$];delete N[H]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const V in O){const N=O[V];for(const H in N){const Z=N[H];for(const $ in Z)d(Z[$].object),delete Z[$];delete N[H]}}delete i[D.id]}function w(D){for(const O in i){const V=i[O];for(const N in V){const H=V[N];if(H[D.id]===void 0)continue;const Z=H[D.id];for(const $ in Z)d(Z[$].object),delete Z[$];delete H[D.id]}}}function v(D){for(const O in i){const V=i[O],N=D.isInstancedMesh===!0?D.id:0,H=V[N];if(H!==void 0){for(const Z in H){const $=H[Z];for(const ie in $)d($[ie].object),delete $[ie];delete H[Z]}delete V[N],Object.keys(V).length===0&&delete i[O]}}}function E(){R(),s=!0,r!==a&&(r=a,c(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:g,disableUnusedAttributes:A}}function Am(n,e,t){let i;function a(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];t.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function wm(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==_n&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==on&&w!==Rn&&!v&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:T}}function Rm(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new ai,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||a;return a=u,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!a||_===null||_.length===0||r&&!g)r?d(null):c();else{const A=r?0:i,P=A*4;let y=h.clippingState||null;l.value=y,y=d(_,u,P,p);for(let S=0;S!==P;++S)y[S]=t[S];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,_){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const h=p+M*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<h)&&(g=new Float32Array(h));for(let P=0,y=p;P!==M;++P,y+=4)s.copy(f[P]).applyMatrix4(A,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const ta=4,Cm=6,Pm=20,Lm=256,ba=new xd,pc=new Ge;let Ns=null,Us=0,Fs=0,Os=!1;const Im=new U,xi=new U;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=Im}=r;Ns=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Us,Fs),this._renderer.xr.enabled=Os,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Dn,format:_n,colorSpace:Fr,depthBuffer:!1},a=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dm(r)),this._blurMaterial=Um(r,e,t),this._ggxMaterial=Nm(r,e,t)}return a}_compileMaterial(e){const t=new ut(new qt,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,a,r){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(pc),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new dn,new ri({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let h=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,h=!0):(g.color.copy(pc),h=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[P],r.y,r.z)):y===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[P]));const S=this._cubeSize;Ji(a,y*S,P>2?S:0,S,S),f.setRenderTarget(a),h&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ei||e.mapping===oa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,p=f*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-ta?i-_+ta:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ji(r,g,h,3*M,2*M),a.setRenderTarget(r),a.render(o,ba),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ji(e,g,h,3*M,2*M),a.setRenderTarget(e),a.render(o,ba)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-ta?a-this._lodMax+ta:0),u=4*(this._cubeSize-d);Ji(t,f,u,3*d,2*d),s.setRenderTarget(t),s.render(l,ba)}}function Dm(n){const e=[],t=[];let i=n;const a=n-ta+1+Cm;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,_=new Float32Array(p*u*f),M=new Float32Array(p*u*f);for(let h=0;h<f;h++){const A=h%3*2/3-1,P=h>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(y,p*u*h);for(let S=0;S<u;S++){const T=d[S*2]*2-1,w=d[S*2+1]*2-1;h===0?xi.set(1,w,T):h===1?xi.set(-T,1,-w):h===2?xi.set(-T,w,1):h===3?xi.set(-1,w,-T):h===4?xi.set(-T,-1,w):xi.set(T,w,-1),xi.toArray(M,(h*u+S)*p)}}const g=new qt;g.setAttribute("position",new xn(_,p)),g.setAttribute("outputDirection",new xn(M,p)),t.push(new ut(g,null)),i>ta&&i--}return{lodMeshes:t,sizeLods:e}}function gc(n,e,t){const i=new vn(n,e,t);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ji(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Nm(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Um(n,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _c(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sd extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new pd(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new dn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xn});r.uniforms.tEquirect.value=t;const s=new ut(a,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Wt),new Oh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function Fm(n){let e=new WeakMap,t=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?s(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===ns||p===is)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Sd(_.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,_=p===ns||p===is,M=p===Ei||p===oa;if(_||M){let g=t.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new mc(n)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const A=u.image;return _&&A&&A.height>0||M&&A&&l(A)?(i===null&&(i=new mc(n)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===ns?u.mapping=Ei:p===is&&(u.mapping=oa),u}function l(u){let p=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function Om(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&ia("WebGLRenderer: "+i+" extension not supported."),a}}}function Bm(n,e,t,i){const a={},r=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const A=p.array;M=p.version;for(let P=0,y=A.length;P<y;P+=3){const S=A[P+0],T=A[P+1],w=A[P+2];u.push(S,T,T,w,w,S)}}else{const A=_.array;M=_.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const S=P+0,T=P+1,w=P+2;u.push(S,T,T,w,w,S)}}const g=new(_.count>=65535?cd:ld)(u,1);g.version=M;const h=r.get(f);h&&e.remove(h),r.set(f,g)}function d(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function km(n,e,t){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*s),t.update(u,i,1)}function c(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*s,p),t.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];t.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function zm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Hm(n,e,t){const i=new WeakMap,a=new Tt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let R=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let S=o.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*T*4*f),v=new rd(w,S,T,f);v.type=Rn,v.needsUpdate=!0;const E=y*4;for(let D=0;D<f;D++){const O=h[D],V=A[D],N=P[D],H=S*T*4*D;for(let Z=0;Z<O.count;Z++){const $=Z*E;_===!0&&(a.fromBufferAttribute(O,Z),w[H+$+0]=a.x,w[H+$+1]=a.y,w[H+$+2]=a.z,w[H+$+3]=0),M===!0&&(a.fromBufferAttribute(V,Z),w[H+$+4]=a.x,w[H+$+5]=a.y,w[H+$+6]=a.z,w[H+$+7]=0),g===!0&&(a.fromBufferAttribute(N,Z),w[H+$+8]=a.x,w[H+$+9]=a.y,w[H+$+10]=a.z,w[H+$+11]=N.itemSize===4?a.w:1)}}u={count:f,texture:v,size:new Fe(S,T)},i.set(o,u),o.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gm(n,e,t,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Vm={[Vc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function Wm(n,e,t,i,a,r){const s=new vn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new qt;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const d=new Ph({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(c,d),u=new xd(-1,1,1,-1,0,1);let p=null,_=null,M=!1,g,h=null,A=[],P=!1;this.setSize=function(y,S){s.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<A.length;T++){const w=A[T];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const S=s.width,T=s.height;A.length>0&&o===null&&(o=new vn(S,T,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(S,T,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const v=A[w];v.setSize&&v.setSize(S,T)}},this.begin=function(y,S){if(M||y.toneMapping===Pn&&A.length===0)return!1;if(h=S,S!==null){const T=S.width,w=S.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return P===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Pn,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=g,M=!0;let T=s,w=o;for(let v=0;v<A.length;v++){const E=A[v];E.enabled!==!1&&(E.render(y,w,T,S),E.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(p!==y.outputColorSpace||_!==y.toneMapping){p=y.outputColorSpace,_=y.toneMapping,d.defines={},Ze.getTransfer(p)===ot&&(d.defines.SRGB_TRANSFER="");const v=Vm[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(h),y.render(f,u),h=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const bd=new $t,Uo=new Oa(1,1),Ed=new rd,Td=new ih,Ad=new pd,xc=[],yc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),bc=new Float32Array(4);function pa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=xc[a];if(r===void 0&&(r=new Float32Array(a),xc[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yr(n,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Km(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;bc.set(i),n.uniformMatrix2fv(this.addr,!1,bc),Ut(t,i)}}function Zm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Sc.set(i),n.uniformMatrix3fv(this.addr,!1,Sc),Ut(t,i)}}function Jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Ut(t,i)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function sg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?Qo:Jo,r=Uo):r=bd,t.setTexture2D(e||r,a)}function og(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Td,a)}function lg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ad,a)}function cg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Ed,a)}function dg(n){switch(n){case 5126:return $m;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return ag;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(n,e){n.uniform1fv(this.addr,e)}function hg(n,e){const t=pa(e,this.size,2);n.uniform2fv(this.addr,t)}function fg(n,e){const t=pa(e,this.size,3);n.uniform3fv(this.addr,t)}function pg(n,e){const t=pa(e,this.size,4);n.uniform4fv(this.addr,t)}function mg(n,e){const t=pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gg(n,e){const t=pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _g(n,e){const t=pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vg(n,e){n.uniform1iv(this.addr,e)}function xg(n,e){n.uniform2iv(this.addr,e)}function yg(n,e){n.uniform3iv(this.addr,e)}function Mg(n,e){n.uniform4iv(this.addr,e)}function Sg(n,e){n.uniform1uiv(this.addr,e)}function bg(n,e){n.uniform2uiv(this.addr,e)}function Eg(n,e){n.uniform3uiv(this.addr,e)}function Tg(n,e){n.uniform4uiv(this.addr,e)}function Ag(n,e,t){const i=this.cache,a=e.length,r=Yr(t,a);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Uo:s=bd;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function wg(n,e,t){const i=this.cache,a=e.length,r=Yr(t,a);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Td,r[s])}function Rg(n,e,t){const i=this.cache,a=e.length,r=Yr(t,a);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ad,r[s])}function Cg(n,e,t){const i=this.cache,a=e.length,r=Yr(t,a);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Ed,r[s])}function Pg(n){switch(n){case 5126:return ug;case 35664:return hg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}}class Ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Ec(n,e){n.seq.push(e),n.map[e.id]=e}function Ng(n,e,t){const i=n.name,a=i.length;for(Bs.lastIndex=0;;){const r=Bs.exec(i),s=Bs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Ec(t,c===void 0?new Lg(o,n,e):new Ig(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Dg(o),Ec(t,f)),t=f}}}class Dr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Ng(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function Tc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ug=37297;let Fg=0;function Og(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ac=new Ne;function Bg(n){Ze._getMatrix(Ac,Ze.workingColorSpace,n);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Or:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Og(n.getShaderSource(e),o)}else return r}function kg(n,e){const t=Bg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zg={[Vc]:"Linear",[Wc]:"Reinhard",[$c]:"Cineon",[Wo]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function Hg(n,e){const t=zg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new U;function Gg(){Ze.getLuminanceCoefficients(Tr);const n=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function Wg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $g(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ca(n){return n!==""}function Rc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(Xg,Yg)}const qg=new Map;function Yg(n,e){let t=He[e];if(t===void 0){const i=qg.get(e);if(i!==void 0)t=He[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fo(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(n){return n.replace(Kg,Zg)}function Zg(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Lc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jg={[Rr]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function Qg(n){return Jg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jg={[Ei]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function e0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":jg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const t0={[oa]:"ENVMAP_MODE_REFRACTION"};function n0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":t0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i0={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Fu]:"ENVMAP_BLENDING_ADD"};function a0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":i0[n.combine]||"ENVMAP_BLENDING_NONE"}function r0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function s0(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Qg(t),c=e0(t),d=n0(t),f=a0(t),u=r0(t),p=Vg(t),_=Wg(r),M=a.createProgram();let g,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ca).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ca).join(`
`),h.length>0&&(h+=`
`)):(g=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),h=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),Gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),s=Fo(s),s=Rc(s,t),s=Cc(s,t),o=Fo(o),o=Rc(o,t),o=Cc(o,t),s=Pc(s),o=Pc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const P=A+g+s,y=A+h+o,S=Tc(a,a.VERTEX_SHADER,P),T=Tc(a,a.FRAGMENT_SHADER,y);a.attachShader(M,S),a.attachShader(M,T),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function w(D){if(n.debug.checkShaderErrors){const O=a.getProgramInfoLog(M)||"",V=a.getShaderInfoLog(S)||"",N=a.getShaderInfoLog(T)||"",H=O.trim(),Z=V.trim(),$=N.trim();let ie=!0,q=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,M,S,T);else{const ee=wc(a,S,"vertex"),ne=wc(a,T,"fragment");et("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ee+`
`+ne)}else H!==""?Le("WebGLProgram: Program Info Log:",H):(Z===""||$==="")&&(q=!1);q&&(D.diagnostics={runnable:ie,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:$,prefix:h}})}a.deleteShader(S),a.deleteShader(T),v=new Dr(a,M),E=$g(a,M)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,Ug)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c0(e),t.set(e,i)),i}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function d0(n){return n===Ti||n===Nr||n===Ur}function u0(n,e,t,i,a,r){const s=new sd,o=new l0,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,E,R,D,O,V){const N=D.fog,H=O.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Z,$),q=ie&&ie.mapping===Xr?ie.image.height:null,ee=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Le("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=ne!==void 0?ne.length:0;let Ae=0;H.morphAttributes.position!==void 0&&(Ae=1),H.morphAttributes.normal!==void 0&&(Ae=2),H.morphAttributes.color!==void 0&&(Ae=3);let ht,Je,nt,Y;if(ee){const pt=Tn[ee];ht=pt.vertexShader,Je=pt.fragmentShader}else{ht=v.vertexShader,Je=v.fragmentShader;const pt=o.getVertexShaderStage(v),at=o.getFragmentShaderStage(v);o.update(v,pt,at),nt=pt.id,Y=at.id}const j=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Ve=!!v.map,Lt=!!v.matcap,We=!!ie,tt=!!v.aoMap,ft=!!v.lightMap,qe=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,Ft=!!v.displacementMap,tn=!!v.emissiveMap,bt=!!v.metalnessMap,Rt=!!v.roughnessMap,I=v.anisotropy>0,zt=v.clearcoat>0,st=v.dispersion>0,b=v.retroreflectivity>0,m=v.iridescence>0,F=v.sheen>0,G=v.transmission>0,X=I&&!!v.anisotropyMap,re=zt&&!!v.clearcoatMap,se=zt&&!!v.clearcoatNormalMap,K=zt&&!!v.clearcoatRoughnessMap,Q=m&&!!v.iridescenceMap,oe=m&&!!v.iridescenceThicknessMap,Ee=F&&!!v.sheenColorMap,ue=F&&!!v.sheenRoughnessMap,le=!!v.specularMap,Te=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Oe=G&&!!v.transmissionMap,L=G&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,de=v.alphaTest>0,me=!!v.alphaHash,te=!!v.extensions;let we=Pn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=n.toneMapping);const Se={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:Je,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Lt,envMap:We,envMapMode:We&&ie.mapping,envMapCubeUVHeight:q,aoMap:tt,lightMap:ft,bumpMap:qe,normalMap:Mt,displacementMap:Ft,emissiveMap:tn,normalMapObjectSpace:Mt&&v.normalMapType===ku,normalMapTangentSpace:Mt&&v.normalMapType===Io,packedNormalMap:Mt&&v.normalMapType===Io&&d0(v.normalMap.format),metalnessMap:bt,roughnessMap:Rt,anisotropy:I,anisotropyMap:X,clearcoat:zt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:K,dispersion:st,retroreflection:b,iridescence:m,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Te,specularIntensityMap:Ce,transmission:G,transmissionMap:Oe,thicknessMap:L,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Pa&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:me,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:tt&&_(v.aoMap.channel),lightMapUv:ft&&_(v.lightMap.channel),bumpMapUv:qe&&_(v.bumpMap.channel),normalMapUv:Mt&&_(v.normalMap.channel),displacementMapUv:Ft&&_(v.displacementMap.channel),emissiveMapUv:tn&&_(v.emissiveMap.channel),metalnessMapUv:bt&&_(v.metalnessMap.channel),roughnessMapUv:Rt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:le&&_(v.specularMap.channel),specularColorMapUv:Te&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:Oe&&_(v.transmissionMap.channel),thicknessMapUv:L&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Mt||I),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ve||J),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:tn&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function g(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(h(E,v),A(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function h(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function A(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function P(v){const E=p[v.type];let R;if(E){const D=Tn[E];R=wh.clone(D.uniforms)}else R=v.uniforms;return R}function y(v,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new s0(n,E,v,a),c.push(R),d.set(E,R)),R}function S(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:w}}function h0(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function f0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dc(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,g,h){let A=n[e];return A===void 0?(A={id:u.id,object:u,geometry:p,material:_,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},n[e]=A):(A.id=u.id,A.object=u,A.geometry=p,A.material=_,A.materialVariant=s(u),A.groupOrder=M,A.renderOrder=u.renderOrder,A.z=g,A.group=h),e++,A}function l(u,p,_,M,g,h,A){A.reversedDepth===!0&&(g=-g);const P=o(u,p,_,M,g,h);_.transmission>0?i.push(P):_.transparent===!0?a.push(P):t.push(P)}function c(u,p,_,M,g,h){const A=o(u,p,_,M,g,h);_.transmission>0?i.unshift(A):_.transparent===!0?a.unshift(A):t.unshift(A)}function d(u,p){t.length>1&&t.sort(u||f0),i.length>1&&i.sort(p||Ic),a.length>1&&a.sort(p||Ic)}function f(){for(let u=e,p=n.length;u<p;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:f,sort:d}}function p0(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Dc,n.set(i,[s])):a>=r.length?(s=new Dc,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function m0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function g0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _0=0;function v0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x0(n){const e=new m0,t=g0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const a=new U,r=new _t,s=new _t;function o(c){let d=0,f=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,_=0,M=0,g=0,h=0,A=0,P=0,y=0,S=0,T=0,w=0,v=0,E=0,R=0;c.sort(v0);for(let O=0,V=c.length;O<V;O++){const N=c[O],H=N.color,Z=N.intensity,$=N.distance;let ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ti?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=H.r*Z,f+=H.g*Z,u+=H.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],Z);R++}else if(N.isSunLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Re=ee.getViewportCount();for(let Ae=0;Ae<Re;Ae++)i.sunShadowMatrix[M+Ae]=ee.getMatrix(Ae),i.sunShadowCascade[M+Ae]=ee._cascadeData[Ae];M+=Re,_++}i.sun[p]=q,p++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=N.shadow.matrix,S++}i.directional[g]=q,g++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(H).multiplyScalar(Z),q.distance=$,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[A]=q;const ee=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,ee.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[A]=ee.matrix,N.castShadow){const ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[A]=ne,i.spotShadowMap[A]=ie,w++}A++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(H).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[P]=q,P++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[h]=ne,i.pointShadowMap[h]=ie,i.pointShadowMatrix[h]=N.shadow.matrix,T++}i.point[h]=q,h++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[y]=q,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==g||D.pointLength!==h||D.spotLength!==A||D.rectAreaLength!==P||D.hemiLength!==y||D.numSunShadows!==_||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==w||D.numSpotMaps!==v||D.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=g,i.spot.length=A,i.rectArea.length=P,i.point.length=h,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,D.sunLength=p,D.directionalLength=g,D.pointLength=h,D.spotLength=A,D.rectAreaLength=P,D.hemiLength=y,D.numSunShadows=_,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=w,D.numSpotMaps=v,D.numLightProbes=R,i.version=_0++)}function l(c,d){let f=0,u=0,p=0,_=0,M=0,g=0;const h=d.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){const y=c[A];if(y.isSunLight){const S=i.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),f++}else if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),u++}else if(y.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const S=i.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),s.identity(),r.copy(y.matrixWorld),r.premultiply(h),s.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),M++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function Nc(n){const e=new x0(n),t=[],i=[],a=[];function r(u){f.camera=u,t.length=0,i.length=0,a.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function y0(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Nc(n),e.set(a,[o])):r>=s.length?(o=new Nc(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`,b0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],E0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Uc=new _t,Ea=new U,ks=new U;function T0(n,e,t){let i=new nl;const a=new Fe,r=new Fe,s=new Tt,o=new Lh,l=new Ih,c={},d=t.maxTextureSize,f={[bi]:nn,[nn]:bi,[Vn]:Vn},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:M0,fragmentShader:S0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ut(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let h=this.type;this.render=function(T,w,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===gu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=h!==this.type;V&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=T.length;N<H;N++){const Z=T[N],$=Z.shadow;if($===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ie=$.getFrameExtents();a.multiply(ie),r.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/ie.x),a.x=r.x*ie.x,$.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/ie.y),a.y=r.y*ie.y,$.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=q,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===wa){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new vn(a.x,a.y,{format:Ti,type:Dn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Oa(a.x,a.y,Rn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=Yn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt}else Z.isPointLight?($.map=new Sd(a.x),$.map.depthTexture=new bh(a.x,In)):($.map=new vn(a.x,a.y),$.map.depthTexture=new Oa(a.x,a.y,In)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=Yn,this.type===Rr?($.map.depthTexture.compareFunction=q?Qo:Jo,$.map.depthTexture.minFilter=Wt,$.map.depthTexture.magFilter=Wt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==a.x||$.map.height!==a.y)&&$.map.setSize(a.x,a.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,v);for(let ne=0;ne<ee;ne++){const Re=$.getCamera(ne);if(Z.isPointLight){const Ae=$.camera,ht=$.matrix,Je=Z.distance||Ae.far;Je!==Ae.far&&(Ae.far=Je,Ae.updateProjectionMatrix()),Ea.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(Ea),ks.copy(Ae.position),ks.add(b0[ne]),Ae.up.copy(E0[ne]),Ae.lookAt(ks),Ae.updateMatrixWorld(),ht.makeTranslation(-Ea.x,-Ea.y,-Ea.z),Uc.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Uc,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ne),n.clear();else{ne===0&&(n.setRenderTarget($.map),n.clear());const Ae=$.getViewport(ne);s.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),O.viewport(s)}i=$.getFrustum(ne),y(w,v,Re,Z,this.type)}$.isPointLightShadow!==!0&&this.type===wa&&A($,v),$.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(E,R,D)};function A(T,w){const v=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(a.x,a.y,{format:Ti,type:Dn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,v,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,v,p,M,null)}function P(T,w,v,E){let R=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=R.uuid,V=w.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let H=N[V];H===void 0&&(H=R.clone(),N[V]=H,w.addEventListener("dispose",S)),R=H}if(R.visible=w.visible,R.wireframe=w.wireframe,E===wa?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=n.properties.get(R);O.light=v}return R}function y(T,w,v,E,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===wa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const V=e.update(T),N=T.material;if(Array.isArray(N)){const H=V.groups;for(let Z=0,$=H.length;Z<$;Z++){const ie=H[Z],q=N[ie.materialIndex];if(q&&q.visible){const ee=P(T,q,E,R);T.onBeforeShadow(n,T,w,v,V,ee,ie),n.renderBufferDirect(v,null,V,ee,T,ie),T.onAfterShadow(n,T,w,v,V,ee,ie)}}}else if(N.visible){const H=P(T,N,E,R);T.onBeforeShadow(n,T,w,v,V,H,null),n.renderBufferDirect(v,null,V,H,T,null),T.onAfterShadow(n,T,w,v,V,H,null)}}const O=T.children;for(let V=0,N=O.length;V<N;V++)y(O[V],w,v,E,R)}function S(T){T.target.removeEventListener("dispose",S);for(const v in c){const E=c[v],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function A0(n,e){function t(){let L=!1;const ce=new Tt;let J=null;const de=new Tt(0,0,0,0);return{setMask:function(me){J!==me&&!L&&(n.colorMask(me,me,me,me),J=me)},setLocked:function(me){L=me},setClear:function(me,te,we,Se,pt){pt===!0&&(me*=Se,te*=Se,we*=Se),ce.set(me,te,we,Se),de.equals(ce)===!1&&(n.clearColor(me,te,we,Se),de.copy(ce))},reset:function(){L=!1,J=null,de.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,J=null,de=null,me=null;return{setReversed:function(te){if(ce!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Se=me;me=null,this.setClear(Se)}},getReversed:function(){return ce},setTest:function(te){te?j(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(te){J!==te&&!L&&(n.depthMask(te),J=te)},setFunc:function(te){if(ce&&(te=Zu[te]),de!==te){switch(te){case Xs:n.depthFunc(n.NEVER);break;case qs:n.depthFunc(n.ALWAYS);break;case Ys:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case Ks:n.depthFunc(n.EQUAL);break;case Zs:n.depthFunc(n.GEQUAL);break;case Js:n.depthFunc(n.GREATER);break;case Qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=te}},setLocked:function(te){L=te},setClear:function(te){me!==te&&(me=te,ce&&(te=1-te),n.clearDepth(te))},reset:function(){L=!1,J=null,de=null,me=null,ce=!1}}}function a(){let L=!1,ce=null,J=null,de=null,me=null,te=null,we=null,Se=null,pt=null;return{setTest:function(at){L||(at?j(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(at){ce!==at&&!L&&(n.stencilMask(at),ce=at)},setFunc:function(at,fn,Mn){(J!==at||de!==fn||me!==Mn)&&(n.stencilFunc(at,fn,Mn),J=at,de=fn,me=Mn)},setOp:function(at,fn,Mn){(te!==at||we!==fn||Se!==Mn)&&(n.stencilOp(at,fn,Mn),te=at,we=fn,Se=Mn)},setLocked:function(at){L=at},setClear:function(at){pt!==at&&(n.clearStencil(at),pt=at)},reset:function(){L=!1,ce=null,J=null,de=null,me=null,te=null,we=null,Se=null,pt=null}}}const r=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},u={},p=new WeakMap,_=[],M=null,g=!1,h=null,A=null,P=null,y=null,S=null,T=null,w=null,v=new Ge(0,0,0),E=0,R=!1,D=null,O=null,V=null,N=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ie>=2);let ee=null,ne={};const Re=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),ht=new Tt().fromArray(Re),Je=new Tt().fromArray(Ae);function nt(L,ce,J,de){const me=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<J;we++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ce+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return te}const Y={};Y[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(n.DEPTH_TEST),s.setFunc(Da),qe(!1),Mt(Ll),j(n.CULL_FACE),tt(Xn);function j(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function xe(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function De(L,ce){return u[L]!==ce?(n.bindFramebuffer(L,ce),u[L]=ce,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(L,ce){let J=_,de=!1;if(L){J=p.get(ce),J===void 0&&(J=[],p.set(ce,J));const me=L.textures;if(J.length!==me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let te=0,we=me.length;te<we;te++)J[te]=n.COLOR_ATTACHMENT0+te;J.length=me.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function Ve(L){return M!==L?(n.useProgram(L),M=L,!0):!1}const Lt={[ji]:n.FUNC_ADD,[vu]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};Lt[yu]=n.MIN,Lt[Mu]=n.MAX;const We={[Su]:n.ZERO,[bu]:n.ONE,[Eu]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[Pu]:n.SRC_ALPHA_SATURATE,[Ru]:n.DST_COLOR,[Au]:n.DST_ALPHA,[Tu]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[Cu]:n.ONE_MINUS_DST_COLOR,[wu]:n.ONE_MINUS_DST_ALPHA,[Lu]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Du]:n.CONSTANT_ALPHA,[Nu]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(L,ce,J,de,me,te,we,Se,pt,at){if(L===Xn){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),L!==_u){if(L!==h||at!==R){if((A!==ji||S!==ji)&&(n.blendEquation(n.FUNC_ADD),A=ji,S=ji),at)switch(L){case Pa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Il:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Il:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dl:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}P=null,y=null,T=null,w=null,v.set(0,0,0),E=0,h=L,R=at}return}me=me||ce,te=te||J,we=we||de,(ce!==A||me!==S)&&(n.blendEquationSeparate(Lt[ce],Lt[me]),A=ce,S=me),(J!==P||de!==y||te!==T||we!==w)&&(n.blendFuncSeparate(We[J],We[de],We[te],We[we]),P=J,y=de,T=te,w=we),(Se.equals(v)===!1||pt!==E)&&(n.blendColor(Se.r,Se.g,Se.b,pt),v.copy(Se),E=pt),h=L,R=!1}function ft(L,ce){L.side===Vn?xe(n.CULL_FACE):j(n.CULL_FACE);let J=L.side===nn;ce&&(J=!J),qe(J),L.blending===Pa&&L.transparent===!1?tt(Xn):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(L){D!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),D=L)}function Mt(L){L!==pu?(j(n.CULL_FACE),L!==O&&(L===Ll?n.cullFace(n.BACK):L===mu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),O=L}function Ft(L){L!==V&&($&&n.lineWidth(L),V=L)}function tn(L,ce,J){L?(j(n.POLYGON_OFFSET_FILL),(N!==ce||H!==J)&&(N=ce,H=J,s.getReversed()&&(ce=-ce),n.polygonOffset(ce,J))):xe(n.POLYGON_OFFSET_FILL)}function bt(L){L?j(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Rt(L){L===void 0&&(L=n.TEXTURE0+Z-1),ee!==L&&(n.activeTexture(L),ee=L)}function I(L,ce,J){J===void 0&&(ee===null?J=n.TEXTURE0+Z-1:J=ee);let de=ne[J];de===void 0&&(de={type:void 0,texture:void 0},ne[J]=de),(de.type!==L||de.texture!==ce)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(L,ce||Y[L]),de.type=L,de.texture=ce)}function zt(){const L=ne[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function m(){try{n.texSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){et("WebGLState:",L)}}function se(){try{n.texStorage3D(...arguments)}catch(L){et("WebGLState:",L)}}function K(){try{n.texImage2D(...arguments)}catch(L){et("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){et("WebGLState:",L)}}function oe(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function Ee(L,ce){f[L]!==ce&&(n.pixelStorei(L,ce),f[L]=ce)}function ue(L){ht.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function le(L){Je.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Je.copy(L))}function Te(L,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let de=J.get(L);de===void 0&&(de=n.getUniformBlockIndex(ce,L.name),J.set(L,de))}function Ce(L,ce){const de=c.get(ce).get(L);l.get(ce)!==de&&(n.uniformBlockBinding(ce,de,L.__bindingPointIndex),l.set(ce,de))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},ee=null,ne={},u={},p=new WeakMap,_=[],M=null,g=!1,h=null,A=null,P=null,y=null,S=null,T=null,w=null,v=new Ge(0,0,0),E=0,R=!1,D=null,O=null,V=null,N=null,H=null,ht.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:j,disable:xe,bindFramebuffer:De,drawBuffers:_e,useProgram:Ve,setBlending:tt,setMaterial:ft,setFlipSided:qe,setCullFace:Mt,setLineWidth:Ft,setPolygonOffset:tn,setScissorTest:bt,activeTexture:Rt,bindTexture:I,unbindTexture:zt,compressedTexImage2D:st,compressedTexImage3D:b,texImage2D:K,texImage3D:Q,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:re,texStorage3D:se,texSubImage2D:m,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:ue,viewport:le,reset:Oe}}function w0(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap,f=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,m){return _?new OffscreenCanvas(b,m):Br("canvas")}function g(b,m,F){let G=1;const X=st(b);if((X.width>F||X.height>F)&&(G=F/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(G*X.width),se=Math.floor(G*X.height);u===void 0&&(u=M(re,se));const K=m?M(re,se):u;return K.width=re,K.height=se,K.getContext("2d").drawImage(b,0,0,re,se),Le("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+se+")."),K}else return"data"in b&&Le("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function h(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function P(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,m,F,G,X,re=!1){if(b!==null){if(n[b]!==void 0)return n[b];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8),F===n.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),F===n.SHORT&&se&&(K=se.R16_SNORM_EXT)),m===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),m===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8),F===n.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),F===n.SHORT&&se&&(K=se.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),m===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),m===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),m===n.RGB&&(F===n.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),F===n.SHORT&&se&&(K=se.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),m===n.RGBA){const Q=re?Or:Ze.getTransfer(X);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Q===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),F===n.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(b,m){let F;return b?m===null||m===In||m===Ua?F=n.DEPTH24_STENCIL8:m===Rn?F=n.DEPTH32F_STENCIL8:m===Na&&(F=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===In||m===Ua?F=n.DEPTH_COMPONENT24:m===Rn?F=n.DEPTH_COMPONENT32F:m===Na&&(F=n.DEPTH_COMPONENT16),F}function T(b,m){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==Wt?Math.log2(Math.max(m.width,m.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?m.mipmaps.length:1}function w(b){const m=b.target;m.removeEventListener("dispose",w),E(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&f.delete(m)}function v(b){const m=b.target;m.removeEventListener("dispose",v),D(m)}function E(b){const m=i.get(b);if(m.__webglInit===void 0)return;const F=b.source,G=p.get(F);if(G){const X=G[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(b),Object.keys(G).length===0&&p.delete(F)}i.remove(b)}function R(b){const m=i.get(b);n.deleteTexture(m.__webglTexture);const F=b.source,G=p.get(F);delete G[m.__cacheKey],s.memory.textures--}function D(b){const m=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(m.__webglFramebuffer[G]))for(let X=0;X<m.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(m.__webglFramebuffer[G][X]);else n.deleteFramebuffer(m.__webglFramebuffer[G]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[G])}else{if(Array.isArray(m.__webglFramebuffer))for(let G=0;G<m.__webglFramebuffer.length;G++)n.deleteFramebuffer(m.__webglFramebuffer[G]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let G=0;G<m.__webglColorRenderbuffer.length;G++)m.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[G]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const F=b.textures;for(let G=0,X=F.length;G<X;G++){const re=i.get(F[G]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),s.memory.textures--),i.remove(F[G])}i.remove(b)}let O=0;function V(){O=0}function N(){return O}function H(b){O=b}function Z(){const b=O;return b>=a.maxTextures&&Le("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,b}function $(b){const m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function ie(b,m){const F=i.get(b);if(b.isVideoTexture&&I(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const G=b.image;if(G===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,b,m);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+m)}function q(b,m){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){xe(F,b,m);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+m)}function ee(b,m){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){xe(F,b,m);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+m)}function ne(b,m){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){De(F,b,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+m)}const Re={[js]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},Ae={[kt]:n.NEAREST,[Ou]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[as]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},ht={[Hu]:n.NEVER,[Xu]:n.ALWAYS,[Gu]:n.LESS,[Jo]:n.LEQUAL,[Vu]:n.EQUAL,[Qo]:n.GEQUAL,[Wu]:n.GREATER,[$u]:n.NOTEQUAL};function Je(b,m){if(m.type===Rn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Wt||m.magFilter===as||m.magFilter===Ja||m.magFilter===Mi||m.minFilter===Wt||m.minFilter===as||m.minFilter===Ja||m.minFilter===Mi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Re[m.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Re[m.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Re[m.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ae[m.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ae[m.minFilter]),m.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ht[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===kt||m.minFilter!==Ja&&m.minFilter!==Mi||m.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function nt(b,m){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,m.addEventListener("dispose",w));const G=m.source;let X=p.get(G);X===void 0&&(X={},p.set(G,X));const re=$(m);if(re!==b.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),X[re].usedTimes++;const se=X[b.__cacheKey];se!==void 0&&(X[b.__cacheKey].usedTimes--,se.usedTimes===0&&R(m)),b.__cacheKey=re,b.__webglTexture=X[re].texture}return F}function Y(b,m,F){return Math.floor(Math.floor(b/F)/m)}function j(b,m,F,G){const re=b.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,F,G,m.data);else{re.sort((Ee,ue)=>Ee.start-ue.start);let se=0;for(let Ee=1;Ee<re.length;Ee++){const ue=re[se],le=re[Ee],Te=ue.start+ue.count,Ce=Y(le.start,m.width,4),Oe=Y(ue.start,m.width,4);le.start<=Te+1&&Ce===Oe&&Y(le.start+le.count-1,m.width,4)===Ce?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++se,re[se]=le)}re.length=se+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Ee=0,ue=re.length;Ee<ue;Ee++){const le=re[Ee],Te=Math.floor(le.start/4),Ce=Math.ceil(le.count/4),Oe=Te%m.width,L=Math.floor(Te/m.width),ce=Ce,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Oe,L,ce,J,F,G,m.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function xe(b,m,F){let G=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(G=n.TEXTURE_3D);const X=nt(b,m),re=m.source;t.bindTexture(G,b.__webglTexture,n.TEXTURE0+F);const se=i.get(re);if(re.version!==se.__version||X===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),de=m.colorSpace===oi?null:Ze.getPrimaries(m.colorSpace),me=m.colorSpace===oi||J===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let Q=g(m.image,!1,a.maxTextureSize);Q=zt(m,Q);const oe=r.convert(m.format,m.colorSpace),Ee=r.convert(m.type);let ue=y(m.internalFormat,oe,Ee,m.normalized,m.colorSpace,m.isVideoTexture);Je(G,m);let le;const Te=m.mipmaps,Ce=m.isVideoTexture!==!0,Oe=se.__version===void 0||X===!0,L=re.dataReady,ce=T(m,Q);if(m.isDepthTexture)ue=S(m.format===Si,m.type),Oe&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Ee,null));else if(m.isDataTexture)if(Te.length>0){Ce&&Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Te[0].width,Te[0].height);for(let J=0,de=Te.length;J<de;J++)le=Te[J],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,oe,Ee,le.data);m.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height),L&&j(m,Q,oe,Ee)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Ee,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Te[0].width,Te[0].height,Q.depth);for(let J=0,de=Te.length;J<de;J++)if(le=Te[J],m.format!==_n)if(oe!==null)if(Ce){if(L)if(m.layerUpdates.size>0){const me=fc(le.width,le.height,m.format,m.type);for(const te of m.layerUpdates){const we=le.data.subarray(te*me/le.data.BYTES_PER_ELEMENT,(te+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,te,le.width,le.height,1,oe,we)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,oe,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,le.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,oe,Ee,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,oe,Ee,le.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ce&&Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Te[0].width,Te[0].height);for(let J=0,de=Te.length;J<de;J++)le=Te[J],m.format!==_n?oe!==null?Ce?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,le.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,oe,Ee,le.data)}else if(m.isDataArrayTexture)if(Ce){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Q.width,Q.height,Q.depth),L)if(m.layerUpdates.size>0){const J=fc(Q.width,Q.height,m.format,m.type);for(const de of m.layerUpdates){const me=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,oe,Ee,me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(m.isData3DTexture)Ce?(Oe&&t.texStorage3D(n.TEXTURE_3D,ce,ue,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(m.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let me=0;me<ce;me++)t.texImage2D(n.TEXTURE_2D,me,ue,J,de,0,oe,Ee,null),J>>=1,de>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),f.add(m),J.onpaint=de=>{const me=de.changedElements;for(const te of f)me.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const me=n.RGBA,te=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,te,we,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&Oe){const J=st(Te[0]);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}for(let J=0,de=Te.length;J<de;J++)le=Te[J],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe,Ee,le):t.texImage2D(n.TEXTURE_2D,J,ue,oe,Ee,le);m.generateMipmaps=!1}else if(Ce){if(Oe){const J=st(Q);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ee,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,oe,Ee,Q);h(m)&&A(G),se.__version=re.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function De(b,m,F){if(m.image.length!==6)return;const G=nt(b,m),X=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const re=i.get(X);if(X.version!==re.__version||G===!0){t.activeTexture(n.TEXTURE0+F);const se=Ze.getPrimaries(Ze.workingColorSpace),K=m.colorSpace===oi?null:Ze.getPrimaries(m.colorSpace),Q=m.colorSpace===oi||se===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=m.isCompressedTexture||m.image[0].isCompressedTexture,Ee=m.image[0]&&m.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!oe&&!Ee?ue[te]=g(m.image[te],!0,a.maxCubemapSize):ue[te]=Ee?m.image[te].image:m.image[te],ue[te]=zt(m,ue[te]);const le=ue[0],Te=r.convert(m.format,m.colorSpace),Ce=r.convert(m.type),Oe=y(m.internalFormat,Te,Ce,m.normalized,m.colorSpace),L=m.isVideoTexture!==!0,ce=re.__version===void 0||G===!0,J=X.dataReady;let de=T(m,le);Je(n.TEXTURE_CUBE_MAP,m);let me;if(oe){L&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,le.width,le.height);for(let te=0;te<6;te++){me=ue[te].mipmaps;for(let we=0;we<me.length;we++){const Se=me[we];m.format!==_n?Te!==null?L?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Se.width,Se.height,0,Se.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Se.width,Se.height,Te,Ce,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Se.width,Se.height,0,Te,Ce,Se.data)}}}else{if(me=m.mipmaps,L&&ce){me.length>0&&de++;const te=st(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Te,Ce,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,ue[te].width,ue[te].height,0,Te,Ce,ue[te].data);for(let we=0;we<me.length;we++){const pt=me[we].image[te].image;L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,pt.width,pt.height,Te,Ce,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,pt.width,pt.height,0,Te,Ce,pt.data)}}else{L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,Ce,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Te,Ce,ue[te]);for(let we=0;we<me.length;we++){const Se=me[we];L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Te,Ce,Se.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,Te,Ce,Se.image[te])}}}h(m)&&A(n.TEXTURE_CUBE_MAP),re.__version=X.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function _e(b,m,F,G,X,re){const se=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Q=y(F.internalFormat,se,K,F.normalized,F.colorSpace),oe=i.get(m),Ee=i.get(F);if(Ee.__renderTarget=m,!oe.__hasExternalTextures){const ue=Math.max(1,m.width>>re),le=Math.max(1,m.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,Q,ue,le,m.depth,0,se,K,null):t.texImage2D(X,re,Q,ue,le,0,se,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Rt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,Ee.__webglTexture,0,bt(m)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,Ee.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(b,m,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),m.depthBuffer){const G=m.depthTexture,X=G&&G.isDepthTexture?G.type:null,re=S(m.stencilBuffer,X),se=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Rt(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(m),re,m.width,m.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(m),re,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,re,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,b)}else{const G=m.textures;for(let X=0;X<G.length;X++){const re=G[X],se=r.convert(re.format,re.colorSpace),K=r.convert(re.type),Q=y(re.internalFormat,se,K,re.normalized,re.colorSpace);Rt(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(m),Q,m.width,m.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(m),Q,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,Q,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(b,m,F){const G=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(m.depthTexture);if(X.__renderTarget=m,(!X.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Je(n.TEXTURE_CUBE_MAP,m.depthTexture);const oe=r.convert(m.depthTexture.format),Ee=r.convert(m.depthTexture.type);let ue;m.depthTexture.format===Yn?ue=n.DEPTH_COMPONENT24:m.depthTexture.format===Si&&(ue=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,m.width,m.height,0,oe,Ee,null)}}else ie(m.depthTexture,0);const re=X.__webglTexture,se=bt(m),K=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Q=m.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Yn)Rt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,re,0);else if(m.depthTexture.format===Si)Rt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(b){const m=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),G){const X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=G}if(b.depthTexture&&!m.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Lt(m.__webglFramebuffer[G],b,G);else{const G=b.texture.mipmaps;G&&G.length>0?Lt(m.__webglFramebuffer[0],b,0):Lt(m.__webglFramebuffer,b,0)}else if(F){m.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[G]),m.__webglDepthbuffer[G]===void 0)m.__webglDepthbuffer[G]=n.createRenderbuffer(),Ve(m.__webglDepthbuffer[G],b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=m.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const G=b.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ve(m.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(b,m,F){const G=i.get(b);m!==void 0&&_e(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&We(b)}function ft(b){const m=b.texture,F=i.get(b),G=i.get(m);b.addEventListener("dispose",v);const X=b.textures,re=b.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=m.version,s.memory.textures++),re){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<m.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=n.createFramebuffer()}else F.__webglFramebuffer[K]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)F.__webglFramebuffer[K]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(se)for(let K=0,Q=X.length;K<Q;K++){const oe=i.get(X[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),s.memory.textures++)}if(b.samples>0&&Rt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){const Q=X[K];F.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const oe=r.convert(Q.format,Q.colorSpace),Ee=r.convert(Q.type),ue=y(Q.internalFormat,oe,Ee,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),le=bt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,F.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Je(n.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)_e(F.__webglFramebuffer[K][Q],b,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else _e(F.__webglFramebuffer[K],b,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(m)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,Q=X.length;K<Q;K++){const oe=X[K],Ee=i.get(oe);let ue=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),Je(ue,oe),_e(F.__webglFramebuffer,b,oe,n.COLOR_ATTACHMENT0+K,ue,0),h(oe)&&A(ue)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),Je(K,m),m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)_e(F.__webglFramebuffer[Q],b,m,n.COLOR_ATTACHMENT0,K,Q);else _e(F.__webglFramebuffer,b,m,n.COLOR_ATTACHMENT0,K,0);h(m)&&A(K),t.unbindTexture()}b.depthBuffer&&We(b)}function qe(b){const m=b.textures;for(let F=0,G=m.length;F<G;F++){const X=m[F];if(h(X)){const re=P(b),se=i.get(X).__webglTexture;t.bindTexture(re,se),A(re),t.unbindTexture()}}}const Mt=[],Ft=[];function tn(b){if(b.samples>0){if(Rt(b)===!1){const m=b.textures,F=b.width,G=b.height;let X=n.COLOR_BUFFER_BIT;const re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(b),K=m.length>1;if(K)for(let oe=0;oe<m.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let oe=0;oe<m.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);const Ee=i.get(m[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,X,n.NEAREST),l===!0&&(Mt.length=0,Ft.length=0,Mt.push(n.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Mt.push(re),Ft.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<m.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);const Ee=i.get(m[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const m=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function bt(b){return Math.min(a.maxSamples,b.samples)}function Rt(b){const m=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function I(b){const m=s.render.frame;d.get(b)!==m&&(d.set(b,m),b.update())}function zt(b,m){const F=b.colorSpace,G=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Fr&&F!==oi&&(Ze.getTransfer(F)===ot?(G!==_n||X!==on)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",F)),m}function st(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=tt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R0(n,e){function t(i,a=oi){let r;const s=Ze.getTransfer(a);if(i===on)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zc)return n.BYTE;if(i===Jc)return n.SHORT;if(i===Na)return n.UNSIGNED_SHORT;if(i===$o)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===ed)return n.ALPHA;if(i===td)return n.RGB;if(i===_n)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===nd)return n.RED;if(i===Yo)return n.RED_INTEGER;if(i===Ti)return n.RG;if(i===Ko)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===Cr||i===Pr||i===Lr||i===Ir)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===so||i===oo||i===lo||i===co||i===Nr||i===uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ro||i===so)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return r.COMPRESSED_R11_EAC;if(i===co)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Nr)return r.COMPRESSED_RG11_EAC;if(i===uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===Mo||i===So||i===bo||i===Eo||i===To)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ho)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===So)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===wo||i===Ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ao)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Co||i===Po||i===Ur||i===Lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends Pi{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",g=new L0,h={},A=t.getContextAttributes();let P=null,y=null;const S=[],T=[],w=new Fe;let v=null,E=null;const R=new sn;R.viewport=new Tt;const D=new sn;D.viewport=new Tt;const O=[R,D],V=new Bh;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=S[Y];return j===void 0&&(j=new fs,S[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=S[Y];return j===void 0&&(j=new fs,S[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=S[Y];return j===void 0&&(j=new fs,S[Y]=j),j.getHandSpace()};function Z(Y){const j=T.indexOf(Y.inputSource);if(j===-1)return;const xe=S[j];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||s),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<S.length;Y++){const j=T[Y];j!==null&&(T[Y]=null,S[Y].disconnect(j))}N=null,H=null,g.reset();for(const Y in h)delete h[Y];if(e.setRenderTarget(P),p=null,u=null,f=null,a=null,y=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),E!==null){const Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",$),a.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,_e=null;A.depth&&(_e=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=A.stencil?Si:Yn,De=A.stencil?Ua:In);const Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ve),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new vn(u.textureWidth,u.textureHeight,{format:_n,type:on,depthTexture:new Oa(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new vn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:on,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),nt.setContext(a),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(Y){for(let j=0;j<Y.removed.length;j++){const xe=Y.removed[j],De=T.indexOf(xe);De>=0&&(T[De]=null,S[De].disconnect(xe))}for(let j=0;j<Y.added.length;j++){const xe=Y.added[j];let De=T.indexOf(xe);if(De===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=T.length){T.push(xe),De=Ve;break}else if(T[Ve]===null){T[Ve]=xe,De=Ve;break}if(De===-1)break}const _e=S[De];_e&&_e.connect(xe)}}const q=new U,ee=new U;function ne(Y,j,xe){q.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const De=q.distanceTo(ee),_e=j.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,Lt=_e[14]/(_e[10]-1),We=_e[14]/(_e[10]+1),tt=(_e[9]+1)/_e[5],ft=(_e[9]-1)/_e[5],qe=(_e[8]-1)/_e[0],Mt=(Ve[8]+1)/Ve[0],Ft=Lt*qe,tn=Lt*Mt,bt=De/(-qe+Mt),Rt=bt*-qe;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=Lt+bt,zt=We+bt,st=Ft-Rt,b=tn+(De-Rt),m=tt*We/zt*I,F=ft*We/zt*I;Y.projectionMatrix.makePerspective(st,b,m,F,I,zt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Re(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let j=Y.near,xe=Y.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),V.near=D.near=R.near=j,V.far=D.far=R.far=xe,(N!==V.near||H!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,H=V.far),V.layers.mask=Y.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const De=Y.parent,_e=V.cameras;Re(V,De);for(let Ve=0;Ve<_e.length;Ve++)Re(_e[Ve],De);_e.length===2?ne(V,R,D):V.projectionMatrix.copy(R.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ae(Y,V,De)};function Ae(Y,j,xe){xe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Do*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return h[Y]};let ht=null;function Je(Y,j){if(d=j.getViewerPose(c||s),_=j,d!==null){const xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let De=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let We=0;We<xe.length;We++){const tt=xe[We];let ft=null;if(p!==null)ft=p.getViewport(tt);else{const Mt=f.getViewSubImage(u,tt);ft=Mt.viewport,We===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let qe=O[We];qe===void 0&&(qe=new sn,qe.layers.enable(We),qe.viewport=new Tt,O[We]=qe),qe.matrix.fromArray(tt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(tt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ft.x,ft.y,ft.width,ft.height),We===0&&(V.matrix.copy(qe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(qe)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const We=f.getDepthInformation(xe[0]);We&&We.isValid&&We.texture&&g.init(We,a.renderState)}if(_e&&_e.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<xe.length;We++){const tt=xe[We].camera;if(tt){let ft=h[tt];ft||(ft=new gd,h[tt]=ft);const qe=f.getCameraImage(tt);ft.sourceTexture=qe}}}}for(let xe=0;xe<S.length;xe++){const De=T[xe],_e=S[xe];De!==null&&_e!==void 0&&_e.update(De,j,c||s)}ht&&ht(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const nt=new yd;nt.setAnimationLoop(Je),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const D0=new _t,wd=new Ne;wd.set(-1,0,0,0,1,0,0,0,1);function N0(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,_d(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function a(g,h,A,P,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(r(g,h),_(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),M(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(s(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,A,P):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===nn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===nn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const A=e.get(h),P=A.envMap,y=A.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(wd),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function s(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,A,P){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*A,g.scale.value=P*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,A){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const A=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function U0(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=a[y.id];T===void 0&&(g(y),T=d(y),a[y.id]=T,y.addEventListener("dispose",A));const w=S.program;i.updateUBOMapping(y,w);const v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function d(y){const S=f();y.__bindingPointIndex=S;const T=n.createBuffer(),w=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=a[y.id],T=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,E=T.length;v<E;v++){const R=T[v];if(Array.isArray(R))for(let D=0,O=R.length;D<O;D++)p(R[D],v,D,w);else p(R,v,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,w){if(M(y,S,T,w)===!0){const v=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){const O=E[D],V=h(O);_(O,y.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function _(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function M(y,S,T,w){const v=y.value,E=S+"_"+T;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{const R=w[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(y){const S=y.uniforms;let T=0;const w=16;for(let E=0,R=S.length;E<R;E++){const D=Array.isArray(S[E])?S[E]:[S[E]];for(let O=0,V=D.length;O<V;O++){const N=D[O],H=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,$=H.length;Z<$;Z++){const ie=H[Z],q=h(ie),ee=T%w,ne=ee%q.boundary,Re=ee+ne;T+=ne,Re!==0&&w-Re<q.storage&&(T+=w-Re),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=q.storage}}}const v=T%w;return v>0&&(T+=w-v),y.__size=T,y.__cache={},this}function h(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){const S=y.target;S.removeEventListener("dispose",A);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const y in a)n.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:l,update:c,dispose:P}}const F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function O0(){return En===null&&(En=new Mh(F0,16,16,Ti,Dn),En.name="DFG_LUT",En.minFilter=Wt,En.magFilter=Wt,En.wrapS=$n,En.wrapT=$n,En.generateMipmaps=!1,En.needsUpdate=!0),En}class B0{constructor(e={}){const{canvas:t=Yu(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=on}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const M=p,g=new Set([Zo,Ko,Yo]),h=new Set([on,In,Na,Ua,Xo,qo]),A=new Uint32Array(4),P=new Int32Array(4),y=new U;let S=null,T=null;const w=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,O=null,V=null,N=null,H=null;this._outputColorSpace=Jt;let Z=0,$=0,ie=null,q=-1,ee=null;const ne=new Tt,Re=new Tt;let Ae=null;const ht=new Ge(0);let Je=0,nt=t.width,Y=t.height,j=1,xe=null,De=null;const _e=new Tt(0,0,nt,Y),Ve=new Tt(0,0,nt,Y);let Lt=!1;const We=new nl;let tt=!1,ft=!1;const qe=new _t,Mt=new U,Ft=new Tt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Rt(){return ie===null?j:1}let I=i;function zt(x,C){return t.getContext(x,C)}let st,b,m,F,G,X,re,se,K,Q,oe,Ee,ue,le,Te,Ce,Oe,L,ce,J,de,me,te;try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",fn,!1),I===null){const C="webgl2";if(I=zt(C,x),I===null)throw zt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(x){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),et("WebGLRenderer: "+x.message),x}function we(){st=new Om(I),st.init(),de=new R0(I,st),b=new wm(I,st,e,de),m=new A0(I,st),b.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),V=I.createFramebuffer(),N=I.createFramebuffer(),H=I.createFramebuffer(),F=new zm(I),G=new h0,X=new w0(I,st,m,G,b,de,F),re=new Fm(R),se=new Hh(I),me=new Tm(I,se),K=new Bm(I,se,F,me),Q=new Gm(I,K,se,me,F),L=new Hm(I,b,X),Te=new Rm(G),oe=new u0(R,re,st,b,me,Te),Ee=new N0(R,G),ue=new p0,le=new y0(st),Oe=new Em(R,re,m,Q,_,l),Ce=new T0(R,Q,b),te=new U0(I,F,b,m),ce=new Am(I,st,F),J=new km(I,st,F),F.programs=oe.programs,R.capabilities=b,R.extensions=st,R.properties=G,R.renderLists=ue,R.shadowMap=Ce,R.state=m,R.info=F}M!==on&&(E=new Wm(M,t.width,t.height,o,a,r));const Se=new I0(R,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(nt,Y,!1))},this.getSize=function(x){return x.set(nt,Y)},this.setSize=function(x,C,W=!0){if(Se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=x,Y=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),W===!0&&(t.style.width=x+"px",t.style.height=C+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(nt*j,Y*j).floor()},this.setDrawingBufferSize=function(x,C,W){nt=x,Y=C,j=W,t.width=Math.floor(x*W),t.height=Math.floor(C*W),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(M===on){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,C,W,k){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,C,W,k),m.viewport(ne.copy(_e).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,C,W,k){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,C,W,k),m.scissor(Re.copy(Ve).multiplyScalar(j).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(x){m.setScissorTest(Lt=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,W=!0){let k=0;if(x){let z=!1;if(ie!==null){const pe=ie.texture.format;z=g.has(pe)}if(z){const pe=ie.texture.type,ve=h.has(pe),fe=Oe.getClearColor(),ye=Oe.getClearAlpha(),be=fe.r,ze=fe.g,$e=fe.b;ve?(A[0]=be,A[1]=ze,A[2]=$e,A[3]=ye,I.clearBufferuiv(I.COLOR,0,A)):(P[0]=be,P[1]=ze,P[2]=$e,P[3]=ye,I.clearBufferiv(I.COLOR,0,P))}else k|=I.COLOR_BUFFER_BIT}C&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Oe.dispose(),ue.dispose(),le.dispose(),G.dispose(),re.dispose(),Q.dispose(),me.dispose(),te.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Sl),Se.removeEventListener("sessionend",bl),pi.stop()};function pt(x){x.preventDefault(),kr("WebGLRenderer: Context Lost."),D=!0}function at(){kr("WebGLRenderer: Context Restored."),D=!1;const x=F.autoReset,C=Ce.enabled,W=Ce.autoUpdate,k=Ce.needsUpdate,z=Ce.type;we(),F.autoReset=x,Ce.enabled=C,Ce.autoUpdate=W,Ce.needsUpdate=k,Ce.type=z}function fn(x){et("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Mn(x){const C=x.target;C.removeEventListener("dispose",Mn),au(C)}function au(x){ru(x),G.remove(x)}function ru(x){const C=G.get(x).programs;C!==void 0&&(C.forEach(function(W){oe.releaseProgram(W)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,W,k,z,pe){C===null&&(C=tn);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=lu(x,C,W,k,z);m.setMaterial(k,ve);let ye=W.index,be=1;if(k.wireframe===!0){if(ye=K.getWireframeAttribute(W),ye===void 0)return;be=2}const ze=W.drawRange,$e=W.attributes.position;let Me=ze.start*be,rt=(ze.start+ze.count)*be;pe!==null&&(Me=Math.max(Me,pe.start*be),rt=Math.min(rt,(pe.start+pe.count)*be)),ye!==null?(Me=Math.max(Me,0),rt=Math.min(rt,ye.count)):$e!=null&&(Me=Math.max(Me,0),rt=Math.min(rt,$e.count));const Ct=rt-Me;if(Ct<0||Ct===1/0)return;me.setup(z,k,fe,W,ye);let xt,dt=ce;if(ye!==null&&(xt=se.get(ye),dt=J,dt.setIndex(xt)),z.isMesh)k.wireframe===!0?(m.setLineWidth(k.wireframeLinewidth*Rt()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(z.isLine){let Ht=k.linewidth;Ht===void 0&&(Ht=1),m.setLineWidth(Ht*Rt()),z.isLineSegments?dt.setMode(I.LINES):z.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else z.isPoints?dt.setMode(I.POINTS):z.isSprite&&dt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ht=z._multiDrawStarts,ge=z._multiDrawCounts,Yt=z._multiDrawCount,Qe=ye?se.get(ye).bytesPerElement:1,ln=G.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<Yt;Sn++)ln.setValue(I,"_gl_DrawID",Sn),dt.render(Ht[Sn]/Qe,ge[Sn])}else if(z.isInstancedMesh)dt.renderInstances(Me,Ct,z.count);else if(W.isInstancedBufferGeometry){const Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Ht);dt.renderInstances(Me,Ct,ge)}else dt.render(Me,Ct)};function Ml(x,C,W,k){O!==null&&x.isNodeMaterial&&O.setObject(k,x),tt===!0&&Te.setState(x,W,!1),x.transparent===!0&&x.side===Vn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,Za(x,C,k),x.side=bi,x.needsUpdate=!0,Za(x,C,k),x.side=Vn):Za(x,C,k)}this.compile=function(x,C,W=null){W===null&&(W=x),O!==null&&O.renderStart(x,C,W),T=le.get(W),T.init(C),v.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==W&&x.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ft=this.localClippingEnabled,tt=Te.init(this.clippingPlanes,ft),tt===!0&&Te.setGlobalState(this.clippingPlanes,C),O!==null&&Ce.render(T.state.shadowsArray,W,C);const k=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];Ml(fe,W,C,z),k.add(fe)}else Ml(pe,W,C,z),k.add(pe)}),T=v.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(x,C,W=null){const k=this.compile(x,C,W);return new Promise(z=>{function pe(){if(k.forEach(function(ve){const ye=G.get(ve).currentProgram;(ye===void 0||ye.isReady())&&k.delete(ve)}),k.size===0){z(x);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let es=null;function su(x){es&&es(x)}function Sl(){pi.stop()}function bl(){pi.start()}const pi=new yd;pi.setAnimationLoop(su),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(x){es=x,Se.setAnimationLoop(x),x===null?pi.stop():pi.start()},Se.addEventListener("sessionstart",Sl),Se.addEventListener("sessionend",bl),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(x,C);const W=Se.enabled===!0&&Se.isPresenting===!0,k=E!==null&&(ie===null||W)&&E.begin(R,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(C),C=Se.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,C,ie),T=le.get(x,v.length),T.init(C),T.state.textureUnits=X.getTextureUnits(),v.push(T),qe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),We.setFromProjectionMatrix(qe,Cn,C.reversedDepth),ft=this.localClippingEnabled,tt=Te.init(this.clippingPlanes,ft),S=ue.get(x,w.length),S.init(),w.push(S),Se.enabled===!0&&Se.isPresenting===!0){const ve=R.xr.getDepthSensingMesh();ve!==null&&ts(ve,C,-1/0,R.sortObjects)}ts(x,C,0,R.sortObjects),S.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(xe,De),bt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,bt&&Oe.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Te.beginShadows();const z=T.state.shadowsArray;if(Ce.render(z,x,C),tt===!0&&Te.endShadows(),(k&&E.hasRenderPass())===!1){const ve=S.opaque,fe=S.transmissive;if(T.setupLights(),C.isArrayCamera){const ye=C.cameras;if(fe.length>0)for(let be=0,ze=ye.length;be<ze;be++){const $e=ye[be];Tl(ve,fe,x,$e)}bt&&Oe.render(x);for(let be=0,ze=ye.length;be<ze;be++){const $e=ye[be];El(S,x,$e,$e.viewport)}}else fe.length>0&&Tl(ve,fe,x,C),bt&&Oe.render(x),El(S,x,C)}ie!==null&&$===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),k&&E.end(R),x.isScene===!0&&x.onAfterRender(R,x,C),me.resetDefaultState(),q=-1,ee=null,v.pop(),v.length>0?(T=v[v.length-1],X.setTextureUnits(T.state.textureUnits),tt===!0&&Te.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,O!==null&&O.renderEnd()};function ts(x,C,W,k){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(We)){k&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(qe);const ve=Q.update(x),fe=x.material;fe.visible&&S.push(x,ve,fe,W,Ft.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(We))){const ve=Q.update(x),fe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ft.copy(ve.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(qe)),Array.isArray(fe)){const ye=ve.groups;for(let be=0,ze=ye.length;be<ze;be++){const $e=ye[be],Me=fe[$e.materialIndex];Me&&Me.visible&&S.push(x,ve,Me,W,Ft.z,$e,C)}}else fe.visible&&S.push(x,ve,fe,W,Ft.z,null,C)}}const pe=x.children;for(let ve=0,fe=pe.length;ve<fe;ve++)ts(pe[ve],C,W,k)}function El(x,C,W,k){const{opaque:z,transmissive:pe,transparent:ve}=x;T.setupLightsView(W),tt===!0&&Te.setGlobalState(R.clippingPlanes,W),k&&m.viewport(ne.copy(k)),z.length>0&&Ka(z,C,W),pe.length>0&&Ka(pe,C,W),ve.length>0&&Ka(ve,C,W),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Tl(x,C,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Me=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new vn(1,1,{generateMipmaps:!0,type:Me?Dn:on,minFilter:Mi,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const pe=T.state.transmissionRenderTarget[k.id],ve=k.viewport||ne;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const fe=R.getRenderTarget(),ye=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(ht),Je=R.getClearAlpha(),Je<1&&R.setClearColor(16777215,.5),R.clear(),bt&&Oe.render(W);const ze=R.toneMapping;R.toneMapping=Pn;const $e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),tt===!0&&Te.setGlobalState(R.clippingPlanes,k),Ka(x,W,k),X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let rt=0,Ct=C.length;rt<Ct;rt++){const xt=C[rt],{object:dt,geometry:Ht,material:ge,group:Yt}=xt;if(ge.side===Vn&&dt.layers.test(k.layers)){const Qe=ge.side;ge.side=nn,ge.needsUpdate=!0,Al(dt,W,k,Ht,ge,Yt),ge.side=Qe,ge.needsUpdate=!0,Me=!0}}Me===!0&&(X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe))}R.setRenderTarget(fe,ye,be),R.setClearColor(ht,Je),$e!==void 0&&(k.viewport=$e),R.toneMapping=ze}function Ka(x,C,W){const k=C.isScene===!0?C.overrideMaterial:null;for(let z=0,pe=x.length;z<pe;z++){const ve=x[z],{object:fe,geometry:ye,group:be}=ve;let ze=ve.material;ze.allowOverride===!0&&k!==null&&(ze=k),fe.layers.test(W.layers)&&Al(fe,C,W,ye,ze,be)}}function Al(x,C,W,k,z,pe){O!==null&&z.isNodeMaterial&&O.setObject(x,z),x.onBeforeRender(R,C,W,k,z,pe),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(R,C,W,k,x,pe),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,R.renderBufferDirect(W,C,k,z,x,pe),z.side=bi,z.needsUpdate=!0,R.renderBufferDirect(W,C,k,z,x,pe),z.side=Vn):R.renderBufferDirect(W,C,k,z,x,pe),x.onAfterRender(R,C,W,k,z,pe)}function Za(x,C,W){C.isScene!==!0&&(C=tn);const k=G.get(x),z=T.state.lights,pe=T.state.shadowsArray,ve=z.state.version,fe=oe.getParameters(x,z.state,pe,C,W,T.state.lightProbeGridArray),ye=oe.getProgramCacheKey(fe);let be=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k.fog=C.fog;const ze=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=re.get(x.envMap||k.environment,ze),k.envMapRotation=k.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",Mn),be=new Map,k.programs=be);let $e=be.get(ye);if($e!==void 0){if(k.currentProgram===$e&&k.lightsStateVersion===ve)return Rl(x,fe),$e}else fe.uniforms=oe.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,W,fe),x.onBeforeCompile(fe,R),$e=oe.acquireProgram(fe,ye),be.set(ye,$e),k.uniforms=fe.uniforms;const Me=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=Te.uniform),Rl(x,fe),k.needsLights=du(x),k.lightsStateVersion=ve,k.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=$e,k.uniformsList=null,$e}function wl(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Dr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Rl(x,C){const W=G.get(x);W.outputColorSpace=C.outputColorSpace,W.batching=C.batching,W.batchingColor=C.batchingColor,W.instancing=C.instancing,W.instancingColor=C.instancingColor,W.instancingMorph=C.instancingMorph,W.skinning=C.skinning,W.morphTargets=C.morphTargets,W.morphNormals=C.morphNormals,W.morphColors=C.morphColors,W.morphTargetsCount=C.morphTargetsCount,W.numClippingPlanes=C.numClippingPlanes,W.numIntersection=C.numClipIntersection,W.vertexAlphas=C.vertexAlphas,W.vertexTangents=C.vertexTangents,W.toneMapping=C.toneMapping}function ou(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let W=0,k=x.length;W<k;W++){const z=x[W];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function lu(x,C,W,k,z){C.isScene!==!0&&(C=tn),X.resetTextureUnits();const pe=C.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?C.environment:null,fe=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,be=re.get(k.envMap||ve,ye),ze=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let xt=Pn;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xt=R.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ht=dt!==void 0?dt.length:0,ge=G.get(k),Yt=T.state.lights;if(tt===!0&&(ft===!0||x!==ee)){const mt=x===ee&&k.id===q;Te.setState(k,x,mt)}let Qe=!1;k.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Yt.state.version||ge.outputColorSpace!==fe||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==be||k.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==ze||ge.vertexTangents!==$e||ge.morphTargets!==Me||ge.morphNormals!==rt||ge.morphColors!==Ct||ge.toneMapping!==xt||ge.morphTargetsCount!==Ht||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=k.version);let ln=ge.currentProgram;Qe===!0&&(ln=Za(k,C,z),O&&k.isNodeMaterial&&O.onUpdateProgram(k,ln,ge));let Sn=!1,Zn=!1,Ii=!1;const lt=ln.getUniforms(),wt=ge.uniforms;if(m.useProgram(ln.program)&&(Sn=!0,Zn=!0,Ii=!0),k.id!==q&&(q=k.id,Zn=!0),ge.needsLights){const mt=ou(T.state.lightProbeGridArray,z);ge.lightProbeGrid!==mt&&(ge.lightProbeGrid=mt,Zn=!0)}if(Sn||ee!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",x.projectionMatrix),lt.setValue(I,"viewMatrix",x.matrixWorldInverse);const Qn=lt.map.cameraPosition;Qn!==void 0&&Qn.setValue(I,Mt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,Zn=!0,Ii=!0)}if(ge.needsLights&&(Yt.state.sunShadowMap.length>0&&lt.setValue(I,"sunShadowMap",Yt.state.sunShadowMap,X),Yt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",Yt.state.directionalShadowMap,X),Yt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",Yt.state.spotShadowMap,X),Yt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",Yt.state.pointShadowMap,X)),z.isSkinnedMesh){lt.setOptional(I,z,"bindMatrix"),lt.setOptional(I,z,"bindMatrixInverse");const mt=z.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),lt.setValue(I,"boneTexture",mt.boneTexture,X))}z.isBatchedMesh&&(lt.setOptional(I,z,"batchingTexture"),lt.setValue(I,"batchingTexture",z._matricesTexture,X),lt.setOptional(I,z,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",z._indirectTexture,X),lt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",z._colorsTexture,X));const Jn=W.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&L.update(z,W,ln),(Zn||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,lt.setValue(I,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&C.environment!==null&&(wt.envMapIntensity.value=C.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=O0()),Zn){if(lt.setValue(I,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&cu(wt,Ii),pe&&k.fog===!0&&Ee.refreshFogUniforms(wt,pe),Ee.refreshMaterialUniforms(wt,k,j,Y,T.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){const mt=ge.lightProbeGrid;wt.probesSH.value=mt.texture,wt.probesMin.value.copy(mt.boundingBox.min),wt.probesMax.value.copy(mt.boundingBox.max),wt.probesResolution.value.copy(mt.resolution)}Dr.upload(I,wl(ge),wt,X)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Dr.upload(I,wl(ge),wt,X),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(I,"center",z.center),lt.setValue(I,"modelViewMatrix",z.modelViewMatrix),lt.setValue(I,"normalMatrix",z.normalMatrix),lt.setValue(I,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const mt=k.uniformsGroups;for(let Qn=0,Di=mt.length;Qn<Di;Qn++){const Pl=mt[Qn];te.update(Pl,ln),te.bind(Pl,ln)}}return ln}function cu(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function du(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,C,W){const k=G.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=C,G.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const W=G.get(x);W.__webglFramebuffer=C,W.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,W=0){ie=x,Z=C,$=W;let k=null,z=!1,pe=!1;if(x){const fe=G.get(x);if(fe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(x.viewport),Re.copy(x.scissor),Ae=x.scissorTest,m.viewport(ne),m.scissor(Re),m.setScissorTest(Ae),q=-1;return}else if(fe.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(fe.__hasExternalTextures)X.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ze=x.depthTexture;if(fe.__boundDepthTexture!==ze){if(ze!==null&&G.has(ze)&&(x.width!==ze.image.width||x.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const be=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[C])?k=be[C][W]:k=be[C],z=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?k=G.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[W]:k=be,ne.copy(x.viewport),Re.copy(x.scissor),Ae=x.scissorTest}else ne.copy(_e).multiplyScalar(j).floor(),Re.copy(Ve).multiplyScalar(j).floor(),Ae=Lt;if(W!==0&&(k=V),m.bindFramebuffer(I.FRAMEBUFFER,k)&&m.drawBuffers(x,k),m.viewport(ne),m.scissor(Re),m.setScissorTest(Ae),z){const fe=G.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,W)}else if(pe){const fe=C;for(let ye=0;ye<x.textures.length;ye++){const be=G.get(x.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,be.__webglTexture,W,fe)}}else if(x!==null&&W!==0){const fe=G.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,W)}q=-1};function Cl(x){const C=G.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=b.textureFormatReadable(x.format),C.__typeReadable=b.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,W,k,z,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){m.bindFramebuffer(I.FRAMEBUFFER,ye);try{const be=x.textures[fe],ze=be.format,$e=be.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe);const Me=Cl(be);if(Me.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-k&&W>=0&&W<=x.height-z&&I.readPixels(C,W,k,z,de.convert(ze),de.convert($e),pe)}finally{const be=ie!==null?G.get(ie).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,C,W,k,z,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(C>=0&&C<=x.width-k&&W>=0&&W<=x.height-z){m.bindFramebuffer(I.FRAMEBUFFER,ye);const be=x.textures[fe],ze=be.format,$e=be.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe);const Me=Cl(be);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(C,W,k,z,de.convert(ze),de.convert($e),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ct=ie!==null?G.get(ie).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,Ct);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ku(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(rt),I.deleteSync(xt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,W=0){const k=Math.pow(2,-W),z=Math.floor(x.image.width*k),pe=Math.floor(x.image.height*k),ve=C!==null?C.x:0,fe=C!==null?C.y:0;X.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ve,fe,z,pe),m.unbindTexture()},this.copyTextureToTexture=function(x,C,W=null,k=null,z=0,pe=0){let ve,fe,ye,be,ze,$e,Me,rt,Ct;const xt=x.isCompressedTexture?x.mipmaps[pe]:x.image;if(W!==null)ve=W.max.x-W.min.x,fe=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,ze=W.min.y,$e=W.isBox3?W.min.z:0;else{const wt=Math.pow(2,-z);ve=Math.floor(xt.width*wt),fe=Math.floor(xt.height*wt),x.isDataArrayTexture?ye=xt.depth:x.isData3DTexture?ye=Math.floor(xt.depth*wt):ye=1,be=0,ze=0,$e=0}k!==null?(Me=k.x,rt=k.y,Ct=k.z):(Me=0,rt=0,Ct=0);const dt=de.convert(C.format),Ht=de.convert(C.type);let ge;C.isData3DTexture?(X.setTexture3D(C,0),ge=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),ge=I.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),ge=I.TEXTURE_2D),m.activeTexture(I.TEXTURE0),m.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),m.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),m.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Yt=m.getParameter(I.UNPACK_ROW_LENGTH),Qe=m.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=m.getParameter(I.UNPACK_SKIP_PIXELS),Sn=m.getParameter(I.UNPACK_SKIP_ROWS),Zn=m.getParameter(I.UNPACK_SKIP_IMAGES);m.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),m.pixelStorei(I.UNPACK_SKIP_PIXELS,be),m.pixelStorei(I.UNPACK_SKIP_ROWS,ze),m.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const Ii=x.isDataArrayTexture||x.isData3DTexture,lt=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const wt=G.get(x),Jn=G.get(C),mt=G.get(wt.__renderTarget),Qn=G.get(Jn.__renderTarget);m.bindFramebuffer(I.READ_FRAMEBUFFER,mt.__webglFramebuffer),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Di=0;Di<ye;Di++)Ii&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(x).__webglTexture,z,$e+Di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(C).__webglTexture,pe,Ct+Di)),I.blitFramebuffer(be,ze,ve,fe,Me,rt,ve,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||G.has(x)){const wt=G.get(x),Jn=G.get(C);m.bindFramebuffer(I.READ_FRAMEBUFFER,N),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let mt=0;mt<ye;mt++)Ii?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,z,$e+mt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,z),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jn.__webglTexture,pe,Ct+mt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jn.__webglTexture,pe),z!==0?I.blitFramebuffer(be,ze,ve,fe,Me,rt,ve,fe,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(ge,pe,Me,rt,Ct+mt,be,ze,ve,fe):I.copyTexSubImage2D(ge,pe,Me,rt,be,ze,ve,fe);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(ge,pe,Me,rt,Ct,ve,fe,ye,dt,Ht,xt.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,pe,Me,rt,Ct,ve,fe,ye,dt,xt.data):I.texSubImage3D(ge,pe,Me,rt,Ct,ve,fe,ye,dt,Ht,xt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Me,rt,ve,fe,dt,Ht,xt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Me,rt,xt.width,xt.height,dt,xt.data):I.texSubImage2D(I.TEXTURE_2D,pe,Me,rt,ve,fe,dt,Ht,xt);m.pixelStorei(I.UNPACK_ROW_LENGTH,Yt),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),m.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),m.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),m.pixelStorei(I.UNPACK_SKIP_IMAGES,Zn),pe===0&&C.generateMipmaps&&I.generateMipmap(ge),m.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){Z=0,$=0,ie=null,m.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const zs={shinminato:{sky:658702,fog:1054489,ground:790802,building:["#0e1414","#111919","#0a1010"],window:["#d7c9a9","#c94835","#4c7773"],neon:[14170154,4951945],accent:14170154,ambient:5069915,fogDensity:.018,rain:.9},kirimi:{sky:724236,fog:1711386,ground:856078,building:["#111511","#171b16","#0b0f0c"],window:["#d4c7aa","#a44632","#5b7364"],neon:[12008748,6130546],accent:12864052,ambient:5464154,fogDensity:.032,rain:.55},tokoyo:{sky:789003,fog:1577242,ground:1117457,building:["#171016","#1d121b","#100b10"],window:["#e1d3b7","#d84935","#b24b9c","#4e7f9a"],neon:[14826029,13912730,5020592],accent:14826029,ambient:5982811,fogDensity:.015,rain:1.1},tetsuhara:{sky:723721,fog:1775891,ground:1184013,building:["#15130f","#1c1913","#0e0d0a"],window:["#cdbf9d","#b34a2c","#7c6b42"],neon:[13060138,12687941],accent:13060138,ambient:6051141,fogDensity:.021,rain:.6},shirasagi:{sky:658446,fog:1317149,ground:856339,building:["#101519","#141b20","#0a0e11"],window:["#dfd3b9","#b44d3d","#4d7d9c"],neon:[13582640,6000552],accent:13582640,ambient:5201768,fogDensity:.016,rain:.7},amatsuka:{sky:723723,fog:1513237,ground:921100,building:["#121210","#171714","#0b0b0a"],window:["#d6c8a9","#b94a33","#54716d"],neon:[13386288,5340279],accent:13386288,ambient:5264721,fogDensity:.026,rain:1.4}},k0={shinminato:"docks",kirimi:"alley",tokoyo:"street",tetsuhara:"docks",shirasagi:"street",amatsuka:"alley"};function z0(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function H0(n){let e=n>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ar(n,e){const t=document.createElement("canvas");t.width=128,t.height=256;const i=t.getContext("2d");i.fillStyle=n.building[Math.floor(e()*n.building.length)],i.fillRect(0,0,128,256),i.fillStyle="rgba(0,0,0,0.32)";for(let r=0;r<256;r+=18)i.fillRect(0,r,128,2);for(let r=14;r<246;r+=22)for(let s=10;s<118;s+=18)if(e()<.56){const o=n.window[Math.floor(e()*n.window.length)];i.globalAlpha=.3+e()*.7,i.fillStyle=o,i.fillRect(s,r,8,10)}i.globalAlpha=.5,i.fillStyle=n.window[1],i.fillRect(6,0,2,256),i.globalAlpha=1;const a=new md(t);return a.colorSpace=Jt,a.anisotropy=2,a}function G0(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"rgba(233,224,207,0.95)"),t.addColorStop(.7,"rgba(233,224,207,0.75)"),t.addColorStop(1,"rgba(233,224,207,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new md(n);return i.colorSpace=Jt,i}class V0{constructor(){je(this,"renderer");je(this,"scene",new uh);je(this,"camera");je(this,"clock",new kh);je(this,"group",new Ra);je(this,"rain",null);je(this,"rainPositions",null);je(this,"rainSpeed",.04);je(this,"container",null);je(this,"cityKey","");je(this,"encroachment",0);je(this,"reduced",!1);je(this,"raf",0);je(this,"redLight",null);je(this,"textureCache",[]);je(this,"disposed",!1);je(this,"pointer",{x:0,y:0});je(this,"baseCamera",new U(0,3.4,11));je(this,"palette",zs.shinminato);je(this,"onPointer",e=>{this.reduced||(this.pointer.x=(e.clientX/Math.max(1,window.innerWidth)-.5)*2,this.pointer.y=(e.clientY/Math.max(1,window.innerHeight)-.5)*2)});je(this,"animate",()=>{if(this.disposed||(this.raf=requestAnimationFrame(this.animate),!this.container||!this.renderer.domElement.isConnected))return;const e=Math.min(.05,this.clock.getDelta()),t=this.clock.elapsedTime;if(this.reduced||(this.camera.position.x=this.baseCamera.x+Math.sin(t*.08)*.6+this.pointer.x*.7,this.camera.position.y=this.baseCamera.y+Math.cos(t*.11)*.18-this.pointer.y*.25,this.camera.lookAt(this.pointer.x*2.2,4.2+this.pointer.y*.4,-42)),this.rain&&this.rainPositions){const i=this.rainPositions;for(let a=0;a<i.length;a+=3)i[a+1]-=this.rainSpeed*(this.reduced?0:60)*e,i[a+1]<-.5&&(i[a+1]=34,i[a]=(Math.random()-.5)*70);this.rain.geometry.getAttribute("position").needsUpdate=!0}this.redLight&&(this.redLight.intensity=2.2+Math.min(this.encroachment,140)/32+(this.encroachment>=100?Math.sin(t*9)*.6:0)),this.renderer.render(this.scene,this.camera)});this.renderer=new B0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=Wo,this.renderer.toneMappingExposure=1.05,this.camera=new sn(55,1,.1,260),this.camera.position.copy(this.baseCamera),this.camera.lookAt(0,4.2,-40),this.scene.add(this.group),window.addEventListener("pointermove",this.onPointer,{passive:!0}),this.animate()}mount(e,t,i,a,r){this.disposed||(this.container!==e&&(this.container=e,e.appendChild(this.renderer.domElement),this.resize()),this.cityKey!==`${t}:${i}`&&(this.cityKey=`${t}:${i}`,this.build(t,i)),this.encroachment=a,this.reduced=r,this.redLight&&(this.redLight.intensity=2.2+Math.min(a,140)/32),this.resize())}resize(){if(!this.container)return;const e=this.container.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));(this.renderer.domElement.width!==t*this.renderer.getPixelRatio()||this.renderer.domElement.height!==i*this.renderer.getPixelRatio())&&(this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}build(e,t){for(;this.group.children.length;)this.group.children.pop().traverse(A=>{if(A instanceof ut||A instanceof tc||A instanceof ic){A.geometry?.dispose();const P=A.material;Array.isArray(P)?P.forEach(y=>y.dispose()):P?.dispose()}});for(const h of this.textureCache)h.dispose();this.textureCache=[],this.scene.fog=null,this.redLight=null,this.rain=null,this.rainPositions=null;const i=zs[e]??zs.shinminato;this.palette=i;const a=k0[e]??"street",r=H0(z0(`${e}:${t}`));this.scene.background=new Ge(i.sky),this.scene.fog=new el(i.fog,i.fogDensity);const s=new Dh(14670024,658187,.42);this.scene.add(s),this.group.add(s);const o=new Fh(i.ambient,.4);this.group.add(o);const l=G0();this.textureCache.push(l);const c=new dd({map:l,transparent:!0,depthWrite:!1,opacity:a==="docks"?.6:.38}),d=new xh(c);d.scale.set(a==="docks"?26:18,a==="docks"?26:18,1),d.position.set(a==="docks"?2:-16,a==="docks"?17:22,-85),this.group.add(d);const f=new ut(new Wn(220,280,1,1),new Hn({color:i.ground,roughness:.28,metalness:.55}));f.rotation.x=-Math.PI/2,f.position.set(0,0,-60),this.group.add(f);const u=a==="alley"?8:a==="docks"?26:15,p=new ut(new Wn(u,240),new Hn({color:a==="docks"?592651:855051,roughness:.18,metalness:.7}));if(p.rotation.x=-Math.PI/2,p.position.set(0,.02,-60),this.group.add(p),a!=="alley"){const h=new ri({color:14208181,transparent:!0,opacity:.3});for(let A=8;A>-150;A-=16){const P=new ut(new Wn(.16,7),h);P.rotation.x=-Math.PI/2,P.position.set(0,.04,A),this.group.add(P)}}const _=[Ar(i,r),Ar(i,r),Ar(i,r),Ar(i,r)];this.textureCache.push(..._);const M=_.map(h=>new Hn({map:h,emissiveMap:h,emissive:16777215,emissiveIntensity:a==="alley"?.55:.7,roughness:.78,metalness:.12,color:14078148})),g=a==="alley"?26:64;for(let h=0;h<g;h++){const A=h%2===0?-1:1,P=3+r()*6,y=4+r()*9,S=a==="alley"?12+r()*25:8+r()*46,T=12-r()*150,w=A*(u/2+2.5+r()*(a==="docks"?22:14)+P/2),v=new ut(new dn(P,S,y),M[Math.floor(r()*M.length)]);if(v.position.set(w,S/2,T),v.rotation.y=(r()-.5)*.12,this.group.add(v),r()<.34){const E=i.neon[Math.floor(r()*i.neon.length)],R=new ut(new dn(.18,1.2+r()*5,.7+r()*1.4),new ri({color:E}));if(R.position.set(w-A*(P/2+.15),3+r()*Math.max(1,S-5),T+(r()-.5)*y),this.group.add(R),r()<.5){const D=new Yi(E,1.4,13,2);D.position.copy(R.position),this.group.add(D)}}}this.redLight=new Yi(i.accent,2.2,34,2),this.redLight.position.set(-5,4.5,-8),this.group.add(this.redLight),a==="docks"?this.buildDocks(r,i):a==="alley"?this.buildAlley(r,i):this.buildStreet(r,i),this.buildRain(r,i,a)}buildStreet(e,t){const i=new hd({color:657672,transparent:!0,opacity:.8});for(let r=0;r<4;r++){const s=9+r*2.2,o=[new U(-24,s,10-r*14),new U(0,s-1.1,-15-r*18),new U(24,s,-42-r*20)],l=new Th(o),c=new qt().setFromPoints(l.getPoints(24));this.group.add(new tc(c,i))}const a=new Hn({color:789258,roughness:.9});for(let r=0;r<5;r++){const s=new ut(new Vr(.08,.1,9,6),a);s.position.set(r%2===0?-10:10,4.5,-8-r*22),this.group.add(s);const o=new ut(new La(.22,8,8),new ri({color:t.window[0]}));o.position.set(s.position.x,9.2,s.position.z),this.group.add(o);const l=new Yi(t.window[0],1.2,15,2);l.position.copy(o.position),this.group.add(l)}}buildAlley(e,t){const i=new Hn({color:657672,roughness:.85});for(let r=0;r<8;r++){const s=new ut(new Vr(.09,.09,18,6),i);s.rotation.x=Math.PI/2,s.position.set(r%2===0?-4.1:4.1,3+e()*10,-10-r*14),this.group.add(s)}for(let r=0;r<3;r++){const s=new ut(new dn(1.15,2.2,.8),new Hn({color:1315344,roughness:.65,metalness:.25}));s.position.set(r%2===0?-3.4:3.4,1.1,-14-r*26),this.group.add(s);const o=new ut(new Wn(.9,1.2),new ri({color:t.window[0],transparent:!0,opacity:.55}));o.position.set(s.position.x,1.35,s.position.z+.41),this.group.add(o);const l=new Yi(t.window[0],1.3,8,2);l.position.set(s.position.x,1.6,s.position.z+.8),this.group.add(l)}const a=new ri({color:14170154});for(let r=0;r<4;r++){const s=new ut(new La(.24,10,10),a);s.position.set(r%2===0?-3.8:3.8,5+e()*3,-20-r*20),this.group.add(s);const o=new Yi(14170154,2,10,2);o.position.copy(s.position),this.group.add(o)}}buildDocks(e,t){const i=new ut(new Wn(160,120,1,1),new Hn({color:461580,roughness:.08,metalness:.9}));i.rotation.x=-Math.PI/2,i.position.set(-42,-.3,-60),this.group.add(i);const a=[1581087,1971988,2235158,1186332];for(let o=0;o<22;o++){const l=new ut(new dn(4.3,2.3,2.2),new Hn({color:a[Math.floor(e()*a.length)],roughness:.8,metalness:.2})),c=Math.floor(e()*3);l.position.set(-15-e()*30,1.15+c*2.35,-20-e()*80),l.rotation.y=(e()-.5)*.2,this.group.add(l)}const r=new Hn({color:724236,roughness:.85});for(let o=0;o<3;o++){const l=-12-o*18,c=-30-o*25,d=new ut(new dn(.45,25,.45),r);d.position.set(l-2,12.5,c),this.group.add(d);const f=new ut(new dn(.45,25,.45),r);f.position.set(l+2,12.5,c),this.group.add(f);const u=new ut(new dn(20,.5,.5),r);u.position.set(l+6,24,c),this.group.add(u);const p=new Yi(14170154,2,18,2);p.position.set(l+15,24,c),this.group.add(p)}const s=new ut(new La(.2,8,8),new ri({color:t.accent}));s.position.set(8,6,-45),this.group.add(s)}buildRain(e,t,i){const a=i==="docks"?1200:1800,r=new Float32Array(a*3);for(let l=0;l<a;l++)r[l*3]=(e()-.5)*70,r[l*3+1]=e()*38,r[l*3+2]=10-e()*100;const s=new qt;s.setAttribute("position",new xn(r,3));const o=new fd({color:14208181,size:.055,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0});this.rain=new ic(s,o),this.rainPositions=r,this.rainSpeed=(t.rain??1)*.055,this.group.add(this.rain)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("pointermove",this.onPointer),this.renderer.dispose(),this.renderer.domElement.remove()}}const li={body:"體魄",reflex:"敏捷",intellect:"知性",will:"意志",perception:"感知",charm:"魅力"},Fc={body:"肉體的力量與耐痛。影響近身戰、負重與生存。",reflex:"反應與速度。影響閃避、追擊與脫身。",intellect:"推理、資訊處理與說服材料。影響調查與滅證。",will:"精神強度。抵抗侵蝕與強敵的壓迫。",perception:"觀察與直覺。發現謊言、伏擊與痕跡。",charm:"氣場與話術。影響交涉、隱藏與操縱。"},Rd=["body","reflex","intellect","will","perception","charm"],W0=[{id:"blade",name:"斷罪之刃",kana:"ダンザイノハ",rarity:"Ⅲ",type:"攻擊",tagline:"把侵蝕鍛造成一把不該存在的刀。",description:"你從脊椎抽出黑色的薄刃。它切開的不是肉體，而是「存在」本身。每次揮刀，刀刃都會多記住你一點。",passive:"體魄 +2。",active:"戰鬥與狩獵檢定 +3；可將一次攻擊化為必殺。",cost:8,statBonus:{body:2},combat:3,tags:["combat","blade"]},{id:"flash",name:"瞬絕",kana:"シュンゼツ",rarity:"Ⅱ",type:"速度",tagline:"在世界反應過來之前，你已經不在原地。",description:"零點三秒的空白。你穿過雨、子彈與監視器，只留下一個正在崩塌的殘影。",passive:"敏捷 +2。",active:"戰鬥或逃離檢定 +2；遭遇神田時可強制脫身一次。",cost:7,statBonus:{reflex:2},combat:1,tags:["escape","combat"]},{id:"mindeye",name:"讀心之瞳",kana:"ドクシンノヒトミ",rarity:"Ⅱ",type:"精神",tagline:"每個人都在心裡小聲說出秘密。",description:"你能看見情緒的顏色。恐懼是鏽紅，算計是墨綠，而神田隼人是沒有顏色的。",passive:"感知 +2，調查所得情報 +1。",active:"閱讀目標表層思維，解鎖部分事件的真相。",cost:6,statBonus:{perception:2},combat:0,tags:["mind","intel"]},{id:"ash",name:"灰燼領域",kana:"カイジンリョウイキ",rarity:"Ⅲ",type:"異形",tagline:"半徑三十公尺內，一切歸於灰。",description:"你的影子張開，像一頁被火燒穿的紙。街道、車子、人，都從邊緣開始剝落。",passive:"知性 +1。顯現獵殺與破壞額外 +1 刻印。",active:"大範圍殲滅。警戒指數大幅上升。",cost:12,statBonus:{intellect:1},combat:2,tags:["destroy","area"]},{id:"regen",name:"不死再生",kana:"フシサイセイ",rarity:"Ⅱ",type:"異形",tagline:"骨頭會自己找到回家的路。",description:"你死過一次。心臟停擺的十七秒裡，你聽見有人在很遠的地方叫你的名字，於是你決定爬回來。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次。",active:"立即回復 4 點肉體。",cost:10,statBonus:{body:1},combat:0,tags:["heal","revive"]},{id:"siren",name:"魅惑之聲",kana:"ミワクノコエ",rarity:"Ⅱ",type:"精神",tagline:"你說的每一句話，都會變成對方最想聽的話。",description:"聲音先於意義抵達。你能讓盤問變成閒聊，讓追捕變成護送，讓恨你的人暫時忘記理由。",passive:"魅力 +2，交涉類檢定 +1。",active:"壓低警戒指數、轉移懷疑，或讓敵人放下武器。",cost:6,statBonus:{charm:2},combat:0,tags:["social","heat"]},{id:"thunder",name:"雷牙",kana:"ライガ",rarity:"Ⅱ",type:"攻擊",tagline:"雨還沒落下，閃電已經穿過你。",description:"你的神經變成導體。指尖彈出的白色電弧能在混凝土上留下焦黑的樹根。",passive:"敏捷 +1，戰鬥檢定 +2。",active:"遠距離擊穿目標，或癱瘓一整條街的電眼。",cost:8,statBonus:{reflex:1},combat:2,tags:["combat","tech"]},{id:"memory",name:"記憶篡改",kana:"キオクテンカイ",rarity:"Ⅲ",type:"精神",tagline:"證據不在現場，在別人的腦裡。",description:"你能剪掉目擊者的一分鐘，也能把一段不存在的記憶縫回去。用越多次，你越不確定哪些回憶是自己的。",passive:"知性 +2，滅證與調查檢定 +2。",active:"抹除監視紀錄、目擊者記憶與現場痕跡。",cost:6,statBonus:{intellect:2},combat:0,tags:["erase","intel"]},{id:"beast",name:"獸化",kana:"ジュウカ",rarity:"Ⅲ",type:"異形",tagline:"你不再需要理由，只需要氣味。",description:"皮膚裂開，牙齒變長，世界突然變得簡單：獵物、威脅、同類。最可怕的是，你喜歡這種簡單。",passive:"體魄 +3。所有警戒指數增加 15%。",active:"戰鬥與狩獵檢定 +4；結束後侵蝕額外 +3。",cost:9,statBonus:{body:3},combat:4,tags:["combat","beast"]},{id:"limit",name:"界限突破",kana:"カイゲントッパ",rarity:"Ⅲ",type:"支援",tagline:"把「不可能」當成一個可以談判的數字。",description:"你能短暫改寫自己的極限。心跳、肌力、思考速度全部超頻。代價是，突破之後你會忘記自己原本的樣子。",passive:"意志 +2。所有抵抗侵蝕檢定 +2。",active:"一次檢定 +5；或從必敗局面中強行拖住對手。",cost:15,statBonus:{will:2},combat:2,tags:["fate","will"]},{id:"shell",name:"空蟬",kana:"ウツセミ",rarity:"Ⅱ",type:"速度",tagline:"你留下的不是殘影，是一個替你死的自己。",description:"一具空殼從你身上剝落，帶著你的體溫與恐懼逃跑。真正的你只能站在原地，看它被殺死。",passive:"敏捷 +1。遭遇神田時可強制脫身一次。",active:"製造完美的替身，轉移追捕與一次致命傷。",cost:8,statBonus:{reflex:1},combat:0,tags:["escape","decoy"]},{id:"resonance",name:"共鳴",kana:"キョウメイ",rarity:"Ⅰ",type:"支援",tagline:"有人還記得你原本的聲音。",description:"你的顯現不是武器，是一條看不見的線。線的另一端連著你仍在乎的人；只要他們還在，你就能被拉回來。",passive:"意志 +1。聯絡羈絆時額外降低 4 點侵蝕。",active:"透過羈絆穩定精神，把一次失控推回去。",cost:4,statBonus:{will:1},combat:0,tags:["bond","calm"]}],$0={flash:{acBonus:1},mindeye:{acBonus:1},ash:{acBonus:1},regen:{acBonus:1},thunder:{acBonus:1},memory:{acBonus:1},beast:{acStat:"body",acBonus:2},limit:{acBonus:1},shell:{acBonus:2}},Cd=W0.map(n=>({...n,kind:"manifest",...$0[n.id]??{}})),Oo=[{id:"core_array",name:"演算迴廊",kana:"エンザンカイロウ",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"把世界拆成可以計算的變數，再把自己算進去。",description:"你開始看得見子彈的路徑、對方的重心、自己下一次心跳的間隔。它們全都變成可計算的變數。用得越久，你越難確定哪些念頭原本屬於你。",passive:"知性 +2。AC 改用知性計算。",active:"以思考覆寫肉體：戰鬥或調查檢定 +2。",cost:9,statBonus:{intellect:2},combat:2,tags:["core","mind","intel","ac"],acStat:"intellect",acBonus:1},{id:"core_revive",name:"殘響回生",kana:"ザンキョウカイセイ",rarity:"Ⅳ",type:"異形",kind:"core",tagline:"死不是終點，只是一次比較長的停頓。",description:"你的細胞記得自己死過。骨頭斷了會自己找路，心臟停了會重新點火。每次回來，都會少一點東西——有時是記憶，有時是名字。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次；AC +1。",active:"立即回復 4 點肉體。",cost:10,statBonus:{body:1},combat:0,tags:["core","heal","revive"],acBonus:1},{id:"core_ward",name:"境界編織",kana:"キョウカイヘンショク",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"把「不想失去」變成一堵看不見的牆。",description:"你無法阻止世界傷害你，但可以讓某些東西暫時不被世界碰到。結界越強，你越能聽見牆外那些正在死去的聲音。",passive:"意志 +2。AC +2；聯絡羈絆時額外降低侵蝕。",active:"張開結界，替羈絆者或平民承受一次攻擊。",cost:7,statBonus:{will:2},combat:0,tags:["core","bond","ward","calm"],acBonus:2},{id:"core_market",name:"暗盤交易",kana:"アンバイコウエキ",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"只要價格正確，連裏八咫的名單都能買到。",description:"你天生知道誰手裡有東西、誰急著脫手、誰的謊話值多少錢。這不是超能力，是另一種更古老的顯現：供需。",passive:"魅力 +1、知性 +1。調查與交易檢定 +1。",active:"在事件中取得裝備、情報或降低警戒指數。",cost:6,statBonus:{charm:1,intellect:1},combat:0,tags:["core","social","heat","intel"]},{id:"core_multi",name:"兵裝並列",kana:"ヘイソウヘイレツ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"一隻手不夠，那就讓每一根骨頭都握住武器。",description:"你能同時操作多件武器，把它們的軌跡疊成一條不合理的攻擊線。顯現會在你身上長出額外的關節；它們不痛，只是睡著時會自己動。",passive:"體魄 +1、敏捷 +1。戰鬥檢定 +2，AC +1。",active:"合併兩件武器的攻擊，無視一次防禦。",cost:9,statBonus:{body:1,reflex:1},combat:3,tags:["core","combat","ac"],acBonus:1},{id:"core_variable",name:"形態改寫",kana:"ケイタイカイシャ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"你的武器沒有固定形狀，只有固定目的。",description:"刀、槍、盾、鑰匙——你的顯現會隨著需要改變外形。每次變形都會帶走一點記憶，所以你開始把重要的事寫在皮膚上。",passive:"敏捷 +1。戰鬥檢定 +2；可切換攻擊或防禦形態。",active:"將一次戰鬥檢定改為遠程或近戰中最有利的形式。",cost:8,statBonus:{reflex:1},combat:2,tags:["core","combat","ac"],acBonus:1},{id:"core_combat",name:"戰術矩陣",kana:"センジュツギョジン",rarity:"Ⅳ",type:"速度",kind:"core",tagline:"你像一段被寫好的戰鬥程式，正確得令人害怕。",description:"身體會自動執行最優解。閃避、反擊、換位、補刀，全都在意識下達命令之前完成。問題是，程式不會告訴你什麼時候該停。",passive:"敏捷 +1。戰鬥檢定 +3，AC +2。",active:"進入戰鬥模式：本小時的狩獵與逃避檢定 +2。",cost:8,statBonus:{reflex:1},combat:3,tags:["core","combat","ac"],acBonus:2},{id:"core_focus",name:"零點凝縮",kana:"レイテンギョウシュク",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"世界很吵。你只需要留下一個聲音。",description:"你能把所有注意力壓縮成一個點。那個點以外的東西會暫時消失：雨聲、痛覺、別人的名字。回神時，你會發現自己錯過了很多。",passive:"意志 +1、感知 +1。抵抗侵蝕檢定 +2。",active:"重擲一次剛失敗的檢定；每次使用侵蝕 +5。",cost:6,statBonus:{will:1,perception:1},combat:1,tags:["core","will","fate"],acBonus:1}],X0=["鏽蝕的","第七相的","無名的","雨蝕的","未登錄的","灰燼的","零時的","白夜的","逆流的","霧中的","斷裂的","殘月的"],q0=["心臟","迴路","殘響","器官","禱詞","火種","裂縫","紀錄","王座","雨聲","脈搏","鏡像"],Y0=[{id:"street",name:"日常服",base:10,dexCap:5,description:"沒有防護，只有一點體面。",tone:"none"},{id:"jacket",name:"防風外套",base:11,dexCap:5,description:"城市裡最普通的裝備。至少能擋住一次刀背。",tone:"light"},{id:"trench",name:"強化風衣",base:12,dexCap:4,description:"內襯編入抗撕裂纖維。低調，適合不想被看見的人。",tone:"light"},{id:"vest",name:"防彈背心",base:13,dexCap:2,description:"裏八咫補給品。擋得住手槍，擋不住顯現。",tone:"medium"},{id:"crystal",name:"結晶外殼",base:14,dexCap:1,description:"從死去的超越者身上剝下的結晶。冷得像另一個人。",tone:"medium"},{id:"exo",name:"機動裝甲",base:15,dexCap:0,description:"軍規外骨骼。神田的特製校服內襯就是這種東西。",tone:"heavy"}],Ba=new Map(Y0.map(n=>[n.id,n])),$a=[{id:"shinminato",name:"新湊市",kana:"しんみなと",tag:"港灣・黑市",description:"面向黑潮的貿易港。戰後靠走私與倉儲重新站起來，警察管不到碼頭深處。這裡的人習慣半夜的警笛，也習慣不多看一眼。",stat:"body",heatMod:.9,scene:"docks",weather:"長雨",landmark:"第七號貨櫃碼頭"},{id:"kirimi",name:"霧見市",kana:"きりみ",tag:"山霧・舊城",description:"被兩座山夾住的老城。一年有三分之一的日子起霧，監視器拍不到十公尺外。居民說，霧裡還有另一座城市。",stat:"perception",heatMod:.85,scene:"alley",weather:"濃霧",landmark:"霧見坂商店街"},{id:"tokoyo",name:"常夜町",kana:"とこよ",tag:"不夜・直播",description:"亞洲最大的娛樂街區。霓虹燈從不熄滅，直播鏡頭比路燈還多。任何一點異常，三分鐘內就會變成熱搜。",stat:"charm",heatMod:1.2,scene:"street",weather:"霓虹雨",landmark:"常夜中央通"},{id:"tetsuhara",name:"鐵原市",kana:"てつはら",tag:"工業・鏽蝕",description:"戰時留下的重工業帶。高爐停了，鏽蝕還在。空氣裡有金屬味，孩子們的肺裡都有細小的鐵粉。",stat:"body",heatMod:1,scene:"docks",weather:"鐵灰陰天",landmark:"第三高爐遺址"},{id:"shirasagi",name:"白鷺市",kana:"しらさぎ",tag:"學園・監視",description:"戰後重建的模範都市。街道乾淨，志工很多，每根電線桿上都有治安攝影機。市民滿意度連續十年全國第一。",stat:"intellect",heatMod:1.15,scene:"street",weather:"晴朗夜色",landmark:"白鷺中央廣場"},{id:"amatsuka",name:"雨塚市",kana:"あまつか",tag:"盆地・長雨",description:"一年下三百天雨的小盆地。雨聲蓋住槍聲、哭聲與顯現的低鳴。這裡的人相信，雨會把人的秘密沖到地底。",stat:"will",heatMod:.95,scene:"alley",weather:"連日大雨",landmark:"雨塚車站前"}],K0=[{id:"ayase",name:"綾瀬凍",epithet:"玻璃聖母",ability:"結晶／凍結",marks:12,rate:.55,status:"active",portrait:"ayase",note:"排名第二。冷靜、守規則，似乎在等某個人先犯錯。"},{id:"kurokawa",name:"黑川巌",epithet:"絞肉機",ability:"肉體強化",marks:15,rate:.9,status:"active",portrait:"kurokawa",note:"殺意沒有底線。裏八咫很喜歡他，神田也是。"},{id:"shiratori",name:"白鳥理世",epithet:"舞臺女王",ability:"魅惑／暗示",marks:8,rate:.5,status:"active",portrait:"shiratori",note:"從不親自弄髒手。她的刻印大多來自別人的自願。"},{id:"tetsu",name:"鐵十兵衛",epithet:"鐵屑",ability:"金屬操作",marks:2,rate:.18,status:"active",portrait:"crown",note:"五十歲才顯現的男人。只想活著回去見孫女。"}],Ta={lie_low:{label:"潛伏",icon:"伏",desc:"躲進人群與陰影。降低警戒指數，讓傷口慢慢癒合。",risk:"警戒指數 -3／每兩小時回復 1 肉體",tone:"calm"},hunt_normal:{label:"獵殺常人",icon:"人",desc:"用刀、石頭或雙手。不碰顯現，只碰人命。",risk:"刻印 +1／警戒指數 +5",tone:"danger"},power_hunt:{label:"顯現獵殺",icon:"蝕",desc:"讓顯現替你完成工作。乾淨、迅速，代價寫在骨頭裡。",risk:"刻印 +2／警戒指數 +7／侵蝕 +顯現代價",tone:"danger"},hunt_overman:{label:"狩獵同類",icon:"獵",desc:"找出落單的超越者。這才是裏八咫真正想要的分數。",risk:"成功 +10 刻印／失敗重傷／必定侵蝕",tone:"danger"},investigate:{label:"調查",icon:"查",desc:"查線路、問人、看監視器。情報不能吃，但能救命。",risk:"情報 +1／警戒指數 +1",tone:"calm"},contact:{label:"聯絡羈絆",icon:"絆",desc:"打一通電話，見一面，確認自己還是人。",risk:"侵蝕大幅下降／監視上升，羈絆者可能被盯上",tone:"bond"},destroy:{label:"破壞",icon:"壞",desc:"讓城市記住你。裏八咫會把混亂折算成刻印。",risk:"刻印 +2／警戒指數 +9／侵蝕 +6",tone:"danger"}},Pd={monster:{title:"侵蝕完遂",subtitle:"你終於不用再忍耐了",stamp:"怪物",text:`最後一根名為「人」的線，斷了。

你記得自己的名字，卻想不起為什麼要記得。

雨水落在你裂開的皮膚上，像一個很遠的、與你無關的問候。

神田隼人站在街的另一端，手裡握著一把漆黑的劍。

他只是看著你，像在看一份終於完成的病歷。

「你不是怪物。」

他說。

「你只是一直沒有人拉住。」

然後，世界安靜了。`,tone:"dark"},dead:{title:"無人認領",subtitle:"七十二小時，沒有誰替你倒數",stamp:"死亡",text:`你倒在一條沒有監視器的小巷裡。

雨把你的血沖進排水溝，一路帶進海裡，和這座城市其他被遺忘的東西一起。

裏八咫的終端在三分鐘後停止顯示你的代號。

沒有葬禮，沒有新聞。

只有某個人在很久以後，還會偶爾撥打一支無人接聽的號碼。

撥到第四聲，就掛掉。`,tone:"dark"},caught:{title:"神田隼人",subtitle:"勝率 0.0%",stamp:"逮捕",text:`你甚至沒有看清他什麼時候動的。

手銬扣上時，你才發現自己一直屏著呼吸。

神田隼人蹲下來，與你平視。

「我知道你不是自願的。」

他的語氣很平，像在讀一份天氣預報。

「但你也知道，這不能成為理由。」

他把你從雨裡拉起來。

這是你七十二小時裡，第一次被人當成一個人對待。`,tone:"neutral"},recycled:{title:"回收",subtitle:"沒有達到最低分數的零件",stamp:"回收",text:`閉幕的鐘聲響起時，你的刻印停在 30 以下。

裏八咫的工作人員很有禮貌。

他們替你披上外套，說會通知家屬，說這是一場意外。其中一個人的手在抖——你可能只是看見了，也可能是希望自己看見了。

你想起黑信封上那行字。

——不得告知任何人。

原來那句話保護的從來不是你。

城市照常亮起。便利商店的燈還亮著，關東煮的湯還在滾。

沒有人知道，今晚少了一個超越者。`,tone:"bad"},throne:{title:"王座",subtitle:"你贏了遊戲，輸掉了所有觀眾",stamp:"赦免",text:`刻印數第一。

裏八咫替你準備了一間看得見海的房間。

桌上有一份新的身分、一筆錢，和一支沒有通訊錄的手機。

「恭喜。」

西裝男說。

「你現在是普通人了。」

你看著窗玻璃裡的自己。

侵蝕的痕跡淡了，眼睛卻還是紅的。

你想打給誰，卻發現所有號碼都被自己刪掉了。

你贏了。

這座城市再也沒有你的名字。`,tone:"dark"},survivor:{title:"合格者",subtitle:"活下來，但沒有人替你鼓掌",stamp:"生還",text:`刻印達標，排名卻不是第一。

裏八咫兌現了承諾。

你被移出名單，獲得一個新的戶籍，搬進一間沒有窗的公寓。

每個月有人送來生活費。

每一季有人確認你沒有對外說話。他們很有禮貌，會先按門鈴，等三秒，再自己開門。

你活下來了。

但有時候，你會在半夜醒來，聽見雨水打在同一片鐵皮屋頂上，然後想起某個曾經和你一起倒數的人。

你沒有贏。

你只是還沒被回收。`,tone:"neutral"},escape:{title:"逃亡者",subtitle:"世界上從此多了一個沒有代號的人",stamp:"離脫",text:`你沒有去閉幕會場。

凌晨四點，你帶著僅剩的羈絆，從貨櫃碼頭的缺口鑽了出去。

海風很鹹。天快要亮了。

身後的警笛越來越遠。

前面沒有路，只有一條被雨洗過的防波堤。

「你會後悔嗎？」

那個人問。

你想了很久。

「會。」

你說。

「但不是現在。」

你們往前走。

裏八咫的名單上，你的代號變成了灰色。`,tone:"good"},confess:{title:"證人",subtitle:"你活了下來，以一個人的身分",stamp:"自首",text:`你把證據放在神田隼人面前。

他沒有立刻拿起來，只是先看了你很久。

「你知道這意味著什麼嗎？」

「知道。」

你說。

「我會坐牢。」

「不。」

他把錄音筆推回來。

「你會活著。活著把他們拖下來。」

三個月後，Project Ignis 第一次出現在國會質詢裡。

你在保護室看電視。窗外下雨。

你想起妹妹的晚餐照片，終於按下回覆鍵。`,tone:"good"},nameless:{title:"無名之人",subtitle:"沒有分數，沒有赦免，也沒有變成怪物",stamp:"未完",text:`閉幕時，你的刻印不到 30，侵蝕也沒有越過那條線。

裏八咫本來要回收你。

但那天晚上，神田隼人先一步走進了指揮部，把一份名單放在桌上。

沒有人知道他們談了什麼。

第二天，你被放上離開城市的巴士。

沒有新身分，沒有錢，只有一張單程票。

你坐在最後一排，看著雨中的城市縮小。

你沒有贏。

但你還記得自己的名字。`,tone:"neutral"}},Z0={text:`白髮，藍金異色瞳，黑色立領制服，金色鈕扣。

十七歲。警視廳搜查一課的「特別顧問」，被稱為最強現代智人。

不是超越者。沒有顯現，沒有改造，DNA 仍屬於 Homo sapiens。六項能力值全部停在人類極限：基礎 18，再以全屬性作為主屬性 +2，合計 20。體脂長期維持在 5% 到 7%，肩背與胸腔呈現極端的倒三角，關節與肌腱比常人粗厚；肺活量超過 8000cc，靜止心率每分鐘 30 次，百米能跑進九秒，硬舉超過 500 公斤。

但他仍然是人類。會疲倦，會受傷，會死。

他沒有任何特殊能力。所有判斷都來自刑警的觀察、紀錄與推理；他能十分鐘讀完整本卷宗，也能在對手抬手之前，從肌肉的微小動作推測下一步。

真正的異常，是那八把魔劍。

八把「大罪」級軌道兵器，平時停泊在低軌衛星「天刑」上。戰鬥時，他以警方權限呼叫其中一把，讓它從軌道直接落在戰場；劍體由超導金屬、動能控制與自主推進器構成，沒有任何超自然成分。戰後，魔劍會自行點火返回衛星。

他不需要把武器帶進城市。

因為武器在天空。

同一回合，他只能呼叫一把。這是裏八咫寫進權限裡的安全鎖，也是他唯一願意接受的限制。

小田川知世——他的童年好友，也是唯一讓他願意過普通生活的人——在十年前的「霧見集體失蹤」中下落不明。

裏八咫內部對他的評價只有一行字：

「不可交戰。不可接觸。不可成為他的案件。」`},J0=[...Oo,...Cd],ca=new Map(J0.map(n=>[n.id,n])),rl=new Map($a.map(n=>[n.id,n]));function sl(n){return Math.floor((n-10)/2)}function Ld(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Q0(n){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function j0(n){return n.rngCount+=1,Q0(Ld(n.seed+":"+n.rngCount))}function jt(n,e,t){return e+Math.floor(j0(n)*(t-e+1))}function Gn(n){return jt(n,1,20)}function e_(n){const e=[jt(n,1,6),jt(n,1,6),jt(n,1,6),jt(n,1,6)];return e.sort((t,i)=>i-t),e[0]+e[1]+e[2]}function ea(n,e){return e[jt(n,0,e.length-1)]}function ka(){return Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,6)}const za=[{id:"q1",title:"夜間巡邏",text:`深夜的車站月台，一名受傷的陌生超越者倒在你面前。月台上沒有監視器，只有一個正在靠近的站務員。

你先做什麼？`,options:[{label:"先確認逃生路線與監視死角。",hint:"先觀察，再判斷。",axis:"I",backgrounds:["journalist","urchin"]},{label:"蹲下去，先壓住傷口。",hint:"先救人，之後再說。",axis:"E",backgrounds:["medic","store"]}]},{id:"q2",title:"你相信什麼",text:`「顯現」到底是什麼？

記者會上，專家爭論不休。你坐在電視前，心裡浮現第一個答案。`,options:[{label:"一種可以用科學解釋、也能被利用的現象。",hint:"能測量，就能對付。",axis:"S",backgrounds:["veteran","underworld"]},{label:"人類還沒準備好承認的下一種可能。",hint:"有些東西不該被歸類。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q3",title:"代價",text:`裏八咫要你交出一個無辜的人，換取自己的安全。

對方的臉模糊不清，但你知道那個人真的存在。`,options:[{label:"先問清楚代價、成功率與退路。",hint:"活下來才有資格談對錯。",axis:"T",backgrounds:["underworld","journalist"]},{label:"拒絕。就算這會讓自己活不下去。",hint:"有些答案不需要計算。",axis:"F",backgrounds:["medic","shrine"]}]},{id:"q4",title:"72小時",text:`倒數開始。城市在你面前攤開，像一張沒有標記的地圖。

你會怎麼走？`,options:[{label:"先畫出時間表、路線與備用計畫。",hint:"把未知拆成可以處理的格子。",axis:"J",backgrounds:["store","veteran"]},{label:"先走上街，讓城市告訴你答案。",hint:"計畫永遠趕不上變化。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q5",title:"人群",text:`你剛做完一件事，那件事不能被人記住。

街角有兩條路：一條通往車站前的夜市，燈很亮，人很吵；一條通往沒有路燈的河堤。

你會怎麼離開？`,options:[{label:"混進人群，讓自己變成背景的一部分。",hint:"人多的地方最安全。",axis:"E",backgrounds:["store","musician"]},{label:"走沒有人的路，確認沒有人跟上。",hint:"安靜比熱鬧可靠。",axis:"I",backgrounds:["journalist","urchin"]}]},{id:"q6",title:"稱讚",text:`有人稱讚你做得好。

那個人你只見過兩次。稱讚裡有一半是好意，另一半是試探——你自己也常做一樣的事。`,options:[{label:"順著話題聊下去，讓氣氛輕鬆一點。",hint:"關係也是一種資源。",axis:"E",backgrounds:["musician","store"]},{label:"簡短道謝，然後繼續觀察對方。",hint:"先看清楚他想要什麼。",axis:"I",backgrounds:["veteran","shrine"]}]},{id:"q7",title:"研究",text:`你拿到一份關於顯現的研究報告，厚度像一本電話簿，封面沒有任何機構的標誌。

你會先翻哪一頁？`,options:[{label:"先看數據、樣本與重現方式。",hint:"能被重複的才叫線索。",axis:"S",backgrounds:["journalist","veteran"]},{label:"先看作者為什麼要研究這個。",hint:"動機比數字更誠實。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q8",title:"夢",text:"你夢見一座城市。醒來後，記得最清楚的是什麼？",options:[{label:"街道的坡度、雨聲、便利商店的燈。",hint:"細節讓夢變成地點。",axis:"S",backgrounds:["store","urchin"]},{label:"一個沒有臉的人，站在很遠的地方。",hint:"有些畫面只是某種預感。",axis:"N",backgrounds:["shrine","underworld"]}]},{id:"q9",title:"拖累",text:`同伴的腿斷了，追兵在兩條街外。

他叫你走。他說他會自己想辦法——他說這句話的時候沒有看你。`,options:[{label:"先計算兩個人都活下來的機率。",hint:"救不了兩個人，至少要活一個。",axis:"T",backgrounds:["veteran","underworld"]},{label:"先拉他一把。之後再想辦法。",hint:"有些手不能放。",axis:"F",backgrounds:["medic","musician"]}]},{id:"q10",title:"謊言",text:`一個陌生人對你說謊。你聽出來了。

但天亮之前，只有他能把那批貨交到你手上。`,options:[{label:"當場拆穿，讓他重新談條件。",hint:"資訊不對等才是真正的危險。",axis:"T",backgrounds:["journalist","underworld"]},{label:"假裝相信，給彼此留一條路。",hint:"有些謊言是用來維持秩序的。",axis:"F",backgrounds:["store","medic"]}]},{id:"q11",title:"行李",text:"你只有三分鐘能離開住處。",options:[{label:"照清單拿：證件、藥、現金、備用終端。",hint:"先保住能讓自己活下去的東西。",axis:"J",backgrounds:["store","veteran"]},{label:"抓最重要的那一樣就走。",hint:"剩下來的都可以再找。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q12",title:"變數",text:"計畫被打亂了。",options:[{label:"先回到原本的計畫，找出哪一步錯了。",hint:"混亂裡更需要順序。",axis:"J",backgrounds:["journalist","shrine"]},{label:"直接換一條路，邊走邊修正。",hint:"活著比照計畫重要。",axis:"P",backgrounds:["musician","underworld"]}]}],t_=new Map(za.map(n=>[n.id,n]));function Id(n){const e=[],t=(i,a)=>{const r=[...i];for(let s=0;s<a&&r.length;s++){const o=Math.floor(n()*r.length);e.push(r[o].id),r.splice(o,1)}};for(const i of["E","S","T","J"])t(za.filter(a=>a.options[0]?.axis===i),2);t(za.filter(i=>!e.includes(i.id)),2);for(let i=e.length-1;i>0;i--){const a=Math.floor(n()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}function ol(n){return t_.get(n)}const n_={INTJ:"獨行的棋手",INTP:"拆解世界的旁觀者",ENTJ:"把人群當成棋盤的人",ENTP:"點火者",INFJ:"安靜的守夜人",INFP:"把夢藏進口袋的人",ENFJ:"讓別人相信自己的人",ENFP:"追著光跑的人",ISTJ:"把承諾寫成紀錄的人",ISFJ:"默默收拾殘局的人",ESTJ:"先立規矩的人",ESFJ:"讓房間亮起來的人",ISTP:"在混亂裡找手感的人",ISFP:"用身體記住世界的人",ESTP:"先跳下去再說的人",ESFP:"把今天活成節日的人"},Kr=[{id:"medic",name:"急救志工",tagline:"在別人倒下時，手會先動起來。",description:"你在夜間診所與災害現場之間長大。見識過太多來不及救的人，也學會了怎麼在沒有燈的地方止血。",statBonus:{will:1,perception:1},feature:"急救常識：休息時額外回復 1 點肉體。",start:{flags:["field_medicine"]},bondId:"saya"},{id:"store",name:"便利店夜班",tagline:"整座城市的深夜，都會經過你的櫃檯。",description:"你值過太多大夜班。誰在凌晨三點買酒、誰帶著血走進店裡、誰再也沒有出現，你都知道，只是不說。",statBonus:{charm:1,reflex:1},feature:"城市耳目：初始情報 +1，警戒指數 -5。",start:{intel:1,heat:-5},bondId:"kuga"},{id:"musician",name:"地下樂手",tagline:"你有把沉默唱成聲音的本事。",description:"你在車站前、在地下室、在沒有人記得的Live House裡唱過歌。掌聲很少，但你記得每一個留下來聽完的人。",statBonus:{charm:1,perception:1},feature:"共鳴：聯絡羈絆時額外降低 2 點侵蝕。",start:{flags:["resonance"]},bondId:"kiritani"},{id:"journalist",name:"網路記者",tagline:"真相不是被找到的，是被追出來的。",description:"你替一家快倒閉的網路媒體跑新聞。你學會了怎麼問問題、怎麼查戶籍、怎麼在被跟蹤時甩掉對方。",statBonus:{intellect:1,perception:1},feature:"追線：初始情報 +2。",start:{intel:2},bondId:"soma"},{id:"shrine",name:"神社之子",tagline:"你從小就知道，看不見的東西不代表不存在。",description:"你替家裡的神社掃落葉、遞御守、聽老人說完那些沒有人信的故事。你沒有顯現，卻比誰都習慣和未知共處。",statBonus:{will:1,charm:1},feature:"鎮魂：初始侵蝕 -4。",start:{encroachment:-4},bondId:"chishiki"},{id:"underworld",name:"黑市跑腿",tagline:"你認識的城市，和地圖上的不是同一個。",description:"你替人送過不該送的東西，也替人保守過不該知道的秘密。你活到今天，靠的不是拳頭，是知道誰能信。",statBonus:{body:1,reflex:1},feature:"門路：初始獲得強化風衣，情報 +1。",start:{armorId:"trench",intel:1},bondId:"kuroda"},{id:"veteran",name:"自衛隊退役",tagline:"你離開部隊，卻沒有離開戰場。",description:"你待過災害派遣、待過離島警戒。你學會在噪音裡分辨腳步、在黑暗裡保持呼吸。戰爭結束了，你的身體還沒。",statBonus:{body:1,will:1},feature:"戰術：AC +1。",start:{flags:["background_tactics"]},bondId:"makabe"},{id:"urchin",name:"無戶籍街童",tagline:"城市不是你的家，但你比誰都熟。",description:"你沒有戶籍，沒有畢業證書，只有一群同樣被漏掉的人。你學會睡在監視器照不到的地方，也學會不留下名字。",statBonus:{reflex:1,perception:1},feature:"生存直覺：初始警戒指數 -8，潛伏時額外降低警戒指數。",start:{heat:-8,flags:["streetwise"]},bondId:"hoshino"}],ll=new Map(Kr.map(n=>[n.id,n])),Dd=[{id:"mio",name:"水島澪",relation:"妹妹・19",category:"family",pronoun:"她",description:"你最後的家人。她以為你在外地工作，每週仍會傳一張晚餐照片給你。"},{id:"minato",name:"神谷湊",relation:"弟弟・16",category:"family",pronoun:"他",description:"還在讀高中的弟弟。他把你當成英雄，每次傳訊息都用同一隻舉著拳頭的貓貼圖。他不知道你正在變成什麼。"},{id:"chihiro",name:"藤原千尋",relation:"母親・46",category:"family",pronoun:"她",description:"她總是把擔心藏進便當裡。便當盒是同一款，用了十年，蓋子上有一道被刀刮出來的白痕。你已經很久沒有回家吃晚飯。"},{id:"soichiro",name:"葛城宗一郎",relation:"父親・52",category:"family",pronoun:"他",description:"沉默的父親。你們最後一次說話是在醫院的走廊上，他說「沒事了」。你沒有問是誰沒事。"},{id:"suzu",name:"雨宮鈴",relation:"祖母・73",category:"family",pronoun:"她",description:"她記得你小時候的每一個夏天，也記得你第一次說謊的那天。她從不拆穿，只是多給你一顆糖。"},{id:"daichi",name:"佐倉大地",relation:"童年好友・27",category:"friend",pronoun:"他",description:"在城市裡開了一間 24 小時便利商店。他總說你小時候替他擋過一輛車。"},{id:"yu",name:"高瀬悠",relation:"高中同學・20",category:"friend",pronoun:"他",description:"你們一起逃過課、打過架、說過要離開這座城市。他留下來了，因為他母親那年病了。你走的時候沒有問過。"},{id:"ken",name:"三浦健",relation:"前同事・31",category:"friend",pronoun:"他",description:"你上一份工作的搭檔。他替你背過一次黑鍋，你一直沒有還。他現在在便利商店打工，見到你會先看你的手。"},{id:"rin",name:"早川凛",relation:"鄰居・24",category:"friend",pronoun:"她",description:"住在你隔壁房的女孩。她會在雨天把傘放在你門口，假裝不是她。你把那句謝謝留到今天還沒說。"},{id:"makabe",name:"真壁透",relation:"自衛隊同袍・29",category:"friend",pronoun:"他",description:"和你一起熬過災害派遣的人。他從不問你為什麼離開，只問你還活著嗎。"},{id:"kotone",name:"白石琴音",relation:"街頭樂手・22",category:"community",pronoun:"她",description:"在車站前唱歌的女孩。你曾在雨裡聽她唱完一整首，卻沒有留下名字。"},{id:"saya",name:"桐生沙耶",relation:"護士・26",category:"community",pronoun:"她",description:"急診室的夜班護士。她見過太多不能說的名字，也知道什麼時候該裝作沒看見。"},{id:"kuga",name:"久我修",relation:"便利商店店長・34",category:"community",pronoun:"他",description:"總是把快過期的飯糰留給你的店長。他說你像一隻淋濕的貓。"},{id:"aoi",name:"小鳥遊葵",relation:"咖啡師・23",category:"community",pronoun:"她",description:"凌晨還開著的咖啡店店員。她記得你每次點的咖啡，也記得你第一次沒有回來的那天。"},{id:"kuroda",name:"黑田鐵平",relation:"黑市仲介・41",category:"community",pronoun:"他",description:"什麼都賣、什麼都不問的男人。他救過你一次，也從此把你當成資產。"},{id:"chishiki",name:"神代千景",relation:"神社巫女・25",category:"community",pronoun:"她",description:"在霧見神社替人除厄的巫女。她說你身上有「不乾淨的線」，卻還是替你綁了御守。"},{id:"soma",name:"相馬遼",relation:"網路編輯・30",category:"community",pronoun:"他",description:"你以前的編輯。他相信真相，也相信點閱率；這兩件事常常打架。談到最後，他會把錄音筆放在桌上，讓你自己決定要不要關。"},{id:"hoshino",name:"星野燈",relation:"流浪少年・17",category:"community",pronoun:"他",description:"在車站地下街睡覺的少年。他替你望過風，也偷過你的錢。"},{id:"kiritani",name:"桐谷硯",relation:"地下樂團鼓手・21",category:"community",pronoun:"他",description:"你以前的團員。他總說你的歌太安靜，卻每一場都站在最前面。"}],i_=new Map(Dd.map(n=>[n.id,n]));function a_(n,e,t){const i={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0},a={};for(const d of Kr)a[d.id]=0;n.forEach((d,f)=>{const p=ol(e[f]??"")?.options[d];if(p){i[p.axis]=(i[p.axis]??0)+1;for(const _ of p.backgrounds)a[_]=(a[_]??0)+1}});const r=(d,f)=>i[d]===i[f]?t()%2===0?d:f:i[d]>i[f]?d:f,s=[r("E","I"),r("S","N"),r("T","F"),r("J","P")].join(""),o=Math.max(...Object.values(a)),l=Object.keys(a).filter(d=>a[d]===o),c=l[t()%l.length]??"store";return{mbti:s,backgroundId:c}}const Nd=72,Un=30,Bo=1e4;function Zr(){return{body:0,reflex:0,intellect:0,will:0,perception:0,charm:0}}function Ud(){return{codename:"鴉",stats:Zr(),abilityId:"core_array",coreEpithet:"未登錄的迴路",mainStat:"body",mbti:"ISTJ",backgroundId:"store",manifested:[],armorId:"jacket",hp:10,maxHp:10,encroachment:10,marks:0,heat:0,intel:0,surveillance:0,evidence:!1,killsNormal:0,killsOverman:0,collapse:0,wanted:!1,wantedAt:0,reviveUsed:!1,flags:{}}}function Ha(n){return{version:1,phase:"title",seed:n,rngCount:0,hour:0,cityId:"shinminato",creation:{step:"questions",questionIndex:0,questionIds:[],answers:[],mbti:"ISTJ",backgroundId:"store",codename:"",stats:Zr(),abilityChoices:[],abilityId:null,mainStat:null,coreEpithet:"未登錄的迴路",cityId:"shinminato",rolled:!1,selected:!1},player:Ud(),bonds:[],rivals:[],log:[],stance:"lie_low",contactTarget:null,speed:0,pending:null,eventsDone:[],ending:null,endingText:null,randomNextHour:6,manifestOffers:[],battle:null,lastRoll:null,startedAt:0}}const r_=["鴉","零","灰","刃","雨","無名","十三","月","梟","燼"];function Fd(n){const e={};for(const t of Object.keys(Zr()))e[t]=e_(n);return e}function Jr(n,e){const t=Fd(n),i=Oo.filter(c=>c.id!==e),a=ea(n,i.length?i:Oo),r=Ld(`${n.seed}:${a.id}`)%999+1,s=`${ea(n,X0)}${ea(n,q0)}・第${r}相`,o=ea(n,$a),l=n.creation;n.creation={step:"roll",questionIndex:l.questionIds?.length??10,questionIds:l.questionIds??[],answers:l.answers??[],mbti:l.mbti||"ISTJ",backgroundId:l.backgroundId||"store",codename:l.codename||ea(n,r_),stats:t,abilityChoices:[],abilityId:a.id,mainStat:null,coreEpithet:s,cityId:o.id,rolled:!0,selected:!1},n.bonds=Bd(n)}function s_(n,e){if(n.phase!=="creation"||n.creation.step!=="questions")return;const t=ol(n.creation.questionIds[n.creation.questionIndex]??"");if(!t||!t.options[e])return;if(n.creation.answers=[...n.creation.answers??[],e],n.creation.answers.length<n.creation.questionIds.length){n.creation.questionIndex=n.creation.answers.length;return}const i=a_(n.creation.answers,n.creation.questionIds,()=>jt(n,0,999));n.creation.mbti=i.mbti,n.creation.backgroundId=i.backgroundId,Jr(n)}function Od(n){n.creation.step="questions",n.creation.questionIndex=0,n.creation.questionIds=Id(()=>jt(n,0,1e5)/1e5),n.creation.answers=[],n.creation.mbti="ISTJ",n.creation.backgroundId="store",n.creation.abilityId=null,n.creation.rolled=!1,n.creation.stats=Zr(),n.bonds=[]}function Bd(n){const e=ll.get(n.creation.backgroundId)??Kr[0],t=[],i=(s,o)=>{const l=i_.get(s);return l?{...l,level:Math.max(1,Math.min(5,o)),alive:!0,lastContact:-20}:null},a=i(e.bondId,jt(n,2,3)+1);a&&t.push(a);for(const s of["family","friend","community"]){if(t.length>=3)break;if(t.some(d=>d.category===s))continue;const o=Dd.filter(d=>d.category===s&&!t.some(f=>f.id===d.id));if(!o.length)continue;const l=ea(n,o),c=i(l.id,jt(n,1,3));c&&t.push(c)}const r=(n.creation.mbti?.[0]??"I")==="E";for(const s of t)r&&(s.category==="friend"||s.category==="community")&&(s.level=Math.min(5,s.level+1)),!r&&s.category==="family"&&(s.level=Math.min(5,s.level+1));return t.sort((s,o)=>{const l={family:0,friend:1,community:2};return l[s.category]-l[o.category]})}function kd(n,e){return n.bonds.find(t=>t.alive&&t.category===e)??null}function o_(n){n.creation.stats=Fd(n),n.creation.rolled=!0}function l_(n,e){n.creation.mainStat=e}function zd(n){const e=n.creation;if(!e.abilityId)return;const t=rl.get(e.cityId)??$a[0],i=ca.get(e.abilityId),a=ll.get(e.backgroundId)??Kr[0],r=e.mainStat??Object.keys(e.stats).sort((d,f)=>e.stats[f]-e.stats[d])[0],s={...e.stats};for(const[d,f]of Object.entries(a.statBonus))s[d]=Math.min(20,s[d]+(f??0));s[r]=Math.min(20,s[r]+2);const o=Math.max(6,10+sl(s.body+(i.statBonus.body??0))),l=n.bonds.length?n.bonds:Bd(n),c={};for(const d of a.start.flags??[])c[d]=!0;n.cityId=t.id,n.hour=0,n.player={...Ud(),codename:e.codename.trim()||"鴉",stats:s,abilityId:i.id,coreEpithet:e.coreEpithet,mainStat:r,mbti:e.mbti||"ISTJ",backgroundId:a.id,manifested:[],armorId:a.start.armorId??"jacket",hp:o,maxHp:o,encroachment:Math.max(0,Math.min(200,jt(n,8,16)+(a.start.encroachment??0))),heat:Math.max(0,Math.min(100,a.start.heat??0)),marks:0,intel:a.start.intel??0,surveillance:0,flags:c},n.bonds=l,n.rivals=K0.map(d=>({...d})),n.phase="play",n.stance="lie_low",n.contactTarget=l[0].id,n.log=[],n.eventsDone=[],n.ending=null,n.endingText=null,n.pending={id:"opening"},n.randomNextHour=jt(n,5,8),n.manifestOffers=[],n.speed=1,n.startedAt=Date.now(),Ie(n,"story",`Project Ignis 第七次選別開始。城市：${t.name}。刻印目標：${Un}。`),Ie(n,"story",`顯現真名：〈${e.coreEpithet}〉。MBTI：${n.player.mbti}。背景：${a.name}。`),Ie(n,"story",`背景特典：${a.feature}`)}function Li(n){return rl.get(n.cityId)??$a[0]}function da(n){return ca.get(n.player.abilityId)??ca.get("core_array")}function ko(n){return(n.player.manifested??[]).map(e=>ca.get(e)).filter(e=>!!e)}function Qr(n){return[da(n),...ko(n)]}function Ai(n){const e=new Set;for(const t of Qr(n))for(const i of t.tags)e.add(i);return e}function ra(n,e){const t=n.player.stats[e]??10;let i=0;for(const a of Qr(n))i+=a.statBonus[e]??0;return Math.min(24,t+i)}function na(n,e){return sl(ra(n,e))}function wi(n){const e=n.player.encroachment;return e>=160?4:e>=120?3:e>=90?2:e>=60?1:0}function c_(n){const e=wi(n);return e>0?`顯現增幅 +${e}`:"顯現增幅 ±0"}function d_(n){return Ba.get(n.player.armorId)??Ba.get("jacket")}function hi(n){const e=d_(n);let t="reflex",i=0,a=0;for(const l of Qr(n))l.acStat&&(t=l.acStat),i+=l.acBonus??0,a+=l.acCapBonus??0;n.player.flags?.background_tactics&&(i+=1);const r=na(n,t),s=e.dexCap+a,o=Math.min(r,s);return{value:e.base+o+i,armor:e,stat:t,statMod:r,usedMod:o,cap:s,abilityBonus:i}}function u_(n){const e=hi(n);return`${e.armor.name} ${e.armor.base} + ${li[e.stat]} ${e.usedMod>=0?"+":""}${e.usedMod} + 顯現 ${e.abilityBonus} = AC ${e.value}`}function Hd(n,e,t){const i=Ba.get(e);i&&(n.player.armorId=e,Ie(n,"system",`${t??"更換護甲"}：${i.name}（AC 基礎 ${i.base}，敏捷上限 ${i.dexCap}）。`))}function Gd(n,e,t,i){const a=hi(n),r=Gn(n),s=r+e;r===20||r!==1&&s>=a.value?(Ie(n,"danger",`${i}：d20 ${r} + ${e} = ${s} ≥ AC ${a.value}，命中。`),yn(n,t,i)):Ie(n,"action",`${i}：d20 ${r} + ${e} = ${s} < AC ${a.value}，攻擊被護甲與步伐避開。`)}function h_(n){const e=new Set([n.player.abilityId,...n.player.manifested??[]]),t=Cd.filter(r=>!e.has(r.id)),i=[],a=[...t];for(;i.length<3&&a.length;){const r=jt(n,0,a.length-1);i.push(a[r].id),a.splice(r,1)}return n.manifestOffers=i,i}function f_(n,e){return Li(n).stat===e?1:0}function p_(n){return n>=100?{label:"暴走",tone:"monster",index:5}:n>=90?{label:"崩壞",tone:"critical",index:4}:n>=70?{label:"臨界",tone:"danger",index:3}:n>=40?{label:"侵蝕",tone:"warn",index:2}:n>=20?{label:"不安定",tone:"uneasy",index:1}:{label:"穩定",tone:"stable",index:0}}function Vd(n,e){return e?n>=90?"立即逮捕":n>=70?"指名手配":n>=45?"列管對象":n>=20?"被注意到":"尚未入檔":n>=60?"謠言四起":n>=35?"有人報警":n>=15?"街頭耳語":"無聲"}function Ie(n,e,t){n.log.push({hour:n.hour,kind:e,text:t}),n.log.length>160&&(n.log=n.log.slice(-160))}function Et(n,e,t,i,a=0,r=!1){const s=Gn(n),o=na(n,e),l=f_(n,e);let c=0;(e==="will"||e==="charm")&&n.player.encroachment>=80&&(c=n.player.encroachment>=100?-4:-2),n.player.encroachment>=100&&e==="intellect"&&(c-=1);const d=s+o+a+l+c,f=s===20,u=s===1,p=f||!u&&d>=t,_=`${i}：d20 ${s} ${o>=0?"+":""}${o}${a?` ${a>=0?"+":""}${a}`:""}${l?` +${l}城市`:""}${c?` ${c}侵蝕`:""} = ${d} / DC ${t} ─ ${p?"成功":"失敗"}`;return n.lastRoll={label:i,roll:s,statMod:o,extra:a+l+c,total:d,dc:t,success:p,nat20:f,nat1:u},r||Ie(n,f?"story":p?"roll":"danger",_),{ok:p,roll:s,total:d,dc:t,statMod:o,extra:a+l+c,nat20:f,nat1:u,line:_}}function cl(n){const e=[["body",ra(n,"body")],["reflex",ra(n,"reflex")],["intellect",ra(n,"intellect")]];return e.sort((t,i)=>i[1]-t[1]),e[0][0]}function dl(n){return Math.max(0,...Qr(n).map(e=>e.combat))+wi(n)}function It(n,e,t){e<=0||(n.player.marks+=e,Ie(n,"action",`${t} 刻印 +${e}（${n.player.marks}）。`))}function ae(n,e,t){if(e===0)return;let i=e;e>0&&(i=Math.ceil(e*Li(n).heatMod*(Ai(n).has("beast")?1.15:1))),n.player.heat=Ri(n.player.heat+i,0,100),t&&Ie(n,i>0?"danger":"action",`${t} 警戒指數 ${i>0?"+":""}${i}（${n.player.heat}）。`),n.player.heat>=100&&!n.player.wanted&&n.hour>=48&&(n.player.wanted=!0,n.player.wantedAt=n.hour)}function Ue(n,e,t){if(e===0)return;const i=n.player.encroachment;n.player.encroachment=Ri(n.player.encroachment+e,0,200),t&&Ie(n,e>0?"danger":"bond",`${t} 侵蝕 ${e>0?"+":""}${e}（${i} → ${n.player.encroachment}）。`);for(const a of[60,90,120,160])i<a&&n.player.encroachment>=a&&Ie(n,"danger",`侵蝕率突破 ${a}%。顯現增幅提升（+${wi(n)}）：你的力量變得更清楚，也更不像人。`);i<100&&n.player.encroachment>=100&&Ie(n,"danger","侵蝕率突破 100%。你聽見自己的名字被某種東西咬碎。")}function en(n,e,t){const i=e??da(n).cost+(n.player.manifested?.length??0);return Ue(n,i,t??`發動「${da(n).name}」`),i}function vt(n,e,t){if(e<=0)return;const i=Ai(n).has("intel")?1:0;n.player.intel+=e+i,Ie(n,"action",`${t??"取得情報"} 情報 +${e+i}（${n.player.intel}）。`)}function yn(n,e,t){if(!(e<=0)){if(n.player.hp-e<=0&&Ai(n).has("revive")&&!n.player.reviveUsed){n.player.reviveUsed=!0,n.player.hp=3,n.player.encroachment=Ri(n.player.encroachment+8,0,200),Ie(n,"danger",`${t} 肉體歸零。再生顯現強行把你拼回來（HP 3／侵蝕 +8）。`);return}n.player.hp=Ri(n.player.hp-e,0,n.player.maxHp),Ie(n,"danger",`${t} 肉體 -${e}（${n.player.hp}/${n.player.maxHp}）。`),n.player.hp<=0&&n.phase==="play"&&Qt(n,"dead")}}function ua(n,e,t){if(e<=0)return;const i=n.player.hp;n.player.hp=Ri(n.player.hp+e,0,n.player.maxHp),n.player.hp!==i&&Ie(n,"action",`${t??"包紮傷口"} 肉體 +${n.player.hp-i}（${n.player.hp}/${n.player.maxHp}）。`)}function Ga(n,e,t){const i=n.bonds.find(r=>r.id===e);if(!i||!i.alive)return;const a=i.level;i.level=Ri(i.level+t,1,5),i.level!==a&&Ie(n,t>0?"bond":"danger",`${i.name} 的羈絆 ${t>0?"+":""}${i.level-a}（${i.level}）。`)}function Ln(n){return n.bonds.filter(e=>e.alive).reduce((e,t)=>e+t.level,0)}function Xa(n,e){const t=n.bonds.find(r=>r.id===e);if(!t||!t.alive)return"那條線已經斷了。";if(n.hour-t.lastContact<6)return`${t.name} 才剛掛上電話。再打一次，只會讓對方更擔心。`;const i=8+t.level*2+(Ai(n).has("bond")?4:0)+(n.player.flags?.resonance?2:0);t.lastContact=n.hour,Ue(n,-i,`與${t.name}說話`),Ga(n,e,1),n.player.surveillance+=3,n.player.heat=Ri(n.player.heat+1,0,100),n.player.encroachment>=80?Ie(n,"bond",`${t.name} 在電話那頭沉默很久。「你的聲音……聽起來不太一樣。」`):Ie(n,"bond",`${t.name} 的聲音把你從懸崖邊拉回來一點。`),n.player.surveillance>=9&&Ie(n,"danger","裏八咫注意到你仍與外界保持聯繫。");const a=["你們聊了一些沒有用的話。你發現自己一直在聽。",`「你那邊還好嗎？」${t.name}問。你說還好。`,`${t.name}講了一件很小的事，你笑了。笑完才想起自己在什麼地方。`,"通話很短。掛斷之後，你多站了一會兒。"][(n.hour+t.level)%4];return`你與${t.name}短暫地回到了原本的世界。侵蝕 -${i}。

${a}`}function Kn(n){const e=[{name:n.player.codename,marks:n.player.marks,you:!0},...n.rivals.filter(i=>i.status==="active").map(i=>({name:i.name,marks:i.marks,you:!1}))].sort((i,a)=>a.marks-i.marks);return{rank:e.findIndex(i=>i.you)+1,total:e.length,list:e}}function Qt(n,e){n.phase!=="ending"&&(n.phase="ending",n.ending=e,n.endingText=Pd[e].text,n.pending=null,n.speed=0)}function Ri(n,e,t){return Math.max(e,Math.min(t,n))}const m_={kurokawa:{name:"黑川巌",title:"絞肉機・肉體強化",portrait:"kurokawa",hp:7,ac:13,attack:7,damage:2,reward:"kurokawa",intro:`黑川把鐵鍊在手裡繞了兩圈。

「來啊。」

他笑得很開心。`},ayase:{name:"綾瀬凍",title:"玻璃聖母・結晶",portrait:"ayase",hp:6,ac:15,attack:6,damage:2,reward:"ayase",intro:`綾瀬沒有立刻動手。

她只是把手套拉緊，讓空氣中的水氣凝成一片薄冰。

「我給過你機會。」`},crown:{name:"王冠",title:"最終首領・侵蝕率 100%",portrait:"crown",hp:10,ac:17,attack:10,damage:3,reward:"crown",intro:`王冠站在浮起的貨櫃之間。

他低頭看著你，像在看一件還沒完成的作品。

「來吧。讓我看看人類能走到哪裡。」`},kanda:{name:"神田隼人",title:"最強現代智人・刑警",portrait:"kanda",hp:999,ac:24,attack:99,damage:3,reward:null,unbeatable:!0,endingOnLoss:"caught",intro:`神田把傘靠在牆邊。

他抬起手，一把漆黑的劍刃從天而降，穩穩落進掌心。

「我討厭打架。」

他看了一眼手錶。

「所以我不會花太久。」`}};function St(n,e,t="neutral"){n.battle?.log.push({text:e,tone:t}),(n.battle?.log.length??0)>40&&(n.battle.log=n.battle.log.slice(-40))}function si(n,e,t){n.battle&&(n.player.hp=Math.max(0,n.player.hp-e),St(n,`${t} 肉體 -${e}（${n.player.hp}/${n.player.maxHp}）。`,"danger"),n.player.hp<=0&&__(n,`你倒了下去。

視野邊緣變成黑色，最後一個聲音是自己心跳停下來的回音。`))}function Hs(n,e,t){const i=n.battle;!i||i.unbeatable||(i.enemyHp=Math.max(0,i.enemyHp-e),St(n,`${t} 敵方 -${e}（${i.enemyHp}/${i.enemyMaxHp}）。`,"good"),i.enemyHp<=0&&g_(n))}function Qi(n){const e=n.battle;if(!e||e.status!=="active")return;if(e.unbeatable){si(n,3,"神田的手刀落在你來不及防禦的位置。");return}const t=hi(n).value+e.guard,i=Gn(n),a=i+e.enemyAttack;if(!(i===20||i!==1&&a>=t)){St(n,`${e.enemyName}的攻擊擦過你的防線，水花沿著袖口濺開。d20 ${i} + ${e.enemyAttack} < AC ${t}。`,"good"),e.guard=0;return}e.guard=0,si(n,e.enemyDamage,`${e.enemyName}命中，你聽見自己骨頭裡有一聲悶響。d20 ${i} + ${e.enemyAttack} ≥ AC ${t}。`)}function g_(n){const e=n.battle;e&&(e.status="won",e.result=v_(n,e.enemyId??""),Ie(n,"story",`戰鬥勝利：${e.enemyName}。`))}function __(n,e){const t=n.battle;!t||t.status!=="active"||(t.status="lost",t.result=`${e}

${t.endingOnLoss?"神田隼人把你從地上拉起來，動作比你想像中輕。":"你勉強保住一口氣，退出了戰場。"} `,Ie(n,"danger",`戰鬥失利：${t.enemyName}。`))}function v_(n,e){return e==="kurokawa"?`黑川跪在地上，鐵鍊從手裡滑落。

他還在笑，笑得像一個終於玩夠的孩子。

「你比我……更適合這遊戲。」

終端震動。刻印 +15。`:e==="ayase"?`綾瀬的冰晶碎了一地。

她低頭看著穿過胸口的那一擊，表情不是憤怒，而是失望。

「你原本……可以不用變成這樣的。」

終端震動。刻印 +20。`:e==="crown"?`王冠的結晶裂開一道縫。

他低頭看著傷口，笑了。

「原來我還會痛。」

他沒有倒下。

但你已經在他身上留下了記號。`:"對手倒下了。"}function Ci(n,e){const t=m_[e];t&&(n.pending=null,n.lastRoll=null,n.battle={id:`${e}-${n.hour}-${n.rngCount}`,enemyId:e,enemyName:t.name,enemyTitle:t.title,portrait:t.portrait,enemyHp:t.hp,enemyMaxHp:t.hp,enemyAc:t.ac,enemyAttack:t.attack,enemyDamage:t.damage,round:1,guard:0,momentum:0,log:[{text:t.intro,tone:"danger"}],status:"active",result:null,unbeatable:!!t.unbeatable,reward:t.reward,endingOnLoss:t.endingOnLoss??null})}function x_(n,e){const t=n.battle;if(!t||t.status!=="active")return;const i=na(n,cl(n)),a=dl(n),r=na(n,"charm"),s=na(n,"reflex"),o=na(n,"perception");if(t.unbeatable){if(e==="flee"){const l=Gn(n),c=18;l+s>=c?(t.status="escaped",t.result=`你沒有回頭。

身後的腳步聲停了半拍，然後又開始。

但這一次，它沒有跟上你。`,t.reward="kanda_escape",St(n,`你從神田手裡逃了出去。d20 ${l} + ${s} ≥ DC ${c}。`,"good")):(St(n,`你試著逃。d20 ${l} + ${s} < DC ${c}。`,"bad"),si(n,3,"神田在巷口等你。")),t.round+=1;return}if(e==="power"){Ai(n).has("escape")||Ai(n).has("fate")?(en(n,10,"在神田面前發動顯現"),t.status="escaped",t.result=`你讓顯現替自己爭取了零點幾秒。

神田的手穿過殘影，抓住一把雨。

你已經不在那裡了。`,t.reward="kanda_escape",ae(n,-15),St(n,"顯現替你換來一條命。","good")):(St(n,"你的顯現在他面前像一張濕掉的紙。","bad"),si(n,4,"神田單手扣住你的喉嚨。")),t.round+=1;return}if(e==="guard"){St(n,"你擺出防禦姿勢。神田沒有急著進攻。","neutral"),si(n,1,"但他只用一根手指，就讓你退了半步。"),t.round+=1;return}if(e==="talk"){t.status="lost",t.result=`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」

「什麼？」

「活到現在。」

他把手銬收起來，改為抓住你的手臂。`,t.endingOnLoss="caught";return}St(n,"你揮出的攻擊穿過殘影。神田甚至沒有移動腳步。","bad"),si(n,3,"他等你出手完，才動手。"),t.round+=1;return}if(e==="strike"){const l=Gn(n),c=l+i+a+t.momentum,d=l===20||l!==1&&c>=t.enemyAc;t.momentum=0,d?Hs(n,l===20?3:2,`強攻命中。刀刃咬進去的觸感比你想像中真實。d20 ${l} + ${i} + ${a} = ${c} ≥ AC ${t.enemyAc}。`):(St(n,`強攻落空。你的重心往前多走了半步，收不回來。d20 ${l} + ${i} + ${a} = ${c} < AC ${t.enemyAc}。`,"bad"),si(n,2,"你撲空了，門戶大開。")),t.status==="active"&&Qi(n)}else if(e==="probe")Gn(n)+o>=11?(t.momentum=2,St(n,"你沒有急著出手，先看清對方的重心。下一擊 +2。","good"),Hs(n,1,"你抓住空隙，劃出一道淺傷。")):(St(n,"你看不出破綻。他站的位置沒有留給你任何東西。","bad"),si(n,1,"對方的反擊來得比你想像中快。")),t.status==="active"&&Qi(n);else if(e==="guard")t.guard=3,St(n,"你穩住呼吸，把弱點收起來。本回合 AC +3。","neutral"),n.player.hp<n.player.maxHp&&n.player.hp>0&&(n.player.hp=Math.min(n.player.maxHp,n.player.hp+1),St(n,"你找回一點節奏。肉體 +1。","good")),Qi(n);else if(e==="power"){const l=en(n),c=Gn(n),d=c+i+a+wi(n);c===20||d>=t.enemyAc?Hs(n,3+Math.floor(wi(n)/2),`顯現命中。空氣先於結果震了一下。d20 ${c} + ${i} + ${a} = ${d}。`):St(n,`顯現被閃開。你打中的是一段還來不及散掉的殘影。d20 ${c} + ${i} + ${a} = ${d}。`,"bad"),St(n,`顯現代價：侵蝕 +${l}。`,"danger"),t.status==="active"&&Qi(n)}else e==="talk"?(Gn(n)+r>=13?(St(n,"你說了幾句話。對方的動作慢了半拍，他自己也發現了。","good"),t.momentum=1):St(n,"對方沒有興趣聽你說話。","bad"),t.status==="active"&&Qi(n)):e==="flee"&&(Gn(n)+s>=13?(t.status="escaped",t.result=`你轉身跑進雨裡。

身後沒有追擊。

至少今晚沒有。`,t.reward="escape",St(n,"你脫離了戰鬥。","good")):(St(n,"你沒能拉開距離。鞋底在濕地上打滑。","bad"),Qi(n)));t.round+=1}function y_(n){const e=n.battle;if(e){if(e.status==="won"&&e.reward)if(e.reward==="kurokawa"){It(n,15,"你擊倒了黑川巌"),ae(n,5,"鬧區發生超越者戰鬥"),n.player.killsOverman+=1,n.player.flags.kurokawa_defeated=!0;const t=n.rivals.find(i=>i.id==="kurokawa");t&&(t.status="dead"),St(n,"終端震動。刻印 +15。黑川的排名消失。","good")}else if(e.reward==="ayase"){It(n,20,"你擊倒了綾瀬凍"),ae(n,7,"頂樓發生超越者戰鬥"),n.player.killsOverman+=1,n.player.flags.ayase_dead=!0;const t=n.rivals.find(i=>i.id==="ayase");t&&(t.status="dead"),St(n,"終端震動。刻印 +20。冰晶到最後都沒有融化。","good")}else e.reward==="crown"?(It(n,30,"你重創了王冠"),ae(n,10,"碼頭發生大規模顯現戰"),n.player.flags.crown_injured=!0,St(n,"你在他身上留下了一道無法復原的傷。","good")):e.reward==="kanda_escape"&&(n.player.wanted=!1,St(n,"你暫時甩開了神田。","good"));if(e.status==="lost"&&e.endingOnLoss){Qt(n,e.endingOnLoss),n.battle=null;return}if(e.status==="lost"&&n.player.hp<=0){Qt(n,"dead"),n.battle=null;return}Ie(n,"story",`戰鬥結束：${e.enemyName}（${e.status==="won"?"勝利":e.status==="escaped"?"脫離":"敗北"}）。`),n.battle=null,n.speed=n.speed||1}}const M_={opening:`十一月的雨沒有停過。你抵達新湊市的時候，鞋裡已經進了水，每走一步都發出很輕的、像有人在後面跟著的聲音。

口袋裡有一封黑信封。沒有寄件人，沒有郵票，只有一行銀色的字，印得比信封本身還深。

「於十一月三日零時前抵達指定城市。不得告知任何人。」

零時整，手腕上的終端亮了起來。

螢幕上沒有你的名字。只有代號、刻印目標，和一個正在減少的數字。

72:00:00。

最下面還有一行小字，字級比其他的都小，像是後來補上去的：

「本次選別由裏八咫監督。違規者，與其羈絆者，一併處理。」

你把終端翻過來，想看背面有沒有別的什麼。沒有。只有你的體溫留在玻璃上，慢慢變成霧。

雨落上去，把霧洗掉。

你忽然有種錯覺：這座城市不是你的目的地，而是一個早就替你準備好的牢籠——連門都替你關好了。`,first_night:`便利商店後巷的燈壞了一盞，另一盞在閃。

一個穿西裝的男人把女人按在牆上。他的右手從手腕開始裂開，皮膚像壞掉的傘骨一樣一節一節撐起，露出底下的刃。

不是變形。是生長。

女人沒有尖叫。

她的喉嚨已經發不出聲音了。你看見她的腳尖在地上刮，刮出一小道白痕。

男人的手腕上有一圈紅光。和你的終端一模一樣，連跳動的頻率都一樣。

——他也是超越者。

雨打在你後頸。你數著自己的呼吸，數到第四下才發現，自己一直沒有退。

不是不想退。

是這座城市從你踏進來的那一刻，就把你的退路一併算進去了。`,mio_call:`手機在凌晨三點震動。

來電顯示：澪。

你盯著螢幕看了很久，久到鈴聲停了，隔兩秒又響起來。終端沒有禁止接聽，只禁止說出真相。

「哥。」

她的聲音有點啞，像剛哭過又裝作沒事。

「你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。我叫你，你也不回頭。」

你張了張嘴，發現自己不知道該先說哪一句——先說我沒事，還是先問她現在幾點。

「嗯。」你說。「做夢了。」

「夢到什麼？」

「……便利商店。」

她在電話那頭笑了一聲，很短。「哥，你連做夢都很沒出息。」

你聽見她那邊有人翻身，床架吱了一聲。然後她把聲音壓低：

「你什麼時候回來？」

雨打在窗上，一下一下，很規律。你聽著，忽然覺得自己可以就這樣聽下去，聽到天亮。`,convenience_store:`凌晨四點，你走進街角的便利商店。

自動門的聲音大得嚇人，像有人在耳邊撕開一張紙。

櫃檯後的人抬起頭，愣了一下，然後笑了。

「你怎麼會在這裡？」

是老朋友。你們小時候一起在河堤放過煙火，一起被警察送回家，後來各自走散。他現在穿著店長的藍色圍裙，名牌歪在一邊，寫著「見習」。

電視正在播昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案——這五個字她唸得特別慢，像怕咬到舌頭。

他把音量轉小，眼睛卻沒有離開螢幕。

「你最近晚上不要一個人走。」他說。

你看著他圍裙口袋裡露出半截的護身符。新的，紅繩還沒起毛。

「你也小心。」

他愣了一下，好像想問你為什麼這樣講。但最後只是點頭，把找零放在你掌心，多放了一顆糖。`,shiratori_invite:`終端收到一則沒有寄件人的訊息。

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。」

署名是白鳥理世。

你查了這個名字。三筆新聞，兩筆是失蹤案，一筆是慈善拍賣。照片裡她穿著白裙，對著鏡頭笑，像是知道鏡頭後面有人在看她。

頂樓鋪著紅毯，被雨水泡得發黑。十幾個超越者站在雨裡，沒有人撐傘——不是不怕濕，是不想讓別人以為自己需要保護。

白鳥坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎。」她笑得很輕，像在唸一句排練過的台詞。

「今晚拍賣的不是東西，是情報。」

她停了一下，讓這句話在雨裡站穩。

「而你們每一個人，都是商品。」`,kurokawa_massacre:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊還在滴血。他對著監視器鏡頭笑，抬手比了個手勢——不是挑釁，更像在跟熟人打招呼。

終端彈出公告。

「超越者黑川巌，刻印 +9。目擊者處理中。」

「處理中」，用的是進行式。

你忽然理解了一件事：這不是獵殺。

這是廣告。`,ink_rain:`你在走路，卻突然發現雨是黑色的。

不是汙水。是墨。

整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。有些字被雨水拖出長長的尾巴，像還沒乾就被人擦過。

你的名字。

然後你看見自己的手。

皮膚底下的血管亮著紅光，像一張正在燃燒的地圖，從手腕一路燒向手肘。

不痛。

最可怕的就是不痛。

——流變正在加速。`,midpoint:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。你蹲下來看了很久，像在超市挑一個晚餐。

最後你選了最沒用的一樣。你自己也說不清為什麼。

遠方的港口響起汽笛，長長的一聲，接著是貨櫃落地的悶響。

你忽然意識到，這座城市每一天都在正常運作。有人上班，有人下班，有人在陽台收衣服，有人為了明天要交的報告熬夜。

只有你的人生，被按下了倒數。`,tetsu_dead:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。乾淨得不像傷口，像有人替他開了一扇窗。

終端上，他的代號已經變灰。

最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。血乾了，照片上的人像浮在褐色的水痕裡。

照片上是一個穿水手服的小女孩，比著勝利手勢。背景是學校的鐵門，門上還貼著運動會的海報，日期是上個月。

背面寫著：「爺爺，這次一定要回來。」

你把照片放回他口袋，替他闔上眼睛。手指碰到他臉的時候，還有一點溫度。

你把手收得很慢，像怕吵醒他。`,kanda_rumor:`電視牆臨時插播記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組。負責人是搜查一課的特別顧問，神田隼人。」

畫面切到一個少年。

白得近乎透明的頭髮，黑色立領制服，金色鈕扣。左眼藍，右眼金。

他沒有看鏡頭，正低頭翻一份資料，翻頁的動作很慢，像在確認每一個字。

記者問他，是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」

停了一拍。

「而證據告訴我，有人在替你們數人頭。」

會場安靜了兩秒，然後是二十幾支麥克風同時往前伸的聲音。

跑馬燈從畫面下方滑過：神田隼人，十七歲。無顯現。Homo sapiens。

記者會結束後，網路上開始流傳另一個名字。

——最強現代智人。

有人說，他從來不帶武器進城。

因為他的八把武器都在軌道上。`,ayase_proposal:`綾瀬凍在頂樓等你。

她沒有撐傘。雨落在她頭頂三公分處，凝成細小的冰晶，然後沿著看不見的弧面滑開。

「你應該已經發現了。」

她把終端投影打開。三十個代號，只剩三個還亮著。光點懸在雨裡，像三隻還沒熄的螢火蟲。

「這場遊戲不是給我們贏的。」

「王冠也在這座城市。侵蝕率 100%，裏八咫卻不敢回收他。」

她停頓了一下，不是為了效果，是在算數。

「聯手吧。先殺王冠，再處理神田。」

雨聲忽然變得很近。

「或者，你現在就可以殺我。排名會上升。」`,kotone_song:`車站前的廣場空無一人。

你在那裡遇見了那名社區羈絆。

對方坐在濕透的塑膠椅上，耳機只戴一邊，另一邊垂在胸前。手機裡放著一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

對方看見你，沒有停。只是把耳機分了一半給你，像在留一個位置給你。

你坐下來。塑膠椅發出很響的一聲，兩個人都笑了。

你忽然想起，自己已經三天沒有坐下來了。

歌放到第二段的時候，你發現自己跟著哼了一句。走音了。對方沒有說什麼，只是把音量調大了一點。`,detective_shadow:`便利商店的玻璃反射裡，多了一個人影。

神田隼人站在對街，正在問一個賣傘的老人。他微微彎著腰聽，那個角度剛好讓老人不必抬頭。

他沒有穿制服。但方圓十公尺內的人，都自動讓開，像水流繞過一塊石頭。

然後他抬起頭。

視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。只是把手插進風衣口袋，像在等一個很慢的綠燈。

終端跳出提示。

神田隼人，距離 18 公尺。交戰評估 0.0%。

你數了三次呼吸，才想起自己可以動。`,blackout:`凌晨兩點，整座城市同時停電。

不是意外。

裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近，聲音互相追著跑。有人在樓上喊一個名字，喊了兩次，沒有人回答。

終端亮起臨時規則。

「停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。

你站在原地，第一次發現：原來停電的時候，聽得到這麼多東西。`,evidence:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。

神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：

「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,kanda_arrives:`第四十八小時。

雨忽然停了。

新湊站前，一輛黑色轎車停下。

車門打開。先出現的是一把黑傘，然後是一雙擦得很乾淨的皮鞋。

最後，是一個少年。

白得近乎透明的頭髮被風吹亂。黑色立領制服，金色鈕扣。左眼藍，右眼金。

他看起來頂多十七歲。

你卻在那一瞬間明白了——自己正在被某種大型掠食者注視。

神田隼人。

他沒有帶隊，也沒有鳴笛。只有一個裝著資料的公事包。

他站在車站廣場中央，抬頭看了一眼天空。

不是看監視器。

是看更高、更遠的地方。

那裡有一顆肉眼看不見的衛星。

「天刑」。

八把大罪，靜靜停在那裡。

一個回合，只能落下一把。

終端跳出評估。

交戰評估 0.0%。
勝率 0.0%。

「好大的雨。」

他把傘收起來，甩了甩水，像在跟誰聊天。`,interrogation:`你走進一家凌晨還開著的咖啡店。

店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你，杯口朝你，把手朝自己——很標準的動作，像做過很多次。

「坐吧。」

「我不認識你。」

「但你認識這個。」

他把一個終端放在桌上。是你昨晚丟掉的那一個。

「我在垃圾回收場找到的。你以為丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」

停頓。

「我是來問你，想不想活著離開這座城市。」`,kurokawa_arrested:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。

他沒有反抗。

只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：

「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,quiet_call:`終端顯示，你暫時沒有被列為優先目標。

這意味著，你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」

你說。

自己都不太相信。`,wanted:`終端發出從未聽過的聲音。

低沉、規律，像醫院裡某台機器停止運轉。

紅色字樣跳出來。

「對象已列為指名手配。執行者：神田隼人。剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。

不是照片，不是真名。

但你知道，他已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。

像一個早就知道終點在哪裡的人。`,crown_stage:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

破損的白色西裝，銀色長髮，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀。

黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」

他的聲音溫柔得像在主持婚禮。

「你們都是來看我成為新物種的嗎？」

他抬起手。

整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」

他笑。

「但失敗品，通常最接近真相。」

終端顯示。

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能。`,crown_fall:`王冠把整座碼頭舉了起來。

貨櫃、起重機、海水，全部浮在半空。他的身體已經看不出人形，只剩那頂王冠還亮著。

「你看見了嗎？」

他對著走過來的人說。

「這就是新物種。這就是人類的下一步。」

神田隼人停下腳步。

他手上沒有槍。

他抬頭，看向天空。

下一秒，雲層被一道紅線切開。

不是雷。

是某個從軌道落下的東西。

大氣被燒成白色，一枚漆黑的劍刃穿透雲層，精準地釘在王冠面前。地面沒有爆炸，只有一聲沉悶的、像整個世界被按住的聲響。

「第一魔劍，傲慢。」

神田抬手。

劍刃自己折返，像被看不見的線牽回天上。

——一個回合，只能呼叫一把。

王冠笑了。

黑色的結晶像海嘯一樣撲過去。

神田側身避開。第二回合。

「第二魔劍，憤怒。」

第二道紅線落下。

這一次，劍刃穿過結晶海，切斷了王冠的影子。

王冠的動作停了半拍。

「不可能……我已經不是人了……」

「我知道。」

神田說。

「但你也沒有變成別的東西。」

第三回合。

「第三魔劍，嫉妒。」

劍刃落在王冠胸口。

那一擊沒有光，沒有風，沒有任何超常現象。

只有一個人類，呼叫了人類造出來的武器，把一個自稱神的怪物，釘回地面。

王冠倒下了。

終端顯示。

超越者王冠／已回收。
執行者：神田隼人。

距離閉幕，還有四小時。`,last_choice:`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。

神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印、排名、侵蝕率、羈絆。

所有數字都在那裡，安靜得像一份遺囑。

神田沒有看你。

但你知道，他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`,kanda_ambush:`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口。

雨水從他的風衣下襬滴落。

「我查了三個小時。」

他說。

「你留下來的東西，比你想像中多。」

他手裡握著一把漆黑的劍。

終端瘋狂震動。

交戰評估：0.0%。
勝率：0.0%。
建議：放棄抵抗。

「我不喜歡追人。」

神田說。

「所以我們把這件事結束掉。」

你退後一步。

背後的牆很冷。

天空上，有一顆紅色的光點一閃而過。

——衛星。

你只剩一次選擇。`,manifest_35:`侵蝕率突破 35%。

你在洗手台的鏡子裡，看見自己的眼睛多了一層顏色。

不是血絲。

是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字。

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。

它們都像你。

又都不完全是你。`,manifest_60:`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。

只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。

不確定是城市的，還是你的。`,manifest_85:`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇。

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`,r_witness:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。

3、7、12。

你的臉還沒有完全入鏡。`,r_stray:`自動販賣機旁邊，縮著一個十六、七歲的男孩。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。」

他低下頭。

「我只是想回家。」

終端顯示：超越者，刻印 3。`,r_checkpoint:`前方路口拉起封鎖線。

兩名警察逐一盤查行人，桌上放著一台讀取終端的機器。

你的終端沒有違規紀錄。

但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,r_bond_danger:`你收到一張照片。

照片裡，羈絆者站在平常會出現的地方。身後有一輛黑色廂型車。

照片下面只有一行字。

「協議期間，請保持距離。下一次，不會只是照片。」

裏八咫。

他們在提醒你——羈絆不是弱點。

是抵押品。`,r_collapse:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：

「跳下去就不痛了。」

那聲音很像你自己。`,r_blackmarket:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。

是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

他敲了敲其中一個。

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有上一個客人的運氣。」`,r_supply:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條。

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。」

——裏八咫

紙條下面壓著一支鎮靜劑，和一枚刻印晶片。`},S_={opening:{accept:`你把信封點燃。

火光照亮掌心的裂紋，像一張早就簽好的契約。

雨沒有停。

你卻覺得，從這一刻開始，這座城市終於開始注意你了。`,call_mio:`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「只是下雨。」

你說。

她信了。

你卻在掛斷之後，才發現自己的手一直在抖。`,crack:`終端外殼彈開。

你記下了裏八咫的通訊頻率，也看見一行不該存在的備註：

「神田對策：迴避。」

然後，終端炸出一串藍白火花。

你的手指麻了半小時。`},first_night:{ambush:`刀刃穿過他的後頸時，他還在笑。

「你……也是啊。」

終端震動。

刻印 +10。

女人已經斷氣了。

你沒有救到她。

只殺了一個和你一樣的人。`,intervene:`你抓住他的手腕。

刃在你掌心劃出一道深口，但他退了。

「你瘋了嗎？」

他看著你的終端。

「我們是同一邊的。」

他翻牆逃走。

女人活了下來。

而你記住了他的臉。`,watch:`你看著那條命被抽乾，像看著一盞路燈熄滅。

男人離開時看了你一眼，沒有說話。

終端彈出提示。

「目擊未處理。風險：低。」

你忽然覺得，那個「低」字很刺眼。`,leave:`你走進雨裡。

身後的尖叫被車聲蓋過。

這座城市今晚會死很多人。

你決定先讓自己活著。`},kanda_arrives:{walk:`你從他身邊走過。

距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`,hide:`你讓自己的存在變薄。

神田的視線穿過你原本站的位置，落在你身後。

「奇怪。」

他低聲說。

你已經不在那裡了。`,approach:`「不好意思，車站怎麼走？」

他看著你，看了三秒。

「你已經站在它前面了。」

他從公事包裡抽出一張照片。

「不過，既然你問了——你看過這個人嗎？」

照片上是黑川巌。

你搖頭。

「謝謝。」

他把照片收回去。

「你手上有血的味道，先生。記得洗乾淨。」`,flee:`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`},interrogation:{lie:`他盯著你看了一會，然後把終端收回口袋。

「好。」

他說。

「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。

「如果你改變主意，號碼在杯墊下面。」`,silent:`你什麼也沒說。

他等了五分鐘，然後點了點頭。

「沉默也是一種回答。」

他走了。

咖啡還冒著熱氣。`,partial:`你提到霧見市。

神田第一次出現表情變化。

不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。

「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。

「別死。你可能是唯一能作證的人。」`,attack:`你動了。

然後你發現自己已經在地板上。

神田隼人一隻手扣著你的手腕，另一隻手拿著你掉出來的終端。

他甚至沒有站起來。

「我給過你機會。」`},crown_fall:{run:`你沿著貨櫃之間的縫隙往後退。

神田沒有追。他正蹲在王冠旁邊，讀著什麼。

你聽見他說：

「告訴我，霧見市那晚發生了什麼。」

王冠笑了。`,watch:`王冠躺在地上，看著夜空。

「他們把我們叫做怪物。」

他說。

「然後要我們互相證明誰更不像人。」

神田沒有回答。

只是把手銬扣上，動作很輕。

「小田川知世……」

王冠說。

「在霧見市，對吧？」

神田的手停了半秒。`,approach:`你從陰影裡走出來。

神田沒有轉身。

「你終於肯出來了。」

「我有證據。」

你說。

「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」

他說。

「閉幕之後，到車站找我。」`}};function b_(n,e){return M_[n]??e()}function E_(n,e,t){return S_[n]?.[e]??t}function Wd(n,e){return typeof n.choices=="function"?n.choices(e):n.choices}function T_(n,e){return b_(n.id,()=>typeof n.text=="function"?n.text(e):n.text)}function hn(n,e,t){const i=kd(n,e);i&&Ga(n,i.id,t)}function $d(n,e){const t=kd(n,e);return t?Xa(n,t.id):"那條線已經斷了。"}function di(n,...e){return e.some(t=>n.player.abilityId===t||(n.player.manifested??[]).includes(t))}function ke(n){return{text:n,tone:"good"}}function yt(n){return{text:n,tone:"bad"}}function it(n){return{text:n,tone:"danger"}}function Pe(n){return{text:n,tone:"neutral"}}const A_={id:"opening",at:0,chapter:"序章",title:"黑信封",scene:"street",text:n=>(n.cityId,`十一月三日，凌晨零時。

你抵達這座城市時，雨正下著。

口袋裡的黑信封沒有寄件人，只有一行燙銀的字：

「於十一月三日零時前抵達指定城市。不得告知任何人。」

手腕上的黑色終端已經啟動。螢幕只有三個欄位：你的代號、刻印目標 ${Un}、倒數 72:00。

首頁最上方印著兩行字：

「Homo transscendens（Overman）／Project Ignis 第七次適性選別」

「癌細胞不會自己停止分裂。」

下方還有一行小字：

「本次協議由裏八咫監督。違規者與其羈絆者，將一併處理。」

城市另一端，有人已經開始獵殺。`),choices:[{id:"accept",label:"點燃信封，接受規則。",hint:"「那就開始吧。」",apply:n=>(n.player.flags.accepted=!0,Ue(n,2,"你讓顯現回應了終端"),ke(`信封在指間捲起，火沿著紙邊走，走得比你想像中慢。

掌心的裂紋被照亮。那不是傷口，是一張早就簽好的契約。`))},{id:"call_mio",label:"先確認家人是否安全。",hint:"羈絆 +1／監視 +2",apply:n=>(hn(n,"family",1),n.player.surveillance+=2,Ue(n,-4,"聽見家人的聲音"),ke(`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「下雨。」

她嗯了一聲，沒有再問。你聽見她那頭的電視聲，夜間新聞，音量開得很小。

掛斷之後你才發現，自己剛才一直屏著呼吸。`))},{id:"crack",label:"嘗試拆開手腕上的終端。",hint:"知性檢定 DC 16／失敗會觸電",apply:n=>Et(n,"intellect",16,"拆解裏八咫終端").ok?(vt(n,1,"你讀到終端的內部頻道"),ke(`外殼「喀」一聲彈開，比預期中容易。

裡面沒有炸彈，只有一張薄晶片，和一張貼紙。貼紙上印著：

「神田對策：迴避。」

裏八咫要自己的職員迴避他。你把貼紙撕下來，收進口袋。`)):(yn(n,2,"終端釋放防拆電擊"),n.player.surveillance+=3,yt(`一串藍白火花從接縫噴出來。

你的手指麻了半個小時，左袖燒出一個洞。

更麻煩的是，裏八咫收到了一次「異常接觸」通知。`))}]},w_={id:"first_night",at:2,chapter:"第一夜",title:"第一條命",scene:"alley",text:`你在便利商店後巷看見一個穿西裝的男人。他把一個女人按在牆上，右手從手腕開始裂開，變成一片薄得不像金屬的刃。

女人沒有尖叫。她的喉嚨已經發不出聲音。

男人手腕上有一圈紅色的光——和你的終端一樣。

他也是超越者。`,choices:[{id:"ambush",label:"從背後偷襲他。",hint:"顯現攻擊／刻印 +10／警戒指數 +5",apply:n=>(en(n,void 0,"從死角發動偷襲"),It(n,10,"你補上最後一刀"),ae(n,5,"巷口留下大量血跡"),n.player.killsOverman+=1,n.player.flags.first_kill=!0,it(`刀刃穿過他後頸的時候，他還在笑。

「你……也是啊。」

終端震了一下。刻印 +10。

女人靠著牆滑下去，已經沒有呼吸。

你誰也沒有救到。你只是殺了一個和你一樣的人。`))},{id:"intervene",label:"出聲阻止。",hint:"體魄檢定 DC 13",apply:n=>Et(n,"body",13,"赤手阻止超越者").ok?(vt(n,1,"你記住了他的臉"),ae(n,2,"巷子裡有人報警"),n.player.flags.spared_first=!0,ke(`你抓住他的手腕，握得很緊，緊到刃劃開掌心時，你才發現自己沒有放開。

「你瘋了嗎？」

他看了一眼你的終端，退了一步。

「我們是同一邊的。」

他翻牆走了。女人活下來了，一直在道歉——道歉的對象是你。

你記住了他的臉。`)):(yn(n,2,"刃劃開你的側腹"),ae(n,3,"血跡引來巡邏車"),yt(`你慢了半拍。

刃從側腹劃過，熱的東西流進褲腰。男人趁機消失在雨裡。

女人還在哭。你沒有留下來。那件外套擋了一點，擋得不夠多。`))},{id:"watch",label:"冷眼旁觀，記下規則。",hint:"情報 +1／侵蝕 +2",apply:n=>(vt(n,1,"你觀察到超越者獵殺的模式"),Ue(n,2,"你壓抑住出手的衝動"),Pe(`你看著那條命被抽乾，像看著一盞路燈慢慢熄滅。

男人離開時看了你一眼，沒有說話，也沒有記下你。

終端彈出提示：「目擊未處理。風險：低。」

「低」這個字在你眼前停了很久。`))},{id:"leave",label:"轉身離開。",hint:"警戒指數 -2",apply:n=>(ae(n,-2,"你避開了監視器"),Ue(n,1),Pe(`你走進雨裡。

身後的尖叫被車聲蓋過，蓋得很乾淨。

這座城市今晚會死很多人。你決定先讓自己活著。`))}]},R_={id:"mio_call",at:5,chapter:"第一天",title:"家人的來電",speaker:"水島澪",scene:"alley",text:`手機在凌晨三點震動。來電顯示：澪。

你盯著螢幕看了很久。終端沒有禁止接聽，只禁止說出真相。

「哥，你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。」

她的聲音很近，像隔著一扇沒關緊的門。`,choices:n=>[{id:"lie",label:"說謊。說你只是加班。",hint:"意志檢定 DC 12／失敗侵蝕 +4",apply:e=>Et(e,"will",12,"對家人說謊").ok?(Ue(e,-6,"你暫時把怪物關回身體裡"),hn(e,"family",1),ke(`你聽見自己用很正常的聲音說話：加班、同事、明天會早點睡。

掛上電話之後，你在雨裡站了很久。

是雨聲太吵，你才發現自己一直沒有呼吸。`)):(Ue(e,4,"謊言在喉嚨裡裂開"),yt(`你說到一半停住了。

「哥，你旁邊有人嗎？」

「沒有。」

她沒有再問。電話裡只剩下她那邊很輕的呼吸聲，一直沒有掛。`))},{id:"truth",label:"違反命令，告訴她一點點。",hint:"羈絆 +2／監視 +8／警戒指數 +5",apply:e=>(hn(e,"family",2),e.player.surveillance+=8,ae(e,5,"裏八咫攔截到通話關鍵字"),e.player.flags.told_mio=!0,it(`「如果我沒有回來，」你說，「不要找我。」

電話那頭安靜了五秒。你數得到她的呼吸，一次，兩次。

「你在哪裡？」

你掛斷了。

終端立刻亮起紅字：「偵測到協議外通訊。」`))},{id:"silent",label:"接起，但不說話。",hint:"羈絆 +1／侵蝕 +3",apply:e=>(hn(e,"family",1),Ue(e,3,"沉默比謊言更難"),Pe(`你聽著她呼吸。她也聽著你。

「好了，」她最後說，「我知道你在。」

她先掛了電話。`))},{id:"hangup",label:"掛斷。現在不能有任何牽掛。",hint:"羈絆 -1／侵蝕 +5",apply:e=>(hn(e,"family",-1),Ue(e,5,"你主動剪斷一條線"),yt(`你按下紅色按鈕。

世界安靜了，安靜得像有人把耳朵捂起來。

但你知道，有些線不是掛斷就會消失的。`))}]},C_={id:"convenience_store",at:8,chapter:"第一天",title:"便利商店的燈",speaker:"老朋友",scene:"street",text:`凌晨四點，你走進街角的便利商店。自動門的聲音太大。

櫃檯後的人抬頭，愣了一下，然後笑出來。

「你怎麼會在這裡？」

佐倉大地。你小時候替他擋過一輛車的那個人。他現在穿著店長的藍色圍裙，胸前的名牌歪了。

電視正在播報昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案。`,choices:[{id:"help",label:"留下來幫他搬貨。",hint:"侵蝕 -8／羈絆 +1",apply:n=>($d(n,"friend"),ua(n,1,"熱騰騰的關東煮"),ke(`你們把一箱箱飲料搬進冷藏櫃。他搬錯了一箱，把啤酒放到牛奶旁邊，自己笑了很久。

他講了一堆無關緊要的事：房東、女友、隔壁那隻不會回家的貓。

你發現自己一直在聽，手裡還握著一罐沒開的可樂。

離開時，他把一罐熱咖啡塞進你口袋。「你臉色很差。多睡一點。」`))},{id:"ask",label:"問他有沒有看到可疑的人。",hint:"情報 +1／羈絆 +1",apply:n=>(vt(n,1,"大地提供了目擊情報"),hn(n,"friend",1),Pe(`「最近半夜常有一輛黑色廂型車停在對面。」他把音量轉到最小。「下來的人穿西裝，手腕都戴著黑色的錶。不講話，買東西也不講話。」

他停了一下。

「有一次其中一個看了我一眼。就一眼。我那天晚上沒睡。」

裏八咫。你記住了。`))},{id:"warn",label:"警告他這幾天不要開店。",hint:"羈絆 +1／警戒指數 -2／監視 +2",apply:n=>(hn(n,"friend",1),ae(n,-2,"你讓一條街提早熄燈"),n.player.surveillance+=2,ke(`「為什麼？」他問。

「因為我會經過。」

他看了你很久，久到微波爐「叮」了一聲。

最後他把鐵門拉下一半，留了一道剛好夠人側身進來的縫。

「那你至少進來躲雨。」`))},{id:"leave",label:"買一包菸，什麼都不說。",hint:"情報 +1",apply:n=>(vt(n,1,"你從店裡的監視器畫面看見了什麼"),Pe(`你把零錢放在桌上，拿了一包最便宜的菸。

他沒有找錢，只是看著你。

「下次來，」他說，「別挑這種時間。」

自動門在你身後關上時，你聽見他把電視音量調回去了。`))}]},P_={id:"shiratori_invite",at:11,chapter:"第一天",title:"屋頂拍賣會",speaker:"白鳥理世",portrait:"shiratori",scene:"street",text:`終端收到一則沒有寄件人的訊息：

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。——白鳥理世」

頂樓鋪著紅毯。十幾名超越者站在雨裡，像一群等待上場的演員。

白鳥理世坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎，」她說，「今晚拍賣的不是東西，是情報。而你們每一個人，都是商品。」`,choices:n=>[{id:"trade",label:"留下來交換情報。",hint:"情報 +2／警戒指數 +2",apply:e=>(vt(e,2,"你買到兩份名單"),ae(e,2,"拍賣會的位置被警方掌握"),e.player.flags.met_shiratori=!0,Pe(`你得到兩份名單：一份是裏八咫的回收路線，一份是神田隼人過去偵破的案件，連卷宗編號都抄得整整齊齊。

白鳥收下你的情報費，數都沒數。

「你比我想像中還有趣。」她把面具戴回去。「有趣的人通常活不久，所以我會記得你。」`))},{id:"read",label:"用讀心之瞳看她的真正目的。",hint:"需要讀心之瞳／情報 +3",requires:e=>di(e,"mindeye"),apply:e=>(en(e),vt(e,3,"你看見白鳥記憶裡的一間空房間"),e.player.flags.riya_secret=!0,it(`她心裡有一間上鎖的房間。

房間裡沒有金銀財寶，只有一張全家福，和一份名單。名單最後一行寫著：「白鳥理世／已回收」。

她注意到你的視線。笑容第一次出現裂縫，像面具先裂，人才跟上。

「看見了？」她問。「那就不能讓你活著離開了。」

但她沒有動手。她只是把這件事記進去了。`))},{id:"decline",label:"不進場，在對街觀察。",hint:"警戒指數 -3／情報 +1",apply:e=>(ae(e,-3,"你避開了公開場合"),vt(e,1,"你記下了與會者的臉"),Pe(`你站在對街便利商店的屋簷下，看著那些超越者一個接一個走進大樓。沒有人回頭。

凌晨兩點，只有七個人走出來。

警衛在門口抽菸，什麼也沒看見。`))},{id:"rob",label:"等她落單，搶走她的終端。",hint:"敏捷檢定 DC 16／成功大量刻印",apply:e=>Et(e,"reflex",16,"偷走白鳥的終端").ok?(It(e,15,"你轉走了白鳥理世的刻印"),ae(e,6,"白鳥發布了懸賞"),e.player.flags.riya_enemy=!0,it(`她的終端比你想像中輕，輕得像裡面什麼都沒有。

你翻過屋頂時，聽見她在身後笑。

「拿去吧。」她說。「反正那些刻印本來就該是你的。」

你跑了三條街才停下來。停下來的時候，你才想到要檢查裡面到底有什麼。`)):(yn(e,3,"白鳥的追隨者堵住逃生口"),ae(e,5,"拍賣會爆發衝突"),e.player.flags.riya_enemy=!0,yt(`你才碰到她的手腕，整層樓的燈同時熄滅。

三個人從不同方向撲上來，動作整齊得像排練過。

你逃了出去，肋骨斷了兩根。

第二天早上，你發現口袋裡多了一張拍賣會的邀請卡。`))}]},L_={id:"kurokawa_massacre",at:14,chapter:"第二天",title:"絞肉機",speaker:"黑川巌",portrait:"kurokawa",scene:"street",text:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊滴著血。他對著監視器鏡頭笑，像在跟誰打招呼。

終端彈出公告：「超越者黑川巌，刻印 +9。目擊者處理中。」

這不是獵殺。這是廣告。`,choices:[{id:"fight",label:"正面攔住他。",hint:"回合制戰鬥／勝利 +15 刻印",apply:n=>(Ci(n,"kurokawa"),Pe(`你把外套脫下來，丟進水窪。

雨水在布料上浮成一層薄薄的光。

「喂。」你說。

他回頭了。`))},{id:"ambush",label:"藏在高處，用顯現偷襲。",hint:"顯現／+10 刻印／警戒指數 +7",apply:n=>(en(n),It(n,10,"你偷襲了黑川巌"),ae(n,7,"整條街的玻璃同時碎裂"),n.player.killsOverman+=1,n.player.flags.kurokawa_injured=!0,it(`你的攻擊從天而降。黑川只來得及抬頭。

他沒有躲。他張開雙臂接住那一擊，像在擁抱一輛失控的卡車。

煙塵散去後，他跪在地上，胸口多了一個洞。

「再來。」他說。

「再來啊。」

你走了。走到街口時，你聽見他開始笑。`))},{id:"save",label:"衝進火場，把倖存者拖出來。",hint:"警戒指數 +2／侵蝕 -5／拯救一條命",apply:n=>(ae(n,2,"你在現場留下了腳印"),Ue(n,-5,"你記得自己為什麼要跑"),n.player.flags.saved_civilian=!0,n.player.flags.saved_child=!0,ke(`你在倒塌的招牌下找到一個小女孩。她抓著你的外套不放，指甲陷進布料裡。

你把她抱出來的時候，她一直問：「我媽媽呢？」

你沒有回答。你不能回答。

救護車來的時候，你已經走了。她沒有看見你的臉，只記得你手腕上有紅色的光。`))},{id:"leave",label:"不要捲入。讓他成為誘餌。",hint:"情報 +1／侵蝕 +2",apply:n=>(vt(n,1,"你觀察到黑川的行動模式"),Ue(n,2),Pe(`你退到街角，記下黑川離開的方向。

他會引來神田。這是好事。

至少你是這麼告訴自己的。`))}]},I_={id:"ink_rain",at:17,chapter:"第二天",title:"墨雨",scene:"alley",text:`你在走路，突然發現雨是黑色的。

不是汙水。是墨。整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。

你的名字。

然後你看見自己的手：皮膚底下的血管亮著紅光，像一張正在燃燒的地圖。

侵蝕正在加速。`,choices:[{id:"endure",label:"咬破舌頭，撐住。",hint:"意志檢定 DC 14",apply:n=>Et(n,"will",14,"抵抗侵蝕幻覺",di(n,"limit")?2:0).ok?(Ue(n,-4,"你把幻覺壓回視線邊緣"),ke(`你數著自己的心跳。一百二十下之後，雨恢復成透明的。

牆上的字不見了，只剩下水痕。

只有你記得它們寫了什麼。`)):(Ue(n,8,"幻覺撕開了一道缺口"),yn(n,1,"你在牆上撞傷了肩膀"),yt(`你回過神時，自己正用額頭撞牆。

血順著眉骨流進眼睛，世界變成紅色的。

手機螢幕顯示：侵蝕率上升中。

旁邊有一個撐傘的路人站著看你，看了兩秒，然後繞路走開。`))},{id:"suppress",label:"用顯現強行壓制。",hint:"侵蝕 +8／自動成功",apply:n=>(en(n,8,"用顯現鎮壓失控"),Ue(n,3,"壓制反過來餵養了侵蝕"),Pe(`你讓顯現張開，把所有幻覺吞回去。

雨停了。至少在你站立的半徑三公尺內停了。

代價是，你現在能清楚聽見牆裡有人在說話。`))},{id:"call",label:"打給羈絆者。讓熟悉的聲音定位你。",hint:"羈絆／侵蝕 -12",apply:n=>{const e=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]??n.bonds[0],t=Xa(n,e.id);return ke(t+`

你看著自己的手慢慢恢復成皮膚的顏色。`)}},{id:"surrender",label:"放手。讓它佔領你一部分。",hint:"侵蝕 +12／獲得力量",apply:n=>(Ue(n,12,"你主動讓侵蝕前進"),n.player.flags.let_go=!0,it(`你停止抵抗。

黑色的雨穿透皮膚，溫度像一碗放涼的湯。

你突然能看見這條街所有人的死期。

這很方便。你討厭自己覺得方便。`))}]},D_={id:"midpoint",at:20,chapter:"第二天",title:"中場補給",scene:"docks",text:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。

遠方的港口響起汽笛。你突然意識到，這座城市每一天都在正常運作，只有你的人生被按下了倒數。`,choices:[{id:"medkit",label:"醫療包。",hint:"肉體回復 5",apply:n=>(ua(n,5,"裏八咫的軍規醫療包"),Pe("你把止血凝膠打進傷口。痛覺被一層冰冷的東西蓋住。"))},{id:"chip",label:"情報晶片。",hint:"情報 +3",apply:n=>(vt(n,3,"晶片裡有參賽者座標"),Pe("晶片裡有所有超越者的初始座標，以及一條被標紅的路線：通往第七號貨櫃碼頭。"))},{id:"cleaner",label:"偽造終端。",hint:"警戒指數 -20",apply:n=>(ae(n,-20,"你換上偽造終端"),ke(`你把舊終端丟進海裡。新的終端顯示同一個代號，但所有犯罪紀錄都變成空白。

至少裏八咫的電腦會這麼認為。`))},{id:"booster",label:"強化劑。",hint:"肉體上限 +2／侵蝕 +8",apply:n=>(n.player.maxHp+=2,ua(n,2),Ue(n,8,"你讓顯現改寫自己的身體"),it(`藥劑沿著血管燒過去。你看見自己的影子多了一雙手。

肉體上限提升。代價寫在侵蝕率上。`))},{id:"armor",label:"防彈背心。",hint:"裝備護甲／AC 基礎 13／敏捷上限 +2",apply:n=>(Hd(n,"vest","你換上裏八咫的防彈背心"),ke(`背心比想像中輕。你活動了一下肩膀，確認它不會妨礙顯現。

「擋得住手槍。」箱子上的標籤寫著。「擋不住奇蹟。」`))}]},N_={id:"tetsu_dead",at:23,chapter:"第二天",title:"鐵屑",scene:"docks",text:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。

終端上他的代號已經變灰。最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。照片上是一個小女孩，穿著水手服，比著勝利手勢。

背面寫著：「爺爺，這次一定要回來。」`,choices:[{id:"investigate",label:"檢查傷口與現場。",hint:"情報 +2",apply:n=>(vt(n,2,"你從傷口推斷出兇手的手法"),ae(n,1,"你在現場停留太久"),Pe(`傷口太乾淨了。沒有掙扎，沒有防禦傷。

這不是超越者能做出的切口。

你想起新聞裡那個名字：神田隼人。`))},{id:"take",label:"拿走他的刻印。",hint:"刻印 +4／侵蝕 +3",apply:n=>(It(n,4,"你接收了鐵十兵衛的刻印"),Ue(n,3,"你碰觸了死者的終端"),it(`終端在你手裡震了一下，像一顆還在跳的心。

刻印轉移完成。

你沒有看那張照片第二眼。`))},{id:"mourn",label:"替他蓋上外套。",hint:"侵蝕 -3／羈絆感",apply:n=>(Ue(n,-3,"你為一個陌生人停了下來"),n.player.flags.mourned_tetsu=!0,ke(`你把外套蓋在他臉上。

照片放回他胸口。

「回去看看吧。」你說。雖然你知道他回不去了。`))}]},U_={id:"kanda_rumor",at:26,chapter:"第二天",title:"那個刑警",speaker:"神田隼人",portrait:"kanda",scene:"street",text:n=>`電視牆上臨時插播一則記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組，由搜查一課的特別顧問・神田隼人負責。」

畫面切到一個穿黑色風衣的男人。他沒有看鏡頭，正在低頭翻一份資料。

記者問他是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」他說。「而證據告訴我，有人在替你們數人頭。」

畫面下方跑馬燈：神田隼人，17 歲，無顯現／Homo sapiens。

${Z0.text}`,choices:[{id:"research",label:"蒐集神田的資料。",hint:"情報 +3",apply:n=>(vt(n,3,"你找到神田的舊案卷"),Pe(`七起案件，七個超越者。三個在逮捕前侵蝕率突破 100%，兩個自殺，兩個至今沒有交代動機。

所有案件都有一個共同點：神田隼人走進現場時，沒有人逃得掉。`))},{id:"escape_plan",label:"去車站確認離開城市的路線。",hint:"知性檢定 DC 15／解鎖逃亡路線",apply:n=>Et(n,"intellect",15,"規劃離開城市的路線").ok?(n.player.flags.exit_route=!0,ae(n,-2,"你避開主要道路"),ke(`你找到一條不在裏八咫地圖上的舊貨運線。

終點是隔壁縣的一座小站。

你把路線記在腦裡，沒有寫下來。`)):(ae(n,5,"你在車站被盤查"),yt(`車站的便衣比旅客多。你買了一張票，又在上車前把票撕掉。

有人記下了你的臉。`))},{id:"dismiss",label:"一個普通人而已。不需要在意。",hint:"侵蝕 +2",apply:n=>(Ue(n,2),Pe(`你把電視牆留在身後。

雨又開始下了。

你沒有注意到，畫面裡的神田隼人，正看著監視器的方向。`))}]},F_={id:"ayase_proposal",at:29,chapter:"第二天",title:"玻璃聖母",speaker:"綾瀬凍",portrait:"ayase",scene:"street",text:`綾瀬凍在頂樓等你。她沒有撐傘，雨在她頭頂三公分處凝成細小的冰晶。

「你應該已經發現了，」她說，「這場遊戲不是給我們贏的。」

她把終端投影打開。上面是一份裏八咫內部名單，三十個代號，只有三個還亮著。

「王冠也在這座城市。他侵蝕率 100%，裏八咫卻不敢回收他。」

「我們聯手，先殺王冠，再處理神田。」

她停頓了一下。

「或者，你可以現在殺我。排名會上升。」`,choices:n=>[{id:"ally",label:"結盟。先活過今晚。",hint:"同盟／情報 +2／警戒指數 -2",apply:e=>(e.player.flags.ayase_ally=!0,vt(e,2,"綾瀬分享王冠的情報"),ae(e,-2,"綾瀬替你抹掉一組監視紀錄"),ke(`她伸出戴著黑色手套的手。你握住。

她的手很冷，但沒有結冰。

「記住，」她說，「我不是在救你。我是在提高我們兩個的存活率。」`))},{id:"decline",label:"拒絕。我不相信任何人。",hint:"情報 +1",apply:e=>(vt(e,1,"你記住王冠的弱點"),Pe(`「隨你。」她把終端收起來。「但王冠出現時，不要站在我前面。」

她走進雨裡。冰晶在身後碎成一地。`))},{id:"betray",label:"趁她轉身，偷襲。",hint:"回合制戰鬥／勝利 +20 刻印",apply:e=>(e.player.flags.ayase_enemy=!0,Ci(e,"ayase"),Pe("你踏出一步，冰面在腳下裂開。"))}]},O_={id:"kotone_song",at:32,chapter:"第三天",title:"雨中的歌",speaker:"街角的人",scene:"alley",text:`車站前的廣場空無一人。

白石琴音坐在濕透的塑膠椅上，抱著一把便宜的木吉他，唱一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

她看見你，沒有停。只是把下一段唱得小聲一點，像在留一個位置給你。

你突然想起，自己已經三天沒有坐下來了。`,choices:[{id:"listen",label:"坐下來，聽完。",hint:"侵蝕 -10／羈絆 +1",apply:n=>($d(n,"community"),Ue(n,-4,"你把整首歌聽完"),ke(`她唱完最後一句，吉他弦還在震。

「你每次都只聽一半。」她說。

「這次聽完了。」

她笑了。雨聲突然變得很遠。`))},{id:"truth",label:"告訴她，你可能活不過明天。",hint:"羈絆 +2／監視 +5",apply:n=>(hn(n,"community",2),n.player.surveillance+=5,n.player.flags.told_kotone=!0,it(`她聽完，沒有問「什麼遊戲」，也沒有報警。

她只是把吉他放下，走過來抱住你。

「那你今天不要走。」

你在她肩膀上聞到雨和廉價洗髮精的味道。

終端在口袋裡震動。你沒有看。`))},{id:"coin",label:"把錢放進吉他盒，離開。",hint:"侵蝕 -3",apply:n=>(Ue(n,-3,"你留下了一點什麼"),Pe(`硬幣落在吉他盒裡，聲音很清脆。

她沒有抬頭。

你走到街角時，聽見她重新開始唱同一首歌。`))}]},B_={id:"detective_shadow",at:36,chapter:"第三天",title:"影子",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你在便利商店的玻璃反射裡看見他。

神田隼人站在對街，正在問一個賣傘的老人。他沒有穿制服，但方圓十公尺內的人都自動讓開。

然後他抬起頭，視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。

只是把手插進風衣口袋，像在等一個很慢的綠燈。

你的終端顯示：神田隼人，距離 18 公尺，交戰評估 0.0%。`,choices:[{id:"act_normal",label:"假裝路人，繼續買東西。",hint:"魅力檢定 DC 14",apply:n=>Et(n,"charm",14,"在神田面前演一個普通人").ok?(ae(n,-4,"神田沒有把你列入名單"),ke(`你拿起一罐咖啡，走到櫃檯結帳。手沒有抖。

走出店門時，神田已經不在對街了。

你鬆了一口氣，才發現咖啡罐被你捏凹了。`)):(ae(n,7,"神田記住了你的臉"),n.player.wantedAt=Math.max(n.player.wantedAt,n.hour),yt(`你付錢時，店員問：「先生，你還好嗎？」

你抬頭，發現神田就站在你身後。

「他看起來很好。」神田替你回答。「只是有點累。」

他拿走你手上的咖啡，付了錢，然後走了。`))},{id:"leave_fast",label:"立刻離開這個街區。",hint:"警戒指數 +3／安全",apply:n=>(ae(n,3,"你匆忙離開引起注意"),Pe(`你拐進巷子，走了三個街區才停下來。

回頭時，雨裡沒有人。`))},{id:"confront",label:"主動走過去。",hint:"情報 +2／警戒指數 +8／危險",apply:n=>(vt(n,2,"你和神田說上了話"),ae(n,8,"你主動接近神田"),n.player.flags.talked_kanda=!0,it(`你走到他面前。他沒有驚訝。

「你知道我在查什麼。」他說，不是問句。

「知道。」

「那你應該也知道，我抓過比你更難抓的東西。」

他把一張名片放進你的口袋。「想說的時候，打這個號碼。」

你低頭看名片。上面只有一個名字：神田隼人。`))},{id:"erase",label:"用顯現抹掉他周圍的監視紀錄。",hint:"需要記憶篡改／警戒指數 -10",requires:n=>di(n,"memory"),apply:n=>(en(n),ae(n,-10,"你改寫了整條街的監視紀錄"),Pe(`你讓雨聲蓋過電子訊號。監視器裡，神田身邊的畫面變成一片雪花。

他抬頭看了一眼鏡頭。

然後笑了。`))}]},k_={id:"blackout",at:40,chapter:"第三天",title:"停電",scene:"docks",text:`凌晨兩點，整座城市同時停電。

不是意外。裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近。

你的終端顯示：

「臨時規則：停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。`,choices:[{id:"hunt",label:"趁亂狩獵。",hint:"刻印 +8／警戒指數 +12／侵蝕 +5",apply:n=>(It(n,8,"你在停電中收割刻印"),ae(n,12,"整條街陷入混亂"),Ue(n,5,"你在黑暗裡放開了手"),n.player.killsNormal+=3,it(`你分不清自己殺了幾個人。

終端只顯示：刻印 +8。

電力恢復時，街上多了幾具屍體。你已經不在那裡了。`))},{id:"protect",label:"留在便利商店，幫大地守住店。",hint:"警戒指數 -6／羈絆 +1／侵蝕 -6",apply:n=>(ae(n,-6,"你沒有參與停電騷亂"),hn(n,"friend",1),Ue(n,-6,"你選擇站在門口"),n.player.flags.protected_store=!0,ke(`你和大地把鐵門拉下，只留一道縫。

外面有人砸門。大地拿著掃把站在你旁邊，手在抖。

「你會沒事的。」你說。

你沒有告訴他，這句話是對你自己說的。`))},{id:"hide",label:"躲進地下停車場。",hint:"警戒指數 -8",apply:n=>(ae(n,-8,"你在黑暗裡消失"),Pe(`你在地下三樓坐了一整夜。

手機沒有訊號。終端顯示刻印目標不變。

上方不時傳來跑步聲。你沒有動。`))}]},z_={id:"evidence",at:44,chapter:"第三天",title:"不該存在的文件",scene:"alley",text:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,choices:[{id:"copy",label:"複製證據。以備不時之需。",hint:"證據／情報 +2／監視 +3",apply:n=>(n.player.evidence=!0,vt(n,2,"你複製了Project Ignis的完整紀錄"),n.player.surveillance+=3,ke(`你把檔案傳進終端的加密區。

這份東西能毀掉裏八咫，也能毀掉你。

你決定先留著。`))},{id:"burn",label:"燒掉。知道太多隻會死得更快。",hint:"警戒指數 -5／侵蝕 +3",apply:n=>(ae(n,-5,"你銷毀了裏八咫的文件"),Ue(n,3),Pe(`紙張燒得很慢。

你看著小田川知世的照片捲曲、變黑，最後消失。

你告訴自己，這是在保護他。`))},{id:"leak",label:"匿名傳給電視臺。",hint:"警戒指數 +15／監視 +10／公開真相",apply:n=>(n.player.evidence=!0,ae(n,15,"Project Ignis的片段在網路上流傳"),n.player.surveillance+=10,n.player.flags.leaked=!0,it(`三分鐘後，一個匿名帳號發布了文件截圖。

五分鐘後，影片被下架。

但已經有人備份了。

你的終端響起裏八咫的警告音：「來源追蹤中。」`))}]},H_={id:"kanda_arrives",at:48,chapter:"第三天",title:"他到了",speaker:"神田隼人",portrait:"kanda",scene:"street",text:n=>`第 48 小時。

雨突然停了。

新湊站前，一輛黑色轎車停下。車門打開，先出現的是一把黑色的傘，然後是一雙擦得很乾淨的皮鞋。

神田隼人。

他沒有帶隊，沒有鳴笛，只有一個裝著資料的公事包。

他站在車站前的廣場中央，抬頭看了一眼監視器。

你離他不到三十公尺。

他沒有看你，卻像已經把你的骨骼、心跳與逃跑路線全部讀完。

終端顯示：

交戰評估 0.0%
勝率 0.0%
AC 24

逃離機率 14%

神田把傘收起來，甩了甩水。

「好大的雨。」他說，像在跟誰聊天。

${n.player.heat>=45?"他的視線在人群中掃過，停在你身上半秒。":"他的視線越過你，落在一個賣傘的老人身上。"}`,choices:n=>[{id:"walk",label:"低頭，走過去。",hint:"意志檢定 DC 12 + 警戒指數壓力",apply:e=>{const t=12+Math.floor(e.player.heat/25);return Et(e,"will",t,"在神田面前保持鎮定").ok?(ae(e,-3,"神田暫時沒有把你列入名單"),ke(`你從他身邊走過。距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`)):(ae(e,8,"你的視線引起神田注意"),yt(`你在經過時看了他一眼。

只有一眼。

神田微微側頭。「我們見過嗎？」

你搖頭。他沒有追問，但你知道，他記住了。`))}},{id:"hide",label:"用顯現隱藏自己。",hint:"顯現／自動脫離視線",apply:e=>(en(e,void 0,"在神田面前啟動隱匿"),ae(e,-6,"你從監視畫面裡消失"),Pe(`你讓自己的存在變薄。

神田的視線穿過你原本站的位置，落在你身後。

「奇怪。」他低聲說。

你已經不在那裡了。`))},{id:"approach",label:"主動走過去，假裝問路。",hint:"情報 +2／極高風險",apply:e=>(vt(e,2,"你從神田口中得到一條線索"),ae(e,5,"你和神田面對面交談"),e.player.flags.talked_kanda=!0,it(`「不好意思，車站怎麼走？」

他看著你，看了三秒。

「你已經站在它前面了。」

他從公事包裡抽出一張照片。「不過，既然你問了——你看過這個人嗎？」

照片上是黑川巌。

你搖頭。

「謝謝。」他把照片收回去。「你手上有血的味道，先生。記得洗乾淨。」`))},{id:"flee",label:"立刻轉身離開。",hint:"警戒指數 +5",apply:e=>(ae(e,5,"你在車站前突然奔跑"),yt(`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`))}]},G_={id:"interrogation",at:51,chapter:"第三天",title:"盤問",speaker:"神田隼人",portrait:"kanda",scene:"alley",text:`你走進一家凌晨還開著的咖啡店。店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你。

「坐吧。」

「我不認識你。」

「但你認識這個。」他把你昨晚丟掉的終端放在桌上。「我在垃圾回收場找到的。你以為把它丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」他說。「我是來問你，你想不想活著離開這座城市。」`,choices:n=>[{id:"lie",label:"裝傻。什麼終端？",hint:"魅力檢定 DC 15",apply:e=>Et(e,"charm",15,"對神田說謊").ok?(ae(e,-2,"神田暫時接受你的說法"),ke(`他盯著你看了一會，然後把終端收回口袋。

「好。」他說。「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。「如果你改變主意，號碼在杯墊下面。」`)):(ae(e,10,"神田識破你的謊言"),e.player.wanted=!0,e.player.wantedAt=e.hour,yt(`「你剛才說你沒見過終端。」他指著你的手腕。「那為什麼你在發抖？」

他拿起手機，按了一個號碼。

「搜查一課。幫我查一個代號。」`))},{id:"silent",label:"保持沉默。",hint:"意志檢定 DC 14",apply:e=>Et(e,"will",14,"在神田面前保持沉默").ok?Pe(`你什麼也沒說。

他等了五分鐘，然後點了點頭。「沉默也是一種回答。」

他走了。咖啡還冒著熱氣。`):(Ue(e,4,"沉默讓侵蝕有機可乘"),ae(e,4,"你的異常反應被記錄"),yt(`你咬著牙，卻聽見自己手腕上的終端發出低鳴。

神田低頭看了一眼。「它不喜歡沉默，對吧？」`))},{id:"partial",label:"承認一部分。問小田川知世的事。",hint:"情報 +2／警戒指數 +4",apply:e=>(vt(e,2,"神田證實了霧見集體失蹤與裏八咫的關聯"),ae(e,4,"你承認自己知道內情"),e.player.flags.kanda_partial=!0,Pe(`你提到霧見市。

神田第一次出現表情變化。不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。「別死。你可能是唯一能作證的人。」`))},{id:"attack",label:"攻擊他。現在，趁他沒有防備。",hint:"勝率 0.0%／回合制",apply:e=>(Ci(e,"kanda"),Pe("你站起來，把咖啡杯推開。"))}]},V_={id:"kurokawa_arrested",at:54,chapter:"第三天",title:"回收通知",scene:"street",text:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。他沒有反抗，只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,choices:n=>[{id:"hunt_gap",label:"利用黑川留下的空檔，狩獵他的地盤。",hint:"刻印 +5／警戒指數 +5",apply:e=>(It(e,5,"你接收了黑川地盤上的刻印"),ae(e,5,"你出現在黑川的地盤"),it(`黑川的據點沒有人防守。

你拿走他留下的補給與兩個落單的超越者。

終端排名上升。你沒有感到高興。`))},{id:"erase",label:"趁警方注意力轉移，銷毀自己的痕跡。",hint:"警戒指數 -15",apply:e=>(ae(e,-15,"你把痕跡藏進黑川的案子裡"),ke(`你把兩起案件嫁禍給黑川。

裏八咫的系統接受了。

死人不會辯解。`))},{id:"visit_ayase",label:"去找綾瀬凍。她應該也看到了。",hint:"情報 +1／同盟",apply:e=>(vt(e,1,"綾瀬分析神田的手法"),e.player.flags.ayase_ally?(hn(e,"family",1),Pe(`綾瀬在頂樓等你。

「他一次都沒有用武器。」她說。「黑川不是被打敗的。他是被讀完的。」

她看向你。「王冠出現的時候，不要看他的眼睛。神田也是。」`)):Pe(`頂樓沒有人。

只有地上用冰晶排成的一行字：「還來得及。選一邊。」`))}]},W_={id:"quiet_call",at:57,chapter:"第三天",title:"櫻花開了",speaker:"水島澪",condition:n=>!n.player.wanted&&n.player.heat<70,scene:"alley",text:`終端顯示你暫時沒有被列為優先目標。

這意味著你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」你說。`,choices:[{id:"promise",label:"承諾一定會回去。",hint:"羈絆 +2／侵蝕 -8",apply:n=>(hn(n,"family",2),Ue(n,-8,"你給了自己一個必須回去的理由"),ke(`「嗯。」她說。「我等你。」

掛上電話後，你把額頭靠在冰冷的玻璃上。

第一次覺得，「回去」這兩個字有重量。`))},{id:"honest",label:"告訴她，你可能會變成不是人的東西。",hint:"羈絆 +1／侵蝕 -12／監視 +4",apply:n=>(hn(n,"family",1),Ue(n,-12,"你把最害怕的事說出口"),n.player.surveillance+=4,Pe(`電話那頭安靜了很久。

「那你就回來讓我看看。」她說。「如果認不出來，我會打你一巴掌。」

你笑了。這是三天來第一次。`))},{id:"cut",label:"說你會盡量。然後掛斷。",hint:"侵蝕 +2",apply:n=>(Ue(n,2),Pe(`「盡量」是一個很方便的詞。

它聽起來像承諾，實際上什麼都沒有。

她說好。你聽見她還想說什麼，但你掛斷了。`))}]},$_={id:"wanted",at:57,chapter:"第三天",title:"指名手配",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你的終端發出從未聽過的聲音。

低沉、規律，像醫院裡某臺機器停止運轉。

螢幕上跳出紅色字樣：

「對象已列為指名手配。
執行者：神田隼人。
剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。不是照片，不是真名。但你知道，神田已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。像一個已經知道終點在哪裡的人。`,condition:n=>n.player.wanted||n.player.heat>=70,choices:n=>[{id:"run",label:"逃。趁他還沒鎖定位置。",hint:"敏捷檢定 DC 16／降低警戒指數",apply:e=>Et(e,"reflex",16,"甩開神田的包圍網").ok?(ae(e,-18,"你換了三個藏身處"),e.player.wanted=!1,ke(`你穿過三條後巷、一座停車場、一間打烊的居酒屋。

腳步聲消失了。

你蹲在垃圾箱後面，聽見自己的心跳比雨聲還大。`)):(ae(e,5,"你被迫往市中心移動"),e.player.wanted=!0,e.player.wantedAt=e.hour,yt(`你跑進了一條死巷。

腳步聲在巷口停下。

「我不急。」神田說。「你也跑不了三個小時。」`))},{id:"hide_deep",label:"躲進地下。切斷所有訊號。",hint:"警戒指數 -20／肉體 -2",apply:e=>(ae(e,-20,"你從城市表面消失"),yn(e,2,"地下骯髒的環境讓傷口惡化"),e.player.wanted=!1,Pe(`你鑽進廢棄的下水道。

水淹到小腿，空氣裡有鐵鏽味。

終端失去訊號。你第一次覺得，被城市遺忘也是一種保護。`))},{id:"surrender_talk",label:"主動聯絡神田，要求談判。",hint:"情報 +2／高風險",apply:e=>(vt(e,2,"神田在電話裡給了你一個地址"),ae(e,-8,"你主動聯絡神田"),e.player.flags.kanda_contact=!0,it(`電話只響了一聲。

「你終於打來了。」

「我要談條件。」

「碼頭，第七號倉庫。天亮前。」

他掛斷了。你看著手機，不確定這是不是另一種逮捕令。`))}]},X_={id:"reckoning",at:60,chapter:"第三天",title:"清算前夜",scene:"docks",text:n=>{const e=Kn(n);return`第六十小時。

終端把成績單攤在你面前，字體和平常一樣冷。

刻印：${n.player.marks}／${Un}。
排名：${e.rank}／${e.total}。

${n.player.marks>=Un?"「已達標。剩餘 12 小時。請維持排名。」":"「未達標。剩餘 12 小時。建議：提高效率。」"}

港口那邊，最後一艘貨輪正在離港，船身壓得很低。

城市的另一頭傳來爆炸聲。

不是雷。這個季節沒有雷。

王冠要來了。

你只剩下十二個小時，決定自己要不要繼續當人。`},choices:n=>[{id:"spree",label:"走上街。把所有還能殺的都算進分數。",hint:"刻印 +8／警戒指數 +18／侵蝕 +12",apply:e=>(It(e,8,"你在最後的夜晚大開殺戒"),ae(e,18,"屠殺規模失控"),Ue(e,12,"你讓顯現整晚沒有休息"),e.player.killsNormal+=8,e.player.flags.massacre=!0,it(`你不記得自己走了幾條街。

終端不停震動，像在替你數拍子。

天亮前，你停在一個十字路口。

四面的監視器都對準你。你沒有躲。`))},{id:"hunt_rival",label:"找出排名在你前面的超越者。",hint:"狩獵檢定 DC 15／成功 +10",apply:e=>Et(e,cl(e),15,"狩獵排名前段超越者",dl(e)).ok?(en(e),It(e,10,"你獵殺了一名排名前段的超越者"),ae(e,4,"碼頭發生戰鬥"),e.player.killsOverman+=1,it(`你在他補給的時候找到他。

戰鬥沒有超過一分鐘。

終端排名更新。你上升了。

他掉進海裡，沒有濺起太大的水花。`)):(Gd(e,9,3,"獵物的反擊"),ae(e,4,"碼頭發生戰鬥"),yt(`你低估了他。

他逃進貨櫃之間，留下一道血跡和一句話：「你也是被算好的。」`))},{id:"hide",label:"躲起來。分數不重要了。",hint:"警戒指數 -12／侵蝕 -3",apply:e=>(ae(e,-12,"你放棄了最後的狩獵"),Ue(e,-3,"你選擇不再弄髒手"),Pe(`你找了一個沒有監視器的倉庫，坐在角落裡。

外面有人在跑，有人在叫，有人死了。

你沒有出去。

這是三天來第一次，你覺得安靜是好的。`))},{id:"bond",label:"打最後一通電話。",hint:"侵蝕 -15／羈絆 +1",apply:e=>{const t=e.bonds.filter(a=>a.alive).sort((a,r)=>r.level-a.level)[0],i=t?Xa(e,t.id):"所有號碼都已無人接聽。";return ke(i+`

你把手機收進口袋。

如果明天還能醒來，你想再聽一次。`)}}]},q_={id:"crown_stage",at:63,chapter:"終章",title:"王冠",speaker:"王冠",portrait:"crown",scene:"docks",text:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

他穿著一套破損的白色西裝，銀色長髮被海風吹起，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀：黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」他說，聲音溫柔得像在主持婚禮。「你們都是來看我成為新物種的嗎？」

他抬起手。整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」他笑。「但失敗品，通常最接近真相。」

終端顯示：

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能`,choices:n=>[{id:"ally_ayase",label:"和綾瀬聯手。",hint:"需要同盟／回合制戰鬥",requires:e=>!!e.player.flags.ayase_ally,apply:e=>(Ci(e,"crown"),Pe("綾瀬的冰牆在你身旁升起。"))},{id:"solo",label:"獨自挑戰。",hint:"回合制戰鬥／高風險",apply:e=>(Ci(e,"crown"),Pe("你獨自走向光帶盡頭。"))},{id:"side_crown",label:"跪下。選擇站在王冠這邊。",hint:"刻印 +15／警戒指數 +10／走向另一種結局",apply:e=>(e.player.flags.crown_ally=!0,It(e,15,"王冠分給你一部分刻印"),ae(e,10,"你公開與王冠並肩"),Ue(e,10,"你接受了王冠的邀請"),it(`你單膝跪下。

王冠把手放在你的頭上。黑色的結晶順著他的手指爬進你的頭髮。

「很好。」他說。「那就一起看看，人能不能審判神。」

終端發出警告。你關掉了它。`))},{id:"hide",label:"不要進場。讓他和神田相遇。",hint:"警戒指數 -10／情報 +2",apply:e=>(ae(e,-10,"你從碼頭撤退"),vt(e,2,"你觀察到王冠與神田的動線"),Pe(`你退到起重機後面。

王冠沒有追你。他的視線越過整座碼頭，落在一個正走過來的人身上。

那個人沒有撐傘。

神田隼人。`))}]},Y_={id:"crown_fall",at:68,chapter:"終章",title:"一擊",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:n=>`王冠把整座碼頭舉了起來。

貨櫃、起重機、海水，全部浮在半空。他的身體已經看不出人形，只有那頂王冠還亮著。

「你看見了嗎？」他對著走過來的人說。「這就是新物種。這就是人類的下一步。」

神田隼人停下腳步。

他手上沒有槍。

他只是從口袋裡拿出一副手銬。

王冠笑了。黑色的結晶像海嘯一樣撲過去。

然後，一切停了。

神田站在王冠面前，右手扣住他的手腕，左腳踩住他的影子。

「你說完了嗎？」

王冠的結晶開始碎裂。從指尖，到胸口，到那頂王冠。

「不可能……」王冠說。「我已經不是人了……」

「我知道。」神田說。「但你也沒有變成別的東西。」

他一拳打在王冠的胸口。

那一拳沒有光，沒有風，沒有任何超常現象。

只有一個普通人，把一個自稱神的怪物，打回原形。

王冠倒在地上。終端顯示：

超越者王冠／已回收。
執行者：神田隼人。

${n.player.flags.crown_injured?`你看見王冠胸口的舊傷。那是你留下的。

神田順著傷口的方向看過來。

「原來如此。」他說。「你也出了手。」`:`神田甩了甩手，像剛做完一件不怎麼費力的事。

他抬頭，看向你藏身的方向。`}

距離閉幕，還有 4 小時。`,choices:[{id:"run",label:"趁神田處理王冠，立刻撤退。",hint:"解鎖逃亡時機／警戒指數 +3",apply:n=>(n.player.flags.escape_ready=!0,ae(n,3,"你從碼頭消失"),Pe(`你沿著貨櫃之間的縫隙往後退。

神田沒有追。他正蹲在王冠旁邊，讀著什麼。

你聽見他說：「告訴我，霧見市那晚發生了什麼。」

王冠笑了。`))},{id:"watch",label:"留下來，看完。",hint:"情報 +2／侵蝕 -3",apply:n=>(vt(n,2,"你聽見王冠說出裏八咫的秘密"),Ue(n,-3,"你看見怪物被當成人對待"),Pe(`王冠躺在地上，看著夜空。

「他們把我們叫做怪物，」他說，「然後要我們互相證明誰更不像人。」

神田沒有回答。

他只是把手銬扣上，動作很輕。

「小田川知世……」王冠說，「在霧見市，對吧？」

神田的手停了半秒。`))},{id:"approach",label:"走向神田。",hint:"需要證據或高羈絆",requires:n=>n.player.evidence||Ln(n)>=6,apply:n=>(n.player.flags.confront_kanda=!0,ae(n,-5,"你主動走向神田"),it(`你從陰影裡走出來。

神田沒有轉身。「你終於肯出來了。」

「我有證據。」你說。「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」他說。「閉幕之後，到車站找我。」`))}]},K_={id:"last_choice",at:70,chapter:"終章",title:"最後的選擇",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:n=>{const e=Kn(n);return`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印 ${n.player.marks}／${Un}
排名 ${e.rank}／${e.total}
侵蝕 ${n.player.encroachment}%
羈絆 ${Ln(n)}

神田沒有看你，但你知道他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`},choices:n=>[{id:"escape_now",label:"現在就走。離開這座城市。",hint:"需要羈絆 ≥8 或已規劃路線／警戒指數 <70",requires:e=>Ln(e)>=8||!!e.player.flags.exit_route,apply:e=>e.player.heat>=70?(ae(e,5,"警方在出口攔截"),Qt(e,"caught"),it(`你走到檢查站時，警察已經在那裡等了。

神田從車裡下來，替你關上車門。

「我以為你會選另一條路。」`)):(Qt(e,"escape"),ke(`你沒有回頭。

海風很冷，天邊已經泛白。`))},{id:"confess",label:"把證據交給神田。",hint:"需要證據與情報 ≥5，或羈絆 ≥6",requires:e=>e.player.evidence&&(e.player.intel>=5||Ln(e)>=6),apply:e=>(Qt(e,"confess"),ke(`你走到神田面前，把終端放在他的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」`))},{id:"close",label:"迎接閉幕。讓裏八咫算分。",hint:"依刻印、排名、侵蝕與警戒指數決定結局",apply:e=>(e.player.flags.accept_close=!0,Pe(`你站在原地，看著碼頭外的城市燈火一盞一盞亮起。

終端開始倒數。

00:59:59。`))},{id:"fight_kanda",label:"挑戰神田隼人。",hint:"勝率 0.0%／回合制",apply:e=>(Ci(e,"kanda"),Pe("你朝他走過去。"))}]},Z_={id:"kanda_ambush",at:48,chapter:"第三天",title:"無法戰勝的人",speaker:"神田隼人",portrait:"kanda",scene:"alley",condition:n=>n.player.wanted&&n.hour>=n.player.wantedAt+3&&n.hour<72,text:n=>`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口，雨水從他的風衣下襬滴落。

「我查了三個小時。」他說。「你留下來的東西比你想像中多。」

他抬起手，一把漆黑的劍刃從雲層間落下，靜靜停在他掌中。

終端瘋狂震動：

交戰評估：0.0%
勝率：0.0%
建議：放棄抵抗

「我不喜歡追人。」神田說。「所以我們把這件事結束掉。」

你退後一步。背後的牆很冷。

侵蝕率 ${n.player.encroachment}%。警戒指數 ${n.player.heat}。

你只剩一次選擇。`,choices:n=>[{id:"fight",label:"應戰。",hint:"勝率 0.0%／回合制",apply:e=>(Ci(e,"kanda"),Pe("你沒有退路。"))},{id:"flee",label:"全力逃跑。",hint:"敏捷檢定 DC 18 + 警戒指數壓力",apply:e=>Et(e,"reflex",18+Math.floor(e.player.heat/25),"從神田手中逃脫").ok?(e.player.wanted=!1,ae(e,-25,"你甩開了神田的包圍"),yn(e,1,"你從二樓窗戶摔下去"),ke(`你衝向巷底的鐵門，肩膀撞開門栓。

身後的腳步聲停了一拍。

只有一拍。但那已經夠了。

你翻過兩道牆，跳進河裡。神田沒有追上來。`)):(Qt(e,"caught"),it(`你跑出三步。

神田的手從背後扣住你的脖子，把你按在牆上。

「我說過，」他的聲音很輕，「我不喜歡追人。」`))},{id:"power",label:"用顯現脫身。",hint:"需要瞬絕、空蟬、界限突破或記憶篡改",requires:e=>di(e,"flash","shell","limit","memory"),apply:e=>(en(e,10,"在神田面前全力發動顯現"),e.player.wanted=!1,ae(e,-15,"你從神田的視線裡消失"),di(e,"memory")?it(`你看著他的眼睛，把「你」從他的記憶裡剪掉。

神田的表情空白了半秒。

「奇怪。」他低聲說。「我剛才在追誰？」

你貼著牆，慢慢後退。

他看了你一眼，視線穿過你，走了。`):di(e,"limit")?it(`你強行突破身體極限，抓住他的手，把他摔向牆壁。

神田穩住身體，第一次露出訝異。

那零點五秒的破綻，足夠你消失在雨裡。`):it(`你留下一個空殼。

神田一腳踩碎它，低頭看著地上不屬於任何人的臉。

「不錯的把戲。」他說。「下次，我會先確認心跳。」`))},{id:"bond_rescue",label:"發出求救訊號。",hint:"需要羈絆 ≥8",requires:e=>Ln(e)>=8,apply:e=>{const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Ga(e,t.id,-1),e.player.wanted=!1,ae(e,-12,"一輛車衝進巷口，把你載走"),yn(e,1,"你摔進車後座"),it(`巷口亮起車燈。

${t.name}把油門踩到底，車子擦著神田的身側衝過去。

你抓住車門，被拖行了十幾公尺才爬進後座。

後照鏡裡，神田站在原地，記下了車牌。

「你瘋了嗎？」${t.name}喊。

「對。」你說。「但謝謝你。」`)}},{id:"surrender",label:"投降。",hint:"結束逃亡",apply:e=>(Qt(e,"caught"),Pe(`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」他說。

「什麼？」

「活到現在。」他把手銬收起來，改為抓住你的手臂。「走吧。你有很多事要告訴我。」`))}]},J_={id:"closing",at:72,chapter:"閉幕",title:"第七十二小時",scene:"docks",text:n=>{const e=Kn(n);return`零時整。

城市上空的烏雲裂開一道縫，第一束晨光落在海面上，像有人終於把這座城市打開。

終端停止倒數。

「Project Ignis，結束。」

刻印：${n.player.marks}。
排名：${e.rank}。
侵蝕率：${n.player.encroachment}%。
羈絆：${Ln(n)}。

海風把你的衣服吹得貼在背上。遠處有清潔車的聲音，很日常。

最終判定中。`},choices:[{id:"finish",label:"等待判定。",hint:"接受一切後果",apply:n=>{if(n.player.encroachment>=100||n.player.collapse>=3)return Qt(n,"monster"),it(`終端沒有給出判定。

它只是發出一聲很長的雜訊。

你低頭，看見自己的手已經不再是手。`);if(n.player.wanted&&n.player.heat>=80)return Qt(n,"caught"),it(`直升機的探照燈打在碼頭上。

神田隼人從光裡走出來。`);const e=Kn(n);return n.player.marks>=Un&&e.rank===1&&n.player.heat<80?(Qt(n,"throne"),Pe("「第一名。」裏八咫的廣播說。「恭喜你成為普通人。」")):n.player.marks>=Un?(Qt(n,"survivor"),Pe("「刻印達標。排名未達第一。授予生存資格。」")):n.player.encroachment<40&&Ln(n)>=6?(Qt(n,"nameless"),ke(`終端顯示：「未達標。回收名單確認中。」

然後，一隻手按住了螢幕。`)):(Qt(n,"recycled"),yt("「刻印未達標。回收程序啟動。」"))}}]},Q_=[{id:"r_witness",at:0,random:!0,chapter:"插曲",title:"鏡頭",scene:"street",text:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但他的手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。3、7、12。

你的臉還沒有完全入鏡。`,choices:[{id:"talk",label:"放下手，告訴他不要拍。",hint:"魅力檢定 DC 12",apply:n=>Et(n,"charm",12,"安撫目擊學生").ok?(ae(n,-2,"直播被關掉"),ke(`他放下手機，反覆道歉。

你看著他跑遠，慶幸自己還記得怎麼對人說話。`)):(ae(n,7,"直播片段開始流傳"),yt(`他越退越遠，鏡頭始終對著你。

等你離開時，那支影片已經有三千次觀看。`))},{id:"erase",label:"用顯現抹掉影片。",hint:"需要記憶篡改或灰燼領域",requires:n=>di(n,"memory","ash"),apply:n=>(en(n),ae(n,-6,"你抹除了影片與記憶"),Pe(`你讓他的手機黑屏三秒。

再亮起時，相簿裡什麼都沒有。

他愣在原地，然後慢慢放下手。`))},{id:"threat",label:"威脅他。",hint:"警戒指數 +5／羈絆 -?",apply:n=>(ae(n,5,"你的威脅被路人聽見"),Ue(n,2),yt(`你說出那句話時，自己都覺得陌生。

他跑了。

但他的手機還留在地上，錄影鍵亮著。`))}]},{id:"r_stray",at:0,random:!0,chapter:"插曲",title:"同類",scene:"alley",text:`一個十六、七歲的男孩縮在自動販賣機旁邊。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。我只是想回家。」

終端顯示：超越者，刻印 3。`,choices:[{id:"help",label:"幫他藏起來。",hint:"侵蝕 -6／羈絆感／情報 +1",apply:n=>(Ue(n,-6,"你幫一個陌生人藏身"),vt(n,1,"男孩告訴你一條裏八咫的路線"),n.player.flags.helped_stray=!0,ke(`你把他帶到車站置物櫃，給了他一點錢。

「往北走。不要用顯現。不要相信穿西裝的人。」

他點頭，跑進人群。

你不知道他能不能活下來。`))},{id:"kill",label:"完成你的工作。",hint:"刻印 +10／警戒指數 +6",apply:n=>(It(n,10,"你結束了一個新生的超越者"),ae(n,6,"販賣機旁留下血跡"),n.player.killsOverman+=1,Ue(n,3,"你沒有猶豫"),it(`他沒有反抗。

甚至在你動手之前，就閉上了眼睛。

終端震動。刻印 +10。

你把他放進販賣機後面的空隙，用紙箱蓋住。`))},{id:"ignore",label:"假裝沒看見。",hint:"侵蝕 +2",apply:n=>(Ue(n,2),Pe(`你走過去。

他在背後叫你。「等等！你知道怎麼離開這裡嗎？」

你沒有回頭。`))}]},{id:"r_checkpoint",at:0,random:!0,chapter:"插曲",title:"臨檢",scene:"street",text:`前方路口拉起封鎖線。兩名警察逐一盤查行人，桌上放著一臺讀取終端的機器。

你的終端沒有違規紀錄，但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,choices:[{id:"bluff",label:"拿出普通上班族的口氣應對。",hint:"魅力檢定 DC 13",apply:n=>Et(n,"charm",13,"應付警方臨檢").ok?(ae(n,-2,"你順利通過臨檢"),ke(`警察看了一眼你的證件，揮手放行。

「早點回家。」他說。

你點頭。這座城市裡，還有人以為你有家。`)):(ae(n,7,"你的證件被標記"),yt(`機器響了一聲。

警察抬頭看你。「先生，跟我們來一下。」

你退後一步，鑽進巷子。`))},{id:"sneak",label:"繞路。走後巷。",hint:"敏捷檢定 DC 12",apply:n=>Et(n,"reflex",12,"避開臨檢").ok?(ae(n,-1),ke(`你翻過一道矮牆，從洗衣店後門穿出去。

封鎖線被你甩在身後。`)):(ae(n,4,"你被發現繞路"),yn(n,1,"你從牆上摔下來"),yt(`你落地時踩到鐵皮。

兩束手電筒同時照過來。你拼命跑，身後的哨聲越來越遠。`))},{id:"erase",label:"用顯現讓機器讀不到你。",hint:"顯現／警戒指數 -5",apply:n=>(en(n),ae(n,-5,"你幹擾了臨檢設備"),Pe(`機器螢幕閃了一下，顯示「讀取錯誤」。

警察拍了拍機器，皺眉。「又壞了。」

他讓你過去了。`))}]},{id:"r_bond_danger",at:0,random:!0,chapter:"插曲",title:"被盯上的人",condition:n=>n.player.surveillance>=9&&n.bonds.some(e=>e.alive),scene:"alley",text:n=>`你收到一張照片。

${n.bonds.filter(t=>t.alive).sort((t,i)=>i.level-t.level)[0].name}站在平常會出現的地方，身後有一輛黑色廂型車。

照片下面只有一行字：

「協議期間，請保持距離。
下一次，不會只是照片。」

裏八咫。

他們在提醒你，羈絆不是弱點，是抵押品。`,choices:n=>[{id:"protect",label:"立刻去見他／她，把監視引開。",hint:"警戒指數 +8／監視 -6／羈絆 +1",apply:e=>{const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Ga(e,t.id,1),ae(e,8,"你把裏八咫的注意力引回自己身上"),e.player.surveillance=Math.max(0,e.player.surveillance-6),it(`你故意走進便利商店的監視範圍，對著鏡頭比了一個手勢。

${t.name}看見你，愣了一下。

「你怎麼——」

「不要跟我說話。」你說。「假裝不認識我。」

你轉身離開。裏八咫的車跟上來了。`)}},{id:"cut",label:"刪掉所有聯絡方式。現在。",hint:"羈絆 -2／侵蝕 +6／監視 -4",apply:e=>{e.player.surveillance=Math.max(0,e.player.surveillance-4);const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Ga(e,t.id,-2),Ue(e,6,"你親手刪掉最後幾條線"),yt(`你把通訊錄一個一個刪掉。

刪到最後一個名字時，手指停了很久。

最後你還是按了下去。

世界變得很安靜。`)}},{id:"bait",label:"把裏八咫的車引向別的超越者。",hint:"智力檢定 DC 14／成功監視大降",apply:e=>Et(e,"intellect",14,"誤導裏八咫的監視小組").ok?(e.player.surveillance=Math.max(0,e.player.surveillance-8),ae(e,2,"你把監視小組引向別處"),ke(`你讓裏八咫的車跟著一輛錯誤的計程車開了三個街區。

照片不會再來了。至少今晚不會。`)):(ae(e,5,"裏八咫識破你的誤導"),yt(`黑色廂型車在路口停下。

車窗降下一半，有人朝你點了點頭。

他們知道你在做什麼。`))}]},{id:"r_collapse",at:0,random:!0,chapter:"插曲",title:"你在哪裡",condition:n=>n.player.encroachment>=70,scene:"alley",text:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：「跳下去就不痛了。」

那聲音很像你自己。`,choices:[{id:"hold",label:"抓緊欄杆，數到一百。",hint:"意志檢定 DC 16",apply:n=>Et(n,"will",16,"抵抗侵蝕的低語",di(n,"limit")?2:0).ok?(Ue(n,-5,"你把自己拉回天橋上"),ke(`你數到八十七時，欄杆恢復了。

你跌坐在人行道上，嘔吐。

但你在這裡。`)):(Ue(n,6,"你差一點放手"),n.player.collapse+=1,yt(`你回過神時，自己已經翻過欄杆。

一隻手抓住你的外套。

是個不認識的上班族。「你還好嗎？」

你點頭。你不好。`))},{id:"call",label:"打給羈絆者。",hint:"侵蝕 -12",apply:n=>{const e=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];if(!e)return yt(`通訊錄是空的。

你把手機放回口袋，自己走下天橋。`);const t=Xa(n,e.id);return ke(t+`

「你在哪裡？」她問。

「天橋。」你說。「現在沒事了。」`)}},{id:"jump",label:"鬆手。",hint:"侵蝕 +15／肉體 -4",apply:n=>(Ue(n,15,"你向侵蝕讓步"),yn(n,4,"你從天橋墜落"),it(`你沒有死。

顯現在落地前一刻接管了身體。

你躺在破碎的柏油路面上，聽見自己的骨頭重新排列。

路人尖叫。你站起來，走了。`))}]},{id:"r_blackmarket",at:0,random:!0,chapter:"插曲",title:"黑市",scene:"docks",text:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有——」他敲了敲其中一個終端，「上一個客人的運氣。」`,choices:[{id:"buy_med",label:"用刻印換醫療補給。",hint:"刻印 -3／肉體全滿",requires:n=>n.player.marks>=3,apply:n=>(n.player.marks-=3,ua(n,99,"黑市醫療補給"),Ie(n,"action","黑市交易：刻印 -3。"),ke(`他把一組沒有標籤的點滴掛在鐵架上。

「十分鐘。」他說。「你會覺得自己重新出生一次。」

他沒有說謊。`))},{id:"buy_id",label:"用刻印換偽造通行證。",hint:"刻印 -4／解鎖逃亡路線",requires:n=>n.player.marks>=4,apply:n=>(n.player.marks-=4,n.player.flags.exit_route=!0,ae(n,-5,"你取得偽造通行證"),ke(`通行證上的照片是別人的，名字也是。

但條碼是真的。

「往北。」男人說。「別回頭。」`))},{id:"buy_armor",label:"用刻印換結晶外殼。",hint:"刻印 -6／AC 基礎 14／敏捷上限 +1",requires:n=>n.player.marks>=6,apply:n=>(n.player.marks-=6,Hd(n,"crystal","你買下死者的結晶外殼"),Pe(`外殼貼上胸口時，你聽見一個不屬於自己的呼吸聲。

「上一個客人留下的。」男人說。「他很安靜。」`))},{id:"rob",label:"搶走他的貨。",hint:"敏捷檢定 DC 15／風險",apply:n=>Et(n,"reflex",15,"搶劫黑市商人").ok?(n.player.flags.exit_route=!0,ua(n,4,"黑市補給"),ae(n,6,"黑市發生搶案"),it(`你抓起兩組補給和通行證就跑。

身後傳來防毒面具下的笑聲。

「你會後悔的。」`)):(yn(n,3,"黑市的保鑣圍住你"),ae(n,4,"黑市發生衝突"),yt(`冰櫃後面走出三個人。

你打倒了兩個，第三個在你背上留下了一道電擊燒傷。`))},{id:"leave",label:"不交易，離開。",hint:"情報 +1",apply:n=>(vt(n,1,"你記住了黑市的位置"),Pe(`你退出去，記下冷凍倉庫的編號。

以後也許用得上。`))}]},{id:"r_supply",at:0,random:!0,chapter:"插曲",title:"補給空投",scene:"docks",text:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，上面的編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條：

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。
——裏八咫」

紙條下面壓著一支鎮靜劑和一枚刻印晶片。`,choices:[{id:"take",label:"拿走補給。",hint:"刻印 +3／警戒指數 +3",apply:n=>(It(n,3,"你收下裏八咫的刻印晶片"),ae(n,3,"你被裏八咫標記為配合對象"),Pe(`晶片插進終端，刻印 +3。

鎮靜劑你沒有用。你不想欠他們更多。`))},{id:"destroy",label:"踩碎晶片，留下鎮靜劑。",hint:"警戒指數 -3／侵蝕 -4",apply:n=>(ae(n,-3,"你拒絕了裏八咫的施捨"),Ue(n,-4,"你告訴自己還能選"),ke(`你把晶片踩碎。

碎片在雨裡閃了一下，像一顆很小的星星。

鎮靜劑你留下了。以備不時之需。`))},{id:"trace",label:"追蹤無人機的來源。",hint:"感知檢定 DC 14／情報 +2",apply:n=>Et(n,"perception",14,"追蹤裏八咫無人機").ok?(vt(n,2,"你找到裏八咫的臨時指揮點"),ae(n,2,"你靠近了裏八咫的指揮點"),ke(`無人機往港區飛。

你跟著它，找到一棟沒有招牌的倉庫。

門口停著三輛黑色廂型車。`)):(ae(n,4,"你追丟了無人機"),yt(`無人機升高，消失在雲層裡。

你站在空蕩的碼頭上，手裡只剩一張紙條。`))}]}];function j_(n){return!n.manifestOffers||n.manifestOffers.length===0?[{id:"manifest_hold",label:"壓抑這次分裂。",hint:"不取得新顯現／侵蝕 -3",apply:e=>(Ue(e,-3,"你壓抑了顯現的增生"),Pe(`你把它壓回骨頭裡。

它沒有消失，只是暫時安靜了。`))}]:n.manifestOffers.map(e=>{const t=ca.get(e);return t?{id:`pick_${e}`,label:`${t.name}／${t.type}`,hint:`${t.passive} ${t.active}`,apply:i=>(i.player.manifested.push(e),i.manifestOffers=[],Ie(i,"story",`顯現增生：「${t.name}」。${t.passive}`),ke(`新的顯現沿著舊的傷口長出來。

你獲得了「${t.name}」。

${t.tagline}

它會留下來，直到你不再是現在的你。`))}:{id:`pick_${e}`,label:e,hint:"未知顯現",apply:i=>Pe("什麼都沒有發生。")}})}function Gs(n,e,t,i){return{id:n,at:0,chapter:"顯現",title:t,scene:"alley",condition:a=>a.player.encroachment>=e&&!a.eventsDone.includes(n),text:i,choices:a=>j_(a)}}const ev=[Gs("manifest_35",35,"第一次分裂",`侵蝕率突破 35%。

你在洗手台的鏡子裡看見自己的眼睛多了一層顏色。

不是血絲，是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字：

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。它們都像你，又都不完全是你。`),Gs("manifest_60",60,"第二次分裂",`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。它只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。不確定是城市的，還是你的。`),Gs("manifest_85",85,"第三次分裂",`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇：

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`)],zo=[A_,w_,R_,C_,P_,L_,I_,D_,N_,U_,F_,O_,B_,k_,z_,H_,G_,V_,W_,$_,Z_,X_,q_,Y_,K_,J_,...ev],Xd=Q_,ul=new Map([...zo,...Xd].map(n=>[n.id,n]));function qd(n,e){n.phase!=="play"||n.pending||(n.stance=e)}function tv(n,e){n.phase==="play"&&n.bonds.some(t=>t.id===e&&t.alive)&&(n.contactTarget=e,n.stance="contact")}function Ho(n,e){[0,1,2,4,8].includes(e)&&(n.speed=e)}function nv(n){for(const e of zo)if(!(e.random||n.eventsDone.includes(e.id))&&e.at===n.hour&&(!e.condition||e.condition(n)))return e;for(const e of zo)if(!(e.random||n.eventsDone.includes(e.id))&&e.at<n.hour&&e.condition&&e.condition(n))return e;return null}function iv(n){const e=Xd.filter(t=>!n.eventsDone.includes(t.id)&&(!t.condition||t.condition(n)));return e.length?e[jt(n,0,e.length-1)]:null}function hl(n){if(n.phase!=="play"||n.pending||n.battle||n.ending)return;if(n.hour>=Nd){Vs(n,ul.get("closing"));return}n.hour+=1,av(n);const e=nv(n);if(e){Vs(n,e),Ws(n);return}if(n.hour>=n.randomNextHour){const t=iv(n);if(t){Vs(n,t),n.randomNextHour=n.hour+jt(n,5,9),Ws(n);return}n.randomNextHour=n.hour+3}ov(n),Ws(n)}function av(n){for(const e of n.rivals)e.status==="active"&&(e.marks=Math.round((e.marks+e.rate)*10)/10)}function Vs(n,e){if(n.pending={id:e.id},e.id.startsWith("manifest_")&&(!n.manifestOffers||n.manifestOffers.length===0)&&h_(n),e.id==="tetsu_dead"){const t=n.rivals.find(i=>i.id==="tetsu");t&&(t.status="dead",t.note="死在第七號碼頭。刻印被裏八咫回收。")}if(e.id==="kurokawa_arrested"){const t=n.rivals.find(i=>i.id==="kurokawa");t&&(t.status="arrested",t.note="被神田隼人逮捕。刻印全數回收。")}if(e.id==="kurokawa_massacre"){const t=n.rivals.find(i=>i.id==="kurokawa");t&&n.player.flags.kurokawa_defeated&&(t.status="dead",t.note="倒在常夜中央通。至死都在笑。")}if(e.id==="ayase_proposal"){const t=n.rivals.find(i=>i.id==="ayase");t&&n.player.flags.ayase_dead&&(t.status="dead")}}function Ws(n){if(n.phase==="play"&&(n.player.encroachment>=100&&rv(n),n.phase==="play")){if(n.hour>=48&&(!n.player.wanted&&n.player.heat>=70&&(n.player.wanted=!0,n.player.wantedAt=n.hour,Ie(n,"danger","神田隼人已將你列為指名手配。包圍網開始收縮。")),n.player.wanted&&n.player.heat<35&&(n.player.wanted=!1,Ie(n,"system","警戒指數降到閾值以下。神田暫時撤回對你的直接追捕。"))),n.hour===24||n.hour===48||n.hour===60){const e=Kn(n);Ie(n,"rival",`排名更新：第 ${e.rank}／${e.total}。領先者 ${e.list[0].name}（${Math.floor(e.list[0].marks)} 刻印）。`)}sv(n)}}function rv(n){const e=15+Math.floor((n.player.encroachment-100)/5);Et(n,"will",e,"抵抗侵蝕失控",Ai(n).has("will")?2:0).ok?Ie(n,"bond","你把那個聲音壓回去了。至少這一小時。"):(n.player.collapse+=1,Ie(n,"danger",`失控 ${n.player.collapse}/3。你的身體做了你不記得的事。`),n.player.collapse>=3&&Qt(n,"monster"))}function sv(n){n.player.heat>=70&&!n.player.flags.warn70&&(n.player.flags.warn70=!0,Ie(n,"danger",n.hour>=48?"警戒指數 70：神田的檔案上出現了你的代號。":"警戒指數 70：你的代號開始在參賽者之間流傳。")),n.player.heat>=90&&!n.player.flags.warn90&&(n.player.flags.warn90=!0,Ie(n,"danger","警戒指數 90：裏八咫已將你標記為優先回收對象。")),n.player.encroachment>=100&&!n.player.flags.warn100&&(n.player.flags.warn100=!0,Ie(n,"danger","侵蝕率 100%：每一小時，你都要重新說服自己還是人。"))}const Oc=["城市沒有因為你的倒數而停下來。上班族撐著傘走過，沒有人抬頭。","便利商店的自動門反覆開合。店員在補貨，電視在播天氣。","遠處有警笛，但沒有往這個方向來。暫時。","雨水把牆上的塗鴉沖成一片模糊的紅。","一隻烏鴉停在電線上，歪著頭看你，像在看一份不太有趣的報告。","你經過一面玻璃，發現自己已經習慣不去看倒影。","車站廣播念著陌生的站名。每一班車都通往這座城市的其他角落。","清潔隊正在沖洗昨晚的血跡。水混著泡沫流進排水溝。","有人在騎樓下賣傘。他一個晚上沒賣出幾把，因為雨已經下得太久。","早餐店的鐵門拉開一半，蒸氣湧出來，帶著醬油和豆漿的味道。","一台提款機吐出一張收據，被風吹到你腳邊。上面的餘額不夠住一晚旅館。","兩個高中生蹲在便利商店門口分一碗關東煮。他們說話的聲音很小，笑聲很大。","你數了三個路口、四個監視器，沒有一個對著你。這讓你更不安。","醫院的急診燈亮著。門口有人抽菸，抽到一半就哭了，然後又點了一根。","計程車司機把窗搖下來問你要不要搭車。你說不用。他把窗搖回去，沒有多問。","天橋下有人在睡覺，被子是拆開的紙箱。他的呼吸很穩。"];function ov(n){const e=Li(n);switch(n.stance){case"lie_low":{ae(n,n.player.flags?.streetwise?-4:-3,"你避開主要街道"),n.hour%2===0&&ua(n,n.player.flags?.field_medicine?2:1,"你在廢棄網咖睡了兩小時"),Ie(n,"action",`你躲進${e.tag.split("・")[1]??"城市"}的陰影裡。終端上的警戒指數慢慢下降。`);break}case"hunt_normal":{It(n,1,"你處理了一個落單的普通人"),ae(n,5,"屍體被發現"),n.player.killsNormal+=1,n.player.encroachment>=100&&(It(n,2,"你回過神時，現場已經沒有活人"),ae(n,5,"失控殺戮留下大量痕跡"),Ue(n,2)),Ie(n,"action","你沒有用顯現。只是刀，和一個來不及喊出聲的人。");break}case"power_hunt":{const t=en(n),i=n.player.abilityId==="ash"||(n.player.manifested??[]).includes("ash")?3:2;It(n,i,"顯現獵殺完成"),ae(n,7,"顯現的殘留痕跡"),n.player.killsNormal+=1,Ie(n,"action",`「${e.name}」的某一條街安靜了。刻印 +${i}，侵蝕 +${t}。`);break}case"hunt_overman":{const t=en(n),i=13+Math.floor(n.hour/30),a=Et(n,cl(n),i,"狩獵落單超越者",dl(n));if(a.ok){const r=a.nat20?15:10;It(n,r,a.nat20?"你壓倒性擊殺了一名超越者":"你殺死了一名超越者"),ae(n,4,"超越者屍體被發現"),n.player.killsOverman+=1,Ie(n,"action","對方的顯現在你身上留下灼痕。你拿走他的刻印，也拿走他的終端。")}else Gd(n,5+Math.floor(n.hour/20),2,"超越者的反擊"),ae(n,4,"戰鬥留下血跡"),Ie(n,"danger","對方比你更快。你逃走了，但傷口還在流血。");Ie(n,"system",`這次狩獵消耗了 ${t} 點侵蝕。`);break}case"investigate":{const t=11+(n.player.heat>=50?2:0);Et(n,"perception",t,"調查城市異象").ok?(vt(n,1,"你拼湊出一條線索"),ae(n,1,"你出現在不該出現的地方"),Ie(n,"action","你找到了另一名超越者的移動路線，還有一張被撕掉一半的裏八咫地圖。")):(ae(n,2,"你問了太多問題"),Ie(n,"action","你花了一整個小時，只確認了一件事：有人比你更早來過。"));break}case"contact":{let t=n.contactTarget;if(t||(t=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]?.id??null),t){const i=Xa(n,t);Ie(n,"action",i)}else Ie(n,"danger","你打開通訊錄，發現沒有任何一個號碼還能撥通。");break}case"destroy":{const t=en(n,6),i=n.player.abilityId==="ash"||(n.player.manifested??[]).includes("ash")?3:2;It(n,i,"城市破壞被折算為刻印"),ae(n,9,"大規模破壞"),Ie(n,"action",`你讓一棟無人建築倒下。裏八咫把混亂記成 ${i} 枚刻印。侵蝕 +${t}。`);break}}n.hour%3===0&&Ie(n,"story",Oc[(n.hour/3+n.cityId.length)%Oc.length].replace("城市",e.name))}function lv(n,e,t){if(n.phase!=="play"||!n.pending||n.pending.id!==e||n.pending.result)return;const i=ul.get(e);if(!i)return;const a=Wd(i,n).find(s=>s.id===t);if(!a||a.requires&&!a.requires(n))return;n.lastRoll=null;const r=a.apply(n);if(n.eventsDone.push(e),n.battle){n.pending=null;return}n.ending||(n.pending={id:e,result:E_(e,t,r.text),resultTone:r.tone,title:i.title})}function cv(n){n.pending?.result&&(n.pending=null)}function fl(n){if(!n.pending||n.battle)return null;const e=ul.get(n.pending.id);if(!e)return null;const t=Wd(e,n).map(i=>({id:i.id,label:i.label,hint:i.hint,disabled:!!i.requires&&!i.requires(n)}));return{id:e.id,chapter:e.chapter,title:e.title,speaker:e.speaker,portrait:e.portrait,scene:e.scene,text:T_(e,n),choices:t,result:n.pending.result,resultTone:n.pending.resultTone}}function ha(n){const e=Math.floor(n/24)+1,t=n%24,i=`${String(t).padStart(2,"0")}:00`;return{day:e,time:i,full:`第 ${e} 天 ${i}`}}function At(n){try{if(typeof localStorage>"u")return;localStorage.setItem("overman-erosion-city.save.v1",JSON.stringify(n))}catch{}}function pl(){var n,e,t,i,a,r,s,o,l;try{if(typeof localStorage>"u")return null;const c=localStorage.getItem("overman-erosion-city.save.v1");if(!c)return null;const d=JSON.parse(c);return!d||d.version!==1||!d.phase||d.phase==="play"&&!d.player?null:(d.creation&&((n=d.creation).mainStat??(n.mainStat=null),(e=d.creation).coreEpithet??(e.coreEpithet="未登錄的迴路"),(t=d.creation).abilityChoices??(t.abilityChoices=[]),d.creation.step==="questions"&&(!d.creation.questionIds||d.creation.questionIds.length===0)&&(d.creation.questionIds=Id(()=>Math.random())),(i=d.creation).questionIds??(i.questionIds=[])),d.player&&((a=d.player).manifested??(a.manifested=[]),(r=d.player).armorId??(r.armorId="jacket"),(s=d.player).coreEpithet??(s.coreEpithet="未登錄的迴路"),(o=d.player).mainStat??(o.mainStat=Object.keys(d.player.stats).sort((f,u)=>d.player.stats[u]-d.player.stats[f])[0]),(l=d.player).flags??(l.flags={})),d.manifestOffers??(d.manifestOffers=[]),d.battle??(d.battle=null),d)}catch{return null}}function ml(){try{typeof localStorage<"u"&&localStorage.removeItem("overman-erosion-city.save.v1")}catch{}}function dv(n){return Pd[n.ending??"nameless"]}const sa=document.getElementById("app");document.getElementById("fx");const Yd="overman-erosion-city.settings.v1",uv="./";function hv(){try{const n=localStorage.getItem(Yd);if(n)return{muted:!1,reduceMotion:!1,...JSON.parse(n)}}catch{}return{muted:!1,reduceMotion:!1}}const Dt=hv(),gt=new fu(Dt.muted);let Aa=null,$s=!1;const Be={modal:null,drawer:null,toast:null,toastTimer:null,statAnimated:!1,lastEventFocus:null,logScroll:0,logNearBottom:!0};let Wr=null,B=pl()??Ha(ka());B.phase==="creation"&&!B.creation.rolled&&Jr(B);Dt.reduceMotion&&document.documentElement.classList.add("reduce-motion");function Kd(){try{localStorage.setItem(Yd,JSON.stringify(Dt))}catch{}}function Ia(n){return`${uv}art/${n}`}function qa(n){return n==="kanda"?Ia("kanda.png"):["ayase","kurokawa","shiratori","crown"].includes(n)?Ia(`${n}.webp`):Ia(`${n}.svg`)}function An(n){return["title","street","alley","docks"].includes(n)?Ia(`${n}.webp`):Ia(`${n}.svg`)}function Ye(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ya(n){return n.split(/\n{2,}/).map(e=>`<p>${Ye(e).replace(/\n/g,"<br>")}</p>`).join("")}function fv(n){return String(Math.floor(n))}function Zd(n){return n>=0?`+${n}`:`${n}`}function pv(n){return Zd(sl(n))}function Go(n,e="neutral"){Be.toastTimer&&window.clearTimeout(Be.toastTimer),Be.toast={text:n,tone:e},Be.toastTimer=window.setTimeout(()=>{Be.toast=null,Ke()},2200)}function mv(){const n=pl();return!!n&&(n.phase==="play"||n.phase==="creation"||n.phase==="ending")}function gv(n){return n<2?"序章・黑信封":n<24?"第一夜・獵場":n<48?"第二天・侵蝕":n<60?"第三天・他到了":"終章・一擊"}function _v(n){switch(n){case"monster":return An("crown");case"caught":return An("street");case"throne":return An("title");case"dead":return An("alley");case"escape":case"confess":return An("docks");default:return An("title")}}function vv(n){for(let e=n.log.length-1;e>=0;e--){const t=n.log[e];if(t.kind==="story"||t.kind==="action"||t.kind==="bond")return t.text}return"城市在雨裡繼續運作。你的倒數也在繼續。"}function Ke(){const n=document.querySelector("[data-log]");n&&(Be.logScroll=n.scrollTop,Be.logNearBottom=n.scrollHeight-n.scrollTop-n.clientHeight<48);const e=B.phase==="title"?Mv():B.phase==="creation"?bv():B.phase==="ending"?Iv():Ev();sa.innerHTML=e,document.body.dataset.phase=B.phase;const t=B.phase==="title"||B.phase==="creation"?0:B.player.encroachment;document.documentElement.style.setProperty("--encroach",String(Math.min(100,t))),sa.classList.toggle("encroach-high",t>=70&&B.phase==="play"),sa.classList.toggle("encroach-critical",t>=100&&B.phase==="play"),yv(),gt.setIntensity(B.phase==="title"?0:B.player.encroachment);const i=B.phase==="ending"?"ending":B.phase!=="play"?"title":B.battle?"battle":B.player.heat>=60||B.player.encroachment>=70?"tension":"city";gt.setMood(i,Math.floor(Date.now()/75e3)%3),xv()}function xv(){if(B.phase!=="play")return;const n=document.querySelector("#city3d");if(n){if(!Aa){if($s)return;try{Aa=new V0}catch{$s=!0;return}}try{Aa.mount(n,B.cityId,B.seed,B.player.encroachment,Dt.reduceMotion)}catch{$s=!0,Aa?.dispose(),Aa=null}}}function yv(){const n=document.querySelector("[data-log]");n&&(n.scrollTop=Be.logNearBottom?n.scrollHeight:Be.logScroll);const e=B.phase==="play"?fl(B):null;e?Be.lastEventFocus!==e.id+(e.result?"-r":"-c")&&(Be.lastEventFocus=e.id+(e.result?"-r":"-c"),document.querySelector(e.result?"[data-action='dismiss-result']":"[data-choice]:not([disabled])")?.focus({preventScroll:!0})):Be.lastEventFocus=null,B.phase==="creation"&&!Be.statAnimated&&(Be.statAnimated=!0,document.querySelectorAll("[data-stat-value]").forEach((t,i)=>{t.style.animationDelay=`${i*55}ms`,t.classList.add("stat-pop")})),Be.modal&&document.querySelector("[data-modal-panel] button")?.focus({preventScroll:!0})}function Mv(){const n=mv();return`
  <div class="screen title-screen">
    <div class="title-bg" style="background-image:url('${An("title")}')"></div>
    <div class="title-ink"></div>
    <div class="title-grain"></div>
    <div class="title-top">
      <span class="micro">裏八咫／PROJECT IGNIS</span>
      <span class="micro">機密等級：黑</span>
    </div>
    <div class="title-mast">
      <p class="eyebrow">當人開始改寫自己，世界便開始流變。</p>
      <h1>
        <span class="title-cn">流變計畫</span>
        <span class="title-en">PROJECT IGNIS</span>
      </h1>
      <p class="title-sub">72小時・超越者獵殺遊戲</p>
      <div class="title-stamp">第七次選別</div>
    </div>
    <div class="title-menu panel paper">
      <div class="menu-head">
        <span>第七次選別</span>
        <span class="mono">72:00:00</span>
      </div>
      <p class="menu-copy">
        超越者（Homo transscendens／Overman），又稱新人類，被歸類為一種不該繼續分裂的癌細胞。
        <br><br>
        你醒在一座不屬於你的城市。手腕上多了一個黑色終端，口袋裡有一封不能告訴任何人的信。街上還有其他和你一樣的人。他們也在倒數。
      </p>
      <div class="menu-actions">
        <button class="btn btn-primary" data-action="new-game">
          <span>開始新的一局</span><small>抽取能力值、核心顯現與城市</small>
        </button>
        <button class="btn btn-ghost" data-action="continue" ${n?"":"disabled"}>
          <span>繼續</span><small>${n?"載入上一次的存檔":"沒有存檔"}</small>
        </button>
      </div>
      <div class="menu-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="modal" data-modal="about">內容提醒</button>
        <button class="link" data-action="toggle-mute">${Dt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>
    <div class="title-footer">
      <span>繁體中文</span>
      <span>暴力／死亡／精神侵蝕描寫</span>
      <span>v1.0</span>
    </div>
  </div>
  ${jr()}`}function Sv(){const n=B.creation,e=n.questionIds.length?n.questionIds:za.slice(0,10).map(a=>a.id),t=ol(e[n.questionIndex]??e[0])??za[0],i=Math.min(n.questionIndex,e.length-1);return`
  <div class="screen creation-screen questions-screen">
    <header class="creation-header">
      <div>
        <span class="micro">裏八咫／PROJECT IGNIS・適性訪談</span>
        <h1>你是誰？</h1>
      </div>
      <div class="creation-header-right">
        <span class="mono">${String(i+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}</span>
        <button class="icon-btn" data-action="modal" data-modal="help" aria-label="說明">?</button>
      </div>
    </header>
    <div class="questions-wrap">
      <div class="question-progress" aria-hidden="true">
        ${e.map((a,r)=>`<i class="${r<i?"done":r===i?"now":""}"></i>`).join("")}
      </div>
      <section class="panel paper question-panel">
        <span class="micro">適性訪談 / ${t.title}</span>
        <h2>${t.title}</h2>
        <p class="question-text">${Ya(t.text)}</p>
        <div class="question-options">
          ${t.options.map((a,r)=>`<button class="question-option" data-action="answer-question" data-index="${r}">
                <span class="option-letter">${r===0?"A":"B"}</span>
                <span><strong>${Ye(a.label)}</strong>${a.hint?`<small>${Ye(a.hint)}</small>`:""}</span>
              </button>`).join("")}
        </div>
      </section>
      <p class="question-note">這不是能力測驗。答案會決定你的 MBTI、背景，以及你一開始就放不下的人。</p>
    </div>
    ${jr()}
  </div>`}function bv(){const n=B.creation;if(n.step==="questions")return Sv();const e=rl.get(n.cityId)??$a[0],t=n.abilityId?ca.get(n.abilityId):null,i=ll.get(n.backgroundId),a=n.mainStat,r=l=>a===l?2:0,s=l=>i?.statBonus[l]??0,o=Ba.get(i?.start.armorId??"jacket")??Ba.get("jacket");return`
  <div class="screen creation-screen">
    <header class="creation-header">
      <div>
        <span class="micro">裏八咫／PROJECT IGNIS・第七次選別</span>
        <h1>抽樣</h1>
      </div>
      <div class="creation-header-right">
        <span class="mono">D20 / 4D6</span>
        <button class="icon-btn" data-action="modal" data-modal="help" aria-label="說明">?</button>
      </div>
    </header>

    <main class="creation-grid">
      <section class="creation-left">
        <div class="panel paper identity-card">
          <div class="panel-label">代號 / CODE NAME</div>
          <input id="codename" class="codename-input" maxlength="8" value="${Ye(n.codename)}" aria-label="代號" autocomplete="off" spellcheck="false" />
          <p class="fine">不得使用真名。終端只會記住這個代號。</p>
        </div>

        <div class="panel paper stats-card">
          <div class="panel-heading">
            <h2>能力值</h2>
            <button class="link" data-action="reroll-stats">重擲能力值</button>
          </div>
          <div class="stat-grid">
            ${Rd.map(l=>{const c=Math.min(20,n.stats[l]+r(l)+s(l)),d=a===l;return`
              <button class="stat-cell ${d?"is-main":""}" data-action="main-stat" data-stat="${l}" title="${Fc[l]}" aria-pressed="${d}">
                <div class="stat-top"><span>${li[l]}</span><em>${pv(c)}</em></div>
                <strong data-stat-value data-stat="${l}">${c}</strong>
                <div class="stat-track"><i style="width:${c/20*100}%"></i></div>
                <p>${Fc[l]}</p>
                <span class="main-badge">${d?"主屬性 +2":"選為主屬性"}</span>
                ${s(l)?`<span class="bg-badge">背景 +${s(l)}</span>`:""}
              </button>`}).join("")}
          </div>
          <div class="roll-note">
            <span class="dice-mark">d20</span>
            <p>4d6 取三擲出六項能力值。點選一項作為主屬性，最終值 +2。d20 檢定＝d20＋能力修正＋情境修正。</p>
          </div>
        </div>

        <div class="panel paper city-card">
          <div class="city-visual" style="background-image:url('${An(e.scene)}')">
            <div class="city-shade"></div>
            <div class="city-title">
              <span class="micro">指定城市 / ASSIGNED CITY</span>
              <h2>${e.name}</h2>
              <p>${e.kana}・${e.tag}</p>
            </div>
            <div class="city-stamp">不可<br>離開</div>
          </div>
          <p class="city-desc">${e.description}</p>
          <div class="city-mods">
            <span>${li[e.stat]}檢定 +1</span>
            <span>警戒係數 ×${e.heatMod.toFixed(2)}</span>
            <span>${e.weather}</span>
          </div>
        </div>

        ${i?`<div class="panel paper background-card">
                <div class="panel-heading compact">
                  <span class="micro">背景 / MBTI</span>
                  <button class="link" data-action="restart-questions">重答心理測驗</button>
                </div>
                <div class="background-name">
                  <h2>${i.name}</h2>
                  <span class="mbti-chip">${n.mbti}・${n_[n.mbti]??""}</span>
                </div>
                <p class="background-tagline">${i.tagline}</p>
                <p class="background-desc">${i.description}</p>
                <div class="background-feature"><strong>特典</strong><span>${i.feature}</span></div>
                <div class="background-stats">
                  ${Object.entries(i.statBonus).map(([l,c])=>`<span>${li[l]} +${c}</span>`).join("")}
                </div>
              </div>`:""}
      </section>

      <section class="creation-right">
        <div class="panel paper ability-panel core-panel">
          <div class="panel-heading">
            <h2>核心顯現</h2>
            <span class="fine">Project Ignis 已寫入・無法選擇</span>
          </div>
          <p class="ability-intro">每個超越者出生時都帶著一項獨有的核心顯現。它定義你如何改寫世界，也定義世界會先從哪裡開始吃掉你。</p>
          ${t?`<div class="ability-card selected core-card">
                  <div class="ability-top">
                    <span class="ability-type">核心／${t.type}</span>
                    <span class="ability-rarity">${t.rarity}</span>
                  </div>
                  <h3>${t.name}</h3>
                  <p class="ability-kana">${t.kana}</p>
                  <p class="ability-tagline">${t.tagline}</p>
                  <div class="core-epithet">顯現真名：〈${Ye(n.coreEpithet)}〉</div>
                  <div class="ability-stats">
                    <span>侵蝕 +${t.cost}</span>
                    <span>${Object.entries(t.statBonus).map(([l,c])=>`${li[l]} +${c}`).join("／")||"無被動加值"}</span>
                    <span>AC +${t.acBonus??0}</span>
                  </div>
                  <p class="ability-passive">${t.passive}</p>
                  <p class="ability-active">${t.active}</p>
                  <span class="selected-mark">本次個體</span>
                </div>
                <p class="core-note">核心顯現無法更換。當侵蝕率突破 35%／60%／85%，會再長出新的顯現，每次三選一。</p>
                <div class="manifest-slots">
                  <span>35% 顯現增生</span><span>60% 顯現增生</span><span>85% 顯現增生</span>
                </div>`:'<p class="bad">核心顯現抽取失敗。請重新開始。</p>'}
        </div>

        <div class="panel paper bonds-preview">
          <div class="panel-heading compact">
            <span class="micro">初始羈絆 / BONDS</span>
            <span class="mono">${B.bonds.length}</span>
          </div>
          <div class="bond-preview-list">
            ${B.bonds.map(l=>`<div class="bond-preview-row">
                  <span class="bond-avatar">${Ye(l.name.slice(0,1))}</span>
                  <span><strong>${Ye(l.name)}</strong><small>${l.relation}・羈絆 ${l.level}</small></span>
                  <em>${l.category==="family"?"家人":l.category==="friend"?"友人":"社區"}</em>
                </div>`).join("")}
          </div>
          <p class="fine">羈絆由你的 MBTI 與背景決定，每次開局都會重新抽樣。</p>
        </div>

        <div class="panel paper start-panel">
          <div class="start-summary">
            <div><span>背景</span><strong>${i?.name??"—"}</strong></div>
            <div><span>MBTI</span><strong>${n.mbti}</strong></div>
            <div><span>主屬性</span><strong>${a?li[a]+" +2":"尚未選擇"}</strong></div>
          </div>
          ${i?`<p class="background-brief"><strong>${i.name}特典</strong>${i.feature}</p>`:""}
          <div class="start-armor">
            <span>初始護甲：${o.name}</span>
            <span>AC＝護甲基礎＋敏捷修正（上限 ${o.dexCap}）＋顯現加值</span>
          </div>
          <button class="btn btn-primary btn-wide" data-action="start-run" ${t&&a?"":"disabled"}>
            <span>${a?"簽下黑信封":"選擇主屬性"}</span>
            <small>${a?"開始 72 小時倒數":"先點選一項能力值"}</small>
          </button>
          <p class="fine center">重擲能力值會保留核心顯現與城市；主屬性選擇不會自動重設。</p>
        </div>

        <div class="creation-aside">
          <div class="aside-quote">
            「你不需要知道規則。<br>你只需要活到最後。」
          </div>
          <div class="aside-cite">— 裏八咫・招募手冊</div>
        </div>
      </section>
    </main>
    ${jr()}
  </div>`}function Ev(){const n=B,e=Li(n),t=ha(n.hour),i=p_(n.player.encroachment),a=Kn(n),r=Math.min(100,Math.round(n.player.marks/Un*100)),s=Ln(n),o=n.hour>=48,l=da(n),c=n.player;return`
  <div class="screen game-screen ${i.tone}">
    <header class="game-header">
      <div class="brand">
        <span class="brand-cn">流變計畫</span>
        <span class="brand-en">PROJECT IGNIS</span>
      </div>
      <div class="clock">
        <span class="day">DAY ${String(t.day).padStart(2,"0")}</span>
        <span class="time">${t.time}</span>
        <span class="weather">${e.name}／${e.weather}</span>
      </div>
      <div class="header-actions">
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="bonds" aria-label="羈絆">絆</button>
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="rank" aria-label="排名">位</button>
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="log" aria-label="紀錄">錄</button>
        <button class="icon-btn only-desktop" data-action="modal" data-modal="help" aria-label="遊戲說明">?</button>
        <button class="icon-btn only-desktop" data-action="toggle-mute" aria-label="音效">${Dt.muted?"靜":"聲"}</button>
        <button class="icon-btn" data-action="modal" data-modal="restart" aria-label="選單">☰</button>
      </div>
    </header>

    <div class="game-grid">
      <aside class="left-rail">
        <section class="player-card panel paper">
          <div class="player-line">
            <div>
              <span class="micro">代號</span>
              <h2>${Ye(c.codename)}</h2>
            </div>
            <div class="vitals">
              <div class="ac-box" title="${u_(n)}">
                <span class="micro">AC</span>
                <strong>${hi(n).value}</strong>
              </div>
              <div class="hp-box" title="肉體">
                <span class="micro">肉體</span>
                <div class="pips hp">
                  ${Array.from({length:c.maxHp},(d,f)=>`<i class="${f<c.hp?"on":""}"></i>`).join("")}
                </div>
                <strong>${c.hp}<small>/${c.maxHp}</small></strong>
              </div>
            </div>
          </div>
          <div class="ability-mini">
            <span class="ability-type">核心</span>
            <strong>${l.name}</strong>
            <span class="mono">侵蝕 +${l.cost}</span>
          </div>
          <div class="true-name-banner">
            <span>顯現真名 / TRUE NAME</span>
            <strong>〈${Ye(c.coreEpithet)}〉</strong>
          </div>
          <div class="core-line">${hi(n).armor.name}</div>
          ${ko(n).length?`<div class="manifest-chips">${ko(n).map(d=>`<span title="${Ye(d.passive)}">${d.name}</span>`).join("")}</div>`:'<div class="manifest-chips empty">尚未增生顯現</div>'}
          <div class="mini-stats">
            ${Rd.map(d=>`<span class="${d===c.mainStat?"main-stat":""}" title="${li[d]} ${ra(n,d)}${d===c.mainStat?"（主屬性 +2）":""}">${li[d]}${d===c.mainStat?"★":""}<b>${ra(n,d)}</b></span>`).join("")}
          </div>
        </section>

        <section class="panel paper encroach-card ${i.tone}">
          <div class="panel-heading compact">
            <span class="micro">侵蝕率 / ENCROACHMENT</span>
            <span class="tag tag-${i.tone}">${i.label}</span>
          </div>
          <div class="encroach-number">
            <strong>${c.encroachment}</strong><span>%</span>
            ${c.encroachment>=100?'<em class="danger-note">失控 '+c.collapse+"/3</em>":""}
          </div>
          <div class="segment-bar" style="--pct:${Math.min(100,c.encroachment)}%">
            ${Array.from({length:20},(d,f)=>`<i class="${f<Math.ceil(Math.min(100,c.encroachment)/5)?"on":""}"></i>`).join("")}
          </div>
          <div class="power-tier ${wi(n)>0?"on":""}">${c_(n)}<span>顯現等級 ${wi(n)+1}</span></div>
          <p class="fine">
            ${c.encroachment>=100?"每小時意志檢定。失敗三次，永久怪物化。聯絡羈絆可拉回。":"使用顯現會推高侵蝕。歸零不是解脫，破百才是懸崖。"}
          </p>
        </section>

        <section class="panel paper score-card">
          <div class="score-row">
            <div>
              <span class="micro">刻印 / MARKS</span>
              <strong class="big-number">${c.marks}<small>/${Un}</small></strong>
            </div>
            <div class="rank-seal" title="目前排名">
              <span>RANK</span><strong>${a.rank}</strong>
            </div>
          </div>
          <div class="bar marks"><i style="width:${r}%"></i></div>
          <div class="fine-row"><span>${n.player.killsNormal} 常人</span><span>${n.player.killsOverman} 超越者</span></div>
        </section>

        <section class="panel paper heat-card">
          <div class="panel-heading compact">
            <span class="micro">警戒指數 / ALERT</span>
            <span class="tag ${o?"tag-danger":""}">${Vd(c.heat,o)}</span>
          </div>
          <div class="heat-line">
            <strong>${c.heat}</strong>
            <div class="bar heat"><i style="width:${c.heat}%"></i></div>
          </div>
          <div class="intel-row">
            <span title="情報">情報 <b>${c.intel}</b></span>
            <span title="裏八咫監視">監視 <b>${c.surveillance}</b></span>
            <span title="證據">證據 <b>${c.evidence?"有":"無"}</b></span>
          </div>
          ${c.wanted?'<div class="wanted-banner">指名手配・神田隼人</div>':""}
        </section>

        <section class="panel paper bonds-card">
          <div class="panel-heading compact">
            <span class="micro">羈絆 / BONDS</span>
            <span class="mono">${s}</span>
          </div>
          <div class="bond-list">
            ${n.bonds.map(d=>{const f=Math.max(0,6-(n.hour-d.lastContact)),u=n.contactTarget===d.id;return`
                <button class="bond-row ${u?"selected":""} ${d.alive?"":"dead"}" data-action="contact-bond" data-id="${d.id}" title="${Ye(d.description)}">
                  <span class="bond-avatar">${Ye(d.name.slice(0,1))}</span>
                  <span class="bond-info">
                    <strong>${d.name}</strong>
                    <small>${d.relation}${f>0?`・${f}h 後可聯絡`:""}</small>
                    <span class="pips bond">${Array.from({length:5},(p,_)=>`<i class="${_<d.level?"on":""}"></i>`).join("")}</span>
                  </span>
                  ${u?'<em class="bond-target">聯絡對象</em>':""}
                </button>`}).join("")}
          </div>
          <p class="fine">「聯絡」每小時最多一次，降低侵蝕，但提高裏八咫監視。</p>
        </section>
      </aside>

      <section class="stage">
        <div class="scene scene-${e.scene}">
          <div class="scene-bg" style="background-image:url('${An(e.scene)}')"></div>
          <div id="city3d" class="city-3d" aria-hidden="true"></div>
          <div class="scene-shade"></div>
          <div class="scene-halftone"></div>
          <div class="scene-head">
            <span class="micro">${gv(n.hour)}</span>
            <span class="scene-clock">${t.day}日目 ${t.time}</span>
          </div>
          <div class="scene-city">${e.name}</div>
          <div class="scene-status">
            <span class="status-mark">▶</span>
            <p>${Ye(vv(n))}</p>
          </div>
          <div class="scene-weather"><span>${e.weather}</span><span>${e.landmark}</span></div>
          <div class="scene-stamp">${i.label}<br><span>${c.encroachment}%</span></div>
          <div class="rain-layer"></div>
          ${c.encroachment>=100?'<div class="corruption-layer"></div>':""}
        </div>

        <div class="stance-panel panel paper">
          <div class="stance-head">
            <div>
              <span class="micro">本小時行動 / STANCE</span>
              <h2>${Ta[n.stance].label}</h2>
              <p>${Ta[n.stance].desc}</p>
            </div>
            <span class="stance-risk">${Ta[n.stance].risk}</span>
          </div>
          <div class="stance-grid">
            ${Object.keys(Ta).map(d=>{const f=Ta[d];return`<button class="stance-btn ${n.stance===d?"active":""} ${f.tone}" data-action="set-stance" data-stance="${d}" ${n.pending?"disabled":""} title="${Ye(f.desc)}">
                  <span class="stance-icon">${f.icon}</span>
                  <span>${f.label}</span>
                  ${d==="contact"&&n.contactTarget?`<small>${Ye(n.bonds.find(p=>p.id===n.contactTarget)?.name??"")}</small>`:""}
                </button>`}).join("")}
          </div>
        </div>

        <div class="time-bar panel paper">
          <div class="time-controls">
            <button class="play-btn" data-action="toggle-pause" ${n.pending?"disabled":""}>
              <span>${n.pending||n.speed>0?"❚❚":"▶"}</span>
              <em>${n.pending?"事件中":n.speed>0?"暫停":"開始"}</em>
            </button>
            <div class="speed-group" role="group" aria-label="速度">
              ${[1,2,4,8].map(d=>`<button class="speed-btn ${n.speed===d?"active":""}" data-action="speed" data-speed="${d}" ${n.pending?"disabled":""}>${d}×</button>`).join("")}
            </div>
            <button class="btn btn-ghost btn-small" data-action="advance" ${n.pending?"disabled":""}>+1 小時</button>
          </div>
          <div class="time-status">
            <span class="dot ${n.pending?"paused":n.speed>0?"live":"idle"}"></span>
            <span>${n.pending?"時間暫停・處理事件":n.speed>0?"時間推進中":"時間已暫停"}</span>
            <span class="autosave">自動存檔</span>
          </div>
        </div>
      </section>

      <aside class="right-rail">
        ${Qd(n)}
        ${jd(n)}
        <section class="panel paper log-card">
          <div class="panel-heading compact">
            <span class="micro">72 小時紀錄 / LOG</span>
            <span class="mono">${n.log.length}</span>
          </div>
          <div class="log-list" data-log>
            ${Jd(n)}
          </div>
        </section>
      </aside>
    </div>
    ${Av()}
    ${Tv()}
    ${Rv()}
    ${jr()}
    ${Be.toast?`<div class="toast ${Be.toast.tone}">${Ye(Be.toast.text)}</div>`:""}
  </div>`}function Jd(n,e=70){return n.log.slice(-e).map(t=>{const i=ha(t.hour);return`<div class="log-entry ${t.kind}">
        <span class="log-hour">${String(i.day).padStart(2,"0")}/${i.time}</span>
        <p>${Ye(t.text)}</p>
      </div>`}).join("")}function Qd(n){const e=Kn(n);return`
  <section class="panel paper rank-card">
    <div class="panel-heading compact">
      <span class="micro">刻印排名 / LEADERBOARD</span>
      <span class="mono">${e.rank}/${e.total}</span>
    </div>
    <div class="rank-list">
      ${e.list.map((t,i)=>{const a=n.rivals.find(o=>o.name===t.name),r=a?a.status:"active",s=a?.note??"你。";return`<div class="rank-row ${t.you?"you":""} ${r}">
            <span class="rank-index">${String(i+1).padStart(2,"0")}</span>
            <span class="rank-face" style="background-image:url('${qa(a?.portrait??"crown")}')"></span>
            <span class="rank-name">
              <strong>${Ye(t.name)}</strong>
              <small>${r==="active"?Ye(s).slice(0,20):r==="arrested"?"已逮捕":r==="dead"?"已死亡":"退出"}</small>
            </span>
            <strong class="rank-marks">${fv(t.marks)}</strong>
          </div>`}).join("")}
    </div>
    <p class="fine">閉幕時排名第一且刻印達 ${Un}，才能獲得赦免。</p>
  </section>`}function jd(n){const e=n.hour>=48,t=Math.min(100,n.player.heat+(n.player.wanted?20:0));return`
  <section class="panel paper kanda-card ${e?"arrived":""}">
    <div class="kanda-mini" style="background-image:url('${qa("kanda")}')"></div>
    <div class="kanda-info">
      <span class="micro">${e?"搜查一課・已抵達":"搜查一課・接近中"}</span>
      <h3>神田隼人</h3>
      <p>勝率 <strong>0.0%</strong>／最強現代智人</p>
      <div class="bar kanda"><i style="width:${t}%"></i></div>
      <small>${e?Vd(n.player.heat,!0):"他會在第四十八小時抵達。"}</small>
    </div>
    <div class="kanda-seal">無<br>顯<br>現</div>
  </section>`}function Tv(){const n=B.battle;if(!n)return"";const e=B,t=n.unbeatable,i=t?100:Math.max(0,Math.round(n.enemyHp/n.enemyMaxHp*100)),a=Math.max(0,Math.round(e.player.hp/e.player.maxHp*100)),r=n.status==="active",s=n.status==="won"?"戰鬥勝利":n.status==="escaped"?"脫離戰鬥":"戰鬥敗北";return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="${Ye(n.enemyName)}戰">
    <div class="battle-panel">
      <div class="battle-side">
        <div class="battle-art" style="background-image:url('${qa(n.portrait)}')"></div>
        <div class="battle-side-shade"></div>
        <div class="battle-side-info">
          <span class="micro">${t?"不可戰勝":"超越者戰鬥"}</span>
          <h2>${Ye(n.enemyName)}</h2>
          <p>${Ye(n.enemyTitle)}</p>
          ${t?'<div class="battle-zero">勝率 <strong>0.0%</strong></div>':""}
        </div>
      </div>
      <div class="battle-main">
        <div class="battle-top">
          <div><span class="micro">第 ${n.round} 回合 / TURN</span><h2>${Ye(n.enemyName)}</h2></div>
          <div class="battle-verdict ${n.status}">${r?"交戰中":s}</div>
        </div>

        <div class="battle-vitals">
          <div class="battle-vital">
            <div class="battle-vital-head"><span>${Ye(e.player.codename)}</span><strong>${e.player.hp} / ${e.player.maxHp}</strong></div>
            <div class="bar hp"><i style="width:${a}%"></i></div>
            <small>AC ${hi(e).value}・侵蝕 ${e.player.encroachment}%</small>
          </div>
          <div class="battle-vital enemy">
            <div class="battle-vital-head"><span>${Ye(n.enemyName)}</span><strong>${t?"∞":`${n.enemyHp} / ${n.enemyMaxHp}`}</strong></div>
            <div class="bar enemy"><i style="width:${i}%"></i></div>
            <small>AC ${n.enemyAc}・${t?"人類極限":"未知顯現"}</small>
          </div>
        </div>

        <div class="battle-log">
          ${n.log.slice(-10).map(o=>`<p class="${o.tone}">${Ye(o.text)}</p>`).join("")}
        </div>

        ${r?`<div class="battle-actions">
                <button class="battle-action" data-action="battle-action" data-id="strike"><strong>強攻</strong><small>d20＋戰鬥／高傷害・失手被反擊</small></button>
                <button class="battle-action" data-action="battle-action" data-id="probe"><strong>試探</strong><small>感知／下一擊 +2・低傷害</small></button>
                <button class="battle-action" data-action="battle-action" data-id="guard"><strong>防禦</strong><small>AC +3／回復 1 肉體</small></button>
                <button class="battle-action danger" data-action="battle-action" data-id="power"><strong>顯現</strong><small>侵蝕 +${da(e).cost}／高風險高回報</small></button>
                <button class="battle-action" data-action="battle-action" data-id="talk"><strong>交涉</strong><small>魅力／延遲對手・不穩定</small></button>
                <button class="battle-action" data-action="battle-action" data-id="flee"><strong>撤退</strong><small>敏捷／失敗被追擊</small></button>
              </div>
              <p class="battle-note">${t?"這個人沒有顯現。他不需要。所有攻擊選項的勝率都是 0.0%。":"每個行動都有代價。選錯比選弱更致命。"}</p>`:`<div class="battle-result ${n.status}">
                <span class="micro">${s}</span>
                <div class="event-text">${Ya(n.result??"戰鬥結束。")}</div>
                <button class="btn btn-primary btn-wide" data-action="battle-continue"><span>繼續</span><small>時間將恢復流動</small></button>
              </div>`}
      </div>
    </div>
  </div>`}function Av(){const n=fl(B);if(!n)return"";const e=B,t=Li(e),i=n.portrait?qa(n.portrait):An(n.scene??t.scene),a=n.id==="kanda_ambush"||n.id==="interrogation"||n.id==="last_choice"||n.id==="kanda_arrives",r=!!n.result,s=e.lastRoll;return`
  <div class="event-overlay ${r?"result-mode":""}" role="dialog" aria-modal="true" aria-label="${Ye(n.title)}">
    <div class="event-panel">
      <div class="event-side ${n.portrait?"has-portrait":"no-portrait"}">
        <div class="event-art" style="background-image:url('${i}')"></div>
        <div class="event-side-shade"></div>
        <div class="event-chapter">${Ye(n.chapter)}</div>
        ${n.speaker?`<div class="event-speaker"><span>${Ye(n.speaker)}</span><small>${n.portrait==="kanda"?"現代智人・刑警":"超越者"}</small></div>`:""}
        <div class="event-art-stamp">${r?"判定":"事件"}</div>
      </div>
      <div class="event-main">
        <div class="event-kicker">
          <span>${Ye(n.chapter)}</span>
          <span class="mono">${String(ha(e.hour).day).padStart(2,"0")}日目 ${ha(e.hour).time}</span>
          ${n.portrait==="kanda"?'<span class="kanda-meta">最強現代智人</span>':""}
          ${a?'<span class="lethal">交戰評估 0.0%</span>':""}
        </div>
        <div class="event-top">
          <h2>${Ye(n.title)}</h2>
        </div>
        <div class="event-scroll">
          ${r?wv(n.result,n.resultTone??"neutral",s):`<div class="event-text">${Ya(n.text)}</div>`}
        </div>
        <div class="event-choice-area">
        ${r?'<div class="event-actions"><button class="btn btn-primary btn-wide" data-action="dismiss-result"><span>繼續</span><small>時間將恢復流動</small></button></div>':`<div class="event-choices">
                ${n.choices.map((o,l)=>`<button class="choice ${o.disabled?"disabled":""}" data-action="choose" data-event="${n.id}" data-choice="${o.id}" data-choice-index="${l}" ${o.disabled?"disabled":""}>
                      <span class="choice-index">${String(l+1).padStart(2,"0")}</span>
                      <span class="choice-body"><strong>${Ye(o.label)}</strong>${o.hint?`<small>${Ye(o.hint)}</small>`:""}</span>
                    </button>`).join("")}
              </div>
              <div class="event-foot">
                <span class="live-dot"></span><span>時間暫停中</span><span>選擇會留下紀錄</span>
              </div>`}
        </div>
      </div>
    </div>
  </div>`}function wv(n,e,t){return`
    <div class="result-box ${e}">
      <span class="result-label">${e==="danger"?"代價":e==="good"?"結果":"之後"}</span>
      <div class="event-text">${Ya(n)}</div>
    </div>
    ${t?`<div class="roll-card ${t.success?"success":"fail"}">
            <div class="roll-die">d20<strong>${t.roll}</strong></div>
            <div class="roll-math">
              <strong>${Ye(t.label)}</strong>
              <span>${t.roll} ${Zd(t.statMod)} ${t.extra>=0?"+":""}${t.extra} = <b>${t.total}</b> / DC ${t.dc}</span>
            </div>
            <span class="roll-verdict">${t.success?"成功":"失敗"}</span>
          </div>`:""}`}function Rv(){if(!Be.drawer)return"";const n=B;let e="資訊",t="";return Be.drawer==="log"?(e="72 小時紀錄",t=`<div class="drawer-log">${Jd(n,120)}</div>`):Be.drawer==="rank"?(e="排名與神田",t=`${Qd(n)}${jd(n)}`):(e="羈絆",t=`
      <div class="drawer-bonds">
        ${n.bonds.map(i=>`
          <button class="drawer-bond ${n.contactTarget===i.id?"selected":""}" data-action="contact-bond" data-id="${i.id}">
            <span class="bond-avatar">${Ye(i.name.slice(0,1))}</span>
            <span><strong>${i.name}</strong><small>${i.relation}・羈絆 ${i.level}</small><em>${Ye(i.description)}</em></span>
          </button>`).join("")}
        <p class="fine">連絡可降低侵蝕 ${8+(n.bonds.find(i=>i.id===n.contactTarget)?.level??1)*2} 左右，但會增加裏八咫監視。</p>
      </div>`),`
  <div class="drawer-backdrop" data-action="close-drawer">
    <aside class="drawer panel paper" role="dialog" aria-modal="true" aria-label="${e}" data-drawer-panel>
      <header class="drawer-head"><h2>${e}</h2><button class="icon-btn" data-action="close-drawer" aria-label="關閉">×</button></header>
      <div class="drawer-body">${t}</div>
    </aside>
  </div>`}function jr(){return Be.modal?`
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal panel paper" role="dialog" aria-modal="true" data-modal-panel>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="關閉">×</button>
        ${Be.modal==="help"?Cv():Be.modal==="about"?Pv():Lv()}
      </div>
    </div>`:""}function Cv(){return`
    <div class="modal-head"><span class="micro">規則 / RULES</span><h2>72小時</h2></div>
    <div class="help-body">
      <p class="lead">你是「超越者」——學名 Homo transscendens，英語 Overman，又叫新人類。世界把你們歸類為癌細胞；裏八咫的 Project Ignis 負責決定哪一顆癌細胞還能繼續分裂。<br><br>活到閉幕，累積 30 枚刻印，站上第一名。</p>
      <div class="help-grid">
        <div><h3>刻印</h3><p>殺死普通人 +1；殺死超越者 +10；破壞城市 +2。閉幕時未達 30 枚者會被回收。</p></div>
        <div><h3>侵蝕</h3><p>每次使用顯現都會推動「流變」、提高侵蝕率。60% 起獲得顯現增幅；破 100% 後每小時意志檢定，失敗三次就永久怪物化。</p></div>
        <div><h3>顯現增生</h3><p>侵蝕率突破 35%／60%／85% 時，會長出新的顯現。每次從三個隨機能力中選一個；核心顯現則在出生時隨機寫入，無法更換。</p></div>
        <div><h3>羈絆</h3><p>連絡羈絆能降低侵蝕，但會提高裏八咫監視。羈絆 ≥8 可解鎖逃亡。失去羈絆會讓你更難回頭。</p></div>
        <div><h3>AC／護甲</h3><p>AC＝護甲基礎＋敏捷修正（受護甲上限）＋顯現加值。部分核心顯現會改用知性或體魄計算 AC。防彈背心、結晶外殼可在事件中取得。</p></div>
        <div><h3>警戒指數</h3><p>殺戮與破壞會提高警戒指數。第 48 小時，神田隼人抵達。警戒指數高到一定程度，他會開始找你。</p></div>
        <div><h3>神田隼人</h3><p>被稱為最強現代智人的人類。沒有顯現，沒有改造。表面身分是警視廳刑警，交戰勝率 0.0%。</p></div>
        <div><h3>d20</h3><p>檢定為 d20 + 能力修正 + 情境修正。自然 20 必成功，自然 1 必失敗。主屬性在創角時 +2。</p></div>
      </div>
      <div class="help-note">
        <strong>神田的衛星</strong>
        <span>據說他擁有一顆衛星，能從軌道投放名為「魔劍」的高科技武器。沒有人知道完整的運作方式——只知道被他盯上的人，從來沒有贏過。有人說那不是武器，是一整套寫在天上的程序：當你抬頭，判決已經下來了。</span>
      </div>
      <div class="help-note warning">
        <strong>裏八咫的處置</strong>
        <span>敗給神田，或向外界洩露 Project Ignis 規則的超越者，會立刻被裏八咫處決。因此，神田幾乎沒有關於超越者的情報，只把這些案件當成「使用超人類力量的殺人事件」。他不需要理解你們；他只需要逮捕你們。</span>
      </div>
      <div class="help-note">
        <strong>操作</strong>
        <span>點選行動方針 → 時間自動推進；事件發生時時間暫停。可切換 1×–8× 或手動 +1 小時。空白鍵可暫停／繼續。</span>
      </div>
      <div class="help-note warning">
        <strong>內容提醒</strong>
        <span>本作包含暴力、死亡、精神侵蝕、制度性暴力與對人性的剝奪。所有角色與機構均為虛構。</span>
      </div>
    </div>`}function Pv(){return`
    <div class="modal-head"><span class="micro">內容提醒 / CONTENT</span><h2>這不是英雄故事</h2></div>
    <div class="help-body">
      <p class="lead">《流變計畫》Project Ignis 是一款繁體中文的 72 小時生存模擬。你會被隨機分配能力值、核心顯現與城市，然後被丟進一個不能對外求助的獵殺遊戲。</p>
      <p>遊戲討論權力如何把「異常」變成可拋棄的資源，也討論一個人如何在被要求變成怪物的時候，仍然抓住幾條名為羈絆的線。超越者被視為癌細胞；神田隼人則被稱為最強現代智人。</p>
      <p>本作借用《Double Cross》TRPG 的侵蝕率、顯現與角色卡語彙作為靈感，並將之改寫成原創規則與世界觀；未重製任何官方規則文字。角色與機構均為虛構。</p>
      <div class="help-note"><strong>建議</strong><span>第一次遊玩請先看「遊戲說明」。如果你不想看到暴力或精神崩壞描寫，請不要開始。</span></div>
      <div class="about-actions">
        <button class="link" data-action="modal" data-modal="help">查看規則</button>
        <button class="link" data-action="toggle-motion">${Dt.reduceMotion?"開啟動態效果":"減少動態效果"}</button>
        <button class="link" data-action="toggle-mute">${Dt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>`}function Lv(){return`
    <div class="modal-head"><span class="micro">選單 / MENU</span><h2>要放棄這一局嗎？</h2></div>
    <div class="help-body">
      <p>目前進度會保留在存檔中；你可以回到標題後再繼續。若選擇重新開始，本次存檔會被覆蓋。</p>
      <div class="restart-actions">
        <button class="btn btn-ghost" data-action="close-modal"><span>繼續遊戲</span></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
        <button class="btn btn-danger" data-action="confirm-restart"><span>重新開始</span><small>覆蓋存檔</small></button>
      </div>
      <div class="restart-meta">
        <span>存檔：${B.phase==="play"?"自動":"—"}</span>
        <span>音效：${Dt.muted?"關":"開"}</span>
        <span>動態：${Dt.reduceMotion?"減弱":"完整"}</span>
      </div>
      <div class="restart-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="toggle-mute">${Dt.muted?"開啟音效":"靜音"}</button>
        <button class="link" data-action="toggle-motion">${Dt.reduceMotion?"開啟動態":"減少動態"}</button>
      </div>
    </div>`}function Iv(){const n=B,e=dv(n),t=Kn(n),i=_v(n.ending);return`
  <div class="screen ending-screen tone-${e.tone}">
    <div class="ending-bg" style="background-image:url('${i}')"></div>
    <div class="ending-shade"></div>
    <div class="ending-panel">
      <div class="ending-kicker"><span>PROJECT IGNIS・閉幕</span><span class="mono">${Nd}:00:00</span></div>
      <div class="ending-stamp">${e.stamp}</div>
      <h1>${e.title}</h1>
      <h2>${e.subtitle}</h2>
      <div class="ending-text">${Ya(n.endingText??e.text)}</div>
      <div class="ending-stats">
        <div><span>刻印</span><strong>${n.player.marks}</strong></div>
        <div><span>排名</span><strong>${t.rank}<small>/${t.total}</small></strong></div>
        <div><span>侵蝕</span><strong>${n.player.encroachment}%</strong></div>
        <div><span>警戒指數</span><strong>${n.player.heat}</strong></div>
        <div><span>羈絆</span><strong>${Ln(n)}</strong></div>
        <div><span>城市</span><strong class="small">${Li(n).name}</strong></div>
      </div>
      <div class="ending-actions">
        <button class="btn btn-primary" data-action="new-game"><span>再抽一次</span><small>新的能力值、核心顯現與城市</small></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
      </div>
      <p class="ending-foot">你走了 ${n.player.killsNormal} 條普通人的命，${n.player.killsOverman} 個同類。神田隼人從未敗北。</p>
    </div>
    <div class="ending-side">
      <div class="ending-side-art" style="background-image:url('${qa("kanda")}')"></div>
      <p>「你活下來了。<br>這不代表你贏了。」</p>
      <span>— 神田隼人</span>
    </div>
  </div>`}function Bc(){const n=Wr??ka();Wr=null,ml(),B=Ha(n),B.phase="creation",Od(B),Be.statAnimated=!1,At(B),gt.unlock(),gt.sfx("confirm"),Ke()}function Dv(){const n=pl();if(!n){Go("找不到存檔","danger"),Ke();return}B=n,B.phase==="creation"&&!B.creation.rolled&&Jr(B),B.phase==="play"&&(B.speed=1),gt.unlock(),Ke()}function Nv(){if(!B.creation.abilityId){Go("請先選擇一項顯現","danger");return}if(B.creation.codename.trim()||(B.creation.codename="鴉"),!B.creation.mainStat){Go("請先選擇一項主屬性","danger");return}zd(B),At(B),gt.unlock(),gt.sfx("confirm"),Ke()}function eu(n,e){lv(B,n,e),At(B),B.ending?gt.sfx("danger"):gt.sfx("dice"),Ke()}function tu(){cv(B),B.speed===0&&(B.speed=1),At(B),gt.sfx("click"),Ke()}function Uv(){B.phase!=="play"||B.pending||(hl(B),At(B),gt.sfx(B.ending?"danger":"click"),Ke())}function Fv(){ml(),B=Ha(ka()),Be.modal=null,Be.drawer=null,B.phase="title",Ke()}function Ov(){Dt.muted=!Dt.muted,Kd(),gt.setMuted(Dt.muted),Dt.muted||gt.unlock(),Ke()}function Bv(){Dt.reduceMotion=!Dt.reduceMotion,document.documentElement.classList.toggle("reduce-motion",Dt.reduceMotion),Kd(),Ke()}sa.addEventListener("click",n=>{const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action;if(t&&!e.hasAttribute("disabled"))switch(t){case"new-game":Bc();break;case"continue":Dv();break;case"start-run":Nv();break;case"select-ability":{B.creation.abilityId=e.dataset.id??null,At(B),gt.unlock(),gt.sfx("click"),Ke();break}case"answer-question":{s_(B,Number(e.dataset.index??0)),Be.statAnimated=!1,At(B),gt.sfx(B.creation.step==="roll"?"confirm":"click"),Ke();break}case"restart-questions":{Od(B),B.creation.codename=B.creation.codename||"鴉",At(B),gt.sfx("click"),Ke();break}case"reroll-stats":{o_(B),Be.statAnimated=!1,At(B),gt.sfx("dice"),Ke();break}case"main-stat":{const i=e.dataset.stat;l_(B,i),At(B),gt.sfx("click"),Ke();break}case"set-stance":{const i=e.dataset.stance;qd(B,i),At(B),gt.sfx("click"),Ke();break}case"contact-bond":{const i=e.dataset.id;i&&(tv(B,i),At(B),gt.sfx("bond"),Ke());break}case"speed":{Ho(B,Number(e.dataset.speed??1)),At(B),gt.sfx("click"),Ke();break}case"toggle-pause":{Ho(B,B.speed>0?0:1),At(B),gt.sfx("click"),Ke();break}case"advance":Uv();break;case"choose":eu(e.dataset.event??"",e.dataset.choice??"");break;case"battle-action":{x_(B,e.dataset.id??""),At(B),gt.sfx("danger"),Ke();break}case"battle-continue":{y_(B),At(B),gt.sfx("confirm"),Ke();break}case"dismiss-result":tu();break;case"modal":Be.modal=e.dataset.modal??null,Be.drawer=null,Ke();break;case"close-modal":Be.modal=null,Ke();break;case"confirm-restart":Be.modal=null,Bc();break;case"go-title":Fv();break;case"drawer":Be.drawer=e.dataset.drawer??null,Ke();break;case"close-drawer":Be.drawer=null,Ke();break;case"toggle-mute":Ov();break;case"toggle-motion":Bv();break}});sa.addEventListener("input",n=>{const e=n.target;e.id==="codename"&&B.phase==="creation"&&(B.creation.codename=e.value.slice(0,8))});sa.addEventListener("change",()=>{B.phase==="creation"&&At(B)});document.addEventListener("keydown",n=>{if(n.key==="Escape"){Be.modal?(Be.modal=null,Ke()):Be.drawer&&(Be.drawer=null,Ke());return}if(n.code==="Space"&&B.phase==="play"&&!B.pending){const e=n.target.tagName;if(e==="INPUT"||e==="TEXTAREA"||e==="BUTTON")return;n.preventDefault(),Ho(B,B.speed>0?0:1),At(B),Ke()}});function nu(){gt.unlock()}document.addEventListener("pointerdown",nu,{once:!0});document.addEventListener("keydown",nu,{once:!0});let kc=performance.now(),wr=0;function iu(n){const e=Math.min(250,n-kc);if(kc=n,B.phase==="play"&&!B.pending&&!B.battle&&B.speed>0&&!Be.modal){wr+=e*B.speed;let t=0;for(;wr>=Bo&&B.phase==="play"&&!B.pending&&t++<12&&(wr-=Bo,hl(B),At(B),Ke(),!B.ending););}else wr=0;requestAnimationFrame(iu)}function yi(){const n=B.phase==="play"?fl(B):null,e=B.phase==="play"?Kn(B):null;return{phase:B.phase,hour:B.hour,day:ha(B.hour).day,time:ha(B.hour).time,city:B.phase==="play"?Li(B).name:null,ability:B.phase==="play"?da(B).name:B.creation.abilityId,marks:B.phase==="play"?B.player.marks:null,encroachment:B.phase==="play"?B.player.encroachment:null,heat:B.phase==="play"?B.player.heat:null,hp:B.phase==="play"?`${B.player.hp}/${B.player.maxHp}`:null,armor:B.phase==="play"?hi(B).armor.name:null,ac:B.phase==="play"?hi(B).value:null,mainStat:B.phase==="play"?B.player.mainStat:B.creation.mainStat,manifested:B.phase==="play"?B.player.manifested:[],bonds:B.phase==="play"?Ln(B):null,rank:e?.rank??null,ending:B.ending,battle:B.battle?{enemy:B.battle.enemyName,status:B.battle.status,round:B.battle.round,enemyHp:B.battle.enemyHp,playerHp:B.player.hp,actions:["strike","probe","guard","power","talk","flee"]}:null,pending:n?{id:n.id,title:n.title,result:n.result??null,choices:n.choices.map(t=>({id:t.id,label:t.label,disabled:t.disabled}))}:null,logCount:B.log.length}}const kv={snapshot:yi,reset(n){return ml(),B=Ha(n??ka()),B.phase="title",Wr=null,Be.modal=null,Be.drawer=null,Ke(),yi()},setSeed(n){return Wr=n,{seed:n}},step(n){const e=Math.max(1,Math.min(24,Math.round(n/Bo)));let t=0;for(;t<e&&B.phase==="play"&&!B.pending;)hl(B),t++;return At(B),Ke(),{...yi(),advanced:t}},choose(n,e){return eu(n,e),yi()},dismiss(){return tu(),yi()},setStance(n){return qd(B,n),At(B),Ke(),yi()},quickStart(n){const e=Ha(n??ka());Jr(e);const t=e.creation;return t.abilityId=t.abilityId??"core_array",t.mainStat=Object.keys(t.stats).sort((i,a)=>t.stats[a]-t.stats[i])[0],t.codename="測試",zd(e),B=e,At(B),Ke(),yi()}};globalThis.__OHMYGAME_PLAYTEST__=kv;Ke();requestAnimationFrame(iu);
