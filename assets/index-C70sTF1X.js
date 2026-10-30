var _u=Object.defineProperty;var vu=(n,e,t)=>e in n?_u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>vu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class xu{constructor(e){je(this,"ctx",null);je(this,"master",null);je(this,"drone",null);je(this,"rain",null);je(this,"muted",!1);je(this,"started",!1);je(this,"music",null);je(this,"mood","title");je(this,"variant",0);je(this,"step",0);je(this,"musicTimer",null);this.muted=e}async unlock(){if(this.started){this.ctx?.state==="suspended"&&await this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.muted?0:.55,i.connect(t.destination),this.master=i;const a=t.createGain();a.gain.value=.12,a.connect(i),this.music=a;const r=t.createGain();r.gain.value=.05;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=420,s.Q.value=.8,r.connect(s),s.connect(i);const o=t.createOscillator();o.type="sawtooth",o.frequency.value=55;const l=t.createOscillator();l.type="sine",l.frequency.value=82.5;const c=t.createOscillator();c.frequency.value=.07;const d=t.createGain();d.gain.value=6,c.connect(d),d.connect(o.frequency),o.connect(r),l.connect(r),o.start(),l.start(),c.start(),this.drone=r;const p=t.createBuffer(1,t.sampleRate*3,t.sampleRate),u=p.getChannelData(0);let h=0;for(let f=0;f<u.length;f++){const A=Math.random()*2-1;h=h*.97+A*.03,u[f]=h*2.2}const _=t.createBufferSource();_.buffer=p,_.loop=!0;const y=t.createBiquadFilter();y.type="highpass",y.frequency.value=900;const m=t.createGain();m.gain.value=.11,_.connect(y),y.connect(m),m.connect(i),_.start(),this.rain=m,this.started=!0,this.musicTimer=window.setInterval(()=>this.tickMusic(),620),t.state==="suspended"&&await t.resume()}catch{this.ctx=null}}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.08)}setIntensity(e){if(!this.ctx||!this.drone||!this.rain)return;const t=this.ctx.currentTime;this.drone.gain.setTargetAtTime(.04+Math.min(e,120)*35e-5,t,.4),this.rain.gain.setTargetAtTime(.09+Math.max(0,e-60)*4e-4,t,.4)}sfx(e){if(!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,a=t.createGain();if(a.connect(this.master),e==="click"){const r=t.createOscillator();r.type="square",r.frequency.setValueAtTime(320,i),r.frequency.exponentialRampToValueAtTime(160,i+.05),a.gain.setValueAtTime(.035,i),a.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),r.start(i),r.stop(i+.07);return}if(e==="confirm"){const r=t.createOscillator();r.type="triangle",r.frequency.setValueAtTime(220,i),r.frequency.exponentialRampToValueAtTime(440,i+.12),a.gain.setValueAtTime(.05,i),a.gain.exponentialRampToValueAtTime(.001,i+.35),r.connect(a),r.start(i),r.stop(i+.36);return}if(e==="danger"){const r=t.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(90,i),r.frequency.linearRampToValueAtTime(70,i+.5);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=500,a.gain.setValueAtTime(.08,i),a.gain.exponentialRampToValueAtTime(.001,i+.55),r.connect(s),s.connect(a),r.start(i),r.stop(i+.56);return}if(e==="dice"){for(let r=0;r<3;r++){const s=i+r*.045,o=t.createOscillator();o.type="square",o.frequency.setValueAtTime(700+r*90,s);const l=t.createGain();l.gain.setValueAtTime(.02,s),l.gain.exponentialRampToValueAtTime(.001,s+.035),o.connect(l),l.connect(this.master),o.start(s),o.stop(s+.04)}return}if(e==="mark"||e==="bond"){const r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(e==="mark"?520:392,i),r.frequency.exponentialRampToValueAtTime(e==="mark"?760:523,i+.18),a.gain.setValueAtTime(.04,i),a.gain.exponentialRampToValueAtTime(.001,i+.4),r.connect(a),r.start(i),r.stop(i+.41)}}setMood(e,t=0){(this.mood!==e||this.variant!==t)&&(this.mood=e,this.variant=t,this.step=0)}tone(e,t,i,a,r="sine"){if(!this.ctx||!this.music)return;const s=this.ctx,o=s.createOscillator(),l=s.createGain();o.type=r,o.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(a,t+.04),l.gain.exponentialRampToValueAtTime(1e-4,t+i),o.connect(l),l.connect(this.music),o.start(t),o.stop(t+i+.05)}tickMusic(){if(!this.ctx||!this.music||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime+.08,t=this.step++,i=this.variant%3;if(this.mood==="title"){const r=[[146.83,220,293.66],[130.81,196,261.63],[164.81,246.94,329.63]][i];this.tone(r[0],e,2.4,.035,"sine"),this.tone(r[1],e,2.2,.022,"triangle"),this.tone(r[2],e+.32,1.8,.018,"sine"),t%4===0&&this.tone(r[2]*2,e+.7,1.2,.012,"sine")}else if(this.mood==="city"){const a=[55,58.27,49],r=[[146.83,174.61,220],[130.81,155.56,196],[123.47,146.83,185]],s=a[i],o=r[i];t%2===0&&this.tone(s,e,1.1,.06,"triangle"),t%4===0&&(this.tone(o[0],e,2.8,.018,"sine"),this.tone(o[1],e+.18,2.4,.014,"sine"),this.tone(o[2],e+.36,2,.012,"sine")),t%8===5&&this.tone(o[2]*2,e+.2,1.6,.014,"sine")}else if(this.mood==="tension"){const r=[55,58.27,61.74][i];t%2===0&&this.tone(r,e,.45,.075,"sawtooth"),t%4===0&&this.tone(r*1.414,e+.2,.8,.022,"sine"),t%8===0&&this.tone(r*4,e+.1,.18,.02,"square")}else if(this.mood==="battle"){const a=[55,65.41,73.42][i];t%2===0&&this.tone(a,e,.22,.085,"sawtooth"),t%4===0&&this.tone(a*2,e+.1,.3,.05,"square"),t%8===3&&this.tone(a*1.5,e+.4,.4,.03,"triangle")}else{const r=[[130.81,164.81,196],[146.83,185,220],[123.47,155.56,196]][i];this.tone(r[0],e,3.6,.03,"sine"),this.tone(r[1],e+.4,3,.02,"sine"),this.tone(r[2],e+.8,2.4,.018,"sine")}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="186",yu=0,Fl=1,Su=2,Lr=1,Mu=2,Ia=3,Ri=0,nn=1,Xn=2,Kn=0,Ua=1,Ol=2,Bl=3,kl=4,bu=5,na=100,Eu=101,Tu=102,Au=103,wu=104,Ru=200,Cu=201,Pu=202,Iu=203,$c=204,Xc=205,Lu=206,Du=207,Uu=208,Nu=209,Fu=210,Ou=211,Bu=212,ku=213,zu=214,Ks=0,Zs=1,Js=2,Oa=3,Qs=4,js=5,eo=6,to=7,qc=0,Gu=1,Hu=2,Ln=0,Yc=1,Kc=2,Zc=3,qo=4,Jc=5,Qc=6,jc=7,ed=300,Ci=301,da=302,rs=303,ss=304,Zr=306,no=1e3,Yn=1001,io=1002,kt=1003,Vu=1004,tr=1005,Wt=1006,os=1007,Ti=1008,on=1009,td=1010,nd=1011,Ba=1012,Yo=1013,Un=1014,Pn=1015,Nn=1016,Ko=1017,Zo=1018,ka=1020,id=35902,ad=35899,rd=1021,sd=1022,vn=1023,Jn=1026,Ai=1027,od=1028,Jo=1029,Pi=1030,Qo=1031,jo=1033,Dr=33776,Ur=33777,Nr=33778,Fr=33779,ao=35840,ro=35841,so=35842,oo=35843,lo=36196,co=37492,uo=37496,ho=37488,fo=37489,Br=37490,po=37491,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,yo=37813,So=37814,Mo=37815,bo=37816,Eo=37817,To=37818,Ao=37819,wo=37820,Ro=37821,Co=36492,Po=36494,Io=36495,Lo=36283,Do=36284,kr=36285,Uo=36286,Wu=3200,No=0,$u=1,ci="",Jt="srgb",zr="srgb-linear",Gr="linear",ot="srgb",ls=7680,Xu=519,qu=512,Yu=513,Ku=514,el=515,Zu=516,Ju=517,tl=518,Qu=519,ld=35044,zl="300 es",In=2e3,za=2001;function ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eh(){const n=Hr("canvas");return n.style.display="block",n}const Gl={};function Vr(...n){const e="THREE."+n.shift();console.log(e,...n)}function cd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sa(...n){const e=n.join(" ");e in Gl||(Gl[e]=!0,Ie(...n))}function th(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const nh={[Ks]:Zs,[Js]:eo,[Qs]:to,[Oa]:js,[Zs]:Ks,[eo]:Js,[to]:Qs,[js]:Oa};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Fo=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function ih(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sl=class Sl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sl.prototype.isVector2=!0;let Fe=Sl;class _a{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=r[s+0],h=r[s+1],_=r[s+2],y=r[s+3];if(p!==y||l!==u||c!==h||d!==_){let m=l*u+c*h+d*_+p*y;m<0&&(u=-u,h=-h,_=-_,y=-y,m=-m);let f=1-o;if(m<.9995){const A=Math.acos(m),R=Math.sin(A);f=Math.sin(f*A)/R,o=Math.sin(o*A)/R,l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+y*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+y*o;const A=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=A,c*=A,d*=A,p*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=r[s],u=r[s+1],h=r[s+2],_=r[s+3];return e[t]=o*_+d*p+l*h-c*u,e[t+1]=l*_+d*u+c*p-o*h,e[t+2]=c*_+d*h+o*u-l*p,e[t+3]=d*_-o*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(r/2),u=l(i/2),h=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(s-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(r-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(s-a)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ml=class Ml{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*t-r*a),p=2*(r*i-s*t);return this.x=t+l*c+s*p-o*d,this.y=i+l*d+o*c-r*p,this.z=a+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ml.prototype.isVector3=!0;let N=Ml;const us=new N,Hl=new _a,bl=class bl{constructor(e,t,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c)}set(e,t,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],y=a[0],m=a[3],f=a[6],A=a[1],R=a[4],S=a[7],M=a[2],T=a[5],w=a[8];return r[0]=s*y+o*A+l*M,r[3]=s*m+o*R+l*T,r[6]=s*f+o*S+l*w,r[1]=c*y+d*A+p*M,r[4]=c*m+d*R+p*T,r[7]=c*f+d*S+p*w,r[2]=u*y+h*A+_*M,r[5]=u*m+h*R+_*T,r[8]=u*f+h*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,h=c*r-s*l,_=t*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(a*c-d*i)*y,e[2]=(o*i-a*s)*y,e[3]=u*y,e[4]=(d*t-a*l)*y,e[5]=(a*r-o*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(s*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hs.makeScale(e,t)),this}rotate(e){return sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hs.makeRotation(-e)),this}translate(e,t){return sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;let Ue=bl;const hs=new Ue,Vl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ah(){const n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ot&&(a.r=Zn(a.r),a.g=Zn(a.g),a.b=Zn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ci?Gr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:Gr,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const Ze=ah();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bi===void 0&&(Bi=Hr("canvas")),Bi.width=e.width,Bi.height=e.height;const a=Bi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Zn(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sh=0;class nl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(fs(a[s].image)):r.push(fs(a[s]))}else r=fs(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function fs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let oh=0;const ps=new N;class $t extends Ui{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Yn,a=Yn,r=Wt,s=Ti,o=vn,l=on,c=$t.DEFAULT_ANISOTROPY,d=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ui(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ps).x}get height(){return this.source.getSize(ps).y}get depth(){return this.source.getSize(ps).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ed;$t.DEFAULT_ANISOTROPY=1;const El=class El{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(h+1)/2,M=(f+1)/2,T=(d+u)/4,w=(p+y)/4,v=(_+m)/4;return R>S&&R>M?R<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(R),a=T/i,r=w/i):S>M?S<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),i=T/a,r=v/a):M<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),i=w/r,a=v/r),this.set(i,a,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(p-y)/A,this.z=(u-d)/A,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};El.prototype.isVector4=!0;let At=El;class lh extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new $t(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends lh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dd extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ch extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kr=class Kr{constructor(e,t,i,a,r,s,o,l,c,d,p,u,h,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c,d,p,u,h,_,y,m)}set(e,t,i,a,r,s,o,l,c,d,p,u,h,_,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),s=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=s*d,h=s*p,_=o*d,y=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=h+_*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=_+h*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,_=c*d,y=c*p;t[0]=u+y*o,t[4]=_*o-h,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=h*o-_,t[6]=y+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,_=c*d,y=c*p;t[0]=u-y*o,t[4]=-s*p,t[8]=_+h*o,t[1]=h+_*o,t[5]=s*d,t[9]=y-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*p,_=o*d,y=o*p;t[0]=l*d,t[4]=_*c-h,t[8]=u*c+y,t[1]=l*p,t[5]=y*c+u,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-u*p,t[8]=_*p+h,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*p+_,t[10]=u-y*p}else if(e.order==="XZY"){const u=s*l,h=s*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+y,t[5]=s*d,t[9]=h*p-_,t[2]=_*p-h,t[6]=o*d,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,uh)}lookAt(e,t,i){const a=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ni.crossVectors(i,an),ni.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ni.crossVectors(i,an)),ni.normalize(),nr.crossVectors(an,ni),a[0]=ni.x,a[4]=nr.x,a[8]=an.x,a[1]=ni.y,a[5]=nr.y,a[9]=an.y,a[2]=ni.z,a[6]=nr.z,a[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],y=i[6],m=i[10],f=i[14],A=i[3],R=i[7],S=i[11],M=i[15],T=a[0],w=a[4],v=a[8],E=a[12],C=a[1],D=a[5],B=a[9],V=a[13],U=a[2],G=a[6],Z=a[10],$=a[14],ie=a[3],q=a[7],ee=a[11],ne=a[15];return r[0]=s*T+o*C+l*U+c*ie,r[4]=s*w+o*D+l*G+c*q,r[8]=s*v+o*B+l*Z+c*ee,r[12]=s*E+o*V+l*$+c*ne,r[1]=d*T+p*C+u*U+h*ie,r[5]=d*w+p*D+u*G+h*q,r[9]=d*v+p*B+u*Z+h*ee,r[13]=d*E+p*V+u*$+h*ne,r[2]=_*T+y*C+m*U+f*ie,r[6]=_*w+y*D+m*G+f*q,r[10]=_*v+y*B+m*Z+f*ee,r[14]=_*E+y*V+m*$+f*ne,r[3]=A*T+R*C+S*U+M*ie,r[7]=A*w+R*D+S*G+M*q,r[11]=A*v+R*B+S*Z+M*ee,r[15]=A*E+R*V+S*$+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],_=e[3],y=e[7],m=e[11],f=e[15],A=l*h-c*u,R=o*h-c*p,S=o*u-l*p,M=s*h-c*d,T=s*u-l*d,w=s*p-o*d;return t*(y*A-m*R+f*S)-i*(_*A-m*M+f*T)+a*(_*R-y*M+f*w)-r*(_*S-y*T+m*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],_=e[12],y=e[13],m=e[14],f=e[15],A=t*o-i*s,R=t*l-a*s,S=t*c-r*s,M=i*l-a*o,T=i*c-r*o,w=a*c-r*l,v=d*y-p*_,E=d*m-u*_,C=d*f-h*_,D=p*m-u*y,B=p*f-h*y,V=u*f-h*m,U=A*V-R*B+S*D+M*C-T*E+w*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(o*V-l*B+c*D)*G,e[1]=(a*B-i*V-r*D)*G,e[2]=(y*w-m*T+f*M)*G,e[3]=(u*T-p*w-h*M)*G,e[4]=(l*C-s*V-c*E)*G,e[5]=(t*V-a*C+r*E)*G,e[6]=(m*S-_*w-f*R)*G,e[7]=(d*w-u*S+h*R)*G,e[8]=(s*B-o*C+c*v)*G,e[9]=(i*C-t*B-r*v)*G,e[10]=(_*T-y*S+f*A)*G,e[11]=(p*S-d*T-h*A)*G,e[12]=(o*E-s*D-l*v)*G,e[13]=(t*D-i*E+a*v)*G,e[14]=(y*R-_*M-m*A)*G,e[15]=(d*M-p*R+u*A)*G,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,u=r*c,h=r*d,_=r*p,y=s*d,m=s*p,f=o*p,A=l*c,R=l*d,S=l*p,M=i.x,T=i.y,w=i.z;return a[0]=(1-(y+f))*M,a[1]=(h+S)*M,a[2]=(_-R)*M,a[3]=0,a[4]=(h-S)*T,a[5]=(1-(u+f))*T,a[6]=(m+A)*T,a[7]=0,a[8]=(_+R)*w,a[9]=(m-A)*w,a[10]=(1-(u+y))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=ki.set(a[0],a[1],a[2]).length();const o=ki.set(a[4],a[5],a[6]).length(),l=ki.set(a[8],a[9],a[10]).length();r<0&&(s=-s),pn.copy(this);const c=1/s,d=1/o,p=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=p,pn.elements[9]*=p,pn.elements[10]*=p,t.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,a,r,s,o=In,l=!1){const c=this.elements,d=2*r/(t-e),p=2*r/(i-a),u=(t+e)/(t-e),h=(i+a)/(i-a);let _,y;if(l)_=r/(s-r),y=s*r/(s-r);else if(o===In)_=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(o===za)_=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=In,l=!1){const c=this.elements,d=2/(t-e),p=2/(i-a),u=-(t+e)/(t-e),h=-(i+a)/(i-a);let _,y;if(l)_=1/(s-r),y=s/(s-r);else if(o===In)_=-2/(s-r),y=-(s+r)/(s-r);else if(o===za)_=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Kr.prototype.isMatrix4=!0;let _t=Kr;const ki=new N,pn=new _t,dh=new N(0,0,0),uh=new N(1,1,1),ni=new N,nr=new N,an=new N,$l=new _t,Xl=new _a;class mi{constructor(e=0,t=0,i=0,a=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const ql=new N,zi=new _a,kn=new _t,ir=new N,xa=new N,fh=new N,ph=new _a,Yl=new N(1,0,0),Kl=new N(0,1,0),Zl=new N(0,0,1),Jl={type:"added"},mh={type:"removed"},Gi={type:"childadded",child:null},ms={type:"childremoved",child:null};class Bt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new N,t=new mi,i=new _a,a=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ue}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(xa,ir,this.up):kn.lookAt(ir,xa,this.up),this.quaternion.setFromRotationMatrix(kn),a&&(kn.extractRotation(a.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mh),ms.child=e,this.dispatchEvent(ms),ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),h=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new N(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class La extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gh={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gh)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ar={h:0,s:0,l:0};function _s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ze.workingColorSpace){if(e=ih(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=_s(s,r,e+1/3),this.g=_s(s,r,e),this.b=_s(s,r,e-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.workingToColorSpace(Vt.copy(this),e),Math.round(qe(Vt.r*255,0,255))*65536+Math.round(qe(Vt.g*255,0,255))*256+Math.round(qe(Vt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,a=Vt.g,r=Vt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-i)/p+2;break;case r:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Jt){Ze.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,a=Vt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ar);const i=ds(ii.h,ar.h,t),a=ds(ii.s,ar.s,t),r=ds(ii.l,ar.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new He;He.NAMES=hd;class il{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _h extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new N,zn=new N,vs=new N,Gn=new N,Hi=new N,Vi=new N,Ql=new N,xs=new N,ys=new N,Ss=new N,Ms=new At,bs=new At,Es=new At;class un{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),mn.subVectors(e,t),a.cross(mn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){mn.subVectors(a,t),zn.subVectors(i,t),vs.subVectors(e,t);const s=mn.dot(mn),o=mn.dot(zn),l=mn.dot(vs),c=zn.dot(zn),d=zn.dot(vs),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,_=(s*d-o*l)*u;return r.set(1-h-_,_,h)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,a,r,s,o,l){return this.getBarycoord(e,t,i,a,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(s,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,i,a,r,s){return Ms.setScalar(0),bs.setScalar(0),Es.setScalar(0),Ms.fromBufferAttribute(e,t),bs.fromBufferAttribute(e,i),Es.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ms,r.x),s.addScaledVector(bs,r.y),s.addScaledVector(Es,r.z),s}static isFrontFacing(e,t,i,a){return mn.subVectors(i,t),zn.subVectors(e,t),mn.cross(zn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return un.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;Hi.subVectors(a,i),Vi.subVectors(r,i),xs.subVectors(e,i);const l=Hi.dot(xs),c=Vi.dot(xs);if(l<=0&&c<=0)return t.copy(i);ys.subVectors(e,a);const d=Hi.dot(ys),p=Vi.dot(ys);if(d>=0&&p<=d)return t.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Hi,s);Ss.subVectors(e,r);const h=Hi.dot(Ss),_=Vi.dot(Ss);if(_>=0&&h<=_)return t.copy(r);const y=h*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Vi,o);const m=d*_-h*p;if(m<=0&&p-d>=0&&h-_>=0)return Ql.subVectors(r,a),o=(p-d)/(p-d+(h-_)),t.copy(a).addScaledVector(Ql,o);const f=1/(m+y+u);return s=y*f,o=u*f,t.copy(i).addScaledVector(Hi,s).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,gn):gn.fromBufferAttribute(r,s),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),sr.subVectors(this.max,ya),Wi.subVectors(e.a,ya),$i.subVectors(e.b,ya),Xi.subVectors(e.c,ya),ai.subVectors($i,Wi),ri.subVectors(Xi,$i),xi.subVectors(Wi,Xi);let t=[0,-ai.z,ai.y,0,-ri.z,ri.y,0,-xi.z,xi.y,ai.z,0,-ai.x,ri.z,0,-ri.x,xi.z,0,-xi.x,-ai.y,ai.x,0,-ri.y,ri.x,0,-xi.y,xi.x,0];return!Ts(t,Wi,$i,Xi,sr)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,Wi,$i,Xi,sr))?!1:(or.crossVectors(ai,ri),t=[or.x,or.y,or.z],Ts(t,Wi,$i,Xi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,rr=new qa,Wi=new N,$i=new N,Xi=new N,ai=new N,ri=new N,xi=new N,ya=new N,sr=new N,or=new N,yi=new N;function Ts(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){yi.fromArray(n,r);const o=a.x*Math.abs(yi.x)+a.y*Math.abs(yi.y)+a.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),d=i.dot(yi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new N,lr=new Fe;let vh=0;class yn extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ld,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fd extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pd extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xh=new qa,Sa=new N,As=new N;class Ya{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xh.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Sa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(As)),this.expandByPoint(Sa.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yh=0;const cn=new _t,ws=new Bt,qi=new N,rn=new qa,Ma=new qa,Ot=new N;class qt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(rn.min,Ma.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,Ma.max),rn.expandByPoint(Ot)):(rn.expandByPoint(Ma.min),rn.expandByPoint(Ma.max))}rn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Ot.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Ot));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ot.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Ot.add(qi)),a=Math.max(a,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new N,l[v]=new N;const c=new N,d=new N,p=new N,u=new Fe,h=new Fe,_=new Fe,y=new N,m=new N;function f(v,E,C){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,C),u.fromBufferAttribute(r,v),h.fromBufferAttribute(r,E),_.fromBufferAttribute(r,C),d.sub(c),p.sub(c),h.sub(u),_.sub(u);const D=1/(h.x*_.y-_.x*h.y);isFinite(D)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(p,-h.y).multiplyScalar(D),m.copy(p).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(D),o[v].add(y),o[E].add(y),o[C].add(y),l[v].add(m),l[E].add(m),l[C].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let v=0,E=A.length;v<E;++v){const C=A[v],D=C.start,B=C.count;for(let V=D,U=D+B;V<U;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const R=new N,S=new N,M=new N,T=new N;function w(v){M.fromBufferAttribute(a,v),T.copy(M);const E=o[v];R.copy(E),R.sub(M.multiplyScalar(M.dot(E))).normalize(),S.crossVectors(T,E);const D=S.dot(l[v])<0?-1:1;s.setXYZW(v,R.x,R.y,R.z,D)}for(let v=0,E=A.length;v<E;++v){const C=A[v],D=C.start,B=C.count;for(let V=D,U=D+B;V<U;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new N,r=new N,s=new N,o=new N,l=new N,c=new N,d=new N,p=new N;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?h=l[y]*o.data.stride+o.offset:h=l[y]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new yn(u,d,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ld,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Kt=new N;class Wr{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),a=ct(a,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rs=new N,Mh=new N,bh=new Ue;class oi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Rs.subVectors(i,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Rs),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bh.getNormalMatrix(e),a=this.coplanarPoint(Rs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Eh=0;class _i extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Ua,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Xc,this.blendEquation=na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class md extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const ba=new N,Ki=new N,Zi=new N,Ji=new Fe,Ea=new Fe,gd=new _t,cr=new N,Ta=new N,dr=new N,jl=new Fe,Cs=new Fe,ec=new Fe;class Th extends Bt{constructor(e=new md){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sh(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Wr(i,3,0,!1)),Yi.setAttribute("uv",new Wr(i,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Zi.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;ur(cr.set(-.5,-.5,0),Zi,s,Ki,a,r),ur(Ta.set(.5,-.5,0),Zi,s,Ki,a,r),ur(dr.set(.5,.5,0),Zi,s,Ki,a,r),jl.set(0,0),Cs.set(1,0),ec.set(1,1);let o=e.ray.intersectTriangle(cr,Ta,dr,!1,ba);if(o===null&&(ur(Ta.set(-.5,.5,0),Zi,s,Ki,a,r),Cs.set(0,1),o=e.ray.intersectTriangle(cr,dr,Ta,!1,ba),o===null))return;const l=e.ray.origin.distanceTo(ba);l<e.near||l>e.far||t.push({distance:l,point:ba.clone(),uv:un.getInterpolation(ba,cr,Ta,dr,jl,Cs,ec,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ur(n,e,t,i,a,r){Ji.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(Ea.x=r*Ji.x-a*Ji.y,Ea.y=a*Ji.x+r*Ji.y):Ea.copy(Ji),n.copy(e),n.x+=Ea.x,n.y+=Ea.y,n.applyMatrix4(gd)}const Vn=new N,Ps=new N,hr=new N,fr=new N;class al{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ps.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(Ps);const r=e.distanceTo(t)*.5,s=-this.direction.dot(hr),o=fr.dot(this.direction),l=-fr.dot(hr),c=fr.lengthSq(),d=Math.abs(1-s*s);let p,u,h,_;if(d>0)if(p=s*l-o,u=s*o-l,_=r*d,p>=0)if(u>=-_)if(u<=_){const y=1/d;p*=y,u*=y,h=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),h=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ps).addScaledVector(hr,u),h}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),a=Vn.dot(Vn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,h=e.z-s.z,_=t.x-s.x,y=t.y-s.y,m=t.z-s.z,f=i.x-s.x,A=i.y-s.y,R=i.z-s.z,S=Math.abs(l),M=Math.abs(c),T=Math.abs(d);let w,v,E,C,D,B,V,U,G,Z,$,ie;if(S>=M&&S>=T?(E=l,B=p,G=_,ie=f,l>=0?(w=c,v=d,C=u,D=h,V=y,U=m,Z=A,$=R):(w=d,v=c,C=h,D=u,V=m,U=y,Z=R,$=A)):M>=T?(E=c,B=u,G=y,ie=A,c>=0?(w=d,v=l,C=h,D=p,V=m,U=_,Z=R,$=f):(w=l,v=d,C=p,D=h,V=_,U=m,Z=f,$=R)):(E=d,B=h,G=m,ie=R,d>=0?(w=l,v=c,C=p,D=u,V=_,U=y,Z=f,$=A):(w=c,v=l,C=u,D=p,V=y,U=_,Z=A,$=f)),E===0)return null;const q=w/E,ee=v/E,ne=1/E,Re=C-q*B,Ae=D-ee*B,ft=V-q*G,Je=U-ee*G,nt=Z-q*ie,Y=$-ee*ie,j=nt*Je-Y*ft,xe=Re*Y-Ae*nt,De=ft*Ae-Je*Re;if(a){if(j<0||xe<0||De<0)return null}else if((j<0||xe<0||De<0)&&(j>0||xe>0||De>0))return null;const _e=j+xe+De;if(_e===0)return null;const Ve=ne*(j*B+xe*G+De*ie);return(_e>0?Ve<0:Ve>0)?null:this.at(Ve/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class li extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tc=new _t,Si=new al,pr=new Ya,nc=new N,mr=new N,gr=new N,_r=new N,Is=new N,vr=new N,ic=new N,xr=new N;class ht extends Bt{constructor(e=new qt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(Is.fromBufferAttribute(p,e),s?vr.addScaledVector(Is,d):vr.addScaledVector(Is.sub(t),d))}t.add(vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(pr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(pr,nc)===null||Si.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(tc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const m=u[_],f=s[m.materialIndex],A=Math.max(m.start,h.start),R=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,M=R;S<M;S+=3){const T=o.getX(S),w=o.getX(S+1),v=o.getX(S+2);a=yr(this,f,e,i,c,d,p,T,w,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let m=_,f=y;m<f;m+=3){const A=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);a=yr(this,s,e,i,c,d,p,A,R,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const m=u[_],f=s[m.materialIndex],A=Math.max(m.start,h.start),R=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,M=R;S<M;S+=3){const T=S,w=S+1,v=S+2;a=yr(this,f,e,i,c,d,p,T,w,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=_,f=y;m<f;m+=3){const A=m,R=m+1,S=m+2;a=yr(this,s,e,i,c,d,p,A,R,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Ah(n,e,t,i,a,r,s,o){let l;if(e.side===nn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Ri,o),l===null)return null;xr.copy(o),xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:n}}function yr(n,e,t,i,a,r,s,o,l,c){n.getVertexPosition(o,mr),n.getVertexPosition(l,gr),n.getVertexPosition(c,_r);const d=Ah(n,e,t,i,mr,gr,_r,ic);if(d){const p=new N;un.getBarycoord(ic,mr,gr,_r,p),a&&(d.uv=un.getInterpolatedAttribute(a,o,l,c,p,new Fe)),r&&(d.uv1=un.getInterpolatedAttribute(r,o,l,c,p,new Fe)),s&&(d.normal=un.getInterpolatedAttribute(s,o,l,c,p,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};un.getNormal(mr,gr,_r,u.normal),d.face=u,d.barycoord=p}return d}class wh extends $t{constructor(e=null,t=1,i=1,a,r,s,o,l,c=kt,d=kt,p,u){super(null,s,o,l,c,d,a,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mi=new Ya,Rh=new Fe(.5,.5),Sr=new N;class rl{constructor(e=new oi,t=new oi,i=new oi,a=new oi,r=new oi,s=new oi){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],h=r[7],_=r[8],y=r[9],m=r[10],f=r[11],A=r[12],R=r[13],S=r[14],M=r[15];if(a[0].setComponents(c-s,h-d,f-_,M-A).normalize(),a[1].setComponents(c+s,h+d,f+_,M+A).normalize(),a[2].setComponents(c+o,h+p,f+y,M+R).normalize(),a[3].setComponents(c-o,h-p,f-y,M-R).normalize(),i)a[4].setComponents(l,u,m,S).normalize(),a[5].setComponents(c-l,h-u,f-m,M-S).normalize();else if(a[4].setComponents(c-l,h-u,f-m,M-S).normalize(),t===In)a[5].setComponents(c+l,h+u,f+m,M+S).normalize();else if(t===za)a[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Rh.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Sr.x=a.normal.x>0?e.max.x:e.min.x,Sr.y=a.normal.y>0?e.max.y:e.min.y,Sr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _d extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $r=new N,Xr=new N,ac=new _t,Aa=new al,Mr=new Ya,Ls=new N,rc=new N;class sc extends Bt{constructor(e=new qt,t=new _d){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,r=t.count;a<r;a++)$r.fromBufferAttribute(t,a-1),Xr.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=$r.distanceTo(Xr);e.setAttribute("lineDistance",new Xt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(a),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;ac.copy(a).invert(),Aa.copy(e.ray).applyMatrix4(ac);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let y=h,m=_-1;y<m;y+=c){const f=d.getX(y),A=d.getX(y+1),R=br(this,e,Aa,l,f,A,y);R&&t.push(R)}if(this.isLineLoop){const y=d.getX(_-1),m=d.getX(h),f=br(this,e,Aa,l,y,m,_-1);f&&t.push(f)}}else{const h=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let y=h,m=_-1;y<m;y+=c){const f=br(this,e,Aa,l,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){const y=br(this,e,Aa,l,_-1,h,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function br(n,e,t,i,a,r,s){const o=n.geometry.attributes.position;if($r.fromBufferAttribute(o,a),Xr.fromBufferAttribute(o,r),t.distanceSqToSegment($r,Xr,Ls,rc)>i)return;Ls.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ls);if(!(c<e.near||c>e.far))return{distance:c,point:rc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class vd extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oc=new _t,Oo=new al,Er=new Ya,Tr=new N;class lc extends Bt{constructor(e=new qt,t=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(a),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;oc.copy(a).invert(),Oo.copy(e.ray).applyMatrix4(oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let _=u,y=h;_<y;_++){const m=c.getX(_);Tr.fromBufferAttribute(p,m),cc(Tr,m,l,a,e,t,this)}}else{const u=Math.max(0,s.start),h=Math.min(p.count,s.start+s.count);for(let _=u,y=h;_<y;_++)Tr.fromBufferAttribute(p,_),cc(Tr,_,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cc(n,e,t,i,a,r,s){const o=Oo.distanceSqToPoint(n);if(o<t){const l=new N;Oo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class xd extends $t{constructor(e=[],t=Ci,i,a,r,s,o,l,c,d){super(e,t,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends $t{constructor(e,t,i,a,r,s,o,l,c){super(e,t,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ga extends $t{constructor(e,t,i=Un,a,r,s,o=kt,l=kt,c,d=Jn,p=1){if(d!==Jn&&d!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ch extends Ga{constructor(e,t=Un,i=Ci,a,r,s=kt,o=kt,l,c=Jn){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,i,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sd extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dn extends qt{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,t,e,s,r,0),_("z","y","x",1,-1,i,t,-e,s,r,1),_("x","z","y",1,1,e,i,t,a,s,2),_("x","z","y",1,-1,e,i,-t,a,s,3),_("x","y","z",1,-1,e,t,i,a,r,4),_("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function _(y,m,f,A,R,S,M,T,w,v,E){const C=S/w,D=M/v,B=S/2,V=M/2,U=T/2,G=w+1,Z=v+1;let $=0,ie=0;const q=new N;for(let ee=0;ee<Z;ee++){const ne=ee*D-V;for(let Re=0;Re<G;Re++){const Ae=Re*C-B;q[y]=Ae*A,q[m]=ne*R,q[f]=U,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=T>0?1:-1,d.push(q.x,q.y,q.z),p.push(Re/w),p.push(1-ee/v),$+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<w;ne++){const Re=u+ne+G*ee,Ae=u+ne+G*(ee+1),ft=u+(ne+1)+G*(ee+1),Je=u+(ne+1)+G*ee;l.push(Re,Ae,Je),l.push(Ae,ft,Je),ie+=6}o.addGroup(h,ie,E),h+=ie,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qr extends qt{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],p=[],u=[],h=[];let _=0;const y=[],m=i/2;let f=0;A(),s===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function A(){const S=new N,M=new N;let T=0;const w=(t-e)/i;for(let v=0;v<=r;v++){const E=[],C=v/r,D=C*(t-e)+e;for(let B=0;B<=a;B++){const V=B/a,U=V*l+o,G=Math.sin(U),Z=Math.cos(U);M.x=D*G,M.y=-C*i+m,M.z=D*Z,p.push(M.x,M.y,M.z),S.set(G,w,Z).normalize(),u.push(S.x,S.y,S.z),h.push(V,1-C),E.push(_++)}y.push(E)}for(let v=0;v<a;v++)for(let E=0;E<r;E++){const C=y[E][v],D=y[E+1][v],B=y[E+1][v+1],V=y[E][v+1];(e>0||E!==0)&&(d.push(C,D,V),T+=3),(t>0||E!==r-1)&&(d.push(D,B,V),T+=3)}c.addGroup(f,T,0),f+=T}function R(S){const M=_,T=new Fe,w=new N;let v=0;const E=S===!0?e:t,C=S===!0?1:-1;for(let B=1;B<=a;B++)p.push(0,m*C,0),u.push(0,C,0),h.push(.5,.5),_++;const D=_;for(let B=0;B<=a;B++){const U=B/a*l+o,G=Math.cos(U),Z=Math.sin(U);w.x=E*Z,w.y=m*C,w.z=E*G,p.push(w.x,w.y,w.z),u.push(0,C,0),T.x=G*.5+.5,T.y=Z*.5*C+.5,h.push(T.x,T.y),_++}for(let B=0;B<a;B++){const V=M+B,U=D+B;S===!0?d.push(U,U+1,V):d.push(U+1,U,V),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(r-1);const d=i[a],u=i[a+1]-d,h=(s-d)/u;return(a+h)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=t||(s.isVector2?new Fe:new N);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,a=[],r=[],s=[],o=new N,l=new _t;for(let h=0;h<=e;h++){const _=h/e;a[h]=this.getTangentAt(_,new N)}r[0]=new N,s[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),p=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(a[h-1],a[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(qe(a[h-1].dot(a[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,_))}s[h].crossVectors(a[h],r[h])}if(t===!0){let h=Math.acos(qe(r[0].dot(r[e]),-1,1));h/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(a[_],h*_)),s[_].crossVectors(a[_],r[_])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function sl(){let n=0,e=0,t=0,i=0;function a(r,s,o,l){n=r,e=o,t=-3*r+3*s-2*o-l,i=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,h=(o-s)/d-(l-s)/(d+p)+(l-o)/p;u*=d,h*=d,a(s,o,u,h)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const dc=new N,uc=new N,Ds=new sl,Us=new sl,Ns=new sl;class Ih extends Ph{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new N){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%r]:(uc.subVectors(a[0],a[1]).add(a[0]),c=uc);const p=a[o%r],u=a[(o+1)%r];if(this.closed||o+2<r?d=a[(o+2)%r]:(dc.subVectors(a[r-1],a[r-2]).add(a[r-1]),d=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),h),y=Math.pow(p.distanceToSquared(u),h),m=Math.pow(u.distanceToSquared(d),h);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Ds.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,_,y,m),Us.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,_,y,m),Ns.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,_,y,m)}else this.curveType==="catmullrom"&&(Ds.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),Us.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),Ns.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return i.set(Ds.calc(l),Us.calc(l),Ns.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new N().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class qn extends qt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=t/l,h=[],_=[],y=[],m=[];for(let f=0;f<d;f++){const A=f*u-s;for(let R=0;R<c;R++){const S=R*p-r;_.push(S,-A,0),y.push(0,0,1),m.push(R/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const R=A+c*f,S=A+c*(f+1),M=A+1+c*(f+1),T=A+1+c*f;h.push(R,S,T),h.push(S,M,T)}this.setIndex(h),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Na extends qt{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new N,u=new N,h=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){const A=[],R=f/i,S=s+R*o,M=e*Math.cos(S),T=Math.sqrt(e*e-M*M);let w=0;f===0&&s===0?w=.5/t:f===i&&l===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){const E=v/t,C=a+E*r;p.x=-T*Math.cos(C),p.y=M,p.z=T*Math.sin(C),_.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(E+w,1-R),A.push(c++)}d.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){const R=d[f][A+1],S=d[f][A],M=d[f+1][A],T=d[f+1][A+1];(f!==0||s>0)&&h.push(R,S,T),(f!==i-1||l<Math.PI)&&h.push(S,M,T)}this.setIndex(h),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ua(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(hc(a))a.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(hc(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=ua(n[t]);for(const a in i)e[a]=i[a]}return e}function hc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Md(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Dh={clone:ua,merge:Zt};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(a.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(a.value);break;case"v3":this.uniforms[i].value=new N().fromArray(a.value);break;case"v4":this.uniforms[i].value=new At().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(a.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fh extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wn extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bh extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ol extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class kh extends ol{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fs=new _t,fc=new N,pc=new N;class zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fs,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===za||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ar=new N,wr=new _a,En=new N;class bd extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ar,wr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ar,wr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,wr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new N,mc=new Fe,gc=new Fe;class sn extends bd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gh extends zh{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Qi extends ol{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ed extends bd{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hh extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ji=-90,ea=1;class Vh extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new sn(ji,ea,e,t);a.layers=this.layers,this.add(a);const r=new sn(ji,ea,e,t);r.layers=this.layers,this.add(r);const s=new sn(ji,ea,e,t);s.layers=this.layers,this.add(s);const o=new sn(ji,ea,e,t);o.layers=this.layers,this.add(o);const l=new sn(ji,ea,e,t);l.layers=this.layers,this.add(l);const c=new sn(ji,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wh extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $h{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Tl=class Tl{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};Tl.prototype.isMatrix2=!0;let _c=Tl;function vc(n,e,t,i){const a=Xh(i);switch(t){case rd:return n*e;case od:return n*e/a.components*a.byteLength;case Jo:return n*e/a.components*a.byteLength;case Pi:return n*e*2/a.components*a.byteLength;case Qo:return n*e*2/a.components*a.byteLength;case sd:return n*e*3/a.components*a.byteLength;case vn:return n*e*4/a.components*a.byteLength;case jo:return n*e*4/a.components*a.byteLength;case Dr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:case oo:return Math.max(n,16)*Math.max(e,8)/4;case ao:case so:return Math.max(n,8)*Math.max(e,8)/2;case lo:case co:case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case Br:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Po:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kr:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xh(n){switch(n){case on:case td:return{byteLength:1,components:1};case Ba:case nd:case Nn:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case Un:case Yo:case Pn:return{byteLength:4,components:1};case id:case ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Td(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qh(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],y=p[h];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,p[u]=y)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const y=p[h];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kh=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vf=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,qf=`uniform sampler2D dfgLUT;
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
}`,Yf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,Mm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Yh,alphahash_pars_fragment:Kh,alphamap_fragment:Zh,alphamap_pars_fragment:Jh,alphatest_fragment:Qh,alphatest_pars_fragment:jh,aomap_fragment:ef,aomap_pars_fragment:tf,batching_pars_vertex:nf,batching_vertex:af,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:of,iridescence_fragment:lf,bumpmap_pars_fragment:cf,clipping_planes_fragment:df,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:ff,color_fragment:pf,color_pars_fragment:mf,color_pars_vertex:gf,color_vertex:_f,common:vf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Mf,emissivemap_fragment:bf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:wf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Cf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Gf,envmap_vertex:If,fog_vertex:Lf,fog_pars_vertex:Df,fog_fragment:Uf,fog_pars_fragment:Nf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:kf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Wf,lights_phong_pars_fragment:$f,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Kf,lights_fragment_end:Zf,lightprobes_pars_fragment:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:ap,map_particle_pars_fragment:rp,metalnessmap_fragment:sp,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:dp,morphtarget_pars_vertex:up,morphtarget_vertex:hp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Mp,opaque_fragment:bp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:wp,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:zp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:$p,uv_pars_vertex:Xp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:jp,cube_frag:em,depth_vert:tm,depth_frag:nm,distance_vert:im,distance_frag:am,equirect_vert:rm,equirect_frag:sm,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:dm,meshlambert_vert:um,meshlambert_frag:hm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:Sm,meshtoon_frag:Mm,points_vert:bm,points_frag:Em,shadow_vert:Tm,shadow_frag:Am,sprite_vert:wm,sprite_frag:Rm},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},wn={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};wn.physical={uniforms:Zt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Rr={r:0,b:0,g:0},Cm=new _t,Ad=new Ue;Ad.set(-1,0,0,0,1,0,0,0,1);function Pm(n,e,t,i,a,r){const s=new He(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){const S=A.backgroundBlurriness>0;R=e.get(R,S)}return R}function _(A){let R=!1;const S=h(A);S===null?m(s,o):S&&S.isColor&&(m(S,1),R=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,R){const S=h(R);S&&(S.isCubeTexture||S.mapping===Zr)?(c===void 0&&(c=new ht(new dn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ua(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,(d!==S||p!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ht(new qn(2,2),new Fn({name:"BackgroundMaterial",uniforms:ua(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,R){A.getRGB(Rr,Md(n)),t.buffers.color.setClear(Rr.r,Rr.g,Rr.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,R=1){s.set(A),o=R,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(s,o)},render:_,addToRenderList:y,dispose:f}}function Im(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(D,B,V,U,G){let Z=!1;const $=p(D,U,V,B);r!==$&&(r=$,c(r.object)),Z=h(D,U,V,G),Z&&_(D,U,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,S(D,B,V,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function p(D,B,V,U){const G=U.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const $=D.isInstancedMesh===!0?D.id:0;let ie=Z[$];ie===void 0&&(ie={},Z[$]=ie);let q=ie[V.id];q===void 0&&(q={},ie[V.id]=q);let ee=q[G];return ee===void 0&&(ee=u(l()),q[G]=ee),ee}function u(D){const B=[],V=[],U=[];for(let G=0;G<t;G++)B[G]=0,V[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:U,object:D,attributes:{},index:null}}function h(D,B,V,U){const G=r.attributes,Z=B.attributes;let $=0;const ie=V.getAttributes();for(const q in ie)if(ie[q].location>=0){const ne=G[q];let Re=Z[q];if(Re===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Re=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Re=D.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;$++}return r.attributesNum!==$||r.index!==U}function _(D,B,V,U){const G={},Z=B.attributes;let $=0;const ie=V.getAttributes();for(const q in ie)if(ie[q].location>=0){let ne=Z[q];ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),G[q]=Re,$++}r.attributes=G,r.attributesNum=$,r.index=U}function y(){const D=r.newAttributes;for(let B=0,V=D.length;B<V;B++)D[B]=0}function m(D){f(D,0)}function f(D,B){const V=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;V[D]=1,U[D]===0&&(n.enableVertexAttribArray(D),U[D]=1),G[D]!==B&&(n.vertexAttribDivisor(D,B),G[D]=B)}function A(){const D=r.newAttributes,B=r.enabledAttributes;for(let V=0,U=B.length;V<U;V++)B[V]!==D[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function R(D,B,V,U,G,Z,$){$===!0?n.vertexAttribIPointer(D,B,V,G,Z):n.vertexAttribPointer(D,B,V,U,G,Z)}function S(D,B,V,U){y();const G=U.attributes,Z=V.getAttributes(),$=B.defaultAttributeValues;for(const ie in Z){const q=Z[ie];if(q.location>=0){let ee=G[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ne=ee.normalized,Re=ee.itemSize,Ae=e.get(ee);if(Ae===void 0)continue;const ft=Ae.buffer,Je=Ae.type,nt=Ae.bytesPerElement,Y=Je===n.INT||Je===n.UNSIGNED_INT||ee.gpuType===Yo;if(ee.isInterleavedBufferAttribute){const j=ee.data,xe=j.stride,De=ee.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)f(q.location+_e,j.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let _e=0;_e<q.locationSize;_e++)R(q.location+_e,Re/q.locationSize,Je,ne,xe*nt,(De+Re/q.locationSize*_e)*nt,Y)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)f(q.location+j,ee.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let j=0;j<q.locationSize;j++)R(q.location+j,Re/q.locationSize,Je,ne,Re*nt,Re/q.locationSize*j*nt,Y)}}else if($!==void 0){const ne=$[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(q.location,ne);break;case 3:n.vertexAttrib3fv(q.location,ne);break;case 4:n.vertexAttrib4fv(q.location,ne);break;default:n.vertexAttrib1fv(q.location,ne)}}}}A()}function M(){E();for(const D in i){const B=i[D];for(const V in B){const U=B[V];for(const G in U){const Z=U[G];for(const $ in Z)d(Z[$].object),delete Z[$];delete U[G]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const V in B){const U=B[V];for(const G in U){const Z=U[G];for(const $ in Z)d(Z[$].object),delete Z[$];delete U[G]}}delete i[D.id]}function w(D){for(const B in i){const V=i[B];for(const U in V){const G=V[U];if(G[D.id]===void 0)continue;const Z=G[D.id];for(const $ in Z)d(Z[$].object),delete Z[$];delete G[D.id]}}}function v(D){for(const B in i){const V=i[B],U=D.isInstancedMesh===!0?D.id:0,G=V[U];if(G!==void 0){for(const Z in G){const $=G[Z];for(const ie in $)d($[ie].object),delete $[ie];delete G[Z]}delete V[U],Object.keys(V).length===0&&delete i[B]}}}function E(){C(),s=!0,r!==a&&(r=a,c(r.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Lm(n,e,t){let i;function a(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Dm(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==vn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==on&&w!==Pn&&!v&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:S,maxSamples:M,samples:T}}function Um(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new oi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!a||_===null||_.length===0||r&&!m)r?d(null):c();else{const A=r?0:i,R=A*4;let S=f.clippingState||null;l.value=S,S=d(_,u,R,h);for(let M=0;M!==R;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const f=h+y*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,S=h;R!==y;++R,S+=4)s.copy(p[R]).applyMatrix4(A,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const aa=4,Nm=6,Fm=20,Om=256,wa=new Ed,xc=new He;let Os=null,Bs=0,ks=0,zs=!1;const Bm=new N,bi=new N;class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=Bm}=r;Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Bs,ks),this._renderer.xr.enabled=zs,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Nn,format:vn,colorSpace:zr,depthBuffer:!1},a=Sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Gm(r,e,t),this._ggxMaterial=zm(r,e,t)}return a}_compileMaterial(e){const t=new ht(new qt,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,a,r){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(xc),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new dn,new li({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,f=!0):(m.color.copy(xc),f=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));const M=this._cubeSize;ta(a,S*M,R>2?M:0,M,M),p.setRenderTarget(a),f&&p.render(y,l),p.render(e,l)}p.toneMapping=h,p.autoClear=u,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ci||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=c*1.25,h=p*u,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-aa?i-_+aa:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,ta(r,m,f,3*y,2*y),a.setRenderTarget(r),a.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ta(e,m,f,3*y,2*y),a.setRenderTarget(e),a.render(o,wa)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[a],p=3*d*(a>this._lodMax-aa?a-this._lodMax+aa:0),u=4*(this._cubeSize-d);ta(t,p,u,3*d,2*d),s.setRenderTarget(t),s.render(l,wa)}}function km(n){const e=[],t=[];let i=n;const a=n-aa+1+Nm;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,h=3,_=new Float32Array(h*u*p),y=new Float32Array(h*u*p);for(let f=0;f<p;f++){const A=f%3*2/3-1,R=f>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(S,h*u*f);for(let M=0;M<u;M++){const T=d[M*2]*2-1,w=d[M*2+1]*2-1;f===0?bi.set(1,w,T):f===1?bi.set(-T,1,-w):f===2?bi.set(-T,w,1):f===3?bi.set(-1,w,-T):f===4?bi.set(-T,-1,w):bi.set(T,w,-1),bi.toArray(y,(f*u+M)*h)}}const m=new qt;m.setAttribute("position",new yn(_,h)),m.setAttribute("outputDirection",new yn(y,h)),t.push(new ht(m,null)),i>aa&&i--}return{lodMeshes:t,sizeLods:e}}function Sc(n,e,t){const i=new xn(n,e,t);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function zm(n,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Gm(n,e,t){return new Fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Mc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Jr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wd extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new xd(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new dn(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Kn});r.uniforms.tEquirect.value=t;const s=new ht(a,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Wt),new Vh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function Hm(n){let e=new WeakMap,t=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===rs||h===ss)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new wd(_.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,_=h===rs||h===ss,y=h===Ci||h===da;if(_||y){let m=t.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new yc(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const A=u.image;return _&&A&&A.height>0||y&&A&&l(A)?(i===null&&(i=new yc(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===rs?u.mapping=Ci:h===ss&&(u.mapping=da),u}function l(u){let h=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function Vm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&sa("WebGLRenderer: "+i+" extension not supported."),a}}}function Wm(n,e,t,i){const a={},r=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,_=p.attributes.position;let y=0;if(_===void 0)return;if(h!==null){const A=h.array;y=h.version;for(let R=0,S=A.length;R<S;R+=3){const M=A[R+0],T=A[R+1],w=A[R+2];u.push(M,T,T,w,w,M)}}else{const A=_.array;y=_.version;for(let R=0,S=A.length/3-1;R<S;R+=3){const M=R+0,T=R+1,w=R+2;u.push(M,T,T,w,w,M)}}const m=new(_.count>=65535?pd:fd)(u,1);m.version=y;const f=r.get(p);f&&e.remove(f),r.set(p,m)}function d(p){const u=r.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function $m(n,e,t){let i;function a(p){i=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){n.drawElements(i,u,r,p*s),t.update(u,i,1)}function c(p,u,h){h!==0&&(n.drawElementsInstanced(i,u,r,p*s,h),t.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,h);let y=0;for(let m=0;m<h;m++)y+=u[m];t.update(y,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Xm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function qm(n,e,t){const i=new WeakMap,a=new At;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let C=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var h=C;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*p),v=new dd(w,M,T,p);v.type=Pn,v.needsUpdate=!0;const E=S*4;for(let D=0;D<p;D++){const B=f[D],V=A[D],U=R[D],G=M*T*4*D;for(let Z=0;Z<B.count;Z++){const $=Z*E;_===!0&&(a.fromBufferAttribute(B,Z),w[G+$+0]=a.x,w[G+$+1]=a.y,w[G+$+2]=a.z,w[G+$+3]=0),y===!0&&(a.fromBufferAttribute(V,Z),w[G+$+4]=a.x,w[G+$+5]=a.y,w[G+$+6]=a.z,w[G+$+7]=0),m===!0&&(a.fromBufferAttribute(U,Z),w[G+$+8]=a.x,w[G+$+9]=a.y,w[G+$+10]=a.z,w[G+$+11]=U.itemSize===4?a.w:1)}}u={count:p,texture:v,size:new Fe(M,T)},i.set(o,u),o.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ym(n,e,t,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Km={[Yc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function Zm(n,e,t,i,a,r){const s=new xn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new qt;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const d=new Fh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ht(c,d),u=new Ed(-1,1,1,-1,0,1);let h=null,_=null,y=!1,m,f=null,A=[],R=!1;this.setSize=function(S,M){s.setSize(S,M),o!==null&&o.setSize(S,M),l!==null&&l.setSize(S,M);for(let T=0;T<A.length;T++){const w=A[T];w.setSize&&w.setSize(S,M)}},this.setEffects=function(S){A=S,R=A.length>0&&A[0].isRenderPass===!0;const M=s.width,T=s.height;A.length>0&&o===null&&(o=new xn(M,T,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(M,T,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const v=A[w];v.setSize&&v.setSize(M,T)}},this.begin=function(S,M){if(y||S.toneMapping===Ln&&A.length===0)return!1;if(f=M,M!==null){const T=M.width,w=M.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return R===!1&&S.setRenderTarget(s),m=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return R},this.end=function(S,M){S.toneMapping=m,y=!0;let T=s,w=o;for(let v=0;v<A.length;v++){const E=A[v];E.enabled!==!1&&(E.render(S,w,T,M),E.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(h!==S.outputColorSpace||_!==S.toneMapping){h=S.outputColorSpace,_=S.toneMapping,d.defines={},Ze.getTransfer(h)===ot&&(d.defines.SRGB_TRANSFER="");const v=Km[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(f),S.render(p,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Rd=new $t,Bo=new Ga(1,1),Cd=new dd,Pd=new ch,Id=new xd,Ec=[],Tc=[],Ac=new Float32Array(16),wc=new Float32Array(9),Rc=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=Ec[a];if(r===void 0&&(r=new Float32Array(a),Ec[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qr(n,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Rc.set(i),n.uniformMatrix2fv(this.addr,!1,Rc),Nt(t,i)}}function ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;wc.set(i),n.uniformMatrix3fv(this.addr,!1,wc),Nt(t,i)}}function ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Ac.set(i),n.uniformMatrix4fv(this.addr,!1,Ac),Nt(t,i)}}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function hg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Bo.compareFunction=t.isReversedDepthBuffer()?tl:el,r=Bo):r=Rd,t.setTexture2D(e||r,a)}function fg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Pd,a)}function pg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Id,a)}function mg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Cd,a)}function gg(n){switch(n){case 5126:return Jm;case 35664:return Qm;case 35665:return jm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return ag;case 35667:case 35671:return rg;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return dg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(n,e){n.uniform1fv(this.addr,e)}function vg(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function xg(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function yg(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function Sg(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mg(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bg(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Eg(n,e){n.uniform1iv(this.addr,e)}function Tg(n,e){n.uniform2iv(this.addr,e)}function Ag(n,e){n.uniform3iv(this.addr,e)}function wg(n,e){n.uniform4iv(this.addr,e)}function Rg(n,e){n.uniform1uiv(this.addr,e)}function Cg(n,e){n.uniform2uiv(this.addr,e)}function Pg(n,e){n.uniform3uiv(this.addr,e)}function Ig(n,e){n.uniform4uiv(this.addr,e)}function Lg(n,e,t){const i=this.cache,a=e.length,r=Qr(t,a);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Bo:s=Rd;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function Dg(n,e,t){const i=this.cache,a=e.length,r=Qr(t,a);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Pd,r[s])}function Ug(n,e,t){const i=this.cache,a=e.length,r=Qr(t,a);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Id,r[s])}function Ng(n,e,t){const i=this.cache,a=e.length,r=Qr(t,a);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Cd,r[s])}function Fg(n){switch(n){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Sg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return wg;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class Bg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function zg(n,e,t){const i=n.name,a=i.length;for(Gs.lastIndex=0;;){const r=Gs.exec(i),s=Gs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Cc(t,c===void 0?new Og(o,n,e):new Bg(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new kg(o),Cc(t,p)),t=p}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);zg(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function Pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gg=37297;let Hg=0;function Vg(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ic=new Ue;function Wg(n){Ze._getMatrix(Ic,Ze.workingColorSpace,n);const e=`mat3( ${Ic.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Gr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vg(n.getShaderSource(e),o)}else return r}function $g(n,e){const t=Wg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xg={[Yc]:"Linear",[Kc]:"Reinhard",[Zc]:"Cineon",[qo]:"ACESFilmic",[Qc]:"AgX",[jc]:"Neutral",[Jc]:"Custom"};function qg(n,e){const t=Xg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new N;function Yg(){Ze.getLuminanceCoefficients(Cr);const n=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function Zg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Da(n){return n!==""}function Dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(n){return n.replace(Qg,e0)}const jg=new Map;function e0(n,e){let t=Ge[e];if(t===void 0){const i=jg.get(e);if(i!==void 0)t=Ge[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ko(t)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(n){return n.replace(t0,n0)}function n0(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Fc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const i0={[Lr]:"SHADOWMAP_TYPE_PCF",[Ia]:"SHADOWMAP_TYPE_VSM"};function a0(n){return i0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r0={[Ci]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function s0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":r0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const o0={[da]:"ENVMAP_MODE_REFRACTION"};function l0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c0={[qc]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function d0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c0[n.combine]||"ENVMAP_BLENDING_NONE"}function u0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function h0(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=a0(t),c=s0(t),d=l0(t),p=d0(t),u=u0(t),h=Kg(t),_=Zg(r),y=a.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),f.length>0&&(f+=`
`)):(m=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),f=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ln?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),Yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),s=ko(s),s=Dc(s,t),s=Uc(s,t),o=ko(o),o=Dc(o,t),o=Uc(o,t),s=Nc(s),o=Nc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=A+m+s,S=A+f+o,M=Pc(a,a.VERTEX_SHADER,R),T=Pc(a,a.FRAGMENT_SHADER,S);a.attachShader(y,M),a.attachShader(y,T),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function w(D){if(n.debug.checkShaderErrors){const B=a.getProgramInfoLog(y)||"",V=a.getShaderInfoLog(M)||"",U=a.getShaderInfoLog(T)||"",G=B.trim(),Z=V.trim(),$=U.trim();let ie=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,y,M,T);else{const ee=Lc(a,M,"vertex"),ne=Lc(a,T,"fragment");et("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ee+`
`+ne)}else G!==""?Ie("WebGLProgram: Program Info Log:",G):(Z===""||$==="")&&(q=!1);q&&(D.diagnostics={runnable:ie,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:$,prefix:f}})}a.deleteShader(M),a.deleteShader(T),v=new Or(a,y),E=Jg(a,y)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(y,Gg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=T,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new m0(e),t.set(e,i)),i}}class m0{constructor(e){this.id=f0++,this.code=e,this.usedTimes=0}}function g0(n){return n===Pi||n===Br||n===kr}function _0(n,e,t,i,a,r){const s=new ud,o=new p0,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,E,C,D,B,V){const U=D.fog,G=B.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Z,$),q=ie&&ie.mapping===Zr?ie.image.height:null,ee=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Re=ne!==void 0?ne.length:0;let Ae=0;G.morphAttributes.position!==void 0&&(Ae=1),G.morphAttributes.normal!==void 0&&(Ae=2),G.morphAttributes.color!==void 0&&(Ae=3);let ft,Je,nt,Y;if(ee){const mt=wn[ee];ft=mt.vertexShader,Je=mt.fragmentShader}else{ft=v.vertexShader,Je=v.fragmentShader;const mt=o.getVertexShaderStage(v),at=o.getFragmentShaderStage(v);o.update(v,mt,at),nt=mt.id,Y=at.id}const j=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Ve=!!v.map,It=!!v.matcap,$e=!!ie,tt=!!v.aoMap,pt=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,Ft=!!v.displacementMap,tn=!!v.emissiveMap,Et=!!v.metalnessMap,Rt=!!v.roughnessMap,L=v.anisotropy>0,zt=v.clearcoat>0,st=v.dispersion>0,b=v.retroreflectivity>0,g=v.iridescence>0,F=v.sheen>0,H=v.transmission>0,X=L&&!!v.anisotropyMap,re=zt&&!!v.clearcoatMap,se=zt&&!!v.clearcoatNormalMap,K=zt&&!!v.clearcoatRoughnessMap,Q=g&&!!v.iridescenceMap,oe=g&&!!v.iridescenceThicknessMap,Ee=F&&!!v.sheenColorMap,ue=F&&!!v.sheenRoughnessMap,le=!!v.specularMap,Te=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Oe=H&&!!v.transmissionMap,I=H&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,de=v.alphaTest>0,me=!!v.alphaHash,te=!!v.extensions;let we=Ln;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=n.toneMapping);const Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ft,fragmentShader:Je,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:It,envMap:$e,envMapMode:$e&&ie.mapping,envMapCubeUVHeight:q,aoMap:tt,lightMap:pt,bumpMap:Ke,normalMap:Mt,displacementMap:Ft,emissiveMap:tn,normalMapObjectSpace:Mt&&v.normalMapType===$u,normalMapTangentSpace:Mt&&v.normalMapType===No,packedNormalMap:Mt&&v.normalMapType===No&&g0(v.normalMap.format),metalnessMap:Et,roughnessMap:Rt,anisotropy:L,anisotropyMap:X,clearcoat:zt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:K,dispersion:st,retroreflection:b,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Te,specularIntensityMap:Ce,transmission:H,transmissionMap:Oe,thicknessMap:I,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ua&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:me,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:tt&&_(v.aoMap.channel),lightMapUv:pt&&_(v.lightMap.channel),bumpMapUv:Ke&&_(v.bumpMap.channel),normalMapUv:Mt&&_(v.normalMap.channel),displacementMapUv:Ft&&_(v.displacementMap.channel),emissiveMapUv:tn&&_(v.emissiveMap.channel),metalnessMapUv:Et&&_(v.metalnessMap.channel),roughnessMapUv:Rt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:re&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(v.sheenRoughnessMap.channel),specularMapUv:le&&_(v.specularMap.channel),specularColorMapUv:Te&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:Oe&&_(v.transmissionMap.channel),thicknessMapUv:I&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Mt||L),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Ve||J),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ot,decodeVideoTextureEmissive:tn&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(E,v),A(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function A(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function R(v){const E=h[v.type];let C;if(E){const D=wn[E];C=Dh.clone(D.uniforms)}else C=v.uniforms;return C}function S(v,E){let C=d.get(E);return C!==void 0?++C.usedTimes:(C=new h0(n,E,v,a),c.push(C),d.set(E,C)),C}function M(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function v0(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bc(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,y,m,f){let A=n[e];return A===void 0?(A={id:u.id,object:u,geometry:h,material:_,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},n[e]=A):(A.id=u.id,A.object=u,A.geometry=h,A.material=_,A.materialVariant=s(u),A.groupOrder=y,A.renderOrder=u.renderOrder,A.z=m,A.group=f),e++,A}function l(u,h,_,y,m,f,A){A.reversedDepth===!0&&(m=-m);const R=o(u,h,_,y,m,f);_.transmission>0?i.push(R):_.transparent===!0?a.push(R):t.push(R)}function c(u,h,_,y,m,f){const A=o(u,h,_,y,m,f);_.transmission>0?i.unshift(A):_.transparent===!0?a.unshift(A):t.unshift(A)}function d(u,h){t.length>1&&t.sort(u||x0),i.length>1&&i.sort(h||Oc),a.length>1&&a.sort(h||Oc)}function p(){for(let u=e,h=n.length;u<h;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:p,sort:d}}function y0(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Bc,n.set(i,[s])):a>=r.length?(s=new Bc,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function S0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function M0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b0=0;function E0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T0(n){const e=new S0,t=M0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const a=new N,r=new _t,s=new _t;function o(c){let d=0,p=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,_=0,y=0,m=0,f=0,A=0,R=0,S=0,M=0,T=0,w=0,v=0,E=0,C=0;c.sort(E0);for(let B=0,V=c.length;B<V;B++){const U=c[B],G=U.color,Z=U.intensity,$=U.distance;let ie=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Pi?ie=U.shadow.map.texture:ie=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=G.r*Z,p+=G.g*Z,u+=G.b*Z;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],Z);C++}else if(U.isSunLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,ne=t.get(U);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Re=ee.getViewportCount();for(let Ae=0;Ae<Re;Ae++)i.sunShadowMatrix[y+Ae]=ee.getMatrix(Ae),i.sunShadowCascade[y+Ae]=ee._cascadeData[Ae];y+=Re,_++}i.sun[h]=q,h++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,ne=t.get(U);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=U.shadow.matrix,M++}i.directional[m]=q,m++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(G).multiplyScalar(Z),q.distance=$,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[A]=q;const ee=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,ee.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[A]=ee.matrix,U.castShadow){const ne=t.get(U);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[A]=ne,i.spotShadowMap[A]=ie,w++}A++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(G).multiplyScalar(Z),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[R]=q,R++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const ee=U.shadow,ne=t.get(U);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=ie,i.pointShadowMatrix[f]=U.shadow.matrix,T++}i.point[f]=q,f++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(Z),q.groundColor.copy(U.groundColor).multiplyScalar(Z),i.hemi[S]=q,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const D=i.hash;(D.sunLength!==h||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==A||D.rectAreaLength!==R||D.hemiLength!==S||D.numSunShadows!==_||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==w||D.numSpotMaps!==v||D.numLightProbes!==C)&&(i.sun.length=h,i.directional.length=m,i.spot.length=A,i.rectArea.length=R,i.point.length=f,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,D.sunLength=h,D.directionalLength=m,D.pointLength=f,D.spotLength=A,D.rectAreaLength=R,D.hemiLength=S,D.numSunShadows=_,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=w,D.numSpotMaps=v,D.numLightProbes=C,i.version=b0++)}function l(c,d){let p=0,u=0,h=0,_=0,y=0,m=0;const f=d.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){const S=c[A];if(S.isSunLight){const M=i.sun[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),u++}else if(S.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),s.identity(),r.copy(S.matrixWorld),r.premultiply(f),s.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function kc(n){const e=new T0(n),t=[],i=[],a=[];function r(u){p.camera=u,t.length=0,i.length=0,a.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function A0(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new kc(n),e.set(a,[o])):r>=s.length?(o=new kc(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`,C0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],P0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],zc=new _t,Ra=new N,Hs=new N;function I0(n,e,t){let i=new rl;const a=new Fe,r=new Fe,s=new At,o=new Oh,l=new Bh,c={},d=t.maxTextureSize,p={[Ri]:nn,[nn]:Ri,[Xn]:Xn},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:w0,fragmentShader:R0}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ht(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let f=this.type;this.render=function(T,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Mu&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr);const E=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Kn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=f!==this.type;V&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=T.length;U<G;U++){const Z=T[U],$=Z.shadow;if($===void 0){Ie("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ie=$.getFrameExtents();a.multiply(ie),r.copy($.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/ie.x),a.x=r.x*ie.x,$.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/ie.y),a.y=r.y*ie.y,$.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=q,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ia){if(Z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new xn(a.x,a.y,{format:Pi,type:Nn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Ga(a.x,a.y,Pn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=Jn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt}else Z.isPointLight?($.map=new wd(a.x),$.map.depthTexture=new Ch(a.x,Un)):($.map=new xn(a.x,a.y),$.map.depthTexture=new Ga(a.x,a.y,Un)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=Jn,this.type===Lr?($.map.depthTexture.compareFunction=q?tl:el,$.map.depthTexture.minFilter=Wt,$.map.depthTexture.magFilter=Wt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==a.x||$.map.height!==a.y)&&$.map.setSize(a.x,a.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,v);for(let ne=0;ne<ee;ne++){const Re=$.getCamera(ne);if(Z.isPointLight){const Ae=$.camera,ft=$.matrix,Je=Z.distance||Ae.far;Je!==Ae.far&&(Ae.far=Je,Ae.updateProjectionMatrix()),Ra.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(Ra),Hs.copy(Ae.position),Hs.add(C0[ne]),Ae.up.copy(P0[ne]),Ae.lookAt(Hs),Ae.updateMatrixWorld(),ft.makeTranslation(-Ra.x,-Ra.y,-Ra.z),zc.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),$._frustum.setFromProjectionMatrix(zc,Ae.coordinateSystem,Ae.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ne),n.clear();else{ne===0&&(n.setRenderTarget($.map),n.clear());const Ae=$.getViewport(ne);s.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),B.viewport(s)}i=$.getFrustum(ne),S(w,v,Re,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Ia&&A($,v),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,C,D)};function A(T,w){const v=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new xn(a.x,a.y,{format:Pi,type:Nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,v,u,y,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,v,h,y,null)}function R(T,w,v,E){let C=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=C.uuid,V=w.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let G=U[V];G===void 0&&(G=C.clone(),U[V]=G,w.addEventListener("dispose",M)),C=G}if(C.visible=w.visible,C.wireframe=w.wireframe,E===Ia?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:p[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const B=n.properties.get(C);B.light=v}return C}function S(T,w,v,E,C){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ia)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const V=e.update(T),U=T.material;if(Array.isArray(U)){const G=V.groups;for(let Z=0,$=G.length;Z<$;Z++){const ie=G[Z],q=U[ie.materialIndex];if(q&&q.visible){const ee=R(T,q,E,C);T.onBeforeShadow(n,T,w,v,V,ee,ie),n.renderBufferDirect(v,null,V,ee,T,ie),T.onAfterShadow(n,T,w,v,V,ee,ie)}}}else if(U.visible){const G=R(T,U,E,C);T.onBeforeShadow(n,T,w,v,V,G,null),n.renderBufferDirect(v,null,V,G,T,null),T.onAfterShadow(n,T,w,v,V,G,null)}}const B=T.children;for(let V=0,U=B.length;V<U;V++)S(B[V],w,v,E,C)}function M(T){T.target.removeEventListener("dispose",M);for(const v in c){const E=c[v],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function L0(n,e){function t(){let I=!1;const ce=new At;let J=null;const de=new At(0,0,0,0);return{setMask:function(me){J!==me&&!I&&(n.colorMask(me,me,me,me),J=me)},setLocked:function(me){I=me},setClear:function(me,te,we,Me,mt){mt===!0&&(me*=Me,te*=Me,we*=Me),ce.set(me,te,we,Me),de.equals(ce)===!1&&(n.clearColor(me,te,we,Me),de.copy(ce))},reset:function(){I=!1,J=null,de.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,J=null,de=null,me=null;return{setReversed:function(te){if(ce!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Me=me;me=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(te){te?j(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(te){J!==te&&!I&&(n.depthMask(te),J=te)},setFunc:function(te){if(ce&&(te=nh[te]),de!==te){switch(te){case Ks:n.depthFunc(n.NEVER);break;case Zs:n.depthFunc(n.ALWAYS);break;case Js:n.depthFunc(n.LESS);break;case Oa:n.depthFunc(n.LEQUAL);break;case Qs:n.depthFunc(n.EQUAL);break;case js:n.depthFunc(n.GEQUAL);break;case eo:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=te}},setLocked:function(te){I=te},setClear:function(te){me!==te&&(me=te,ce&&(te=1-te),n.clearDepth(te))},reset:function(){I=!1,J=null,de=null,me=null,ce=!1}}}function a(){let I=!1,ce=null,J=null,de=null,me=null,te=null,we=null,Me=null,mt=null;return{setTest:function(at){I||(at?j(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(at){ce!==at&&!I&&(n.stencilMask(at),ce=at)},setFunc:function(at,fn,Mn){(J!==at||de!==fn||me!==Mn)&&(n.stencilFunc(at,fn,Mn),J=at,de=fn,me=Mn)},setOp:function(at,fn,Mn){(te!==at||we!==fn||Me!==Mn)&&(n.stencilOp(at,fn,Mn),te=at,we=fn,Me=Mn)},setLocked:function(at){I=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){I=!1,ce=null,J=null,de=null,me=null,te=null,we=null,Me=null,mt=null}}}const r=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],y=null,m=!1,f=null,A=null,R=null,S=null,M=null,T=null,w=null,v=new He(0,0,0),E=0,C=!1,D=null,B=null,V=null,U=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ie>=2);let ee=null,ne={};const Re=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),ft=new At().fromArray(Re),Je=new At().fromArray(Ae);function nt(I,ce,J,de){const me=new Uint8Array(4),te=n.createTexture();n.bindTexture(I,te),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<J;we++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ce+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return te}const Y={};Y[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(n.DEPTH_TEST),s.setFunc(Oa),Ke(!1),Mt(Fl),j(n.CULL_FACE),tt(Kn);function j(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function xe(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function De(I,ce){return u[I]!==ce?(n.bindFramebuffer(I,ce),u[I]=ce,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(I,ce){let J=_,de=!1;if(I){J=h.get(ce),J===void 0&&(J=[],h.set(ce,J));const me=I.textures;if(J.length!==me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let te=0,we=me.length;te<we;te++)J[te]=n.COLOR_ATTACHMENT0+te;J.length=me.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function Ve(I){return y!==I?(n.useProgram(I),y=I,!0):!1}const It={[na]:n.FUNC_ADD,[Eu]:n.FUNC_SUBTRACT,[Tu]:n.FUNC_REVERSE_SUBTRACT};It[Au]=n.MIN,It[wu]=n.MAX;const $e={[Ru]:n.ZERO,[Cu]:n.ONE,[Pu]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[Fu]:n.SRC_ALPHA_SATURATE,[Uu]:n.DST_COLOR,[Lu]:n.DST_ALPHA,[Iu]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[Nu]:n.ONE_MINUS_DST_COLOR,[Du]:n.ONE_MINUS_DST_ALPHA,[Ou]:n.CONSTANT_COLOR,[Bu]:n.ONE_MINUS_CONSTANT_COLOR,[ku]:n.CONSTANT_ALPHA,[zu]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ce,J,de,me,te,we,Me,mt,at){if(I===Kn){m===!0&&(xe(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),I!==bu){if(I!==f||at!==C){if((A!==na||M!==na)&&(n.blendEquation(n.FUNC_ADD),A=na,M=na),at)switch(I){case Ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",I);break}else switch(I){case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bl:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",I);break}R=null,S=null,T=null,w=null,v.set(0,0,0),E=0,f=I,C=at}return}me=me||ce,te=te||J,we=we||de,(ce!==A||me!==M)&&(n.blendEquationSeparate(It[ce],It[me]),A=ce,M=me),(J!==R||de!==S||te!==T||we!==w)&&(n.blendFuncSeparate($e[J],$e[de],$e[te],$e[we]),R=J,S=de,T=te,w=we),(Me.equals(v)===!1||mt!==E)&&(n.blendColor(Me.r,Me.g,Me.b,mt),v.copy(Me),E=mt),f=I,C=!1}function pt(I,ce){I.side===Xn?xe(n.CULL_FACE):j(n.CULL_FACE);let J=I.side===nn;ce&&(J=!J),Ke(J),I.blending===Ua&&I.transparent===!1?tt(Kn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function Mt(I){I!==yu?(j(n.CULL_FACE),I!==B&&(I===Fl?n.cullFace(n.BACK):I===Su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),B=I}function Ft(I){I!==V&&($&&n.lineWidth(I),V=I)}function tn(I,ce,J){I?(j(n.POLYGON_OFFSET_FILL),(U!==ce||G!==J)&&(U=ce,G=J,s.getReversed()&&(ce=-ce),n.polygonOffset(ce,J))):xe(n.POLYGON_OFFSET_FILL)}function Et(I){I?j(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Rt(I){I===void 0&&(I=n.TEXTURE0+Z-1),ee!==I&&(n.activeTexture(I),ee=I)}function L(I,ce,J){J===void 0&&(ee===null?J=n.TEXTURE0+Z-1:J=ee);let de=ne[J];de===void 0&&(de={type:void 0,texture:void 0},ne[J]=de),(de.type!==I||de.texture!==ce)&&(ee!==J&&(n.activeTexture(J),ee=J),n.bindTexture(I,ce||Y[I]),de.type=I,de.texture=ce)}function zt(){const I=ne[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function g(){try{n.texSubImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function F(){try{n.texSubImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){et("WebGLState:",I)}}function se(){try{n.texStorage3D(...arguments)}catch(I){et("WebGLState:",I)}}function K(){try{n.texImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function oe(I){return p[I]!==void 0?p[I]:n.getParameter(I)}function Ee(I,ce){p[I]!==ce&&(n.pixelStorei(I,ce),p[I]=ce)}function ue(I){ft.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function le(I){Je.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Je.copy(I))}function Te(I,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let de=J.get(I);de===void 0&&(de=n.getUniformBlockIndex(ce,I.name),J.set(I,de))}function Ce(I,ce){const de=c.get(ce).get(I);l.get(ce)!==de&&(n.uniformBlockBinding(ce,de,I.__bindingPointIndex),l.set(ce,de))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},p={},ee=null,ne={},u={},h=new WeakMap,_=[],y=null,m=!1,f=null,A=null,R=null,S=null,M=null,T=null,w=null,v=new He(0,0,0),E=0,C=!1,D=null,B=null,V=null,U=null,G=null,ft.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:j,disable:xe,bindFramebuffer:De,drawBuffers:_e,useProgram:Ve,setBlending:tt,setMaterial:pt,setFlipSided:Ke,setCullFace:Mt,setLineWidth:Ft,setPolygonOffset:tn,setScissorTest:Et,activeTexture:Rt,bindTexture:L,unbindTexture:zt,compressedTexImage2D:st,compressedTexImage3D:b,texImage2D:K,texImage3D:Q,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:re,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:ue,viewport:le,reset:Oe}}function D0(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,g){return _?new OffscreenCanvas(b,g):Hr("canvas")}function m(b,g,F){let H=1;const X=st(b);if((X.width>F||X.height>F)&&(H=F/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(H*X.width),se=Math.floor(H*X.height);u===void 0&&(u=y(re,se));const K=g?y(re,se):u;return K.width=re,K.height=se,K.getContext("2d").drawImage(b,0,0,re,se),Ie("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+se+")."),K}else return"data"in b&&Ie("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function f(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,g,F,H,X,re=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se;H&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8),F===n.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),F===n.SHORT&&se&&(K=se.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),g===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8),F===n.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),F===n.SHORT&&se&&(K=se.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),F===n.SHORT&&se&&(K=se.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const Q=re?Gr:Ze.getTransfer(X);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=Q===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),F===n.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(b,g){let F;return b?g===null||g===Un||g===ka?F=n.DEPTH24_STENCIL8:g===Pn?F=n.DEPTH32F_STENCIL8:g===Ba&&(F=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Un||g===ka?F=n.DEPTH_COMPONENT24:g===Pn?F=n.DEPTH_COMPONENT32F:g===Ba&&(F=n.DEPTH_COMPONENT16),F}function T(b,g){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==Wt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function w(b){const g=b.target;g.removeEventListener("dispose",w),E(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function v(b){const g=b.target;g.removeEventListener("dispose",v),D(g)}function E(b){const g=i.get(b);if(g.__webglInit===void 0)return;const F=b.source,H=h.get(F);if(H){const X=H[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(b),Object.keys(H).length===0&&h.delete(F)}i.remove(b)}function C(b){const g=i.get(b);n.deleteTexture(g.__webglTexture);const F=b.source,H=h.get(F);delete H[g.__cacheKey],s.memory.textures--}function D(b){const g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let X=0;X<g.__webglFramebuffer[H].length;X++)n.deleteFramebuffer(g.__webglFramebuffer[H][X]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=b.textures;for(let H=0,X=F.length;H<X;H++){const re=i.get(F[H]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),s.memory.textures--),i.remove(F[H])}i.remove(b)}let B=0;function V(){B=0}function U(){return B}function G(b){B=b}function Z(){const b=B;return b>=a.maxTextures&&Ie("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function $(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ie(b,g){const F=i.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const H=b.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,b,g);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function q(b,g){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){xe(F,b,g);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function ee(b,g){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){xe(F,b,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function ne(b,g){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){De(F,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const Re={[no]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},Ae={[kt]:n.NEAREST,[Vu]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[os]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},ft={[qu]:n.NEVER,[Qu]:n.ALWAYS,[Yu]:n.LESS,[el]:n.LEQUAL,[Ku]:n.EQUAL,[tl]:n.GEQUAL,[Zu]:n.GREATER,[Ju]:n.NOTEQUAL};function Je(b,g){if(g.type===Pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Wt||g.magFilter===os||g.magFilter===tr||g.magFilter===Ti||g.minFilter===Wt||g.minFilter===os||g.minFilter===tr||g.minFilter===Ti)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Re[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Re[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Re[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ae[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ae[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ft[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kt||g.minFilter!==tr&&g.minFilter!==Ti||g.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(b,g){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",w));const H=g.source;let X=h.get(H);X===void 0&&(X={},h.set(H,X));const re=$(g);if(re!==b.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),X[re].usedTimes++;const se=X[b.__cacheKey];se!==void 0&&(X[b.__cacheKey].usedTimes--,se.usedTimes===0&&C(g)),b.__cacheKey=re,b.__webglTexture=X[re].texture}return F}function Y(b,g,F){return Math.floor(Math.floor(b/F)/g)}function j(b,g,F,H){const re=b.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,H,g.data);else{re.sort((Ee,ue)=>Ee.start-ue.start);let se=0;for(let Ee=1;Ee<re.length;Ee++){const ue=re[se],le=re[Ee],Te=ue.start+ue.count,Ce=Y(le.start,g.width,4),Oe=Y(ue.start,g.width,4);le.start<=Te+1&&Ce===Oe&&Y(le.start+le.count-1,g.width,4)===Ce?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++se,re[se]=le)}re.length=se+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,ue=re.length;Ee<ue;Ee++){const le=re[Ee],Te=Math.floor(le.start/4),Ce=Math.ceil(le.count/4),Oe=Te%g.width,I=Math.floor(Te/g.width),ce=Ce,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Oe,I,ce,J,F,H,g.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function xe(b,g,F){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const X=nt(b,g),re=g.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+F);const se=i.get(re);if(re.version!==se.__version||X===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),de=g.colorSpace===ci?null:Ze.getPrimaries(g.colorSpace),me=g.colorSpace===ci||J===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,a.maxTextureSize);Q=zt(g,Q);const oe=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let ue=S(g.internalFormat,oe,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Je(H,g);let le;const Te=g.mipmaps,Ce=g.isVideoTexture!==!0,Oe=se.__version===void 0||X===!0,I=re.dataReady,ce=T(g,Q);if(g.isDepthTexture)ue=M(g.format===Ai,g.type),Oe&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Ee,null));else if(g.isDataTexture)if(Te.length>0){Ce&&Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Te[0].width,Te[0].height);for(let J=0,de=Te.length;J<de;J++)le=Te[J],Ce?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,oe,Ee,le.data);g.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height),I&&j(g,Q,oe,Ee)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,oe,Ee,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Te[0].width,Te[0].height,Q.depth);for(let J=0,de=Te.length;J<de;J++)if(le=Te[J],g.format!==vn)if(oe!==null)if(Ce){if(I)if(g.layerUpdates.size>0){const me=vc(le.width,le.height,g.format,g.type);for(const te of g.layerUpdates){const we=le.data.subarray(te*me/le.data.BYTES_PER_ELEMENT,(te+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,te,le.width,le.height,1,oe,we)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,oe,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,Q.depth,oe,Ee,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,le.width,le.height,Q.depth,0,oe,Ee,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ce&&Oe&&t.texStorage2D(n.TEXTURE_2D,ce,ue,Te[0].width,Te[0].height);for(let J=0,de=Te.length;J<de;J++)le=Te[J],g.format!==vn?oe!==null?Ce?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,oe,Ee,le.data):t.texImage2D(n.TEXTURE_2D,J,ue,le.width,le.height,0,oe,Ee,le.data)}else if(g.isDataArrayTexture)if(Ce){if(Oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ue,Q.width,Q.height,Q.depth),I)if(g.layerUpdates.size>0){const J=vc(Q.width,Q.height,g.format,g.type);for(const de of g.layerUpdates){const me=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,oe,Ee,me)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(g.isData3DTexture)Ce?(Oe&&t.texStorage3D(n.TEXTURE_3D,ce,ue,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Ee,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,oe,Ee,Q.data);else if(g.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(n.TEXTURE_2D,ce,ue,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let me=0;me<ce;me++)t.texImage2D(n.TEXTURE_2D,me,ue,J,de,0,oe,Ee,null),J>>=1,de>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),p.add(g),J.onpaint=de=>{const me=de.changedElements;for(const te of p)me.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const me=n.RGBA,te=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,te,we,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&Oe){const J=st(Te[0]);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}for(let J=0,de=Te.length;J<de;J++)le=Te[J],Ce?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe,Ee,le):t.texImage2D(n.TEXTURE_2D,J,ue,oe,Ee,le);g.generateMipmaps=!1}else if(Ce){if(Oe){const J=st(Q);t.texStorage2D(n.TEXTURE_2D,ce,ue,J.width,J.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ee,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,oe,Ee,Q);f(g)&&A(H),se.__version=re.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function De(b,g,F){if(g.image.length!==6)return;const H=nt(b,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const re=i.get(X);if(X.version!==re.__version||H===!0){t.activeTexture(n.TEXTURE0+F);const se=Ze.getPrimaries(Ze.workingColorSpace),K=g.colorSpace===ci?null:Ze.getPrimaries(g.colorSpace),Q=g.colorSpace===ci||se===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!oe&&!Ee?ue[te]=m(g.image[te],!0,a.maxCubemapSize):ue[te]=Ee?g.image[te].image:g.image[te],ue[te]=zt(g,ue[te]);const le=ue[0],Te=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type),Oe=S(g.internalFormat,Te,Ce,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ce=re.__version===void 0||H===!0,J=X.dataReady;let de=T(g,le);Je(n.TEXTURE_CUBE_MAP,g);let me;if(oe){I&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,le.width,le.height);for(let te=0;te<6;te++){me=ue[te].mipmaps;for(let we=0;we<me.length;we++){const Me=me[we];g.format!==vn?Te!==null?I?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Me.width,Me.height,0,Me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Me.width,Me.height,Te,Ce,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Oe,Me.width,Me.height,0,Te,Ce,Me.data)}}}else{if(me=g.mipmaps,I&&ce){me.length>0&&de++;const te=st(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Te,Ce,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,ue[te].width,ue[te].height,0,Te,Ce,ue[te].data);for(let we=0;we<me.length;we++){const mt=me[we].image[te].image;I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,mt.width,mt.height,Te,Ce,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,mt.width,mt.height,0,Te,Ce,mt.data)}}else{I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,Ce,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Te,Ce,ue[te]);for(let we=0;we<me.length;we++){const Me=me[we];I?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Te,Ce,Me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Oe,Te,Ce,Me.image[te])}}}f(g)&&A(n.TEXTURE_CUBE_MAP),re.__version=X.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function _e(b,g,F,H,X,re){const se=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Q=S(F.internalFormat,se,K,F.normalized,F.colorSpace),oe=i.get(g),Ee=i.get(F);if(Ee.__renderTarget=g,!oe.__hasExternalTextures){const ue=Math.max(1,g.width>>re),le=Math.max(1,g.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,Q,ue,le,g.depth,0,se,K,null):t.texImage2D(X,re,Q,ue,le,0,se,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,X,Ee.__webglTexture,0,Et(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,X,Ee.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(b,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){const H=g.depthTexture,X=H&&H.isDepthTexture?H.type:null,re=M(g.stencilBuffer,X),se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Rt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(g),re,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,b)}else{const H=g.textures;for(let X=0;X<H.length;X++){const re=H[X],se=r.convert(re.format,re.colorSpace),K=r.convert(re.type),Q=S(re.internalFormat,se,K,re.normalized,re.colorSpace);Rt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(g),Q,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(b,g,F){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g.depthTexture);const oe=r.convert(g.depthTexture.format),Ee=r.convert(g.depthTexture.type);let ue;g.depthTexture.format===Jn?ue=n.DEPTH_COMPONENT24:g.depthTexture.format===Ai&&(ue=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,g.width,g.height,0,oe,Ee,null)}}else ie(g.depthTexture,0);const re=X.__webglTexture,se=Et(g),K=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Q=g.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Jn)Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,re,0);else if(g.depthTexture.format===Ai)Rt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(b){const g=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=H}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)It(g.__webglFramebuffer[H],b,H);else{const H=b.texture.mipmaps;H&&H.length>0?It(g.__webglFramebuffer[0],b,0):It(g.__webglFramebuffer,b,0)}else if(F){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[H],b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}else{const H=b.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(b,g,F){const H=i.get(b);g!==void 0&&_e(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&$e(b)}function pt(b){const g=b.texture,F=i.get(b),H=i.get(g);b.addEventListener("dispose",v);const X=b.textures,re=b.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,s.memory.textures++),re){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=n.createFramebuffer()}else F.__webglFramebuffer[K]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[K]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(se)for(let K=0,Q=X.length;K<Q;K++){const oe=i.get(X[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),s.memory.textures++)}if(b.samples>0&&Rt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){const Q=X[K];F.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const oe=r.convert(Q.format,Q.colorSpace),Ee=r.convert(Q.type),ue=S(Q.internalFormat,oe,Ee,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),le=Et(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,F.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Je(n.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)_e(F.__webglFramebuffer[K][Q],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else _e(F.__webglFramebuffer[K],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,Q=X.length;K<Q;K++){const oe=X[K],Ee=i.get(oe);let ue=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),Je(ue,oe),_e(F.__webglFramebuffer,b,oe,n.COLOR_ATTACHMENT0+K,ue,0),f(oe)&&A(ue)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),Je(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)_e(F.__webglFramebuffer[Q],b,g,n.COLOR_ATTACHMENT0,K,Q);else _e(F.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,K,0);f(g)&&A(K),t.unbindTexture()}b.depthBuffer&&$e(b)}function Ke(b){const g=b.textures;for(let F=0,H=g.length;F<H;F++){const X=g[F];if(f(X)){const re=R(b),se=i.get(X).__webglTexture;t.bindTexture(re,se),A(re),t.unbindTexture()}}}const Mt=[],Ft=[];function tn(b){if(b.samples>0){if(Rt(b)===!1){const g=b.textures,F=b.width,H=b.height;let X=n.COLOR_BUFFER_BIT;const re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(b),K=g.length>1;if(K)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,F,H,0,0,F,H,X,n.NEAREST),l===!0&&(Mt.length=0,Ft.length=0,Mt.push(n.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Mt.push(re),Ft.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);const Ee=i.get(g[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Et(b){return Math.min(a.maxSamples,b.samples)}function Rt(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(b){const g=s.render.frame;d.get(b)!==g&&(d.set(b,g),b.update())}function zt(b,g){const F=b.colorSpace,H=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==zr&&F!==ci&&(Ze.getTransfer(F)===ot?(H!==vn||X!==on)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",F)),g}function st(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=tt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U0(n,e){function t(i,a=ci){let r;const s=Ze.getTransfer(a);if(i===on)return n.UNSIGNED_BYTE;if(i===Ko)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===Ba)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===Un)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===rd)return n.ALPHA;if(i===sd)return n.RGB;if(i===vn)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===Jo)return n.RED_INTEGER;if(i===Pi)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===jo)return n.RGBA_INTEGER;if(i===Dr||i===Ur||i===Nr||i===Fr)if(s===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===ro||i===so||i===oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===co||i===uo||i===ho||i===fo||i===Br||i===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lo||i===co)return s===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ho)return r.COMPRESSED_R11_EAC;if(i===fo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return r.COMPRESSED_RG11_EAC;if(i===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===So||i===Mo||i===bo||i===Eo||i===To||i===Ao||i===wo||i===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_o)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===So)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===To)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ao)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return s===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Po||i===Io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Co)return s===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Do||i===kr||i===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fn({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends Ui{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,_=null;const y=typeof XRWebGLBinding<"u",m=new O0,f={},A=t.getContextAttributes();let R=null,S=null;const M=[],T=[],w=new Fe;let v=null,E=null;const C=new sn;C.viewport=new At;const D=new sn;D.viewport=new At;const B=[C,D],V=new Wh;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=M[Y];return j===void 0&&(j=new gs,M[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=M[Y];return j===void 0&&(j=new gs,M[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=M[Y];return j===void 0&&(j=new gs,M[Y]=j),j.getHandSpace()};function Z(Y){const j=T.indexOf(Y.inputSource);if(j===-1)return;const xe=M[j];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||s),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<M.length;Y++){const j=T[Y];j!==null&&(T[Y]=null,M[Y].disconnect(j))}U=null,G=null,m.reset();for(const Y in f)delete f[Y];if(e.setRenderTarget(R),h=null,u=null,p=null,a=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),E!==null){const Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",$),a.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,_e=null;A.depth&&(_e=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=A.stencil?Ai:Jn,De=A.stencil?ka:Un);const Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ve),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new xn(u.textureWidth,u.textureHeight,{format:vn,type:on,depthTexture:new Ga(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new xn(h.framebufferWidth,h.framebufferHeight,{format:vn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),nt.setContext(a),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let j=0;j<Y.removed.length;j++){const xe=Y.removed[j],De=T.indexOf(xe);De>=0&&(T[De]=null,M[De].disconnect(xe))}for(let j=0;j<Y.added.length;j++){const xe=Y.added[j];let De=T.indexOf(xe);if(De===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=T.length){T.push(xe),De=Ve;break}else if(T[Ve]===null){T[Ve]=xe,De=Ve;break}if(De===-1)break}const _e=M[De];_e&&_e.connect(xe)}}const q=new N,ee=new N;function ne(Y,j,xe){q.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const De=q.distanceTo(ee),_e=j.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,It=_e[14]/(_e[10]-1),$e=_e[14]/(_e[10]+1),tt=(_e[9]+1)/_e[5],pt=(_e[9]-1)/_e[5],Ke=(_e[8]-1)/_e[0],Mt=(Ve[8]+1)/Ve[0],Ft=It*Ke,tn=It*Mt,Et=De/(-Ke+Mt),Rt=Et*-Ke;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=It+Et,zt=$e+Et,st=Ft-Rt,b=tn+(De-Rt),g=tt*$e/zt*L,F=pt*$e/zt*L;Y.projectionMatrix.makePerspective(st,b,g,F,L,zt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Re(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let j=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),V.near=D.near=C.near=j,V.far=D.far=C.far=xe,(U!==V.near||G!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,G=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const De=Y.parent,_e=V.cameras;Re(V,De);for(let Ve=0;Ve<_e.length;Ve++)Re(_e[Ve],De);_e.length===2?ne(V,C,D):V.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ae(Y,V,De)};function Ae(Y,j,xe){xe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Y){return f[Y]};let ft=null;function Je(Y,j){if(d=j.getViewerPose(c||s),_=j,d!==null){const xe=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let De=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let $e=0;$e<xe.length;$e++){const tt=xe[$e];let pt=null;if(h!==null)pt=h.getViewport(tt);else{const Mt=p.getViewSubImage(u,tt);pt=Mt.viewport,$e===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(S))}let Ke=B[$e];Ke===void 0&&(Ke=new sn,Ke.layers.enable($e),Ke.viewport=new At,B[$e]=Ke),Ke.matrix.fromArray(tt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(tt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(pt.x,pt.y,pt.width,pt.height),$e===0&&(V.matrix.copy(Ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(Ke)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const $e=p.getDepthInformation(xe[0]);$e&&$e.isValid&&$e.texture&&m.init($e,a.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let $e=0;$e<xe.length;$e++){const tt=xe[$e].camera;if(tt){let pt=f[tt];pt||(pt=new Sd,f[tt]=pt);const Ke=p.getCameraImage(tt);pt.sourceTexture=Ke}}}}for(let xe=0;xe<M.length;xe++){const De=T[xe],_e=M[xe];De!==null&&_e!==void 0&&_e.update(De,j,c||s)}ft&&ft(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const nt=new Td;nt.setAnimationLoop(Je),this.setAnimationLoop=function(Y){ft=Y},this.dispose=function(){}}}const k0=new _t,Ld=new Ue;Ld.set(-1,0,0,0,1,0,0,0,1);function z0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Md(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,A,R,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),R=A.envMap,S=A.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ld),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function G0(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;i.uniformBlockBinding(S,T)}function c(S,M){let T=a[S.id];T===void 0&&(m(S),T=d(S),a[S.id]=T,S.addEventListener("dispose",A));const w=M.program;i.updateUBOMapping(S,w);const v=e.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function d(S){const M=p();S.__bindingPointIndex=M;const T=n.createBuffer(),w=S.__size,v=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function p(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=a[S.id],T=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let v=0,E=T.length;v<E;v++){const C=T[v];if(Array.isArray(C))for(let D=0,B=C.length;D<B;D++)h(C[D],v,D,w);else h(C,v,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,M,T,w){if(y(S,M,T,w)===!0){const v=S.__offset,E=S.value;if(Array.isArray(E)){let C=0;for(let D=0;D<E.length;D++){const B=E[D],V=f(B);_(B,S.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,S.__data)}}function _(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function y(S,M,T,w){const v=S.value,E=M+"_"+T;if(w[E]===void 0)return typeof v=="number"||typeof v=="boolean"?w[E]=v:ArrayBuffer.isView(v)?w[E]=v.slice():w[E]=v.clone(),!0;{const C=w[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(S){const M=S.uniforms;let T=0;const w=16;for(let E=0,C=M.length;E<C;E++){const D=Array.isArray(M[E])?M[E]:[M[E]];for(let B=0,V=D.length;B<V;B++){const U=D[B],G=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,$=G.length;Z<$;Z++){const ie=G[Z],q=f(ie),ee=T%w,ne=ee%q.boundary,Re=ee+ne;T+=ne,Re!==0&&w-Re<q.storage&&(T+=w-Re),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=q.storage}}}const v=T%w;return v>0&&(T+=w-v),S.__size=T,S.__cache={},this}function f(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),M}function A(S){const M=S.target;M.removeEventListener("dispose",A);const T=s.indexOf(M.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function R(){for(const S in a)n.deleteBuffer(a[S]);s=[],a={},r={}}return{bind:l,update:c,dispose:R}}const H0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function V0(){return Tn===null&&(Tn=new wh(H0,16,16,Pi,Nn),Tn.name="DFG_LUT",Tn.minFilter=Wt,Tn.magFilter=Wt,Tn.wrapS=Yn,Tn.wrapT=Yn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class W0{constructor(e={}){const{canvas:t=eh(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=on}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const y=h,m=new Set([jo,Qo,Jo]),f=new Set([on,Un,Ba,ka,Ko,Zo]),A=new Uint32Array(4),R=new Int32Array(4),S=new N;let M=null,T=null;const w=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,B=null,V=null,U=null,G=null;this._outputColorSpace=Jt;let Z=0,$=0,ie=null,q=-1,ee=null;const ne=new At,Re=new At;let Ae=null;const ft=new He(0);let Je=0,nt=t.width,Y=t.height,j=1,xe=null,De=null;const _e=new At(0,0,nt,Y),Ve=new At(0,0,nt,Y);let It=!1;const $e=new rl;let tt=!1,pt=!1;const Ke=new _t,Mt=new N,Ft=new At,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Rt(){return ie===null?j:1}let L=i;function zt(x,P){return t.getContext(x,P)}let st,b,g,F,H,X,re,se,K,Q,oe,Ee,ue,le,Te,Ce,Oe,I,ce,J,de,me,te;try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",fn,!1),L===null){const P="webgl2";if(L=zt(P,x),L===null)throw zt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(x){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),et("WebGLRenderer: "+x.message),x}function we(){st=new Vm(L),st.init(),de=new U0(L,st),b=new Dm(L,st,e,de),g=new L0(L,st),b.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=L.createFramebuffer(),U=L.createFramebuffer(),G=L.createFramebuffer(),F=new Xm(L),H=new v0,X=new D0(L,st,g,H,b,de,F),re=new Hm(C),se=new qh(L),me=new Im(L,se),K=new Wm(L,se,F,me),Q=new Ym(L,K,se,me,F),I=new qm(L,b,X),Te=new Um(H),oe=new _0(C,re,st,b,me,Te),Ee=new z0(C,H),ue=new y0,le=new A0(st),Oe=new Pm(C,re,g,Q,_,l),Ce=new I0(C,Q,b),te=new G0(L,F,b,g),ce=new Lm(L,st,F),J=new $m(L,st,F),F.programs=oe.programs,C.capabilities=b,C.extensions=st,C.properties=H,C.renderLists=ue,C.shadowMap=Ce,C.state=g,C.info=F}y!==on&&(E=new Zm(y,t.width,t.height,o,a,r));const Me=new B0(C,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(nt,Y,!1))},this.getSize=function(x){return x.set(nt,Y)},this.setSize=function(x,P,W=!0){if(Me.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=x,Y=P,t.width=Math.floor(x*j),t.height=Math.floor(P*j),W===!0&&(t.style.width=x+"px",t.style.height=P+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(nt*j,Y*j).floor()},this.setDrawingBufferSize=function(x,P,W){nt=x,Y=P,j=W,t.width=Math.floor(x*W),t.height=Math.floor(P*W),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(y===on){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,P,W,k){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,P,W,k),g.viewport(ne.copy(_e).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,P,W,k){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,P,W,k),g.scissor(Re.copy(Ve).multiplyScalar(j).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(x){g.setScissorTest(It=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,W=!0){let k=0;if(x){let z=!1;if(ie!==null){const pe=ie.texture.format;z=m.has(pe)}if(z){const pe=ie.texture.type,ve=f.has(pe),fe=Oe.getClearColor(),ye=Oe.getClearAlpha(),be=fe.r,ze=fe.g,Xe=fe.b;ve?(A[0]=be,A[1]=ze,A[2]=Xe,A[3]=ye,L.clearBufferuiv(L.COLOR,0,A)):(R[0]=be,R[1]=ze,R[2]=Xe,R[3]=ye,L.clearBufferiv(L.COLOR,0,R))}else k|=L.COLOR_BUFFER_BIT}P&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Oe.dispose(),ue.dispose(),le.dispose(),H.dispose(),re.dispose(),Q.dispose(),me.dispose(),te.dispose(),oe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wl),Me.removeEventListener("sessionend",Rl),vi.stop()};function mt(x){x.preventDefault(),Vr("WebGLRenderer: Context Lost."),D=!0}function at(){Vr("WebGLRenderer: Context Restored."),D=!1;const x=F.autoReset,P=Ce.enabled,W=Ce.autoUpdate,k=Ce.needsUpdate,z=Ce.type;we(),F.autoReset=x,Ce.enabled=P,Ce.autoUpdate=W,Ce.needsUpdate=k,Ce.type=z}function fn(x){et("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Mn(x){const P=x.target;P.removeEventListener("dispose",Mn),du(P)}function du(x){uu(x),H.remove(x)}function uu(x){const P=H.get(x).programs;P!==void 0&&(P.forEach(function(W){oe.releaseProgram(W)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,W,k,z,pe){P===null&&(P=tn);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=pu(x,P,W,k,z);g.setMaterial(k,ve);let ye=W.index,be=1;if(k.wireframe===!0){if(ye=K.getWireframeAttribute(W),ye===void 0)return;be=2}const ze=W.drawRange,Xe=W.attributes.position;let Se=ze.start*be,rt=(ze.start+ze.count)*be;pe!==null&&(Se=Math.max(Se,pe.start*be),rt=Math.min(rt,(pe.start+pe.count)*be)),ye!==null?(Se=Math.max(Se,0),rt=Math.min(rt,ye.count)):Xe!=null&&(Se=Math.max(Se,0),rt=Math.min(rt,Xe.count));const Ct=rt-Se;if(Ct<0||Ct===1/0)return;me.setup(z,k,fe,W,ye);let xt,ut=ce;if(ye!==null&&(xt=se.get(ye),ut=J,ut.setIndex(xt)),z.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*Rt()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(z.isLine){let Gt=k.linewidth;Gt===void 0&&(Gt=1),g.setLineWidth(Gt*Rt()),z.isLineSegments?ut.setMode(L.LINES):z.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else z.isPoints?ut.setMode(L.POINTS):z.isSprite&&ut.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Gt=z._multiDrawStarts,ge=z._multiDrawCounts,Yt=z._multiDrawCount,Qe=ye?se.get(ye).bytesPerElement:1,ln=H.get(k).currentProgram.getUniforms();for(let bn=0;bn<Yt;bn++)ln.setValue(L,"_gl_DrawID",bn),ut.render(Gt[bn]/Qe,ge[bn])}else if(z.isInstancedMesh)ut.renderInstances(Se,Ct,z.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Gt);ut.renderInstances(Se,Ct,ge)}else ut.render(Se,Ct)};function Al(x,P,W,k){B!==null&&x.isNodeMaterial&&B.setObject(k,x),tt===!0&&Te.setState(x,W,!1),x.transparent===!0&&x.side===Xn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,er(x,P,k),x.side=Ri,x.needsUpdate=!0,er(x,P,k),x.side=Xn):er(x,P,k)}this.compile=function(x,P,W=null){W===null&&(W=x),B!==null&&B.renderStart(x,P,W),T=le.get(W),T.init(P),v.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==W&&x.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),pt=this.localClippingEnabled,tt=Te.init(this.clippingPlanes,pt),tt===!0&&Te.setGlobalState(this.clippingPlanes,P),B!==null&&Ce.render(T.state.shadowsArray,W,P);const k=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];Al(fe,W,P,z),k.add(fe)}else Al(pe,W,P,z),k.add(pe)}),T=v.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(x,P,W=null){const k=this.compile(x,P,W);return new Promise(z=>{function pe(){if(k.forEach(function(ve){const ye=H.get(ve).currentProgram;(ye===void 0||ye.isReady())&&k.delete(ve)}),k.size===0){z(x);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let is=null;function hu(x){is&&is(x)}function wl(){vi.stop()}function Rl(){vi.start()}const vi=new Td;vi.setAnimationLoop(hu),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(x){is=x,Me.setAnimationLoop(x),x===null?vi.stop():vi.start()},Me.addEventListener("sessionstart",wl),Me.addEventListener("sessionend",Rl),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(x,P);const W=Me.enabled===!0&&Me.isPresenting===!0,k=E!==null&&(ie===null||W)&&E.begin(C,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(P),P=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,P,ie),T=le.get(x,v.length),T.init(P),T.state.textureUnits=X.getTextureUnits(),v.push(T),Ke.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$e.setFromProjectionMatrix(Ke,In,P.reversedDepth),pt=this.localClippingEnabled,tt=Te.init(this.clippingPlanes,pt),M=ue.get(x,w.length),M.init(),w.push(M),Me.enabled===!0&&Me.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&as(ve,P,-1/0,C.sortObjects)}as(x,P,0,C.sortObjects),M.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(xe,De),Et=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Et&&Oe.addToRenderList(M,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Te.beginShadows();const z=T.state.shadowsArray;if(Ce.render(z,x,P),tt===!0&&Te.endShadows(),(k&&E.hasRenderPass())===!1){const ve=M.opaque,fe=M.transmissive;if(T.setupLights(),P.isArrayCamera){const ye=P.cameras;if(fe.length>0)for(let be=0,ze=ye.length;be<ze;be++){const Xe=ye[be];Pl(ve,fe,x,Xe)}Et&&Oe.render(x);for(let be=0,ze=ye.length;be<ze;be++){const Xe=ye[be];Cl(M,x,Xe,Xe.viewport)}}else fe.length>0&&Pl(ve,fe,x,P),Et&&Oe.render(x),Cl(M,x,P)}ie!==null&&$===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),k&&E.end(C),x.isScene===!0&&x.onAfterRender(C,x,P),me.resetDefaultState(),q=-1,ee=null,v.pop(),v.length>0?(T=v[v.length-1],X.setTextureUnits(T.state.textureUnits),tt===!0&&Te.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,B!==null&&B.renderEnd()};function as(x,P,W,k){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum($e)){k&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ke);const ve=Q.update(x),fe=x.material;fe.visible&&M.push(x,ve,fe,W,Ft.z,null,P)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum($e))){const ve=Q.update(x),fe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ft.copy(ve.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(Ke)),Array.isArray(fe)){const ye=ve.groups;for(let be=0,ze=ye.length;be<ze;be++){const Xe=ye[be],Se=fe[Xe.materialIndex];Se&&Se.visible&&M.push(x,ve,Se,W,Ft.z,Xe,P)}}else fe.visible&&M.push(x,ve,fe,W,Ft.z,null,P)}}const pe=x.children;for(let ve=0,fe=pe.length;ve<fe;ve++)as(pe[ve],P,W,k)}function Cl(x,P,W,k){const{opaque:z,transmissive:pe,transparent:ve}=x;T.setupLightsView(W),tt===!0&&Te.setGlobalState(C.clippingPlanes,W),k&&g.viewport(ne.copy(k)),z.length>0&&ja(z,P,W),pe.length>0&&ja(pe,P,W),ve.length>0&&ja(ve,P,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Pl(x,P,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Se=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new xn(1,1,{generateMipmaps:!0,type:Se?Nn:on,minFilter:Ti,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const pe=T.state.transmissionRenderTarget[k.id],ve=k.viewport||ne;pe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),ye=C.getActiveCubeFace(),be=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(ft),Je=C.getClearAlpha(),Je<1&&C.setClearColor(16777215,.5),C.clear(),Et&&Oe.render(W);const ze=C.toneMapping;C.toneMapping=Ln;const Xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),tt===!0&&Te.setGlobalState(C.clippingPlanes,k),ja(x,W,k),X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let rt=0,Ct=P.length;rt<Ct;rt++){const xt=P[rt],{object:ut,geometry:Gt,material:ge,group:Yt}=xt;if(ge.side===Xn&&ut.layers.test(k.layers)){const Qe=ge.side;ge.side=nn,ge.needsUpdate=!0,Il(ut,W,k,Gt,ge,Yt),ge.side=Qe,ge.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(pe),X.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,ye,be),C.setClearColor(ft,Je),Xe!==void 0&&(k.viewport=Xe),C.toneMapping=ze}function ja(x,P,W){const k=P.isScene===!0?P.overrideMaterial:null;for(let z=0,pe=x.length;z<pe;z++){const ve=x[z],{object:fe,geometry:ye,group:be}=ve;let ze=ve.material;ze.allowOverride===!0&&k!==null&&(ze=k),fe.layers.test(W.layers)&&Il(fe,P,W,ye,ze,be)}}function Il(x,P,W,k,z,pe){B!==null&&z.isNodeMaterial&&B.setObject(x,z),x.onBeforeRender(C,P,W,k,z,pe),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,P,W,k,x,pe),z.transparent===!0&&z.side===Xn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,C.renderBufferDirect(W,P,k,z,x,pe),z.side=Ri,z.needsUpdate=!0,C.renderBufferDirect(W,P,k,z,x,pe),z.side=Xn):C.renderBufferDirect(W,P,k,z,x,pe),x.onAfterRender(C,P,W,k,z,pe)}function er(x,P,W){P.isScene!==!0&&(P=tn);const k=H.get(x),z=T.state.lights,pe=T.state.shadowsArray,ve=z.state.version,fe=oe.getParameters(x,z.state,pe,P,W,T.state.lightProbeGridArray),ye=oe.getProgramCacheKey(fe);let be=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;const ze=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=re.get(x.envMap||k.environment,ze),k.envMapRotation=k.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",Mn),be=new Map,k.programs=be);let Xe=be.get(ye);if(Xe!==void 0){if(k.currentProgram===Xe&&k.lightsStateVersion===ve)return Dl(x,fe),Xe}else fe.uniforms=oe.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,W,fe),x.onBeforeCompile(fe,C),Xe=oe.acquireProgram(fe,ye),be.set(ye,Xe),k.uniforms=fe.uniforms;const Se=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Te.uniform),Dl(x,fe),k.needsLights=gu(x),k.lightsStateVersion=ve,k.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Xe,k.uniformsList=null,Xe}function Ll(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Or.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Dl(x,P){const W=H.get(x);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function fu(x,P){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(P.matrixWorld);for(let W=0,k=x.length;W<k;W++){const z=x[W];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function pu(x,P,W,k,z){P.isScene!==!0&&(P=tn),X.resetTextureUnits();const pe=P.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,fe=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,be=re.get(k.envMap||ve,ye),ze=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let xt=Ln;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xt=C.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=ut!==void 0?ut.length:0,ge=H.get(k),Yt=T.state.lights;if(tt===!0&&(pt===!0||x!==ee)){const gt=x===ee&&k.id===q;Te.setState(k,x,gt)}let Qe=!1;k.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Yt.state.version||ge.outputColorSpace!==fe||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==be||k.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Te.numPlanes||ge.numIntersection!==Te.numIntersection)||ge.vertexAlphas!==ze||ge.vertexTangents!==Xe||ge.morphTargets!==Se||ge.morphNormals!==rt||ge.morphColors!==Ct||ge.toneMapping!==xt||ge.morphTargetsCount!==Gt||!!ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=k.version);let ln=ge.currentProgram;Qe===!0&&(ln=er(k,P,z),B&&k.isNodeMaterial&&B.onUpdateProgram(k,ln,ge));let bn=!1,jn=!1,Fi=!1;const lt=ln.getUniforms(),wt=ge.uniforms;if(g.useProgram(ln.program)&&(bn=!0,jn=!0,Fi=!0),k.id!==q&&(q=k.id,jn=!0),ge.needsLights){const gt=fu(T.state.lightProbeGridArray,z);ge.lightProbeGrid!==gt&&(ge.lightProbeGrid=gt,jn=!0)}if(bn||ee!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),lt.setValue(L,"projectionMatrix",x.projectionMatrix),lt.setValue(L,"viewMatrix",x.matrixWorldInverse);const ti=lt.map.cameraPosition;ti!==void 0&&ti.setValue(L,Mt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,jn=!0,Fi=!0)}if(ge.needsLights&&(Yt.state.sunShadowMap.length>0&&lt.setValue(L,"sunShadowMap",Yt.state.sunShadowMap,X),Yt.state.directionalShadowMap.length>0&&lt.setValue(L,"directionalShadowMap",Yt.state.directionalShadowMap,X),Yt.state.spotShadowMap.length>0&&lt.setValue(L,"spotShadowMap",Yt.state.spotShadowMap,X),Yt.state.pointShadowMap.length>0&&lt.setValue(L,"pointShadowMap",Yt.state.pointShadowMap,X)),z.isSkinnedMesh){lt.setOptional(L,z,"bindMatrix"),lt.setOptional(L,z,"bindMatrixInverse");const gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),lt.setValue(L,"boneTexture",gt.boneTexture,X))}z.isBatchedMesh&&(lt.setOptional(L,z,"batchingTexture"),lt.setValue(L,"batchingTexture",z._matricesTexture,X),lt.setOptional(L,z,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",z._indirectTexture,X),lt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",z._colorsTexture,X));const ei=W.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&I.update(z,W,ln),(jn||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,lt.setValue(L,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(wt.envMapIntensity.value=P.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=V0()),jn){if(lt.setValue(L,"toneMappingExposure",C.toneMappingExposure),ge.needsLights&&mu(wt,Fi),pe&&k.fog===!0&&Ee.refreshFogUniforms(wt,pe),Ee.refreshMaterialUniforms(wt,k,j,Y,T.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){const gt=ge.lightProbeGrid;wt.probesSH.value=gt.texture,wt.probesMin.value.copy(gt.boundingBox.min),wt.probesMax.value.copy(gt.boundingBox.max),wt.probesResolution.value.copy(gt.resolution)}Or.upload(L,Ll(ge),wt,X)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Or.upload(L,Ll(ge),wt,X),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(L,"center",z.center),lt.setValue(L,"modelViewMatrix",z.modelViewMatrix),lt.setValue(L,"normalMatrix",z.normalMatrix),lt.setValue(L,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const gt=k.uniformsGroups;for(let ti=0,Oi=gt.length;ti<Oi;ti++){const Nl=gt[ti];te.update(Nl,ln),te.bind(Nl,ln)}}return ln}function mu(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function gu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,P,W){const k=H.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=P,H.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const W=H.get(x);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,W=0){ie=x,Z=P,$=W;let k=null,z=!1,pe=!1;if(x){const fe=H.get(x);if(fe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(x.viewport),Re.copy(x.scissor),Ae=x.scissorTest,g.viewport(ne),g.scissor(Re),g.setScissorTest(Ae),q=-1;return}else if(fe.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(fe.__hasExternalTextures)X.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ze=x.depthTexture;if(fe.__boundDepthTexture!==ze){if(ze!==null&&H.has(ze)&&(x.width!==ze.image.width||x.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(pe=!0);const be=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[P])?k=be[P][W]:k=be[P],z=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?k=H.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[W]:k=be,ne.copy(x.viewport),Re.copy(x.scissor),Ae=x.scissorTest}else ne.copy(_e).multiplyScalar(j).floor(),Re.copy(Ve).multiplyScalar(j).floor(),Ae=It;if(W!==0&&(k=V),g.bindFramebuffer(L.FRAMEBUFFER,k)&&g.drawBuffers(x,k),g.viewport(ne),g.scissor(Re),g.setScissorTest(Ae),z){const fe=H.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,W)}else if(pe){const fe=P;for(let ye=0;ye<x.textures.length;ye++){const be=H.get(x.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,be.__webglTexture,W,fe)}}else if(x!==null&&W!==0){const fe=H.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,W)}q=-1};function Ul(x){const P=H.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=b.textureFormatReadable(x.format),P.__typeReadable=b.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,W,k,z,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){g.bindFramebuffer(L.FRAMEBUFFER,ye);try{const be=x.textures[fe],ze=be.format,Xe=be.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);const Se=Ul(be);if(Se.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-k&&W>=0&&W<=x.height-z&&L.readPixels(P,W,k,z,de.convert(ze),de.convert(Xe),pe)}finally{const be=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,P,W,k,z,pe,ve,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(P>=0&&P<=x.width-k&&W>=0&&W<=x.height-z){g.bindFramebuffer(L.FRAMEBUFFER,ye);const be=x.textures[fe],ze=be.format,Xe=be.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);const Se=Ul(be);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(P,W,k,z,de.convert(ze),de.convert(Xe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ct=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ct);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await th(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(rt),L.deleteSync(xt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,W=0){const k=Math.pow(2,-W),z=Math.floor(x.image.width*k),pe=Math.floor(x.image.height*k),ve=P!==null?P.x:0,fe=P!==null?P.y:0;X.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ve,fe,z,pe),g.unbindTexture()},this.copyTextureToTexture=function(x,P,W=null,k=null,z=0,pe=0){let ve,fe,ye,be,ze,Xe,Se,rt,Ct;const xt=x.isCompressedTexture?x.mipmaps[pe]:x.image;if(W!==null)ve=W.max.x-W.min.x,fe=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,ze=W.min.y,Xe=W.isBox3?W.min.z:0;else{const wt=Math.pow(2,-z);ve=Math.floor(xt.width*wt),fe=Math.floor(xt.height*wt),x.isDataArrayTexture?ye=xt.depth:x.isData3DTexture?ye=Math.floor(xt.depth*wt):ye=1,be=0,ze=0,Xe=0}k!==null?(Se=k.x,rt=k.y,Ct=k.z):(Se=0,rt=0,Ct=0);const ut=de.convert(P.format),Gt=de.convert(P.type);let ge;P.isData3DTexture?(X.setTexture3D(P,0),ge=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(X.setTexture2DArray(P,0),ge=L.TEXTURE_2D_ARRAY):(X.setTexture2D(P,0),ge=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const Yt=g.getParameter(L.UNPACK_ROW_LENGTH),Qe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(L.UNPACK_SKIP_PIXELS),bn=g.getParameter(L.UNPACK_SKIP_ROWS),jn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,be),g.pixelStorei(L.UNPACK_SKIP_ROWS,ze),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe);const Fi=x.isDataArrayTexture||x.isData3DTexture,lt=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const wt=H.get(x),ei=H.get(P),gt=H.get(wt.__renderTarget),ti=H.get(ei.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,gt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Oi=0;Oi<ye;Oi++)Fi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(x).__webglTexture,z,Xe+Oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(P).__webglTexture,pe,Ct+Oi)),L.blitFramebuffer(be,ze,ve,fe,Se,rt,ve,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||H.has(x)){const wt=H.get(x),ei=H.get(P);g.bindFramebuffer(L.READ_FRAMEBUFFER,U),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let gt=0;gt<ye;gt++)Fi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,z,Xe+gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,z),lt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ei.__webglTexture,pe,Ct+gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ei.__webglTexture,pe),z!==0?L.blitFramebuffer(be,ze,ve,fe,Se,rt,ve,fe,L.COLOR_BUFFER_BIT,L.NEAREST):lt?L.copyTexSubImage3D(ge,pe,Se,rt,Ct+gt,be,ze,ve,fe):L.copyTexSubImage2D(ge,pe,Se,rt,be,ze,ve,fe);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else lt?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(ge,pe,Se,rt,Ct,ve,fe,ye,ut,Gt,xt.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,pe,Se,rt,Ct,ve,fe,ye,ut,xt.data):L.texSubImage3D(ge,pe,Se,rt,Ct,ve,fe,ye,ut,Gt,xt):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Se,rt,ve,fe,ut,Gt,xt.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Se,rt,xt.width,xt.height,ut,xt.data):L.texSubImage2D(L.TEXTURE_2D,pe,Se,rt,ve,fe,ut,Gt,xt);g.pixelStorei(L.UNPACK_ROW_LENGTH,Yt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(L.UNPACK_SKIP_ROWS,bn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,jn),pe===0&&P.generateMipmaps&&L.generateMipmap(ge),g.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Z=0,$=0,ie=null,g.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Vs={shinminato:{sky:658702,fog:1054489,ground:790802,building:["#0e1414","#111919","#0a1010"],window:["#d7c9a9","#c94835","#4c7773"],neon:[14170154,4951945],accent:14170154,ambient:5069915,fogDensity:.018,rain:.9},kirimi:{sky:724236,fog:1711386,ground:856078,building:["#111511","#171b16","#0b0f0c"],window:["#d4c7aa","#a44632","#5b7364"],neon:[12008748,6130546],accent:12864052,ambient:5464154,fogDensity:.032,rain:.55},tokoyo:{sky:789003,fog:1577242,ground:1117457,building:["#171016","#1d121b","#100b10"],window:["#e1d3b7","#d84935","#b24b9c","#4e7f9a"],neon:[14826029,13912730,5020592],accent:14826029,ambient:5982811,fogDensity:.015,rain:1.1},tetsuhara:{sky:723721,fog:1775891,ground:1184013,building:["#15130f","#1c1913","#0e0d0a"],window:["#cdbf9d","#b34a2c","#7c6b42"],neon:[13060138,12687941],accent:13060138,ambient:6051141,fogDensity:.021,rain:.6},shirasagi:{sky:658446,fog:1317149,ground:856339,building:["#101519","#141b20","#0a0e11"],window:["#dfd3b9","#b44d3d","#4d7d9c"],neon:[13582640,6000552],accent:13582640,ambient:5201768,fogDensity:.016,rain:.7},amatsuka:{sky:723723,fog:1513237,ground:921100,building:["#121210","#171714","#0b0b0a"],window:["#d6c8a9","#b94a33","#54716d"],neon:[13386288,5340279],accent:13386288,ambient:5264721,fogDensity:.026,rain:1.4}},$0={shinminato:"docks",kirimi:"alley",tokoyo:"street",tetsuhara:"docks",shirasagi:"street",amatsuka:"alley"};function X0(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function q0(n){let e=n>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pr(n,e){const t=document.createElement("canvas");t.width=128,t.height=256;const i=t.getContext("2d");i.fillStyle=n.building[Math.floor(e()*n.building.length)],i.fillRect(0,0,128,256),i.fillStyle="rgba(0,0,0,0.32)";for(let r=0;r<256;r+=18)i.fillRect(0,r,128,2);for(let r=14;r<246;r+=22)for(let s=10;s<118;s+=18)if(e()<.56){const o=n.window[Math.floor(e()*n.window.length)];i.globalAlpha=.3+e()*.7,i.fillStyle=o,i.fillRect(s,r,8,10)}i.globalAlpha=.5,i.fillStyle=n.window[1],i.fillRect(6,0,2,256),i.globalAlpha=1;const a=new yd(t);return a.colorSpace=Jt,a.anisotropy=2,a}function Y0(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"rgba(233,224,207,0.95)"),t.addColorStop(.7,"rgba(233,224,207,0.75)"),t.addColorStop(1,"rgba(233,224,207,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new yd(n);return i.colorSpace=Jt,i}class K0{constructor(){je(this,"renderer");je(this,"scene",new _h);je(this,"camera");je(this,"clock",new $h);je(this,"group",new La);je(this,"rain",null);je(this,"rainPositions",null);je(this,"rainSpeed",.04);je(this,"container",null);je(this,"cityKey","");je(this,"encroachment",0);je(this,"reduced",!1);je(this,"raf",0);je(this,"redLight",null);je(this,"textureCache",[]);je(this,"disposed",!1);je(this,"pointer",{x:0,y:0});je(this,"baseCamera",new N(0,3.4,11));je(this,"palette",Vs.shinminato);je(this,"onPointer",e=>{this.reduced||(this.pointer.x=(e.clientX/Math.max(1,window.innerWidth)-.5)*2,this.pointer.y=(e.clientY/Math.max(1,window.innerHeight)-.5)*2)});je(this,"animate",()=>{if(this.disposed||(this.raf=requestAnimationFrame(this.animate),!this.container||!this.renderer.domElement.isConnected))return;const e=Math.min(.05,this.clock.getDelta()),t=this.clock.elapsedTime;if(this.reduced||(this.camera.position.x=this.baseCamera.x+Math.sin(t*.08)*.6+this.pointer.x*.7,this.camera.position.y=this.baseCamera.y+Math.cos(t*.11)*.18-this.pointer.y*.25,this.camera.lookAt(this.pointer.x*2.2,4.2+this.pointer.y*.4,-42)),this.rain&&this.rainPositions){const i=this.rainPositions;for(let a=0;a<i.length;a+=3)i[a+1]-=this.rainSpeed*(this.reduced?0:60)*e,i[a+1]<-.5&&(i[a+1]=34,i[a]=(Math.random()-.5)*70);this.rain.geometry.getAttribute("position").needsUpdate=!0}this.redLight&&(this.redLight.intensity=2.2+Math.min(this.encroachment,140)/32+(this.encroachment>=100?Math.sin(t*9)*.6:0)),this.renderer.render(this.scene,this.camera)});this.renderer=new W0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Jt,this.renderer.toneMapping=qo,this.renderer.toneMappingExposure=1.05,this.camera=new sn(55,1,.1,260),this.camera.position.copy(this.baseCamera),this.camera.lookAt(0,4.2,-40),this.scene.add(this.group),window.addEventListener("pointermove",this.onPointer,{passive:!0}),this.animate()}mount(e,t,i,a,r){this.disposed||(this.container!==e&&(this.container=e,e.appendChild(this.renderer.domElement),this.resize()),this.cityKey!==`${t}:${i}`&&(this.cityKey=`${t}:${i}`,this.build(t,i)),this.encroachment=a,this.reduced=r,this.redLight&&(this.redLight.intensity=2.2+Math.min(a,140)/32),this.resize())}resize(){if(!this.container)return;const e=this.container.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));(this.renderer.domElement.width!==t*this.renderer.getPixelRatio()||this.renderer.domElement.height!==i*this.renderer.getPixelRatio())&&(this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}build(e,t){for(;this.group.children.length;)this.group.children.pop().traverse(A=>{if(A instanceof ht||A instanceof sc||A instanceof lc){A.geometry?.dispose();const R=A.material;Array.isArray(R)?R.forEach(S=>S.dispose()):R?.dispose()}});for(const f of this.textureCache)f.dispose();this.textureCache=[],this.scene.fog=null,this.redLight=null,this.rain=null,this.rainPositions=null;const i=Vs[e]??Vs.shinminato;this.palette=i;const a=$0[e]??"street",r=q0(X0(`${e}:${t}`));this.scene.background=new He(i.sky),this.scene.fog=new il(i.fog,i.fogDensity);const s=new kh(14670024,658187,.42);this.scene.add(s),this.group.add(s);const o=new Hh(i.ambient,.4);this.group.add(o);const l=Y0();this.textureCache.push(l);const c=new md({map:l,transparent:!0,depthWrite:!1,opacity:a==="docks"?.6:.38}),d=new Th(c);d.scale.set(a==="docks"?26:18,a==="docks"?26:18,1),d.position.set(a==="docks"?2:-16,a==="docks"?17:22,-85),this.group.add(d);const p=new ht(new qn(220,280,1,1),new Wn({color:i.ground,roughness:.28,metalness:.55}));p.rotation.x=-Math.PI/2,p.position.set(0,0,-60),this.group.add(p);const u=a==="alley"?8:a==="docks"?26:15,h=new ht(new qn(u,240),new Wn({color:a==="docks"?592651:855051,roughness:.18,metalness:.7}));if(h.rotation.x=-Math.PI/2,h.position.set(0,.02,-60),this.group.add(h),a!=="alley"){const f=new li({color:14208181,transparent:!0,opacity:.3});for(let A=8;A>-150;A-=16){const R=new ht(new qn(.16,7),f);R.rotation.x=-Math.PI/2,R.position.set(0,.04,A),this.group.add(R)}}const _=[Pr(i,r),Pr(i,r),Pr(i,r),Pr(i,r)];this.textureCache.push(..._);const y=_.map(f=>new Wn({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:a==="alley"?.55:.7,roughness:.78,metalness:.12,color:14078148})),m=a==="alley"?26:64;for(let f=0;f<m;f++){const A=f%2===0?-1:1,R=3+r()*6,S=4+r()*9,M=a==="alley"?12+r()*25:8+r()*46,T=12-r()*150,w=A*(u/2+2.5+r()*(a==="docks"?22:14)+R/2),v=new ht(new dn(R,M,S),y[Math.floor(r()*y.length)]);if(v.position.set(w,M/2,T),v.rotation.y=(r()-.5)*.12,this.group.add(v),r()<.34){const E=i.neon[Math.floor(r()*i.neon.length)],C=new ht(new dn(.18,1.2+r()*5,.7+r()*1.4),new li({color:E}));if(C.position.set(w-A*(R/2+.15),3+r()*Math.max(1,M-5),T+(r()-.5)*S),this.group.add(C),r()<.5){const D=new Qi(E,1.4,13,2);D.position.copy(C.position),this.group.add(D)}}}this.redLight=new Qi(i.accent,2.2,34,2),this.redLight.position.set(-5,4.5,-8),this.group.add(this.redLight),a==="docks"?this.buildDocks(r,i):a==="alley"?this.buildAlley(r,i):this.buildStreet(r,i),this.buildRain(r,i,a)}buildStreet(e,t){const i=new _d({color:657672,transparent:!0,opacity:.8});for(let r=0;r<4;r++){const s=9+r*2.2,o=[new N(-24,s,10-r*14),new N(0,s-1.1,-15-r*18),new N(24,s,-42-r*20)],l=new Ih(o),c=new qt().setFromPoints(l.getPoints(24));this.group.add(new sc(c,i))}const a=new Wn({color:789258,roughness:.9});for(let r=0;r<5;r++){const s=new ht(new qr(.08,.1,9,6),a);s.position.set(r%2===0?-10:10,4.5,-8-r*22),this.group.add(s);const o=new ht(new Na(.22,8,8),new li({color:t.window[0]}));o.position.set(s.position.x,9.2,s.position.z),this.group.add(o);const l=new Qi(t.window[0],1.2,15,2);l.position.copy(o.position),this.group.add(l)}}buildAlley(e,t){const i=new Wn({color:657672,roughness:.85});for(let r=0;r<8;r++){const s=new ht(new qr(.09,.09,18,6),i);s.rotation.x=Math.PI/2,s.position.set(r%2===0?-4.1:4.1,3+e()*10,-10-r*14),this.group.add(s)}for(let r=0;r<3;r++){const s=new ht(new dn(1.15,2.2,.8),new Wn({color:1315344,roughness:.65,metalness:.25}));s.position.set(r%2===0?-3.4:3.4,1.1,-14-r*26),this.group.add(s);const o=new ht(new qn(.9,1.2),new li({color:t.window[0],transparent:!0,opacity:.55}));o.position.set(s.position.x,1.35,s.position.z+.41),this.group.add(o);const l=new Qi(t.window[0],1.3,8,2);l.position.set(s.position.x,1.6,s.position.z+.8),this.group.add(l)}const a=new li({color:14170154});for(let r=0;r<4;r++){const s=new ht(new Na(.24,10,10),a);s.position.set(r%2===0?-3.8:3.8,5+e()*3,-20-r*20),this.group.add(s);const o=new Qi(14170154,2,10,2);o.position.copy(s.position),this.group.add(o)}}buildDocks(e,t){const i=new ht(new qn(160,120,1,1),new Wn({color:461580,roughness:.08,metalness:.9}));i.rotation.x=-Math.PI/2,i.position.set(-42,-.3,-60),this.group.add(i);const a=[1581087,1971988,2235158,1186332];for(let o=0;o<22;o++){const l=new ht(new dn(4.3,2.3,2.2),new Wn({color:a[Math.floor(e()*a.length)],roughness:.8,metalness:.2})),c=Math.floor(e()*3);l.position.set(-15-e()*30,1.15+c*2.35,-20-e()*80),l.rotation.y=(e()-.5)*.2,this.group.add(l)}const r=new Wn({color:724236,roughness:.85});for(let o=0;o<3;o++){const l=-12-o*18,c=-30-o*25,d=new ht(new dn(.45,25,.45),r);d.position.set(l-2,12.5,c),this.group.add(d);const p=new ht(new dn(.45,25,.45),r);p.position.set(l+2,12.5,c),this.group.add(p);const u=new ht(new dn(20,.5,.5),r);u.position.set(l+6,24,c),this.group.add(u);const h=new Qi(14170154,2,18,2);h.position.set(l+15,24,c),this.group.add(h)}const s=new ht(new Na(.2,8,8),new li({color:t.accent}));s.position.set(8,6,-45),this.group.add(s)}buildRain(e,t,i){const a=i==="docks"?1200:1800,r=new Float32Array(a*3);for(let l=0;l<a;l++)r[l*3]=(e()-.5)*70,r[l*3+1]=e()*38,r[l*3+2]=10-e()*100;const s=new qt;s.setAttribute("position",new yn(r,3));const o=new vd({color:14208181,size:.055,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0});this.rain=new lc(s,o),this.rainPositions=r,this.rainSpeed=(t.rain??1)*.055,this.group.add(this.rain)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("pointermove",this.onPointer),this.renderer.dispose(),this.renderer.domElement.remove()}}const di={body:"體魄",reflex:"敏捷",intellect:"知性",will:"意志",perception:"感知",charm:"魅力"},Gc={body:"肉體的力量與耐痛。影響近身戰、負重與生存。",reflex:"反應與速度。影響閃避、追擊與脫身。",intellect:"推理、資訊處理與說服材料。影響調查與滅證。",will:"精神強度。抵抗侵蝕與強敵的壓迫。",perception:"觀察與直覺。發現謊言、伏擊與痕跡。",charm:"氣場與話術。影響交涉、隱藏與操縱。"},Dd=["body","reflex","intellect","will","perception","charm"],Z0=[{id:"blade",name:"斷罪之刃",kana:"ダンザイノハ",rarity:"Ⅲ",type:"攻擊",tagline:"把侵蝕鍛造成一把不該存在的刀。",description:"你從脊椎抽出黑色的薄刃。它切開的不是肉體，而是「存在」本身。每次揮刀，刀刃都會多記住你一點。",passive:"體魄 +2。",active:"戰鬥與狩獵檢定 +3；可將一次攻擊化為必殺。",cost:8,statBonus:{body:2},combat:3,tags:["combat","blade"]},{id:"flash",name:"瞬絕",kana:"シュンゼツ",rarity:"Ⅱ",type:"速度",tagline:"在世界反應過來之前，你已經不在原地。",description:"零點三秒的空白。你穿過雨、子彈與監視器，只留下一個正在崩塌的殘影。",passive:"敏捷 +2。",active:"戰鬥或逃離檢定 +2；遭遇神田時可強制脫身一次。",cost:7,statBonus:{reflex:2},combat:1,tags:["escape","combat"]},{id:"mindeye",name:"讀心之瞳",kana:"ドクシンノヒトミ",rarity:"Ⅱ",type:"精神",tagline:"每個人都在心裡小聲說出秘密。",description:"你能看見情緒的顏色。恐懼是鏽紅，算計是墨綠，而神田隼人是沒有顏色的。",passive:"感知 +2，調查所得情報 +1。",active:"閱讀目標表層思維，解鎖部分事件的真相。",cost:6,statBonus:{perception:2},combat:0,tags:["mind","intel"]},{id:"ash",name:"灰燼領域",kana:"カイジンリョウイキ",rarity:"Ⅲ",type:"異形",tagline:"半徑三十公尺內，一切歸於灰。",description:"你的影子張開，像一頁被火燒穿的紙。街道、車子、人，都從邊緣開始剝落。",passive:"知性 +1。顯現獵殺與破壞額外 +1 刻印。",active:"大範圍殲滅。警戒指數大幅上升。",cost:12,statBonus:{intellect:1},combat:2,tags:["destroy","area"]},{id:"regen",name:"不死再生",kana:"フシサイセイ",rarity:"Ⅱ",type:"異形",tagline:"骨頭會自己找到回家的路。",description:"你死過一次。心臟停擺的十七秒裡，你聽見有人在很遠的地方叫你的名字，於是你決定爬回來。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次。",active:"立即回復 4 點肉體。",cost:10,statBonus:{body:1},combat:0,tags:["heal","revive"]},{id:"siren",name:"魅惑之聲",kana:"ミワクノコエ",rarity:"Ⅱ",type:"精神",tagline:"你說的每一句話，都會變成對方最想聽的話。",description:"聲音先於意義抵達。你能讓盤問變成閒聊，讓追捕變成護送，讓恨你的人暫時忘記理由。",passive:"魅力 +2，交涉類檢定 +1。",active:"壓低警戒指數、轉移懷疑，或讓敵人放下武器。",cost:6,statBonus:{charm:2},combat:0,tags:["social","heat"]},{id:"thunder",name:"雷牙",kana:"ライガ",rarity:"Ⅱ",type:"攻擊",tagline:"雨還沒落下，閃電已經穿過你。",description:"你的神經變成導體。指尖彈出的白色電弧能在混凝土上留下焦黑的樹根。",passive:"敏捷 +1，戰鬥檢定 +2。",active:"遠距離擊穿目標，或癱瘓一整條街的電眼。",cost:8,statBonus:{reflex:1},combat:2,tags:["combat","tech"]},{id:"memory",name:"記憶篡改",kana:"キオクテンカイ",rarity:"Ⅲ",type:"精神",tagline:"證據不在現場，在別人的腦裡。",description:"你能剪掉目擊者的一分鐘，也能把一段不存在的記憶縫回去。用越多次，你越不確定哪些回憶是自己的。",passive:"知性 +2，滅證與調查檢定 +2。",active:"抹除監視紀錄、目擊者記憶與現場痕跡。",cost:6,statBonus:{intellect:2},combat:0,tags:["erase","intel"]},{id:"beast",name:"獸化",kana:"ジュウカ",rarity:"Ⅲ",type:"異形",tagline:"你不再需要理由，只需要氣味。",description:"皮膚裂開，牙齒變長，世界突然變得簡單：獵物、威脅、同類。最可怕的是，你喜歡這種簡單。",passive:"體魄 +3。所有警戒指數增加 15%。",active:"戰鬥與狩獵檢定 +4；結束後侵蝕額外 +3。",cost:9,statBonus:{body:3},combat:4,tags:["combat","beast"]},{id:"limit",name:"界限突破",kana:"カイゲントッパ",rarity:"Ⅲ",type:"支援",tagline:"把「不可能」當成一個可以談判的數字。",description:"你能短暫改寫自己的極限。心跳、肌力、思考速度全部超頻。代價是，突破之後你會忘記自己原本的樣子。",passive:"意志 +2。所有抵抗侵蝕檢定 +2。",active:"一次檢定 +5；或從必敗局面中強行拖住對手。",cost:15,statBonus:{will:2},combat:2,tags:["fate","will"]},{id:"shell",name:"空蟬",kana:"ウツセミ",rarity:"Ⅱ",type:"速度",tagline:"你留下的不是殘影，是一個替你死的自己。",description:"一具空殼從你身上剝落，帶著你的體溫與恐懼逃跑。真正的你只能站在原地，看它被殺死。",passive:"敏捷 +1。遭遇神田時可強制脫身一次。",active:"製造完美的替身，轉移追捕與一次致命傷。",cost:8,statBonus:{reflex:1},combat:0,tags:["escape","decoy"]},{id:"resonance",name:"共鳴",kana:"キョウメイ",rarity:"Ⅰ",type:"支援",tagline:"有人還記得你原本的聲音。",description:"你的顯現不是武器，是一條看不見的線。線的另一端連著你仍在乎的人；只要他們還在，你就能被拉回來。",passive:"意志 +1。聯絡羈絆時額外降低 4 點侵蝕。",active:"透過羈絆穩定精神，把一次失控推回去。",cost:4,statBonus:{will:1},combat:0,tags:["bond","calm"]}],J0={flash:{acBonus:1},mindeye:{acBonus:1},ash:{acBonus:1},regen:{acBonus:1},thunder:{acBonus:1},memory:{acBonus:1},beast:{acStat:"body",acBonus:2},limit:{acBonus:1},shell:{acBonus:2}},Ud=Z0.map(n=>({...n,kind:"manifest",...J0[n.id]??{}})),zo=[{id:"core_array",name:"演算迴廊",kana:"エンザンカイロウ",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"把世界拆成可以計算的變數，再把自己算進去。",description:"你開始看得見子彈的路徑、對方的重心、自己下一次心跳的間隔。它們全都變成可計算的變數。用得越久，你越難確定哪些念頭原本屬於你。",passive:"知性 +2。AC 改用知性計算。",active:"以思考覆寫肉體：戰鬥或調查檢定 +2。",cost:9,statBonus:{intellect:2},combat:2,tags:["core","mind","intel","ac"],acStat:"intellect",acBonus:1},{id:"core_revive",name:"殘響回生",kana:"ザンキョウカイセイ",rarity:"Ⅳ",type:"異形",kind:"core",tagline:"死不是終點，只是一次比較長的停頓。",description:"你的細胞記得自己死過。骨頭斷了會自己找路，心臟停了會重新點火。每次回來，都會少一點東西——有時是記憶，有時是名字。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次；AC +1。",active:"立即回復 4 點肉體。",cost:10,statBonus:{body:1},combat:0,tags:["core","heal","revive"],acBonus:1},{id:"core_ward",name:"境界編織",kana:"キョウカイヘンショク",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"把「不想失去」變成一堵看不見的牆。",description:"你無法阻止世界傷害你，但可以讓某些東西暫時不被世界碰到。結界越強，你越能聽見牆外那些正在死去的聲音。",passive:"意志 +2。AC +2；聯絡羈絆時額外降低侵蝕。",active:"張開結界，替羈絆者或平民承受一次攻擊。",cost:7,statBonus:{will:2},combat:0,tags:["core","bond","ward","calm"],acBonus:2},{id:"core_market",name:"暗盤交易",kana:"アンバイコウエキ",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"只要價格正確，連裏八咫的名單都能買到。",description:"你天生知道誰手裡有東西、誰急著脫手、誰的謊話值多少錢。這不是超能力，是另一種更古老的顯現：供需。",passive:"魅力 +1、知性 +1。調查與交易檢定 +1。",active:"在事件中取得裝備、情報或降低警戒指數。",cost:6,statBonus:{charm:1,intellect:1},combat:0,tags:["core","social","heat","intel"]},{id:"core_multi",name:"兵裝並列",kana:"ヘイソウヘイレツ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"一隻手不夠，那就讓每一根骨頭都握住武器。",description:"你能同時操作多件武器，把它們的軌跡疊成一條不合理的攻擊線。顯現會在你身上長出額外的關節；它們不痛，只是睡著時會自己動。",passive:"體魄 +1、敏捷 +1。戰鬥檢定 +2，AC +1。",active:"合併兩件武器的攻擊，無視一次防禦。",cost:9,statBonus:{body:1,reflex:1},combat:3,tags:["core","combat","ac"],acBonus:1},{id:"core_variable",name:"形態改寫",kana:"ケイタイカイシャ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"你的武器沒有固定形狀，只有固定目的。",description:"刀、槍、盾、鑰匙——你的顯現會隨著需要改變外形。每次變形都會帶走一點記憶，所以你開始把重要的事寫在皮膚上。",passive:"敏捷 +1。戰鬥檢定 +2；可切換攻擊或防禦形態。",active:"將一次戰鬥檢定改為遠程或近戰中最有利的形式。",cost:8,statBonus:{reflex:1},combat:2,tags:["core","combat","ac"],acBonus:1},{id:"core_combat",name:"戰術矩陣",kana:"センジュツギョジン",rarity:"Ⅳ",type:"速度",kind:"core",tagline:"你像一段被寫好的戰鬥程式，正確得令人害怕。",description:"身體會自動執行最優解。閃避、反擊、換位、補刀，全都在意識下達命令之前完成。問題是，程式不會告訴你什麼時候該停。",passive:"敏捷 +1。戰鬥檢定 +3，AC +2。",active:"進入戰鬥模式：本小時的狩獵與逃避檢定 +2。",cost:8,statBonus:{reflex:1},combat:3,tags:["core","combat","ac"],acBonus:2},{id:"core_focus",name:"零點凝縮",kana:"レイテンギョウシュク",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"世界很吵。你只需要留下一個聲音。",description:"你能把所有注意力壓縮成一個點。那個點以外的東西會暫時消失：雨聲、痛覺、別人的名字。回神時，你會發現自己錯過了很多。",passive:"意志 +1、感知 +1。抵抗侵蝕檢定 +2。",active:"重擲一次剛失敗的檢定；每次使用侵蝕 +5。",cost:6,statBonus:{will:1,perception:1},combat:1,tags:["core","will","fate"],acBonus:1}],Q0=["鏽蝕的","第七相的","無名的","雨蝕的","未登錄的","灰燼的","零時的","白夜的","逆流的","霧中的","斷裂的","殘月的"],j0=["心臟","迴路","殘響","器官","禱詞","火種","裂縫","紀錄","王座","雨聲","脈搏","鏡像"],ll=[{value:0,name:"常速",jp:"Mundane",fumble:0,note:"普通人的時間。神田也停在這裡。"},{value:1,name:"幽步",jp:"Ghost Walk",fumble:1,note:"比常人快半步。自然 1 失敗。"},{value:2,name:"影走",jp:"Shadow Run",fumble:2,note:"殘影開始追上本體。1–2 失敗。"},{value:3,name:"思速",jp:"Neuro Speed",fumble:3,note:"思考與動作同時完成。1–3 失敗。"},{value:4,name:"音速",jp:"Sonic Speed",fumble:4,note:"空氣來不及讓開。1–4 失敗。"},{value:5,name:"彈速",jp:"Bullet Speed",fumble:5,note:"子彈看起來像靜止。1–5 失敗。"},{value:6,name:"光速",jp:"Light Speed",fumble:6,note:"影子被留在原地。1–6 失敗。"},{value:7,name:"超光速",jp:"F.T.L.",fumble:7,note:"只有顯現能抵達。1–7 失敗。"}],e_=[{id:"street",name:"日常服",base:10,dexCap:5,description:"沒有防護，只有一點體面。",tone:"none"},{id:"jacket",name:"防風外套",base:11,dexCap:5,description:"城市裡最普通的裝備。至少能擋住一次刀背。",tone:"light"},{id:"trench",name:"強化風衣",base:12,dexCap:4,description:"內襯編入抗撕裂纖維。低調，適合不想被看見的人。",tone:"light"},{id:"vest",name:"防彈背心",base:13,dexCap:2,description:"裏八咫補給品。擋得住手槍，擋不住顯現。",tone:"medium"},{id:"crystal",name:"結晶外殼",base:14,dexCap:1,description:"從死去的超越者身上剝下的結晶。冷得像另一個人。",tone:"medium"},{id:"exo",name:"機動裝甲",base:15,dexCap:0,description:"軍規外骨骼。神田的特製校服內襯就是這種東西。",tone:"heavy"}],Ha=new Map(e_.map(n=>[n.id,n])),Ka=[{id:"shinminato",name:"新湊市",kana:"しんみなと",tag:"港灣・黑市",description:"面向黑潮的貿易港。戰後靠走私與倉儲重新站起來，警察管不到碼頭深處。這裡的人習慣半夜的警笛，也習慣不多看一眼。",stat:"body",heatMod:.9,scene:"docks",weather:"長雨",landmark:"第七號貨櫃碼頭"},{id:"kirimi",name:"霧見市",kana:"きりみ",tag:"山霧・舊城",description:"被兩座山夾住的老城。一年有三分之一的日子起霧，監視器拍不到十公尺外。居民說，霧裡還有另一座城市。",stat:"perception",heatMod:.85,scene:"alley",weather:"濃霧",landmark:"霧見坂商店街"},{id:"tokoyo",name:"常夜町",kana:"とこよ",tag:"不夜・直播",description:"亞洲最大的娛樂街區。霓虹燈從不熄滅，直播鏡頭比路燈還多。任何一點異常，三分鐘內就會變成熱搜。",stat:"charm",heatMod:1.2,scene:"street",weather:"霓虹雨",landmark:"常夜中央通"},{id:"tetsuhara",name:"鐵原市",kana:"てつはら",tag:"工業・鏽蝕",description:"戰時留下的重工業帶。高爐停了，鏽蝕還在。空氣裡有金屬味，孩子們的肺裡都有細小的鐵粉。",stat:"body",heatMod:1,scene:"docks",weather:"鐵灰陰天",landmark:"第三高爐遺址"},{id:"shirasagi",name:"白鷺市",kana:"しらさぎ",tag:"學園・監視",description:"戰後重建的模範都市。街道乾淨，志工很多，每根電線桿上都有治安攝影機。市民滿意度連續十年全國第一。",stat:"intellect",heatMod:1.15,scene:"street",weather:"晴朗夜色",landmark:"白鷺中央廣場"},{id:"amatsuka",name:"雨塚市",kana:"あまつか",tag:"盆地・長雨",description:"一年下三百天雨的小盆地。雨聲蓋住槍聲、哭聲與顯現的低鳴。這裡的人相信，雨會把人的秘密沖到地底。",stat:"will",heatMod:.95,scene:"alley",weather:"連日大雨",landmark:"雨塚車站前"}],t_=[{id:"ayase",name:"綾瀬凍",epithet:"玻璃聖母",ability:"結晶／凍結",marks:12,rate:.55,status:"active",portrait:"ayase",note:"排名第二。冷靜、守規則，似乎在等某個人先犯錯。"},{id:"kurokawa",name:"黑川巌",epithet:"絞肉機",ability:"肉體強化",marks:15,rate:.9,status:"active",portrait:"kurokawa",note:"殺意沒有底線。裏八咫很喜歡他，神田也是。"},{id:"shiratori",name:"白鳥理世",epithet:"舞臺女王",ability:"魅惑／暗示",marks:8,rate:.5,status:"active",portrait:"shiratori",note:"從不親自弄髒手。她的刻印大多來自別人的自願。"},{id:"tetsu",name:"鐵十兵衛",epithet:"鐵屑",ability:"金屬操作",marks:2,rate:.18,status:"active",portrait:"crown",note:"五十歲才顯現的男人。只想活著回去見孫女。"}],Ca={lie_low:{label:"潛伏",icon:"伏",desc:"躲進人群與陰影。降低警戒指數，讓傷口慢慢癒合。",risk:"警戒指數 -3／每兩小時回復 1 肉體",tone:"calm"},hunt_normal:{label:"獵殺常人",icon:"人",desc:"用刀、石頭或雙手。不碰顯現，只碰人命。",risk:"刻印 +1／警戒指數 +5",tone:"danger"},power_hunt:{label:"顯現獵殺",icon:"蝕",desc:"讓顯現替你完成工作。乾淨、迅速，代價寫在骨頭裡。",risk:"刻印 +2／警戒指數 +7／侵蝕 +顯現代價",tone:"danger"},hunt_overman:{label:"狩獵同類",icon:"獵",desc:"找出落單的超越者。這才是裏八咫真正想要的分數。",risk:"成功 +10 刻印／失敗重傷／必定侵蝕",tone:"danger"},investigate:{label:"調查",icon:"查",desc:"查線路、問人、看監視器。情報不能吃，但能救命。",risk:"情報 +1／警戒指數 +1",tone:"calm"},contact:{label:"聯絡羈絆",icon:"絆",desc:"打一通電話，見一面，確認自己還是人。",risk:"侵蝕大幅下降／監視上升，羈絆者可能被盯上",tone:"bond"},destroy:{label:"破壞",icon:"壞",desc:"讓城市記住你。裏八咫會把混亂折算成刻印。",risk:"刻印 +2／警戒指數 +9／侵蝕 +6",tone:"danger"}},Nd={monster:{title:"侵蝕完遂",subtitle:"你終於不用再忍耐了",stamp:"怪物",text:`最後一根名為「人」的線，斷了。

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

但你還記得自己的名字。`,tone:"neutral"}},n_={text:`白髮，藍金異色瞳，黑色立領制服，金色鈕扣。

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

「不可交戰。不可接觸。不可成為他的案件。」`},i_=[...zo,...Ud],ha=new Map(i_.map(n=>[n.id,n])),cl=new Map(Ka.map(n=>[n.id,n]));function dl(n){return Math.floor((n-10)/2)}function Fd(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function a_(n){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function r_(n){return n.rngCount+=1,a_(Fd(n.seed+":"+n.rngCount))}function jt(n,e,t){return e+Math.floor(r_(n)*(t-e+1))}function _n(n){return jt(n,1,20)}function s_(n){const e=[jt(n,1,6),jt(n,1,6),jt(n,1,6),jt(n,1,6)];return e.sort((t,i)=>i-t),e[0]+e[1]+e[2]}function ia(n,e){return e[jt(n,0,e.length-1)]}function Va(){return Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,6)}const Wa=[{id:"q1",title:"夜間巡邏",text:`深夜的車站月台，一名受傷的陌生超越者倒在你面前。月台上沒有監視器，只有一個正在靠近的站務員。

你先做什麼？`,options:[{label:"先確認逃生路線與監視死角。",hint:"先觀察，再判斷。",axis:"I",backgrounds:["journalist","urchin"]},{label:"蹲下去，先壓住傷口。",hint:"先救人，之後再說。",axis:"E",backgrounds:["medic","store"]}]},{id:"q2",title:"你相信什麼",text:`「顯現」到底是什麼？

記者會上，專家爭論不休。你坐在電視前，心裡浮現第一個答案。`,options:[{label:"一種可以用科學解釋、也能被利用的現象。",hint:"能測量，就能對付。",axis:"S",backgrounds:["veteran","underworld"]},{label:"人類還沒準備好承認的下一種可能。",hint:"有些東西不該被歸類。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q3",title:"代價",text:`裏八咫要你交出一個無辜的人，換取自己的安全。

對方的臉模糊不清，但你知道那個人真的存在。`,options:[{label:"先問清楚代價、成功率與退路。",hint:"活下來才有資格談對錯。",axis:"T",backgrounds:["underworld","journalist"]},{label:"拒絕。就算這會讓自己活不下去。",hint:"有些答案不需要計算。",axis:"F",backgrounds:["medic","shrine"]}]},{id:"q4",title:"72小時",text:`倒數開始。城市在你面前攤開，像一張沒有標記的地圖。

你會怎麼走？`,options:[{label:"先畫出時間表、路線與備用計畫。",hint:"把未知拆成可以處理的格子。",axis:"J",backgrounds:["store","veteran"]},{label:"先走上街，讓城市告訴你答案。",hint:"計畫永遠趕不上變化。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q5",title:"人群",text:`你剛做完一件事，那件事不能被人記住。

街角有兩條路：一條通往車站前的夜市，燈很亮，人很吵；一條通往沒有路燈的河堤。

你會怎麼離開？`,options:[{label:"混進人群，讓自己變成背景的一部分。",hint:"人多的地方最安全。",axis:"E",backgrounds:["store","musician"]},{label:"走沒有人的路，確認沒有人跟上。",hint:"安靜比熱鬧可靠。",axis:"I",backgrounds:["journalist","urchin"]}]},{id:"q6",title:"稱讚",text:`有人稱讚你做得好。

那個人你只見過兩次。稱讚裡有一半是好意，另一半是試探——你自己也常做一樣的事。`,options:[{label:"順著話題聊下去，讓氣氛輕鬆一點。",hint:"關係也是一種資源。",axis:"E",backgrounds:["musician","store"]},{label:"簡短道謝，然後繼續觀察對方。",hint:"先看清楚他想要什麼。",axis:"I",backgrounds:["veteran","shrine"]}]},{id:"q7",title:"研究",text:`你拿到一份關於顯現的研究報告，厚度像一本電話簿，封面沒有任何機構的標誌。

你會先翻哪一頁？`,options:[{label:"先看數據、樣本與重現方式。",hint:"能被重複的才叫線索。",axis:"S",backgrounds:["journalist","veteran"]},{label:"先看作者為什麼要研究這個。",hint:"動機比數字更誠實。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q8",title:"夢",text:"你夢見一座城市。醒來後，記得最清楚的是什麼？",options:[{label:"街道的坡度、雨聲、便利商店的燈。",hint:"細節讓夢變成地點。",axis:"S",backgrounds:["store","urchin"]},{label:"一個沒有臉的人，站在很遠的地方。",hint:"有些畫面只是某種預感。",axis:"N",backgrounds:["shrine","underworld"]}]},{id:"q9",title:"拖累",text:`同伴的腿斷了，追兵在兩條街外。

他叫你走。他說他會自己想辦法——他說這句話的時候沒有看你。`,options:[{label:"先計算兩個人都活下來的機率。",hint:"救不了兩個人，至少要活一個。",axis:"T",backgrounds:["veteran","underworld"]},{label:"先拉他一把。之後再想辦法。",hint:"有些手不能放。",axis:"F",backgrounds:["medic","musician"]}]},{id:"q10",title:"謊言",text:`一個陌生人對你說謊。你聽出來了。

但天亮之前，只有他能把那批貨交到你手上。`,options:[{label:"當場拆穿，讓他重新談條件。",hint:"資訊不對等才是真正的危險。",axis:"T",backgrounds:["journalist","underworld"]},{label:"假裝相信，給彼此留一條路。",hint:"有些謊言是用來維持秩序的。",axis:"F",backgrounds:["store","medic"]}]},{id:"q11",title:"行李",text:"你只有三分鐘能離開住處。",options:[{label:"照清單拿：證件、藥、現金、備用終端。",hint:"先保住能讓自己活下去的東西。",axis:"J",backgrounds:["store","veteran"]},{label:"抓最重要的那一樣就走。",hint:"剩下來的都可以再找。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q12",title:"變數",text:"計畫被打亂了。",options:[{label:"先回到原本的計畫，找出哪一步錯了。",hint:"混亂裡更需要順序。",axis:"J",backgrounds:["journalist","shrine"]},{label:"直接換一條路，邊走邊修正。",hint:"活著比照計畫重要。",axis:"P",backgrounds:["musician","underworld"]}]}],o_=new Map(Wa.map(n=>[n.id,n]));function Od(n){const e=[],t=(i,a)=>{const r=[...i];for(let s=0;s<a&&r.length;s++){const o=Math.floor(n()*r.length);e.push(r[o].id),r.splice(o,1)}};for(const i of["E","S","T","J"])t(Wa.filter(a=>a.options[0]?.axis===i),2);t(Wa.filter(i=>!e.includes(i.id)),2);for(let i=e.length-1;i>0;i--){const a=Math.floor(n()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}function ul(n){return o_.get(n)}const l_={INTJ:"獨行的棋手",INTP:"拆解世界的旁觀者",ENTJ:"把人群當成棋盤的人",ENTP:"點火者",INFJ:"安靜的守夜人",INFP:"把夢藏進口袋的人",ENFJ:"讓別人相信自己的人",ENFP:"追著光跑的人",ISTJ:"把承諾寫成紀錄的人",ISFJ:"默默收拾殘局的人",ESTJ:"先立規矩的人",ESFJ:"讓房間亮起來的人",ISTP:"在混亂裡找手感的人",ISFP:"用身體記住世界的人",ESTP:"先跳下去再說的人",ESFP:"把今天活成節日的人"},jr=[{id:"medic",name:"急救志工",tagline:"在別人倒下時，手會先動起來。",description:"你在夜間診所與災害現場之間長大。見識過太多來不及救的人，也學會了怎麼在沒有燈的地方止血。",statBonus:{will:1,perception:1},feature:"急救常識：休息時額外回復 1 點肉體。",start:{flags:["field_medicine"]},bondId:"saya"},{id:"store",name:"便利店夜班",tagline:"整座城市的深夜，都會經過你的櫃檯。",description:"你值過太多大夜班。誰在凌晨三點買酒、誰帶著血走進店裡、誰再也沒有出現，你都知道，只是不說。",statBonus:{charm:1,reflex:1},feature:"城市耳目：初始情報 +1，警戒指數 -5。",start:{intel:1,heat:-5},bondId:"kuga"},{id:"musician",name:"地下樂手",tagline:"你有把沉默唱成聲音的本事。",description:"你在車站前、在地下室、在沒有人記得的Live House裡唱過歌。掌聲很少，但你記得每一個留下來聽完的人。",statBonus:{charm:1,perception:1},feature:"共鳴：聯絡羈絆時額外降低 2 點侵蝕。",start:{flags:["resonance"]},bondId:"kiritani"},{id:"journalist",name:"網路記者",tagline:"真相不是被找到的，是被追出來的。",description:"你替一家快倒閉的網路媒體跑新聞。你學會了怎麼問問題、怎麼查戶籍、怎麼在被跟蹤時甩掉對方。",statBonus:{intellect:1,perception:1},feature:"追線：初始情報 +2。",start:{intel:2},bondId:"soma"},{id:"shrine",name:"神社之子",tagline:"你從小就知道，看不見的東西不代表不存在。",description:"你替家裡的神社掃落葉、遞御守、聽老人說完那些沒有人信的故事。你沒有顯現，卻比誰都習慣和未知共處。",statBonus:{will:1,charm:1},feature:"鎮魂：初始侵蝕 -4。",start:{encroachment:-4},bondId:"chishiki"},{id:"underworld",name:"黑市跑腿",tagline:"你認識的城市，和地圖上的不是同一個。",description:"你替人送過不該送的東西，也替人保守過不該知道的秘密。你活到今天，靠的不是拳頭，是知道誰能信。",statBonus:{body:1,reflex:1},feature:"門路：初始獲得強化風衣，情報 +1。",start:{armorId:"trench",intel:1},bondId:"kuroda"},{id:"veteran",name:"自衛隊退役",tagline:"你離開部隊，卻沒有離開戰場。",description:"你待過災害派遣、待過離島警戒。你學會在噪音裡分辨腳步、在黑暗裡保持呼吸。戰爭結束了，你的身體還沒。",statBonus:{body:1,will:1},feature:"戰術：AC +1。",start:{flags:["background_tactics"]},bondId:"makabe"},{id:"urchin",name:"無戶籍街童",tagline:"城市不是你的家，但你比誰都熟。",description:"你沒有戶籍，沒有畢業證書，只有一群同樣被漏掉的人。你學會睡在監視器照不到的地方，也學會不留下名字。",statBonus:{reflex:1,perception:1},feature:"生存直覺：初始警戒指數 -8，潛伏時額外降低警戒指數。",start:{heat:-8,flags:["streetwise"]},bondId:"hoshino"}],hl=new Map(jr.map(n=>[n.id,n])),Bd=[{id:"mio",name:"水島澪",relation:"妹妹・19",category:"family",pronoun:"她",description:"你最後的家人。她以為你在外地工作，每週仍會傳一張晚餐照片給你。"},{id:"minato",name:"神谷湊",relation:"弟弟・16",category:"family",pronoun:"他",description:"還在讀高中的弟弟。他把你當成英雄，每次傳訊息都用同一隻舉著拳頭的貓貼圖。他不知道你正在變成什麼。"},{id:"chihiro",name:"藤原千尋",relation:"母親・46",category:"family",pronoun:"她",description:"她總是把擔心藏進便當裡。便當盒是同一款，用了十年，蓋子上有一道被刀刮出來的白痕。你已經很久沒有回家吃晚飯。"},{id:"soichiro",name:"葛城宗一郎",relation:"父親・52",category:"family",pronoun:"他",description:"沉默的父親。你們最後一次說話是在醫院的走廊上，他說「沒事了」。你沒有問是誰沒事。"},{id:"suzu",name:"雨宮鈴",relation:"祖母・73",category:"family",pronoun:"她",description:"她記得你小時候的每一個夏天，也記得你第一次說謊的那天。她從不拆穿，只是多給你一顆糖。"},{id:"daichi",name:"佐倉大地",relation:"童年好友・27",category:"friend",pronoun:"他",description:"在城市裡開了一間 24 小時便利商店。他總說你小時候替他擋過一輛車。"},{id:"yu",name:"高瀬悠",relation:"高中同學・20",category:"friend",pronoun:"他",description:"你們一起逃過課、打過架、說過要離開這座城市。他留下來了，因為他母親那年病了。你走的時候沒有問過。"},{id:"ken",name:"三浦健",relation:"前同事・31",category:"friend",pronoun:"他",description:"你上一份工作的搭檔。他替你背過一次黑鍋，你一直沒有還。他現在在便利商店打工，見到你會先看你的手。"},{id:"rin",name:"早川凛",relation:"鄰居・24",category:"friend",pronoun:"她",description:"住在你隔壁房的女孩。她會在雨天把傘放在你門口，假裝不是她。你把那句謝謝留到今天還沒說。"},{id:"makabe",name:"真壁透",relation:"自衛隊同袍・29",category:"friend",pronoun:"他",description:"和你一起熬過災害派遣的人。他從不問你為什麼離開，只問你還活著嗎。"},{id:"kotone",name:"白石琴音",relation:"街頭樂手・22",category:"community",pronoun:"她",description:"在車站前唱歌的女孩。你曾在雨裡聽她唱完一整首，卻沒有留下名字。"},{id:"saya",name:"桐生沙耶",relation:"護士・26",category:"community",pronoun:"她",description:"急診室的夜班護士。她見過太多不能說的名字，也知道什麼時候該裝作沒看見。"},{id:"kuga",name:"久我修",relation:"便利商店店長・34",category:"community",pronoun:"他",description:"總是把快過期的飯糰留給你的店長。他說你像一隻淋濕的貓。"},{id:"aoi",name:"小鳥遊葵",relation:"咖啡師・23",category:"community",pronoun:"她",description:"凌晨還開著的咖啡店店員。她記得你每次點的咖啡，也記得你第一次沒有回來的那天。"},{id:"kuroda",name:"黑田鐵平",relation:"黑市仲介・41",category:"community",pronoun:"他",description:"什麼都賣、什麼都不問的男人。他救過你一次，也從此把你當成資產。"},{id:"chishiki",name:"神代千景",relation:"神社巫女・25",category:"community",pronoun:"她",description:"在霧見神社替人除厄的巫女。她說你身上有「不乾淨的線」，卻還是替你綁了御守。"},{id:"soma",name:"相馬遼",relation:"網路編輯・30",category:"community",pronoun:"他",description:"你以前的編輯。他相信真相，也相信點閱率；這兩件事常常打架。談到最後，他會把錄音筆放在桌上，讓你自己決定要不要關。"},{id:"hoshino",name:"星野燈",relation:"流浪少年・17",category:"community",pronoun:"他",description:"在車站地下街睡覺的少年。他替你望過風，也偷過你的錢。"},{id:"kiritani",name:"桐谷硯",relation:"地下樂團鼓手・21",category:"community",pronoun:"他",description:"你以前的團員。他總說你的歌太安靜，卻每一場都站在最前面。"}],c_=new Map(Bd.map(n=>[n.id,n]));function d_(n,e,t){const i={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0},a={};for(const d of jr)a[d.id]=0;n.forEach((d,p)=>{const h=ul(e[p]??"")?.options[d];if(h){i[h.axis]=(i[h.axis]??0)+1;for(const _ of h.backgrounds)a[_]=(a[_]??0)+1}});const r=(d,p)=>i[d]===i[p]?t()%2===0?d:p:i[d]>i[p]?d:p,s=[r("E","I"),r("S","N"),r("T","F"),r("J","P")].join(""),o=Math.max(...Object.values(a)),l=Object.keys(a).filter(d=>a[d]===o),c=l[t()%l.length]??"store";return{mbti:s,backgroundId:c}}const kd=72,On=30,Go=1e4;function es(){return{body:0,reflex:0,intellect:0,will:0,perception:0,charm:0}}function zd(){return{codename:"鴉",stats:es(),abilityId:"core_array",coreEpithet:"未登錄的迴路",mainStat:"body",mbti:"ISTJ",backgroundId:"store",manifested:[],armorId:"jacket",hp:10,maxHp:10,encroachment:10,marks:0,heat:0,intel:0,surveillance:0,evidence:!1,killsNormal:0,killsOverman:0,collapse:0,wanted:!1,wantedAt:0,reviveUsed:!1,flags:{}}}function $a(n){return{version:1,phase:"title",seed:n,rngCount:0,hour:0,cityId:"shinminato",creation:{step:"questions",questionIndex:0,questionIds:[],answers:[],mbti:"ISTJ",backgroundId:"store",codename:"",stats:es(),abilityChoices:[],abilityId:null,mainStat:null,coreEpithet:"未登錄的迴路",cityId:"shinminato",rolled:!1,selected:!1},player:zd(),bonds:[],rivals:[],log:[],stance:"lie_low",contactTarget:null,speed:0,pending:null,eventsDone:[],ending:null,endingText:null,randomNextHour:6,manifestOffers:[],battle:null,lastRoll:null,startedAt:0}}const u_=["鴉","零","灰","刃","雨","無名","十三","月","梟","燼"];function Gd(n){const e={};for(const t of Object.keys(es()))e[t]=s_(n);return e}function ts(n,e){const t=Gd(n),i=zo.filter(c=>c.id!==e),a=ia(n,i.length?i:zo),r=Fd(`${n.seed}:${a.id}`)%999+1,s=`${ia(n,Q0)}${ia(n,j0)}・第${r}相`,o=ia(n,Ka),l=n.creation;n.creation={step:"roll",questionIndex:l.questionIds?.length??10,questionIds:l.questionIds??[],answers:l.answers??[],mbti:l.mbti||"ISTJ",backgroundId:l.backgroundId||"store",codename:l.codename||ia(n,u_),stats:t,abilityChoices:[],abilityId:a.id,mainStat:null,coreEpithet:s,cityId:o.id,rolled:!0,selected:!1},n.bonds=Vd(n)}function h_(n,e){if(n.phase!=="creation"||n.creation.step!=="questions")return;const t=ul(n.creation.questionIds[n.creation.questionIndex]??"");if(!t||!t.options[e])return;if(n.creation.answers=[...n.creation.answers??[],e],n.creation.answers.length<n.creation.questionIds.length){n.creation.questionIndex=n.creation.answers.length;return}const i=d_(n.creation.answers,n.creation.questionIds,()=>jt(n,0,999));n.creation.mbti=i.mbti,n.creation.backgroundId=i.backgroundId,ts(n)}function Hd(n){n.creation.step="questions",n.creation.questionIndex=0,n.creation.questionIds=Od(()=>jt(n,0,1e5)/1e5),n.creation.answers=[],n.creation.mbti="ISTJ",n.creation.backgroundId="store",n.creation.abilityId=null,n.creation.rolled=!1,n.creation.stats=es(),n.bonds=[]}function Vd(n){const e=hl.get(n.creation.backgroundId)??jr[0],t=[],i=(s,o)=>{const l=c_.get(s);return l?{...l,level:Math.max(1,Math.min(5,o)),alive:!0,lastContact:-20}:null},a=i(e.bondId,jt(n,2,3)+1);a&&t.push(a);for(const s of["family","friend","community"]){if(t.length>=3)break;if(t.some(d=>d.category===s))continue;const o=Bd.filter(d=>d.category===s&&!t.some(p=>p.id===d.id));if(!o.length)continue;const l=ia(n,o),c=i(l.id,jt(n,1,3));c&&t.push(c)}const r=(n.creation.mbti?.[0]??"I")==="E";for(const s of t)r&&(s.category==="friend"||s.category==="community")&&(s.level=Math.min(5,s.level+1)),!r&&s.category==="family"&&(s.level=Math.min(5,s.level+1));return t.sort((s,o)=>{const l={family:0,friend:1,community:2};return l[s.category]-l[o.category]})}function Wd(n,e){return n.bonds.find(t=>t.alive&&t.category===e)??null}function f_(n){n.creation.stats=Gd(n),n.creation.rolled=!0}function p_(n,e){n.creation.mainStat=e}function $d(n){const e=n.creation;if(!e.abilityId)return;const t=cl.get(e.cityId)??Ka[0],i=ha.get(e.abilityId),a=hl.get(e.backgroundId)??jr[0],r=e.mainStat??Object.keys(e.stats).sort((d,p)=>e.stats[p]-e.stats[d])[0],s={...e.stats};for(const[d,p]of Object.entries(a.statBonus))s[d]=Math.min(20,s[d]+(p??0));s[r]=Math.min(20,s[r]+2);const o=Math.max(6,10+dl(s.body+(i.statBonus.body??0))),l=n.bonds.length?n.bonds:Vd(n),c={};for(const d of a.start.flags??[])c[d]=!0;n.cityId=t.id,n.hour=0,n.player={...zd(),codename:e.codename.trim()||"鴉",stats:s,abilityId:i.id,coreEpithet:e.coreEpithet,mainStat:r,mbti:e.mbti||"ISTJ",backgroundId:a.id,manifested:[],armorId:a.start.armorId??"jacket",hp:o,maxHp:o,encroachment:Math.max(0,Math.min(200,jt(n,8,16)+(a.start.encroachment??0))),heat:Math.max(0,Math.min(100,a.start.heat??0)),marks:0,intel:a.start.intel??0,surveillance:0,flags:c},n.bonds=l,n.rivals=t_.map(d=>({...d})),n.phase="play",n.stance="lie_low",n.contactTarget=l[0].id,n.log=[],n.eventsDone=[],n.ending=null,n.endingText=null,n.pending={id:"opening"},n.randomNextHour=jt(n,5,8),n.manifestOffers=[],n.speed=1,n.startedAt=Date.now(),Le(n,"story",`Project Ignis 第七次選別開始。城市：${t.name}。刻印目標：${On}。`),Le(n,"story",`顯現真名：〈${e.coreEpithet}〉。MBTI：${n.player.mbti}。背景：${a.name}。`),Le(n,"story",`背景特典：${a.feature}`)}function Ni(n){return cl.get(n.cityId)??Ka[0]}function fa(n){return ha.get(n.player.abilityId)??ha.get("core_array")}function Ho(n){return(n.player.manifested??[]).map(e=>ha.get(e)).filter(e=>!!e)}function Za(n){return[fa(n),...Ho(n)]}function hi(n){const e=new Set;for(const t of Za(n))for(const i of t.tags)e.add(i);return e}function la(n,e){const t=n.player.stats[e]??10;let i=0;for(const a of Za(n))i+=a.statBonus[e]??0;return Math.min(24,t+i)}function ra(n,e){return dl(la(n,e))}function Ii(n){const e=n.player.encroachment;return e>=160?4:e>=120?3:e>=90?2:e>=60?1:0}const m_=new Set(["flash","shell","thunder","beast","limit","core_combat","core_variable","core_focus"]);function g_(n){return Za(n).some(e=>m_.has(e.id))}function wi(n){return g_(n)?7:6}function fi(n){return ll[Math.min(7,Math.max(0,Math.floor(n)))]}function __(n){const e=Ii(n);return e>0?`顯現增幅 +${e}`:"顯現增幅 ±0"}function v_(n){return Ha.get(n.player.armorId)??Ha.get("jacket")}function gi(n){const e=v_(n);let t="reflex",i=0,a=0;for(const l of Za(n))l.acStat&&(t=l.acStat),i+=l.acBonus??0,a+=l.acCapBonus??0;n.player.flags?.background_tactics&&(i+=1);const r=ra(n,t),s=e.dexCap+a,o=Math.min(r,s);return{value:e.base+o+i,armor:e,stat:t,statMod:r,usedMod:o,cap:s,abilityBonus:i}}function x_(n){const e=gi(n);return`${e.armor.name} ${e.armor.base} + ${di[e.stat]} ${e.usedMod>=0?"+":""}${e.usedMod} + 顯現 ${e.abilityBonus} = AC ${e.value}`}function Xd(n,e,t){const i=Ha.get(e);i&&(n.player.armorId=e,Le(n,"system",`${t??"更換護甲"}：${i.name}（AC 基礎 ${i.base}，敏捷上限 ${i.dexCap}）。`))}function qd(n,e,t,i){const a=gi(n),r=_n(n),s=r+e;r===20||r!==1&&s>=a.value?(Le(n,"danger",`${i}：d20 ${r} + ${e} = ${s} ≥ AC ${a.value}，命中。`),Sn(n,t,i)):Le(n,"action",`${i}：d20 ${r} + ${e} = ${s} < AC ${a.value}，攻擊被護甲與步伐避開。`)}function y_(n){const e=new Set([n.player.abilityId,...n.player.manifested??[]]),t=Ud.filter(r=>!e.has(r.id)),i=[],a=[...t];for(;i.length<3&&a.length;){const r=jt(n,0,a.length-1);i.push(a[r].id),a.splice(r,1)}return n.manifestOffers=i,i}function S_(n,e){return Ni(n).stat===e?1:0}function M_(n){return n>=100?{label:"暴走",tone:"monster",index:5}:n>=90?{label:"崩壞",tone:"critical",index:4}:n>=70?{label:"臨界",tone:"danger",index:3}:n>=40?{label:"侵蝕",tone:"warn",index:2}:n>=20?{label:"不安定",tone:"uneasy",index:1}:{label:"穩定",tone:"stable",index:0}}function Yd(n,e){return e?n>=90?"立即逮捕":n>=70?"指名手配":n>=45?"列管對象":n>=20?"被注意到":"尚未入檔":n>=60?"謠言四起":n>=35?"有人報警":n>=15?"街頭耳語":"無聲"}function Le(n,e,t){n.log.push({hour:n.hour,kind:e,text:t}),n.log.length>160&&(n.log=n.log.slice(-160))}function Tt(n,e,t,i,a=0,r=!1){const s=_n(n),o=ra(n,e),l=S_(n,e);let c=0;(e==="will"||e==="charm")&&n.player.encroachment>=80&&(c=n.player.encroachment>=100?-4:-2),n.player.encroachment>=100&&e==="intellect"&&(c-=1);const d=s+o+a+l+c,p=s===20,u=s===1,h=p||!u&&d>=t,_=`${i}：d20 ${s} ${o>=0?"+":""}${o}${a?` ${a>=0?"+":""}${a}`:""}${l?` +${l}城市`:""}${c?` ${c}侵蝕`:""} = ${d} / DC ${t} ─ ${h?"成功":"失敗"}`;return n.lastRoll={label:i,roll:s,statMod:o,extra:a+l+c,total:d,dc:t,success:h,nat20:p,nat1:u},r||Le(n,p?"story":h?"roll":"danger",_),{ok:h,roll:s,total:d,dc:t,statMod:o,extra:a+l+c,nat20:p,nat1:u,line:_}}function fl(n){const e=[["body",la(n,"body")],["reflex",la(n,"reflex")],["intellect",la(n,"intellect")]];return e.sort((t,i)=>i[1]-t[1]),e[0][0]}function pl(n){return Math.max(0,...Za(n).map(e=>e.combat))+Ii(n)}function Lt(n,e,t){e<=0||(n.player.marks+=e,Le(n,"action",`${t} 刻印 +${e}（${n.player.marks}）。`))}function ae(n,e,t){if(e===0)return;let i=e;e>0&&(i=Math.ceil(e*Ni(n).heatMod*(hi(n).has("beast")?1.15:1))),n.player.heat=Li(n.player.heat+i,0,100),t&&Le(n,i>0?"danger":"action",`${t} 警戒指數 ${i>0?"+":""}${i}（${n.player.heat}）。`),n.player.heat>=100&&!n.player.wanted&&n.hour>=48&&(n.player.wanted=!0,n.player.wantedAt=n.hour)}function Ne(n,e,t){if(e===0)return;const i=n.player.encroachment;n.player.encroachment=Li(n.player.encroachment+e,0,200),t&&Le(n,e>0?"danger":"bond",`${t} 侵蝕 ${e>0?"+":""}${e}（${i} → ${n.player.encroachment}）。`);for(const a of[60,90,120,160])i<a&&n.player.encroachment>=a&&Le(n,"danger",`侵蝕率突破 ${a}%。顯現增幅提升（+${Ii(n)}）：你的力量變得更清楚，也更不像人。`);i<100&&n.player.encroachment>=100&&Le(n,"danger","侵蝕率突破 100%。你聽見自己的名字被某種東西咬碎。")}function en(n,e,t){const i=e??fa(n).cost+(n.player.manifested?.length??0);return Ne(n,i,t??`發動「${fa(n).name}」`),i}function vt(n,e,t){if(e<=0)return;const i=hi(n).has("intel")?1:0;n.player.intel+=e+i,Le(n,"action",`${t??"取得情報"} 情報 +${e+i}（${n.player.intel}）。`)}function Sn(n,e,t){if(!(e<=0)){if(n.player.hp-e<=0&&hi(n).has("revive")&&!n.player.reviveUsed){n.player.reviveUsed=!0,n.player.hp=3,n.player.encroachment=Li(n.player.encroachment+8,0,200),Le(n,"danger",`${t} 肉體歸零。再生顯現強行把你拼回來（HP 3／侵蝕 +8）。`);return}n.player.hp=Li(n.player.hp-e,0,n.player.maxHp),Le(n,"danger",`${t} 肉體 -${e}（${n.player.hp}/${n.player.maxHp}）。`),n.player.hp<=0&&n.phase==="play"&&Qt(n,"dead")}}function pa(n,e,t){if(e<=0)return;const i=n.player.hp;n.player.hp=Li(n.player.hp+e,0,n.player.maxHp),n.player.hp!==i&&Le(n,"action",`${t??"包紮傷口"} 肉體 +${n.player.hp-i}（${n.player.hp}/${n.player.maxHp}）。`)}function Xa(n,e,t){const i=n.bonds.find(r=>r.id===e);if(!i||!i.alive)return;const a=i.level;i.level=Li(i.level+t,1,5),i.level!==a&&Le(n,t>0?"bond":"danger",`${i.name} 的羈絆 ${t>0?"+":""}${i.level-a}（${i.level}）。`)}function Dn(n){return n.bonds.filter(e=>e.alive).reduce((e,t)=>e+t.level,0)}function Ja(n,e){const t=n.bonds.find(r=>r.id===e);if(!t||!t.alive)return"那條線已經斷了。";if(n.hour-t.lastContact<6)return`${t.name} 才剛掛上電話。再打一次，只會讓對方更擔心。`;const i=8+t.level*2+(hi(n).has("bond")?4:0)+(n.player.flags?.resonance?2:0);t.lastContact=n.hour,Ne(n,-i,`與${t.name}說話`),Xa(n,e,1),n.player.surveillance+=3,n.player.heat=Li(n.player.heat+1,0,100),n.player.encroachment>=80?Le(n,"bond",`${t.name} 在電話那頭沉默很久。「你的聲音……聽起來不太一樣。」`):Le(n,"bond",`${t.name} 的聲音把你從懸崖邊拉回來一點。`),n.player.surveillance>=9&&Le(n,"danger","裏八咫注意到你仍與外界保持聯繫。");const a=["你們聊了一些沒有用的話。你發現自己一直在聽。",`「你那邊還好嗎？」${t.name}問。你說還好。`,`${t.name}講了一件很小的事，你笑了。笑完才想起自己在什麼地方。`,"通話很短。掛斷之後，你多站了一會兒。"][(n.hour+t.level)%4];return`你與${t.name}短暫地回到了原本的世界。侵蝕 -${i}。

${a}`}function Qn(n){const e=[{name:n.player.codename,marks:n.player.marks,you:!0},...n.rivals.filter(i=>i.status==="active").map(i=>({name:i.name,marks:i.marks,you:!1}))].sort((i,a)=>a.marks-i.marks);return{rank:e.findIndex(i=>i.you)+1,total:e.length,list:e}}function Qt(n,e){n.phase!=="ending"&&(n.phase="ending",n.ending=e,n.endingText=Nd[e].text,n.pending=null,n.speed=0)}function Li(n,e,t){return Math.max(e,Math.min(t,n))}const An={kurokawa:{key:"kurokawa",name:"黑川巌",title:"絞肉機・肉體強化",portrait:"kurokawa",hp:7,ac:13,attack:7,damage:2,speed:6},thug:{key:"thug",name:"黑市保鑣",title:"拿錢辦事的普通人",portrait:"kurokawa",hp:3,ac:11,attack:5,damage:1,speed:0},ayase:{key:"ayase",name:"綾瀬凍",title:"玻璃聖母・結晶",portrait:"ayase",hp:6,ac:15,attack:6,damage:2,speed:6},shard:{key:"shard",name:"冰晶殘影",title:"被留下來的結晶",portrait:"ayase",hp:3,ac:14,attack:4,damage:1,speed:4},crown:{key:"crown",name:"王冠",title:"最終首領・侵蝕率 100%",portrait:"crown",hp:10,ac:17,attack:10,damage:3,speed:7},crownShard:{key:"crownShard",name:"王冠的結晶",title:"會自己尋找獵物的碎片",portrait:"crown",hp:4,ac:14,attack:6,damage:1,speed:3},kanda:{key:"kanda",name:"神田隼人",title:"最強現代智人・刑警",portrait:"kanda",hp:999,ac:24,attack:99,damage:3,speed:0,unbeatable:!0}},b_={kurokawa:{enemies:[An.kurokawa,An.thug,An.thug],reward:"kurokawa",intro:`黑川把鐵鍊在手裡繞了兩圈。

兩名保鑣從他身後走出來，一個堵住巷口，一個爬上防火梯。

「來啊。」

他笑得很開心。`},ayase:{enemies:[An.ayase,An.shard,An.shard],reward:"ayase",intro:`綾瀬沒有立刻動手。

她只是把手套拉緊，讓空氣中的水氣凝成三片薄冰。

「我給過你機會。」`},crown:{enemies:[An.crown,An.crownShard,An.crownShard],reward:"crown",intro:`王冠站在浮起的貨櫃之間。

兩塊結晶從他的身體剝落，落地後自己站了起來。

「來吧。讓我看看人類能走到哪裡。」`},kanda:{enemies:[An.kanda],reward:null,endingOnLoss:"caught",unbeatable:!0,intro:`神田把傘靠在牆邊。

他抬起手，一把漆黑的劍刃從天而降，穩穩落進掌心。

「我討厭打架。」

他看了一眼手錶。

「所以我不會花太久。」`}};function Bn(n){return n.enemies.filter(e=>e.alive)}function yt(n,e,t="neutral"){n.battle?.log.push({text:e,tone:t}),(n.battle?.log.length??0)>48&&(n.battle.log=n.battle.log.slice(-48))}function $n(n,e,t){n.battle&&(n.player.hp=Math.max(0,n.player.hp-e),yt(n,`${t} 肉體 -${e}（${n.player.hp}/${n.player.maxHp}）。`,"danger"),n.player.hp<=0&&A_(n,`你倒了下去。

視野邊緣變成黑色，最後一個聲音是自己心跳停下來的回音。`))}function Ws(n,e,t,i){const a=n.battle;if(!(!a||e.unbeatable||!e.alive)&&(e.hp=Math.max(0,e.hp-t),yt(n,`${i} ${e.name} -${t}（${e.hp}/${e.maxHp}）。`,"good"),e.hp<=0)){e.alive=!1,yt(n,`${e.name} 倒下了。`,"good");const r=Bn(a)[0];r&&(a.targetId=r.id),Bn(a).length||ml(n)}}function E_(n,e){const t=n.battle;if(!t||t.status!=="active"||!e.alive)return;if(e.unbeatable){$n(n,3,`${e.name}甚至沒有認真。`);return}const i=_n(n),a=e.plot??0;if(a>0&&i<=a){yt(n,`${e.name}的動作快到失控。d20 ${i} ≤ 宣告速度 ${a}，fumble。`,"good");return}const s=gi(n).value+t.guard,o=i+e.attack;if(!(i===20||i!==1&&o>=s)){yt(n,`${e.name}的攻擊落空。d20 ${i} + ${e.attack} < AC ${s}。`,"good"),t.guard=0;return}t.guard=0,$n(n,e.damage,`${e.name}命中。d20 ${i} + ${e.attack} ≥ AC ${s}。`)}function T_(n,e){const t=[{id:"player",speed:e.playerPlot??0,tie:_n(n)},...Bn(e).map(i=>({id:i.id,speed:i.plot??0,tie:_n(n)}))];t.sort((i,a)=>a.speed-i.speed||a.tie-i.tie||(i.id==="player"?-1:1)),e.queue=t.map(i=>i.id),e.queueIndex=0}function Kd(n){const e=n.battle;if(!e||e.status!=="active")return;let t=0;for(;t++<32&&e.status==="active";){if(!Bn(e).length){ml(n);return}if(e.queueIndex>=e.queue.length){e.round+=1,e.awaiting=!1,e.phase="plot",e.playerPlot=null;for(const r of Bn(e))r.plot=null;return}const i=e.queue[e.queueIndex];if(i==="player"){e.awaiting=!0;return}const a=e.enemies.find(r=>r.id===i);e.queueIndex+=1,!(!a||!a.alive)&&E_(n,a)}}function ml(n){const e=n.battle;!e||e.status!=="active"||(e.status="won",e.awaiting=!1,e.result=w_(e.reward),Le(n,"story",`戰鬥勝利：${e.enemies.map(t=>t.name).join("、")}。`))}function A_(n,e){const t=n.battle;!t||t.status!=="active"||(t.status="lost",t.awaiting=!1,t.result=`${e}

${t.endingOnLoss?"你被神田隼人制伏了。":"你勉強保住一口氣，退出了戰場。"}`,Le(n,"danger",`戰鬥失利：${t.enemies.map(i=>i.name).join("、")}。`))}function w_(n){return n==="kurokawa"?`黑川跪在地上，鐵鍊從手裡滑落。

保鑣們早就跑了。

他還在笑，笑得像一個終於玩夠的孩子。

「你比我……更適合這遊戲。」

終端震動。刻印 +15。`:n==="ayase"?`綾瀬的冰晶碎了一地。

她低頭看著穿過胸口的那一擊，表情不是憤怒，而是失望。

「你原本……可以不用變成這樣的。」

終端震動。刻印 +20。`:n==="crown"?`王冠的結晶裂開一道縫。

兩塊碎片同時停止活動，落回地面。

他低頭看著傷口，笑了。

「原來我還會痛。」

他沒有倒下。

但你已經在他身上留下了記號。`:"對手倒下了。"}function Di(n,e){const t=b_[e];if(!t)return;const i=Math.max(0,n.player.hp);n.pending=null,n.lastRoll=null,n.battle={id:`${e}-${n.hour}-${n.rngCount}`,enemies:t.enemies.map((a,r)=>({id:`${a.key}-${r}`,name:a.name,title:a.title,portrait:a.portrait,hp:a.hp,maxHp:a.hp,ac:a.ac,attack:a.attack,damage:a.damage,speed:a.speed,plot:null,alive:!0,unbeatable:a.unbeatable})),targetId:null,playerSpeed:wi(n),playerPlot:null,phase:"plot",round:1,queue:[],queueIndex:0,awaiting:!1,guard:0,momentum:0,log:[{text:`${t.intro}

你的速度：${fi(wi(n)).name}（${wi(n)}）。`,tone:"danger"}],status:"active",result:null,unbeatable:!!t.unbeatable,reward:t.reward,endingOnLoss:t.endingOnLoss??null},n.battle.targetId=Bn(n.battle)[0]?.id??null,n.player.hp=i}function R_(n,e){const t=n.battle;!t||t.phase!=="plot"||t.status!=="active"||(t.playerPlot=Math.max(0,Math.min(t.playerSpeed,Math.floor(e))))}function C_(n){const e=n.battle;if(!e||e.phase!=="plot"||e.status!=="active"||e.playerPlot===null)return;for(const i of Bn(e)){const a=Math.max(0,i.speed),r=Math.random();i.plot=a===0?0:Math.min(a,Math.floor(r*(a+1)))}e.phase="action",e.queue=[];const t=[`你 ${e.playerPlot}`,...Bn(e).map(i=>`${i.name} ${i.plot??0}`)].join("／");yt(n,`速度公開：${t}。`,"neutral"),T_(n,e),e.awaiting=!1,Kd(n)}function P_(n,e){const t=n.battle;if(!t||t.status!=="active"||!t.awaiting)return;const i=t.enemies.find(a=>a.id===e&&a.alive);i&&(t.targetId=i.id)}function I_(n,e){const t=n.battle;if(!t||t.status!=="active"||t.phase!=="action"||!t.awaiting)return;const i=t.enemies.find(h=>h.id===t.targetId&&h.alive)??Bn(t)[0];if(!i){ml(n);return}const a=ra(n,fl(n)),r=pl(n),s=ra(n,"charm"),o=ra(n,"reflex"),l=ra(n,"perception"),c=t.playerPlot??0,d=fi(c);t.awaiting=!1;const p=h=>c>0&&h<=c,u=()=>{t.status==="active"&&(t.queueIndex+=1,Kd(n))};if(t.unbeatable){if(e==="talk"){t.status="lost",t.result=`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」

「什麼？」

「活到現在。」

他把手銬收起來，改為抓住你的手臂。`,t.endingOnLoss="caught";return}if(e==="flee"){const h=_n(n);if(p(h))yt(n,`你在 ${d.name} 的速度下失去平衡。d20 ${h} ≤ ${c}。`,"bad"),$n(n,2,"神田沒有追。他只是等你摔倒。");else if(h+o>=18){t.status="escaped",t.result=`你沒有回頭。

身後的腳步聲停了半拍，然後又開始。

但這一次，它沒有跟上你。`,t.reward="kanda_escape",yt(n,"你從神田手裡逃了出去。","good");return}else yt(n,`你試著逃。d20 ${h} + ${o} < DC 18。`,"bad"),$n(n,3,"神田在巷口等你。");u();return}if(e==="power"){if(hi(n).has("escape")||hi(n).has("fate")){en(n,10,"在神田面前發動顯現"),t.status="escaped",t.result=`你讓顯現替自己爭取了零點幾秒。

神田的手穿過殘影，抓住一把雨。

你已經不在那裡了。`,t.reward="kanda_escape",ae(n,-15,"你從神田手裡脫身");return}yt(n,"你的顯現在他面前像一張濕掉的紙。","bad"),$n(n,4,"神田單手扣住你的喉嚨。"),u();return}yt(n,e==="guard"?"你擺出防禦姿勢。神田沒有急著進攻。":"你的攻擊穿過殘影。神田甚至沒有移動腳步。","neutral"),e!=="guard"&&$n(n,1,"他等你出手完，才動手。"),u();return}if(e==="strike"){const h=_n(n),_=p(h),y=h+a+r+t.momentum;t.momentum=0,_?(yt(n,`強攻在 ${d.name} 的速度下失控。d20 ${h} ≤ ${c}，fumble。`,"bad"),$n(n,1,"你衝過了頭。")):h===20||h!==1&&y>=i.ac?Ws(n,i,h===20?3:2,`強攻命中（宣告 ${c}）。d20 ${h} + ${a} + ${r} = ${y}。`):yt(n,`強攻落空。d20 ${h} + ${a} + ${r} = ${y} < AC ${i.ac}。`,"bad")}else if(e==="probe"){const h=_n(n);p(h)?yt(n,`試探時失去平衡。d20 ${h} ≤ ${c}。`,"bad"):h+l>=11?(t.momentum=2,yt(n,"你看清對方的重心。下一擊 +2。","good"),Ws(n,i,1,"你抓住空隙，劃出一道淺傷。")):yt(n,"你看不出破綻。","bad")}else if(e==="guard")t.guard=3,n.player.hp<n.player.maxHp&&(n.player.hp+=1),yt(n,"你穩住呼吸，把弱點收起來。本回合 AC +3，肉體 +1。","neutral");else if(e==="power"){const h=en(n),_=_n(n);if(p(_))yt(n,`顯現把你甩了出去。d20 ${_} ≤ ${c}，fumble。`,"bad"),$n(n,1,"你自己的速度傷到了自己。");else{const m=hi(n).has("area")?Bn(t):[i];for(const f of m){const A=_+a+r+Ii(n);_===20||A>=f.ac?Ws(n,f,3+Math.floor(Ii(n)/2),`顯現命中。d20 ${_} + ${a} + ${r} = ${A}。`):yt(n,`顯現被 ${f.name} 閃開。d20 ${_} + ${a} + ${r} = ${A}。`,"bad")}}yt(n,`顯現代價：侵蝕 +${h}。`,"danger")}else if(e==="talk"){const h=_n(n);p(h)?yt(n,`你說話的速度快過了思考。d20 ${h} ≤ ${c}。`,"bad"):h+s>=13?(t.momentum=1,yt(n,"你說了幾句話。對方的動作慢了半拍。","good")):yt(n,"對方沒有興趣聽你說話。","bad")}else if(e==="flee"){const h=_n(n);if(p(h))yt(n,`你跑得比自己的身體還快。d20 ${h} ≤ ${c}。`,"bad"),$n(n,1,"你摔了出去。");else if(h+o>=13){t.status="escaped",t.result=`你轉身跑進雨裡。

身後沒有追擊。

至少今晚沒有。`,t.reward="escape";return}else yt(n,"你沒能拉開距離。","bad")}t.status==="active"&&u()}function L_(n){const e=n.battle;if(e){if(e.status==="won"&&e.reward)if(e.reward==="kurokawa"){Lt(n,15,"你擊倒了黑川巌與他的保鑣"),ae(n,5,"鬧區發生超越者戰鬥"),n.player.killsOverman+=1,n.player.flags.kurokawa_defeated=!0;const t=n.rivals.find(i=>i.id==="kurokawa");t&&(t.status="dead")}else if(e.reward==="ayase"){Lt(n,20,"你擊倒了綾瀬凍"),ae(n,7,"頂樓發生超越者戰鬥"),n.player.killsOverman+=1,n.player.flags.ayase_dead=!0;const t=n.rivals.find(i=>i.id==="ayase");t&&(t.status="dead")}else e.reward==="crown"?(Lt(n,30,"你重創了王冠"),ae(n,10,"碼頭發生大規模顯現戰"),n.player.flags.crown_injured=!0):e.reward==="kanda_escape"&&(n.player.wanted=!1);if(e.status==="lost"&&e.endingOnLoss){Qt(n,e.endingOnLoss),n.battle=null;return}if(e.status==="lost"&&n.player.hp<=0){Qt(n,"dead"),n.battle=null;return}Le(n,"story",`戰鬥結束：${e.enemies.map(t=>t.name).join("、")}（${e.status==="won"?"勝利":e.status==="escaped"?"脫離":"敗北"}）。`),n.battle=null,n.speed=n.speed||1}}const D_={opening:`十一月的雨沒有停過。你抵達新湊市的時候，鞋裡已經進了水，每走一步都發出很輕的、像有人在後面跟著的聲音。

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

紙條下面壓著一支鎮靜劑，和一枚刻印晶片。`},U_={opening:{accept:`你把信封點燃。

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

「閉幕之後，到車站找我。」`}};function N_(n,e){return D_[n]??e()}function F_(n,e,t){return U_[n]?.[e]??t}function Zd(n,e){return typeof n.choices=="function"?n.choices(e):n.choices}function O_(n,e){return N_(n.id,()=>typeof n.text=="function"?n.text(e):n.text)}function hn(n,e,t){const i=Wd(n,e);i&&Xa(n,i.id,t)}function Jd(n,e){const t=Wd(n,e);return t?Ja(n,t.id):"那條線已經斷了。"}function pi(n,...e){return e.some(t=>n.player.abilityId===t||(n.player.manifested??[]).includes(t))}function ke(n){return{text:n,tone:"good"}}function St(n){return{text:n,tone:"bad"}}function it(n){return{text:n,tone:"danger"}}function Pe(n){return{text:n,tone:"neutral"}}const B_={id:"opening",at:0,chapter:"序章",title:"黑信封",scene:"street",text:n=>(n.cityId,`十一月三日，凌晨零時。

你抵達這座城市時，雨正下著。

口袋裡的黑信封沒有寄件人，只有一行燙銀的字：

「於十一月三日零時前抵達指定城市。不得告知任何人。」

手腕上的黑色終端已經啟動。螢幕只有三個欄位：你的代號、刻印目標 ${On}、倒數 72:00。

首頁最上方印著兩行字：

「Homo transscendens（Overman）／Project Ignis 第七次適性選別」

「癌細胞不會自己停止分裂。」

下方還有一行小字：

「本次協議由裏八咫監督。違規者與其羈絆者，將一併處理。」

城市另一端，有人已經開始獵殺。`),choices:[{id:"accept",label:"點燃信封，接受規則。",hint:"「那就開始吧。」",apply:n=>(n.player.flags.accepted=!0,Ne(n,2,"你讓顯現回應了終端"),ke(`信封在指間捲起，火沿著紙邊走，走得比你想像中慢。

掌心的裂紋被照亮。那不是傷口，是一張早就簽好的契約。`))},{id:"call_mio",label:"先確認家人是否安全。",hint:"羈絆 +1／監視 +2",apply:n=>(hn(n,"family",1),n.player.surveillance+=2,Ne(n,-4,"聽見家人的聲音"),ke(`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「下雨。」

她嗯了一聲，沒有再問。你聽見她那頭的電視聲，夜間新聞，音量開得很小。

掛斷之後你才發現，自己剛才一直屏著呼吸。`))},{id:"crack",label:"嘗試拆開手腕上的終端。",hint:"知性檢定 DC 16／失敗會觸電",apply:n=>Tt(n,"intellect",16,"拆解裏八咫終端").ok?(vt(n,1,"你讀到終端的內部頻道"),ke(`外殼「喀」一聲彈開，比預期中容易。

裡面沒有炸彈，只有一張薄晶片，和一張貼紙。貼紙上印著：

「神田對策：迴避。」

裏八咫要自己的職員迴避他。你把貼紙撕下來，收進口袋。`)):(Sn(n,2,"終端釋放防拆電擊"),n.player.surveillance+=3,St(`一串藍白火花從接縫噴出來。

你的手指麻了半個小時，左袖燒出一個洞。

更麻煩的是，裏八咫收到了一次「異常接觸」通知。`))}]},k_={id:"first_night",at:2,chapter:"第一夜",title:"第一條命",scene:"alley",text:`你在便利商店後巷看見一個穿西裝的男人。他把一個女人按在牆上，右手從手腕開始裂開，變成一片薄得不像金屬的刃。

女人沒有尖叫。她的喉嚨已經發不出聲音。

男人手腕上有一圈紅色的光——和你的終端一樣。

他也是超越者。`,choices:[{id:"ambush",label:"從背後偷襲他。",hint:"顯現攻擊／刻印 +10／警戒指數 +5",apply:n=>(en(n,void 0,"從死角發動偷襲"),Lt(n,10,"你補上最後一刀"),ae(n,5,"巷口留下大量血跡"),n.player.killsOverman+=1,n.player.flags.first_kill=!0,it(`刀刃穿過他後頸的時候，他還在笑。

「你……也是啊。」

終端震了一下。刻印 +10。

女人靠著牆滑下去，已經沒有呼吸。

你誰也沒有救到。你只是殺了一個和你一樣的人。`))},{id:"intervene",label:"出聲阻止。",hint:"體魄檢定 DC 13",apply:n=>Tt(n,"body",13,"赤手阻止超越者").ok?(vt(n,1,"你記住了他的臉"),ae(n,2,"巷子裡有人報警"),n.player.flags.spared_first=!0,ke(`你抓住他的手腕，握得很緊，緊到刃劃開掌心時，你才發現自己沒有放開。

「你瘋了嗎？」

他看了一眼你的終端，退了一步。

「我們是同一邊的。」

他翻牆走了。女人活下來了，一直在道歉——道歉的對象是你。

你記住了他的臉。`)):(Sn(n,2,"刃劃開你的側腹"),ae(n,3,"血跡引來巡邏車"),St(`你慢了半拍。

刃從側腹劃過，熱的東西流進褲腰。男人趁機消失在雨裡。

女人還在哭。你沒有留下來。那件外套擋了一點，擋得不夠多。`))},{id:"watch",label:"冷眼旁觀，記下規則。",hint:"情報 +1／侵蝕 +2",apply:n=>(vt(n,1,"你觀察到超越者獵殺的模式"),Ne(n,2,"你壓抑住出手的衝動"),Pe(`你看著那條命被抽乾，像看著一盞路燈慢慢熄滅。

男人離開時看了你一眼，沒有說話，也沒有記下你。

終端彈出提示：「目擊未處理。風險：低。」

「低」這個字在你眼前停了很久。`))},{id:"leave",label:"轉身離開。",hint:"警戒指數 -2",apply:n=>(ae(n,-2,"你避開了監視器"),Ne(n,1),Pe(`你走進雨裡。

身後的尖叫被車聲蓋過，蓋得很乾淨。

這座城市今晚會死很多人。你決定先讓自己活著。`))}]},z_={id:"mio_call",at:5,chapter:"第一天",title:"家人的來電",speaker:"水島澪",scene:"alley",text:`手機在凌晨三點震動。來電顯示：澪。

你盯著螢幕看了很久。終端沒有禁止接聽，只禁止說出真相。

「哥，你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。」

她的聲音很近，像隔著一扇沒關緊的門。`,choices:n=>[{id:"lie",label:"說謊。說你只是加班。",hint:"意志檢定 DC 12／失敗侵蝕 +4",apply:e=>Tt(e,"will",12,"對家人說謊").ok?(Ne(e,-6,"你暫時把怪物關回身體裡"),hn(e,"family",1),ke(`你聽見自己用很正常的聲音說話：加班、同事、明天會早點睡。

掛上電話之後，你在雨裡站了很久。

是雨聲太吵，你才發現自己一直沒有呼吸。`)):(Ne(e,4,"謊言在喉嚨裡裂開"),St(`你說到一半停住了。

「哥，你旁邊有人嗎？」

「沒有。」

她沒有再問。電話裡只剩下她那邊很輕的呼吸聲，一直沒有掛。`))},{id:"truth",label:"違反命令，告訴她一點點。",hint:"羈絆 +2／監視 +8／警戒指數 +5",apply:e=>(hn(e,"family",2),e.player.surveillance+=8,ae(e,5,"裏八咫攔截到通話關鍵字"),e.player.flags.told_mio=!0,it(`「如果我沒有回來，」你說，「不要找我。」

電話那頭安靜了五秒。你數得到她的呼吸，一次，兩次。

「你在哪裡？」

你掛斷了。

終端立刻亮起紅字：「偵測到協議外通訊。」`))},{id:"silent",label:"接起，但不說話。",hint:"羈絆 +1／侵蝕 +3",apply:e=>(hn(e,"family",1),Ne(e,3,"沉默比謊言更難"),Pe(`你聽著她呼吸。她也聽著你。

「好了，」她最後說，「我知道你在。」

她先掛了電話。`))},{id:"hangup",label:"掛斷。現在不能有任何牽掛。",hint:"羈絆 -1／侵蝕 +5",apply:e=>(hn(e,"family",-1),Ne(e,5,"你主動剪斷一條線"),St(`你按下紅色按鈕。

世界安靜了，安靜得像有人把耳朵捂起來。

但你知道，有些線不是掛斷就會消失的。`))}]},G_={id:"convenience_store",at:8,chapter:"第一天",title:"便利商店的燈",speaker:"老朋友",scene:"street",text:`凌晨四點，你走進街角的便利商店。自動門的聲音太大。

櫃檯後的人抬頭，愣了一下，然後笑出來。

「你怎麼會在這裡？」

佐倉大地。你小時候替他擋過一輛車的那個人。他現在穿著店長的藍色圍裙，胸前的名牌歪了。

電視正在播報昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案。`,choices:[{id:"help",label:"留下來幫他搬貨。",hint:"侵蝕 -8／羈絆 +1",apply:n=>(Jd(n,"friend"),pa(n,1,"熱騰騰的關東煮"),ke(`你們把一箱箱飲料搬進冷藏櫃。他搬錯了一箱，把啤酒放到牛奶旁邊，自己笑了很久。

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

自動門在你身後關上時，你聽見他把電視音量調回去了。`))}]},H_={id:"shiratori_invite",at:11,chapter:"第一天",title:"屋頂拍賣會",speaker:"白鳥理世",portrait:"shiratori",scene:"street",text:`終端收到一則沒有寄件人的訊息：

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。——白鳥理世」

頂樓鋪著紅毯。十幾名超越者站在雨裡，像一群等待上場的演員。

白鳥理世坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎，」她說，「今晚拍賣的不是東西，是情報。而你們每一個人，都是商品。」`,choices:n=>[{id:"trade",label:"留下來交換情報。",hint:"情報 +2／警戒指數 +2",apply:e=>(vt(e,2,"你買到兩份名單"),ae(e,2,"拍賣會的位置被警方掌握"),e.player.flags.met_shiratori=!0,Pe(`你得到兩份名單：一份是裏八咫的回收路線，一份是神田隼人過去偵破的案件，連卷宗編號都抄得整整齊齊。

白鳥收下你的情報費，數都沒數。

「你比我想像中還有趣。」她把面具戴回去。「有趣的人通常活不久，所以我會記得你。」`))},{id:"read",label:"用讀心之瞳看她的真正目的。",hint:"需要讀心之瞳／情報 +3",requires:e=>pi(e,"mindeye"),apply:e=>(en(e),vt(e,3,"你看見白鳥記憶裡的一間空房間"),e.player.flags.riya_secret=!0,it(`她心裡有一間上鎖的房間。

房間裡沒有金銀財寶，只有一張全家福，和一份名單。名單最後一行寫著：「白鳥理世／已回收」。

她注意到你的視線。笑容第一次出現裂縫，像面具先裂，人才跟上。

「看見了？」她問。「那就不能讓你活著離開了。」

但她沒有動手。她只是把這件事記進去了。`))},{id:"decline",label:"不進場，在對街觀察。",hint:"警戒指數 -3／情報 +1",apply:e=>(ae(e,-3,"你避開了公開場合"),vt(e,1,"你記下了與會者的臉"),Pe(`你站在對街便利商店的屋簷下，看著那些超越者一個接一個走進大樓。沒有人回頭。

凌晨兩點，只有七個人走出來。

警衛在門口抽菸，什麼也沒看見。`))},{id:"rob",label:"等她落單，搶走她的終端。",hint:"敏捷檢定 DC 16／成功大量刻印",apply:e=>Tt(e,"reflex",16,"偷走白鳥的終端").ok?(Lt(e,15,"你轉走了白鳥理世的刻印"),ae(e,6,"白鳥發布了懸賞"),e.player.flags.riya_enemy=!0,it(`她的終端比你想像中輕，輕得像裡面什麼都沒有。

你翻過屋頂時，聽見她在身後笑。

「拿去吧。」她說。「反正那些刻印本來就該是你的。」

你跑了三條街才停下來。停下來的時候，你才想到要檢查裡面到底有什麼。`)):(Sn(e,3,"白鳥的追隨者堵住逃生口"),ae(e,5,"拍賣會爆發衝突"),e.player.flags.riya_enemy=!0,St(`你才碰到她的手腕，整層樓的燈同時熄滅。

三個人從不同方向撲上來，動作整齊得像排練過。

你逃了出去，肋骨斷了兩根。

第二天早上，你發現口袋裡多了一張拍賣會的邀請卡。`))}]},V_={id:"kurokawa_massacre",at:14,chapter:"第二天",title:"絞肉機",speaker:"黑川巌",portrait:"kurokawa",scene:"street",text:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊滴著血。他對著監視器鏡頭笑，像在跟誰打招呼。

終端彈出公告：「超越者黑川巌，刻印 +9。目擊者處理中。」

這不是獵殺。這是廣告。`,choices:[{id:"fight",label:"正面攔住他。",hint:"回合制戰鬥／勝利 +15 刻印",apply:n=>(Di(n,"kurokawa"),Pe(`你把外套脫下來，丟進水窪。

雨水在布料上浮成一層薄薄的光。

「喂。」你說。

他回頭了。`))},{id:"ambush",label:"藏在高處，用顯現偷襲。",hint:"顯現／+10 刻印／警戒指數 +7",apply:n=>(en(n),Lt(n,10,"你偷襲了黑川巌"),ae(n,7,"整條街的玻璃同時碎裂"),n.player.killsOverman+=1,n.player.flags.kurokawa_injured=!0,it(`你的攻擊從天而降。黑川只來得及抬頭。

他沒有躲。他張開雙臂接住那一擊，像在擁抱一輛失控的卡車。

煙塵散去後，他跪在地上，胸口多了一個洞。

「再來。」他說。

「再來啊。」

你走了。走到街口時，你聽見他開始笑。`))},{id:"save",label:"衝進火場，把倖存者拖出來。",hint:"警戒指數 +2／侵蝕 -5／拯救一條命",apply:n=>(ae(n,2,"你在現場留下了腳印"),Ne(n,-5,"你記得自己為什麼要跑"),n.player.flags.saved_civilian=!0,n.player.flags.saved_child=!0,ke(`你在倒塌的招牌下找到一個小女孩。她抓著你的外套不放，指甲陷進布料裡。

你把她抱出來的時候，她一直問：「我媽媽呢？」

你沒有回答。你不能回答。

救護車來的時候，你已經走了。她沒有看見你的臉，只記得你手腕上有紅色的光。`))},{id:"leave",label:"不要捲入。讓他成為誘餌。",hint:"情報 +1／侵蝕 +2",apply:n=>(vt(n,1,"你觀察到黑川的行動模式"),Ne(n,2),Pe(`你退到街角，記下黑川離開的方向。

他會引來神田。這是好事。

至少你是這麼告訴自己的。`))}]},W_={id:"ink_rain",at:17,chapter:"第二天",title:"墨雨",scene:"alley",text:`你在走路，突然發現雨是黑色的。

不是汙水。是墨。整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。

你的名字。

然後你看見自己的手：皮膚底下的血管亮著紅光，像一張正在燃燒的地圖。

侵蝕正在加速。`,choices:[{id:"endure",label:"咬破舌頭，撐住。",hint:"意志檢定 DC 14",apply:n=>Tt(n,"will",14,"抵抗侵蝕幻覺",pi(n,"limit")?2:0).ok?(Ne(n,-4,"你把幻覺壓回視線邊緣"),ke(`你數著自己的心跳。一百二十下之後，雨恢復成透明的。

牆上的字不見了，只剩下水痕。

只有你記得它們寫了什麼。`)):(Ne(n,8,"幻覺撕開了一道缺口"),Sn(n,1,"你在牆上撞傷了肩膀"),St(`你回過神時，自己正用額頭撞牆。

血順著眉骨流進眼睛，世界變成紅色的。

手機螢幕顯示：侵蝕率上升中。

旁邊有一個撐傘的路人站著看你，看了兩秒，然後繞路走開。`))},{id:"suppress",label:"用顯現強行壓制。",hint:"侵蝕 +8／自動成功",apply:n=>(en(n,8,"用顯現鎮壓失控"),Ne(n,3,"壓制反過來餵養了侵蝕"),Pe(`你讓顯現張開，把所有幻覺吞回去。

雨停了。至少在你站立的半徑三公尺內停了。

代價是，你現在能清楚聽見牆裡有人在說話。`))},{id:"call",label:"打給羈絆者。讓熟悉的聲音定位你。",hint:"羈絆／侵蝕 -12",apply:n=>{const e=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]??n.bonds[0],t=Ja(n,e.id);return ke(t+`

你看著自己的手慢慢恢復成皮膚的顏色。`)}},{id:"surrender",label:"放手。讓它佔領你一部分。",hint:"侵蝕 +12／獲得力量",apply:n=>(Ne(n,12,"你主動讓侵蝕前進"),n.player.flags.let_go=!0,it(`你停止抵抗。

黑色的雨穿透皮膚，溫度像一碗放涼的湯。

你突然能看見這條街所有人的死期。

這很方便。你討厭自己覺得方便。`))}]},$_={id:"midpoint",at:20,chapter:"第二天",title:"中場補給",scene:"docks",text:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。

遠方的港口響起汽笛。你突然意識到，這座城市每一天都在正常運作，只有你的人生被按下了倒數。`,choices:[{id:"medkit",label:"醫療包。",hint:"肉體回復 5",apply:n=>(pa(n,5,"裏八咫的軍規醫療包"),Pe("你把止血凝膠打進傷口。痛覺被一層冰冷的東西蓋住。"))},{id:"chip",label:"情報晶片。",hint:"情報 +3",apply:n=>(vt(n,3,"晶片裡有參賽者座標"),Pe("晶片裡有所有超越者的初始座標，以及一條被標紅的路線：通往第七號貨櫃碼頭。"))},{id:"cleaner",label:"偽造終端。",hint:"警戒指數 -20",apply:n=>(ae(n,-20,"你換上偽造終端"),ke(`你把舊終端丟進海裡。新的終端顯示同一個代號，但所有犯罪紀錄都變成空白。

至少裏八咫的電腦會這麼認為。`))},{id:"booster",label:"強化劑。",hint:"肉體上限 +2／侵蝕 +8",apply:n=>(n.player.maxHp+=2,pa(n,2),Ne(n,8,"你讓顯現改寫自己的身體"),it(`藥劑沿著血管燒過去。你看見自己的影子多了一雙手。

肉體上限提升。代價寫在侵蝕率上。`))},{id:"armor",label:"防彈背心。",hint:"裝備護甲／AC 基礎 13／敏捷上限 +2",apply:n=>(Xd(n,"vest","你換上裏八咫的防彈背心"),ke(`背心比想像中輕。你活動了一下肩膀，確認它不會妨礙顯現。

「擋得住手槍。」箱子上的標籤寫著。「擋不住奇蹟。」`))}]},X_={id:"tetsu_dead",at:23,chapter:"第二天",title:"鐵屑",scene:"docks",text:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。

終端上他的代號已經變灰。最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。照片上是一個小女孩，穿著水手服，比著勝利手勢。

背面寫著：「爺爺，這次一定要回來。」`,choices:[{id:"investigate",label:"檢查傷口與現場。",hint:"情報 +2",apply:n=>(vt(n,2,"你從傷口推斷出兇手的手法"),ae(n,1,"你在現場停留太久"),Pe(`傷口太乾淨了。沒有掙扎，沒有防禦傷。

這不是超越者能做出的切口。

你想起新聞裡那個名字：神田隼人。`))},{id:"take",label:"拿走他的刻印。",hint:"刻印 +4／侵蝕 +3",apply:n=>(Lt(n,4,"你接收了鐵十兵衛的刻印"),Ne(n,3,"你碰觸了死者的終端"),it(`終端在你手裡震了一下，像一顆還在跳的心。

刻印轉移完成。

你沒有看那張照片第二眼。`))},{id:"mourn",label:"替他蓋上外套。",hint:"侵蝕 -3／羈絆感",apply:n=>(Ne(n,-3,"你為一個陌生人停了下來"),n.player.flags.mourned_tetsu=!0,ke(`你把外套蓋在他臉上。

照片放回他胸口。

「回去看看吧。」你說。雖然你知道他回不去了。`))}]},q_={id:"kanda_rumor",at:26,chapter:"第二天",title:"那個刑警",speaker:"神田隼人",portrait:"kanda",scene:"street",text:n=>`電視牆上臨時插播一則記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組，由搜查一課的特別顧問・神田隼人負責。」

畫面切到一個穿黑色風衣的男人。他沒有看鏡頭，正在低頭翻一份資料。

記者問他是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」他說。「而證據告訴我，有人在替你們數人頭。」

畫面下方跑馬燈：神田隼人，17 歲，無顯現／Homo sapiens。

${n_.text}`,choices:[{id:"research",label:"蒐集神田的資料。",hint:"情報 +3",apply:n=>(vt(n,3,"你找到神田的舊案卷"),Pe(`七起案件，七個超越者。三個在逮捕前侵蝕率突破 100%，兩個自殺，兩個至今沒有交代動機。

所有案件都有一個共同點：神田隼人走進現場時，沒有人逃得掉。`))},{id:"escape_plan",label:"去車站確認離開城市的路線。",hint:"知性檢定 DC 15／解鎖逃亡路線",apply:n=>Tt(n,"intellect",15,"規劃離開城市的路線").ok?(n.player.flags.exit_route=!0,ae(n,-2,"你避開主要道路"),ke(`你找到一條不在裏八咫地圖上的舊貨運線。

終點是隔壁縣的一座小站。

你把路線記在腦裡，沒有寫下來。`)):(ae(n,5,"你在車站被盤查"),St(`車站的便衣比旅客多。你買了一張票，又在上車前把票撕掉。

有人記下了你的臉。`))},{id:"dismiss",label:"一個普通人而已。不需要在意。",hint:"侵蝕 +2",apply:n=>(Ne(n,2),Pe(`你把電視牆留在身後。

雨又開始下了。

你沒有注意到，畫面裡的神田隼人，正看著監視器的方向。`))}]},Y_={id:"ayase_proposal",at:29,chapter:"第二天",title:"玻璃聖母",speaker:"綾瀬凍",portrait:"ayase",scene:"street",text:`綾瀬凍在頂樓等你。她沒有撐傘，雨在她頭頂三公分處凝成細小的冰晶。

「你應該已經發現了，」她說，「這場遊戲不是給我們贏的。」

她把終端投影打開。上面是一份裏八咫內部名單，三十個代號，只有三個還亮著。

「王冠也在這座城市。他侵蝕率 100%，裏八咫卻不敢回收他。」

「我們聯手，先殺王冠，再處理神田。」

她停頓了一下。

「或者，你可以現在殺我。排名會上升。」`,choices:n=>[{id:"ally",label:"結盟。先活過今晚。",hint:"同盟／情報 +2／警戒指數 -2",apply:e=>(e.player.flags.ayase_ally=!0,vt(e,2,"綾瀬分享王冠的情報"),ae(e,-2,"綾瀬替你抹掉一組監視紀錄"),ke(`她伸出戴著黑色手套的手。你握住。

她的手很冷，但沒有結冰。

「記住，」她說，「我不是在救你。我是在提高我們兩個的存活率。」`))},{id:"decline",label:"拒絕。我不相信任何人。",hint:"情報 +1",apply:e=>(vt(e,1,"你記住王冠的弱點"),Pe(`「隨你。」她把終端收起來。「但王冠出現時，不要站在我前面。」

她走進雨裡。冰晶在身後碎成一地。`))},{id:"betray",label:"趁她轉身，偷襲。",hint:"回合制戰鬥／勝利 +20 刻印",apply:e=>(e.player.flags.ayase_enemy=!0,Di(e,"ayase"),Pe("你踏出一步，冰面在腳下裂開。"))}]},K_={id:"kotone_song",at:32,chapter:"第三天",title:"雨中的歌",speaker:"街角的人",scene:"alley",text:`車站前的廣場空無一人。

白石琴音坐在濕透的塑膠椅上，抱著一把便宜的木吉他，唱一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

她看見你，沒有停。只是把下一段唱得小聲一點，像在留一個位置給你。

你突然想起，自己已經三天沒有坐下來了。`,choices:[{id:"listen",label:"坐下來，聽完。",hint:"侵蝕 -10／羈絆 +1",apply:n=>(Jd(n,"community"),Ne(n,-4,"你把整首歌聽完"),ke(`她唱完最後一句，吉他弦還在震。

「你每次都只聽一半。」她說。

「這次聽完了。」

她笑了。雨聲突然變得很遠。`))},{id:"truth",label:"告訴她，你可能活不過明天。",hint:"羈絆 +2／監視 +5",apply:n=>(hn(n,"community",2),n.player.surveillance+=5,n.player.flags.told_kotone=!0,it(`她聽完，沒有問「什麼遊戲」，也沒有報警。

她只是把吉他放下，走過來抱住你。

「那你今天不要走。」

你在她肩膀上聞到雨和廉價洗髮精的味道。

終端在口袋裡震動。你沒有看。`))},{id:"coin",label:"把錢放進吉他盒，離開。",hint:"侵蝕 -3",apply:n=>(Ne(n,-3,"你留下了一點什麼"),Pe(`硬幣落在吉他盒裡，聲音很清脆。

她沒有抬頭。

你走到街角時，聽見她重新開始唱同一首歌。`))}]},Z_={id:"detective_shadow",at:36,chapter:"第三天",title:"影子",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你在便利商店的玻璃反射裡看見他。

神田隼人站在對街，正在問一個賣傘的老人。他沒有穿制服，但方圓十公尺內的人都自動讓開。

然後他抬起頭，視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。

只是把手插進風衣口袋，像在等一個很慢的綠燈。

你的終端顯示：神田隼人，距離 18 公尺，交戰評估 0.0%。`,choices:[{id:"act_normal",label:"假裝路人，繼續買東西。",hint:"魅力檢定 DC 14",apply:n=>Tt(n,"charm",14,"在神田面前演一個普通人").ok?(ae(n,-4,"神田沒有把你列入名單"),ke(`你拿起一罐咖啡，走到櫃檯結帳。手沒有抖。

走出店門時，神田已經不在對街了。

你鬆了一口氣，才發現咖啡罐被你捏凹了。`)):(ae(n,7,"神田記住了你的臉"),n.player.wantedAt=Math.max(n.player.wantedAt,n.hour),St(`你付錢時，店員問：「先生，你還好嗎？」

你抬頭，發現神田就站在你身後。

「他看起來很好。」神田替你回答。「只是有點累。」

他拿走你手上的咖啡，付了錢，然後走了。`))},{id:"leave_fast",label:"立刻離開這個街區。",hint:"警戒指數 +3／安全",apply:n=>(ae(n,3,"你匆忙離開引起注意"),Pe(`你拐進巷子，走了三個街區才停下來。

回頭時，雨裡沒有人。`))},{id:"confront",label:"主動走過去。",hint:"情報 +2／警戒指數 +8／危險",apply:n=>(vt(n,2,"你和神田說上了話"),ae(n,8,"你主動接近神田"),n.player.flags.talked_kanda=!0,it(`你走到他面前。他沒有驚訝。

「你知道我在查什麼。」他說，不是問句。

「知道。」

「那你應該也知道，我抓過比你更難抓的東西。」

他把一張名片放進你的口袋。「想說的時候，打這個號碼。」

你低頭看名片。上面只有一個名字：神田隼人。`))},{id:"erase",label:"用顯現抹掉他周圍的監視紀錄。",hint:"需要記憶篡改／警戒指數 -10",requires:n=>pi(n,"memory"),apply:n=>(en(n),ae(n,-10,"你改寫了整條街的監視紀錄"),Pe(`你讓雨聲蓋過電子訊號。監視器裡，神田身邊的畫面變成一片雪花。

他抬頭看了一眼鏡頭。

然後笑了。`))}]},J_={id:"blackout",at:40,chapter:"第三天",title:"停電",scene:"docks",text:`凌晨兩點，整座城市同時停電。

不是意外。裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近。

你的終端顯示：

「臨時規則：停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。`,choices:[{id:"hunt",label:"趁亂狩獵。",hint:"刻印 +8／警戒指數 +12／侵蝕 +5",apply:n=>(Lt(n,8,"你在停電中收割刻印"),ae(n,12,"整條街陷入混亂"),Ne(n,5,"你在黑暗裡放開了手"),n.player.killsNormal+=3,it(`你分不清自己殺了幾個人。

終端只顯示：刻印 +8。

電力恢復時，街上多了幾具屍體。你已經不在那裡了。`))},{id:"protect",label:"留在便利商店，幫大地守住店。",hint:"警戒指數 -6／羈絆 +1／侵蝕 -6",apply:n=>(ae(n,-6,"你沒有參與停電騷亂"),hn(n,"friend",1),Ne(n,-6,"你選擇站在門口"),n.player.flags.protected_store=!0,ke(`你和大地把鐵門拉下，只留一道縫。

外面有人砸門。大地拿著掃把站在你旁邊，手在抖。

「你會沒事的。」你說。

你沒有告訴他，這句話是對你自己說的。`))},{id:"hide",label:"躲進地下停車場。",hint:"警戒指數 -8",apply:n=>(ae(n,-8,"你在黑暗裡消失"),Pe(`你在地下三樓坐了一整夜。

手機沒有訊號。終端顯示刻印目標不變。

上方不時傳來跑步聲。你沒有動。`))}]},Q_={id:"evidence",at:44,chapter:"第三天",title:"不該存在的文件",scene:"alley",text:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,choices:[{id:"copy",label:"複製證據。以備不時之需。",hint:"證據／情報 +2／監視 +3",apply:n=>(n.player.evidence=!0,vt(n,2,"你複製了Project Ignis的完整紀錄"),n.player.surveillance+=3,ke(`你把檔案傳進終端的加密區。

這份東西能毀掉裏八咫，也能毀掉你。

你決定先留著。`))},{id:"burn",label:"燒掉。知道太多隻會死得更快。",hint:"警戒指數 -5／侵蝕 +3",apply:n=>(ae(n,-5,"你銷毀了裏八咫的文件"),Ne(n,3),Pe(`紙張燒得很慢。

你看著小田川知世的照片捲曲、變黑，最後消失。

你告訴自己，這是在保護他。`))},{id:"leak",label:"匿名傳給電視臺。",hint:"警戒指數 +15／監視 +10／公開真相",apply:n=>(n.player.evidence=!0,ae(n,15,"Project Ignis的片段在網路上流傳"),n.player.surveillance+=10,n.player.flags.leaked=!0,it(`三分鐘後，一個匿名帳號發布了文件截圖。

五分鐘後，影片被下架。

但已經有人備份了。

你的終端響起裏八咫的警告音：「來源追蹤中。」`))}]},j_={id:"kanda_arrives",at:48,chapter:"第三天",title:"他到了",speaker:"神田隼人",portrait:"kanda",scene:"street",text:n=>`第 48 小時。

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

${n.player.heat>=45?"他的視線在人群中掃過，停在你身上半秒。":"他的視線越過你，落在一個賣傘的老人身上。"}`,choices:n=>[{id:"walk",label:"低頭，走過去。",hint:"意志檢定 DC 12 + 警戒指數壓力",apply:e=>{const t=12+Math.floor(e.player.heat/25);return Tt(e,"will",t,"在神田面前保持鎮定").ok?(ae(e,-3,"神田暫時沒有把你列入名單"),ke(`你從他身邊走過。距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`)):(ae(e,8,"你的視線引起神田注意"),St(`你在經過時看了他一眼。

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

「謝謝。」他把照片收回去。「你手上有血的味道，先生。記得洗乾淨。」`))},{id:"flee",label:"立刻轉身離開。",hint:"警戒指數 +5",apply:e=>(ae(e,5,"你在車站前突然奔跑"),St(`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`))}]},ev={id:"interrogation",at:51,chapter:"第三天",title:"盤問",speaker:"神田隼人",portrait:"kanda",scene:"alley",text:`你走進一家凌晨還開著的咖啡店。店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你。

「坐吧。」

「我不認識你。」

「但你認識這個。」他把你昨晚丟掉的終端放在桌上。「我在垃圾回收場找到的。你以為把它丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」他說。「我是來問你，你想不想活著離開這座城市。」`,choices:n=>[{id:"lie",label:"裝傻。什麼終端？",hint:"魅力檢定 DC 15",apply:e=>Tt(e,"charm",15,"對神田說謊").ok?(ae(e,-2,"神田暫時接受你的說法"),ke(`他盯著你看了一會，然後把終端收回口袋。

「好。」他說。「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。「如果你改變主意，號碼在杯墊下面。」`)):(ae(e,10,"神田識破你的謊言"),e.player.wanted=!0,e.player.wantedAt=e.hour,St(`「你剛才說你沒見過終端。」他指著你的手腕。「那為什麼你在發抖？」

他拿起手機，按了一個號碼。

「搜查一課。幫我查一個代號。」`))},{id:"silent",label:"保持沉默。",hint:"意志檢定 DC 14",apply:e=>Tt(e,"will",14,"在神田面前保持沉默").ok?Pe(`你什麼也沒說。

他等了五分鐘，然後點了點頭。「沉默也是一種回答。」

他走了。咖啡還冒著熱氣。`):(Ne(e,4,"沉默讓侵蝕有機可乘"),ae(e,4,"你的異常反應被記錄"),St(`你咬著牙，卻聽見自己手腕上的終端發出低鳴。

神田低頭看了一眼。「它不喜歡沉默，對吧？」`))},{id:"partial",label:"承認一部分。問小田川知世的事。",hint:"情報 +2／警戒指數 +4",apply:e=>(vt(e,2,"神田證實了霧見集體失蹤與裏八咫的關聯"),ae(e,4,"你承認自己知道內情"),e.player.flags.kanda_partial=!0,Pe(`你提到霧見市。

神田第一次出現表情變化。不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。「別死。你可能是唯一能作證的人。」`))},{id:"attack",label:"攻擊他。現在，趁他沒有防備。",hint:"勝率 0.0%／回合制",apply:e=>(Di(e,"kanda"),Pe("你站起來，把咖啡杯推開。"))}]},tv={id:"kurokawa_arrested",at:54,chapter:"第三天",title:"回收通知",scene:"street",text:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。他沒有反抗，只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,choices:n=>[{id:"hunt_gap",label:"利用黑川留下的空檔，狩獵他的地盤。",hint:"刻印 +5／警戒指數 +5",apply:e=>(Lt(e,5,"你接收了黑川地盤上的刻印"),ae(e,5,"你出現在黑川的地盤"),it(`黑川的據點沒有人防守。

你拿走他留下的補給與兩個落單的超越者。

終端排名上升。你沒有感到高興。`))},{id:"erase",label:"趁警方注意力轉移，銷毀自己的痕跡。",hint:"警戒指數 -15",apply:e=>(ae(e,-15,"你把痕跡藏進黑川的案子裡"),ke(`你把兩起案件嫁禍給黑川。

裏八咫的系統接受了。

死人不會辯解。`))},{id:"visit_ayase",label:"去找綾瀬凍。她應該也看到了。",hint:"情報 +1／同盟",apply:e=>(vt(e,1,"綾瀬分析神田的手法"),e.player.flags.ayase_ally?(hn(e,"family",1),Pe(`綾瀬在頂樓等你。

「他一次都沒有用武器。」她說。「黑川不是被打敗的。他是被讀完的。」

她看向你。「王冠出現的時候，不要看他的眼睛。神田也是。」`)):Pe(`頂樓沒有人。

只有地上用冰晶排成的一行字：「還來得及。選一邊。」`))}]},nv={id:"quiet_call",at:57,chapter:"第三天",title:"櫻花開了",speaker:"水島澪",condition:n=>!n.player.wanted&&n.player.heat<70,scene:"alley",text:`終端顯示你暫時沒有被列為優先目標。

這意味著你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」你說。`,choices:[{id:"promise",label:"承諾一定會回去。",hint:"羈絆 +2／侵蝕 -8",apply:n=>(hn(n,"family",2),Ne(n,-8,"你給了自己一個必須回去的理由"),ke(`「嗯。」她說。「我等你。」

掛上電話後，你把額頭靠在冰冷的玻璃上。

第一次覺得，「回去」這兩個字有重量。`))},{id:"honest",label:"告訴她，你可能會變成不是人的東西。",hint:"羈絆 +1／侵蝕 -12／監視 +4",apply:n=>(hn(n,"family",1),Ne(n,-12,"你把最害怕的事說出口"),n.player.surveillance+=4,Pe(`電話那頭安靜了很久。

「那你就回來讓我看看。」她說。「如果認不出來，我會打你一巴掌。」

你笑了。這是三天來第一次。`))},{id:"cut",label:"說你會盡量。然後掛斷。",hint:"侵蝕 +2",apply:n=>(Ne(n,2),Pe(`「盡量」是一個很方便的詞。

它聽起來像承諾，實際上什麼都沒有。

她說好。你聽見她還想說什麼，但你掛斷了。`))}]},iv={id:"wanted",at:57,chapter:"第三天",title:"指名手配",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你的終端發出從未聽過的聲音。

低沉、規律，像醫院裡某臺機器停止運轉。

螢幕上跳出紅色字樣：

「對象已列為指名手配。
執行者：神田隼人。
剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。不是照片，不是真名。但你知道，神田已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。像一個已經知道終點在哪裡的人。`,condition:n=>n.player.wanted||n.player.heat>=70,choices:n=>[{id:"run",label:"逃。趁他還沒鎖定位置。",hint:"敏捷檢定 DC 16／降低警戒指數",apply:e=>Tt(e,"reflex",16,"甩開神田的包圍網").ok?(ae(e,-18,"你換了三個藏身處"),e.player.wanted=!1,ke(`你穿過三條後巷、一座停車場、一間打烊的居酒屋。

腳步聲消失了。

你蹲在垃圾箱後面，聽見自己的心跳比雨聲還大。`)):(ae(e,5,"你被迫往市中心移動"),e.player.wanted=!0,e.player.wantedAt=e.hour,St(`你跑進了一條死巷。

腳步聲在巷口停下。

「我不急。」神田說。「你也跑不了三個小時。」`))},{id:"hide_deep",label:"躲進地下。切斷所有訊號。",hint:"警戒指數 -20／肉體 -2",apply:e=>(ae(e,-20,"你從城市表面消失"),Sn(e,2,"地下骯髒的環境讓傷口惡化"),e.player.wanted=!1,Pe(`你鑽進廢棄的下水道。

水淹到小腿，空氣裡有鐵鏽味。

終端失去訊號。你第一次覺得，被城市遺忘也是一種保護。`))},{id:"surrender_talk",label:"主動聯絡神田，要求談判。",hint:"情報 +2／高風險",apply:e=>(vt(e,2,"神田在電話裡給了你一個地址"),ae(e,-8,"你主動聯絡神田"),e.player.flags.kanda_contact=!0,it(`電話只響了一聲。

「你終於打來了。」

「我要談條件。」

「碼頭，第七號倉庫。天亮前。」

他掛斷了。你看著手機，不確定這是不是另一種逮捕令。`))}]},av={id:"reckoning",at:60,chapter:"第三天",title:"清算前夜",scene:"docks",text:n=>{const e=Qn(n);return`第六十小時。

終端把成績單攤在你面前，字體和平常一樣冷。

刻印：${n.player.marks}／${On}。
排名：${e.rank}／${e.total}。

${n.player.marks>=On?"「已達標。剩餘 12 小時。請維持排名。」":"「未達標。剩餘 12 小時。建議：提高效率。」"}

港口那邊，最後一艘貨輪正在離港，船身壓得很低。

城市的另一頭傳來爆炸聲。

不是雷。這個季節沒有雷。

王冠要來了。

你只剩下十二個小時，決定自己要不要繼續當人。`},choices:n=>[{id:"spree",label:"走上街。把所有還能殺的都算進分數。",hint:"刻印 +8／警戒指數 +18／侵蝕 +12",apply:e=>(Lt(e,8,"你在最後的夜晚大開殺戒"),ae(e,18,"屠殺規模失控"),Ne(e,12,"你讓顯現整晚沒有休息"),e.player.killsNormal+=8,e.player.flags.massacre=!0,it(`你不記得自己走了幾條街。

終端不停震動，像在替你數拍子。

天亮前，你停在一個十字路口。

四面的監視器都對準你。你沒有躲。`))},{id:"hunt_rival",label:"找出排名在你前面的超越者。",hint:"狩獵檢定 DC 15／成功 +10",apply:e=>Tt(e,fl(e),15,"狩獵排名前段超越者",pl(e)).ok?(en(e),Lt(e,10,"你獵殺了一名排名前段的超越者"),ae(e,4,"碼頭發生戰鬥"),e.player.killsOverman+=1,it(`你在他補給的時候找到他。

戰鬥沒有超過一分鐘。

終端排名更新。你上升了。

他掉進海裡，沒有濺起太大的水花。`)):(qd(e,9,3,"獵物的反擊"),ae(e,4,"碼頭發生戰鬥"),St(`你低估了他。

他逃進貨櫃之間，留下一道血跡和一句話：「你也是被算好的。」`))},{id:"hide",label:"躲起來。分數不重要了。",hint:"警戒指數 -12／侵蝕 -3",apply:e=>(ae(e,-12,"你放棄了最後的狩獵"),Ne(e,-3,"你選擇不再弄髒手"),Pe(`你找了一個沒有監視器的倉庫，坐在角落裡。

外面有人在跑，有人在叫，有人死了。

你沒有出去。

這是三天來第一次，你覺得安靜是好的。`))},{id:"bond",label:"打最後一通電話。",hint:"侵蝕 -15／羈絆 +1",apply:e=>{const t=e.bonds.filter(a=>a.alive).sort((a,r)=>r.level-a.level)[0],i=t?Ja(e,t.id):"所有號碼都已無人接聽。";return ke(i+`

你把手機收進口袋。

如果明天還能醒來，你想再聽一次。`)}}]},rv={id:"crown_stage",at:63,chapter:"終章",title:"王冠",speaker:"王冠",portrait:"crown",scene:"docks",text:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

他穿著一套破損的白色西裝，銀色長髮被海風吹起，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀：黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」他說，聲音溫柔得像在主持婚禮。「你們都是來看我成為新物種的嗎？」

他抬起手。整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」他笑。「但失敗品，通常最接近真相。」

終端顯示：

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能`,choices:n=>[{id:"ally_ayase",label:"和綾瀬聯手。",hint:"需要同盟／回合制戰鬥",requires:e=>!!e.player.flags.ayase_ally,apply:e=>(Di(e,"crown"),Pe("綾瀬的冰牆在你身旁升起。"))},{id:"solo",label:"獨自挑戰。",hint:"回合制戰鬥／高風險",apply:e=>(Di(e,"crown"),Pe("你獨自走向光帶盡頭。"))},{id:"side_crown",label:"跪下。選擇站在王冠這邊。",hint:"刻印 +15／警戒指數 +10／走向另一種結局",apply:e=>(e.player.flags.crown_ally=!0,Lt(e,15,"王冠分給你一部分刻印"),ae(e,10,"你公開與王冠並肩"),Ne(e,10,"你接受了王冠的邀請"),it(`你單膝跪下。

王冠把手放在你的頭上。黑色的結晶順著他的手指爬進你的頭髮。

「很好。」他說。「那就一起看看，人能不能審判神。」

終端發出警告。你關掉了它。`))},{id:"hide",label:"不要進場。讓他和神田相遇。",hint:"警戒指數 -10／情報 +2",apply:e=>(ae(e,-10,"你從碼頭撤退"),vt(e,2,"你觀察到王冠與神田的動線"),Pe(`你退到起重機後面。

王冠沒有追你。他的視線越過整座碼頭，落在一個正走過來的人身上。

那個人沒有撐傘。

神田隼人。`))}]},sv={id:"crown_fall",at:68,chapter:"終章",title:"一擊",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:n=>`王冠把整座碼頭舉了起來。

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

王冠笑了。`))},{id:"watch",label:"留下來，看完。",hint:"情報 +2／侵蝕 -3",apply:n=>(vt(n,2,"你聽見王冠說出裏八咫的秘密"),Ne(n,-3,"你看見怪物被當成人對待"),Pe(`王冠躺在地上，看著夜空。

「他們把我們叫做怪物，」他說，「然後要我們互相證明誰更不像人。」

神田沒有回答。

他只是把手銬扣上，動作很輕。

「小田川知世……」王冠說，「在霧見市，對吧？」

神田的手停了半秒。`))},{id:"approach",label:"走向神田。",hint:"需要證據或高羈絆",requires:n=>n.player.evidence||Dn(n)>=6,apply:n=>(n.player.flags.confront_kanda=!0,ae(n,-5,"你主動走向神田"),it(`你從陰影裡走出來。

神田沒有轉身。「你終於肯出來了。」

「我有證據。」你說。「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」他說。「閉幕之後，到車站找我。」`))}]},ov={id:"last_choice",at:70,chapter:"終章",title:"最後的選擇",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:n=>{const e=Qn(n);return`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印 ${n.player.marks}／${On}
排名 ${e.rank}／${e.total}
侵蝕 ${n.player.encroachment}%
羈絆 ${Dn(n)}

神田沒有看你，但你知道他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`},choices:n=>[{id:"escape_now",label:"現在就走。離開這座城市。",hint:"需要羈絆 ≥8 或已規劃路線／警戒指數 <70",requires:e=>Dn(e)>=8||!!e.player.flags.exit_route,apply:e=>e.player.heat>=70?(ae(e,5,"警方在出口攔截"),Qt(e,"caught"),it(`你走到檢查站時，警察已經在那裡等了。

神田從車裡下來，替你關上車門。

「我以為你會選另一條路。」`)):(Qt(e,"escape"),ke(`你沒有回頭。

海風很冷，天邊已經泛白。`))},{id:"confess",label:"把證據交給神田。",hint:"需要證據與情報 ≥5，或羈絆 ≥6",requires:e=>e.player.evidence&&(e.player.intel>=5||Dn(e)>=6),apply:e=>(Qt(e,"confess"),ke(`你走到神田面前，把終端放在他的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」`))},{id:"close",label:"迎接閉幕。讓裏八咫算分。",hint:"依刻印、排名、侵蝕與警戒指數決定結局",apply:e=>(e.player.flags.accept_close=!0,Pe(`你站在原地，看著碼頭外的城市燈火一盞一盞亮起。

終端開始倒數。

00:59:59。`))},{id:"fight_kanda",label:"挑戰神田隼人。",hint:"勝率 0.0%／回合制",apply:e=>(Di(e,"kanda"),Pe("你朝他走過去。"))}]},lv={id:"kanda_ambush",at:48,chapter:"第三天",title:"無法戰勝的人",speaker:"神田隼人",portrait:"kanda",scene:"alley",condition:n=>n.player.wanted&&n.hour>=n.player.wantedAt+3&&n.hour<72,text:n=>`你走進一條死巷時，後方傳來傘尖點地的聲音。

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

你只剩一次選擇。`,choices:n=>[{id:"fight",label:"應戰。",hint:"勝率 0.0%／回合制",apply:e=>(Di(e,"kanda"),Pe("你沒有退路。"))},{id:"flee",label:"全力逃跑。",hint:"敏捷檢定 DC 18 + 警戒指數壓力",apply:e=>Tt(e,"reflex",18+Math.floor(e.player.heat/25),"從神田手中逃脫").ok?(e.player.wanted=!1,ae(e,-25,"你甩開了神田的包圍"),Sn(e,1,"你從二樓窗戶摔下去"),ke(`你衝向巷底的鐵門，肩膀撞開門栓。

身後的腳步聲停了一拍。

只有一拍。但那已經夠了。

你翻過兩道牆，跳進河裡。神田沒有追上來。`)):(Qt(e,"caught"),it(`你跑出三步。

神田的手從背後扣住你的脖子，把你按在牆上。

「我說過，」他的聲音很輕，「我不喜歡追人。」`))},{id:"power",label:"用顯現脫身。",hint:"需要瞬絕、空蟬、界限突破或記憶篡改",requires:e=>pi(e,"flash","shell","limit","memory"),apply:e=>(en(e,10,"在神田面前全力發動顯現"),e.player.wanted=!1,ae(e,-15,"你從神田的視線裡消失"),pi(e,"memory")?it(`你看著他的眼睛，把「你」從他的記憶裡剪掉。

神田的表情空白了半秒。

「奇怪。」他低聲說。「我剛才在追誰？」

你貼著牆，慢慢後退。

他看了你一眼，視線穿過你，走了。`):pi(e,"limit")?it(`你強行突破身體極限，抓住他的手，把他摔向牆壁。

神田穩住身體，第一次露出訝異。

那零點五秒的破綻，足夠你消失在雨裡。`):it(`你留下一個空殼。

神田一腳踩碎它，低頭看著地上不屬於任何人的臉。

「不錯的把戲。」他說。「下次，我會先確認心跳。」`))},{id:"bond_rescue",label:"發出求救訊號。",hint:"需要羈絆 ≥8",requires:e=>Dn(e)>=8,apply:e=>{const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Xa(e,t.id,-1),e.player.wanted=!1,ae(e,-12,"一輛車衝進巷口，把你載走"),Sn(e,1,"你摔進車後座"),it(`巷口亮起車燈。

${t.name}把油門踩到底，車子擦著神田的身側衝過去。

你抓住車門，被拖行了十幾公尺才爬進後座。

後照鏡裡，神田站在原地，記下了車牌。

「你瘋了嗎？」${t.name}喊。

「對。」你說。「但謝謝你。」`)}},{id:"surrender",label:"投降。",hint:"結束逃亡",apply:e=>(Qt(e,"caught"),Pe(`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」他說。

「什麼？」

「活到現在。」他把手銬收起來，改為抓住你的手臂。「走吧。你有很多事要告訴我。」`))}]},cv={id:"closing",at:72,chapter:"閉幕",title:"第七十二小時",scene:"docks",text:n=>{const e=Qn(n);return`零時整。

城市上空的烏雲裂開一道縫，第一束晨光落在海面上，像有人終於把這座城市打開。

終端停止倒數。

「Project Ignis，結束。」

刻印：${n.player.marks}。
排名：${e.rank}。
侵蝕率：${n.player.encroachment}%。
羈絆：${Dn(n)}。

海風把你的衣服吹得貼在背上。遠處有清潔車的聲音，很日常。

最終判定中。`},choices:[{id:"finish",label:"等待判定。",hint:"接受一切後果",apply:n=>{if(n.player.encroachment>=100||n.player.collapse>=3)return Qt(n,"monster"),it(`終端沒有給出判定。

它只是發出一聲很長的雜訊。

你低頭，看見自己的手已經不再是手。`);if(n.player.wanted&&n.player.heat>=80)return Qt(n,"caught"),it(`直升機的探照燈打在碼頭上。

神田隼人從光裡走出來。`);const e=Qn(n);return n.player.marks>=On&&e.rank===1&&n.player.heat<80?(Qt(n,"throne"),Pe("「第一名。」裏八咫的廣播說。「恭喜你成為普通人。」")):n.player.marks>=On?(Qt(n,"survivor"),Pe("「刻印達標。排名未達第一。授予生存資格。」")):n.player.encroachment<40&&Dn(n)>=6?(Qt(n,"nameless"),ke(`終端顯示：「未達標。回收名單確認中。」

然後，一隻手按住了螢幕。`)):(Qt(n,"recycled"),St("「刻印未達標。回收程序啟動。」"))}}]},dv=[{id:"r_witness",at:0,random:!0,chapter:"插曲",title:"鏡頭",scene:"street",text:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但他的手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。3、7、12。

你的臉還沒有完全入鏡。`,choices:[{id:"talk",label:"放下手，告訴他不要拍。",hint:"魅力檢定 DC 12",apply:n=>Tt(n,"charm",12,"安撫目擊學生").ok?(ae(n,-2,"直播被關掉"),ke(`他放下手機，反覆道歉。

你看著他跑遠，慶幸自己還記得怎麼對人說話。`)):(ae(n,7,"直播片段開始流傳"),St(`他越退越遠，鏡頭始終對著你。

等你離開時，那支影片已經有三千次觀看。`))},{id:"erase",label:"用顯現抹掉影片。",hint:"需要記憶篡改或灰燼領域",requires:n=>pi(n,"memory","ash"),apply:n=>(en(n),ae(n,-6,"你抹除了影片與記憶"),Pe(`你讓他的手機黑屏三秒。

再亮起時，相簿裡什麼都沒有。

他愣在原地，然後慢慢放下手。`))},{id:"threat",label:"威脅他。",hint:"警戒指數 +5／羈絆 -?",apply:n=>(ae(n,5,"你的威脅被路人聽見"),Ne(n,2),St(`你說出那句話時，自己都覺得陌生。

他跑了。

但他的手機還留在地上，錄影鍵亮著。`))}]},{id:"r_stray",at:0,random:!0,chapter:"插曲",title:"同類",scene:"alley",text:`一個十六、七歲的男孩縮在自動販賣機旁邊。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。我只是想回家。」

終端顯示：超越者，刻印 3。`,choices:[{id:"help",label:"幫他藏起來。",hint:"侵蝕 -6／羈絆感／情報 +1",apply:n=>(Ne(n,-6,"你幫一個陌生人藏身"),vt(n,1,"男孩告訴你一條裏八咫的路線"),n.player.flags.helped_stray=!0,ke(`你把他帶到車站置物櫃，給了他一點錢。

「往北走。不要用顯現。不要相信穿西裝的人。」

他點頭，跑進人群。

你不知道他能不能活下來。`))},{id:"kill",label:"完成你的工作。",hint:"刻印 +10／警戒指數 +6",apply:n=>(Lt(n,10,"你結束了一個新生的超越者"),ae(n,6,"販賣機旁留下血跡"),n.player.killsOverman+=1,Ne(n,3,"你沒有猶豫"),it(`他沒有反抗。

甚至在你動手之前，就閉上了眼睛。

終端震動。刻印 +10。

你把他放進販賣機後面的空隙，用紙箱蓋住。`))},{id:"ignore",label:"假裝沒看見。",hint:"侵蝕 +2",apply:n=>(Ne(n,2),Pe(`你走過去。

他在背後叫你。「等等！你知道怎麼離開這裡嗎？」

你沒有回頭。`))}]},{id:"r_checkpoint",at:0,random:!0,chapter:"插曲",title:"臨檢",scene:"street",text:`前方路口拉起封鎖線。兩名警察逐一盤查行人，桌上放著一臺讀取終端的機器。

你的終端沒有違規紀錄，但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,choices:[{id:"bluff",label:"拿出普通上班族的口氣應對。",hint:"魅力檢定 DC 13",apply:n=>Tt(n,"charm",13,"應付警方臨檢").ok?(ae(n,-2,"你順利通過臨檢"),ke(`警察看了一眼你的證件，揮手放行。

「早點回家。」他說。

你點頭。這座城市裡，還有人以為你有家。`)):(ae(n,7,"你的證件被標記"),St(`機器響了一聲。

警察抬頭看你。「先生，跟我們來一下。」

你退後一步，鑽進巷子。`))},{id:"sneak",label:"繞路。走後巷。",hint:"敏捷檢定 DC 12",apply:n=>Tt(n,"reflex",12,"避開臨檢").ok?(ae(n,-1),ke(`你翻過一道矮牆，從洗衣店後門穿出去。

封鎖線被你甩在身後。`)):(ae(n,4,"你被發現繞路"),Sn(n,1,"你從牆上摔下來"),St(`你落地時踩到鐵皮。

兩束手電筒同時照過來。你拼命跑，身後的哨聲越來越遠。`))},{id:"erase",label:"用顯現讓機器讀不到你。",hint:"顯現／警戒指數 -5",apply:n=>(en(n),ae(n,-5,"你幹擾了臨檢設備"),Pe(`機器螢幕閃了一下，顯示「讀取錯誤」。

警察拍了拍機器，皺眉。「又壞了。」

他讓你過去了。`))}]},{id:"r_bond_danger",at:0,random:!0,chapter:"插曲",title:"被盯上的人",condition:n=>n.player.surveillance>=9&&n.bonds.some(e=>e.alive),scene:"alley",text:n=>`你收到一張照片。

${n.bonds.filter(t=>t.alive).sort((t,i)=>i.level-t.level)[0].name}站在平常會出現的地方，身後有一輛黑色廂型車。

照片下面只有一行字：

「協議期間，請保持距離。
下一次，不會只是照片。」

裏八咫。

他們在提醒你，羈絆不是弱點，是抵押品。`,choices:n=>[{id:"protect",label:"立刻去見他／她，把監視引開。",hint:"警戒指數 +8／監視 -6／羈絆 +1",apply:e=>{const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Xa(e,t.id,1),ae(e,8,"你把裏八咫的注意力引回自己身上"),e.player.surveillance=Math.max(0,e.player.surveillance-6),it(`你故意走進便利商店的監視範圍，對著鏡頭比了一個手勢。

${t.name}看見你，愣了一下。

「你怎麼——」

「不要跟我說話。」你說。「假裝不認識我。」

你轉身離開。裏八咫的車跟上來了。`)}},{id:"cut",label:"刪掉所有聯絡方式。現在。",hint:"羈絆 -2／侵蝕 +6／監視 -4",apply:e=>{e.player.surveillance=Math.max(0,e.player.surveillance-4);const t=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return Xa(e,t.id,-2),Ne(e,6,"你親手刪掉最後幾條線"),St(`你把通訊錄一個一個刪掉。

刪到最後一個名字時，手指停了很久。

最後你還是按了下去。

世界變得很安靜。`)}},{id:"bait",label:"把裏八咫的車引向別的超越者。",hint:"智力檢定 DC 14／成功監視大降",apply:e=>Tt(e,"intellect",14,"誤導裏八咫的監視小組").ok?(e.player.surveillance=Math.max(0,e.player.surveillance-8),ae(e,2,"你把監視小組引向別處"),ke(`你讓裏八咫的車跟著一輛錯誤的計程車開了三個街區。

照片不會再來了。至少今晚不會。`)):(ae(e,5,"裏八咫識破你的誤導"),St(`黑色廂型車在路口停下。

車窗降下一半，有人朝你點了點頭。

他們知道你在做什麼。`))}]},{id:"r_collapse",at:0,random:!0,chapter:"插曲",title:"你在哪裡",condition:n=>n.player.encroachment>=70,scene:"alley",text:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：「跳下去就不痛了。」

那聲音很像你自己。`,choices:[{id:"hold",label:"抓緊欄杆，數到一百。",hint:"意志檢定 DC 16",apply:n=>Tt(n,"will",16,"抵抗侵蝕的低語",pi(n,"limit")?2:0).ok?(Ne(n,-5,"你把自己拉回天橋上"),ke(`你數到八十七時，欄杆恢復了。

你跌坐在人行道上，嘔吐。

但你在這裡。`)):(Ne(n,6,"你差一點放手"),n.player.collapse+=1,St(`你回過神時，自己已經翻過欄杆。

一隻手抓住你的外套。

是個不認識的上班族。「你還好嗎？」

你點頭。你不好。`))},{id:"call",label:"打給羈絆者。",hint:"侵蝕 -12",apply:n=>{const e=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];if(!e)return St(`通訊錄是空的。

你把手機放回口袋，自己走下天橋。`);const t=Ja(n,e.id);return ke(t+`

「你在哪裡？」她問。

「天橋。」你說。「現在沒事了。」`)}},{id:"jump",label:"鬆手。",hint:"侵蝕 +15／肉體 -4",apply:n=>(Ne(n,15,"你向侵蝕讓步"),Sn(n,4,"你從天橋墜落"),it(`你沒有死。

顯現在落地前一刻接管了身體。

你躺在破碎的柏油路面上，聽見自己的骨頭重新排列。

路人尖叫。你站起來，走了。`))}]},{id:"r_blackmarket",at:0,random:!0,chapter:"插曲",title:"黑市",scene:"docks",text:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有——」他敲了敲其中一個終端，「上一個客人的運氣。」`,choices:[{id:"buy_med",label:"用刻印換醫療補給。",hint:"刻印 -3／肉體全滿",requires:n=>n.player.marks>=3,apply:n=>(n.player.marks-=3,pa(n,99,"黑市醫療補給"),Le(n,"action","黑市交易：刻印 -3。"),ke(`他把一組沒有標籤的點滴掛在鐵架上。

「十分鐘。」他說。「你會覺得自己重新出生一次。」

他沒有說謊。`))},{id:"buy_id",label:"用刻印換偽造通行證。",hint:"刻印 -4／解鎖逃亡路線",requires:n=>n.player.marks>=4,apply:n=>(n.player.marks-=4,n.player.flags.exit_route=!0,ae(n,-5,"你取得偽造通行證"),ke(`通行證上的照片是別人的，名字也是。

但條碼是真的。

「往北。」男人說。「別回頭。」`))},{id:"buy_armor",label:"用刻印換結晶外殼。",hint:"刻印 -6／AC 基礎 14／敏捷上限 +1",requires:n=>n.player.marks>=6,apply:n=>(n.player.marks-=6,Xd(n,"crystal","你買下死者的結晶外殼"),Pe(`外殼貼上胸口時，你聽見一個不屬於自己的呼吸聲。

「上一個客人留下的。」男人說。「他很安靜。」`))},{id:"rob",label:"搶走他的貨。",hint:"敏捷檢定 DC 15／風險",apply:n=>Tt(n,"reflex",15,"搶劫黑市商人").ok?(n.player.flags.exit_route=!0,pa(n,4,"黑市補給"),ae(n,6,"黑市發生搶案"),it(`你抓起兩組補給和通行證就跑。

身後傳來防毒面具下的笑聲。

「你會後悔的。」`)):(Sn(n,3,"黑市的保鑣圍住你"),ae(n,4,"黑市發生衝突"),St(`冰櫃後面走出三個人。

你打倒了兩個，第三個在你背上留下了一道電擊燒傷。`))},{id:"leave",label:"不交易，離開。",hint:"情報 +1",apply:n=>(vt(n,1,"你記住了黑市的位置"),Pe(`你退出去，記下冷凍倉庫的編號。

以後也許用得上。`))}]},{id:"r_supply",at:0,random:!0,chapter:"插曲",title:"補給空投",scene:"docks",text:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，上面的編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條：

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。
——裏八咫」

紙條下面壓著一支鎮靜劑和一枚刻印晶片。`,choices:[{id:"take",label:"拿走補給。",hint:"刻印 +3／警戒指數 +3",apply:n=>(Lt(n,3,"你收下裏八咫的刻印晶片"),ae(n,3,"你被裏八咫標記為配合對象"),Pe(`晶片插進終端，刻印 +3。

鎮靜劑你沒有用。你不想欠他們更多。`))},{id:"destroy",label:"踩碎晶片，留下鎮靜劑。",hint:"警戒指數 -3／侵蝕 -4",apply:n=>(ae(n,-3,"你拒絕了裏八咫的施捨"),Ne(n,-4,"你告訴自己還能選"),ke(`你把晶片踩碎。

碎片在雨裡閃了一下，像一顆很小的星星。

鎮靜劑你留下了。以備不時之需。`))},{id:"trace",label:"追蹤無人機的來源。",hint:"感知檢定 DC 14／情報 +2",apply:n=>Tt(n,"perception",14,"追蹤裏八咫無人機").ok?(vt(n,2,"你找到裏八咫的臨時指揮點"),ae(n,2,"你靠近了裏八咫的指揮點"),ke(`無人機往港區飛。

你跟著它，找到一棟沒有招牌的倉庫。

門口停著三輛黑色廂型車。`)):(ae(n,4,"你追丟了無人機"),St(`無人機升高，消失在雲層裡。

你站在空蕩的碼頭上，手裡只剩一張紙條。`))}]}];function uv(n){return!n.manifestOffers||n.manifestOffers.length===0?[{id:"manifest_hold",label:"壓抑這次分裂。",hint:"不取得新顯現／侵蝕 -3",apply:e=>(Ne(e,-3,"你壓抑了顯現的增生"),Pe(`你把它壓回骨頭裡。

它沒有消失，只是暫時安靜了。`))}]:n.manifestOffers.map(e=>{const t=ha.get(e);return t?{id:`pick_${e}`,label:`${t.name}／${t.type}`,hint:`${t.passive} ${t.active}`,apply:i=>(i.player.manifested.push(e),i.manifestOffers=[],Le(i,"story",`顯現增生：「${t.name}」。${t.passive}`),ke(`新的顯現沿著舊的傷口長出來。

你獲得了「${t.name}」。

${t.tagline}

它會留下來，直到你不再是現在的你。`))}:{id:`pick_${e}`,label:e,hint:"未知顯現",apply:i=>Pe("什麼都沒有發生。")}})}function $s(n,e,t,i){return{id:n,at:0,chapter:"顯現",title:t,scene:"alley",condition:a=>a.player.encroachment>=e&&!a.eventsDone.includes(n),text:i,choices:a=>uv(a)}}const hv=[$s("manifest_35",35,"第一次分裂",`侵蝕率突破 35%。

你在洗手台的鏡子裡看見自己的眼睛多了一層顏色。

不是血絲，是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字：

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。它們都像你，又都不完全是你。`),$s("manifest_60",60,"第二次分裂",`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。它只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。不確定是城市的，還是你的。`),$s("manifest_85",85,"第三次分裂",`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇：

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`)],Vo=[B_,k_,z_,G_,H_,V_,W_,$_,X_,q_,Y_,K_,Z_,J_,Q_,j_,ev,tv,nv,iv,lv,av,rv,sv,ov,cv,...hv],Qd=dv,gl=new Map([...Vo,...Qd].map(n=>[n.id,n]));function jd(n,e){n.phase!=="play"||n.pending||(n.stance=e)}function fv(n,e){n.phase==="play"&&n.bonds.some(t=>t.id===e&&t.alive)&&(n.contactTarget=e,n.stance="contact")}function Wo(n,e){[0,1,2,4,8].includes(e)&&(n.speed=e)}function pv(n){for(const e of Vo)if(!(e.random||n.eventsDone.includes(e.id))&&e.at===n.hour&&(!e.condition||e.condition(n)))return e;for(const e of Vo)if(!(e.random||n.eventsDone.includes(e.id))&&e.at<n.hour&&e.condition&&e.condition(n))return e;return null}function mv(n){const e=Qd.filter(t=>!n.eventsDone.includes(t.id)&&(!t.condition||t.condition(n)));return e.length?e[jt(n,0,e.length-1)]:null}function _l(n){if(n.phase!=="play"||n.pending||n.battle||n.ending)return;if(n.hour>=kd){Xs(n,gl.get("closing"));return}n.hour+=1,gv(n);const e=pv(n);if(e){Xs(n,e),qs(n);return}if(n.hour>=n.randomNextHour){const t=mv(n);if(t){Xs(n,t),n.randomNextHour=n.hour+jt(n,5,9),qs(n);return}n.randomNextHour=n.hour+3}xv(n),qs(n)}function gv(n){for(const e of n.rivals)e.status==="active"&&(e.marks=Math.round((e.marks+e.rate)*10)/10)}function Xs(n,e){if(n.pending={id:e.id},e.id.startsWith("manifest_")&&(!n.manifestOffers||n.manifestOffers.length===0)&&y_(n),e.id==="tetsu_dead"){const t=n.rivals.find(i=>i.id==="tetsu");t&&(t.status="dead",t.note="死在第七號碼頭。刻印被裏八咫回收。")}if(e.id==="kurokawa_arrested"){const t=n.rivals.find(i=>i.id==="kurokawa");t&&(t.status="arrested",t.note="被神田隼人逮捕。刻印全數回收。")}if(e.id==="kurokawa_massacre"){const t=n.rivals.find(i=>i.id==="kurokawa");t&&n.player.flags.kurokawa_defeated&&(t.status="dead",t.note="倒在常夜中央通。至死都在笑。")}if(e.id==="ayase_proposal"){const t=n.rivals.find(i=>i.id==="ayase");t&&n.player.flags.ayase_dead&&(t.status="dead")}}function qs(n){if(n.phase==="play"&&(n.player.encroachment>=100&&_v(n),n.phase==="play")){if(n.hour>=48&&(!n.player.wanted&&n.player.heat>=70&&(n.player.wanted=!0,n.player.wantedAt=n.hour,Le(n,"danger","神田隼人已將你列為指名手配。包圍網開始收縮。")),n.player.wanted&&n.player.heat<35&&(n.player.wanted=!1,Le(n,"system","警戒指數降到閾值以下。神田暫時撤回對你的直接追捕。"))),n.hour===24||n.hour===48||n.hour===60){const e=Qn(n);Le(n,"rival",`排名更新：第 ${e.rank}／${e.total}。領先者 ${e.list[0].name}（${Math.floor(e.list[0].marks)} 刻印）。`)}vv(n)}}function _v(n){const e=15+Math.floor((n.player.encroachment-100)/5);Tt(n,"will",e,"抵抗侵蝕失控",hi(n).has("will")?2:0).ok?Le(n,"bond","你把那個聲音壓回去了。至少這一小時。"):(n.player.collapse+=1,Le(n,"danger",`失控 ${n.player.collapse}/3。你的身體做了你不記得的事。`),n.player.collapse>=3&&Qt(n,"monster"))}function vv(n){n.player.heat>=70&&!n.player.flags.warn70&&(n.player.flags.warn70=!0,Le(n,"danger",n.hour>=48?"警戒指數 70：神田的檔案上出現了你的代號。":"警戒指數 70：你的代號開始在參賽者之間流傳。")),n.player.heat>=90&&!n.player.flags.warn90&&(n.player.flags.warn90=!0,Le(n,"danger","警戒指數 90：裏八咫已將你標記為優先回收對象。")),n.player.encroachment>=100&&!n.player.flags.warn100&&(n.player.flags.warn100=!0,Le(n,"danger","侵蝕率 100%：每一小時，你都要重新說服自己還是人。"))}const Hc=["城市沒有因為你的倒數而停下來。上班族撐著傘走過，沒有人抬頭。","便利商店的自動門反覆開合。店員在補貨，電視在播天氣。","遠處有警笛，但沒有往這個方向來。暫時。","雨水把牆上的塗鴉沖成一片模糊的紅。","一隻烏鴉停在電線上，歪著頭看你，像在看一份不太有趣的報告。","你經過一面玻璃，發現自己已經習慣不去看倒影。","車站廣播念著陌生的站名。每一班車都通往這座城市的其他角落。","清潔隊正在沖洗昨晚的血跡。水混著泡沫流進排水溝。","有人在騎樓下賣傘。他一個晚上沒賣出幾把，因為雨已經下得太久。","早餐店的鐵門拉開一半，蒸氣湧出來，帶著醬油和豆漿的味道。","一台提款機吐出一張收據，被風吹到你腳邊。上面的餘額不夠住一晚旅館。","兩個高中生蹲在便利商店門口分一碗關東煮。他們說話的聲音很小，笑聲很大。","你數了三個路口、四個監視器，沒有一個對著你。這讓你更不安。","醫院的急診燈亮著。門口有人抽菸，抽到一半就哭了，然後又點了一根。","計程車司機把窗搖下來問你要不要搭車。你說不用。他把窗搖回去，沒有多問。","天橋下有人在睡覺，被子是拆開的紙箱。他的呼吸很穩。"];function xv(n){const e=Ni(n);switch(n.stance){case"lie_low":{ae(n,n.player.flags?.streetwise?-4:-3,"你避開主要街道"),n.hour%2===0&&pa(n,n.player.flags?.field_medicine?2:1,"你在廢棄網咖睡了兩小時"),Le(n,"action",`你躲進${e.tag.split("・")[1]??"城市"}的陰影裡。終端上的警戒指數慢慢下降。`);break}case"hunt_normal":{Lt(n,1,"你處理了一個落單的普通人"),ae(n,5,"屍體被發現"),n.player.killsNormal+=1,n.player.encroachment>=100&&(Lt(n,2,"你回過神時，現場已經沒有活人"),ae(n,5,"失控殺戮留下大量痕跡"),Ne(n,2)),Le(n,"action","你沒有用顯現。只是刀，和一個來不及喊出聲的人。");break}case"power_hunt":{const t=en(n),i=n.player.abilityId==="ash"||(n.player.manifested??[]).includes("ash")?3:2;Lt(n,i,"顯現獵殺完成"),ae(n,7,"顯現的殘留痕跡"),n.player.killsNormal+=1,Le(n,"action",`「${e.name}」的某一條街安靜了。刻印 +${i}，侵蝕 +${t}。`);break}case"hunt_overman":{const t=en(n),i=13+Math.floor(n.hour/30),a=Tt(n,fl(n),i,"狩獵落單超越者",pl(n));if(a.ok){const r=a.nat20?15:10;Lt(n,r,a.nat20?"你壓倒性擊殺了一名超越者":"你殺死了一名超越者"),ae(n,4,"超越者屍體被發現"),n.player.killsOverman+=1,Le(n,"action","對方的顯現在你身上留下灼痕。你拿走他的刻印，也拿走他的終端。")}else qd(n,5+Math.floor(n.hour/20),2,"超越者的反擊"),ae(n,4,"戰鬥留下血跡"),Le(n,"danger","對方比你更快。你逃走了，但傷口還在流血。");Le(n,"system",`這次狩獵消耗了 ${t} 點侵蝕。`);break}case"investigate":{const t=11+(n.player.heat>=50?2:0);Tt(n,"perception",t,"調查城市異象").ok?(vt(n,1,"你拼湊出一條線索"),ae(n,1,"你出現在不該出現的地方"),Le(n,"action","你找到了另一名超越者的移動路線，還有一張被撕掉一半的裏八咫地圖。")):(ae(n,2,"你問了太多問題"),Le(n,"action","你花了一整個小時，只確認了一件事：有人比你更早來過。"));break}case"contact":{let t=n.contactTarget;if(t||(t=n.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]?.id??null),t){const i=Ja(n,t);Le(n,"action",i)}else Le(n,"danger","你打開通訊錄，發現沒有任何一個號碼還能撥通。");break}case"destroy":{const t=en(n,6),i=n.player.abilityId==="ash"||(n.player.manifested??[]).includes("ash")?3:2;Lt(n,i,"城市破壞被折算為刻印"),ae(n,9,"大規模破壞"),Le(n,"action",`你讓一棟無人建築倒下。裏八咫把混亂記成 ${i} 枚刻印。侵蝕 +${t}。`);break}}n.hour%3===0&&Le(n,"story",Hc[(n.hour/3+n.cityId.length)%Hc.length].replace("城市",e.name))}function yv(n,e,t){if(n.phase!=="play"||!n.pending||n.pending.id!==e||n.pending.result)return;const i=gl.get(e);if(!i)return;const a=Zd(i,n).find(s=>s.id===t);if(!a||a.requires&&!a.requires(n))return;n.lastRoll=null;const r=a.apply(n);if(n.eventsDone.push(e),n.battle){n.pending=null;return}n.ending||(n.pending={id:e,result:F_(e,t,r.text),resultTone:r.tone,title:i.title})}function Sv(n){n.pending?.result&&(n.pending=null)}function vl(n){if(!n.pending||n.battle)return null;const e=gl.get(n.pending.id);if(!e)return null;const t=Zd(e,n).map(i=>({id:i.id,label:i.label,hint:i.hint,disabled:!!i.requires&&!i.requires(n)}));return{id:e.id,chapter:e.chapter,title:e.title,speaker:e.speaker,portrait:e.portrait,scene:e.scene,text:O_(e,n),choices:t,result:n.pending.result,resultTone:n.pending.resultTone}}function ma(n){const e=Math.floor(n/24)+1,t=n%24,i=`${String(t).padStart(2,"0")}:00`;return{day:e,time:i,full:`第 ${e} 天 ${i}`}}function bt(n){try{if(typeof localStorage>"u")return;localStorage.setItem("overman-erosion-city.save.v1",JSON.stringify(n))}catch{}}function xl(){var n,e,t,i,a,r,s,o,l;try{if(typeof localStorage>"u")return null;const c=localStorage.getItem("overman-erosion-city.save.v1");if(!c)return null;const d=JSON.parse(c);return!d||d.version!==1||!d.phase||d.phase==="play"&&!d.player?null:(d.creation&&((n=d.creation).mainStat??(n.mainStat=null),(e=d.creation).coreEpithet??(e.coreEpithet="未登錄的迴路"),(t=d.creation).abilityChoices??(t.abilityChoices=[]),d.creation.step==="questions"&&(!d.creation.questionIds||d.creation.questionIds.length===0)&&(d.creation.questionIds=Od(()=>Math.random())),(i=d.creation).questionIds??(i.questionIds=[])),d.player&&((a=d.player).manifested??(a.manifested=[]),(r=d.player).armorId??(r.armorId="jacket"),(s=d.player).coreEpithet??(s.coreEpithet="未登錄的迴路"),(o=d.player).mainStat??(o.mainStat=Object.keys(d.player.stats).sort((p,u)=>d.player.stats[u]-d.player.stats[p])[0]),(l=d.player).flags??(l.flags={})),d.manifestOffers??(d.manifestOffers=[]),d.battle??(d.battle=null),d.battle&&!Array.isArray(d.battle.enemies)&&(d.battle=null),d)}catch{return null}}function yl(){try{typeof localStorage<"u"&&localStorage.removeItem("overman-erosion-city.save.v1")}catch{}}function Mv(n){return Nd[n.ending??"nameless"]}const ca=document.getElementById("app");document.getElementById("fx");const eu="overman-erosion-city.settings.v1",bv="./";function Ev(){try{const n=localStorage.getItem(eu);if(n)return{muted:!1,reduceMotion:!1,...JSON.parse(n)}}catch{}return{muted:!1,reduceMotion:!1}}const Dt=Ev(),dt=new xu(Dt.muted);let Pa=null,Ys=!1;const Be={modal:null,drawer:null,toast:null,toastTimer:null,statAnimated:!1,lastEventFocus:null,logScroll:0,logNearBottom:!0};let Yr=null,O=xl()??$a(Va());O.phase==="creation"&&!O.creation.rolled&&ts(O);Dt.reduceMotion&&document.documentElement.classList.add("reduce-motion");function tu(){try{localStorage.setItem(eu,JSON.stringify(Dt))}catch{}}function Fa(n){return`${bv}art/${n}`}function ga(n){return n==="kanda"?Fa("kanda.png"):["ayase","kurokawa","shiratori","crown"].includes(n)?Fa(`${n}.webp`):Fa(`${n}.svg`)}function Rn(n){return["title","street","alley","docks"].includes(n)?Fa(`${n}.webp`):Fa(`${n}.svg`)}function Ye(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Qa(n){return n.split(/\n{2,}/).map(e=>`<p>${Ye(e).replace(/\n/g,"<br>")}</p>`).join("")}function Tv(n){return String(Math.floor(n))}function nu(n){return n>=0?`+${n}`:`${n}`}function Av(n){return nu(dl(n))}function $o(n,e="neutral"){Be.toastTimer&&window.clearTimeout(Be.toastTimer),Be.toast={text:n,tone:e},Be.toastTimer=window.setTimeout(()=>{Be.toast=null,We()},2200)}function wv(){const n=xl();return!!n&&(n.phase==="play"||n.phase==="creation"||n.phase==="ending")}function Rv(n){return n<2?"序章・黑信封":n<24?"第一夜・獵場":n<48?"第二天・侵蝕":n<60?"第三天・他到了":"終章・一擊"}function Cv(n){switch(n){case"monster":return Rn("crown");case"caught":return Rn("street");case"throne":return Rn("title");case"dead":return Rn("alley");case"escape":case"confess":return Rn("docks");default:return Rn("title")}}function Pv(n){for(let e=n.log.length-1;e>=0;e--){const t=n.log[e];if(t.kind==="story"||t.kind==="action"||t.kind==="bond")return t.text}return"城市在雨裡繼續運作。你的倒數也在繼續。"}function We(){const n=document.querySelector("[data-log]");n&&(Be.logScroll=n.scrollTop,Be.logNearBottom=n.scrollHeight-n.scrollTop-n.clientHeight<48);const e=O.phase==="title"?Dv():O.phase==="creation"?Nv():O.phase==="ending"?Wv():Fv();ca.innerHTML=e,document.body.dataset.phase=O.phase;const t=O.phase==="title"||O.phase==="creation"?0:O.player.encroachment;document.documentElement.style.setProperty("--encroach",String(Math.min(100,t))),ca.classList.toggle("encroach-high",t>=70&&O.phase==="play"),ca.classList.toggle("encroach-critical",t>=100&&O.phase==="play"),Lv(),dt.setIntensity(O.phase==="title"?0:O.player.encroachment);const i=O.phase==="ending"?"ending":O.phase!=="play"?"title":O.battle?"battle":O.player.heat>=60||O.player.encroachment>=70?"tension":"city";dt.setMood(i,Math.floor(Date.now()/75e3)%3),Iv()}function Iv(){if(O.phase!=="play")return;const n=document.querySelector("#city3d");if(n){if(!Pa){if(Ys)return;try{Pa=new K0}catch{Ys=!0;return}}try{Pa.mount(n,O.cityId,O.seed,O.player.encroachment,Dt.reduceMotion)}catch{Ys=!0,Pa?.dispose(),Pa=null}}}function Lv(){const n=document.querySelector("[data-log]");n&&(n.scrollTop=Be.logNearBottom?n.scrollHeight:Be.logScroll);const e=O.phase==="play"?vl(O):null;e?Be.lastEventFocus!==e.id+(e.result?"-r":"-c")&&(Be.lastEventFocus=e.id+(e.result?"-r":"-c"),document.querySelector(e.result?"[data-action='dismiss-result']":"[data-choice]:not([disabled])")?.focus({preventScroll:!0})):Be.lastEventFocus=null,O.phase==="creation"&&!Be.statAnimated&&(Be.statAnimated=!0,document.querySelectorAll("[data-stat-value]").forEach((t,i)=>{t.style.animationDelay=`${i*55}ms`,t.classList.add("stat-pop")})),Be.modal&&document.querySelector("[data-modal-panel] button")?.focus({preventScroll:!0})}function Dv(){const n=wv();return`
  <div class="screen title-screen">
    <div class="title-bg" style="background-image:url('${Rn("title")}')"></div>
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
  ${ns()}`}function Uv(){const n=O.creation,e=n.questionIds.length?n.questionIds:Wa.slice(0,10).map(a=>a.id),t=ul(e[n.questionIndex]??e[0])??Wa[0],i=Math.min(n.questionIndex,e.length-1);return`
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
        <p class="question-text">${Qa(t.text)}</p>
        <div class="question-options">
          ${t.options.map((a,r)=>`<button class="question-option" data-action="answer-question" data-index="${r}">
                <span class="option-letter">${r===0?"A":"B"}</span>
                <span><strong>${Ye(a.label)}</strong>${a.hint?`<small>${Ye(a.hint)}</small>`:""}</span>
              </button>`).join("")}
        </div>
      </section>
      <p class="question-note">這不是能力測驗。答案會決定你的 MBTI、背景，以及你一開始就放不下的人。</p>
    </div>
    ${ns()}
  </div>`}function Nv(){const n=O.creation;if(n.step==="questions")return Uv();const e=cl.get(n.cityId)??Ka[0],t=n.abilityId?ha.get(n.abilityId):null,i=hl.get(n.backgroundId),a=n.mainStat,r=l=>a===l?2:0,s=l=>i?.statBonus[l]??0,o=Ha.get(i?.start.armorId??"jacket")??Ha.get("jacket");return`
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
            ${Dd.map(l=>{const c=Math.min(20,n.stats[l]+r(l)+s(l)),d=a===l;return`
              <button class="stat-cell ${d?"is-main":""}" data-action="main-stat" data-stat="${l}" title="${Gc[l]}" aria-pressed="${d}">
                <div class="stat-top"><span>${di[l]}</span><em>${Av(c)}</em></div>
                <strong data-stat-value data-stat="${l}">${c}</strong>
                <div class="stat-track"><i style="width:${c/20*100}%"></i></div>
                <p>${Gc[l]}</p>
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
          <div class="city-visual" style="background-image:url('${Rn(e.scene)}')">
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
            <span>${di[e.stat]}檢定 +1</span>
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
                  <span class="mbti-chip">${n.mbti}・${l_[n.mbti]??""}</span>
                </div>
                <p class="background-tagline">${i.tagline}</p>
                <p class="background-desc">${i.description}</p>
                <div class="background-feature"><strong>特典</strong><span>${i.feature}</span></div>
                <div class="background-stats">
                  ${Object.entries(i.statBonus).map(([l,c])=>`<span>${di[l]} +${c}</span>`).join("")}
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
                    <span>${Object.entries(t.statBonus).map(([l,c])=>`${di[l]} +${c}`).join("／")||"無被動加值"}</span>
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
            <span class="mono">${O.bonds.length}</span>
          </div>
          <div class="bond-preview-list">
            ${O.bonds.map(l=>`<div class="bond-preview-row">
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
            <div><span>主屬性</span><strong>${a?di[a]+" +2":"尚未選擇"}</strong></div>
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
    ${ns()}
  </div>`}function Fv(){const n=O,e=Ni(n),t=ma(n.hour),i=M_(n.player.encroachment),a=Qn(n),r=Math.min(100,Math.round(n.player.marks/On*100)),s=Dn(n),o=n.hour>=48,l=fa(n),c=n.player;return`
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
              <div class="ac-box" title="${x_(n)}">
                <span class="micro">AC</span>
                <strong>${gi(n).value}</strong>
              </div>
              <div class="hp-box" title="肉體">
                <span class="micro">肉體</span>
                <div class="pips hp">
                  ${Array.from({length:c.maxHp},(d,p)=>`<i class="${p<c.hp?"on":""}"></i>`).join("")}
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
          <div class="core-line">${gi(n).armor.name}</div>
          <div class="speed-line">速度 <b>${wi(n)}</b>・${fi(wi(n)).name}${fi(wi(n)).fumble?`（fumble 1–${fi(wi(n)).fumble}）`:"（無 fumble）"}</div>
          ${Ho(n).length?`<div class="manifest-chips">${Ho(n).map(d=>`<span title="${Ye(d.passive)}">${d.name}</span>`).join("")}</div>`:'<div class="manifest-chips empty">尚未增生顯現</div>'}
          <div class="mini-stats">
            ${Dd.map(d=>`<span class="${d===c.mainStat?"main-stat":""}" title="${di[d]} ${la(n,d)}${d===c.mainStat?"（主屬性 +2）":""}">${di[d]}${d===c.mainStat?"★":""}<b>${la(n,d)}</b></span>`).join("")}
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
            ${Array.from({length:20},(d,p)=>`<i class="${p<Math.ceil(Math.min(100,c.encroachment)/5)?"on":""}"></i>`).join("")}
          </div>
          <div class="power-tier ${Ii(n)>0?"on":""}">${__(n)}<span>顯現等級 ${Ii(n)+1}</span></div>
          <p class="fine">
            ${c.encroachment>=100?"每小時意志檢定。失敗三次，永久怪物化。聯絡羈絆可拉回。":"使用顯現會推高侵蝕。歸零不是解脫，破百才是懸崖。"}
          </p>
        </section>

        <section class="panel paper score-card">
          <div class="score-row">
            <div>
              <span class="micro">刻印 / MARKS</span>
              <strong class="big-number">${c.marks}<small>/${On}</small></strong>
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
            <span class="tag ${o?"tag-danger":""}">${Yd(c.heat,o)}</span>
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
            ${n.bonds.map(d=>{const p=Math.max(0,6-(n.hour-d.lastContact)),u=n.contactTarget===d.id;return`
                <button class="bond-row ${u?"selected":""} ${d.alive?"":"dead"}" data-action="contact-bond" data-id="${d.id}" title="${Ye(d.description)}">
                  <span class="bond-avatar">${Ye(d.name.slice(0,1))}</span>
                  <span class="bond-info">
                    <strong>${d.name}</strong>
                    <small>${d.relation}${p>0?`・${p}h 後可聯絡`:""}</small>
                    <span class="pips bond">${Array.from({length:5},(h,_)=>`<i class="${_<d.level?"on":""}"></i>`).join("")}</span>
                  </span>
                  ${u?'<em class="bond-target">聯絡對象</em>':""}
                </button>`}).join("")}
          </div>
          <p class="fine">「聯絡」每小時最多一次，降低侵蝕，但提高裏八咫監視。</p>
        </section>
      </aside>

      <section class="stage">
        <div class="scene scene-${e.scene}">
          <div class="scene-bg" style="background-image:url('${Rn(e.scene)}')"></div>
          <div id="city3d" class="city-3d" aria-hidden="true"></div>
          <div class="scene-shade"></div>
          <div class="scene-halftone"></div>
          <div class="scene-head">
            <span class="micro">${Rv(n.hour)}</span>
            <span class="scene-clock">${t.day}日目 ${t.time}</span>
          </div>
          <div class="scene-city">${e.name}</div>
          <div class="scene-status">
            <span class="status-mark">▶</span>
            <p>${Ye(Pv(n))}</p>
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
              <h2>${Ca[n.stance].label}</h2>
              <p>${Ca[n.stance].desc}</p>
            </div>
            <span class="stance-risk">${Ca[n.stance].risk}</span>
          </div>
          <div class="stance-grid">
            ${Object.keys(Ca).map(d=>{const p=Ca[d];return`<button class="stance-btn ${n.stance===d?"active":""} ${p.tone}" data-action="set-stance" data-stance="${d}" ${n.pending?"disabled":""} title="${Ye(p.desc)}">
                  <span class="stance-icon">${p.icon}</span>
                  <span>${p.label}</span>
                  ${d==="contact"&&n.contactTarget?`<small>${Ye(n.bonds.find(h=>h.id===n.contactTarget)?.name??"")}</small>`:""}
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
        ${au(n)}
        ${ru(n)}
        <section class="panel paper log-card">
          <div class="panel-heading compact">
            <span class="micro">72 小時紀錄 / LOG</span>
            <span class="mono">${n.log.length}</span>
          </div>
          <div class="log-list" data-log>
            ${iu(n)}
          </div>
        </section>
      </aside>
    </div>
    ${Bv()}
    ${Ov()}
    ${zv()}
    ${ns()}
    ${Be.toast?`<div class="toast ${Be.toast.tone}">${Ye(Be.toast.text)}</div>`:""}
  </div>`}function iu(n,e=70){return n.log.slice(-e).map(t=>{const i=ma(t.hour);return`<div class="log-entry ${t.kind}">
        <span class="log-hour">${String(i.day).padStart(2,"0")}/${i.time}</span>
        <p>${Ye(t.text)}</p>
      </div>`}).join("")}function au(n){const e=Qn(n);return`
  <section class="panel paper rank-card">
    <div class="panel-heading compact">
      <span class="micro">刻印排名 / LEADERBOARD</span>
      <span class="mono">${e.rank}/${e.total}</span>
    </div>
    <div class="rank-list">
      ${e.list.map((t,i)=>{const a=n.rivals.find(o=>o.name===t.name),r=a?a.status:"active",s=a?.note??"你。";return`<div class="rank-row ${t.you?"you":""} ${r}">
            <span class="rank-index">${String(i+1).padStart(2,"0")}</span>
            <span class="rank-face" style="background-image:url('${ga(a?.portrait??"crown")}')"></span>
            <span class="rank-name">
              <strong>${Ye(t.name)}</strong>
              <small>${r==="active"?Ye(s).slice(0,20):r==="arrested"?"已逮捕":r==="dead"?"已死亡":"退出"}</small>
            </span>
            <strong class="rank-marks">${Tv(t.marks)}</strong>
          </div>`}).join("")}
    </div>
    <p class="fine">閉幕時排名第一且刻印達 ${On}，才能獲得赦免。</p>
  </section>`}function ru(n){const e=n.hour>=48,t=Math.min(100,n.player.heat+(n.player.wanted?20:0));return`
  <section class="panel paper kanda-card ${e?"arrived":""}">
    <div class="kanda-mini" style="background-image:url('${ga("kanda")}')"></div>
    <div class="kanda-info">
      <span class="micro">${e?"搜查一課・已抵達":"搜查一課・接近中"}</span>
      <h3>神田隼人</h3>
      <p>勝率 <strong>0.0%</strong>／最強現代智人</p>
      <div class="bar kanda"><i style="width:${t}%"></i></div>
      <small>${e?Yd(n.player.heat,!0):"他會在第四十八小時抵達。"}</small>
    </div>
    <div class="kanda-seal">無<br>顯<br>現</div>
  </section>`}function Ov(){const n=O.battle;if(!n)return"";const e=O,t=n.enemies.filter(h=>h.alive),i=n.enemies.find(h=>h.id===n.targetId&&h.alive)??t[0],a=n.unbeatable,r=Math.max(0,Math.round(e.player.hp/e.player.maxHp*100)),s=n.status==="active",o=s&&n.phase==="plot",l=s&&n.phase==="action"&&n.awaiting,c=n.status==="won"?"戰鬥勝利":n.status==="escaped"?"脫離戰鬥":"戰鬥敗北",d=fi(n.playerPlot??n.playerSpeed),p=["零","壹","貳","參","肆","伍","陸","柒"],u=`
    <div class="velocity-board">
      <div class="velocity-head"><span>VELOCITY SYSTEM</span><span>速度表 / 0–7</span></div>
      <div class="velocity-grid">
        ${ll.map((h,_)=>{const y=h.value<=n.playerSpeed,m=n.playerPlot===h.value,f=n.playerPlot===h.value,A=n.enemies.filter(R=>R.alive&&R.plot===h.value);return`<button class="velocity-cell ${m?"selected":""} ${y?"":"locked"}" data-action="${o?"battle-plot":"noop"}" data-speed="${h.value}" ${!o||!y?"disabled":""}>
            <span class="velocity-kanji">${p[_]}</span>
            <span class="velocity-num">${h.value}</span>
            <span class="velocity-en">${h.jp}</span>
            <span class="velocity-cn">${h.name}</span>
            <span class="velocity-fumble">${h.fumble?`fumble 1–${h.fumble}`:"無 fumble"}</span>
            <span class="velocity-tokens">
              ${f?'<i class="speed-token you">你</i>':""}
              ${A.map(R=>`<i class="speed-token enemy">${Ye(R.name.slice(0,1))}</i>`).join("")}
            </span>
          </button>`}).join("")}
      </div>
    </div>`;return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="戰鬥">
    <div class="battle-panel">
      <div class="battle-side">
        <div class="battle-art" style="background-image:url('${ga(i?.portrait??"crown")}')"></div>
        <div class="battle-side-shade"></div>
        <div class="battle-side-info">
          <span class="micro">${a?"不可戰勝":t.length>1?`敵對者 ${t.length} 名`:"超越者戰鬥"}</span>
          <h2>${Ye(i?.name??"戰鬥")}</h2>
          <p>${Ye(i?.title??"")}</p>
          ${a?'<div class="battle-zero">勝率 <strong>0.0%</strong></div>':""}
        </div>
      </div>
      <div class="battle-main">
        <div class="battle-top">
          <div>
            <span class="micro">第 ${n.round} 回合 / 速度上限 ${n.playerSpeed}・${fi(n.playerSpeed).name}</span>
            <h2>${t.length>1?"多對一":Ye(t[0]?.name??"戰鬥")}</h2>
          </div>
          <div class="battle-verdict ${n.status}">${s?o?"宣告速度":l?"你的行動":"敵人行動":c}</div>
        </div>

        ${u}

        <div class="battle-vitals">
          <div class="battle-vital">
            <div class="battle-vital-head"><span>${Ye(e.player.codename)}</span><strong>${e.player.hp} / ${e.player.maxHp}</strong></div>
            <div class="bar hp"><i style="width:${r}%"></i></div>
            <small>AC ${gi(e).value}・宣告 ${n.playerPlot??"—"}（fumble ${d.fumble?`1–${d.fumble}`:"無"}）</small>
          </div>
          <div class="battle-vital enemy">
            <div class="battle-vital-head"><span>${Ye(i?.name??"—")}</span><strong>${a?"∞":`${i?.hp??0} / ${i?.maxHp??0}`}</strong></div>
            <div class="bar enemy"><i style="width:${a?100:Math.max(0,Math.round((i?.hp??0)/(i?.maxHp||1)*100))}%"></i></div>
            <small>AC ${i?.ac??0}・速度上限 ${i?.speed??0}・宣告 ${i?.plot??"?"}</small>
          </div>
        </div>

        <div class="battle-enemy-list">
          ${n.enemies.map(h=>`<button class="battle-enemy ${h.alive?"":"down"} ${h.id===i?.id?"targeted":""}" data-action="battle-target" data-id="${h.id}" ${!l||!h.alive?"disabled":""}>
                <span class="battle-enemy-face" style="background-image:url('${ga(h.portrait)}')"></span>
                <span class="battle-enemy-name"><strong>${Ye(h.name)}</strong><small>速度 ${h.speed}・宣告 ${h.plot??"?"}・AC ${h.ac}</small></span>
                <span class="battle-enemy-hp">${h.alive?h.unbeatable?"∞":`${h.hp}/${h.maxHp}`:"倒下"}</span>
              </button>`).join("")}
        </div>

        <div class="battle-log">
          ${n.log.slice(-12).map(h=>`<p class="${h.tone}">${Ye(h.text)}</p>`).join("")}
        </div>

        ${s?o?`<div class="battle-plot-panel">
                  <div class="plot-copy">
                    <span class="micro">PLOT / 暗盤宣告</span>
                    <strong>${n.playerPlot===null?"選擇本回合速度":`宣告速度 ${n.playerPlot}・${fi(n.playerPlot).name}`}</strong>
                    <small>速度愈高愈先行動，但 d20 ≤ 宣告值 會 fumble。對手的速度在你確定前不會公開。</small>
                  </div>
                  <div class="plot-actions">
                    <span class="plot-hidden">對手：???</span>
                    <button class="btn btn-primary btn-small" data-action="battle-confirm-plot" ${n.playerPlot===null?"disabled":""}>確定速度</button>
                  </div>
                </div>`:l?`<div class="battle-actions">
                    <button class="battle-action" data-action="battle-action" data-id="strike"><strong>強攻</strong><small>d20＋戰鬥／2–3 傷害・fumble 風險</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="probe"><strong>試探</strong><small>感知／下一擊 +2・低傷害</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="guard"><strong>防禦</strong><small>AC +3／回復 1 肉體</small></button>
                    <button class="battle-action danger" data-action="battle-action" data-id="power"><strong>顯現</strong><small>侵蝕 +${fa(e).cost}／群體或高傷害</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="talk"><strong>交涉</strong><small>魅力／延遲對手・不穩定</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="flee"><strong>撤退</strong><small>敏捷／失敗被追擊</small></button>
                  </div>
                  <p class="battle-note">${a?"這個人沒有顯現。他不需要。所有攻擊選項的勝率都是 0.0%。":`本回合宣告速度 ${n.playerPlot}（${d.name}）：d20 若為 ${d.fumble?`1–${d.fumble}`:"——"}，行動會 fumble。點擊敵人可切換目標。`}</p>`:'<div class="battle-wait"><span class="live-dot"></span>敵人行動中……</div>':`<div class="battle-result ${n.status}">
                <span class="micro">${c}</span>
                <div class="event-text">${Qa(n.result??"戰鬥結束。")}</div>
                <button class="btn btn-primary btn-wide" data-action="battle-continue"><span>繼續</span><small>時間將恢復流動</small></button>
              </div>`}
      </div>
    </div>
  </div>`}function Bv(){const n=vl(O);if(!n)return"";const e=O,t=Ni(e),i=n.portrait?ga(n.portrait):Rn(n.scene??t.scene),a=n.id==="kanda_ambush"||n.id==="interrogation"||n.id==="last_choice"||n.id==="kanda_arrives",r=!!n.result,s=e.lastRoll;return`
  <div class="event-overlay ${r?"result-mode":""}" role="dialog" aria-modal="true" aria-label="${Ye(n.title)}">
    <div class="event-panel ${n.portrait?"portrait-centered":""}">
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
          <span class="mono">${String(ma(e.hour).day).padStart(2,"0")}日目 ${ma(e.hour).time}</span>
          ${n.portrait==="kanda"?'<span class="kanda-meta">最強現代智人</span>':""}
          ${a?'<span class="lethal">交戰評估 0.0%</span>':""}
        </div>
        <div class="event-top">
          <h2>${Ye(n.title)}</h2>
        </div>
        <div class="event-scroll">
          ${r?kv(n.result,n.resultTone??"neutral",s):`<div class="event-text">${Qa(n.text)}</div>`}
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
  </div>`}function kv(n,e,t){return`
    <div class="result-box ${e}">
      <span class="result-label">${e==="danger"?"代價":e==="good"?"結果":"之後"}</span>
      <div class="event-text">${Qa(n)}</div>
    </div>
    ${t?`<div class="roll-card ${t.success?"success":"fail"}">
            <div class="roll-die">d20<strong>${t.roll}</strong></div>
            <div class="roll-math">
              <strong>${Ye(t.label)}</strong>
              <span>${t.roll} ${nu(t.statMod)} ${t.extra>=0?"+":""}${t.extra} = <b>${t.total}</b> / DC ${t.dc}</span>
            </div>
            <span class="roll-verdict">${t.success?"成功":"失敗"}</span>
          </div>`:""}`}function zv(){if(!Be.drawer)return"";const n=O;let e="資訊",t="";return Be.drawer==="log"?(e="72 小時紀錄",t=`<div class="drawer-log">${iu(n,120)}</div>`):Be.drawer==="rank"?(e="排名與神田",t=`${au(n)}${ru(n)}`):(e="羈絆",t=`
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
  </div>`}function ns(){return Be.modal?`
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal panel paper" role="dialog" aria-modal="true" data-modal-panel>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="關閉">×</button>
        ${Be.modal==="help"?Gv():Be.modal==="about"?Hv():Vv()}
      </div>
    </div>`:""}function Gv(){return`
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
        <strong>速度表</strong>
        <span>${ll.map(n=>`${n.value} ${n.name}（${n.fumble?`1–${n.fumble}`:"無 fumble"}）`).join("／")}</span>
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
    </div>`}function Hv(){return`
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
    </div>`}function Vv(){return`
    <div class="modal-head"><span class="micro">選單 / MENU</span><h2>要放棄這一局嗎？</h2></div>
    <div class="help-body">
      <p>目前進度會保留在存檔中；你可以回到標題後再繼續。若選擇重新開始，本次存檔會被覆蓋。</p>
      <div class="restart-actions">
        <button class="btn btn-ghost" data-action="close-modal"><span>繼續遊戲</span></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
        <button class="btn btn-danger" data-action="confirm-restart"><span>重新開始</span><small>覆蓋存檔</small></button>
      </div>
      <div class="restart-meta">
        <span>存檔：${O.phase==="play"?"自動":"—"}</span>
        <span>音效：${Dt.muted?"關":"開"}</span>
        <span>動態：${Dt.reduceMotion?"減弱":"完整"}</span>
      </div>
      <div class="restart-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="toggle-mute">${Dt.muted?"開啟音效":"靜音"}</button>
        <button class="link" data-action="toggle-motion">${Dt.reduceMotion?"開啟動態":"減少動態"}</button>
      </div>
    </div>`}function Wv(){const n=O,e=Mv(n),t=Qn(n),i=Cv(n.ending);return`
  <div class="screen ending-screen tone-${e.tone}">
    <div class="ending-bg" style="background-image:url('${i}')"></div>
    <div class="ending-shade"></div>
    <div class="ending-panel">
      <div class="ending-kicker"><span>PROJECT IGNIS・閉幕</span><span class="mono">${kd}:00:00</span></div>
      <div class="ending-stamp">${e.stamp}</div>
      <h1>${e.title}</h1>
      <h2>${e.subtitle}</h2>
      <div class="ending-text">${Qa(n.endingText??e.text)}</div>
      <div class="ending-stats">
        <div><span>刻印</span><strong>${n.player.marks}</strong></div>
        <div><span>排名</span><strong>${t.rank}<small>/${t.total}</small></strong></div>
        <div><span>侵蝕</span><strong>${n.player.encroachment}%</strong></div>
        <div><span>警戒指數</span><strong>${n.player.heat}</strong></div>
        <div><span>羈絆</span><strong>${Dn(n)}</strong></div>
        <div><span>城市</span><strong class="small">${Ni(n).name}</strong></div>
      </div>
      <div class="ending-actions">
        <button class="btn btn-primary" data-action="new-game"><span>再抽一次</span><small>新的能力值、核心顯現與城市</small></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
      </div>
      <p class="ending-foot">你走了 ${n.player.killsNormal} 條普通人的命，${n.player.killsOverman} 個同類。神田隼人從未敗北。</p>
    </div>
    <div class="ending-side">
      <div class="ending-side-art" style="background-image:url('${ga("kanda")}')"></div>
      <p>「你活下來了。<br>這不代表你贏了。」</p>
      <span>— 神田隼人</span>
    </div>
  </div>`}function Vc(){const n=Yr??Va();Yr=null,yl(),O=$a(n),O.phase="creation",Hd(O),Be.statAnimated=!1,bt(O),dt.unlock(),dt.sfx("confirm"),We()}function $v(){const n=xl();if(!n){$o("找不到存檔","danger"),We();return}O=n,O.phase==="creation"&&!O.creation.rolled&&ts(O),O.phase==="play"&&(O.speed=1),dt.unlock(),We()}function Xv(){if(!O.creation.abilityId){$o("請先選擇一項顯現","danger");return}if(O.creation.codename.trim()||(O.creation.codename="鴉"),!O.creation.mainStat){$o("請先選擇一項主屬性","danger");return}$d(O),bt(O),dt.unlock(),dt.sfx("confirm"),We()}function su(n,e){yv(O,n,e),bt(O),O.ending?dt.sfx("danger"):dt.sfx("dice"),We()}function ou(){Sv(O),O.speed===0&&(O.speed=1),bt(O),dt.sfx("click"),We()}function qv(){O.phase!=="play"||O.pending||(_l(O),bt(O),dt.sfx(O.ending?"danger":"click"),We())}function Yv(){yl(),O=$a(Va()),Be.modal=null,Be.drawer=null,O.phase="title",We()}function Kv(){Dt.muted=!Dt.muted,tu(),dt.setMuted(Dt.muted),Dt.muted||dt.unlock(),We()}function Zv(){Dt.reduceMotion=!Dt.reduceMotion,document.documentElement.classList.toggle("reduce-motion",Dt.reduceMotion),tu(),We()}ca.addEventListener("click",n=>{const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action;if(t&&!e.hasAttribute("disabled"))switch(t){case"new-game":Vc();break;case"continue":$v();break;case"start-run":Xv();break;case"select-ability":{O.creation.abilityId=e.dataset.id??null,bt(O),dt.unlock(),dt.sfx("click"),We();break}case"answer-question":{h_(O,Number(e.dataset.index??0)),Be.statAnimated=!1,bt(O),dt.sfx(O.creation.step==="roll"?"confirm":"click"),We();break}case"restart-questions":{Hd(O),O.creation.codename=O.creation.codename||"鴉",bt(O),dt.sfx("click"),We();break}case"reroll-stats":{f_(O),Be.statAnimated=!1,bt(O),dt.sfx("dice"),We();break}case"main-stat":{const i=e.dataset.stat;p_(O,i),bt(O),dt.sfx("click"),We();break}case"set-stance":{const i=e.dataset.stance;jd(O,i),bt(O),dt.sfx("click"),We();break}case"contact-bond":{const i=e.dataset.id;i&&(fv(O,i),bt(O),dt.sfx("bond"),We());break}case"speed":{Wo(O,Number(e.dataset.speed??1)),bt(O),dt.sfx("click"),We();break}case"toggle-pause":{Wo(O,O.speed>0?0:1),bt(O),dt.sfx("click"),We();break}case"advance":qv();break;case"choose":su(e.dataset.event??"",e.dataset.choice??"");break;case"battle-target":{P_(O,e.dataset.id??""),We();break}case"battle-plot":{R_(O,Number(e.dataset.speed??0)),bt(O),dt.sfx("click"),We();break}case"battle-confirm-plot":{C_(O),bt(O),dt.sfx("confirm"),We();break}case"battle-action":{I_(O,e.dataset.id??""),bt(O),dt.sfx("danger"),We();break}case"battle-continue":{L_(O),bt(O),dt.sfx("confirm"),We();break}case"dismiss-result":ou();break;case"modal":Be.modal=e.dataset.modal??null,Be.drawer=null,We();break;case"close-modal":Be.modal=null,We();break;case"confirm-restart":Be.modal=null,Vc();break;case"go-title":Yv();break;case"drawer":Be.drawer=e.dataset.drawer??null,We();break;case"close-drawer":Be.drawer=null,We();break;case"toggle-mute":Kv();break;case"toggle-motion":Zv();break}});ca.addEventListener("input",n=>{const e=n.target;e.id==="codename"&&O.phase==="creation"&&(O.creation.codename=e.value.slice(0,8))});ca.addEventListener("change",()=>{O.phase==="creation"&&bt(O)});document.addEventListener("keydown",n=>{if(n.key==="Escape"){Be.modal?(Be.modal=null,We()):Be.drawer&&(Be.drawer=null,We());return}if(n.code==="Space"&&O.phase==="play"&&!O.pending){const e=n.target.tagName;if(e==="INPUT"||e==="TEXTAREA"||e==="BUTTON")return;n.preventDefault(),Wo(O,O.speed>0?0:1),bt(O),We()}});function lu(){dt.unlock()}document.addEventListener("pointerdown",lu,{once:!0});document.addEventListener("keydown",lu,{once:!0});let Wc=performance.now(),Ir=0;function cu(n){const e=Math.min(250,n-Wc);if(Wc=n,O.phase==="play"&&!O.pending&&!O.battle&&O.speed>0&&!Be.modal){Ir+=e*O.speed;let t=0;for(;Ir>=Go&&O.phase==="play"&&!O.pending&&t++<12&&(Ir-=Go,_l(O),bt(O),We(),!O.ending););}else Ir=0;requestAnimationFrame(cu)}function Ei(){const n=O.phase==="play"?vl(O):null,e=O.phase==="play"?Qn(O):null;return{phase:O.phase,hour:O.hour,day:ma(O.hour).day,time:ma(O.hour).time,city:O.phase==="play"?Ni(O).name:null,ability:O.phase==="play"?fa(O).name:O.creation.abilityId,marks:O.phase==="play"?O.player.marks:null,encroachment:O.phase==="play"?O.player.encroachment:null,heat:O.phase==="play"?O.player.heat:null,hp:O.phase==="play"?`${O.player.hp}/${O.player.maxHp}`:null,armor:O.phase==="play"?gi(O).armor.name:null,ac:O.phase==="play"?gi(O).value:null,mainStat:O.phase==="play"?O.player.mainStat:O.creation.mainStat,manifested:O.phase==="play"?O.player.manifested:[],bonds:O.phase==="play"?Dn(O):null,rank:e?.rank??null,ending:O.ending,battle:O.battle?{enemies:O.battle.enemies.map(t=>({name:t.name,hp:t.hp,speed:t.speed,alive:t.alive})),target:O.battle.targetId,playerSpeed:O.battle.playerSpeed,status:O.battle.status,round:O.battle.round,playerHp:O.player.hp,actions:["strike","probe","guard","power","talk","flee"]}:null,pending:n?{id:n.id,title:n.title,result:n.result??null,choices:n.choices.map(t=>({id:t.id,label:t.label,disabled:t.disabled}))}:null,logCount:O.log.length}}const Jv={snapshot:Ei,reset(n){return yl(),O=$a(n??Va()),O.phase="title",Yr=null,Be.modal=null,Be.drawer=null,We(),Ei()},setSeed(n){return Yr=n,{seed:n}},step(n){const e=Math.max(1,Math.min(24,Math.round(n/Go)));let t=0;for(;t<e&&O.phase==="play"&&!O.pending;)_l(O),t++;return bt(O),We(),{...Ei(),advanced:t}},choose(n,e){return su(n,e),Ei()},dismiss(){return ou(),Ei()},setStance(n){return jd(O,n),bt(O),We(),Ei()},quickStart(n){const e=$a(n??Va());ts(e);const t=e.creation;return t.abilityId=t.abilityId??"core_array",t.mainStat=Object.keys(t.stats).sort((i,a)=>t.stats[a]-t.stats[i])[0],t.codename="測試",$d(e),O=e,bt(O),We(),Ei()}};globalThis.__OHMYGAME_PLAYTEST__=Jv;We();requestAnimationFrame(cu);
