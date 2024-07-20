(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uh(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Oe={},Ds=[],Lt=()=>{},o_=()=>!1,pl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vh=t=>t.startsWith("onUpdate:"),Je=Object.assign,Bh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},a_=Object.prototype.hasOwnProperty,de=(t,e)=>a_.call(t,e),G=Array.isArray,Ps=t=>ml(t)==="[object Map]",ry=t=>ml(t)==="[object Set]",ne=t=>typeof t=="function",$e=t=>typeof t=="string",xr=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",sy=t=>(Ne(t)||ne(t))&&ne(t.then)&&ne(t.catch),iy=Object.prototype.toString,ml=t=>iy.call(t),l_=t=>ml(t).slice(8,-1),oy=t=>ml(t)==="[object Object]",jh=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},c_=/-(\w)/g,nn=gl(t=>t.replace(c_,(e,n)=>n?n.toUpperCase():"")),u_=/\B([A-Z])/g,gs=gl(t=>t.replace(u_,"-$1").toLowerCase()),yl=gl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=gl(t=>t?`on${yl(t)}`:""),wr=(t,e)=>!Object.is(t,e),wa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ay=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},vu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},h_=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Xd;const zh=()=>Xd||(Xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?m_(r):Hh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Ne(t))return t}const f_=/;(?![^(]*\))/g,d_=/:([^]+)/,p_=/\/\*[^]*?\*\//g;function m_(t){const e={};return t.replace(p_,"").split(f_).forEach(n=>{if(n){const r=n.split(d_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ft(t){let e="";if($e(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=ft(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const g_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",y_=Uh(g_);function ly(t){return!!t||t===""}const cy=t=>!!(t&&t.__v_isRef===!0),pn=t=>$e(t)?t:t==null?"":G(t)||Ne(t)&&(t.toString===iy||!ne(t.toString))?cy(t)?pn(t.value):JSON.stringify(t,uy,2):String(t),uy=(t,e)=>cy(e)?uy(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tc(r,i)+" =>"]=s,n),{})}:ry(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:xr(e)?Tc(e):Ne(e)&&!G(e)&&!oy(e)?String(e):e,Tc=(t,e="")=>{var n;return xr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class v_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function w_(t,e=Xt){e&&e.active&&e.effects.push(t)}function b_(){return Xt}let Xr;class qh{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,w_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,kr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(__(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Nr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=hr,n=Xr;try{return hr=!0,Xr=this,this._runnings++,Zd(this),this.fn()}finally{ep(this),this._runnings--,Xr=n,hr=e}}stop(){this.active&&(Zd(this),ep(this),this.onStop&&this.onStop(),this.active=!1)}}function __(t){return t.value}function Zd(t){t._trackId++,t._depsLength=0}function ep(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)hy(t.deps[e],t);t.deps.length=t._depsLength}}function hy(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let hr=!0,wu=0;const fy=[];function kr(){fy.push(hr),hr=!1}function Nr(){const t=fy.pop();hr=t===void 0?!0:t}function Kh(){wu++}function Wh(){for(wu--;!wu&&bu.length;)bu.shift()()}function dy(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&hy(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const bu=[];function py(t,e,n){Kh();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s!=null?s:s=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s!=null?s:s=t.get(r)===r._trackId)&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&bu.push(r.scheduler)))}Wh()}const my=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},_u=new WeakMap,Zr=Symbol(""),Eu=Symbol("");function Nt(t,e,n){if(hr&&Xr){let r=_u.get(t);r||_u.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=my(()=>r.delete(n))),dy(Xr,s)}}function Ln(t,e,n,r,s,i){const o=_u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!xr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?jh(n)&&a.push(o.get("length")):(a.push(o.get(Zr)),Ps(t)&&a.push(o.get(Eu)));break;case"delete":G(t)||(a.push(o.get(Zr)),Ps(t)&&a.push(o.get(Eu)));break;case"set":Ps(t)&&a.push(o.get(Zr));break}Kh();for(const l of a)l&&py(l,4);Wh()}const E_=Uh("__proto__,__v_isRef,__isVue"),gy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xr)),tp=I_();function I_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ve(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ve)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kr(),Kh();const r=ve(this)[e].apply(this,n);return Wh(),Nr(),r}}),t}function T_(t){xr(t)||(t=String(t));const e=ve(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class yy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?F_:_y:i?by:wy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&de(tp,n))return Reflect.get(tp,n,r);if(n==="hasOwnProperty")return T_}const a=Reflect.get(e,n,r);return(xr(n)?gy.has(n):E_(n))||(s||Nt(e,"get",n),i)?a:Ot(a)?o&&jh(n)?a:a.value:Ne(a)?s?Ey(a):wl(a):a}}class vy extends yy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ss(i);if(!Hs(r)&&!ss(r)&&(i=ve(i),r=ve(r)),!G(e)&&Ot(i)&&!Ot(r))return l?!1:(i.value=r,!0)}const o=G(e)&&jh(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,r,s);return e===ve(s)&&(o?wr(r,i)&&Ln(e,"set",n,r):Ln(e,"add",n,r)),a}deleteProperty(e,n){const r=de(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xr(n)||!gy.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",G(e)?"length":Zr),Reflect.ownKeys(e)}}class S_ extends yy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const A_=new vy,C_=new S_,x_=new vy(!0);const Gh=t=>t,vl=t=>Reflect.getPrototypeOf(t);function Jo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ve(t),i=ve(e);n||(wr(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=vl(s),a=r?Gh:n?Jh:Gi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Xo(t,e=!1){const n=this.__v_raw,r=ve(n),s=ve(t);return e||(wr(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zo(t,e=!1){return t=t.__v_raw,!e&&Nt(ve(t),"iterate",Zr),Reflect.get(t,"size",t)}function np(t,e=!1){!e&&!Hs(t)&&!ss(t)&&(t=ve(t));const n=ve(this);return vl(n).has.call(n,t)||(n.add(t),Ln(n,"add",t,t)),this}function rp(t,e,n=!1){!n&&!Hs(e)&&!ss(e)&&(e=ve(e));const r=ve(this),{has:s,get:i}=vl(r);let o=s.call(r,t);o||(t=ve(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?wr(e,a)&&Ln(r,"set",t,e):Ln(r,"add",t,e),this}function sp(t){const e=ve(this),{has:n,get:r}=vl(e);let s=n.call(e,t);s||(t=ve(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ln(e,"delete",t,void 0),i}function ip(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&Ln(t,"clear",void 0,void 0),n}function ea(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ve(o),l=e?Gh:t?Jh:Gi;return!t&&Nt(a,"iterate",Zr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ta(t,e,n){return function(...r){const s=this.__v_raw,i=ve(s),o=Ps(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Gh:e?Jh:Gi;return!e&&Nt(i,"iterate",l?Eu:Zr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function k_(){const t={get(i){return Jo(this,i)},get size(){return Zo(this)},has:Xo,add:np,set:rp,delete:sp,clear:ip,forEach:ea(!1,!1)},e={get(i){return Jo(this,i,!1,!0)},get size(){return Zo(this)},has:Xo,add(i){return np.call(this,i,!0)},set(i,o){return rp.call(this,i,o,!0)},delete:sp,clear:ip,forEach:ea(!1,!0)},n={get(i){return Jo(this,i,!0)},get size(){return Zo(this,!0)},has(i){return Xo.call(this,i,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ea(!0,!1)},r={get(i){return Jo(this,i,!0,!0)},get size(){return Zo(this,!0)},has(i){return Xo.call(this,i,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ta(i,!1,!1),n[i]=ta(i,!0,!1),e[i]=ta(i,!1,!0),r[i]=ta(i,!0,!0)}),[t,n,e,r]}const[N_,O_,R_,D_]=k_();function Yh(t,e){const n=e?t?D_:R_:t?O_:N_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(de(n,s)&&s in r?n:r,s,i)}const P_={get:Yh(!1,!1)},M_={get:Yh(!1,!0)},L_={get:Yh(!0,!1)};const wy=new WeakMap,by=new WeakMap,_y=new WeakMap,F_=new WeakMap;function $_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(t){return t.__v_skip||!Object.isExtensible(t)?0:$_(l_(t))}function wl(t){return ss(t)?t:Qh(t,!1,A_,P_,wy)}function V_(t){return Qh(t,!1,x_,M_,by)}function Ey(t){return Qh(t,!0,C_,L_,_y)}function Qh(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=U_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Di(t){return ss(t)?Di(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function Hs(t){return!!(t&&t.__v_isShallow)}function Iy(t){return t?!!t.__v_raw:!1}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function B_(t){return Object.isExtensible(t)&&ay(t,"__v_skip",!0),t}const Gi=t=>Ne(t)?wl(t):t,Jh=t=>Ne(t)?Ey(t):t;class Ty{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qh(()=>e(this._value),()=>ba(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ve(this);return(!e._cacheable||e.effect.dirty)&&wr(e._value,e._value=e.effect.run())&&ba(e,4),Sy(e),e.effect._dirtyLevel>=2&&ba(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function j_(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new Ty(r,s,i||!s,n)}function Sy(t){var e;hr&&Xr&&(t=ve(t),dy(Xr,(e=t.dep)!=null?e:t.dep=my(()=>t.dep=void 0,t instanceof Ty?t:void 0)))}function ba(t,e=4,n,r){t=ve(t);const s=t.dep;s&&py(s,e)}function Ot(t){return!!(t&&t.__v_isRef===!0)}function ee(t){return Ay(t,!1)}function z_(t){return Ay(t,!0)}function Ay(t,e){return Ot(t)?t:new H_(t,e)}class H_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Gi(e)}get value(){return Sy(this),this._value}set value(e){const n=this.__v_isShallow||Hs(e)||ss(e);e=n?e:ve(e),wr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Gi(e),ba(this,4))}}function Xh(t){return Ot(t)?t.value:t}const q_={get:(t,e,n)=>Xh(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ot(s)&&!Ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cy(t){return Di(t)?t:new Proxy(t,q_)}/**
* @vue/runtime-core v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fr(t,e,n,r){try{return r?t(...r):t()}catch(s){bl(s,e,n)}}function Gt(t,e,n,r){if(ne(t)){const s=fr(t,e,n,r);return s&&sy(s)&&s.catch(i=>{bl(i,e,n)}),s}if(G(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function bl(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){kr(),fr(l,null,10,[t,o,a]),Nr();return}}K_(t,n,s,r)}function K_(t,e,n,r=!0){console.error(t)}let Yi=!1,Iu=!1;const ut=[];let yn=0;const Ms=[];let Zn=null,zr=0;const xy=Promise.resolve();let Zh=null;function Fn(t){const e=Zh||xy;return t?e.then(this?t.bind(this):t):e}function W_(t){let e=yn+1,n=ut.length;for(;e<n;){const r=e+n>>>1,s=ut[r],i=Qi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ef(t){(!ut.length||!ut.includes(t,Yi&&t.allowRecurse?yn+1:yn))&&(t.id==null?ut.push(t):ut.splice(W_(t.id),0,t),ky())}function ky(){!Yi&&!Iu&&(Iu=!0,Zh=xy.then(Oy))}function G_(t){const e=ut.indexOf(t);e>yn&&ut.splice(e,1)}function Y_(t){G(t)?Ms.push(...t):(!Zn||!Zn.includes(t,t.allowRecurse?zr+1:zr))&&Ms.push(t),ky()}function op(t,e,n=Yi?yn+1:0){for(;n<ut.length;n++){const r=ut[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ut.splice(n,1),n--,r()}}}function Ny(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>Qi(n)-Qi(r));if(Ms.length=0,Zn){Zn.push(...e);return}for(Zn=e,zr=0;zr<Zn.length;zr++){const n=Zn[zr];n.active!==!1&&n()}Zn=null,zr=0}}const Qi=t=>t.id==null?1/0:t.id,Q_=(t,e)=>{const n=Qi(t)-Qi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Oy(t){Iu=!1,Yi=!0,ut.sort(Q_);const e=Lt;try{for(yn=0;yn<ut.length;yn++){const n=ut[yn];n&&n.active!==!1&&fr(n,n.i,n.i?15:14)}}finally{yn=0,ut.length=0,Ny(),Yi=!1,Zh=null,(ut.length||Ms.length)&&Oy()}}let xt=null,_l=null;function Ma(t){const e=xt;return xt=t,_l=t&&t.type.__scopeId||null,e}function Ry(t){_l=t}function Dy(){_l=null}function Fe(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_p(-1);const i=Ma(e);let o;try{o=t(...s)}finally{Ma(i),r._d&&_p(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(t,e){if(xt===null)return t;const n=Cl(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Oe]=e[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&rr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(kr(),Gt(l,n,8,[t.el,a,t,e]),Nr())}}const er=Symbol("_leaveCb"),na=Symbol("_enterCb");function J_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{t.isMounted=!0}),Uy(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],Py={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},My=t=>{const e=t.subTree;return e.component?My(e.component):e},X_={name:"BaseTransition",props:Py,setup(t,{slots:e}){const n=ov(),r=J_();return()=>{const s=e.default&&Fy(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const f of s)if(f.type!==Mt){i=f;break}}const o=ve(t),{mode:a}=o;if(r.isLeaving)return Sc(i);const l=ap(i);if(!l)return Sc(i);let c=Tu(l,o,r,n,f=>c=f);La(l,c);const u=n.subTree,h=u&&ap(u);if(h&&h.type!==Mt&&!Hr(l,h)&&My(n).type!==Mt){const f=Tu(h,o,r,n);if(La(h,f),a==="out-in"&&l.type!==Mt)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Sc(i);a==="in-out"&&l.type!==Mt&&(f.delayLeave=(d,g,y)=>{const w=Ly(r,h);w[String(h.key)]=h,d[er]=()=>{g(),d[er]=void 0,delete c.delayedLeave},c.delayedLeave=y})}return i}}},Z_=X_;function Ly(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Tu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:w,onAppear:v,onAfterAppear:_,onAppearCancelled:k}=e,F=String(t.key),W=Ly(n,t),P=(j,se)=>{j&&Gt(j,r,9,se)},X=(j,se)=>{const pe=se[1];P(j,se),G(j)?j.every($=>$.length<=1)&&pe():j.length<=1&&pe()},ce={mode:o,persisted:a,beforeEnter(j){let se=l;if(!n.isMounted)if(i)se=w||l;else return;j[er]&&j[er](!0);const pe=W[F];pe&&Hr(t,pe)&&pe.el[er]&&pe.el[er](),P(se,[j])},enter(j){let se=c,pe=u,$=h;if(!n.isMounted)if(i)se=v||c,pe=_||u,$=k||h;else return;let ue=!1;const Pe=j[na]=et=>{ue||(ue=!0,et?P($,[j]):P(pe,[j]),ce.delayedLeave&&ce.delayedLeave(),j[na]=void 0)};se?X(se,[j,Pe]):Pe()},leave(j,se){const pe=String(t.key);if(j[na]&&j[na](!0),n.isUnmounting)return se();P(f,[j]);let $=!1;const ue=j[er]=Pe=>{$||($=!0,se(),Pe?P(y,[j]):P(g,[j]),j[er]=void 0,W[pe]===t&&delete W[pe])};W[pe]=t,d?X(d,[j,ue]):ue()},clone(j){const se=Tu(j,e,n,r,s);return s&&s(se),se}};return ce}function Sc(t){if(El(t))return t=$n(t),t.children=null,t}function ap(t){if(!El(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ne(n.default))return n.default()}}function La(t,e){t.shapeFlag&6&&t.component?La(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Et?(o.patchFlag&128&&s++,r=r.concat(Fy(o.children,e,a))):(e||o.type!==Mt)&&r.push(a!=null?$n(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ue(t,e){return ne(t)?(()=>Je({name:t.name},e,{setup:t}))():t}const _a=t=>!!t.type.__asyncLoader,El=t=>t.type.__isKeepAlive;function eE(t,e){$y(t,"a",e)}function tE(t,e){$y(t,"da",e)}function $y(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Il(e,r,n),n){let s=n.parent;for(;s&&s.parent;)El(s.parent.vnode)&&nE(r,e,n,s),s=s.parent}}function nE(t,e,n,r){const s=Il(e,t,r,!0);Rt(()=>{Bh(r[e],s)},n)}function Il(t,e,n=st,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kr();const a=Eo(n),l=Gt(e,n,t,o);return a(),Nr(),l});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=st)=>{(!Al||t==="sp")&&Il(t,(...r)=>e(...r),n)},rE=Kn("bm"),qe=Kn("m"),sE=Kn("bu"),iE=Kn("u"),Uy=Kn("bum"),Rt=Kn("um"),oE=Kn("sp"),aE=Kn("rtg"),lE=Kn("rtc");function cE(t,e=st){Il("ec",t,e)}const Vy="components";function Te(t,e){return hE(Vy,t,!0,e)||t}const uE=Symbol.for("v-ndc");function hE(t,e,n=!0,r=!1){const s=xt||st;if(s){const i=s.type;if(t===Vy){const a=rI(i,!1);if(a&&(a===e||a===nn(e)||a===yl(nn(e))))return i}const o=lp(s[t]||i[t],e)||lp(s.appContext[t],e);return!o&&r?i:o}}function lp(t,e){return t&&(t[e]||t[nn(e)]||t[yl(nn(e))])}function Ac(t,e,n,r){let s;const i=n&&n[r];if(G(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Su=t=>t?av(t)?Cl(t):Su(t.parent):null,Pi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Su(t.parent),$root:t=>Su(t.root),$emit:t=>t.emit,$options:t=>tf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ef(t.update)}),$nextTick:t=>t.n||(t.n=Fn.bind(t.proxy)),$watch:t=>FE.bind(t)}),Cc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&de(t,e),fE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cc(r,e))return o[e]=1,r[e];if(s!==Oe&&de(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,i[e];if(n!==Oe&&de(n,e))return o[e]=4,n[e];Au&&(o[e]=0)}}const u=Pi[e];let h,f;if(u)return e==="$attrs"&&Nt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Oe&&de(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cc(s,e)?(s[e]=n,!0):r!==Oe&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Oe&&de(t,o)||Cc(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(Pi,o)||de(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cp(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Au=!0;function dE(t){const e=tf(t),n=t.proxy,r=t.ctx;Au=!1,e.beforeCreate&&up(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:y,deactivated:w,beforeDestroy:v,beforeUnmount:_,destroyed:k,unmounted:F,render:W,renderTracked:P,renderTriggered:X,errorCaptured:ce,serverPrefetch:j,expose:se,inheritAttrs:pe,components:$,directives:ue,filters:Pe}=e;if(c&&pE(c,r,null),o)for(const we in o){const _e=o[we];ne(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);Ne(we)&&(t.data=wl(we))}if(Au=!0,i)for(const we in i){const _e=i[we],un=ne(_e)?_e.bind(n,n):ne(_e.get)?_e.get.bind(n,n):Lt,Lr=!ne(_e)&&ne(_e.set)?_e.set.bind(n):Lt,he=K({get:un,set:Lr});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(a)for(const we in a)By(a[we],r,n,we);if(l){const we=ne(l)?l.call(n):l;Reflect.ownKeys(we).forEach(_e=>{Qt(_e,we[_e])})}u&&up(u,t,"c");function Ie(we,_e){G(_e)?_e.forEach(un=>we(un.bind(n))):_e&&we(_e.bind(n))}if(Ie(rE,h),Ie(qe,f),Ie(sE,d),Ie(iE,g),Ie(eE,y),Ie(tE,w),Ie(cE,ce),Ie(lE,P),Ie(aE,X),Ie(Uy,_),Ie(Rt,F),Ie(oE,j),G(se))if(se.length){const we=t.exposed||(t.exposed={});se.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:un=>n[_e]=un})})}else t.exposed||(t.exposed={});W&&t.render===Lt&&(t.render=W),pe!=null&&(t.inheritAttrs=pe),$&&(t.components=$),ue&&(t.directives=ue)}function pE(t,e,n=Lt){G(t)&&(t=Cu(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Qe(s.from||r,s.default,!0):i=Qe(s.from||r):i=Qe(s),Ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function up(t,e,n){Gt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function By(t,e,n,r){const s=r.includes(".")?tv(n,r):()=>n[r];if($e(t)){const i=e[t];ne(i)&&Tn(s,i)}else if(ne(t))Tn(s,t.bind(n));else if(Ne(t))if(G(t))t.forEach(i=>By(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Tn(s,i,t)}}function tf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,e,o)),Ne(e)&&i.set(e,l),l}function Fa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fa(t,i,n,!0),s&&s.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mE={data:hp,props:fp,emits:fp,methods:_i,computed:_i,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:_i,directives:_i,watch:yE,provide:hp,inject:gE};function hp(t,e){return e?t?function(){return Je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function gE(t,e){return _i(Cu(t),Cu(e))}function Cu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?Je(Object.create(null),t,e):e}function fp(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Je(Object.create(null),cp(t),cp(e!=null?e:{})):e}function yE(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function jy(){return{app:null,config:{isNativeTag:o_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vE=0;function wE(t,e){return function(r,s=null){ne(r)||(r=Je({},r)),s!=null&&!Ne(s)&&(s=null);const i=jy(),o=new WeakSet;let a=!1;const l=i.app={_uid:vE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iI,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=q(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Cl(f.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Mi;Mi=l;try{return c()}finally{Mi=u}}};return l}}let Mi=null;function Qt(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Qe(t,e,n=!1){const r=st||xt;if(r||Mi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}const zy={},Hy=()=>Object.create(zy),qy=t=>Object.getPrototypeOf(t)===zy;function bE(t,e,n,r=!1){const s={},i=Hy();t.propsDefaults=Object.create(null),Ky(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:V_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _E(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ve(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Tl(t.emitsOptions,f))continue;const d=e[f];if(l)if(de(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const g=nn(f);s[g]=xu(l,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{Ky(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=gs(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=xu(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h)&&!0)&&(delete i[h],c=!0)}c&&Ln(t.attrs,"set","")}function Ky(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ri(l))continue;const c=e[l];let u;s&&de(s,u=nn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Tl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ve(n),c=a||Oe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=xu(s,l,h,c[h],t,!de(c,h))}}return o}function xu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Eo(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gs(n))&&(r=!0))}return r}const EE=new WeakMap;function Wy(t,e,n=!1){const r=n?EE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=Wy(h,e,!0);Je(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ne(t)&&r.set(t,Ds),Ds;if(G(i))for(let u=0;u<i.length;u++){const h=nn(i[u]);dp(h)&&(o[h]=Oe)}else if(i)for(const u in i){const h=nn(u);if(dp(h)){const f=i[u],d=o[h]=G(f)||ne(f)?{type:f}:Je({},f);if(d){const g=gp(Boolean,d.type),y=gp(String,d.type);d[0]=g>-1,d[1]=y<0||g<y,(g>-1||de(d,"default"))&&a.push(h)}}}const c=[o,a];return Ne(t)&&r.set(t,c),c}function dp(t){return t[0]!=="$"&&!Ri(t)}function pp(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function mp(t,e){return pp(t)===pp(e)}function gp(t,e){return G(e)?e.findIndex(n=>mp(n,t)):ne(e)&&mp(e,t)?0:-1}const Gy=t=>t[0]==="_"||t==="$stable",nf=t=>G(t)?t.map(gn):[gn(t)],IE=(t,e,n)=>{if(e._n)return e;const r=Fe((...s)=>nf(e(...s)),n);return r._c=!1,r},Yy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gy(s))continue;const i=t[s];if(ne(i))e[s]=IE(s,i,r);else if(i!=null){const o=nf(i);e[s]=()=>o}}},Qy=(t,e)=>{const n=nf(e);t.slots.default=()=>n},Jy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},TE=(t,e,n)=>{const r=t.slots=Hy();if(t.vnode.shapeFlag&32){const s=e._;s?(Jy(r,e,n),n&&ay(r,"_",s,!0)):Yy(e,r)}else e&&Qy(t,e)},SE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Jy(s,e,n):(i=!e.$stable,Yy(e,s)),o=e}else e&&(Qy(t,e),o={default:1});if(i)for(const a in s)!Gy(a)&&o[a]==null&&delete s[a]};function ku(t,e,n,r,s=!1){if(G(t)){t.forEach((f,d)=>ku(f,e&&(G(e)?e[d]:e),n,r,s));return}if(_a(r)&&!s)return;const i=r.shapeFlag&4?Cl(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Oe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,de(h,c)&&(h[c]=null)):Ot(c)&&(c.value=null)),ne(l))fr(l,a,12,[o,u]);else{const f=$e(l),d=Ot(l);if(f||d){const g=()=>{if(t.f){const y=f?de(h,l)?h[l]:u[l]:l.value;s?G(y)&&Bh(y,i):G(y)?y.includes(i)||y.push(i):f?(u[l]=[i],de(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,de(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,At(g,n)):g()}}}const Xy=Symbol("_vte"),AE=t=>t.__isTeleport,Li=t=>t&&(t.disabled||t.disabled===""),yp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Nu=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},CE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:g,createText:y,createComment:w}}=c,v=Li(e.props);let{shapeFlag:_,children:k,dynamicChildren:F}=e;if(t==null){const W=e.el=y(""),P=e.anchor=y(""),X=e.target=Nu(e.props,g),ce=e.targetStart=y(""),j=e.targetAnchor=y("");d(W,n,r),d(P,n,r),ce[Xy]=j,X&&(d(ce,X),d(j,X),o==="svg"||yp(X)?o="svg":(o==="mathml"||vp(X))&&(o="mathml"));const se=(pe,$)=>{_&16&&u(k,pe,$,s,i,o,a,l)};v?se(n,P):X&&se(X,j)}else{e.el=t.el,e.targetStart=t.targetStart;const W=e.anchor=t.anchor,P=e.target=t.target,X=e.targetAnchor=t.targetAnchor,ce=Li(t.props),j=ce?n:P,se=ce?W:X;if(o==="svg"||yp(P)?o="svg":(o==="mathml"||vp(P))&&(o="mathml"),F?(f(t.dynamicChildren,F,j,s,i,o,a),rf(t,e,!0)):l||h(t,e,j,se,s,i,o,a,!1),v)ce?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ra(e,n,W,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const pe=e.target=Nu(e.props,g);pe&&ra(e,pe,null,c,0)}else ce&&ra(e,P,X,c,1)}Zy(e)},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=t;if(h&&(s(c),s(u)),i&&s(l),o&16){const d=i||!Li(f);for(let g=0;g<a.length;g++){const y=a[g];r(y,e,n,d,!!y.dynamicChildren)}}},move:ra,hydrate:xE};function ra(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Li(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);h&&r(a,e,n)}function xE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Nu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Li(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}Zy(e)}return e.anchor&&o(e.anchor)}const kE=CE;function Zy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function NE(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(zh().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const At=qE;function OE(t){return RE(t)}function RE(t,e){NE();const n=zh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Lt,insertStaticContent:g}=t,y=(p,m,b,A=null,I=null,C=null,D=void 0,N=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Hr(p,m)&&(A=Qo(p),me(p,I,C,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:S,ref:L,shapeFlag:z}=m;switch(S){case Sl:w(p,m,b,A);break;case Mt:v(p,m,b,A);break;case Ea:p==null&&_(m,b,A,D);break;case Et:$(p,m,b,A,I,C,D,N,O);break;default:z&1?W(p,m,b,A,I,C,D,N,O):z&6?ue(p,m,b,A,I,C,D,N,O):(z&64||z&128)&&S.process(p,m,b,A,I,C,D,N,O,Is)}L!=null&&I&&ku(L,p&&p.ref,C,m||p,!m)},w=(p,m,b,A)=>{if(p==null)r(m.el=a(m.children),b,A);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},v=(p,m,b,A)=>{p==null?r(m.el=l(m.children||""),b,A):m.el=p.el},_=(p,m,b,A)=>{[p.el,p.anchor]=g(p.children,m,b,A,p.el,p.anchor)},k=({el:p,anchor:m},b,A)=>{let I;for(;p&&p!==m;)I=f(p),r(p,b,A),p=I;r(m,b,A)},F=({el:p,anchor:m})=>{let b;for(;p&&p!==m;)b=f(p),s(p),p=b;s(m)},W=(p,m,b,A,I,C,D,N,O)=>{m.type==="svg"?D="svg":m.type==="math"&&(D="mathml"),p==null?P(m,b,A,I,C,D,N,O):j(p,m,I,C,D,N,O)},P=(p,m,b,A,I,C,D,N)=>{let O,S;const{props:L,shapeFlag:z,transition:B,dirs:te}=p;if(O=p.el=o(p.type,C,L&&L.is,L),z&8?u(O,p.children):z&16&&ce(p.children,O,null,A,I,xc(p,C),D,N),te&&Fr(p,null,A,"created"),X(O,p,p.scopeId,D,A),L){for(const Se in L)Se!=="value"&&!Ri(Se)&&i(O,Se,null,L[Se],C,A);"value"in L&&i(O,"value",null,L.value,C),(S=L.onVnodeBeforeMount)&&dn(S,A,p)}te&&Fr(p,null,A,"beforeMount");const ae=DE(I,B);ae&&B.beforeEnter(O),r(O,m,b),((S=L&&L.onVnodeMounted)||ae||te)&&At(()=>{S&&dn(S,A,p),ae&&B.enter(O),te&&Fr(p,null,A,"mounted")},I)},X=(p,m,b,A,I)=>{if(b&&d(p,b),A)for(let C=0;C<A.length;C++)d(p,A[C]);if(I){let C=I.subTree;if(m===C){const D=I.vnode;X(p,D,D.scopeId,D.slotScopeIds,I.parent)}}},ce=(p,m,b,A,I,C,D,N,O=0)=>{for(let S=O;S<p.length;S++){const L=p[S]=N?tr(p[S]):gn(p[S]);y(null,L,m,b,A,I,C,D,N)}},j=(p,m,b,A,I,C,D)=>{const N=m.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:L}=m;O|=p.patchFlag&16;const z=p.props||Oe,B=m.props||Oe;let te;if(b&&$r(b,!1),(te=B.onVnodeBeforeUpdate)&&dn(te,b,m,p),L&&Fr(m,p,b,"beforeUpdate"),b&&$r(b,!0),(z.innerHTML&&B.innerHTML==null||z.textContent&&B.textContent==null)&&u(N,""),S?se(p.dynamicChildren,S,N,b,A,xc(m,I),C):D||_e(p,m,N,null,b,A,xc(m,I),C,!1),O>0){if(O&16)pe(N,z,B,b,I);else if(O&2&&z.class!==B.class&&i(N,"class",null,B.class,I),O&4&&i(N,"style",z.style,B.style,I),O&8){const ae=m.dynamicProps;for(let Se=0;Se<ae.length;Se++){const be=ae[Se],We=z[be],Jt=B[be];(Jt!==We||be==="value")&&i(N,be,We,Jt,I,b)}}O&1&&p.children!==m.children&&u(N,m.children)}else!D&&S==null&&pe(N,z,B,b,I);((te=B.onVnodeUpdated)||L)&&At(()=>{te&&dn(te,b,m,p),L&&Fr(m,p,b,"updated")},A)},se=(p,m,b,A,I,C,D)=>{for(let N=0;N<m.length;N++){const O=p[N],S=m[N],L=O.el&&(O.type===Et||!Hr(O,S)||O.shapeFlag&70)?h(O.el):b;y(O,S,L,null,A,I,C,D,!0)}},pe=(p,m,b,A,I)=>{if(m!==b){if(m!==Oe)for(const C in m)!Ri(C)&&!(C in b)&&i(p,C,m[C],null,I,A);for(const C in b){if(Ri(C))continue;const D=b[C],N=m[C];D!==N&&C!=="value"&&i(p,C,N,D,I,A)}"value"in b&&i(p,"value",m.value,b.value,I)}},$=(p,m,b,A,I,C,D,N,O)=>{const S=m.el=p?p.el:a(""),L=m.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:B,slotScopeIds:te}=m;te&&(N=N?N.concat(te):te),p==null?(r(S,b,A),r(L,b,A),ce(m.children||[],b,L,I,C,D,N,O)):z>0&&z&64&&B&&p.dynamicChildren?(se(p.dynamicChildren,B,b,I,C,D,N),(m.key!=null||I&&m===I.subTree)&&rf(p,m,!0)):_e(p,m,b,L,I,C,D,N,O)},ue=(p,m,b,A,I,C,D,N,O)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,b,A,D,O):Pe(m,b,A,I,C,D,O):et(p,m,O)},Pe=(p,m,b,A,I,C,D)=>{const N=p.component=XE(p,A,I);if(El(p)&&(N.ctx.renderer=Is),ZE(N,!1,D),N.asyncDep){if(I&&I.registerDep(N,Ie,D),!p.el){const O=N.subTree=q(Mt);v(null,O,m,b)}}else Ie(N,p,m,b,I,C,D)},et=(p,m,b)=>{const A=m.component=p.component;if(jE(p,m,b))if(A.asyncDep&&!A.asyncResolved){we(A,m,b);return}else A.next=m,G_(A.update),A.effect.dirty=!0,A.update();else m.el=p.el,A.vnode=m},Ie=(p,m,b,A,I,C,D)=>{const N=()=>{if(p.isMounted){let{next:L,bu:z,u:B,parent:te,vnode:ae}=p;{const Ts=ev(p);if(Ts){L&&(L.el=ae.el,we(p,L,D)),Ts.asyncDep.then(()=>{p.isUnmounted||N()});return}}let Se=L,be;$r(p,!1),L?(L.el=ae.el,we(p,L,D)):L=ae,z&&wa(z),(be=L.props&&L.props.onVnodeBeforeUpdate)&&dn(be,te,L,ae),$r(p,!0);const We=kc(p),Jt=p.subTree;p.subTree=We,y(Jt,We,h(Jt.el),Qo(Jt),p,I,C),L.el=We.el,Se===null&&zE(p,We.el),B&&At(B,I),(be=L.props&&L.props.onVnodeUpdated)&&At(()=>dn(be,te,L,ae),I)}else{let L;const{el:z,props:B}=m,{bm:te,m:ae,parent:Se}=p,be=_a(m);if($r(p,!1),te&&wa(te),!be&&(L=B&&B.onVnodeBeforeMount)&&dn(L,Se,m),$r(p,!0),z&&Ec){const We=()=>{p.subTree=kc(p),Ec(z,p.subTree,p,I,null)};be?m.type.__asyncLoader().then(()=>!p.isUnmounted&&We()):We()}else{const We=p.subTree=kc(p);y(null,We,b,A,p,I,C),m.el=We.el}if(ae&&At(ae,I),!be&&(L=B&&B.onVnodeMounted)){const We=m;At(()=>dn(L,Se,We),I)}(m.shapeFlag&256||Se&&_a(Se.vnode)&&Se.vnode.shapeFlag&256)&&p.a&&At(p.a,I),p.isMounted=!0,m=b=A=null}},O=p.effect=new qh(N,Lt,()=>ef(S),p.scope),S=p.update=()=>{O.dirty&&O.run()};S.i=p,S.id=p.uid,$r(p,!0),S()},we=(p,m,b)=>{m.component=p;const A=p.vnode.props;p.vnode=m,p.next=null,_E(p,m.props,A,b),SE(p,m.children,b),kr(),op(p),Nr()},_e=(p,m,b,A,I,C,D,N,O=!1)=>{const S=p&&p.children,L=p?p.shapeFlag:0,z=m.children,{patchFlag:B,shapeFlag:te}=m;if(B>0){if(B&128){Lr(S,z,b,A,I,C,D,N,O);return}else if(B&256){un(S,z,b,A,I,C,D,N,O);return}}te&8?(L&16&&hn(S,I,C),z!==S&&u(b,z)):L&16?te&16?Lr(S,z,b,A,I,C,D,N,O):hn(S,I,C,!0):(L&8&&u(b,""),te&16&&ce(z,b,A,I,C,D,N,O))},un=(p,m,b,A,I,C,D,N,O)=>{p=p||Ds,m=m||Ds;const S=p.length,L=m.length,z=Math.min(S,L);let B;for(B=0;B<z;B++){const te=m[B]=O?tr(m[B]):gn(m[B]);y(p[B],te,b,null,I,C,D,N,O)}S>L?hn(p,I,C,!0,!1,z):ce(m,b,A,I,C,D,N,O,z)},Lr=(p,m,b,A,I,C,D,N,O)=>{let S=0;const L=m.length;let z=p.length-1,B=L-1;for(;S<=z&&S<=B;){const te=p[S],ae=m[S]=O?tr(m[S]):gn(m[S]);if(Hr(te,ae))y(te,ae,b,null,I,C,D,N,O);else break;S++}for(;S<=z&&S<=B;){const te=p[z],ae=m[B]=O?tr(m[B]):gn(m[B]);if(Hr(te,ae))y(te,ae,b,null,I,C,D,N,O);else break;z--,B--}if(S>z){if(S<=B){const te=B+1,ae=te<L?m[te].el:A;for(;S<=B;)y(null,m[S]=O?tr(m[S]):gn(m[S]),b,ae,I,C,D,N,O),S++}}else if(S>B)for(;S<=z;)me(p[S],I,C,!0),S++;else{const te=S,ae=S,Se=new Map;for(S=ae;S<=B;S++){const Pt=m[S]=O?tr(m[S]):gn(m[S]);Pt.key!=null&&Se.set(Pt.key,S)}let be,We=0;const Jt=B-ae+1;let Ts=!1,Yd=0;const mi=new Array(Jt);for(S=0;S<Jt;S++)mi[S]=0;for(S=te;S<=z;S++){const Pt=p[S];if(We>=Jt){me(Pt,I,C,!0);continue}let fn;if(Pt.key!=null)fn=Se.get(Pt.key);else for(be=ae;be<=B;be++)if(mi[be-ae]===0&&Hr(Pt,m[be])){fn=be;break}fn===void 0?me(Pt,I,C,!0):(mi[fn-ae]=S+1,fn>=Yd?Yd=fn:Ts=!0,y(Pt,m[fn],b,null,I,C,D,N,O),We++)}const Qd=Ts?PE(mi):Ds;for(be=Qd.length-1,S=Jt-1;S>=0;S--){const Pt=ae+S,fn=m[Pt],Jd=Pt+1<L?m[Pt+1].el:A;mi[S]===0?y(null,fn,b,Jd,I,C,D,N,O):Ts&&(be<0||S!==Qd[be]?he(fn,b,Jd,2):be--)}}},he=(p,m,b,A,I=null)=>{const{el:C,type:D,transition:N,children:O,shapeFlag:S}=p;if(S&6){he(p.component.subTree,m,b,A);return}if(S&128){p.suspense.move(m,b,A);return}if(S&64){D.move(p,m,b,Is);return}if(D===Et){r(C,m,b);for(let z=0;z<O.length;z++)he(O[z],m,b,A);r(p.anchor,m,b);return}if(D===Ea){k(p,m,b);return}if(A!==2&&S&1&&N)if(A===0)N.beforeEnter(C),r(C,m,b),At(()=>N.enter(C),I);else{const{leave:z,delayLeave:B,afterLeave:te}=N,ae=()=>r(C,m,b),Se=()=>{z(C,()=>{ae(),te&&te()})};B?B(C,ae,Se):Se()}else r(C,m,b)},me=(p,m,b,A=!1,I=!1)=>{const{type:C,props:D,ref:N,children:O,dynamicChildren:S,shapeFlag:L,patchFlag:z,dirs:B,cacheIndex:te}=p;if(z===-2&&(I=!1),N!=null&&ku(N,null,b,p,!0),te!=null&&(m.renderCache[te]=void 0),L&256){m.ctx.deactivate(p);return}const ae=L&1&&B,Se=!_a(p);let be;if(Se&&(be=D&&D.onVnodeBeforeUnmount)&&dn(be,m,p),L&6)pi(p.component,b,A);else{if(L&128){p.suspense.unmount(b,A);return}ae&&Fr(p,null,m,"beforeUnmount"),L&64?p.type.remove(p,m,b,Is,A):S&&!S.hasOnce&&(C!==Et||z>0&&z&64)?hn(S,m,b,!1,!0):(C===Et&&z&384||!I&&L&16)&&hn(O,m,b),A&&bt(p)}(Se&&(be=D&&D.onVnodeUnmounted)||ae)&&At(()=>{be&&dn(be,m,p),ae&&Fr(p,null,m,"unmounted")},b)},bt=p=>{const{type:m,el:b,anchor:A,transition:I}=p;if(m===Et){Tt(b,A);return}if(m===Ea){F(p);return}const C=()=>{s(b),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:N}=I,O=()=>D(b,C);N?N(p.el,C,O):O()}else C()},Tt=(p,m)=>{let b;for(;p!==m;)b=f(p),s(p),p=b;s(m)},pi=(p,m,b)=>{const{bum:A,scope:I,update:C,subTree:D,um:N,m:O,a:S}=p;wp(O),wp(S),A&&wa(A),I.stop(),C&&(C.active=!1,me(D,p,m,b)),N&&At(N,m),At(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},hn=(p,m,b,A=!1,I=!1,C=0)=>{for(let D=C;D<p.length;D++)me(p[D],m,b,A,I)},Qo=p=>{if(p.shapeFlag&6)return Qo(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=f(p.anchor||p.el),b=m&&m[Xy];return b?f(b):m};let bc=!1;const Gd=(p,m,b)=>{p==null?m._vnode&&me(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,b),bc||(bc=!0,op(),Ny(),bc=!1),m._vnode=p},Is={p:y,um:me,m:he,r:bt,mt:Pe,mc:ce,pc:_e,pbc:se,n:Qo,o:t};let _c,Ec;return e&&([_c,Ec]=e(Is)),{render:Gd,hydrate:_c,createApp:wE(Gd,_c)}}function xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function DE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rf(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=tr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&rf(o,a)),a.type===Sl&&(a.el=o.el)}}function PE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ev(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ev(e)}function wp(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const ME=Symbol.for("v-scx"),LE=()=>Qe(ME);function Dt(t,e){return sf(t,null,e)}const sa={};function Tn(t,e,n){return sf(t,e,n)}function sf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Oe){if(e&&i){const P=e;e=(...X)=>{P(...X),W()}}const l=st,c=P=>r===!0?P:rr(P,r===!1?1:void 0);let u,h=!1,f=!1;if(Ot(t)?(u=()=>t.value,h=Hs(t)):Di(t)?(u=()=>c(t),h=!0):G(t)?(f=!0,h=t.some(P=>Di(P)||Hs(P)),u=()=>t.map(P=>{if(Ot(P))return P.value;if(Di(P))return c(P);if(ne(P))return fr(P,l,2)})):ne(t)?e?u=()=>fr(t,l,2):u=()=>(d&&d(),Gt(t,l,3,[g])):u=Lt,e&&r){const P=u;u=()=>rr(P())}let d,g=P=>{d=k.onStop=()=>{fr(P,l,4),d=k.onStop=void 0}},y;if(Al)if(g=Lt,e?n&&Gt(e,l,3,[u(),f?[]:void 0,g]):u(),s==="sync"){const P=LE();y=P.__watcherHandles||(P.__watcherHandles=[])}else return Lt;let w=f?new Array(t.length).fill(sa):sa;const v=()=>{if(!(!k.active||!k.dirty))if(e){const P=k.run();(r||h||(f?P.some((X,ce)=>wr(X,w[ce])):wr(P,w)))&&(d&&d(),Gt(e,l,3,[P,w===sa?void 0:f&&w[0]===sa?[]:w,g]),w=P)}else k.run()};v.allowRecurse=!!e;let _;s==="sync"?_=v:s==="post"?_=()=>At(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),_=()=>ef(v));const k=new qh(u,Lt,_),F=b_(),W=()=>{k.stop(),F&&Bh(F.effects,k)};return e?n?v():w=k.run():s==="post"?At(k.run.bind(k),l&&l.suspense):k.run(),y&&y.push(W),W}function FE(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?tv(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Eo(this),a=sf(s,i.bind(r),n);return o(),a}function tv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ot(t))rr(t.value,e,n);else if(G(t))for(let r=0;r<t.length;r++)rr(t[r],e,n);else if(ry(t)||Ps(t))t.forEach(r=>{rr(r,e,n)});else if(oy(t)){for(const r in t)rr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&rr(t[r],e,n)}return t}const $E=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${gs(e)}Modifiers`];function UE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&$E(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>$e(u)?u.trim():u)),o.number&&(s=n.map(vu)));let a,l=r[a=Ic(e)]||r[a=Ic(nn(e))];!l&&i&&(l=r[a=Ic(gs(e))]),l&&Gt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(c,t,6,s)}}function nv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=nv(c,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(G(i)?i.forEach(l=>o[l]=null):Je(o,i),Ne(t)&&r.set(t,o),o)}function Tl(t,e){return!t||!pl(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,gs(e))||de(t,e))}function kc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:y}=t,w=Ma(t);let v,_;try{if(n.shapeFlag&4){const F=s||r,W=F;v=gn(c.call(W,F,u,h,d,f,g)),_=a}else{const F=e;v=gn(F.length>1?F(h,{attrs:a,slots:o,emit:l}):F(h,null)),_=e.props?a:VE(a)}}catch(F){Fi.length=0,bl(F,t,1),v=q(Mt)}let k=v;if(_&&y!==!1){const F=Object.keys(_),{shapeFlag:W}=k;F.length&&W&7&&(i&&F.some(Vh)&&(_=BE(_,i)),k=$n(k,_,!1,!0))}return n.dirs&&(k=$n(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Ma(w),v}const VE=t=>{let e;for(const n in t)(n==="class"||n==="style"||pl(n))&&((e||(e={}))[n]=t[n]);return e},BE=(t,e)=>{const n={};for(const r in t)(!Vh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Tl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bp(r,o,c):!0:!!o;return!1}function bp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tl(n,i))return!0}return!1}function zE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const HE=t=>t.__isSuspense;function qE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Y_(t)}const Et=Symbol.for("v-fgt"),Sl=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Fi=[];let Ft=null;function oe(t=!1){Fi.push(Ft=t?null:[])}function KE(){Fi.pop(),Ft=Fi[Fi.length-1]||null}let Ji=1;function _p(t){Ji+=t,t<0&&Ft&&(Ft.hasOnce=!0)}function rv(t){return t.dynamicChildren=Ji>0?Ft||Ds:null,KE(),Ji>0&&Ft&&Ft.push(t),t}function Me(t,e,n,r,s,i){return rv(T(t,e,n,r,s,i,!0))}function dt(t,e,n,r,s){return rv(q(t,e,n,r,s,!0))}function Ou(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const sv=({key:t})=>t!=null?t:null,Ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ot(t)||ne(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,r=0,s=null,i=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sv(e),ref:e&&Ia(e),scopeId:_l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return a?(of(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Ji>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const q=WE;function WE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uE)&&(t=Mt),Ou(t)){const a=$n(t,e,!0);return n&&of(a,n),Ji>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(sI(t)&&(t=t.__vccOpts),e){e=GE(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=ft(a)),Ne(l)&&(Iy(l)&&!G(l)&&(l=Je({},l)),e.style=Hh(l))}const o=$e(t)?1:HE(t)?128:AE(t)?64:Ne(t)?4:ne(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function GE(t){return t?Iy(t)||qy(t)?Je({},t):t:null}function $n(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?YE(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&sv(c),ref:e&&e.ref?n&&i?G(i)?i.concat(Ia(e)):[i,Ia(e)]:Ia(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&La(u,l.clone(u)),u}function $t(t=" ",e=0){return q(Sl,null,t,e)}function iv(t,e){const n=q(Ea,null,t);return n.staticCount=e,n}function mn(t="",e=!1){return e?(oe(),dt(Mt,null,t)):q(Mt,null,t)}function gn(t){return t==null||typeof t=="boolean"?q(Mt):G(t)?q(Et,null,t.slice()):typeof t=="object"?tr(t):q(Sl,null,String(t))}function tr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$n(t)}function of(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),of(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qy(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[$t(e)]):n=8);t.children=e,t.shapeFlag|=n}function YE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ft([e.class,r.class]));else if(s==="style")e.style=Hh([e.style,r.style]);else if(pl(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){Gt(t,e,7,[n,r])}const QE=jy();let JE=0;function XE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||QE,i={uid:JE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new v_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wy(r,s),emitsOptions:nv(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let st=null;const ov=()=>st||xt;let $a,Ru;{const t=zh(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$a=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Ru=e("__VUE_SSR_SETTERS__",n=>Al=n)}const Eo=t=>{const e=st;return $a(t),t.scope.on(),()=>{t.scope.off(),$a(e)}},Ep=()=>{st&&st.scope.off(),$a(null)};function av(t){return t.vnode.shapeFlag&4}let Al=!1;function ZE(t,e=!1,n=!1){e&&Ru(e);const{props:r,children:s}=t.vnode,i=av(t);bE(t,r,i,e),TE(t,s,n);const o=i?eI(t,e):void 0;return e&&Ru(!1),o}function eI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fE);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nI(t):null,i=Eo(t);kr();const o=fr(r,t,0,[t.props,s]);if(Nr(),i(),sy(o)){if(o.then(Ep,Ep),e)return o.then(a=>{Ip(t,a,e)}).catch(a=>{bl(a,t,0)});t.asyncDep=o}else Ip(t,o,e)}else lv(t,e)}function Ip(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Cy(e)),lv(t,n)}let Tp;function lv(t,e,n){const r=t.type;if(!t.render){if(!e&&Tp&&!r.render){const s=r.template||tf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Je(Je({isCustomElement:i,delimiters:a},o),l);r.render=Tp(s,c)}}t.render=r.render||Lt}{const s=Eo(t);kr();try{dE(t)}finally{Nr(),s()}}}const tI={get(t,e){return Nt(t,"get",""),t[e]}};function nI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tI),slots:t.slots,emit:t.emit,expose:e}}function Cl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cy(B_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pi)return Pi[n](t)},has(e,n){return n in e||n in Pi}})):t.proxy}function rI(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function sI(t){return ne(t)&&"__vccOpts"in t}const K=(t,e)=>j_(t,e,Al);function je(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!G(e)?Ou(e)?q(t,null,[e]):q(t,e):q(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ou(n)&&(n=[n]),q(t,e,n))}const iI="3.4.33";/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oI="http://www.w3.org/2000/svg",aI="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Sp=Rn&&Rn.createElement("template"),lI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(oI,t):e==="mathml"?Rn.createElementNS(aI,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Sp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Sp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yn="transition",gi="animation",Xi=Symbol("_vtc"),xl=(t,{slots:e})=>je(Z_,cI(t),e);xl.displayName="Transition";const cv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xl.props=Je({},Py,cv);const Ur=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ap=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function cI(t){const e={};for(const $ in t)$ in cv||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=uI(s),y=g&&g[0],w=g&&g[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:k,onLeave:F,onLeaveCancelled:W,onBeforeAppear:P=v,onAppear:X=_,onAppearCancelled:ce=k}=e,j=($,ue,Pe)=>{Vr($,ue?u:a),Vr($,ue?c:o),Pe&&Pe()},se=($,ue)=>{$._isLeaving=!1,Vr($,h),Vr($,d),Vr($,f),ue&&ue()},pe=$=>(ue,Pe)=>{const et=$?X:_,Ie=()=>j(ue,$,Pe);Ur(et,[ue,Ie]),Cp(()=>{Vr(ue,$?l:i),Qn(ue,$?u:a),Ap(et)||xp(ue,r,y,Ie)})};return Je(e,{onBeforeEnter($){Ur(v,[$]),Qn($,i),Qn($,o)},onBeforeAppear($){Ur(P,[$]),Qn($,l),Qn($,c)},onEnter:pe(!1),onAppear:pe(!0),onLeave($,ue){$._isLeaving=!0;const Pe=()=>se($,ue);Qn($,h),Qn($,f),dI(),Cp(()=>{!$._isLeaving||(Vr($,h),Qn($,d),Ap(F)||xp($,r,w,Pe))}),Ur(F,[$,Pe])},onEnterCancelled($){j($,!1),Ur(k,[$])},onAppearCancelled($){j($,!0),Ur(ce,[$])},onLeaveCancelled($){se($),Ur(W,[$])}})}function uI(t){if(t==null)return null;if(Ne(t))return[Nc(t.enter),Nc(t.leave)];{const e=Nc(t);return[e,e]}}function Nc(t){return h_(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function Vr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Cp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hI=0;function xp(t,e,n,r){const s=t._endId=++hI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=fI(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function fI(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${Yn}Delay`),i=r(`${Yn}Duration`),o=kp(s,i),a=r(`${gi}Delay`),l=r(`${gi}Duration`),c=kp(a,l);let u=null,h=0,f=0;e===Yn?o>0&&(u=Yn,h=o,f=i.length):e===gi?c>0&&(u=gi,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Yn:gi:null,f=u?u===Yn?i.length:l.length:0);const d=u===Yn&&/\b(transform|all)(,|$)/.test(r(`${Yn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function kp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Np(n)+Np(t[r])))}function Np(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dI(){return document.body.offsetHeight}function pI(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Op=Symbol("_vod"),mI=Symbol("_vsh"),gI=Symbol(""),yI=/(^|;)\s*display\s*:/;function vI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ta(r,a,"")}else for(const o in e)n[o]==null&&Ta(r,o,"");for(const o in n)o==="display"&&(i=!0),Ta(r,o,n[o])}else if(s){if(e!==n){const o=r[gI];o&&(n+=";"+o),r.cssText=n,i=yI.test(n)}}else e&&t.removeAttribute("style");Op in t&&(t[Op]=i?r.display:"",t[mI]&&(r.display="none"))}const Rp=/\s*!important$/;function Ta(t,e,n){if(G(n))n.forEach(r=>Ta(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wI(t,e);Rp.test(n)?t.setProperty(gs(r),n.replace(Rp,""),"important"):t[r]=n}}const Dp=["Webkit","Moz","ms"],Oc={};function wI(t,e){const n=Oc[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=yl(r);for(let s=0;s<Dp.length;s++){const i=Dp[s]+r;if(i in t)return Oc[e]=i}return e}const Pp="http://www.w3.org/1999/xlink";function Mp(t,e,n,r,s,i=y_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pp,e.slice(6,e.length)):t.setAttributeNS(Pp,e,n):n==null||i&&!ly(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xr(n)?String(n):n)}function bI(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ly(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Cs(t,e,n,r){t.addEventListener(e,n,r)}function _I(t,e,n,r){t.removeEventListener(e,n,r)}const Lp=Symbol("_vei");function EI(t,e,n,r,s=null){const i=t[Lp]||(t[Lp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=II(e);if(r){const c=i[e]=AI(r,s);Cs(t,a,c,l)}else o&&(_I(t,a,o,l),i[e]=void 0)}}const Fp=/(?:Once|Passive|Capture)$/;function II(t){let e;if(Fp.test(t)){e={};let r;for(;r=t.match(Fp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let Rc=0;const TI=Promise.resolve(),SI=()=>Rc||(TI.then(()=>Rc=0),Rc=Date.now());function AI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(CI(r,n.value),e,5,[r])};return n.value=t,n.attached=SI(),n}function CI(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $p=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pI(t,r,o):e==="style"?vI(t,n,r):pl(e)?Vh(e)||EI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kI(t,e,r,o))?(bI(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mp(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mp(t,e,r,o))};function kI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$p(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $p(e)&&$e(n)?!1:e in t}const Up=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>wa(e,n):e};function NI(t){t.target.composing=!0}function Vp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dc=Symbol("_assign"),_r={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Dc]=Up(s);const i=r||s.props&&s.props.type==="number";Cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vu(a)),t[Dc](a)}),n&&Cs(t,"change",()=>{t.value=t.value.trim()}),e||(Cs(t,"compositionstart",NI),Cs(t,"compositionend",Vp),Cs(t,"change",Vp))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Dc]=Up(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?vu(t.value):t.value,l=e==null?"":e;a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},OI=["ctrl","shift","alt","meta"],RI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OI.some(n=>t[`${n}Key`]&&!e.includes(n))},Io=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=RI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},DI=Je({patchProp:xI},lI);let Bp;function PI(){return Bp||(Bp=OE(DI))}const MI=(...t)=>{const e=PI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=FI(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,LI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function LI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function FI(t){return $e(t)?document.querySelector(t):t}const ys=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$I={data(){return{email:"",password:""}},methods:{redirectToSignUp(){this.$emit("register")},login(){const t=this.password.trim(),e="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,./<>?`~";if(t.length<8)return alert("Password must be at least 8 characters long.");for(let s=0;s<t.length;s++)if(!e.includes(t[s].toLowerCase()))return alert("Invalid Character in Password: "+t[s]);const n=this.email.trim();if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(n))return alert("Invalid Email");this.$emit("login",{email:n,password:t,stayLoggedIn:document.getElementById("remember-me").checked})}}},UI={class:"bg-grey-50 h-screen"},VI={class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},BI=T("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[T("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),T("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Sign in to your account "),T("p",{class:"mt-2 text-center text-sm text-gray-600"}," Sign in to access the chat ")],-1),jI={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},zI={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},HI=T("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email address ",-1),qI={class:"mt-1"},KI=T("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),WI={class:"mt-1"},GI=iv('<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a></div></div><div><button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Sign in </button></div>',2),YI={class:"mt-6 text-center text-sm text-gray-600"};function QI(t,e,n,r,s,i){return oe(),Me("div",UI,[T("div",VI,[BI,T("div",jI,[T("div",zI,[T("form",{class:"space-y-6",onSubmit:e[2]||(e[2]=Io((...o)=>i.login&&i.login(...o),["prevent"]))},[T("div",null,[HI,T("div",qI,[br(T("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},null,512),[[_r,s.email]])])]),T("div",null,[KI,T("div",WI,[br(T("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},null,512),[[_r,s.password]])])]),GI],32),T("p",YI,[$t(" Dont have an account yet? "),T("a",{onClick:e[3]||(e[3]=(...o)=>i.redirectToSignUp&&i.redirectToSignUp(...o)),class:"font-medium text-indigo-600 hover:text-indigo-500",href:"#"},"Sign up")])])])])])}const JI=ys($I,[["render",QI]]),XI={data(){return{email:"",password:""}},methods:{redirectToLogin(){this.$emit("login")},signUp(){const t=this.password.trim(),e="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,./<>?`~";if(t.length<8)return alert("Password must be at least 8 characters long.");for(let s=0;s<t.length;s++)if(!e.includes(t[s].toLowerCase()))return alert("Invalid Character in Password: "+t[s]);const n=this.email.trim();if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(n))return alert("Invalid Email");this.$emit("register",{email:n,password:t,stayLoggedIn:document.getElementById("remember-me").checked})}}},ZI={class:"bg-grey-50 h-screen"},eT={class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},tT=T("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[T("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),T("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Make a new account "),T("p",{class:"mt-2 text-center text-sm text-gray-600"}," Make a new account to access the chat. ")],-1),nT={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},rT={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},sT=T("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email address ",-1),iT={class:"mt-1"},oT=T("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),aT={class:"mt-1"},lT=iv('<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"><label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label></div><div class="text-sm"><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a></div></div><div><button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Sign up </button></div>',2),cT={class:"mt-6 text-center text-sm text-gray-600"};function uT(t,e,n,r,s,i){return oe(),Me("div",ZI,[T("div",eT,[tT,T("div",nT,[T("div",rT,[T("form",{class:"space-y-6",onSubmit:e[2]||(e[2]=Io((...o)=>i.signUp&&i.signUp(...o),["prevent"]))},[T("div",null,[sT,T("div",iT,[br(T("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},null,512),[[_r,s.email]])])]),T("div",null,[oT,T("div",aT,[br(T("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},null,512),[[_r,s.password]])])]),lT],32),T("p",cT,[$t(" Already have an account? "),T("a",{onClick:e[3]||(e[3]=(...o)=>i.redirectToLogin&&i.redirectToLogin(...o)),class:"font-medium text-indigo-600 hover:text-indigo-500",href:"#"},"Sign in")])])])])])}const hT=ys(XI,[["render",uT]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new dT;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=uv(t);return hv.encodeByteArray(e,!0)},Ua=function(t){return pT(t).replace(/\./g,"")},fv=function(t){try{return hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=()=>mT().__FIREBASE_DEFAULTS__,yT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fv(t[1]);return e&&JSON.parse(e)},af=()=>{try{return gT()||yT()||vT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dv=t=>{var e,n;return(n=(e=af())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wT=t=>{const e=dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pv=()=>{var t;return(t=af())===null||t===void 0?void 0:t.config},mv=t=>{var e;return(e=af())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ET(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function gv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TT(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yv(){try{return typeof indexedDB=="object"}catch{return!1}}function vv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AT,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function CT(t,e){return t.replace(xT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xT=/\{\$([^}]+)}/g;function kT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jp(i)&&jp(o)){if(!Zi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NT(t,e){const n=new OT(t,e);return n.subscribe.bind(n)}class OT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pc),s.error===void 0&&(s.error=Pc),s.complete===void 0&&(s.complete=Pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1e3,PT=2,MT=4*60*60*1e3,LT=.5;function zp(t,e=DT,n=PT){const r=e*Math.pow(n,t),s=Math.round(LT*r*(Math.random()-.5)*2);return Math.min(MT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UT(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $T(t){return t===jr?void 0:t}function UT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const BT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},jT=ge.INFO,zT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},HT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kl{constructor(e){this.name=e,this._logLevel=jT,this._logHandler=HT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const qT=(t,e)=>e.some(n=>t instanceof n);let Hp,qp;function KT(){return Hp||(Hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WT(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,Du=new WeakMap,bv=new WeakMap,Mc=new WeakMap,lf=new WeakMap;function GT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function YT(t){if(Du.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Du.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QT(t){Pu=t(Pu)}function JT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lc(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),dr(r)}:WT().includes(t)?function(...e){return t.apply(Lc(this),e),dr(wv.get(this))}:function(...e){return dr(t.apply(Lc(this),e))}}function XT(t){return typeof t=="function"?JT(t):(t instanceof IDBTransaction&&YT(t),qT(t,KT())?new Proxy(t,Pu):t)}function dr(t){if(t instanceof IDBRequest)return GT(t);if(Mc.has(t))return Mc.get(t);const e=XT(t);return e!==t&&(Mc.set(t,e),lf.set(e,t)),e}const Lc=t=>lf.get(t);function ZT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const eS=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],Fc=new Map;function Kp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fc.set(e,i),i}QT(t=>({...t,get:(e,n,r)=>Kp(e,n)||t.get(e,n,r),has:(e,n)=>!!Kp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mu="@firebase/app",Wp="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new kl("@firebase/app"),sS="@firebase/app-compat",iS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",cS="@firebase/auth",uS="@firebase/auth-compat",hS="@firebase/database",fS="@firebase/database-compat",dS="@firebase/functions",pS="@firebase/functions-compat",mS="@firebase/installations",gS="@firebase/installations-compat",yS="@firebase/messaging",vS="@firebase/messaging-compat",wS="@firebase/performance",bS="@firebase/performance-compat",_S="@firebase/remote-config",ES="@firebase/remote-config-compat",IS="@firebase/storage",TS="@firebase/storage-compat",SS="@firebase/firestore",AS="@firebase/firestore-compat",CS="firebase",xS="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="[DEFAULT]",kS={[Mu]:"fire-core",[sS]:"fire-core-compat",[oS]:"fire-analytics",[iS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[cS]:"fire-auth",[uS]:"fire-auth-compat",[hS]:"fire-rtdb",[fS]:"fire-rtdb-compat",[dS]:"fire-fn",[pS]:"fire-fn-compat",[mS]:"fire-iid",[gS]:"fire-iid-compat",[yS]:"fire-fcm",[vS]:"fire-fcm-compat",[wS]:"fire-perf",[bS]:"fire-perf-compat",[_S]:"fire-rc",[ES]:"fire-rc-compat",[IS]:"fire-gcs",[TS]:"fire-gcs-compat",[SS]:"fire-fst",[AS]:"fire-fst-compat","fire-js":"fire-js",[CS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map,Fu=new Map;function NS(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Fu.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Fu.set(e,t);for(const n of Va.values())NS(n,t);return!0}function ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new vs("app","Firebase",OS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=xS;function _v(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=pv()),!n)throw pr.create("no-options");const i=Va.get(s);if(i){if(Zi(n,i.options)&&Zi(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new VT(s);for(const l of Fu.values())o.addComponent(l);const a=new RS(n,r,o);return Va.set(s,a),a}function cf(t=Lu){const e=Va.get(t);if(!e&&t===Lu&&pv())return _v();if(!e)throw pr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=kS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}xn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="firebase-heartbeat-database",PS=1,eo="firebase-heartbeat-store";let $c=null;function Ev(){return $c||($c=ZT(DS,PS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),$c}async function MS(t){try{return await(await Ev()).transaction(eo).objectStore(eo).get(Iv(t))}catch(e){if(e instanceof cn)is.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function Gp(t,e){try{const r=(await Ev()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,Iv(t)),await r.done}catch(n){if(n instanceof cn)is.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(r.message)}}}function Iv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=1024,FS=30*24*60*60*1e3;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=FS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yp(),{heartbeatsToSend:n,unsentEntries:r}=US(this._heartbeatsCache.heartbeats),s=Ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yp(){return new Date().toISOString().substring(0,10)}function US(t,e=LS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yv()?vv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await MS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){xn(new rn("platform-logger",e=>new nS(e),"PRIVATE")),xn(new rn("heartbeat",e=>new $S(e),"PRIVATE")),Yt(Mu,Wp,t),Yt(Mu,Wp,"esm2017"),Yt("fire-js","")}BS("");var jS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,uf=uf||{},J=jS||self;function Nl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function So(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zS(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++HS)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),HS=0;function qS(t,e,n){return t.call.apply(t.bind,arguments)}function KS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=qS:pt=KS,pt.apply(null,arguments)}function ia(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var WS=0;Or.prototype.s=!1;Or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WS!=0)&&zS(this)};Or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Nl(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var GS=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function to(t){return/^[\s\xa0]*$/.test(t)}function Ol(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return Ol().indexOf(t)!=-1}function ff(t){return ff[" "](t),t}ff[" "]=function(){};function YS(t,e){var n=BA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QS=vn("Opera"),qs=vn("Trident")||vn("MSIE"),Sv=vn("Edge"),$u=Sv||qs,Av=vn("Gecko")&&!(Ol().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),JS=Ol().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function Cv(){var t=J.document;return t?t.documentMode:void 0}var Uu;e:{var Vc="",Bc=function(){var t=Ol();if(Av)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sv)return/Edge\/([\d\.]+)/.exec(t);if(qs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JS)return/WebKit\/(\S+)/.exec(t);if(QS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(Vc=Bc?Bc[1]:""),qs){var jc=Cv();if(jc!=null&&jc>parseFloat(Vc)){Uu=String(jc);break e}}Uu=Vc}var Vu;if(J.document&&qs){var Xp=Cv();Vu=Xp||parseInt(Uu,10)||void 0}else Vu=void 0;var XS=Vu;function no(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Av){e:{try{ff(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&no.$.h.call(this)}}Ze(no,mt);var ZS={2:"touch",3:"pen",4:"mouse"};no.prototype.h=function(){no.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ao="closure_listenable_"+(1e6*Math.random()|0),eA=0;function tA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++eA,this.fa=this.ia=!1}function Rl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function df(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xv(t){const e={};for(const n in t)e[n]=t[n];return e}const Zp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Zp.length;i++)n=Zp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dl(t){this.src=t,this.g={},this.h=0}Dl.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ju(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new tA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Bu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Tv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Rl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ju(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var pf="closure_lm_"+(1e6*Math.random()|0),zc={};function Nv(t,e,n,r,s){if(r&&r.once)return Rv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Nv(t,e[i],n,r,s);return null}return n=yf(n),t&&t[Ao]?t.O(e,n,So(r)?!!r.capture:!!r,s):Ov(t,e,n,!1,r,s)}function Ov(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=So(s)?!!s.capture:!!s,a=gf(t);if(a||(t[pf]=a=new Dl(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=rA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Pv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rA(){function t(n){return e.call(t.src,t.listener,n)}const e=sA;return t}function Rv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rv(t,e[i],n,r,s);return null}return n=yf(n),t&&t[Ao]?t.P(e,n,So(r)?!!r.capture:!!r,s):Ov(t,e,n,!0,r,s)}function Dv(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dv(t,e[i],n,r,s);else r=So(r)?!!r.capture:!!r,n=yf(n),t&&t[Ao]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ju(i,n,r,s),-1<n&&(Rl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ju(e,n,r,s)),(n=-1<t?e[t]:null)&&mf(n))}function mf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ao])Bu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Pv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gf(e))?(Bu(n,t),n.h==0&&(n.src=null,e[pf]=null)):Rl(t)}}}function Pv(t){return t in zc?zc[t]:zc[t]="on"+t}function sA(t,e){if(t.fa)t=!0;else{e=new no(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mf(t),t=n.call(r,e)}return t}function gf(t){return t=t[pf],t instanceof Dl?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yf(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function Xe(){Or.call(this),this.i=new Dl(this),this.S=this,this.J=null}Ze(Xe,Or);Xe.prototype[Ao]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){Dv(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var s=e;e=new mt(r,t),kv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=oa(o,r,!0,e)&&s}if(o=e.g=t,s=oa(o,r,!0,e)&&s,s=oa(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=oa(o,r,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rl(n[r]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function oa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bu(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var vf=J.JSON.stringify;class iA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function oA(){var t=wf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aA{constructor(){this.h=this.g=null}add(e,n){const r=Mv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Mv=new iA(()=>new lA,t=>t.reset());class lA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uA(t){J.setTimeout(()=>{throw t},0)}let ro,so=!1,wf=new aA,Lv=()=>{const t=J.Promise.resolve(void 0);ro=()=>{t.then(hA)}};var hA=()=>{for(var t;t=oA();){try{t.h.call(t.g)}catch(n){uA(n)}var e=Mv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1};function Pl(t,e){Xe.call(this),this.h=t||1,this.g=e||J,this.j=pt(this.qb,this),this.l=Date.now()}Ze(Pl,Xe);R=Pl.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(bf(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){Pl.$.N.call(this),bf(this),delete this.g};function _f(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Fv(t){t.g=_f(()=>{t.g=null,t.i&&(t.i=!1,Fv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fA extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fv(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){Or.call(this),this.h=t,this.g={}}Ze(io,Or);var em=[];function $v(t,e,n,r){Array.isArray(n)||(n&&(em[0]=n.toString()),n=em);for(var s=0;s<n.length;s++){var i=Nv(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Uv(t){df(t.g,function(e,n){this.g.hasOwnProperty(n)&&mf(e)},t),t.g={}}io.prototype.N=function(){io.$.N.call(this),Uv(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ml(){this.g=!0}Ml.prototype.Ea=function(){this.g=!1};function dA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function pA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gA(t,n)+(r?" "+r:"")})}function mA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ml.prototype.info=function(){};function gA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vf(n)}catch{return e}}var bs={},tm=null;function Ll(){return tm=tm||new Xe}bs.Ta="serverreachability";function Vv(t){mt.call(this,bs.Ta,t)}Ze(Vv,mt);function oo(t){const e=Ll();it(e,new Vv(e))}bs.STAT_EVENT="statevent";function Bv(t,e){mt.call(this,bs.STAT_EVENT,t),this.stat=e}Ze(Bv,mt);function It(t){const e=Ll();it(e,new Bv(e,t))}bs.Ua="timingevent";function jv(t,e){mt.call(this,bs.Ua,t),this.size=e}Ze(jv,mt);function Co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Fl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ef(){}Ef.prototype.h=null;function nm(t){return t.h||(t.h=t.i())}function Hv(){}var xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function If(){mt.call(this,"d")}Ze(If,mt);function Tf(){mt.call(this,"c")}Ze(Tf,mt);var zu;function $l(){}Ze($l,Ef);$l.prototype.g=function(){return new XMLHttpRequest};$l.prototype.i=function(){return{}};zu=new $l;function ko(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new io(this),this.P=yA,t=$u?125:void 0,this.V=new Pl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qv}function qv(){this.i=null,this.g="",this.h=!1}var yA=45e3,Hu={},Ba={};R=ko.prototype;R.setTimeout=function(t){this.P=t};function qu(t,e,n){t.L=1,t.v=Vl(Un(e)),t.s=n,t.S=!0,Kv(t,null)}function Kv(t,e){t.G=Date.now(),No(t),t.A=Un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),e0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new qv,t.g=_0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new fA(pt(t.Pa,t,t.g),t.O)),$v(t.U,t.g,"readystatechange",t.nb),e=t.I?xv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oo(),dA(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||$u||this.g&&(this.h.h||this.g.ja()||om(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?oo(3):oo(2)),Ul(this);var n=this.g.da();this.ca=n;t:if(Wv(this)){var r=om(this.g);t="";var s=r.length,i=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),$i(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,pA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var c=a;break t}}c=null}if(n=c)Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ku(this,n);else{this.i=!1,this.o=3,It(12),Wr(this),$i(this);break e}}this.S?(Gv(this,u,o),$u&&this.i&&u==3&&($v(this.U,this.V,"tick",this.mb),this.V.start())):(Ns(this.j,this.m,o,null),Ku(this,o)),u==4&&Wr(this),this.i&&!this.J&&(u==4?y0(this.l,this):(this.i=!1,No(this)))}else $A(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Wr(this),$i(this)}}}catch{}finally{}};function Wv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gv(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=vA(t,n),s==Ba){e==4&&(t.o=4,It(14),r=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Hu){t.o=4,It(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ns(t.j,t.m,s,null),Ku(t,s);Wv(t)&&s!=Ba&&s!=Hu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nf(e),e.M=!0,It(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),Wr(t),$i(t))}R.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(Ul(this),Gv(this,t,e),this.i&&t!=4&&No(this))}};function vA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ba:(n=Number(e.substring(n,r)),isNaN(n)?Hu:(r+=1,r+n>e.length?Ba:(e=e.slice(r,r+n),t.C=r+n,e)))}R.cancel=function(){this.J=!0,Wr(this)};function No(t){t.Y=Date.now()+t.P,Yv(t,t.P)}function Yv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Co(pt(t.lb,t),e)}function Ul(t){t.B&&(J.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mA(this.j,this.A),this.L!=2&&(oo(),It(17)),Wr(this),this.o=2,$i(this)):Yv(this,this.Y-t)};function $i(t){t.l.H==0||t.J||y0(t.l,t)}function Wr(t){Ul(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bf(t.V),Uv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ku(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wu(n.i,t))){if(!t.K&&Wu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ha(n),zl(n);else break e;kf(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Co(pt(n.ib,n),6e3));if(1>=r0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gr(n,11)}else if((t.K||n.g==t)&&Ha(n),!to(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sf(i,i.h),i.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ae(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=b0(r,r.J?r.pa:null,r.Y),o.K){s0(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ul(a),No(a)),r.g=o}else m0(r);0<n.j.length&&Hl(n)}else c[0]!="stop"&&c[0]!="close"||Gr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Gr(n,7):xf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}oo(4)}catch{}}function wA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Nl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Nl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Qv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bA(t),r=wA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Jv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _A(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function es(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof es){this.h=t.h,ja(this,t.j),this.s=t.s,this.g=t.g,za(this,t.m),this.l=t.l;var e=t.i,n=new ao;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),rm(this,n),this.o=t.o}else t&&(e=String(t).match(Jv))?(this.h=!1,ja(this,e[1]||"",!0),this.s=Ti(e[2]||""),this.g=Ti(e[3]||"",!0),za(this,e[4]),this.l=Ti(e[5]||"",!0),rm(this,e[6]||"",!0),this.o=Ti(e[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Si(e,sm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Si(e,sm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Si(n,n.charAt(0)=="/"?TA:IA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Si(n,AA)),t.join("")};function Un(t){return new es(t)}function ja(t,e,n){t.j=n?Ti(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function za(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rm(t,e,n){e instanceof ao?(t.i=e,CA(t.i,t.h)):(n||(e=Si(e,SA)),t.i=new ao(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Vl(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ti(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Si(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sm=/[#\/\?@]/g,IA=/[#\?:]/g,TA=/[#\?]/g,SA=/[#\?@]/g,AA=/#/g;function ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rr(t){t.g||(t.g=new Map,t.h=0,t.i&&_A(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=ao.prototype;R.add=function(t,e){Rr(this),this.i=null,t=ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xv(t,e){Rr(t),e=ri(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Zv(t,e){return Rr(t),e=ri(t,e),t.g.has(e)}R.forEach=function(t,e){Rr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};R.ta=function(){Rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};R.Z=function(t){Rr(this);let e=[];if(typeof t=="string")Zv(this,t)&&(e=e.concat(this.g.get(ri(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Rr(this),this.i=null,t=ri(this,t),Zv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function e0(t,e,n){Xv(t,e),0<n.length&&(t.i=null,t.g.set(ri(t,e),hf(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CA(t,e){e&&!t.j&&(Rr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Xv(this,r),e0(this,s,n))},t)),t.j=e}var xA=class{constructor(t,e){this.g=t,this.map=e}};function t0(t){this.l=t||kA,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kA=10;function n0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function r0(t){return t.h?1:t.g?t.g.size:0}function Wu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sf(t,e){t.g?t.g.add(e):t.h=e}function s0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}t0.prototype.cancel=function(){if(this.i=i0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function i0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hf(t.i)}var NA=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function OA(){this.g=new NA}function RA(t,e,n){const r=n||"";try{Qv(t,function(s,i){let o=s;So(s)&&(o=vf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function DA(t,e){const n=new Ml;if(J.Image){const r=new Image;r.onload=ia(aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ia(aa,n,r,"TestLoadImage: error",!1,e),r.onabort=ia(aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ia(aa,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function aa(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Oo(t){this.l=t.fc||null,this.j=t.ob||!1}Ze(Oo,Ef);Oo.prototype.g=function(){return new Bl(this.l,this.j)};Oo.prototype.i=function(t){return function(){return t}}({});function Bl(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Af,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Bl,Xe);var Af=0;R=Bl.prototype;R.open=function(t,e){if(this.readyState!=Af)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,lo(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=Af};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;o0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function o0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ro(this):lo(this),this.readyState==3&&o0(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Ro(this))};R.Ya=function(t){this.g&&(this.response=t,Ro(this))};R.ka=function(){this.g&&Ro(this)};function Ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,lo(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function lo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PA=J.JSON.parse;function Le(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=a0,this.L=this.M=!1}Ze(Le,Xe);var a0="",MA=/^https?$/i,LA=["POST","PUT"];R=Le.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zu.g(),this.C=this.u?nm(this.u):nm(zu),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){im(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Tv(LA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{u0(this),0<this.B&&((this.L=FA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=_f(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){im(this,i)}};function FA(t){return qs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof uf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function im(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,l0(t),jl(t)}function l0(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),jl(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jl(this,!0)),Le.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?c0(this):this.kb())};R.kb=function(){c0(this)};function c0(t){if(t.h&&typeof uf<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)_f(t.La,0,t);else if(it(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Jv)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!MA.test(s?s.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<bn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",l0(t)}}finally{jl(t)}}}}function jl(t,e){if(t.g){u0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function u0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PA(e)}};function om(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case a0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $A(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(to(t[r]))continue;var n=cA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}nA(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function h0(t){let e="";return df(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=h0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function yi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function f0(t){this.Ga=0,this.j=[],this.l=new Ml,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=yi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=yi("baseRetryDelayMs",5e3,t),this.hb=yi("retryDelaySeedMs",1e4,t),this.eb=yi("forwardChannelMaxRetries",2,t),this.xa=yi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new t0(t&&t.concurrentRequestLimit),this.Ja=new OA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=f0.prototype;R.ra=8;R.H=1;function xf(t){if(d0(t),t.H==3){var e=t.W++,n=Un(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Do(t,n),e=new ko(t,t.l,e),e.L=2,e.v=Vl(Un(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=_0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),No(e)}w0(t)}function zl(t){t.g&&(Nf(t),t.g.cancel(),t.g=null)}function d0(t){zl(t),t.u&&(J.clearTimeout(t.u),t.u=null),Ha(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Hl(t){if(!n0(t.i)&&!t.m){t.m=!0;var e=t.Na;ro||Lv(),so||(ro(),so=!0),wf.add(e,t),t.C=0}}function UA(t,e){return r0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Co(pt(t.Na,t,e),v0(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ko(this,this.l,t);let i=this.s;if(this.U&&(i?(i=xv(i),kv(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=p0(this,s,e),n=Un(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Do(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(h0(i)))+"&"+e:this.o&&Cf(n,this.o,i)),Sf(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,qu(s,n,null)):qu(s,n,e),this.H=2}}else this.H==3&&(t?am(this,t):this.j.length==0||n0(this.i)||am(this))};function am(t,e){var n;e?n=e.m:n=t.W++;const r=Un(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Do(t,r),t.o&&t.s&&Cf(r,t.o,t.s),n=new ko(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=p0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sf(t.i,n),qu(n,r,e)}function Do(t,e){t.na&&df(t.na,function(n,r){Ae(e,r,n)}),t.h&&Qv({},function(n,r){Ae(e,r,n)})}function p0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{RA(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function m0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ro||Lv(),so||(ro(),so=!0),wf.add(e,t),t.A=0}}function kf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Co(pt(t.Ma,t),v0(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,g0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Co(pt(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),zl(this),g0(this))};function Nf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function g0(t){t.g=new ko(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Un(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Do(t,e),t.o&&t.s&&Cf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Vl(Un(e)),n.s=null,n.S=!0,Kv(n,t)}R.ib=function(){this.v!=null&&(this.v=null,zl(this),kf(this),It(19))};function Ha(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function y0(t,e){var n=null;if(t.g==e){Ha(t),Nf(t),t.g=null;var r=2}else if(Wu(t.i,e))n=e.F,s0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ll(),it(r,new jv(r,n)),Hl(t)}else m0(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&UA(t,e)||r==2&&kf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Gr(t,5);break;case 4:Gr(t,10);break;case 3:Gr(t,6);break;default:Gr(t,2)}}}function v0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||ja(n,"https"),Vl(n)),DA(n.toString(),r)}else It(2);t.H=0,t.h&&t.h.za(e),w0(t),d0(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function w0(t){if(t.H=0,t.ma=[],t.h){const e=i0(t.i);(e.length!=0||t.j.length!=0)&&(Jp(t.ma,e),Jp(t.ma,t.j),t.i.i.length=0,hf(t.j),t.j.length=0),t.h.ya()}}function b0(t,e,n){var r=n instanceof es?Un(n):new es(n);if(r.g!="")e&&(r.g=e+"."+r.g),za(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new es(null);r&&ja(i,r),e&&(i.g=e),s&&za(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Do(t,r),r}function _0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new Oo({ob:!0})):new Le(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function E0(){}R=E0.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function qa(){if(qs&&!(10<=Number(XS)))throw Error("Environmental error: no available transport.")}qa.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){Xe.call(this),this.g=new f0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!to(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new si(this)}Ze(Ht,Xe);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=b0(t,null,t.Y),Hl(t)};Ht.prototype.close=function(){xf(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vf(t),t=n);e.j.push(new xA(e.fb++,t)),e.H==3&&Hl(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,xf(this.g),delete this.g,Ht.$.N.call(this)};function I0(t){If.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(I0,If);function T0(){Tf.call(this),this.status=1}Ze(T0,Tf);function si(t){this.g=t}Ze(si,E0);si.prototype.Ba=function(){it(this.g,"a")};si.prototype.Aa=function(t){it(this.g,new I0(t))};si.prototype.za=function(t){it(this.g,new T0)};si.prototype.ya=function(){it(this.g,"b")};function VA(){this.blockSize=-1}function sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(sn,VA);sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)qc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){qc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){qc(this,r),s=0;break}}this.h=s,this.i+=e};sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var BA={};function Of(t){return-128<=t&&128>t?YS(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function _n(t){if(isNaN(t)||!isFinite(t))return Ls;if(0>t)return nt(_n(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Gu;return new Ee(e,0)}function S0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(S0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_n(Math.pow(e,8)),r=Ls,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=_n(Math.pow(e,i)),r=r.R(i).add(_n(o))):(r=r.R(n),r=r.add(_n(o)))}return r}var Gu=4294967296,Ls=Of(0),Yu=Of(1),lm=Of(16777216);R=Ee.prototype;R.ea=function(){if(Wt(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Gu+r)*e,e*=Gu}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(Wt(this))return"-"+nt(this).toString(t);for(var e=_n(Math.pow(t,6)),n=this,r="";;){var s=Wa(n,e).g;n=Ka(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Dn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}R.X=function(t){return t=Ka(this,t),Wt(t)?-1:Dn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Yu)}R.abs=function(){return Wt(this)?nt(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Ka(t,e){return t.add(nt(e))}R.R=function(t){if(Dn(this)||Dn(t))return Ls;if(Wt(this))return Wt(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Wt(t))return nt(this.R(nt(t)));if(0>this.X(lm)&&0>t.X(lm))return _n(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,la(n,2*r+2*s),n[2*r+2*s+1]+=i*l,la(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,la(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,la(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function la(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vi(t,e){this.g=t,this.h=e}function Wa(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new vi(Ls,Ls);if(Wt(t))return e=Wa(nt(t),e),new vi(nt(e.g),nt(e.h));if(Wt(e))return e=Wa(t,nt(e)),new vi(nt(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yu,r=e;0>=r.X(t);)n=cm(n),r=cm(r);var s=Ss(n,1),i=Ss(r,1);for(r=Ss(r,2),n=Ss(n,2);!Dn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ss(r,1),n=Ss(n,1)}return e=Ka(t,s.R(e)),new vi(s,e)}for(s=Ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=_n(n),o=i.R(e);Wt(o)||0<o.X(t);)n-=r,i=_n(n),o=i.R(e);Dn(i)&&(i=Yu),s=s.add(i),t=Ka(t,o)}return new vi(s,t)}R.gb=function(t){return Wa(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function cm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}qa.prototype.createWebChannel=qa.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;Fl.NO_ERROR=0;Fl.TIMEOUT=8;Fl.HTTP_ERROR=6;zv.COMPLETE="complete";Hv.EventType=xo;xo.OPEN="a";xo.CLOSE="b";xo.ERROR="c";xo.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;sn.prototype.digest=sn.prototype.l;sn.prototype.reset=sn.prototype.reset;sn.prototype.update=sn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=_n;Ee.fromString=S0;var jA=function(){return new qa},zA=function(){return Ll()},Kc=Fl,HA=zv,qA=bs,um={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},KA=Oo,ca=Hv,WA=Le,GA=sn,Fs=Ee;const hm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new kl("@firebase/firestore");function fm(){return os.logLevel}function V(t,...e){if(os.logLevel<=ge.DEBUG){const n=e.map(Rf);os.debug(`Firestore (${ii}): ${t}`,...n)}}function Vn(t,...e){if(os.logLevel<=ge.ERROR){const n=e.map(Rf);os.error(`Firestore (${ii}): ${t}`,...n)}}function Ks(t,...e){if(os.logLevel<=ge.WARN){const n=e.map(Rf);os.warn(`Firestore (${ii}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ke(t,e){t||Q()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class QA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JA{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new A0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new lt(e)}}class XA{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ZA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new XA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.T=n.token,new eC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ke(0,0))}static max(){return new Z(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends co{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const rC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends co{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return rC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ce.fromString(e))}static fromName(e){return new H(Ce.fromString(e).popFirst(5))}static empty(){return new H(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ce(e.slice()))}}function sC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Er(s,H.empty(),e)}function iC(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(Z.min(),H.empty(),-1)}static max(){return new Er(Z.max(),H.empty(),-1)}}function oC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==aC)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Df.ct=-1;function ql(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function cC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ua(this.root,e,this.comparator,!0)}}class ua{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=s!=null?s:tt.EMPTY,this.right=i!=null?i:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,s){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pm(this.data.getIterator())}getIteratorFrom(e){return new pm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class pm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new gt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new k0("Invalid base64 string: "+s):s}}(e);return new wt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const uC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ke(!!t),typeof t=="string"){let e=0;const n=uC.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mf(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?Mf(e):e}function uo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:fC(t)?9007199254740991:10:Q()}function kn(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Ir(r.timestampValue),o=Ir(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return as(r.bytesValue).isEqual(as(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Be(r.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Be(r.integerValue)===Be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Be(r.doubleValue),o=Be(s.doubleValue);return i===o?Ga(i)===Ga(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(dm(i)!==dm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!kn(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function fo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Be(s.integerValue||s.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return mm(t.timestampValue,e.timestampValue);case 4:return mm(uo(t),uo(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,i){const o=as(s),a=as(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ye(o[l],a[l]);if(c!==0)return c}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ye(Be(s.latitude),Be(i.latitude));return o!==0?o:ye(Be(s.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Gs(o[l],a[l]);if(c)return c}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ha.mapValue&&i===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(i===ha.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ye(a[u],c[u]);if(h!==0)return h;const f=Gs(o[a[u]],l[c[u]]);if(f!==0)return f}return ye(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Q()}}function mm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Ir(t),r=Ir(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Ys(t){return Qu(t)}function Qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Ir(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?as(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Qu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Qu(r.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function gm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ju(t){return!!t&&"integerValue"in t}function Lf(t){return!!t&&"arrayValue"in t}function ym(t){return!!t&&"nullValue"in t}function vm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sa(t){return!!t&&"mapValue"in t}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ui(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ui(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Ui(this.value))}}function N0(t){const e=[];return _s(t.fields,(n,r)=>{const s=new ht([n]);if(Sa(r)){const i=N0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,Z.min(),Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,Z.min(),Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,Z.min(),Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function wm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n="asc"){this.field=e,this.dir=n}}function dC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{}class ze extends O0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mC(e,n,r):n==="array-contains"?new vC(e,r):n==="in"?new wC(e,r):n==="not-in"?new bC(e,r):n==="array-contains-any"?new _C(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gC(e,r):new yC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class on extends O0{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new on(e,n)}matches(e){return R0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function R0(t){return t.op==="and"}function D0(t){return pC(t)&&R0(t)}function pC(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Xu(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(D0(t))return t.filters.map(e=>Xu(e)).join(",");{const e=t.filters.map(n=>Xu(n)).join(",");return`${t.op}(${e})`}}function P0(t,e){return t instanceof ze?function(n,r){return r instanceof ze&&n.op===r.op&&n.field.isEqual(r.field)&&kn(n.value,r.value)}(t,e):t instanceof on?function(n,r){return r instanceof on&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&P0(i,r.filters[o]),!0):!1}(t,e):void Q()}function M0(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(t):t instanceof on?function(e){return e.op.toString()+" {"+e.getFilters().map(M0).join(" ,")+"}"}(t):"Filter"}class mC extends ze{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class gC extends ze{constructor(e,n){super(e,"in",n),this.keys=L0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yC extends ze{constructor(e,n){super(e,"not-in",n),this.keys=L0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function L0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class vC extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lf(n)&&fo(n.arrayValue,this.value)}}class wC extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class bC extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class _C extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function _m(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EC(t,e,n,r,s,i,o)}function Ff(t){const e=re(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.dt=n}return e.dt}function $f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!P0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bm(t.startAt,e.startAt)&&bm(t.endAt,e.endAt)}function Zu(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function IC(t,e,n,r,s,i,o,a){return new oi(t,e,n,r,s,i,o,a)}function Kl(t){return new oi(t)}function Em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Uf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function F0(t){return t.collectionGroup!==null}function Us(t){const e=re(t);if(e.wt===null){e.wt=[];const n=Wl(e),r=Uf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new $s(n)),e.wt.push(new $s(ht.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new $s(ht.keyField(),i))}}}return e.wt}function Bn(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=_m(e.path,e.collectionGroup,Us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new $s(i.field,o))}const r=e.endAt?new Ya(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ya(e.startAt.position,e.startAt.inclusive):null;e._t=_m(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function eh(t,e){e.getFirstInequalityField(),Wl(t);const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qa(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return $f(Bn(t),Bn(e))&&t.limitType===e.limitType}function $0(t){return`${Ff(Bn(t))}|lt:${t.limitType}`}function th(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>M0(r)).join(", ")}]`),ql(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),`Target(${n})`}(Bn(t))}; limitType=${t.limitType})`}function Yl(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Us(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=wm(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Us(n),r)||n.endAt&&!function(s,i,o){const a=wm(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Us(n),r))}(t,e)}function TC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const s of Us(t)){const i=SC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Gs(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return x0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new De(H.comparator);function jn(){return AC}const V0=new De(H.comparator);function Ai(...t){let e=V0;for(const n of t)e=e.insert(n.key,n);return e}function B0(t){let e=V0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Vi()}function j0(){return Vi()}function Vi(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const CC=new De(H.comparator),xC=new gt(H.comparator);function le(...t){let e=xC;for(const n of t)e=e.add(n);return e}const kC=new gt(ye);function NC(){return kC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function H0(t){return{integerValue:""+t}}function OC(t,e){return cC(e)?H0(e):z0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this._=void 0}}function RC(t,e,n){return t instanceof po?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Pf(s)&&(s=Mf(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof mo?K0(t,e):t instanceof go?W0(t,e):function(r,s){const i=q0(r,s),o=Im(i)+Im(r.gt);return Ju(i)&&Ju(r.gt)?H0(o):z0(r.serializer,o)}(t,e)}function DC(t,e,n){return t instanceof mo?K0(t,e):t instanceof go?W0(t,e):n}function q0(t,e){return t instanceof Ja?Ju(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class po extends Ql{}class mo extends Ql{constructor(e){super(),this.elements=e}}function K0(t,e){const n=G0(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class go extends Ql{constructor(e){super(),this.elements=e}}function W0(t,e){let n=G0(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class Ja extends Ql{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Im(t){return Be(t.integerValue||t.doubleValue)}function G0(t){return Lf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.field=e,this.transform=n}}function MC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof mo&&r instanceof mo||n instanceof go&&r instanceof go?Ws(n.elements,r.elements,kn):n instanceof Ja&&r instanceof Ja?kn(n.gt,r.gt):n instanceof po&&r instanceof po}(t.transform,e.transform)}class LC{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function Y0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new J0(t.key,en.none()):new Lo(t.key,t.data,en.none());{const n=t.data,r=Ct.empty();let s=new gt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new Ut(s.toArray()),en.none())}}function FC(t,e,n){t instanceof Lo?function(r,s,i){const o=r.value.clone(),a=Sm(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(r,s,i){if(!Aa(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Sm(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Q0(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Bi(t,e,n,r){return t instanceof Lo?function(s,i,o,a){if(!Aa(s.precondition,i))return o;const l=s.value.clone(),c=Am(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,i,o,a){if(!Aa(s.precondition,i))return o;const l=Am(s.fieldTransforms,a,i),c=i.data;return c.setAll(Q0(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Aa(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function $C(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=q0(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ws(n,r,(s,i)=>MC(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lo extends Jl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends Jl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Q0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sm(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,DC(o,a,n[s]))}return r}function Am(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RC(i,o,e))}return r}class J0 extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UC extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Y0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>Tm(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>Tm(n,r))}}class Vf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=CC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,fe;function zC(t){switch(t){default:return Q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function X0(t){if(t===void 0)return Vn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ve.OK:return E.OK;case Ve.CANCELLED:return E.CANCELLED;case Ve.UNKNOWN:return E.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return E.INTERNAL;case Ve.UNAVAILABLE:return E.UNAVAILABLE;case Ve.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ve.NOT_FOUND:return E.NOT_FOUND;case Ve.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ve.ABORTED:return E.ABORTED;case Ve.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ve.DATA_LOSS:return E.DATA_LOSS;default:return Q()}}(fe=Ve||(Ve={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fa}static getOrCreateInstance(){return fa===null&&(fa=new Bf),fa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Fs([4294967295,4294967295],0);function Cm(t){const e=HC().encode(t),n=new GA;return n.update(e),new Uint8Array(n.digest())}function xm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([n,r],0),new Fs([s,i],0)]}class jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Fs.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(Fs.fromNumber(r)));return s.compare(qC)===1&&(s=new Fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Cm(e),[r,s]=xm(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Cm(e),[r,s]=xm(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(Z.min(),s,new De(ye),jn(),le())}}class Fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Z0{constructor(e,n){this.targetId=e,this.Vt=n}}class ew{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class km{constructor(){this.St=0,this.Dt=Om(),this.Ct=wt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=le(),n=le(),r=le();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new Fo(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Om()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class KC{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=jn(),this.zt=Nm(),this.Wt=new De(ye)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(Zu(o))if(s===0){const a=new H(o.path);this.Yt(r,a,ct.newNoDocument(a,Z.min()))}else ke(s===1);else{const a=this.ie(r);if(a!==s){const l=this.re(e,a);if(l!==0){this.ee(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,c)}(n=Bf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,g,y,w,v;const _={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(_.bloomFilter={applied:c===0,hashCount:(f=k==null?void 0:k.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(y=(g=(d=k==null?void 0:k.bits)===null||d===void 0?void 0:d.bitmap)===null||g===void 0?void 0:g.length)!==null&&y!==void 0?y:0,padding:(v=(w=k==null?void 0:k.bits)===null||w===void 0?void 0:w.padding)!==null&&v!==void 0?v:0}),_}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=as(i).toUint8Array()}catch(u){if(u instanceof k0)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new jf(l,o,a)}catch(u){return Ks(u instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:s!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Zu(a.target)){const l=new H(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ct.newNoDocument(l,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=le();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Xl(e,n,this.Wt,this.jt,r);return this.jt=jn(),this.zt=Nm(),this.Wt=new De(ye),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new km,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new gt(ye),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new km),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Nm(){return new De(H.comparator)}function Om(){return new De(H.comparator)}const WC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),GC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),YC=(()=>({and:"AND",or:"OR"}))();class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nh(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function Xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JC(t,e){return Xa(t,e.toTimestamp())}function Sn(t){return ke(!!t),Z.fromTimestamp(function(e){const n=Ir(e);return new Ke(n.seconds,n.nanos)}(t))}function zf(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nw(t){const e=Ce.fromString(t);return ke(ow(e)),e}function rh(t,e){return zf(t.databaseId,e.path)}function Wc(t,e){const n=nw(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(rw(n))}function sh(t,e){return zf(t.databaseId,e)}function XC(t){const e=nw(t);return e.length===4?Ce.emptyPath():rw(e)}function ih(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rw(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rm(t,e,n){return{name:rh(t,e),fields:n.value.mapValue.fields}}function ZC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(ke(c===void 0||typeof c=="string"),wt.fromBase64String(c||"")):(ke(c===void 0||c instanceof Uint8Array),wt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:X0(l.code);return new M(c,l.message||"")}(o);n=new ew(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(t,r.document.name),i=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):Z.min(),a=new Ct({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ca(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wc(t,r.document),i=r.readTime?Sn(r.readTime):Z.min(),o=ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ca([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wc(t,r.document),i=r.removedTargetIds||[];n=new Ca([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jC(s,i),a=r.targetId;n=new Z0(a,o)}}return n}function ex(t,e){let n;if(e instanceof Lo)n={update:Rm(t,e.key,e.value)};else if(e instanceof J0)n={delete:rh(t,e.key)};else if(e instanceof Dr)n={update:Rm(t,e.key,e.data),updateMask:cx(e.fieldMask)};else{if(!(e instanceof UC))return Q();n={verify:rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof po)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mo)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof go)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ja)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:JC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function tx(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Sn(r.updateTime):Sn(s);return i.isEqual(Z.min())&&(i=Sn(s)),new LC(i,r.transformResults||[])}(n,e))):[]}function nx(t,e){return{documents:[sh(t,e.path)]}}function rx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return iw(on.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:xs(u.field),direction:ox(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=nh(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sx(t){let e=XC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=sw(u);return h instanceof on&&D0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new $s(ks(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ql(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Ya(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Ya(f,h)}(n.endAt)),IC(e,s,o,i,a,"F",l,c)}function ix(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ks(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ks(e.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(e.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ks(e.unaryFilter.field);return ze.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(ks(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return on.create(e.compositeFilter.filters.map(n=>sw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function ox(t){return WC[t]}function ax(t){return GC[t]}function lx(t){return YC[t]}function xs(t){return{fieldPath:t.canonicalString()}}function ks(t){return ht.fromServerFormat(t.fieldPath)}function iw(t){return t instanceof ze?function(e){if(e.op==="=="){if(vm(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NAN"}};if(ym(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vm(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NAN"}};if(ym(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(e.field),op:ax(e.op),value:e.value}}}(t):t instanceof on?function(e){const n=e.getFilters().map(r=>iw(r));return n.length===1?n[0]:{compositeFilter:{op:lx(e.op),filters:n}}}(t):Q()}function cx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ow(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.fe=e}}function hx(t){const e=sx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.rn=new dx}addToCollectionParentIndex(e,n){return this.rn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Er.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class dx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Qs(0)}static Mn(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bi(r.mutation,s,Ut.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ai();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=jn();const o=Vi(),a=Vi();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Dr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Bi(u.mutation,c,u.mutation.getFieldMask(),Ke.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new mx(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new De((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ut.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||le()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=j0();u.forEach(f=>{if(!i.has(f)){const d=Y0(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Yr());let a=-1,l=i;return o.next(c=>x.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?x.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:B0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ai();return this.indexManager.getCollectionParents(e,s).next(o=>x.forEach(o,a=>{const l=function(c,u){return new oi(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ct.newInvalidDocument(c)))});let o=Ai();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Bi(c.mutation,l,Ut.empty(),Ke.now()),Yl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return x.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Sn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:hx(r.bundledQuery),readTime:Sn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.overlays=new De(H.comparator),this.ls=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Yr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return x.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let i=this.ls.get(n);i===void 0&&(i=le(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.fs=new gt(Ye.ds),this.ws=new gt(Ye._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ye(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new H(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new H(new Ce([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=le();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return H.comparator(e.key,n.key)||ye(e.As,n.As)}static _s(e,n){return ye(e.As,n.As)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new gt(Ye.ds)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(ye);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),x.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new H(i),0);let a=new gt(ye);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.As)),!0)},o),x.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.Ds=e,this.docs=new De(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||oC(iC(u),r)<=0||(s.has(u.key)||Yl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Cs(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _x(this)}getSize(e){return x.resolve(this.size)}}class _x extends px{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.persistence=e,this.xs=new ai(n=>Ff(n),$f),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Hf,this.targetCount=0,this.Ms=Qs.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),x.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Fn(n),x.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n){this.$s={},this.overlays={},this.Os=new Df(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Ex(this),this.indexManager=new fx,this.remoteDocumentCache=function(r){return new bx(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new ux(n),this.qs=new yx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new wx(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new Tx(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return x.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Tx extends lC{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.Qs=new Hf,this.js=null}static zs(e){return new qf(e)}get Ws(){if(this.js)return this.js;throw Q()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),x.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ws,r=>{const s=H.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return x.or([()=>x.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Em(n))return x.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qa(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Qa(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,r,s){return Em(n)||s.isEqual(Z.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(fm()<=ge.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),th(n)),this.Wi(e,o,n,sC(s,-1)))})}ji(e,n){let r=new gt(U0(e));return n.forEach((s,i)=>{Yl(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return fm()<=ge.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",th(n)),this.Ui.getDocumentsMatchingQuery(e,n,Er.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new De(ye),this.Yi=new ai(i=>Ff(i),$f),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gx(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Cx(t,e,n,r){return new Ax(t,e,n,r)}async function aw(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=le();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function xx(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=x.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const y=l.docVersions.get(d);ke(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function lw(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function kx(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(wt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(g,y,w){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.Bs.updateTargetData(i,d))});let l=jn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Nx(i,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!r.isEqual(Z.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return x.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=s,i))}function Nx(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:s}})}function Ox(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rx(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function oh(t,e,n){const r=re(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mo(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Dm(t,e,n){const r=re(t);let s=Z.min(),i=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=re(a),h=u.Yi.get(c);return h!==void 0?x.resolve(u.Ji.get(h)):u.Bs.getTargetData(l,c)}(r,o,Bn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:le())).next(a=>(Dx(r,TC(e),a),{documents:a,ir:i})))}function Dx(t,e,n){let r=t.Xi.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Pm{constructor(){this.activeTargetIds=NC()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Px{constructor(){this.Hr=new Pm,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Pm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da=null;function Gc(){return da===null?da=268435456+Math.round(2147483648*Math.random()):da++,"0x"+da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class $x extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Gc(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,s,i),this.Ao(e,a,l,r).then(c=>(V("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Ks("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ii,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=Lx[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Gc();return new Promise((o,a)=>{const l=new WA;l.setWithCredentials(!0),l.listenOnce(HA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kc.NO_ERROR:const u=l.getResponseJson();V(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Kc.TIMEOUT:V(at,`RPC '${e}' ${i} timed out`),a(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const h=l.getStatus();if(V(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(d.status);a(new M(g,d.message))}else a(new M(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(E.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(at,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);V(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=Gc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jA(),a=zA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new KA({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");V(at,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const g=new Fx({ro:w=>{d?V(at,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(V(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),V(at,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},oo:()=>h.close()}),y=(w,v,_)=>{w.listen(v,k=>{try{_(k)}catch(F){setTimeout(()=>{throw F},0)}})};return y(h,ca.EventType.OPEN,()=>{d||V(at,`RPC '${e}' stream ${s} transport opened.`)}),y(h,ca.EventType.CLOSE,()=>{d||(d=!0,V(at,`RPC '${e}' stream ${s} transport closed`),g.wo())}),y(h,ca.EventType.ERROR,w=>{d||(d=!0,Ks(at,`RPC '${e}' stream ${s} transport errored:`,w),g.wo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,ca.EventType.MESSAGE,w=>{var v;if(!d){const _=w.data[0];ke(!!_);const k=_,F=k.error||((v=k[0])===null||v===void 0?void 0:v.error);if(F){V(at,`RPC '${e}' stream ${s} received error:`,F);const W=F.status;let P=function(ce){const j=Ve[ce];if(j!==void 0)return X0(j)}(W),X=F.message;P===void 0&&(P=E.INTERNAL,X="Unknown error status: "+W+" with message "+F.message),d=!0,g.wo(new M(P,X)),h.close()}else V(at,`RPC '${e}' stream ${s} received:`,_),g._o(_)}}),y(a,qA.STAT_EVENT,w=>{w.stat===um.PROXY?V(at,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===um.NOPROXY&&V(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){return new QC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,r,s,i,o,a,l){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new cw(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new M(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ux extends uw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=ZC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Z.min():i.readTime?Sn(i.readTime):Z.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=ih(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Zu(a)?{documents:nx(s,a)}:{query:rx(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=tw(s,i.resumeToken);const l=nh(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(Z.min())>0){o.readTime=Xa(s,i.snapshotVersion.toTimestamp());const l=nh(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=ix(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=ih(this.serializer),n.removeTarget=e,this.Wo(n)}}class Vx extends uw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=tx(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.cu(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ih(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ex(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(E.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class jx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Vn(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Es(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l.vu.add(4),await $o(l),l.bu.set("Unknown"),l.vu.delete(4),await ec(l)}(this))})}),this.bu=new jx(r,s)}}async function ec(t){if(Es(t))for(const e of t.Ru)await e(!0)}async function $o(t){for(const e of t.Ru)await e(!1)}function hw(t,e){const n=re(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Yf(n)?Gf(n):li(n).Ko()&&Wf(n,e))}function fw(t,e){const n=re(t),r=li(n);n.Au.delete(e),r.Ko()&&dw(n,e),n.Au.size===0&&(r.Ko()?r.jo():Es(n)&&n.bu.set("Unknown"))}function Wf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}li(t).su(e)}function dw(t,e){t.Vu.qt(e),li(t).iu(e)}function Gf(t){t.Vu=new KC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),li(t).start(),t.bu.gu()}function Yf(t){return Es(t)&&!li(t).Uo()&&t.Au.size>0}function Es(t){return re(t).vu.size===0}function pw(t){t.Vu=void 0}async function Hx(t){t.Au.forEach((e,n)=>{Wf(t,e)})}async function qx(t,e){pw(t),Yf(t)?(t.bu.Iu(e),Gf(t)):t.bu.set("Unknown")}async function Kx(t,e,n){if(t.bu.set("Online"),e instanceof ew&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Za(t,r)}else if(e instanceof Ca?t.Vu.Ht(e):e instanceof Z0?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Z.min()))try{const r=await lw(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Au.get(l);c&&s.Au.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Au.get(a);if(!c)return;s.Au.set(a,c.withResumeToken(wt.EMPTY_BYTE_STRING,c.snapshotVersion)),dw(s,a);const u=new lr(c.target,a,l,c.sequenceNumber);Wf(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Za(t,r)}}async function Za(t,e,n){if(!Mo(e))throw e;t.vu.add(1),await $o(t),t.bu.set("Offline"),n||(n=()=>lw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ec(t)})}function mw(t,e){return e().catch(n=>Za(t,n,e))}async function tc(t){const e=re(t),n=Tr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Wx(e);)try{const s=await Ox(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,Gx(e,s)}catch(s){await Za(e,s)}gw(e)&&yw(e)}function Wx(t){return Es(t)&&t.Eu.length<10}function Gx(t,e){t.Eu.push(e);const n=Tr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function gw(t){return Es(t)&&!Tr(t).Uo()&&t.Eu.length>0}function yw(t){Tr(t).start()}async function Yx(t){Tr(t).hu()}async function Qx(t){const e=Tr(t);for(const n of t.Eu)e.uu(n.mutations)}async function Jx(t,e,n){const r=t.Eu.shift(),s=Vf.from(r,e,n);await mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await tc(t)}async function Xx(t,e){e&&Tr(t).ou&&await async function(n,r){if(s=r.code,zC(s)&&s!==E.ABORTED){const i=n.Eu.shift();Tr(n).Qo(),await mw(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await tc(n)}var s}(t,e),gw(t)&&yw(t)}async function Lm(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.vu.add(3),await $o(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ec(n)}async function Zx(t,e){const n=re(t);e?(n.vu.delete(2),await ec(n)):e||(n.vu.add(2),await $o(n),n.bu.set("Unknown"))}function li(t){return t.Su||(t.Su=function(e,n,r){const s=re(e);return s.fu(),new Ux(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:Hx.bind(null,t),ao:qx.bind(null,t),nu:Kx.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Yf(t)?Gf(t):t.bu.set("Unknown")):(await t.Su.stop(),pw(t))})),t.Su}function Tr(t){return t.Du||(t.Du=function(e,n,r){const s=re(e);return s.fu(),new Vx(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:Yx.bind(null,t),ao:Xx.bind(null,t),au:Qx.bind(null,t),cu:Jx.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await tc(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Qf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Mo(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ai(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.Cu=new De(H.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Q():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Js(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.Nu=void 0,this.listeners=[]}}class tk{constructor(){this.queries=new ai(e=>$0(e),Gl),this.onlineState="Unknown",this.ku=new Set}}async function vw(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ek),s)try{i.Nu=await n.onListen(r)}catch(o){const a=Jf(o,`Initialization of query '${th(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Xf(n)}async function ww(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nk(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&Xf(n)}function rk(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Xf(t){t.ku.forEach(e=>{e.next()})}class bw{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.key=e}}class Ew{constructor(e){this.key=e}}class sk{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=le(),this.mutatedKeys=le(),this.tc=U0(e),this.ec=new Vs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Fm,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Yl(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?g!==y&&(r.track({type:3,doc:d}),w=!0):this.rc(f,d)||(r.track({type:2,doc:d}),w=!0,(l&&this.tc(d,l)>0||c&&this.tc(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),w=!0):f&&!d&&(r.track({type:1,doc:f}),w=!0,(l||c)&&(a=!0)),w&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return d(h)-d(f)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new Js(this.query,e.ec,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Fm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=le(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Ew(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new _w(r))}),n}hc(e){this.Yu=e.ir,this.Zu=le();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Js.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ik{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ok{constructor(e){this.key=e,this.fc=!1}}class ak{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ai(a=>$0(a),Gl),this._c=new Map,this.mc=new Set,this.gc=new De(H.comparator),this.yc=new Map,this.Ic=new Hf,this.Tc={},this.Ec=new Map,this.Ac=Qs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function lk(t,e){const n=vk(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Rx(n.localStore,Bn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await ck(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&hw(n.remoteStore,o)}return s}async function ck(t,e,n,r,s){t.Rc=(h,f,d)=>async function(g,y,w,v){let _=y.view.sc(w);_.zi&&(_=await Dm(g.localStore,y.query,!1).then(({documents:W})=>y.view.sc(W,_)));const k=v&&v.targetChanges.get(y.targetId),F=y.view.applyChanges(_,g.isPrimaryClient,k);return Um(g,y.targetId,F.cc),F.snapshot}(t,h,f,d);const i=await Dm(t.localStore,e,!0),o=new sk(e,i.ir),a=o.sc(i.documents),l=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Um(t,n,c.cc);const u=new ik(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function uk(t,e){const n=re(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Gl(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fw(n.remoteStore,r.targetId),ah(n,r.targetId)}).catch(Po)):(ah(n,r.targetId),await oh(n.localStore,r.targetId,!0))}async function hk(t,e,n){const r=wk(t);try{const s=await function(i,o){const a=re(i),l=Ke.now(),c=o.reduce((f,d)=>f.add(d.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=jn(),g=le();return a.Zi.getEntries(f,c).next(y=>{d=y,d.forEach((w,v)=>{v.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const w=[];for(const v of o){const _=$C(v,u.get(v.key).overlayedDocument);_!=null&&w.push(new Dr(v.key,_,N0(_.value.mapValue),en.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:B0(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.Tc[i.currentUser.toKey()];l||(l=new De(ye)),l=l.insert(o,a),i.Tc[i.currentUser.toKey()]=l}(r,s.batchId,n),await Uo(r,s.changes),await tc(r.remoteStore)}catch(s){const i=Jf(s,"Failed to persist write");n.reject(i)}}async function Iw(t,e){const n=re(t);try{const r=await kx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?ke(o.fc):s.removedDocuments.size>0&&(ke(o.fc),o.fc=!1))}),await Uo(n,r,e)}catch(r){await Po(r)}}function $m(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&Xf(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fk(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new De(H.comparator);o=o.insert(i,ct.newNoDocument(i,Z.min()));const a=le().add(i),l=new Xl(Z.min(),new Map,new De(ye),o,a);await Iw(r,l),r.gc=r.gc.remove(i),r.yc.delete(e),Zf(r)}else await oh(r.localStore,e,!1).then(()=>ah(r,e,n)).catch(Po)}async function dk(t,e){const n=re(t),r=e.batch.batchId;try{const s=await xx(n.localStore,e);Sw(n,r,null),Tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uo(n,s)}catch(s){await Po(s)}}async function pk(t,e,n){const r=re(t);try{const s=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ke(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);Sw(r,e,n),Tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uo(r,s)}catch(s){await Po(s)}}function Tw(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Sw(t,e,n){const r=re(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Aw(t,r)})}function Aw(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(fw(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Zf(t))}function Um(t,e,n){for(const r of n)r instanceof _w?(t.Ic.addReference(r.key,e),mk(t,r)):r instanceof Ew?(V("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Aw(t,r.key)):Q()}function mk(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.mc.add(r),Zf(t))}function Zf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new H(Ce.fromString(e)),r=t.Ac.next();t.yc.set(r,new ok(n)),t.gc=t.gc.insert(n,r),hw(t.remoteStore,new lr(Bn(Kl(n.path)),r,"TargetPurposeLimboResolution",Df.ct))}}async function Uo(t,e,n){const r=re(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Kf.Li(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,l){const c=re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(l,h=>x.forEach(h.Fi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>x.forEach(h.Bi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Mo(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Ji.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.Ji=c.Ji.insert(h,g)}}}(r.localStore,i))}async function gk(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await aw(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uo(n,r.er)}}function yk(t,e){const n=re(t),r=n.yc.get(e);if(r&&r.fc)return le().add(r.key);{let s=le();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function vk(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fk.bind(null,e),e.dc.nu=nk.bind(null,e.eventManager),e.dc.Pc=rk.bind(null,e.eventManager),e}function wk(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pk.bind(null,e),e}class Vm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Cx(this.persistence,new Sx,e.initialUser,this.serializer)}createPersistence(e){return new Ix(qf.zs,this.serializer)}createSharedClientState(e){return new Px}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$m(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gk.bind(null,this.syncEngine),await Zx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tk}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new $x(s));var s;return function(i,o,a,l){return new Bx(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>$m(this.syncEngine,a,0),o=Mm.D()?new Mm:new Mx,new zx(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new ak(r,s,i,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await $o(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=C0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await aw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ik(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Lm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Lm(e.remoteStore,i)),t._onlineComponents=e}function Ek(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ik(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ek(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new Vm)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Qc(t,new Vm);return t._offlineComponents}async function xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Bm(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Bm(t,new bk))),t._onlineComponents}function Tk(t){return xw(t).then(e=>e.syncEngine)}async function lh(t){const e=await xw(t),n=e.eventManager;return n.onListen=lk.bind(null,e.syncEngine),n.onUnlisten=uk.bind(null,e.syncEngine),n}function Sk(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new Cw({next:h=>{i.enqueueAndForget(()=>ww(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new M(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new M(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new bw(Kl(o.path),c,{includeMetadataChanges:!0,Ku:!0});return vw(s,u)}(await lh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ak(t,e,n,r){if(e===!0&&r===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zm(t){if(!H.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hm(t){if(H.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ck(t,e){if(e<=0)throw new M(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new YA;switch(n.type){case"firstParty":return new ZA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jm.get(e);n&&(V("ComponentProvider","Removing Datastore"),jm.delete(e),n.terminate())}(this),Promise.resolve()}}function xk(t,e,n,r={}){var s;const i=(t=tn(t,rc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=lt.MOCK_USER;else{a=_T(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new QA(new A0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class gr extends Pr{constructor(e,n,r){super(e,n,Kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new H(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Jc(t,e,...n){if(t=He(t),Nw("collection","path",e),t instanceof rc){const r=Ce.fromString(e,...n);return Hm(r),new gr(t,null,r)}{if(!(t instanceof yt||t instanceof gr))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Hm(r),new gr(t.firestore,null,r)}}function nr(t,e,...n){if(t=He(t),arguments.length===1&&(e=C0.A()),Nw("doc","path",e),t instanceof rc){const r=Ce.fromString(e,...n);return zm(r),new yt(t,null,new H(r))}{if(!(t instanceof yt||t instanceof gr))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return zm(r),new yt(t.firestore,t instanceof gr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new cw(this,"async_queue_retry"),this.Xc=()=>{const n=Yc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Yc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new mr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Mo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Qf.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&Q()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Km(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cs extends rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new kk,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ow(this),this._firestoreClient.terminate()}}function Nk(t,e){const n=typeof t=="object"?t:cf(),r=typeof t=="string"?t:e||"(default)",s=ws(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wT("firestore");i&&xk(s,...i)}return s}function ed(t){return t._firestoreClient||Ow(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ow(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new hC(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kw(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new _k(t._authCredentials,t._appCheckCredentials,t._queue,i),((n=s.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=s.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(wt.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=/^__.*__$/;class Rk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lo(e,this.data,n,this.fieldTransforms)}}class Rw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Dw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class nd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new nd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return el(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Dw(this.ca)&&Ok.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Dk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}ya(e,n,r,s=!1){return new nd({ca:e,methodName:n,ga:r,path:ht.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oc(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new Dk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pw(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);sd("Data must be an object, but it was:",o,r);const a=Mw(r,o);let l,c;if(i.merge)l=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=ch(e,h,n);if(!o.contains(f))throw new M(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Fw(u,f)||u.push(f)}l=new Ut(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Rk(new Ct(a),l,c)}class ac extends ic{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}class rd extends ic{_toFieldTransform(e){return new PC(e.path,new po)}isEqual(e){return e instanceof rd}}function Pk(t,e,n,r){const s=t.ya(1,e,n);sd("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();_s(r,(l,c)=>{const u=id(e,l,n);c=He(c);const h=s.da(u);if(c instanceof ac)i.push(u);else{const f=Vo(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ut(i);return new Rw(o,a,s.fieldTransforms)}function Mk(t,e,n,r,s,i){const o=t.ya(1,e,n),a=[ch(e,r,n)],l=[s];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ch(e,i[f])),l.push(i[f+1]);const c=[],u=Ct.empty();for(let f=a.length-1;f>=0;--f)if(!Fw(c,a[f])){const d=a[f];let g=l[f];g=He(g);const y=o.da(d);if(g instanceof ac)c.push(d);else{const w=Vo(g,y);w!=null&&(c.push(d),u.set(d,w))}}const h=new Ut(c);return new Rw(u,h,o.fieldTransforms)}function Lk(t,e,n,r=!1){return Vo(n,t.ya(r?4:3,e))}function Vo(t,e){if(Lw(t=He(t)))return sd("Unsupported field value:",e,t),Mw(t,e);if(t instanceof ic)return function(n,r){if(!Dw(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Vo(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return OC(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ke.fromDate(n);return{timestampValue:Xa(r.serializer,s)}}if(n instanceof Ke){const s=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xa(r.serializer,s)}}if(n instanceof td)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xs)return{bytesValue:tw(r.serializer,n._byteString)};if(n instanceof yt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${nc(n)}`)}(t,e)}function Mw(t,e){const n={};return x0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,s)=>{const i=Vo(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Lw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof td||t instanceof Xs||t instanceof yt||t instanceof ic)}function sd(t,e,n){if(!Lw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=nc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function ch(t,e,n){if((e=He(e))instanceof sc)return e._internalPath;if(typeof e=="string")return id(t,e);throw el("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fk=new RegExp("[~\\*/\\[\\]]");function id(t,e,n){if(e.search(Fk)>=0)throw el(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sc(...e.split("."))._internalPath}catch{throw el(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function el(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(E.INVALID_ARGUMENT,a+t+l)}function Fw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(od("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $k extends $w{data(){return super.data()}}function od(t,e){return typeof e=="string"?id(t,e):e instanceof sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ad{}class ld extends ad{}function Vk(t,e,...n){let r=[];e instanceof ad&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof ud).length,o=s.filter(a=>a instanceof cd).length;if(i>1||i>0&&o>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class cd extends ld{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=this._parse(e);return Uw(e._query,n),new Pr(e.firestore,e.converter,eh(e._query,n))}_parse(e){const n=oc(e.firestore);return function(s,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Gm(u,c);const f=[];for(const d of u)f.push(Wm(a,s,d));h={arrayValue:{values:f}}}else h=Wm(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Gm(u,c),h=Lk(o,i,u,c==="in"||c==="not-in");return ze.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ud extends ad{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ud(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Uw(i,a),i=eh(i,a)}(e._query,n),new Pr(e.firestore,e.converter,eh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hd extends ld{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hd(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new $s(s,i);return function(a,l){if(Uf(a)===null){const c=Wl(a);c!==null&&Vw(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new oi(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Bk(t,e="asc"){const n=e,r=od("orderBy",t);return hd._create(r,n)}class fd extends ld{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new fd(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,Qa(e._query,this._limit,this._limitType))}}function jk(t){return Ck("limit",t),fd._create("limit",t,"F")}function Wm(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F0(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!H.isDocumentKey(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gm(t,new H(r))}if(n instanceof yt)return gm(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function Gm(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uw(t,e){if(e.isInequality()){const r=Wl(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new M(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Uf(t);i!==null&&Vw(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Vw(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class zk{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new td(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ke(ow(r));const s=new ho(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jw extends $w{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(od("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xa extends jw{data(e={}){return super.data(e)}}class Hk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xa(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:qk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){t=tn(t,yt);const e=tn(t.firestore,cs);return Sk(ed(e),t._key).then(n=>Hw(e,t,n))}class zw extends zk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Wk(t,e,n){t=tn(t,yt);const r=tn(t.firestore,cs),s=Bw(t.converter,e,n);return dd(r,[Pw(oc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function As(t,e,n,...r){t=tn(t,yt);const s=tn(t.firestore,cs),i=oc(s);let o;return o=typeof(e=He(e))=="string"||e instanceof sc?Mk(i,"updateDoc",t._key,e,n,r):Pk(i,"updateDoc",t._key,e),dd(s,[o.toMutation(t._key,en.exists(!0))])}function Gk(t,e){const n=tn(t.firestore,cs),r=nr(t),s=Bw(t.converter,e);return dd(n,[Pw(oc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Xc(t,...e){var n,r,s;t=He(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Km(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Km(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof yt)c=tn(t.firestore,cs),u=Kl(t._key.path),l={next:h=>{e[o]&&e[o](Hw(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tn(t,Pr);c=tn(h.firestore,cs),u=h._query;const f=new zw(c);l={next:d=>{e[o]&&e[o](new Hk(c,f,h,d))},error:e[o+1],complete:e[o+2]},Uk(t._query)}return function(h,f,d,g){const y=new Cw(g),w=new bw(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>vw(await lh(h),w)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>ww(await lh(h),w))}}(ed(c),u,a,l)}function dd(t,e){return function(n,r){const s=new mr;return n.asyncQueue.enqueueAndForget(async()=>hk(await Tk(n),r,s)),s.promise}(ed(t),e)}function Hw(t,e,n){const r=n.docs.get(e._key),s=new zw(t);return new jw(t,s,e._key,r,new xi(n.hasPendingWrites,n.fromCache),e.converter)}function Yk(){return new rd("serverTimestamp")}(function(t,e=!0){(function(n){ii=n})(ni),xn(new rn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new cs(new JA(n.getProvider("auth-internal")),new tC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Yt(hm,"3.13.0",t),Yt(hm,"3.13.0","esm2017")})();function pd(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Bo(){let t=[],e={addEventListener(n,r,s,i){return n.addEventListener(r,s,i),e.add(()=>n.removeEventListener(r,s,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return pd(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,s){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:s}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=Bo();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let s of t.splice(r,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}let Qk=Symbol("headlessui.useid"),Jk=0;function On(){return Qe(Qk,()=>`${++Jk}`)()}function ie(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function an(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,an),r}var Xk=Object.defineProperty,Zk=(t,e,n)=>e in t?Xk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ym=(t,e,n)=>(Zk(t,typeof e!="symbol"?e+"":e,n),n);class e2{constructor(){Ym(this,"current",this.detect()),Ym(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let jo=new e2;function Mr(t){if(jo.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=ie(t);if(e)return e.ownerDocument}return document}let uh=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var wn=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(wn||{}),qw=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(qw||{}),t2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(t2||{});function Kw(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(uh)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var md=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(md||{});function gd(t,e=0){var n;return t===((n=Mr(t))==null?void 0:n.body)?!1:an(e,{[0](){return t.matches(uh)},[1](){let r=t;for(;r!==null;){if(r.matches(uh))return!0;r=r.parentElement}return!1}})}function Ww(t){let e=Mr(t);Fn(()=>{e&&!gd(e.activeElement,0)&&yr(t)})}var n2=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(n2||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function yr(t){t==null||t.focus({preventScroll:!0})}let r2=["textarea","input"].join(",");function s2(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,r2))!=null?n:!1}function Gw(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let o=s.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function i2(t,e){return ji(Kw(),e,{relativeTo:t})}function ji(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:s=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?Gw(t):t:Kw(t);s.length>0&&a.length>1&&(a=a.filter(g=>!s.includes(g))),r=r!=null?r:o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(r))-1;if(e&4)return Math.max(0,a.indexOf(r))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},h=0,f=a.length,d;do{if(h>=f||h+f<=0)return 0;let g=c+h;if(e&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}d=a[g],d==null||d.focus(u),h+=l}while(d!==o.activeElement);return e&6&&s2(d)&&d.select(),2}function Yw(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function o2(){return/Android/gi.test(window.navigator.userAgent)}function a2(){return Yw()||o2()}function pa(t,e,n){jo.isServer||Dt(r=>{document.addEventListener(t,e,n),r(()=>document.removeEventListener(t,e,n))})}function Qw(t,e,n){jo.isServer||Dt(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function Jw(t,e,n=K(()=>!0)){function r(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:ie(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!gd(a,md.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let s=ee(null);pa("pointerdown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pa("mousedown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pa("click",i=>{a2()||s.value&&(r(i,()=>s.value),s.value=null)},!0),pa("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),Qw("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Qm(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function l2(t,e){let n=ee(Qm(t.value.type,t.value.as));return qe(()=>{n.value=Qm(t.value.type,t.value.as)}),Dt(()=>{var r;n.value||ie(e)&&ie(e)instanceof HTMLButtonElement&&!((r=ie(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Jm(t){return[t.screenX,t.screenY]}function c2(){let t=ee([-1,-1]);return{wasMoved(e){let n=Jm(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Jm(e)}}}function u2({container:t,accept:e,walk:n,enabled:r}){Dt(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Mr(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}var Zs=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Zs||{}),cr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(cr||{});function ot({visible:t=!0,features:e=0,ourProps:n,theirProps:r,...s}){var i;let o=Zw(r,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return Zc(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return an(l,{[0](){return null},[1](){return Zc({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Zc(a)}function Zc({props:t,attrs:e,slots:n,slot:r,name:s}){var i,o;let{as:a,...l}=eb(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,r),u={};if(r){let h=!1,f=[];for(let[d,g]of Object.entries(r))typeof g=="boolean"&&(h=!0),g===!0&&f.push(d);h&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Xw(c!=null?c:[]),Object.keys(l).length>0||Object.keys(e).length>0){let[h,...f]=c!=null?c:[];if(!h2(h)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(y=>y.trim()).filter((y,w,v)=>v.indexOf(y)===w).sort((y,w)=>y.localeCompare(w)).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let d=Zw((o=h.props)!=null?o:{},l,u),g=$n(h,d,!0);for(let y in d)y.startsWith("on")&&(g.props||(g.props={}),g.props[y]=d[y]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return je(a,Object.assign({},l,u),{default:()=>c})}function Xw(t){return t.flatMap(e=>e.type===Et?Xw(e.children):[e])}function Zw(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):e[s]=r[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](s,...i){let o=n[r];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...i)}}});return e}function eb(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function h2(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var tl=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(tl||{});let hh=Ue({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var r;let{features:s,...i}=t,o={"aria-hidden":(s&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return ot({ourProps:o,theirProps:i,slot:{},attrs:n,slots:e,name:"Hidden"})}}}),tb=Symbol("Context");var rt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(rt||{});function f2(){return lc()!==null}function lc(){return Qe(tb,null)}function nb(t){Qt(tb,t)}var Ge=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ge||{});function d2(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let qr=[];d2(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&qr[0]!==e.target&&(qr.unshift(e.target),qr=qr.filter(n=>n!=null&&n.isConnected),qr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function p2(t){throw new Error("Unexpected object: "+t)}var Vt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Vt||{});function m2(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1;switch(t.focus){case 0:{for(let i=0;i<n.length;++i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 1:{s===-1&&(s=n.length);for(let i=s-1;i>=0;--i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 2:{for(let i=s+1;i<n.length;++i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 3:{for(let i=n.length-1;i>=0;--i)if(!e.resolveDisabled(n[i],i,n))return i;return r}case 4:{for(let i=0;i<n.length;++i)if(e.resolveId(n[i],i,n)===t.id)return i;return r}case 5:return null;default:p2(t)}}function rb(t,e,n,r){jo.isServer||Dt(s=>{t=t!=null?t:window,t.addEventListener(e,n,r),s(()=>t.removeEventListener(e,n,r))})}var ki=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ki||{});function g2(){let t=ee(0);return Qw("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}function sb(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let r=ie(n);r instanceof HTMLElement&&e.add(r)}return e}var ib=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(ib||{});let wi=Object.assign(Ue({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:ee(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:r}){let s=ee(null);r({el:s,$el:s});let i=K(()=>Mr(s)),o=ee(!1);qe(()=>o.value=!0),Rt(()=>o.value=!1),v2({ownerDocument:i},K(()=>o.value&&Boolean(t.features&16)));let a=w2({ownerDocument:i,container:s,initialFocus:K(()=>t.initialFocus)},K(()=>o.value&&Boolean(t.features&2)));b2({ownerDocument:i,container:s,containers:t.containers,previousActiveElement:a},K(()=>o.value&&Boolean(t.features&8)));let l=g2();function c(d){let g=ie(s);!g||(y=>y())(()=>{an(l.value,{[ki.Forwards]:()=>{ji(g,wn.First,{skipElements:[d.relatedTarget]})},[ki.Backwards]:()=>{ji(g,wn.Last,{skipElements:[d.relatedTarget]})}})})}let u=ee(!1);function h(d){d.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(d){if(!o.value)return;let g=sb(t.containers);ie(s)instanceof HTMLElement&&g.add(ie(s));let y=d.relatedTarget;y instanceof HTMLElement&&y.dataset.headlessuiFocusGuard!=="true"&&(ob(g,y)||(u.value?ji(ie(s),an(l.value,{[ki.Forwards]:()=>wn.Next,[ki.Backwards]:()=>wn.Previous})|wn.WrapAround,{relativeTo:d.target}):d.target instanceof HTMLElement&&yr(d.target)))}return()=>{let d={},g={ref:s,onKeydown:h,onFocusout:f},{features:y,initialFocus:w,containers:v,..._}=t;return je(Et,[Boolean(y&4)&&je(hh,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:tl.Focusable}),ot({ourProps:g,theirProps:{...e,..._},slot:d,attrs:e,slots:n,name:"FocusTrap"}),Boolean(y&4)&&je(hh,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:tl.Focusable})])}}}),{features:ib});function y2(t){let e=ee(qr.slice());return Tn([t],([n],[r])=>{r===!0&&n===!1?pd(()=>{e.value.splice(0)}):r===!1&&n===!0&&(e.value=qr.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function v2({ownerDocument:t},e){let n=y2(e);qe(()=>{Dt(()=>{var r,s;e.value||((r=t.value)==null?void 0:r.activeElement)===((s=t.value)==null?void 0:s.body)&&yr(n())},{flush:"post"})}),Rt(()=>{e.value&&yr(n())})}function w2({ownerDocument:t,container:e,initialFocus:n},r){let s=ee(null),i=ee(!1);return qe(()=>i.value=!0),Rt(()=>i.value=!1),qe(()=>{Tn([e,n,r],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!r.value)return;let l=ie(e);l&&pd(()=>{var c,u;if(!i.value)return;let h=ie(n),f=(c=t.value)==null?void 0:c.activeElement;if(h){if(h===f){s.value=f;return}}else if(l.contains(f)){s.value=f;return}h?yr(h):ji(l,wn.First|wn.NoScroll)===qw.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),s}function b2({ownerDocument:t,container:e,containers:n,previousActiveElement:r},s){var i;rb((i=t.value)==null?void 0:i.defaultView,"focus",o=>{if(!s.value)return;let a=sb(n);ie(e)instanceof HTMLElement&&a.add(ie(e));let l=r.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?ob(a,c)?(r.value=c,yr(c)):(o.preventDefault(),o.stopPropagation(),yr(l)):yr(r.value)},!0)}function ob(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function _2(t){let e=z_(t.getSnapshot());return Rt(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function E2(t,e){let n=t(),r=new Set;return{getSnapshot(){return n},subscribe(s){return r.add(s),()=>r.delete(s)},dispatch(s,...i){let o=e[s].call(n,...i);o&&(n=o,r.forEach(a=>a()))}}}function I2(){let t;return{before({doc:e}){var n;let r=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:e,d:n}){let r=e.documentElement,s=r.clientWidth-r.offsetWidth,i=t-s;n.style(r,"paddingRight",`${i}px`)}}}function T2(){return Yw()?{before({doc:t,d:e,meta:n}){function r(s){return n.containers.flatMap(i=>i()).some(i=>i.contains(s))}e.microTask(()=>{var s;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=Bo();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let i=(s=window.scrollY)!=null?s:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!r(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let l=a.target;for(;l.parentElement&&r(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;i!==l&&window.scrollTo(0,i),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function S2(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function A2(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let Qr=E2(()=>new Map,{PUSH(t,e){var n;let r=(n=this.get(t))!=null?n:{doc:t,count:0,d:Bo(),meta:new Set};return r.count++,r.meta.add(e),this.set(t,r),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let r={doc:t,d:e,meta:A2(n)},s=[T2(),I2(),S2()];s.forEach(({before:i})=>i==null?void 0:i(r)),s.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});Qr.subscribe(()=>{let t=Qr.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let r=e.get(n.doc)==="hidden",s=n.count!==0;(s&&!r||!s&&r)&&Qr.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Qr.dispatch("TEARDOWN",n)}});function C2(t,e,n){let r=_2(Qr),s=K(()=>{let i=t.value?r.value.get(t.value):void 0;return i?i.count>0:!1});return Tn([t,e],([i,o],[a],l)=>{if(!i||!o)return;Qr.dispatch("PUSH",i,n);let c=!1;l(()=>{c||(Qr.dispatch("POP",a!=null?a:i,n),c=!0)})},{immediate:!0}),s}let eu=new Map,bi=new Map;function Xm(t,e=ee(!0)){Dt(n=>{var r;if(!e.value)return;let s=ie(t);if(!s)return;n(function(){var o;if(!s)return;let a=(o=bi.get(s))!=null?o:1;if(a===1?bi.delete(s):bi.set(s,a-1),a!==1)return;let l=eu.get(s);l&&(l["aria-hidden"]===null?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden",l["aria-hidden"]),s.inert=l.inert,eu.delete(s))});let i=(r=bi.get(s))!=null?r:0;bi.set(s,i+1),i===0&&(eu.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),s.setAttribute("aria-hidden","true"),s.inert=!0)})}function x2({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let r=ee(null),s=Mr(r);function i(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(ie(r))||u.contains((l=(a=ie(r))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(h=>u.contains(h))||c.push(u));return c}return{resolveContainers:i,contains(o){return i().some(a=>a.contains(o))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:je(hh,{features:tl.Hidden,ref:r})}}}let ab=Symbol("ForcePortalRootContext");function k2(){return Qe(ab,!1)}let fh=Ue({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Qt(ab,t.force),()=>{let{force:r,...s}=t;return ot({theirProps:s,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),lb=Symbol("StackContext");var dh=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(dh||{});function N2(){return Qe(lb,()=>{})}function O2({type:t,enabled:e,element:n,onUpdate:r}){let s=N2();function i(...o){r==null||r(...o),s(...o)}qe(()=>{Tn(e,(o,a)=>{o?i(0,t,n):a===!0&&i(1,t,n)},{immediate:!0,flush:"sync"})}),Rt(()=>{e.value&&i(1,t,n)}),Qt(lb,i)}let cb=Symbol("DescriptionContext");function R2(){let t=Qe(cb,null);if(t===null)throw new Error("Missing parent");return t}function D2({slot:t=ee({}),name:e="Description",props:n={}}={}){let r=ee([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Qt(cb,{register:s,slot:t,name:e,props:n}),K(()=>r.value.length>0?r.value.join(" "):void 0)}let uF=Ue({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var r;let s=(r=t.id)!=null?r:`headlessui-description-${On()}`,i=R2();return qe(()=>Rt(i.register(s))),()=>{let{name:o="Description",slot:a=ee({}),props:l={}}=i,{...c}=t,u={...Object.entries(l).reduce((h,[f,d])=>Object.assign(h,{[f]:Xh(d)}),{}),id:s};return ot({ourProps:u,theirProps:c,slot:a.value,attrs:e,slots:n,name:o})}}});function P2(t){let e=Mr(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)}const ph=new WeakMap;function M2(t){var e;return(e=ph.get(t))!=null?e:0}function Zm(t,e){let n=e(M2(t));return n<=0?ph.delete(t):ph.set(t,n),n}let ub=Ue({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=ee(null),s=K(()=>Mr(r)),i=k2(),o=Qe(hb,null),a=ee(i===!0||o==null?P2(r.value):o.resolveTarget());a.value&&Zm(a.value,f=>f+1);let l=ee(!1);qe(()=>{l.value=!0}),Dt(()=>{i||o!=null&&(a.value=o.resolveTarget())});let c=Qe(mh,null),u=!1,h=ov();return Tn(r,()=>{if(u||!c)return;let f=ie(r);f&&(Rt(c.register(f),h),u=!0)}),Rt(()=>{var f,d;let g=(f=s.value)==null?void 0:f.getElementById("headlessui-portal-root");!g||a.value!==g||Zm(a.value,y=>y-1)||a.value.children.length>0||(d=a.value.parentElement)==null||d.removeChild(a.value)}),()=>{if(!l.value||a.value===null)return null;let f={ref:r,"data-headlessui-portal":""};return je(kE,{to:a.value},ot({ourProps:f,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),mh=Symbol("PortalParentContext");function L2(){let t=Qe(mh,null),e=ee([]);function n(i){return e.value.push(i),t&&t.register(i),()=>r(i)}function r(i){let o=e.value.indexOf(i);o!==-1&&e.value.splice(o,1),t&&t.unregister(i)}let s={register:n,unregister:r,portals:e};return[e,Ue({name:"PortalWrapper",setup(i,{slots:o}){return Qt(mh,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let hb=Symbol("PortalGroupContext"),F2=Ue({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=wl({resolveTarget(){return t.target}});return Qt(hb,r),()=>{let{target:s,...i}=t;return ot({theirProps:i,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var $2=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($2||{});let gh=Symbol("DialogContext");function zo(t){let e=Qe(gh,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,zo),n}return e}let ma="DC8F892D-2EBD-447C-A4C8-A03058436FF4",U2=Ue({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ma},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:r,expose:s}){var i,o;let a=(i=t.id)!=null?i:`headlessui-dialog-${On()}`,l=ee(!1);qe(()=>{l.value=!0});let c=!1,u=K(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),h=ee(0),f=lc(),d=K(()=>t.open===ma&&f!==null?(f.value&rt.Open)===rt.Open:t.open),g=ee(null),y=K(()=>Mr(g));if(s({el:g,$el:g}),!(t.open!==ma||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof d.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value===ma?void 0:t.open}`);let w=K(()=>l.value&&d.value?0:1),v=K(()=>w.value===0),_=K(()=>h.value>1),k=Qe(gh,null)!==null,[F,W]=L2(),{resolveContainers:P,mainTreeNodeRef:X,MainTreeNode:ce}=x2({portals:F,defaultContainers:[K(()=>{var he;return(he=we.panelRef.value)!=null?he:g.value})]}),j=K(()=>_.value?"parent":"leaf"),se=K(()=>f!==null?(f.value&rt.Closing)===rt.Closing:!1),pe=K(()=>k||se.value?!1:v.value),$=K(()=>{var he,me,bt;return(bt=Array.from((me=(he=y.value)==null?void 0:he.querySelectorAll("body > *"))!=null?me:[]).find(Tt=>Tt.id==="headlessui-portal-root"?!1:Tt.contains(ie(X))&&Tt instanceof HTMLElement))!=null?bt:null});Xm($,pe);let ue=K(()=>_.value?!0:v.value),Pe=K(()=>{var he,me,bt;return(bt=Array.from((me=(he=y.value)==null?void 0:he.querySelectorAll("[data-headlessui-portal]"))!=null?me:[]).find(Tt=>Tt.contains(ie(X))&&Tt instanceof HTMLElement))!=null?bt:null});Xm(Pe,ue),O2({type:"Dialog",enabled:K(()=>w.value===0),element:g,onUpdate:(he,me)=>{if(me==="Dialog")return an(he,{[dh.Add]:()=>h.value+=1,[dh.Remove]:()=>h.value-=1})}});let et=D2({name:"DialogDescription",slot:K(()=>({open:d.value}))}),Ie=ee(null),we={titleId:Ie,panelRef:ee(null),dialogState:w,setTitleId(he){Ie.value!==he&&(Ie.value=he)},close(){e("close",!1)}};Qt(gh,we);let _e=K(()=>!(!v.value||_.value));Jw(P,(he,me)=>{he.preventDefault(),we.close(),Fn(()=>me==null?void 0:me.focus())},_e);let un=K(()=>!(_.value||w.value!==0));rb((o=y.value)==null?void 0:o.defaultView,"keydown",he=>{un.value&&(he.defaultPrevented||he.key===Ge.Escape&&(he.preventDefault(),he.stopPropagation(),we.close()))});let Lr=K(()=>!(se.value||w.value!==0||k));return C2(y,Lr,he=>{var me;return{containers:[...(me=he.containers)!=null?me:[],P]}}),Dt(he=>{if(w.value!==0)return;let me=ie(g);if(!me)return;let bt=new ResizeObserver(Tt=>{for(let pi of Tt){let hn=pi.target.getBoundingClientRect();hn.x===0&&hn.y===0&&hn.width===0&&hn.height===0&&we.close()}});bt.observe(me),he(()=>bt.disconnect())}),()=>{let{open:he,initialFocus:me,...bt}=t,Tt={...n,ref:g,id:a,role:u.value,"aria-modal":w.value===0?!0:void 0,"aria-labelledby":Ie.value,"aria-describedby":et.value},pi={open:w.value===0};return je(fh,{force:!0},()=>[je(ub,()=>je(F2,{target:g.value},()=>je(fh,{force:!1},()=>je(wi,{initialFocus:me,containers:P,features:v.value?an(j.value,{parent:wi.features.RestoreFocus,leaf:wi.features.All&~wi.features.FocusLock}):wi.features.None},()=>je(W,{},()=>ot({ourProps:Tt,theirProps:{...bt,...n},slot:pi,attrs:n,slots:r,visible:w.value===0,features:Zs.RenderStrategy|Zs.Static,name:"Dialog"})))))),je(ce)])}}});Ue({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var r;let s=(r=t.id)!=null?r:`headlessui-dialog-overlay-${On()}`,i=zo("DialogOverlay");function o(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),i.close())}return()=>{let{...a}=t;return ot({ourProps:{id:s,"aria-hidden":!0,onClick:o},theirProps:a,slot:{open:i.dialogState.value===0},attrs:e,slots:n,name:"DialogOverlay"})}}});Ue({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-dialog-backdrop-${On()}`,o=zo("DialogBackdrop"),a=ee(null);return r({el:a,$el:a}),qe(()=>{if(o.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{...l}=t,c={id:i,ref:a,"aria-hidden":!0};return je(fh,{force:!0},()=>je(ub,()=>ot({ourProps:c,theirProps:{...e,...l},slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogBackdrop"})))}}});let V2=Ue({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-dialog-panel-${On()}`,o=zo("DialogPanel");r({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:i,ref:o.panelRef,onClick:a};return ot({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),B2=Ue({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var r;let s=(r=t.id)!=null?r:`headlessui-dialog-title-${On()}`,i=zo("DialogTitle");return qe(()=>{i.setTitleId(s),Rt(()=>i.setTitleId(null))}),()=>{let{...o}=t;return ot({ourProps:{id:s},theirProps:o,slot:{open:i.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}}),eg=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function tg(t){var e,n;let r=(e=t.innerText)!=null?e:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return r;let i=!1;for(let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=s.innerText)!=null?n:"":r;return eg.test(o)&&(o=o.replace(eg,"")),o}function j2(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(s=>{let i=document.getElementById(s);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():tg(i).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return tg(t).trim()}function z2(t){let e=ee(""),n=ee("");return()=>{let r=ie(t);if(!r)return"";let s=r.innerText;if(e.value===s)return n.value;let i=j2(r).trim().toLowerCase();return e.value=s,n.value=i,i}}var H2=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(H2||{}),q2=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(q2||{});function K2(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let fb=Symbol("MenuContext");function cc(t){let e=Qe(fb,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,cc),n}return e}let db=Ue({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=ee(1),s=ee(null),i=ee(null),o=ee([]),a=ee(""),l=ee(null),c=ee(1);function u(f=d=>d){let d=l.value!==null?o.value[l.value]:null,g=Gw(f(o.value.slice()),w=>ie(w.dataRef.domRef)),y=d?g.indexOf(d):null;return y===-1&&(y=null),{items:g,activeItemIndex:y}}let h={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{r.value=1,l.value=null},openMenu:()=>r.value=0,goToItem(f,d,g){let y=u(),w=m2(f===Vt.Specific?{focus:Vt.Specific,id:d}:{focus:f},{resolveItems:()=>y.items,resolveActiveIndex:()=>y.activeItemIndex,resolveId:v=>v.id,resolveDisabled:v=>v.dataRef.disabled});a.value="",l.value=w,c.value=g!=null?g:1,o.value=y.items},search(f){let d=a.value!==""?0:1;a.value+=f.toLowerCase();let g=(l.value!==null?o.value.slice(l.value+d).concat(o.value.slice(0,l.value+d)):o.value).find(w=>w.dataRef.textValue.startsWith(a.value)&&!w.dataRef.disabled),y=g?o.value.indexOf(g):-1;y===-1||y===l.value||(l.value=y,c.value=1)},clearSearch(){a.value=""},registerItem(f,d){let g=u(y=>[...y,{id:f,dataRef:d}]);o.value=g.items,l.value=g.activeItemIndex,c.value=1},unregisterItem(f){let d=u(g=>{let y=g.findIndex(w=>w.id===f);return y!==-1&&g.splice(y,1),g});o.value=d.items,l.value=d.activeItemIndex,c.value=1}};return Jw([s,i],(f,d)=>{var g;h.closeMenu(),gd(d,md.Loose)||(f.preventDefault(),(g=ie(s))==null||g.focus())},K(()=>r.value===0)),Qt(fb,h),nb(K(()=>an(r.value,{[0]:rt.Open,[1]:rt.Closed}))),()=>{let f={open:r.value===0,close:h.closeMenu};return ot({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),pb=Ue({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-button-${On()}`,o=cc("MenuButton");r({el:o.buttonRef,$el:o.buttonRef});function a(h){switch(h.key){case Ge.Space:case Ge.Enter:case Ge.ArrowDown:h.preventDefault(),h.stopPropagation(),o.openMenu(),Fn(()=>{var f;(f=ie(o.itemsRef))==null||f.focus({preventScroll:!0}),o.goToItem(Vt.First)});break;case Ge.ArrowUp:h.preventDefault(),h.stopPropagation(),o.openMenu(),Fn(()=>{var f;(f=ie(o.itemsRef))==null||f.focus({preventScroll:!0}),o.goToItem(Vt.Last)});break}}function l(h){switch(h.key){case Ge.Space:h.preventDefault();break}}function c(h){t.disabled||(o.menuState.value===0?(o.closeMenu(),Fn(()=>{var f;return(f=ie(o.buttonRef))==null?void 0:f.focus({preventScroll:!0})})):(h.preventDefault(),o.openMenu(),K2(()=>{var f;return(f=ie(o.itemsRef))==null?void 0:f.focus({preventScroll:!0})})))}let u=l2(K(()=>({as:t.as,type:e.type})),o.buttonRef);return()=>{var h;let f={open:o.menuState.value===0},{...d}=t,g={ref:o.buttonRef,id:i,type:u.value,"aria-haspopup":"menu","aria-controls":(h=ie(o.itemsRef))==null?void 0:h.id,"aria-expanded":o.menuState.value===0,onKeydown:a,onKeyup:l,onClick:c};return ot({ourProps:g,theirProps:d,slot:f,attrs:e,slots:n,name:"MenuButton"})}}}),mb=Ue({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-items-${On()}`,o=cc("MenuItems"),a=ee(null);r({el:o.itemsRef,$el:o.itemsRef}),u2({container:K(()=>ie(o.itemsRef)),enabled:K(()=>o.menuState.value===0),accept(f){return f.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:f.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(f){f.setAttribute("role","none")}});function l(f){var d;switch(a.value&&clearTimeout(a.value),f.key){case Ge.Space:if(o.searchQuery.value!=="")return f.preventDefault(),f.stopPropagation(),o.search(f.key);case Ge.Enter:if(f.preventDefault(),f.stopPropagation(),o.activeItemIndex.value!==null){let g=o.items.value[o.activeItemIndex.value];(d=ie(g.dataRef.domRef))==null||d.click()}o.closeMenu(),Ww(ie(o.buttonRef));break;case Ge.ArrowDown:return f.preventDefault(),f.stopPropagation(),o.goToItem(Vt.Next);case Ge.ArrowUp:return f.preventDefault(),f.stopPropagation(),o.goToItem(Vt.Previous);case Ge.Home:case Ge.PageUp:return f.preventDefault(),f.stopPropagation(),o.goToItem(Vt.First);case Ge.End:case Ge.PageDown:return f.preventDefault(),f.stopPropagation(),o.goToItem(Vt.Last);case Ge.Escape:f.preventDefault(),f.stopPropagation(),o.closeMenu(),Fn(()=>{var g;return(g=ie(o.buttonRef))==null?void 0:g.focus({preventScroll:!0})});break;case Ge.Tab:f.preventDefault(),f.stopPropagation(),o.closeMenu(),Fn(()=>i2(ie(o.buttonRef),f.shiftKey?wn.Previous:wn.Next));break;default:f.key.length===1&&(o.search(f.key),a.value=setTimeout(()=>o.clearSearch(),350));break}}function c(f){switch(f.key){case Ge.Space:f.preventDefault();break}}let u=lc(),h=K(()=>u!==null?(u.value&rt.Open)===rt.Open:o.menuState.value===0);return()=>{var f,d;let g={open:o.menuState.value===0},{...y}=t,w={"aria-activedescendant":o.activeItemIndex.value===null||(f=o.items.value[o.activeItemIndex.value])==null?void 0:f.id,"aria-labelledby":(d=ie(o.buttonRef))==null?void 0:d.id,id:i,onKeydown:l,onKeyup:c,role:"menu",tabIndex:0,ref:o.itemsRef};return ot({ourProps:w,theirProps:y,slot:g,attrs:e,slots:n,features:Zs.RenderStrategy|Zs.Static,visible:h.value,name:"MenuItems"})}}}),gb=Ue({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:e,attrs:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-menu-item-${On()}`,o=cc("MenuItem"),a=ee(null);r({el:a,$el:a});let l=K(()=>o.activeItemIndex.value!==null?o.items.value[o.activeItemIndex.value].id===i:!1),c=z2(a),u=K(()=>({disabled:t.disabled,get textValue(){return c()},domRef:a}));qe(()=>o.registerItem(i,u)),Rt(()=>o.unregisterItem(i)),Dt(()=>{o.menuState.value===0&&l.value&&o.activationTrigger.value!==0&&Fn(()=>{var v,_;return(_=(v=ie(a))==null?void 0:v.scrollIntoView)==null?void 0:_.call(v,{block:"nearest"})})});function h(v){if(t.disabled)return v.preventDefault();o.closeMenu(),Ww(ie(o.buttonRef))}function f(){if(t.disabled)return o.goToItem(Vt.Nothing);o.goToItem(Vt.Specific,i)}let d=c2();function g(v){d.update(v)}function y(v){d.wasMoved(v)&&(t.disabled||l.value||o.goToItem(Vt.Specific,i,0))}function w(v){d.wasMoved(v)&&(t.disabled||l.value&&o.goToItem(Vt.Nothing))}return()=>{let{disabled:v,..._}=t,k={active:l.value,disabled:v,close:o.closeMenu};return ot({ourProps:{id:i,ref:a,role:"menuitem",tabIndex:v===!0?void 0:-1,"aria-disabled":v===!0?!0:void 0,onClick:h,onFocus:f,onPointerenter:g,onMouseenter:g,onPointermove:y,onMousemove:y,onPointerleave:w,onMouseleave:w},theirProps:{...n,..._},slot:k,attrs:n,slots:e,name:"MenuItem"})}}});function W2(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function tu(t,...e){t&&e.length>0&&t.classList.add(...e)}function ga(t,...e){t&&e.length>0&&t.classList.remove(...e)}var yh=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(yh||{});function G2(t,e){let n=Bo();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:s}=getComputedStyle(t),[i,o]=[r,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return i!==0?n.setTimeout(()=>e("finished"),i+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function ng(t,e,n,r,s,i){let o=Bo(),a=i!==void 0?W2(i):()=>{};return ga(t,...s),tu(t,...e,...n),o.nextFrame(()=>{ga(t,...n),tu(t,...r),o.add(G2(t,l=>(ga(t,...r,...e),tu(t,...s),a(l))))}),o.add(()=>ga(t,...e,...n,...r,...s)),o.add(()=>a("cancelled")),o.dispose}function Br(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let yd=Symbol("TransitionContext");var Y2=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Y2||{});function Q2(){return Qe(yd,null)!==null}function J2(){let t=Qe(yd,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function X2(){let t=Qe(vd,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let vd=Symbol("NestingContext");function uc(t){return"children"in t?uc(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function yb(t){let e=ee([]),n=ee(!1);qe(()=>n.value=!0),Rt(()=>n.value=!1);function r(i,o=cr.Hidden){let a=e.value.findIndex(({id:l})=>l===i);a!==-1&&(an(o,{[cr.Unmount](){e.value.splice(a,1)},[cr.Hidden](){e.value[a].state="hidden"}}),!uc(e)&&n.value&&(t==null||t()))}function s(i){let o=e.value.find(({id:a})=>a===i);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:i,state:"visible"}),()=>r(i,cr.Unmount)}return{children:e,register:s,unregister:r}}let vb=Zs.RenderStrategy,wb=Ue({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r,expose:s}){let i=ee(0);function o(){i.value|=rt.Opening,e("beforeEnter")}function a(){i.value&=~rt.Opening,e("afterEnter")}function l(){i.value|=rt.Closing,e("beforeLeave")}function c(){i.value&=~rt.Closing,e("afterLeave")}if(!Q2()&&f2())return()=>je(bb,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},r);let u=ee(null),h=K(()=>t.unmount?cr.Unmount:cr.Hidden);s({el:u,$el:u});let{show:f,appear:d}=J2(),{register:g,unregister:y}=X2(),w=ee(f.value?"visible":"hidden"),v={value:!0},_=On(),k={value:!1},F=yb(()=>{!k.value&&w.value!=="hidden"&&(w.value="hidden",y(_),c())});qe(()=>{let ue=g(_);Rt(ue)}),Dt(()=>{if(h.value===cr.Hidden&&_){if(f.value&&w.value!=="visible"){w.value="visible";return}an(w.value,{hidden:()=>y(_),visible:()=>g(_)})}});let W=Br(t.enter),P=Br(t.enterFrom),X=Br(t.enterTo),ce=Br(t.entered),j=Br(t.leave),se=Br(t.leaveFrom),pe=Br(t.leaveTo);qe(()=>{Dt(()=>{if(w.value==="visible"){let ue=ie(u);if(ue instanceof Comment&&ue.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function $(ue){let Pe=v.value&&!d.value,et=ie(u);!et||!(et instanceof HTMLElement)||Pe||(k.value=!0,f.value&&o(),f.value||l(),ue(f.value?ng(et,W,P,X,ce,Ie=>{k.value=!1,Ie===yh.Finished&&a()}):ng(et,j,se,pe,ce,Ie=>{k.value=!1,Ie===yh.Finished&&(uc(F)||(w.value="hidden",y(_),c()))})))}return qe(()=>{Tn([f],(ue,Pe,et)=>{$(et),v.value=!1},{immediate:!0})}),Qt(vd,F),nb(K(()=>an(w.value,{visible:rt.Open,hidden:rt.Closed})|i.value)),()=>{let{appear:ue,show:Pe,enter:et,enterFrom:Ie,enterTo:we,entered:_e,leave:un,leaveFrom:Lr,leaveTo:he,...me}=t,bt={ref:u},Tt={...me,...d.value&&f.value&&jo.isServer?{class:ft([n.class,me.class,...W,...P])}:{}};return ot({theirProps:Tt,ourProps:bt,slot:{},slots:r,attrs:n,features:vb,visible:w.value==="visible",name:"TransitionChild"})}}}),Z2=wb,bb=Ue({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=lc(),i=K(()=>t.show===null&&s!==null?(s.value&rt.Open)===rt.Open:t.show);Dt(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=ee(i.value?"visible":"hidden"),a=yb(()=>{o.value="hidden"}),l=ee(!0),c={show:i,appear:K(()=>t.appear||!l.value)};return qe(()=>{Dt(()=>{l.value=!1,i.value?o.value="visible":uc(a)||(o.value="hidden")})}),Qt(vd,a),Qt(yd,c),()=>{let u=eb(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),h={unmount:t.unmount};return ot({ourProps:{...h,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[je(Z2,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...h,...u},r.default)]},attrs:{},features:vb,visible:o.value==="visible",name:"Transition"})}}});function eN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])}function tN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})])}function nN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clip-rule":"evenodd"})])}function rN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})])}function sN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})])}function _b(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})])}function iN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})])}function oN(t,e){return oe(),dt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[q("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})])}const rg=()=>{};let wd={},Eb={},Ib=null,Tb={mark:rg,measure:rg};try{typeof window<"u"&&(wd=window),typeof document<"u"&&(Eb=document),typeof MutationObserver<"u"&&(Ib=MutationObserver),typeof performance<"u"&&(Tb=performance)}catch{}const{userAgent:sg=""}=wd.navigator||{},Sr=wd,xe=Eb,ig=Ib,ya=Tb;Sr.document;const Wn=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",Sb=~sg.indexOf("MSIE")||~sg.indexOf("Trident/");var Re="classic",Ab="duotone",Bt="sharp",jt="sharp-duotone",aN=[Re,Ab,Bt,jt],lN={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},og={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cN=["kit"],uN=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,hN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fN={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},dN={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},pN={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},mN={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},gN={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},yN={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Cb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},vN=["solid","regular","light","thin","duotone","brands"],xb=[1,2,3,4,5,6,7,8,9,10],wN=xb.concat([11,12,13,14,15,16,17,18,19,20]),Ni={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bN=[...Object.keys(mN),...vN,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ni.GROUP,Ni.SWAP_OPACITY,Ni.PRIMARY,Ni.SECONDARY].concat(xb.map(t=>"".concat(t,"x"))).concat(wN.map(t=>"w-".concat(t))),_N={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},EN={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},IN={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ag={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const zn="___FONT_AWESOME___",vh=16,kb="fa",Nb="svg-inline--fa",us="data-fa-i2svg",wh="data-fa-pseudo-element",TN="data-fa-pseudo-element-pending",bd="data-prefix",_d="data-icon",lg="fontawesome-i2svg",SN="async",AN=["HTML","HEAD","STYLE","SCRIPT"],Ob=(()=>{try{return!0}catch{return!1}})(),Rb=[Re,Bt,jt];function Ho(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Re]}})}const Db={...Cb};Db[Re]={...Cb[Re],...og.kit,...og["kit-duotone"]};const ts=Ho(Db),bh={...yN};bh[Re]={...bh[Re],...ag.kit,...ag["kit-duotone"]};const yo=Ho(bh),_h={...gN};_h[Re]={..._h[Re],...IN.kit};const ns=Ho(_h),Eh={...pN};Eh[Re]={...Eh[Re],...EN.kit};const CN=Ho(Eh),xN=uN,Pb="fa-layers-text",kN=hN,NN={...lN};Ho(NN);const ON=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nu=Ni,ei=new Set;Object.keys(yo[Re]).map(ei.add.bind(ei));Object.keys(yo[Bt]).map(ei.add.bind(ei));Object.keys(yo[jt]).map(ei.add.bind(ei));const RN=[...cN,...bN],zi=Sr.FontAwesomeConfig||{};function DN(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function PN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}xe&&typeof xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=PN(DN(n));s!=null&&(zi[r]=s)});const Mb={styleDefault:"solid",familyDefault:"classic",cssPrefix:kb,replacementClass:Nb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zi.familyPrefix&&(zi.cssPrefix=zi.familyPrefix);const ti={...Mb,...zi};ti.autoReplaceSvg||(ti.observeMutations=!1);const U={};Object.keys(Mb).forEach(t=>{Object.defineProperty(U,t,{enumerable:!0,set:function(e){ti[t]=e,Hi.forEach(n=>n(U))},get:function(){return ti[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){ti.cssPrefix=t,Hi.forEach(e=>e(U))},get:function(){return ti.cssPrefix}});Sr.FontAwesomeConfig=U;const Hi=[];function MN(t){return Hi.push(t),()=>{Hi.splice(Hi.indexOf(t),1)}}const Jn=vh,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LN(t){if(!t||!Wn)return;const e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=xe.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return xe.head.insertBefore(e,r),t}const FN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vo(){let t=12,e="";for(;t-- >0;)e+=FN[Math.random()*62|0];return e}function ci(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ed(t){return t.classList?ci(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Lb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $N(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Lb(t[n]),'" '),"").trim()}function hc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Id(t){return t.size!==En.size||t.x!==En.x||t.y!==En.y||t.rotate!==En.rotate||t.flipX||t.flipY}function UN(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function VN(t){let{transform:e,width:n=vh,height:r=vh,startCentered:s=!1}=t,i="";return s&&Sb?i+="translate(".concat(e.x/Jn-n/2,"em, ").concat(e.y/Jn-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Jn,"em), calc(-50% + ").concat(e.y/Jn,"em)) "):i+="translate(".concat(e.x/Jn,"em, ").concat(e.y/Jn,"em) "),i+="scale(".concat(e.size/Jn*(e.flipX?-1:1),", ").concat(e.size/Jn*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var BN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fb(){const t=kb,e=Nb,n=U.cssPrefix,r=U.replacementClass;let s=BN;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let cg=!1;function ru(){U.autoAddCss&&!cg&&(LN(Fb()),cg=!0)}var jN={mixout(){return{dom:{css:Fb,insertCss:ru}}},hooks(){return{beforeDOMElementCreation(){ru()},beforeI2svg(){ru()}}}};const Hn=Sr||{};Hn[zn]||(Hn[zn]={});Hn[zn].styles||(Hn[zn].styles={});Hn[zn].hooks||(Hn[zn].hooks={});Hn[zn].shims||(Hn[zn].shims=[]);var In=Hn[zn];const $b=[],Ub=function(){xe.removeEventListener("DOMContentLoaded",Ub),nl=1,$b.map(t=>t())};let nl=!1;Wn&&(nl=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),nl||xe.addEventListener("DOMContentLoaded",Ub));function zN(t){!Wn||(nl?setTimeout(t,0):$b.push(t))}function qo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Lb(t):"<".concat(e," ").concat($N(n),">").concat(r.map(qo).join(""),"</").concat(e,">")}function ug(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var HN=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},su=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?HN(n,s):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,e[c],c,e);return u};function qN(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ih(t){const e=qN(t);return e.length===1?e[0].toString(16):null}function KN(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function hg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Th(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=hg(e);typeof In.hooks.addPack=="function"&&!r?In.hooks.addPack(t,hg(e)):In.styles[t]={...In.styles[t]||{},...s},t==="fas"&&Th("fa",e)}const{styles:Kr,shims:WN}=In,GN={[Re]:Object.values(ns[Re]),[Bt]:Object.values(ns[Bt]),[jt]:Object.values(ns[jt])};let Td=null,Vb={},Bb={},jb={},zb={},Hb={};const YN={[Re]:Object.keys(ts[Re]),[Bt]:Object.keys(ts[Bt]),[jt]:Object.keys(ts[jt])};function QN(t){return~RN.indexOf(t)}function JN(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!QN(s)?s:null}const qb=()=>{const t=r=>su(Kr,(s,i,o)=>(s[o]=su(i,r,{}),s),{});Vb=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Bb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Hb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in Kr||U.autoFetchSvg,n=su(WN,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});jb=n.names,zb=n.unicodes,Td=fc(U.styleDefault,{family:U.familyDefault})};MN(t=>{Td=fc(t.styleDefault,{family:U.familyDefault})});qb();function Sd(t,e){return(Vb[t]||{})[e]}function XN(t,e){return(Bb[t]||{})[e]}function ur(t,e){return(Hb[t]||{})[e]}function Kb(t){return jb[t]||{prefix:null,iconName:null}}function ZN(t){const e=zb[t],n=Sd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return Td}const Ad=()=>({prefix:null,iconName:null,rest:[]});function fc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Re}=e,r=ts[n][t],s=yo[n][t]||yo[n][r],i=t in In.styles?t:null;return s||i||null}const eO={[Re]:Object.keys(ns[Re]),[Bt]:Object.keys(ns[Bt]),[jt]:Object.keys(ns[jt])};function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Re]:"".concat(U.cssPrefix,"-").concat(Re),[Bt]:"".concat(U.cssPrefix,"-").concat(Bt),[jt]:"".concat(U.cssPrefix,"-").concat(jt)};let s=null,i=Re;const o=aN.filter(l=>l!==Ab);o.forEach(l=>{(t.includes(r[l])||t.some(c=>eO[l].includes(c)))&&(i=l)});const a=t.reduce((l,c)=>{const u=JN(U.cssPrefix,c);if(Kr[c]?(c=GN[i].includes(c)?CN[i][c]:c,s=c,l.prefix=c):YN[i].indexOf(c)>-1?(s=c,l.prefix=fc(c,{family:i})):u?l.iconName=u:c!==U.replacementClass&&!o.some(h=>c===r[h])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const h=s==="fa"?Kb(l.iconName):{},f=ur(l.prefix,l.iconName);h.prefix&&(s=null),l.iconName=h.iconName||f||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Kr.far&&Kr.fas&&!U.autoFetchSvg&&(l.prefix="fas")}return l},Ad());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Bt&&(Kr.fass||U.autoFetchSvg)&&(a.prefix="fass",a.iconName=ur(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===jt&&(Kr.fasds||U.autoFetchSvg)&&(a.prefix="fasds",a.iconName=ur(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Ar()||"fas"),a}class tO{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},Th(i,s[i]);const o=ns[Re][i];o&&Th(o,s[i]),qb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[i][c]=a)}),e[i][o]=a}),e}}let fg=[],Os={};const Bs={},nO=Object.keys(Bs);function rO(t,e){let{mixoutsTo:n}=e;return fg=t,Os={},Object.keys(Bs).forEach(r=>{nO.indexOf(r)===-1&&delete Bs[r]}),fg.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Os[o]||(Os[o]=[]),Os[o].push(i[o])})}r.provides&&r.provides(Bs)}),n}function Sh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Os[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function hs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Os[t]||[]).forEach(i=>{i.apply(null,n)})}function Cr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Bs[t]?Bs[t].apply(null,e):void 0}function Ah(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ar();if(!!e)return e=ur(n,e)||e,ug(Wb.definitions,n,e)||ug(In.styles,n,e)}const Wb=new tO,sO=()=>{U.autoReplaceSvg=!1,U.observeMutations=!1,hs("noAuto")},iO={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(hs("beforeI2svg",t),Cr("pseudoElements2svg",t),Cr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,zN(()=>{aO({autoReplaceSvgRoot:e}),hs("watch",t)})}},oO={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ur(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=fc(t[0]);return{prefix:n,iconName:ur(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(xN))){const e=dc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ar(),iconName:ur(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ar();return{prefix:e,iconName:ur(e,t)||t}}}},qt={noAuto:sO,config:U,dom:iO,parse:oO,library:Wb,findIconDefinition:Ah,toHtml:qo},aO=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=xe}=t;(Object.keys(In.styles).length>0||U.autoFetchSvg)&&Wn&&U.autoReplaceSvg&&qt.dom.i2svg({node:e})};function pc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>qo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Wn)return;const n=xe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function lO(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Id(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};s.style=hc({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function cO(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Cd(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:h=!1}=t,{width:f,height:d}=n.found?n:e,g=r==="fak",y=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(W=>u.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(u.classes).join(" ");let w={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":s,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(d)}};const v=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/d*16*.0625,"em")}:{};h&&(w.attributes[us]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||vo())},children:[a]}),delete w.attributes.title);const _={...w,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...v,...u.styles}},{children:k,attributes:F}=n.found&&e.found?Cr("generateAbstractMask",_)||{children:[],attributes:{}}:Cr("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=k,_.attributes=F,o?cO(_):lO(_)}function dg(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[us]="");const c={...o.styles};Id(s)&&(c.transform=VN({transform:s,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=hc(c);u.length>0&&(l.style=u);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function uO(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=hc(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:iu}=In;function Ch(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(nu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(nu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(nu.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const hO={found:!1,width:512,height:512};function fO(t,e){!Ob&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xh(t,e){let n=e;return e==="fa"&&U.styleDefault!==null&&(e=Ar()),new Promise((r,s)=>{if(n==="fa"){const i=Kb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&iu[e]&&iu[e][t]){const i=iu[e][t];return r(Ch(i))}fO(t,e),r({...hO,icon:U.showMissingIcons&&t?Cr("missingIconAbstract")||{}:{}})})}const pg=()=>{},kh=U.measurePerformance&&ya&&ya.mark&&ya.measure?ya:{mark:pg,measure:pg},Oi='FA "6.6.0"',dO=t=>(kh.mark("".concat(Oi," ").concat(t," begins")),()=>Gb(t)),Gb=t=>{kh.mark("".concat(Oi," ").concat(t," ends")),kh.measure("".concat(Oi," ").concat(t),"".concat(Oi," ").concat(t," begins"),"".concat(Oi," ").concat(t," ends"))};var xd={begin:dO,end:Gb};const ka=()=>{};function mg(t){return typeof(t.getAttribute?t.getAttribute(us):null)=="string"}function pO(t){const e=t.getAttribute?t.getAttribute(bd):null,n=t.getAttribute?t.getAttribute(_d):null;return e&&n}function mO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function gO(){return U.autoReplaceSvg===!0?Na.replace:Na[U.autoReplaceSvg]||Na.replace}function yO(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function vO(t){return xe.createElement(t)}function Yb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?yO:vO}=e;if(typeof t=="string")return xe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Yb(i,{ceFn:n}))}),r}function wO(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Na={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Yb(n),e)}),e.getAttribute(us)===null&&U.keepOriginalSource){let n=xe.createComment(wO(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ed(e).indexOf(U.replacementClass))return Na.replace(t);const r=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===U.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>qo(i)).join(`
`);e.setAttribute(us,""),e.innerHTML=s}};function gg(t){t()}function Qb(t,e){const n=typeof e=="function"?e:ka;if(t.length===0)n();else{let r=gg;U.mutateApproach===SN&&(r=Sr.requestAnimationFrame||gg),r(()=>{const s=gO(),i=xd.begin("mutate");t.map(s),i(),n()})}}let kd=!1;function Jb(){kd=!0}function Nh(){kd=!1}let rl=null;function yg(t){if(!ig||!U.observeMutations)return;const{treeCallback:e=ka,nodeCallback:n=ka,pseudoElementsCallback:r=ka,observeMutationsRoot:s=xe}=t;rl=new ig(i=>{if(kd)return;const o=Ar();ci(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!mg(a.addedNodes[0])&&(U.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&U.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&mg(a.target)&&~ON.indexOf(a.attributeName))if(a.attributeName==="class"&&pO(a.target)){const{prefix:l,iconName:c}=dc(Ed(a.target));a.target.setAttribute(bd,l||o),c&&a.target.setAttribute(_d,c)}else mO(a.target)&&n(a.target)})}),Wn&&rl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bO(){!rl||rl.disconnect()}function _O(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function EO(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=dc(Ed(t));return s.prefix||(s.prefix=Ar()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=XN(s.prefix,t.innerText)||Sd(s.prefix,Ih(t.innerText))),!s.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function IO(t){const e=ci(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||vo()):(e["aria-hidden"]="true",e.focusable="false")),e}function TO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=EO(t),i=IO(t),o=Sh("parseNodeAttributes",{},t);let a=e.styleParser?_O(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:SO}=In;function Xb(t){const e=U.autoReplaceSvg==="nest"?vg(t,{styleParser:!1}):vg(t);return~e.extra.classes.indexOf(Pb)?Cr("generateLayersText",t,e):Cr("generateSvgReplacementMutation",t,e)}let Nn=new Set;Rb.map(t=>{Nn.add("fa-".concat(t))});Object.keys(ts[Re]).map(Nn.add.bind(Nn));Object.keys(ts[Bt]).map(Nn.add.bind(Nn));Object.keys(ts[jt]).map(Nn.add.bind(Nn));Nn=[...Nn];function wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();const n=xe.documentElement.classList,r=u=>n.add("".concat(lg,"-").concat(u)),s=u=>n.remove("".concat(lg,"-").concat(u)),i=U.autoFetchSvg?Nn:Rb.map(u=>"fa-".concat(u)).concat(Object.keys(SO));i.includes("fa")||i.push("fa");const o=[".".concat(Pb,":not([").concat(us,"])")].concat(i.map(u=>".".concat(u,":not([").concat(us,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=ci(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=xd.begin("onTree"),c=a.reduce((u,h)=>{try{const f=Xb(h);f&&u.push(f)}catch(f){Ob||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,h)=>{Promise.all(c).then(f=>{Qb(f,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),h(f)})})}function AO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xb(t).then(n=>{n&&Qb([n],e)})}function CO(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ah(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Ah(s||{})),t(r,{...n,mask:s})}}const xO=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=En,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:f,icon:d}=t;return pc({type:"icon",...t},()=>(hs("beforeDOMElementCreation",{iconDefinition:t,params:e}),U.autoA11y&&(o?c["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(a||vo()):(c["aria-hidden"]="true",c.focusable="false")),Cd({icons:{main:Ch(d),mask:s?Ch(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:f,transform:{...En,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var kO={mixout(){return{icon:CO(xO)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=wg,t.nodeCallback=AO,t}}},provides(t){t.i2svg=function(e){const{node:n=xe,callback:r=()=>{}}=e;return wg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:h}=n;return new Promise((f,d)=>{Promise.all([xh(r,o),c.iconName?xh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[y,w]=g;f([e,Cd({icons:{main:y,mask:w},prefix:o,iconName:r,transform:a,symbol:l,maskId:u,title:s,titleId:i,extra:h,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=hc(o);a.length>0&&(r.style=a);let l;return Id(i)&&(l=Cr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},NO={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pc({type:"layer"},()=>{hs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},OO={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return pc({type:"counter",content:t},()=>(hs("beforeDOMElementCreation",{content:t,params:e}),uO({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(U.cssPrefix,"-layers-counter"),...r]}})))}}}},RO={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=En,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return pc({type:"text",content:t},()=>(hs("beforeDOMElementCreation",{content:t,params:e}),dg({content:t,transform:{...En,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(U.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Sb){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return U.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,dg({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const DO=new RegExp('"',"ug"),bg=[1105920,1112319],_g={FontAwesome:{normal:"fas",400:"fas"},...dN,...fN,..._N},Oh=Object.keys(_g).reduce((t,e)=>(t[e.toLowerCase()]=_g[e],t),{}),PO=Object.keys(Oh).reduce((t,e)=>{const n=Oh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function MO(t){const e=t.replace(DO,""),n=KN(e,0),r=n>=bg[0]&&n<=bg[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ih(s?e[0]:e),isSecondary:r||s}}function LO(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Oh[n]||{})[s]||PO[n]}function Eg(t,e){const n="".concat(TN).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=ci(t.children).filter(f=>f.getAttribute(wh)===e)[0],a=Sr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(kN),u=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&h!=="none"&&h!==""){const f=a.getPropertyValue("content");let d=LO(l,u);const{value:g,isSecondary:y}=MO(f),w=c[0].startsWith("FontAwesome");let v=Sd(d,g),_=v;if(w){const k=ZN(g);k.iconName&&k.prefix&&(v=k.iconName,d=k.prefix)}if(v&&!y&&(!o||o.getAttribute(bd)!==d||o.getAttribute(_d)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const k=TO(),{extra:F}=k;F.attributes[wh]=e,xh(v,d).then(W=>{const P=Cd({...k,icons:{main:W,mask:Ad()},prefix:d,iconName:_,extra:F,watchable:!0}),X=xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=P.map(ce=>qo(ce)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function FO(t){return Promise.all([Eg(t,"::before"),Eg(t,"::after")])}function $O(t){return t.parentNode!==document.head&&!~AN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ig(t){if(!!Wn)return new Promise((e,n)=>{const r=ci(t.querySelectorAll("*")).filter($O).map(FO),s=xd.begin("searchPseudoElements");Jb(),Promise.all(r).then(()=>{s(),Nh(),e()}).catch(()=>{s(),Nh(),n()})})}var UO={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ig,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=xe}=e;U.searchPseudoElements&&Ig(n)}}};let Tg=!1;var VO={mixout(){return{dom:{unwatch(){Jb(),Tg=!0}}}},hooks(){return{bootstrap(){yg(Sh("mutationObserverCallbacks",{}))},noAuto(){bO()},watch(t){const{observeMutationsRoot:e}=t;Tg?Nh():yg(Sh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Sg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var BO={mixout(){return{parse:{transform:t=>Sg(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Sg(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:u,path:h};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const ou={x:0,y:0,width:"100%",height:"100%"};function Ag(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jO(t){return t.tag==="g"?t.children:[t]}var zO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?dc(n.split(" ").map(s=>s.trim())):Ad();return r.prefix||(r.prefix=Ar()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:c}=s,{width:u,icon:h}=i,f=UN({transform:a,containerWidth:u,iconWidth:l}),d={tag:"rect",attributes:{...ou,fill:"white"}},g=c.children?{children:c.children.map(Ag)}:{},y={tag:"g",attributes:{...f.inner},children:[Ag({tag:c.tag,attributes:{...c.attributes,...f.path},...g})]},w={tag:"g",attributes:{...f.outer},children:[y]},v="mask-".concat(o||vo()),_="clip-".concat(o||vo()),k={tag:"mask",attributes:{...ou,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,w]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:jO(h)},k]};return n.push(F,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(v,")"),...ou}}),{children:n,attributes:r}}}},HO={provides(t){let e=!1;Sr.matchMedia&&(e=Sr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},KO=[jN,kO,NO,OO,RO,UO,VO,BO,zO,HO,qO];rO(KO,{mixoutsTo:qt});qt.noAuto;const Zb=qt.config,WO=qt.library;qt.dom;const sl=qt.parse;qt.findIconDefinition;qt.toHtml;const GO=qt.icon;qt.layer;const YO=qt.text;qt.counter;function Cg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Zt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cg(Object(n),!0).forEach(function(r){St(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function QO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function JO(t){var e=QO(t,"string");return typeof e=="symbol"?e:e+""}function il(t){return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},il(t)}function St(t,e,n){return e=JO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XO(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function ZO(t,e){if(t==null)return{};var n=XO(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Rh(t){return eR(t)||tR(t)||nR(t)||rR()}function eR(t){if(Array.isArray(t))return Dh(t)}function tR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nR(t,e){if(!!t){if(typeof t=="string")return Dh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(t,e)}}function Dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e1={exports:{}};(function(t){(function(e){var n=function(v,_,k){if(!c(_)||h(_)||f(_)||d(_)||l(_))return _;var F,W=0,P=0;if(u(_))for(F=[],P=_.length;W<P;W++)F.push(n(v,_[W],k));else{F={};for(var X in _)Object.prototype.hasOwnProperty.call(_,X)&&(F[v(X,k)]=n(v,_[X],k))}return F},r=function(v,_){_=_||{};var k=_.separator||"_",F=_.split||/(?=[A-Z])/;return v.split(F).join(k)},s=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,k){return k?k.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=s(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},d=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},y=function(v,_){var k=_&&"process"in _?_.process:_;return typeof k!="function"?v:function(F,W){return k(F,v,W)}},w={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(y(s,_),v)},decamelizeKeys:function(v,_){return n(y(o,_),v,_)},pascalizeKeys:function(v,_){return n(y(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(sR)})(e1);var iR=e1.exports,oR=["class","style"];function aR(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=iR.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function lR(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Nd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Nd(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=lR(u);break;case"style":l.style=aR(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=ZO(n,oR);return je(t.tag,Zt(Zt(Zt({},e),{},{class:s.class,style:Zt(Zt({},s.style),o)},s.attrs),a),r)}var t1=!1;try{t1=!0}catch{}function cR(){if(!t1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?St({},t,e):{}}function uR(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},St(St(St(St(St(St(St(St(St(St(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),St(St(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xg(t){if(t&&il(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sl.icon)return sl.icon(t);if(t===null)return null;if(il(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var hR=Ue({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=K(function(){return xg(e.icon)}),i=K(function(){return qi("classes",uR(e))}),o=K(function(){return qi("transform",typeof e.transform=="string"?sl.transform(e.transform):e.transform)}),a=K(function(){return qi("mask",xg(e.mask))}),l=K(function(){return GO(s.value,Zt(Zt(Zt(Zt({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Tn(l,function(u){if(!u)return cR("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=K(function(){return l.value?Nd(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ue({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=Zb.familyPrefix,i=K(function(){return["".concat(s,"-layers")].concat(Rh(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return je("div",{class:i.value},r.default?r.default():[])}}});Ue({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=Zb.familyPrefix,i=K(function(){return qi("classes",[].concat(Rh(e.counter?["".concat(s,"-layers-counter")]:[]),Rh(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=K(function(){return qi("transform",typeof e.transform=="string"?sl.transform(e.transform):e.transform)}),a=K(function(){var c=YO(e.value.toString(),Zt(Zt({},o.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=K(function(){return Nd(a.value,{},r)});return function(){return l.value}}});const fR={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"]},dR=fR;WO.add(dR);const pR={components:{Menu:db,MenuButton:pb,MenuItems:mb,MenuItem:gb,TrashIcon:iN,ReplyIcon:_b,DotsVerticalIcon:tN,PencilIcon:rN,FontAwesomeIcon:hR},props:{message:{type:Object,required:!0},user:{type:Object,required:!0}},methods:{triggerScroll(){document.querySelector("main").addEventListener("scroll",this.scrollHandler),this.$emit("open",!0)},duringScroll(){this.scrollHandler()},exitScroll(){document.querySelector("main").removeEventListener("scroll",this.scrollHandler),this.$emit("open",!1)},scrollHandler(){this.$nextTick(()=>{const t=this.$refs.menuToggle.$el,e=this.$refs.menuItems.$el,n=document.querySelector("main form");if(!e)return;const r=e.getBoundingClientRect().height;t.getBoundingClientRect().bottom+r>n.getBoundingClientRect().top?e.style.bottom="1rem":e.style.bottom="auto"})},deleteMessage(){this.exitScroll(),this.$emit("delete")}}},mR={class:"px-1 py-1"};function gR(t,e,n,r,s,i){const o=Te("DotsVerticalIcon"),a=Te("MenuButton"),l=Te("PencilIcon"),c=Te("MenuItem"),u=Te("FontAwesomeIcon"),h=Te("ReplyIcon"),f=Te("TrashIcon"),d=Te("MenuItems"),g=Te("Menu");return oe(),dt(g,{as:"div",class:"inline-block text-left"},{default:Fe(()=>[T("div",null,[q(a,{class:"inline-flex w-full justify-center rounded-md p-1 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",ref:"menuToggle"},{default:Fe(()=>[q(o,{class:"h-3 w-3"})]),_:1},512)]),q(xl,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0",onBeforeEnter:i.triggerScroll,onEnter:i.duringScroll,onAfterLeave:i.exitScroll},{default:Fe(()=>[q(d,{ref:"menuItems",class:"absolute right-0 z-10 my-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:Fe(()=>[T("div",mR,[JSON.parse(n.message.data().user).uid===n.user.uid?(oe(),dt(c,{key:0},{default:Fe(({active:y})=>[T("button",{class:ft([y?"bg-indigo-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:e[0]||(e[0]=w=>t.$emit("edit"))},[$t(" Edit "),q(l,{class:"ml-auto h-4 w-4"})],2)]),_:1})):mn("",!0),q(c,null,{default:Fe(({active:y})=>[T("button",{class:ft([y?"bg-indigo-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:e[1]||(e[1]=w=>t.$emit("pin"))},[$t(" Pin "),q(u,{class:"ml-auto h-4 w-4",icon:"fa-solid fa-thumbtack"})],2)]),_:1}),q(c,null,{default:Fe(({active:y})=>[T("button",{class:ft([y?"bg-indigo-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:e[2]||(e[2]=w=>t.$emit("reply"))},[$t(" Reply "),q(h,{class:"ml-auto h-4 w-4"})],2)]),_:1}),JSON.parse(n.message.data().user).uid===n.user.uid||n.user.uid==="mxrNj49uZKfDw5tQkAI7USxEHPk1"?(oe(),dt(c,{key:1,w:""},{default:Fe(({active:y})=>[T("button",{class:ft([y?"bg-red-500 text-white":"text-red-500","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:e[3]||(e[3]=(...w)=>i.deleteMessage&&i.deleteMessage(...w))},[$t(" Delete "),q(f,{class:"ml-auto h-4 w-4"})],2)]),_:1})):mn("",!0)])]),_:1},512)]),_:1},8,["onBeforeEnter","onEnter","onAfterLeave"])]),_:1})}const yR=ys(pR,[["render",gR]]);const vR={props:{messages:Array,message:Object,index:Number,user:Object,defaultAvatar:String,reply:String},components:{MessageDropdown:yR,ReplyIcon:_b},data(){return{editing:!1,newEdit:"",pfpShow:!1,open:!1}},methods:{formattedTime(){if(this.message.data().time){let t;this.message.metadata.hasPendingWrites?t=new Date(this.message.data().time):t=this.message.data().time.toDate();const e=t.getDate();if(t<new Date().setDate(new Date().getDate()-2)){const r=`${t.getMonth()+1}`.padStart(2,"0"),s=t.getFullYear().toString().slice(2);return`${r}/${e}/${s}`}const n=t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return t<new Date().setDate(new Date().getDate()-1)?`Yesterday at ${n}`:`Today at ${n}`}return this.message.data().time},findReply(){const t=this.messages.findIndex(n=>n.id==JSON.parse(this.message.data().reply).id&&n.data().time.seconds==JSON.parse(this.message.data().reply).time.seconds&&n.data().time.nanoseconds==JSON.parse(this.message.data().reply).time.nanoseconds);if(t==-1)return!1;const e=this.messages[t];return{id:e.id,message:e.data().message,username:JSON.parse(e.data().user).username,avatar:JSON.parse(e.data().user).avatar}},startEdit(){this.editing=!0,this.newEdit=this.message.data().message,this.$nextTick(()=>{this.resizeText(),this.$nextTick(()=>{this.$refs.textarea.focus()})})},finishEdit(){this.editing=!1;const t=this.newEdit.trim();t?this.$emit("edit",t):this.$emit("delete")},resizeText(){const t=this.$refs.textarea;t.style.height="0px",t.style.overflow="scroll",t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},checker(t){t.key=="Enter"?(t.preventDefault(),this.finishEdit()):t.key=="Escape"&&(t.preventDefault(),this.editing=!1)},shouldPfpShow(){if(this.index==0)return"1";if(this.message.data().reply)return"2";const t=this.messages[this.index-1];if(!t)return!0;const e=JSON.parse(t.data().user),n=JSON.parse(this.message.data().user);if(e.username!=n.username)return!0;let r;t.metadata.hasPendingWrites?r=new Date(t.data().time):r=t.data().time.toDate();const s=r.getTime()/1e3;let i;return this.message.metadata.hasPendingWrites?i=new Date(this.message.data().time):i=this.message.data().time.toDate(),i.getTime()/1e3-s>120},fallback(t){console.log(t.currentTarget.src),t.currentTarget.src=this.defaultAvatar,t.currentTarget.onerror=null}},mounted(){this.pfpShow=this.shouldPfpShow()}},wR=t=>(Ry("data-v-eb8442a7"),t=t(),Dy(),t),bR={key:0,class:"flex items-center justify-center"},_R={key:1,class:"w-full overflow-x-hidden"},ER={key:0},IR=["src","onerror"],TR={class:"truncate"},SR=["src","onerror"],AR={class:"messageContainer relative col-start-2 col-end-3 inline-block w-auto"},CR={key:0,class:"flex items-baseline gap-2"},xR={class:"text-xs text-slate-600"},kR={key:1,class:"grid grid-cols-[auto,max-content]"},NR={class:"inline-block w-auto break-words pr-6",style:{"word-break":"break-word"}},OR={class:"mt-1 text-xs"},RR=wR(()=>T("button",{class:"text-indigo-500 hover:underline",type:"submit"}," save ",-1));function DR(t,e,n,r,s,i){const o=Te("ReplyIcon"),a=Te("MessageDropdown");return oe(),Me("div",{class:ft(["grid w-full grid-cols-[3rem,auto] gap-x-4 px-6 py-1",{"bg-slate-100":s.editing,"mt-4":s.pfpShow,"border-l-2 !border-indigo-400 !bg-indigo-50 pl-[calc(1.5rem-2px)] hover:!border-indigo-500/90 hover:!bg-indigo-100/75":n.reply===n.message.id,"hover:bg-slate-50":!s.editing&&n.reply!==n.message.id,"border-l-2 border-yellow-300 bg-yellow-50 pl-[calc(1.5rem-2px)] hover:border-yellow-400 hover:bg-yellow-100/75":n.message.data().reply?JSON.parse(n.message.data().reply).uid==n.user.uid:!1}])},[n.message.data().reply?(oe(),Me("div",bR,[q(o,{class:"ml-2 h-4 w-4 -scale-x-100 text-slate-600"})])):mn("",!0),n.message.data().reply?(oe(),Me("div",_R,[i.findReply()?mn("",!0):(oe(),Me("div",ER,"Message Not Found")),i.findReply()?(oe(),Me("a",{key:1,class:"flex cursor-pointer items-center gap-1",onClick:e[0]||(e[0]=l=>t.$emit("scroll"))},[T("img",{class:"h-4 w-4 rounded-full",src:i.findReply().avatar,onerror:l=>i.fallback(l),alt:""},null,8,IR),T("h1",null,pn(i.findReply().username),1),T("p",TR,pn(i.findReply().message),1)])):mn("",!0)])):mn("",!0),s.pfpShow?(oe(),Me("img",{key:2,class:"h-12 w-12 rounded-full",src:JSON.parse(n.message.data().user).avatar||n.defaultAvatar,onerror:l=>i.fallback(l),alt:""},null,8,SR)):mn("",!0),T("div",AR,[s.pfpShow?(oe(),Me("div",CR,[T("h1",null,pn(JSON.parse(n.message.data().user).username),1),T("p",xR,pn(i.formattedTime()),1)])):mn("",!0),s.editing?(oe(),Me("form",{key:2,onSubmit:e[8]||(e[8]=Io((...l)=>i.finishEdit&&i.finishEdit(...l),["prevent"]))},[br(T("textarea",{class:"mt-1 w-full resize-none rounded-md border-slate-200 px-4 py-2 focus:border-slate-300 focus:ring-0","onUpdate:modelValue":e[4]||(e[4]=l=>s.newEdit=l),placeholder:"New edit",onInput:e[5]||(e[5]=(...l)=>i.resizeText&&i.resizeText(...l)),ref:"textarea",onKeydown:e[6]||(e[6]=(...l)=>i.checker&&i.checker(...l))},null,544),[[_r,s.newEdit]]),T("p",OR,[$t(" escape to "),T("button",{class:"text-indigo-500 hover:underline",type:"button",onClick:e[7]||(e[7]=l=>s.editing=!1)}," cancel "),$t(" \u2022 enter to "),RR])],32)):(oe(),Me("div",kR,[T("p",NR,pn(n.message.data().message)+" "+pn(JSON.parse(n.message.data().edits).length?"(edited)":""),1),q(a,{class:ft(["MessageDropdown absolute right-0 top-0 hidden",{"!inline-block":s.open}]),onReply:e[1]||(e[1]=l=>t.$emit("reply")),onEdit:i.startEdit,onDelete:e[2]||(e[2]=l=>t.$emit("delete")),onOpen:e[3]||(e[3]=l=>s.open=l),message:n.message,user:n.user},null,8,["onEdit","class","message","user"])]))])],2)}const PR=ys(vR,[["render",DR],["__scopeId","data-v-eb8442a7"]]),MR={components:{Menu:db,MenuButton:pb,MenuItems:mb,MenuItem:gb,CogIcon:eN,LogoutIcon:nN}},LR={class:"top-16 w-56 text-right"},FR={class:"px-1 py-1"};function $R(t,e,n,r,s,i){const o=Te("CogIcon"),a=Te("MenuButton"),l=Te("LogoutIcon"),c=Te("MenuItem"),u=Te("MenuItems"),h=Te("Menu");return oe(),Me("div",LR,[q(h,{as:"div",class:"relative inline-block text-left"},{default:Fe(()=>[T("div",null,[q(a,{class:"inline-flex w-full justify-center rounded-md p-2 text-sm font-medium text-slate-500 hover:bg-indigo-300 hover:bg-opacity-30 hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},{default:Fe(()=>[q(o,{class:"h-4 w-4"})]),_:1})]),q(xl,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:Fe(()=>[q(u,{class:"absolute left-0 bottom-full z-20 mb-2 w-40 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:Fe(()=>[T("div",FR,[q(c,null,{default:Fe(({active:f})=>[T("button",{class:ft([f?"bg-indigo-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"]),onClick:e[0]||(e[0]=d=>t.$emit("logout"))},[$t(" Logout "),q(l,{class:"ml-auto h-4 w-4"})],2)]),_:1}),q(c,null,{default:Fe(({active:f})=>[T("button",{class:ft([f?"bg-indigo-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},[$t(" Settings "),q(o,{class:"ml-auto h-4 w-4"})],2)]),_:1})])]),_:1})]),_:1})]),_:1})])}const UR=ys(MR,[["render",$R]]),VR={props:{isOpen:Boolean},components:{TransitionRoot:bb,TransitionChild:wb,Dialog:U2,DialogPanel:V2,DialogTitle:B2},data(){return{channelName:"",channelRoles:""}},methods:{close(){this.$emit("close"),this.channelName="",this.channelRoles=""},add(){const t=this.channelName.trim();if(!t)return;const e=this.channelRoles.split("|").map(n=>n.trim());this.$emit("create",{name:t,roles:JSON.stringify(e)}),this.channelName="",this.channelRoles="",this.close()}}},BR=T("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),jR={class:"fixed inset-0 overflow-y-auto"},zR={class:"flex min-h-full items-center justify-center p-4 text-center"},HR={class:"p-6"},qR=T("div",{class:"mt-2"},[T("p",{class:"text-sm text-gray-500"},' Create a new text channel for people to chat in. Channel name must be unique however it can contain any characters. Roles are optional and are seperated by " | ". ')],-1),KR=T("label",{class:"text-gray-700",for:"name"},"Channel Name",-1),WR=T("label",{class:"text-gray-700",for:"roles"},"Access Roles",-1),GR={class:"flex items-baseline justify-end bg-slate-100 p-6 py-4"};function YR(t,e,n,r,s,i){const o=Te("TransitionChild"),a=Te("DialogTitle"),l=Te("DialogPanel"),c=Te("Dialog"),u=Te("TransitionRoot");return oe(),dt(u,{appear:"",show:n.isOpen,as:"template"},{default:Fe(()=>[q(c,{as:"div",onClose:i.close,class:"relative z-10"},{default:Fe(()=>[q(o,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:Fe(()=>[BR]),_:1}),T("div",jR,[T("div",zR,[q(o,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:Fe(()=>[q(l,{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"},{default:Fe(()=>[T("div",HR,[q(a,{as:"h3",class:"text-xl font-medium leading-6 text-gray-900"},{default:Fe(()=>[$t(" Create Channel ")]),_:1}),qR,T("form",{class:"mt-3",onSubmit:e[2]||(e[2]=Io((...h)=>i.add&&i.add(...h),["prevent"]))},[KR,br(T("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":e[0]||(e[0]=h=>s.channelName=h),placeholder:"New Channel",class:"mb-3 mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500",required:""},null,512),[[_r,s.channelName]]),WR,br(T("input",{type:"text",name:"roles",id:"roles","onUpdate:modelValue":e[1]||(e[1]=h=>s.channelRoles=h),placeholder:"New Channel",class:"mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,512),[[_r,s.channelRoles]])],32)]),T("div",GR,[T("button",{type:"button",class:"mx-4 inline-flex justify-center rounded-md border border-transparent text-sm font-medium text-gray-600 underline decoration-transparent transition-all hover:text-inherit hover:decoration-inherit focus:text-inherit focus:decoration-inherit focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-2",onClick:e[3]||(e[3]=(...h)=>i.close&&i.close(...h))}," Cancel "),T("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",onClick:e[4]||(e[4]=(...h)=>i.add&&i.add(...h))}," Create Channel ")])]),_:1})]),_:1})])])]),_:1},8,["onClose"])]),_:1},8,["show"])}const QR=ys(VR,[["render",YR]]);const JR={props:{user:Object,db:Object},components:{Message:PR,AddChannelModal:QR,XCircleIcon:oN,PlusIcon:sN,SettingsDropdown:UR},data(){return{userData:{},ws:null,channels:[],statusList:[],messages:[],currentChannel:null,newMessage:"",reply:null,disconnectListener:null,disconnectChannelListener:null,disconnectUserListener:null,defaultAvatar:"https://cdn.discordapp.com/embed/avatars/0.png",isInView:!1,load:!0,addingChannel:!1,wsUrl:"ws://localhost:5000"}},methods:{async sendMessage(){const t=this.newMessage.trim(),e=this.reply;if(!t)return;if(this.currentChannel=="No Channel Selected")return alert("No channel selected");this.newMessage="",this.reply=null,this.$nextTick(()=>{this.resizeText(),this.$refs.inputField.focus()});let n={message:t,time:Yk(),user:JSON.stringify({uid:this.user.uid,username:this.userData.username,avatar:this.userData.avatar}),reply:null,isPinned:!1,isDeleted:!1,edits:"[]"},r;if(e){const s=this.messages.findIndex(i=>i.id===e);r=this.messages[s],console.log(r)}if(r){console.log("replyDoc.data().user");const s=JSON.parse(r.data().user).uid;n.reply=JSON.stringify({id:r.id,time:r.data().time,uid:s})}await Gk(Jc(this.db,"messages","channels",this.currentChannel),n),console.log(`Message sent: ${t}`)},swap(t){this.currentChannel=t,this.setupMsgListener(),this.$nextTick(()=>{this.resizeText()})},setupMsgListener(){if(!this.currentChannel){this.message=[];return}this.disconnectListener&&this.disconnectListener();let t=Vk(Jc(this.db,"messages","channels",this.currentChannel),Bk("time","desc"),jk(50));this.disconnectListener=Xc(t,e=>{const n=this.isInView;this.$nextTick(()=>{this.messages=[...e.docs.map(r=>{const s=r.data();return s.time||(s.time=new Date),{id:r.id,data:()=>({...s}),metadata:r.metadata,isLocal:r.metadata.hasPendingWrites}}).reverse()],(n||this.load)&&this.$nextTick(()=>{this.$refs.scrollAnchor.scrollIntoView({behavior:"smooth"}),this.load=!1})})})},scrollTo(t){const e=document.getElementById(t),n=e.offsetHeight/2;e.style.scrollMargin=`calc(50vh - ${n}px)`,e.scrollIntoView({behavior:"smooth"}),document.getElementById(t).classList.remove("scrolling"),setTimeout(()=>{document.getElementById(t).classList.add("scrolling")},100)},async edit(t,e){const n=nr(this.db,"messages","channels",this.currentChannel,t),r=this.messages.findIndex(a=>a.id===t),s=this.messages[r].data().message,i=JSON.parse(this.messages[r].data().edits),o=JSON.stringify(i.concat(s));await As(n,{message:e,edits:o}),console.log(`Message edited: ${e}`)},async deleteMessage(t){const e=nr(this.db,"messages","channels",this.currentChannel,t);await As(e,{isDeleted:!0}),console.log(`Message deleted: ${t}`)},replying(t){this.reply=t,this.$nextTick(()=>{this.$nextTick(()=>{this.$refs.inputField.focus()})})},checker(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())},resizeText(){const t=this.isInView,e=document.querySelector("main > form"),n=document.querySelector("main"),r=this.$refs.inputField;r.style.height="0px",r.style.overflow="scroll",r.style.height=r.scrollHeight+"px",r.style.overflow="hidden",n.style.height=`calc(100vh - ${e.offsetHeight}px)`,t&&this.$refs.scrollAnchor.scrollIntoView({behavior:"smooth"})},isScrollAnchorInView(){document.querySelector("main > form");const e={root:document.querySelector("main"),rootMargin:"0px",threshold:.5};new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting?this.isInView=!0:this.isInView=!1,console.log("IS IN VIEW",this.isInView)})},e).observe(this.$refs.scrollAnchor)},addChannel(){this.$refs.addChannelModal.open()},async createChannel(t){const e=t.name,n=t.roles,r=nr(this.db,"messages","channelList"),s=this.channels;s.push({name:e,roles:n}),await As(r,{Channels:JSON.stringify(s)}),console.log(`Channel created: ${e}`)},getMessage(t){const e=this.messages.findIndex(r=>r.id===t);if(e===-1)return null;const n=this.messages[e];return{id:n.id,message:n.data().message,username:JSON.parse(n.data().user).username,avatar:JSON.parse(n.data().user).avatar}},fallback(t){console.log(t.currentTarget.src),t.currentTarget.src=this.defaultAvatar,t.currentTarget.onerror=null}},async mounted(){const t=nr(this.db,"users",this.user.uid),e=await Kk(t);if(console.log(e.data()),this.userData=e.data(),!e.data().username){let s=prompt("Choose a Username").trim();for(;!s;)s=prompt("Choose a Username").trim();let i=prompt("Choose a Pfp (Url)").trim();i||(i=null),await As(t,{username:s,avatar:i}),this.userData={uid:this.user.uid,username:s,avatar:i,perms:e.data().perms}}const n=nr(this.db,"messages","channelList");this.disconnectChannelListener=Xc(n,s=>{this.channels=JSON.parse(s.data().Channels)});const r=Jc(this.db,"users");this.disconnectUserListener=Xc(r,s=>{const i=s.docs.map(o=>o.data()).sort((o,a)=>o.username.localeCompare(a.username));this.statusList=[...i.filter(o=>o.status==="online"),...i.filter(o=>o.status!=="online")]}),this.setupMsgListener(),this.resizeText(),this.isScrollAnchorInView(),As(t,{status:"online"}),window.addEventListener("beforeunload",()=>{!localStorage.getItem("user")||fetch(`https://content-firestore.googleapis.com/v1beta1/projects/osschat-5c54b/databases/(default)/documents/users/${this.user.uid}?updateMask.fieldPaths=status`,{credentials:"include",headers:{Authorization:"Bearer ya29.a0AXooCgsQKIWSWX5GULFvN2Cifg-6lGHsjWvubAoM3YwY-u2hS82H86MGg2MNQTJrCs8FZcLRoRkTeEgbGL8NjS4mbB6ciNq4zrRwFqzvflWLkN-qV7dn9f6Ft62EVis29eWzajTb_E42u9y0B0gwY7Em4a-DCJ21lAO0QBb8jQaCgYKAT8SARESFQHGX2Mirl7BsCUmJITIIsCMcOoHbA0177","Content-Type":"application/json"},body:JSON.stringify({fields:{status:{stringValue:"offline"}}}),method:"PATCH",keepalive:!0})})},beforeUnmount(){this.disconnectListener&&this.disconnectListener(),this.disconnectChannelListener&&this.disconnectChannelListener(),this.disconnectUserListener&&this.disconnectUserListener(),As(nr(this.db,"users",this.user.uid),{status:"offline"})}},Od=t=>(Ry("data-v-bb7f7f91"),t=t(),Dy(),t),XR={class:"grid h-screen grid-cols-[min-content,auto,max-content] divide-x divide-slate-200 text-gray-800"},ZR={class:"flex h-screen w-48 flex-col items-end justify-between bg-slate-50 px-4 py-4"},eD={class:"w-full space-y-2"},tD={class:"flex items-center gap-4"},nD=Od(()=>T("h1",{class:"pl-2"},"Channels",-1)),rD={class:"space-y-2"},sD=["onClick"],iD={class:"relative w-full overflow-hidden"},oD={class:"h-[calc(100vh-4rem)] w-full overflow-y-scroll py-6"},aD={class:""},lD=["title","id"],cD={ref:"scrollAnchor",class:"h-1",id:"scrollAnchor"},uD={class:"relative"},hD={key:0,class:"reply absolute bottom-full left-0 flex w-full justify-between border-y border-slate-200 bg-slate-100 px-4 py-2"},fD=Od(()=>T("span",null,"Replying to",-1)),dD={class:"h-screen space-y-2 bg-slate-50 px-6 py-4"},pD=Od(()=>T("h1",null,"Members",-1)),mD={class:"flex flex-col items-start gap-2"},gD={class:"flex gap-2"},yD={class:"relative inline-block"},vD=["src","onerror"],wD={key:0,class:"absolute left-0 top-0 h-8 w-8 rounded-full bg-white/50"};function bD(t,e,n,r,s,i){const o=Te("PlusIcon"),a=Te("SettingsDropdown"),l=Te("Message"),c=Te("XCircleIcon"),u=Te("AddChannelModal");return oe(),Me("div",XR,[T("aside",ZR,[T("div",eD,[T("div",tD,[nD,T("button",{class:"ml-auto rounded-full p-1 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600",onClick:e[0]||(e[0]=h=>s.addingChannel=!0)},[q(o,{class:"h-4 w-4"})])]),T("ul",rD,[(oe(!0),Me(Et,null,Ac(s.channels,h=>(oe(),Me("li",{key:h},[T("button",{class:ft([{"!bg-indigo-100 !text-indigo-800":h.name===s.currentChannel},"w-full rounded-md px-2 py-1 text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"]),onClick:f=>i.swap(h.name)}," # "+pn(h.name),11,sD)]))),128))])]),q(a,{onLogout:e[1]||(e[1]=h=>t.$emit("logout"))})]),T("div",iD,[T("main",oD,[T("ul",aD,[(oe(!0),Me(Et,null,Ac(s.messages,(h,f)=>(oe(),Me("li",{title:"Message ID: "+h.id,id:h.id,key:h.id,class:ft({"text-slate-400":h.data().isDeleted,hidden:h.data().isDeleted})},[q(l,{messages:s.messages,message:h,index:f,user:s.userData,defaultAvatar:s.defaultAvatar,reply:s.reply,onReply:d=>i.replying(h.id),onScroll:d=>i.scrollTo(JSON.parse(h.data().reply).id),onEdit:d=>i.edit(h.id,d),onDelete:d=>i.deleteMessage(h.id)},null,8,["messages","message","index","user","defaultAvatar","reply","onReply","onScroll","onEdit","onDelete"])],10,lD))),128)),T("div",cD,null,512)]),T("form",{class:"absolute bottom-0 left-0 flex w-full flex-col border-t bg-slate-50/50 px-6 py-4",onSubmit:e[6]||(e[6]=Io(h=>i.sendMessage(),["prevent"]))},[T("div",uD,[br(T("textarea",{class:"w-full resize-none rounded-md border-slate-200 px-4 py-2 outline-none ring-0 transition-all focus:border-slate-300 focus:ring-0 focus-visible:border-slate-300 focus-visible:outline-none","onUpdate:modelValue":e[2]||(e[2]=h=>s.newMessage=h),placeholder:"New edit",onInput:e[3]||(e[3]=(...h)=>i.resizeText&&i.resizeText(...h)),ref:"inputField",onKeydown:e[4]||(e[4]=(...h)=>i.checker&&i.checker(...h))},null,544),[[_r,s.newMessage]])]),s.reply?(oe(),Me("div",hD,[T("p",null,[fD,$t(" "+pn(i.getMessage(s.reply)?i.getMessage(s.reply).username:"Message Not Found"),1)]),T("button",{onClick:e[5]||(e[5]=h=>i.replying(null))},[q(c,{class:"h-4 w-4"})])])):mn("",!0)],32)])]),T("aside",dD,[pD,T("ul",mD,[(oe(!0),Me(Et,null,Ac(s.statusList,h=>(oe(),Me("li",gD,[T("span",yD,[T("img",{class:"h-8 w-8 rounded-full",src:h.avatar||s.defaultAvatar,onerror:f=>i.fallback(f),alt:""},null,8,vD),h.status==="offline"?(oe(),Me("span",wD)):mn("",!0),T("span",{class:ft(["absolute bottom-0 right-0 z-10 block h-2 w-2 rounded-full ring-2 ring-white",{"bg-green-400":h.status==="online","bg-gray-400":h.status==="offline","bg-red-400":h.status=="busy"}])},null,2)]),T("p",{class:ft({"text-gray-400":h.status==="offline","text-gray-600":h.status==="busy","text-gray-800":h.status==="online"})},pn(h.username),3)]))),256))])]),q(u,{onCreate:i.createChannel,onClose:e[7]||(e[7]=h=>s.addingChannel=!1),isOpen:s.addingChannel},null,8,["onCreate","isOpen"])])}const _D=ys(JR,[["render",bD],["__scopeId","data-v-bb7f7f91"]]);var ED="firebase",ID="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(ED,ID,"app");const TD=(t,e)=>e.some(n=>t instanceof n);let kg,Ng;function SD(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AD(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n1=new WeakMap,Ph=new WeakMap,r1=new WeakMap,au=new WeakMap,Rd=new WeakMap;function CD(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n1.set(n,t)}).catch(()=>{}),Rd.set(e,t),e}function xD(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kD(t){Mh=t(Mh)}function ND(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lu(this),e,...n);return r1.set(r,e.sort?e.sort():[e]),vr(r)}:AD().includes(t)?function(...e){return t.apply(lu(this),e),vr(n1.get(this))}:function(...e){return vr(t.apply(lu(this),e))}}function OD(t){return typeof t=="function"?ND(t):(t instanceof IDBTransaction&&xD(t),TD(t,SD())?new Proxy(t,Mh):t)}function vr(t){if(t instanceof IDBRequest)return CD(t);if(au.has(t))return au.get(t);const e=OD(t);return e!==t&&(au.set(t,e),Rd.set(e,t)),e}const lu=t=>Rd.get(t);function RD(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const DD=["get","getKey","getAll","getAllKeys","count"],PD=["put","add","delete","clear"],cu=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=PD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DD.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return cu.set(e,i),i}kD(t=>({...t,get:(e,n,r)=>Og(e,n)||t.get(e,n,r),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));const s1="@firebase/installations",Dd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=1e4,o1=`w:${Dd}`,a1="FIS_v2",MD="https://firebaseinstallations.googleapis.com/v1",LD=60*60*1e3,FD="installations",$D="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},fs=new vs(FD,$D,UD);function l1(t){return t instanceof cn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1({projectId:t}){return`${MD}/projects/${t}/installations`}function u1(t){return{token:t.token,requestStatus:2,expiresIn:BD(t.expiresIn),creationTime:Date.now()}}async function h1(t,e){const r=(await e.json()).error;return fs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function f1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function VD(t,{refreshToken:e}){const n=f1(t);return n.append("Authorization",jD(e)),n}async function d1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function BD(t){return Number(t.replace("s","000"))}function jD(t){return`${a1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=c1(t),s=f1(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:a1,appId:t.appId,sdkVersion:o1},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await d1(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:u1(c.authToken)}}else throw await h1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=/^[cdef][\w-]{21}$/,Lh="";function KD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WD(t);return qD.test(n)?n:Lh}catch{return Lh}}function WD(t){return HD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new Map;function g1(t,e){const n=mc(t);y1(n,e),GD(n,e)}function y1(t,e){const n=m1.get(t);if(!!n)for(const r of n)r(e)}function GD(t,e){const n=YD();n&&n.postMessage({key:t,fid:e}),QD()}let Jr=null;function YD(){return!Jr&&"BroadcastChannel"in self&&(Jr=new BroadcastChannel("[Firebase] FID Change"),Jr.onmessage=t=>{y1(t.data.key,t.data.fid)}),Jr}function QD(){m1.size===0&&Jr&&(Jr.close(),Jr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="firebase-installations-database",XD=1,ds="firebase-installations-store";let uu=null;function Pd(){return uu||(uu=RD(JD,XD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}})),uu}async function ol(t,e){const n=mc(t),s=(await Pd()).transaction(ds,"readwrite"),i=s.objectStore(ds),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&g1(t,e.fid),e}async function v1(t){const e=mc(t),r=(await Pd()).transaction(ds,"readwrite");await r.objectStore(ds).delete(e),await r.done}async function gc(t,e){const n=mc(t),s=(await Pd()).transaction(ds,"readwrite"),i=s.objectStore(ds),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&g1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t){let e;const n=await gc(t.appConfig,r=>{const s=ZD(r),i=eP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Lh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZD(t){const e=t||{fid:KD(),registrationStatus:0};return w1(e)}function eP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nP(t)}:{installationEntry:e}}async function tP(t,e){try{const n=await zD(t,e);return ol(t.appConfig,n)}catch(n){throw l1(n)&&n.customData.serverCode===409?await v1(t.appConfig):await ol(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nP(t){let e=await Rg(t.appConfig);for(;e.registrationStatus===1;)await p1(100),e=await Rg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Md(t);return r||n}return e}function Rg(t){return gc(t,e=>{if(!e)throw fs.create("installation-not-found");return w1(e)})}function w1(t){return rP(t)?{fid:t.fid,registrationStatus:0}:t}function rP(t){return t.registrationStatus===1&&t.registrationTime+i1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP({appConfig:t,heartbeatServiceProvider:e},n){const r=iP(t,n),s=VD(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:o1,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await d1(()=>fetch(r,a));if(l.ok){const c=await l.json();return u1(c)}else throw await h1("Generate Auth Token",l)}function iP(t,{fid:e}){return`${c1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ld(t,e=!1){let n;const r=await gc(t.appConfig,i=>{if(!b1(i))throw fs.create("not-registered");const o=i.authToken;if(!e&&lP(o))return i;if(o.requestStatus===1)return n=oP(t,e),i;{if(!navigator.onLine)throw fs.create("app-offline");const a=uP(i);return n=aP(t,a),a}});return n?await n:r.authToken}async function oP(t,e){let n=await Dg(t.appConfig);for(;n.authToken.requestStatus===1;)await p1(100),n=await Dg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ld(t,e):r}function Dg(t){return gc(t,e=>{if(!b1(e))throw fs.create("not-registered");const n=e.authToken;return hP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aP(t,e){try{const n=await sP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ol(t.appConfig,r),n}catch(n){if(l1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await v1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ol(t.appConfig,r)}throw n}}function b1(t){return t!==void 0&&t.registrationStatus===2}function lP(t){return t.requestStatus===2&&!cP(t)}function cP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LD}function uP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hP(t){return t.requestStatus===1&&t.requestTime+i1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Md(e);return r?r.catch(console.error):Ld(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e=!1){const n=t;return await pP(n),(await Ld(n,e)).token}async function pP(t){const{registrationPromise:e}=await Md(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){if(!t||!t.options)throw hu("App Configuration");if(!t.name)throw hu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hu(t){return fs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="installations",gP="installations-internal",yP=t=>{const e=t.getProvider("app").getImmediate(),n=mP(e),r=ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vP=t=>{const e=t.getProvider("app").getImmediate(),n=ws(e,_1).getImmediate();return{getId:()=>fP(n),getToken:s=>dP(n,s)}};function wP(){xn(new rn(_1,yP,"PUBLIC")),xn(new rn(gP,vP,"PRIVATE"))}wP();Yt(s1,Dd);Yt(s1,Dd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="analytics",bP="firebase_id",_P="origin",EP=60*1e3,IP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new kl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new vs("analytics","Analytics",TP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){if(!t.startsWith(Fd)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function E1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function AP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function CP(t,e){const n=AP("firebase-js-sdk-policy",{createScriptURL:SP}),r=document.createElement("script"),s=`${Fd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function xP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await E1(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){kt.error(a)}t("config",s,i)}async function NP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await E1(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){kt.error(i)}}function OP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await NP(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await kP(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){kt.error(a)}}return s}function RP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=OP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function DP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=30,MP=1e3;class LP{constructor(e={},n=MP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const I1=new LP;function FP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $P(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:FP(r)},i=IP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function UP(t,e=I1,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw zt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jP;return setTimeout(async()=>{a.abort()},n!==void 0?n:EP),T1({appId:r,apiKey:s,measurementId:i},o,a,e)}async function T1(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=I1){var i;const{appId:o,measurementId:a}=t;try{await VP(r,e)}catch(l){if(a)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await $P(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!BP(c)){if(s.deleteThrottleMetadata(o),a)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?zp(n,s.intervalMillis,PP):zp(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),kt.debug(`Calling attemptFetch again in ${u} millis`),T1(t,h,r,s)}}function VP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BP(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(){if(yv())try{await vv()}catch(t){return kt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qP(t,e,n,r,s,i,o){var a;const l=UP(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>kt.error(d)),e.push(l);const c=HP().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([l,c]);DP(i)||CP(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[_P]="firebase",f.update=!0,h!=null&&(f[bP]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.app=e}_delete(){return delete Ki[this.app.options.appId],Promise.resolve()}}let Ki={},Pg=[];const Mg={};let fu="dataLayer",WP="gtag",Lg,S1,Fg=!1;function GP(){const t=[];if(gv()&&t.push("This is a browser extension environment."),ST()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function YP(t,e,n){GP();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Ki[r]!=null)throw zt.create("already-exists",{id:r});if(!Fg){xP(fu);const{wrappedGtag:i,gtagCore:o}=RP(Ki,Pg,Mg,fu,WP);S1=i,Lg=o,Fg=!0}return Ki[r]=qP(t,Pg,Mg,e,Lg,fu,n),new KP(t)}function QP(t=cf()){t=He(t);const e=ws(t,al);return e.isInitialized()?e.getImmediate():JP(t)}function JP(t,e={}){const n=ws(t,al);if(n.isInitialized()){const s=n.getImmediate();if(Zi(e,n.getOptions()))return s;throw zt.create("already-initialized")}return n.initialize({options:e})}function XP(t,e,n,r){t=He(t),zP(S1,Ki[t.app.options.appId],e,n,r).catch(s=>kt.error(s))}const $g="@firebase/analytics",Ug="0.10.0";function ZP(){xn(new rn(al,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return YP(r,s,n)},"PUBLIC")),xn(new rn("analytics-internal",t,"PRIVATE")),Yt($g,Ug),Yt($g,Ug,"esm2017");function t(e){try{const n=e.getProvider(al).getImmediate();return{logEvent:(r,s,i)=>XP(n,r,s,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}ZP();function $d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function A1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eM=A1,C1=new vs("auth","Firebase",A1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new kl("@firebase/auth");function tM(t,...e){ll.logLevel<=ge.WARN&&ll.warn(`Auth (${ni}): ${t}`,...e)}function Oa(t,...e){ll.logLevel<=ge.ERROR&&ll.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Ud(t,...e)}function An(t,...e){return Ud(t,...e)}function nM(t,e,n){const r=Object.assign(Object.assign({},eM()),{[e]:n});return new vs("auth","Firebase",r).create(e,{appName:t.name})}function Ud(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return C1.create(t,...e)}function Y(t,e,...n){if(!t)throw Ud(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function qn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rM(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rM()||gv()||"connection"in navigator)?navigator.onLine:!0}function iM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=ET()||IT()}get(){return sM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=new Ko(3e4,6e4);function ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hi(t,e,n,r,s={}){return k1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=To(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),x1.fetch()(N1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function k1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oM),e);try{const s=new lM(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw va(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nM(t,u,c);ln(t,u)}}catch(s){if(s instanceof cn)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function Wo(t,e,n,r,s={}){const i=await hi(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function N1(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vd(t.config,s):`${t.config.apiScheme}://${s}`}class lM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),aM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function uM(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hM(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Bd(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wi(du(s.auth_time)),issuedAtTime:Wi(du(s.iat)),expirationTime:Wi(du(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function du(t){return Number(t)*1e3}function Bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=fv(n);return s?JSON.parse(s):(Oa("Failed to decode base64 JWT payload"),null)}catch(s){return Oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fM(t){const e=Bd(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&dM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wo(t,uM(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yM(i.providerUserInfo):[],a=gM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new O1(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mM(t){const e=He(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gM(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yM(t){return t.map(e=>{var{providerId:n}=e,r=$d(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(t,e){const n=await k1(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=N1(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vM(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bo;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new O1(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hM(this,e)}reload(){return mM(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wo(this,cM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:F,isAnonymous:W,providerData:P,stsTokenManager:X}=n;Y(k&&X,e,"internal-error");const ce=bo.fromJSON(this.name,X);Y(typeof k=="string",e,"internal-error"),Xn(h,e.name),Xn(f,e.name),Y(typeof F=="boolean",e,"internal-error"),Y(typeof W=="boolean",e,"internal-error"),Xn(d,e.name),Xn(g,e.name),Xn(y,e.name),Xn(w,e.name),Xn(v,e.name),Xn(_,e.name);const j=new rs({uid:k,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:W,photoURL:g,phoneNumber:d,tenantId:y,stsTokenManager:ce,createdAt:v,lastLoginAt:_});return P&&Array.isArray(P)&&(j.providerData=P.map(se=>Object.assign({},se))),w&&(j._redirectEventId=w),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new bo;s.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cl(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Map;function Mn(t){qn(t instanceof Function,"Expected a class definition");let e=Bg.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R1.type="NONE";const jg=R1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ra("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Mn(jg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Mn(jg);const o=Ra(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=rs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new js(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F1(e))return"Blackberry";if($1(e))return"Webos";if(jd(e))return"Safari";if((e.includes("chrome/")||P1(e))&&!e.includes("edge/"))return"Chrome";if(L1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D1(t=vt()){return/firefox\//i.test(t)}function jd(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P1(t=vt()){return/crios\//i.test(t)}function M1(t=vt()){return/iemobile/i.test(t)}function L1(t=vt()){return/android/i.test(t)}function F1(t=vt()){return/blackberry/i.test(t)}function $1(t=vt()){return/webos/i.test(t)}function yc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wM(t=vt()){var e;return yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bM(){return TT()&&document.documentMode===10}function U1(t=vt()){return yc(t)||L1(t)||$1(t)||F1(t)||/windows phone/i.test(t)||M1(t)}function _M(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e=[]){let n;switch(t){case"Browser":n=zg(vt());break;case"Worker":n=`${zg(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}async function B1(t,e){return hi(t,"GET","/v2/recaptchaConfig",ui(t,e))}function Hg(t){return t!==void 0&&t.enterprise!==void 0}class j1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function z1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EM().appendChild(r)})}function IM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TM="https://www.google.com/recaptcha/enterprise.js?render=",SM="recaptcha-enterprise",AM="NO_RECAPTCHA";class H1{constructor(e){this.type=SM,this.auth=fi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{B1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new j1(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Hg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(AM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Hg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}z1(TM+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ul(t,e,n,r=!1){const s=new H1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new CM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}async initializeRecaptchaConfig(){const e=await B1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new j1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new H1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fi(t){return He(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=NT(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t,e){const n=ws(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zi(i,e!=null?e:{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function NM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OM(t,e,n){const r=fi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=q1(e),{host:o,port:a}=RM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||DM()}function q1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RM(t){const e=q1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kg(o)}}}function Kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function PM(t,e){return hi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MM(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}async function LM(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends zd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ul(e,r,"signInWithPassword");return pu(e,s)}else return pu(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ul(e,r,"signInWithPassword");return pu(e,i)}else return Promise.reject(s)});case"emailLink":return MM(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return PM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LM(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM="http://localhost";class ps extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$d(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:FM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UM(t){const e=Ei(Ii(t)).link,n=e?Ei(Ii(e)).deep_link_id:null,r=Ei(Ii(t)).deep_link_id;return(r?Ei(Ii(r)).link:null)||r||n||e||t}class Hd{constructor(e){var n,r,s,i,o,a;const l=Ei(Ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=$M((s=l.mode)!==null&&s!==void 0?s:null);Y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UM(e);try{return new Hd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hd.parseLink(n);return Y(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends K1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Go{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Go{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Go{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e){return Wo(t,"POST","/v1/accounts:signUp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rs._fromIdTokenResponse(e,r,s),o=Wg(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wg(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hl(e,n,r,s)}}function W1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,i,e,r):i})}async function VM(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wo(t,W1(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Bd(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),ms._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e,n=!1){const r="signIn",s=await W1(t,r,e),i=await ms._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jM(t,e){return G1(fi(t),e)}async function zM(t,e,n){var r;const s=fi(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await ul(s,i,"signUpPassword");o=mu(s,c)}else o=mu(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ul(s,i,"signUpPassword");return mu(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await ms._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function HM(t,e,n){return jM(He(t),di.credential(e,n))}function qM(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function KM(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function WM(t){return He(t).signOut()}const fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(){const t=vt();return jd(t)||yc(t)}const YM=1e3,QM=10;class Q1 extends Y1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GM()&&_M(),this.fallbackToPolling=U1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bM()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QM):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q1.type="LOCAL";const JM=Q1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Y1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J1.type="SESSION";const X1=J1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await XM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=qd("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function eL(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function tL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rL(){return Z1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebaseLocalStorageDb",sL=1,dl="firebaseLocalStorage",t_="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wc(t,e){return t.transaction([dl],e?"readwrite":"readonly").objectStore(dl)}function iL(){const t=indexedDB.deleteDatabase(e_);return new Yo(t).toPromise()}function $h(){const t=indexedDB.open(e_,sL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dl,{keyPath:t_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dl)?e(r):(r.close(),await iL(),e(await $h()))})})}async function Gg(t,e,n){const r=wc(t,!0).put({[t_]:e,value:n});return new Yo(r).toPromise()}async function oL(t,e){const n=wc(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=wc(t,!0).delete(e);return new Yo(n).toPromise()}const aL=800,lL=3;class n_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(rL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tL(),!this.activeServiceWorker)return;this.sender=new ZM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await Gg(e,fl,"1"),await Yg(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wc(s,!1).getAll();return new Yo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n_.type="LOCAL";const cL=n_;new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t,e){return e?Mn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hL(t){return G1(t.auth,new Kd(t),t.bypassAuthState)}function fL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),BM(n,new Kd(t),t.bypassAuthState)}async function dL(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),VM(n,new Kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hL;case"linkViaPopup":case"linkViaRedirect":return dL;case"reauthViaPopup":case"reauthViaRedirect":return fL;default:ln(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=new Ko(2e3,1e4);class Rs extends r_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pL.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL="pendingRedirect",Da=new Map;class gL extends r_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await yL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yL(t,e){const n=bL(e),r=wL(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vL(t,e){Da.set(t._key(),e)}function wL(t){return Mn(t._redirectPersistence)}function bL(t){return Ra(mL,t.config.apiKey,t.name)}async function _L(t,e,n=!1){const r=fi(t),s=uL(r,e),o=await new gL(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=10*60*1e3;class IL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CL=/^https?/;async function xL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SL(t);for(const n of e)try{if(kL(n))return}catch{}ln(t,"unauthorized-domain")}function kL(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CL.test(n))return!1;if(AL.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=new Ko(3e4,6e4);function Jg(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OL(t){return new Promise((e,n)=>{var r,s,i;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(An(t,"network-request-failed"))},timeout:NL.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const a=IM("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},z1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function RL(t){return Pa=Pa||OL(t),Pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=new Ko(5e3,15e3),PL="__/auth/iframe",ML="emulator/auth/iframe",LL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $L(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vd(e,ML):`https://${t.config.authDomain}/${PL}`,r={apiKey:e.apiKey,appName:t.name,v:ni},s=FL.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${To(r).slice(1)}`}async function UL(t){const e=await RL(t),n=Cn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:$L(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LL,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Cn().setTimeout(()=>{i(o)},DL.get());function l(){Cn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BL=500,jL=600,zL="_blank",HL="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qL(t,e,n,r=BL,s=jL){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VL),{width:r.toString(),height:s.toString(),top:i,left:o}),c=vt().toLowerCase();n&&(a=P1(c)?zL:n),D1(c)&&(e=e||HL,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(wM(c)&&a!=="_self")return KL(e||"",a),new Xg(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Xg(h)}function KL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="__/auth/handler",GL="emulator/auth/handler",YL=encodeURIComponent("fac");async function Zg(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:s};if(e instanceof K1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Go){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${YL}=${encodeURIComponent(l)}`:"";return`${QL(t)}?${To(a).slice(1)}${c}`}function QL({config:t}){return t.emulator?Vd(t,GL):`https://${t.authDomain}/${WL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="webStorageSupport";class JL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X1,this._completeRedirectFn=_L,this._overrideRedirectResult=vL}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,Fh(),s);return qL(e,o,qd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zg(e,n,r,Fh(),s);return eL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UL(e),r=new IL(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gu,{type:gu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gu];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U1()||jd()||yc()}}const XL=JL;var ey="@firebase/auth",ty="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tF(t){xn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V1(t)},c=new xM(r,s,i,l);return NM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new rn("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(r=>new ZL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(ey,ty,eF(t)),Yt(ey,ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nF=5*60,rF=mv("authIdTokenMaxAge")||nF;let ny=null;const sF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rF)return;const s=n==null?void 0:n.token;ny!==s&&(ny=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iF(t=cf()){const e=ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kM(t,{popupRedirectResolver:XL,persistence:[cL,JM,X1]}),r=mv("authTokenSyncURL");if(r){const i=sF(r);KM(n,i,()=>i(n.currentUser)),qM(n,o=>i(o))}const s=dv("auth");return s&&OM(n,`http://${s}`),n}tF("Browser");const oF={key:0},aF={apiKey:"AIzaSyApnDFVc3CxT2B5GwLc4fmmkzOge90-jvM",authDomain:"osschat-5c54b.firebaseapp.com",projectId:"osschat-5c54b",storageBucket:"osschat-5c54b.appspot.com",messagingSenderId:"1084566090149",appId:"1:1084566090149:web:87c3fb10d837a2fe16384c",measurementId:"G-K119JYEVQT"},Wd=_v(aF);QP(Wd);const yu=iF(Wd),i_=Nk(Wd),lF={data(){return{user:null,makingAcc:!1}},methods:{register(t){zM(yu,t.email,t.password).then(async e=>{const n=e.user;t.stayLoggedIn&&localStorage.setItem("user",JSON.stringify(n)),console.log(n.uid);const r=nr(i_,"users",n.uid.toString());await Wk(r,{uid:n.uid,username:null,avatar:null,perms:JSON.stringify({})}),console.log("user created",n.uid),this.user=n}).catch(e=>{console.log(e),console.error(e.message)})},login(t){HM(yu,t.email,t.password).then(e=>{const n=e.user;console.log("user: ",n),console.log("Username: ",n.username),localStorage.setItem("user",JSON.stringify(n)),this.user=n}).catch(e=>{console.log(e),console.error(e.message)})},logout(){WM(yu).then(()=>{console.log("success")}).catch(t=>console.error("Sign Out Error",t)),localStorage.removeItem("user"),this.user=null}},mounted(){const t=localStorage.getItem("user");t&&(this.user=JSON.parse(t))}},cF=Object.assign(lF,{__name:"App",setup(t){return(e,n)=>e.user?(oe(),dt(_D,{key:1,onLogout:e.logout,user:e.user,db:Xh(i_)},null,8,["onLogout","user","db"])):(oe(),Me("div",oF,[e.makingAcc?(oe(),dt(hT,{key:1,onRegister:n[2]||(n[2]=r=>e.register(r)),onLogin:n[3]||(n[3]=r=>e.makingAcc=!1)})):(oe(),dt(JI,{key:0,onLogin:n[0]||(n[0]=r=>e.login(r)),onRegister:n[1]||(n[1]=r=>e.makingAcc=!0)}))]))}});MI(cF).mount("#app");
