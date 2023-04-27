(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function sa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ra(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Se(s)?Jd(s):ra(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Se(t))return t;if(de(t))return t}}const Qd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Xd=/\/\*.*?\*\//gs;function Jd(t){const e={};return t.replace(Xd,"").split(Qd).forEach(n=>{if(n){const s=n.split(Yd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ia(t){let e="";if(Se(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=ia(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=sa(Zd);function wu(t){return!!t||t===""}const Sc=t=>Se(t)?t:t==null?"":G(t)||de(t)&&(t.toString===Iu||!W(t.toString))?JSON.stringify(t,Eu,2):String(t),Eu=(t,e)=>e&&e.__v_isRef?Eu(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:_u(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!G(e)&&!Tu(e)?String(e):e,he={},xn=[],ut=()=>{},tp=()=>!1,np=/^on[^a-z]/,ti=t=>np.test(t),oa=t=>t.startsWith("onUpdate:"),Ge=Object.assign,aa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sp=Object.prototype.hasOwnProperty,ee=(t,e)=>sp.call(t,e),G=Array.isArray,Rn=t=>ni(t)==="[object Map]",_u=t=>ni(t)==="[object Set]",W=t=>typeof t=="function",Se=t=>typeof t=="string",ca=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",bu=t=>de(t)&&W(t.then)&&W(t.catch),Iu=Object.prototype.toString,ni=t=>Iu.call(t),rp=t=>ni(t).slice(8,-1),Tu=t=>ni(t)==="[object Object]",la=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cr=sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),si=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ip=/-(\w)/g,$n=si(t=>t.replace(ip,(e,n)=>n?n.toUpperCase():"")),op=/\B([A-Z])/g,Zn=si(t=>t.replace(op,"-$1").toLowerCase()),Cu=si(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fi=si(t=>t?`on${Cu(t)}`:""),xs=(t,e)=>!Object.is(t,e),$i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ap=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ac;const cp=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let at;class Su{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function lp(t){return new Su(t)}function up(t,e=at){e&&e.active&&e.effects.push(t)}function hp(){return at}const ua=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Au=t=>(t.w&Ht)>0,Du=t=>(t.n&Ht)>0,fp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ht},dp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Au(r)&&!Du(r)?r.delete(t):e[n++]=r,r.w&=~Ht,r.n&=~Ht}e.length=n}},uo=new WeakMap;let ps=0,Ht=1;const ho=30;let ct;const cn=Symbol(""),fo=Symbol("");class ha{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,up(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=Vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Vt=!0,Ht=1<<++ps,ps<=ho?fp(this):Dc(this),this.fn()}finally{ps<=ho&&dp(this),Ht=1<<--ps,ct=this.parent,Vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(Dc(this),this.onStop&&this.onStop(),this.active=!1)}}function Dc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vt=!0;const xu=[];function es(){xu.push(Vt),Vt=!1}function ts(){const t=xu.pop();Vt=t===void 0?!0:t}function Xe(t,e,n){if(Vt&&ct){let s=uo.get(t);s||uo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ua()),Ru(r)}}function Ru(t,e){let n=!1;ps<=ho?Du(t)||(t.n|=Ht,n=!Au(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function At(t,e,n,s,r,i){const o=uo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?la(n)&&a.push(o.get("length")):(a.push(o.get(cn)),Rn(t)&&a.push(o.get(fo)));break;case"delete":G(t)||(a.push(o.get(cn)),Rn(t)&&a.push(o.get(fo)));break;case"set":Rn(t)&&a.push(o.get(cn));break}if(a.length===1)a[0]&&po(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);po(ua(c))}}function po(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&xc(s);for(const s of n)s.computed||xc(s)}function xc(t,e){(t!==ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const pp=sa("__proto__,__v_isRef,__isVue"),Nu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ca)),gp=fa(),mp=fa(!1,!0),yp=fa(!0),Rc=vp();function vp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let i=0,o=this.length;i<o;i++)Xe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){es();const s=se(this)[e].apply(this,n);return ts(),s}}),t}function wp(t){const e=se(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function fa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Mp:Lu:e?Mu:Pu).get(s))return s;const o=G(s);if(!t){if(o&&ee(Rc,r))return Reflect.get(Rc,r,i);if(r==="hasOwnProperty")return wp}const a=Reflect.get(s,r,i);return(ca(r)?Nu.has(r):pp(r))||(t||Xe(s,"get",r),e)?a:Ve(a)?o&&la(r)?a:a.value:de(a)?t?Fu(a):Gs(a):a}}const Ep=Ou(),_p=Ou(!0);function Ou(t=!1){return function(n,s,r,i){let o=n[s];if(Vn(o)&&Ve(o)&&!Ve(r))return!1;if(!t&&(!kr(r)&&!Vn(r)&&(o=se(o),r=se(r)),!G(n)&&Ve(o)&&!Ve(r)))return o.value=r,!0;const a=G(n)&&la(s)?Number(s)<n.length:ee(n,s),c=Reflect.set(n,s,r,i);return n===se(i)&&(a?xs(r,o)&&At(n,"set",s,r):At(n,"add",s,r)),c}}function bp(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&At(t,"delete",e,void 0),s}function Ip(t,e){const n=Reflect.has(t,e);return(!ca(e)||!Nu.has(e))&&Xe(t,"has",e),n}function Tp(t){return Xe(t,"iterate",G(t)?"length":cn),Reflect.ownKeys(t)}const ku={get:gp,set:Ep,deleteProperty:bp,has:Ip,ownKeys:Tp},Cp={get:yp,set(t,e){return!0},deleteProperty(t,e){return!0}},Sp=Ge({},ku,{get:mp,set:_p}),da=t=>t,ri=t=>Reflect.getPrototypeOf(t);function ur(t,e,n=!1,s=!1){t=t.__v_raw;const r=se(t),i=se(e);n||(e!==i&&Xe(r,"get",e),Xe(r,"get",i));const{has:o}=ri(r),a=s?da:n?ya:Rs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hr(t,e=!1){const n=this.__v_raw,s=se(n),r=se(t);return e||(t!==r&&Xe(s,"has",t),Xe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function fr(t,e=!1){return t=t.__v_raw,!e&&Xe(se(t),"iterate",cn),Reflect.get(t,"size",t)}function Nc(t){t=se(t);const e=se(this);return ri(e).has.call(e,t)||(e.add(t),At(e,"add",t,t)),this}function Oc(t,e){e=se(e);const n=se(this),{has:s,get:r}=ri(n);let i=s.call(n,t);i||(t=se(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?xs(e,o)&&At(n,"set",t,e):At(n,"add",t,e),this}function kc(t){const e=se(this),{has:n,get:s}=ri(e);let r=n.call(e,t);r||(t=se(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&At(e,"delete",t,void 0),i}function Pc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&At(t,"clear",void 0,void 0),n}function dr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=se(o),c=e?da:t?ya:Rs;return!t&&Xe(a,"iterate",cn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function pr(t,e,n){return function(...s){const r=this.__v_raw,i=se(r),o=Rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?da:e?ya:Rs;return!e&&Xe(i,"iterate",c?fo:cn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Pt(t){return function(...e){return t==="delete"?!1:this}}function Ap(){const t={get(i){return ur(this,i)},get size(){return fr(this)},has:hr,add:Nc,set:Oc,delete:kc,clear:Pc,forEach:dr(!1,!1)},e={get(i){return ur(this,i,!1,!0)},get size(){return fr(this)},has:hr,add:Nc,set:Oc,delete:kc,clear:Pc,forEach:dr(!1,!0)},n={get(i){return ur(this,i,!0)},get size(){return fr(this,!0)},has(i){return hr.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:dr(!0,!1)},s={get(i){return ur(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return hr.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pr(i,!1,!1),n[i]=pr(i,!0,!1),e[i]=pr(i,!1,!0),s[i]=pr(i,!0,!0)}),[t,n,e,s]}const[Dp,xp,Rp,Np]=Ap();function pa(t,e){const n=e?t?Np:Rp:t?xp:Dp;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const Op={get:pa(!1,!1)},kp={get:pa(!1,!0)},Pp={get:pa(!0,!1)},Pu=new WeakMap,Mu=new WeakMap,Lu=new WeakMap,Mp=new WeakMap;function Lp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fp(t){return t.__v_skip||!Object.isExtensible(t)?0:Lp(rp(t))}function Gs(t){return Vn(t)?t:ga(t,!1,ku,Op,Pu)}function $p(t){return ga(t,!1,Sp,kp,Mu)}function Fu(t){return ga(t,!0,Cp,Pp,Lu)}function ga(t,e,n,s,r){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Fp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Nn(t){return Vn(t)?Nn(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function $u(t){return Nn(t)||Vn(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function ma(t){return Or(t,"__v_skip",!0),t}const Rs=t=>de(t)?Gs(t):t,ya=t=>de(t)?Fu(t):t;function Vu(t){Vt&&ct&&(t=se(t),Ru(t.dep||(t.dep=ua())))}function Uu(t,e){t=se(t);const n=t.dep;n&&po(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function va(t){return Bu(t,!1)}function Vp(t){return Bu(t,!0)}function Bu(t,e){return Ve(t)?t:new Up(t,e)}class Up{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:Rs(e)}get value(){return Vu(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||Vn(e);e=n?e:se(e),xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Rs(e),Uu(this))}}function Ut(t){return Ve(t)?t.value:t}const Bp={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ve(r)&&!Ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ju(t){return Nn(t)?t:new Proxy(t,Bp)}var qu;class jp{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qu]=!1,this._dirty=!0,this.effect=new ha(e,()=>{this._dirty||(this._dirty=!0,Uu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=se(this);return Vu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qu="__v_isReadonly";function qp(t,e,n=!1){let s,r;const i=W(t);return i?(s=t,r=ut):(s=t.get,r=t.set),new jp(s,r,i||!r,n)}function Bt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ii(i,e,n)}return r}function ht(t,e,n,s){if(W(t)){const i=Bt(t,e,n,s);return i&&bu(i)&&i.catch(o=>{ii(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ht(t[i],e,n,s));return r}function ii(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Bt(c,null,10,[t,o,a]);return}}Hp(t,n,r,s)}function Hp(t,e,n,s=!0){console.error(t)}let Ns=!1,go=!1;const $e=[];let wt=0;const On=[];let Tt=null,nn=0;const Hu=Promise.resolve();let wa=null;function zu(t){const e=wa||Hu;return t?e.then(this?t.bind(this):t):e}function zp(t){let e=wt+1,n=$e.length;for(;e<n;){const s=e+n>>>1;Os($e[s])<t?e=s+1:n=s}return e}function Ea(t){(!$e.length||!$e.includes(t,Ns&&t.allowRecurse?wt+1:wt))&&(t.id==null?$e.push(t):$e.splice(zp(t.id),0,t),Ku())}function Ku(){!Ns&&!go&&(go=!0,wa=Hu.then(Wu))}function Kp(t){const e=$e.indexOf(t);e>wt&&$e.splice(e,1)}function Gp(t){G(t)?On.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?nn+1:nn))&&On.push(t),Ku()}function Mc(t,e=Ns?wt+1:0){for(;e<$e.length;e++){const n=$e[e];n&&n.pre&&($e.splice(e,1),e--,n())}}function Gu(t){if(On.length){const e=[...new Set(On)];if(On.length=0,Tt){Tt.push(...e);return}for(Tt=e,Tt.sort((n,s)=>Os(n)-Os(s)),nn=0;nn<Tt.length;nn++)Tt[nn]();Tt=null,nn=0}}const Os=t=>t.id==null?1/0:t.id,Wp=(t,e)=>{const n=Os(t)-Os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wu(t){go=!1,Ns=!0,$e.sort(Wp);const e=ut;try{for(wt=0;wt<$e.length;wt++){const n=$e[wt];n&&n.active!==!1&&Bt(n,null,14)}}finally{wt=0,$e.length=0,Gu(),Ns=!1,wa=null,($e.length||On.length)&&Wu()}}function Qp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=s[u]||he;d&&(r=n.map(g=>Se(g)?g.trim():g)),f&&(r=n.map(ap))}let a,c=s[a=Fi(e)]||s[a=Fi($n(e))];!c&&i&&(c=s[a=Fi(Zn(e))]),c&&ht(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(l,t,6,r)}}function Qu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Qu(l,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(de(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Ge(o,i),de(t)&&s.set(t,o),o)}function oi(t,e){return!t||!ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Zn(e))||ee(t,e))}let Ye=null,Yu=null;function Pr(t){const e=Ye;return Ye=t,Yu=t&&t.type.__scopeId||null,e}function _a(t,e=Ye,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&qc(-1);const i=Pr(e);let o;try{o=t(...r)}finally{Pr(i),s._d&&qc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:d,setupState:g,ctx:b,inheritAttrs:I}=t;let O,R;const B=Pr(t);try{if(n.shapeFlag&4){const X=r||s;O=vt(u.call(X,X,f,i,g,d,b)),R=c}else{const X=e;O=vt(X.length>1?X(i,{attrs:c,slots:a,emit:l}):X(i,null)),R=e.props?c:Yp(c)}}catch(X){Es.length=0,ii(X,t,1),O=Ue(Un)}let k=O;if(R&&I!==!1){const X=Object.keys(R),{shapeFlag:me}=k;X.length&&me&7&&(o&&X.some(oa)&&(R=Xp(R,o)),k=Bn(k,R))}return n.dirs&&(k=Bn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),O=k,Pr(B),O}const Yp=t=>{let e;for(const n in t)(n==="class"||n==="style"||ti(n))&&((e||(e={}))[n]=t[n]);return e},Xp=(t,e)=>{const n={};for(const s in t)(!oa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jp(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Lc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!oi(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lc(s,o,l):!0:!!o;return!1}function Lc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!oi(n,i))return!0}return!1}function Zp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const eg=t=>t.__isSuspense;function tg(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Gp(t)}function Sr(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Ie||Ye;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const gr={};function Ar(t,e,n){return Xu(t,e,n)}function Xu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=he){const a=hp()===(Ie==null?void 0:Ie.scope)?Ie:null;let c,l=!1,u=!1;if(Ve(t)?(c=()=>t.value,l=kr(t)):Nn(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(k=>Nn(k)||kr(k)),c=()=>t.map(k=>{if(Ve(k))return k.value;if(Nn(k))return An(k);if(W(k))return Bt(k,a,2)})):W(t)?e?c=()=>Bt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),ht(t,a,3,[d])}:c=ut,e&&s){const k=c;c=()=>An(k())}let f,d=k=>{f=R.onStop=()=>{Bt(k,a,4)}},g;if(Ps)if(d=ut,e?n&&ht(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const k=Gg();g=k.__watcherHandles||(k.__watcherHandles=[])}else return ut;let b=u?new Array(t.length).fill(gr):gr;const I=()=>{if(R.active)if(e){const k=R.run();(s||l||(u?k.some((X,me)=>xs(X,b[me])):xs(k,b)))&&(f&&f(),ht(e,a,3,[k,b===gr?void 0:u&&b[0]===gr?[]:b,d]),b=k)}else R.run()};I.allowRecurse=!!e;let O;r==="sync"?O=I:r==="post"?O=()=>Qe(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),O=()=>Ea(I));const R=new ha(c,O);e?n?I():b=R.run():r==="post"?Qe(R.run.bind(R),a&&a.suspense):R.run();const B=()=>{R.stop(),a&&a.scope&&aa(a.scope.effects,R)};return g&&g.push(B),B}function ng(t,e,n){const s=this.proxy,r=Se(t)?t.includes(".")?Ju(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=Ie;jn(this);const a=Xu(r,i.bind(s),n);return o?jn(o):un(),a}function Ju(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function An(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))An(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)An(t[n],e);else if(_u(t)||Rn(t))t.forEach(n=>{An(n,e)});else if(Tu(t))for(const n in t)An(t[n],e);return t}function Zu(t){return W(t)?{setup:t,name:t.name}:t}const vs=t=>!!t.type.__asyncLoader,eh=t=>t.type.__isKeepAlive;function sg(t,e){th(t,"a",e)}function rg(t,e){th(t,"da",e)}function th(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ai(e,s,n),n){let r=n.parent;for(;r&&r.parent;)eh(r.parent.vnode)&&ig(s,e,n,r),r=r.parent}}function ig(t,e,n,s){const r=ai(e,t,s,!0);sh(()=>{aa(s[e],r)},n)}function ai(t,e,n=Ie,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;es(),jn(n);const a=ht(e,n,t,o);return un(),ts(),a});return s?r.unshift(i):r.push(i),i}}const Nt=t=>(e,n=Ie)=>(!Ps||t==="sp")&&ai(t,(...s)=>e(...s),n),og=Nt("bm"),nh=Nt("m"),ag=Nt("bu"),cg=Nt("u"),lg=Nt("bum"),sh=Nt("um"),ug=Nt("sp"),hg=Nt("rtg"),fg=Nt("rtc");function dg(t,e=Ie){ai("ec",t,e)}function Jt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(es(),ht(c,n,8,[t.el,a,t,e]),ts())}}const pg=Symbol();function gg(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Se(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function mg(t,e,n={},s,r){if(Ye.isCE||Ye.parent&&vs(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),Ue("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ln();const o=i&&rh(i(n)),a=ph(nt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function rh(t){return t.some(e=>Lr(e)?!(e.type===Un||e.type===nt&&!rh(e.children)):!0)?t:null}const mo=t=>t?yh(t)?Ca(t)||t.proxy:mo(t.parent):null,ws=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mo(t.parent),$root:t=>mo(t.root),$emit:t=>t.emit,$options:t=>ba(t),$forceUpdate:t=>t.f||(t.f=()=>Ea(t.update)),$nextTick:t=>t.n||(t.n=zu.bind(t.proxy)),$watch:t=>ng.bind(t)}),Ui=(t,e)=>t!==he&&!t.__isScriptSetup&&ee(t,e),yg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ui(s,e))return o[e]=1,s[e];if(r!==he&&ee(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==he&&ee(n,e))return o[e]=4,n[e];yo&&(o[e]=0)}}const u=ws[e];let f,d;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==he&&ee(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ui(r,e)?(r[e]=n,!0):s!==he&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ee(t,o)||Ui(e,o)||(a=i[0])&&ee(a,o)||ee(s,o)||ee(ws,o)||ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let yo=!0;function vg(t){const e=ba(t),n=t.proxy,s=t.ctx;yo=!1,e.beforeCreate&&Fc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:b,activated:I,deactivated:O,beforeDestroy:R,beforeUnmount:B,destroyed:k,unmounted:X,render:me,renderTracked:Pe,renderTriggered:et,errorCaptured:tt,serverPrefetch:wn,expose:pt,inheritAttrs:kt,components:gt,directives:En,filters:Yt}=e;if(l&&wg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ae=o[le];W(ae)&&(s[le]=ae.bind(n))}if(r){const le=r.call(n,n);de(le)&&(t.data=Gs(le))}if(yo=!0,i)for(const le in i){const ae=i[le],rt=W(ae)?ae.bind(n,n):W(ae.get)?ae.get.bind(n,n):ut,Xt=!W(ae)&&W(ae.set)?ae.set.bind(n):ut,it=st({get:rt,set:Xt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>it.value,set:We=>it.value=We})}if(a)for(const le in a)ih(a[le],s,n,le);if(c){const le=W(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ae=>{Sr(ae,le[ae])})}u&&Fc(u,t,"c");function ve(le,ae){G(ae)?ae.forEach(rt=>le(rt.bind(n))):ae&&le(ae.bind(n))}if(ve(og,f),ve(nh,d),ve(ag,g),ve(cg,b),ve(sg,I),ve(rg,O),ve(dg,tt),ve(fg,Pe),ve(hg,et),ve(lg,B),ve(sh,X),ve(ug,wn),G(pt))if(pt.length){const le=t.exposed||(t.exposed={});pt.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:rt=>n[ae]=rt})})}else t.exposed||(t.exposed={});me&&t.render===ut&&(t.render=me),kt!=null&&(t.inheritAttrs=kt),gt&&(t.components=gt),En&&(t.directives=En)}function wg(t,e,n=ut,s=!1){G(t)&&(t=vo(t));for(const r in t){const i=t[r];let o;de(i)?"default"in i?o=St(i.from||r,i.default,!0):o=St(i.from||r):o=St(i),Ve(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Fc(t,e,n){ht(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ih(t,e,n,s){const r=s.includes(".")?Ju(n,s):()=>n[s];if(Se(t)){const i=e[t];W(i)&&Ar(r,i)}else if(W(t))Ar(r,t.bind(n));else if(de(t))if(G(t))t.forEach(i=>ih(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Ar(r,i,t)}}function ba(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Mr(c,l,o,!0)),Mr(c,e,o)),de(e)&&i.set(e,c),c}function Mr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Mr(t,i,n,!0),r&&r.forEach(o=>Mr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Eg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Eg={data:$c,props:en,emits:en,methods:en,computed:en,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:en,directives:en,watch:bg,provide:$c,inject:_g};function $c(t,e){return e?t?function(){return Ge(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function _g(t,e){return en(vo(t),vo(e))}function vo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function bg(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function Ig(t,e,n,s=!1){const r={},i={};Or(i,li,1),t.propsDefaults=Object.create(null),oh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:$p(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Tg(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=se(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(oi(t.emitsOptions,d))continue;const g=e[d];if(c)if(ee(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const b=$n(d);r[b]=wo(c,a,b,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{oh(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=Zn(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=wo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&At(t,"set","$attrs")}function oh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Cr(c))continue;const l=e[c];let u;r&&ee(r,u=$n(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=se(n),l=a||he;for(let u=0;u<i.length;u++){const f=i[u];n[f]=wo(r,c,f,l[f],t,!ee(l,f))}}return o}function wo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(jn(r),s=l[n]=c.call(null,e),un())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zn(n))&&(s=!0))}return s}function ah(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[d,g]=ah(f,e,!0);Ge(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return de(t)&&s.set(t,xn),xn;if(G(i))for(let u=0;u<i.length;u++){const f=$n(i[u]);Vc(f)&&(o[f]=he)}else if(i)for(const u in i){const f=$n(u);if(Vc(f)){const d=i[u],g=o[f]=G(d)||W(d)?{type:d}:Object.assign({},d);if(g){const b=jc(Boolean,g.type),I=jc(String,g.type);g[0]=b>-1,g[1]=I<0||b<I,(b>-1||ee(g,"default"))&&a.push(f)}}}const l=[o,a];return de(t)&&s.set(t,l),l}function Vc(t){return t[0]!=="$"}function Uc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bc(t,e){return Uc(t)===Uc(e)}function jc(t,e){return G(e)?e.findIndex(n=>Bc(n,t)):W(e)&&Bc(e,t)?0:-1}const ch=t=>t[0]==="_"||t==="$stable",Ia=t=>G(t)?t.map(vt):[vt(t)],Cg=(t,e,n)=>{if(e._n)return e;const s=_a((...r)=>Ia(e(...r)),n);return s._c=!1,s},lh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ch(r))continue;const i=t[r];if(W(i))e[r]=Cg(r,i,s);else if(i!=null){const o=Ia(i);e[r]=()=>o}}},uh=(t,e)=>{const n=Ia(e);t.slots.default=()=>n},Sg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Or(e,"_",n)):lh(e,t.slots={})}else t.slots={},e&&uh(t,e);Or(t.slots,li,1)},Ag=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(r,e),!n&&a===1&&delete r._):(i=!e.$stable,lh(e,r)),o=e}else e&&(uh(t,e),o={default:1});if(i)for(const a in r)!ch(a)&&!(a in o)&&delete r[a]};function hh(){return{app:null,config:{isNativeTag:tp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function xg(t,e){return function(s,r=null){W(s)||(s=Object.assign({},s)),r!=null&&!de(r)&&(r=null);const i=hh(),o=new Set;let a=!1;const c=i.app={_uid:Dg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Wg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const d=Ue(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,f),a=!0,c._container=l,l.__vue_app__=c,Ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Eo(t,e,n,s,r=!1){if(G(t)){t.forEach((d,g)=>Eo(d,e&&(G(e)?e[g]:e),n,s,r));return}if(vs(s)&&!r)return;const i=s.shapeFlag&4?Ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Se(l)?(u[l]=null,ee(f,l)&&(f[l]=null)):Ve(l)&&(l.value=null)),W(c))Bt(c,a,12,[o,u]);else{const d=Se(c),g=Ve(c);if(d||g){const b=()=>{if(t.f){const I=d?ee(f,c)?f[c]:u[c]:c.value;r?G(I)&&aa(I,i):G(I)?I.includes(i)||I.push(i):d?(u[c]=[i],ee(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ee(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Qe(b,n)):b()}}}const Qe=tg;function Rg(t){return Ng(t)}function Ng(t,e){const n=cp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=ut,insertStaticContent:b}=t,I=(h,p,m,y=null,w=null,S=null,x=!1,T=null,A=!!p.dynamicChildren)=>{if(h===p)return;h&&!hs(h,p)&&(y=D(h),We(h,w,S,!0),h=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:E,ref:V,shapeFlag:P}=p;switch(E){case ci:O(h,p,m,y);break;case Un:R(h,p,m,y);break;case Bi:h==null&&B(p,m,y,x);break;case nt:gt(h,p,m,y,w,S,x,T,A);break;default:P&1?me(h,p,m,y,w,S,x,T,A):P&6?En(h,p,m,y,w,S,x,T,A):(P&64||P&128)&&E.process(h,p,m,y,w,S,x,T,A,Z)}V!=null&&w&&Eo(V,h&&h.ref,S,p||h,!p)},O=(h,p,m,y)=>{if(h==null)s(p.el=a(p.children),m,y);else{const w=p.el=h.el;p.children!==h.children&&l(w,p.children)}},R=(h,p,m,y)=>{h==null?s(p.el=c(p.children||""),m,y):p.el=h.el},B=(h,p,m,y)=>{[h.el,h.anchor]=b(h.children,p,m,y,h.el,h.anchor)},k=({el:h,anchor:p},m,y)=>{let w;for(;h&&h!==p;)w=d(h),s(h,m,y),h=w;s(p,m,y)},X=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),r(h),h=m;r(p)},me=(h,p,m,y,w,S,x,T,A)=>{x=x||p.type==="svg",h==null?Pe(p,m,y,w,S,x,T,A):wn(h,p,w,S,x,T,A)},Pe=(h,p,m,y,w,S,x,T)=>{let A,E;const{type:V,props:P,shapeFlag:U,transition:H,dirs:Y}=h;if(A=h.el=o(h.type,S,P&&P.is,P),U&8?u(A,h.children):U&16&&tt(h.children,A,null,y,w,S&&V!=="foreignObject",x,T),Y&&Jt(h,null,y,"created"),et(A,h,h.scopeId,x,y),P){for(const ce in P)ce!=="value"&&!Cr(ce)&&i(A,ce,null,P[ce],S,h.children,y,w,N);"value"in P&&i(A,"value",null,P.value),(E=P.onVnodeBeforeMount)&&yt(E,y,h)}Y&&Jt(h,null,y,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&H&&!H.persisted;ue&&H.beforeEnter(A),s(A,p,m),((E=P&&P.onVnodeMounted)||ue||Y)&&Qe(()=>{E&&yt(E,y,h),ue&&H.enter(A),Y&&Jt(h,null,y,"mounted")},w)},et=(h,p,m,y,w)=>{if(m&&g(h,m),y)for(let S=0;S<y.length;S++)g(h,y[S]);if(w){let S=w.subTree;if(p===S){const x=w.vnode;et(h,x,x.scopeId,x.slotScopeIds,w.parent)}}},tt=(h,p,m,y,w,S,x,T,A=0)=>{for(let E=A;E<h.length;E++){const V=h[E]=T?Lt(h[E]):vt(h[E]);I(null,V,p,m,y,w,S,x,T)}},wn=(h,p,m,y,w,S,x)=>{const T=p.el=h.el;let{patchFlag:A,dynamicChildren:E,dirs:V}=p;A|=h.patchFlag&16;const P=h.props||he,U=p.props||he;let H;m&&Zt(m,!1),(H=U.onVnodeBeforeUpdate)&&yt(H,m,p,h),V&&Jt(p,h,m,"beforeUpdate"),m&&Zt(m,!0);const Y=w&&p.type!=="foreignObject";if(E?pt(h.dynamicChildren,E,T,m,y,Y,S):x||ae(h,p,T,null,m,y,Y,S,!1),A>0){if(A&16)kt(T,p,P,U,m,y,w);else if(A&2&&P.class!==U.class&&i(T,"class",null,U.class,w),A&4&&i(T,"style",P.style,U.style,w),A&8){const ue=p.dynamicProps;for(let ce=0;ce<ue.length;ce++){const we=ue[ce],ot=P[we],bn=U[we];(bn!==ot||we==="value")&&i(T,we,ot,bn,w,h.children,m,y,N)}}A&1&&h.children!==p.children&&u(T,p.children)}else!x&&E==null&&kt(T,p,P,U,m,y,w);((H=U.onVnodeUpdated)||V)&&Qe(()=>{H&&yt(H,m,p,h),V&&Jt(p,h,m,"updated")},y)},pt=(h,p,m,y,w,S,x)=>{for(let T=0;T<p.length;T++){const A=h[T],E=p[T],V=A.el&&(A.type===nt||!hs(A,E)||A.shapeFlag&70)?f(A.el):m;I(A,E,V,null,y,w,S,x,!0)}},kt=(h,p,m,y,w,S,x)=>{if(m!==y){if(m!==he)for(const T in m)!Cr(T)&&!(T in y)&&i(h,T,m[T],null,x,p.children,w,S,N);for(const T in y){if(Cr(T))continue;const A=y[T],E=m[T];A!==E&&T!=="value"&&i(h,T,E,A,x,p.children,w,S,N)}"value"in y&&i(h,"value",m.value,y.value)}},gt=(h,p,m,y,w,S,x,T,A)=>{const E=p.el=h?h.el:a(""),V=p.anchor=h?h.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:H}=p;H&&(T=T?T.concat(H):H),h==null?(s(E,m,y),s(V,m,y),tt(p.children,m,V,w,S,x,T,A)):P>0&&P&64&&U&&h.dynamicChildren?(pt(h.dynamicChildren,U,m,w,S,x,T),(p.key!=null||w&&p===w.subTree)&&fh(h,p,!0)):ae(h,p,m,V,w,S,x,T,A)},En=(h,p,m,y,w,S,x,T,A)=>{p.slotScopeIds=T,h==null?p.shapeFlag&512?w.ctx.activate(p,m,y,x,A):Yt(p,m,y,w,S,x,A):ls(h,p,A)},Yt=(h,p,m,y,w,S,x)=>{const T=h.component=Ug(h,y,w);if(eh(h)&&(T.ctx.renderer=Z),Bg(T),T.asyncDep){if(w&&w.registerDep(T,ve),!h.el){const A=T.subTree=Ue(Un);R(null,A,p,m)}return}ve(T,h,p,m,w,S,x)},ls=(h,p,m)=>{const y=p.component=h.component;if(Jp(h,p,m))if(y.asyncDep&&!y.asyncResolved){le(y,p,m);return}else y.next=p,Kp(y.update),y.update();else p.el=h.el,y.vnode=p},ve=(h,p,m,y,w,S,x)=>{const T=()=>{if(h.isMounted){let{next:V,bu:P,u:U,parent:H,vnode:Y}=h,ue=V,ce;Zt(h,!1),V?(V.el=Y.el,le(h,V,x)):V=Y,P&&$i(P),(ce=V.props&&V.props.onVnodeBeforeUpdate)&&yt(ce,H,V,Y),Zt(h,!0);const we=Vi(h),ot=h.subTree;h.subTree=we,I(ot,we,f(ot.el),D(ot),h,w,S),V.el=we.el,ue===null&&Zp(h,we.el),U&&Qe(U,w),(ce=V.props&&V.props.onVnodeUpdated)&&Qe(()=>yt(ce,H,V,Y),w)}else{let V;const{el:P,props:U}=p,{bm:H,m:Y,parent:ue}=h,ce=vs(p);if(Zt(h,!1),H&&$i(H),!ce&&(V=U&&U.onVnodeBeforeMount)&&yt(V,ue,p),Zt(h,!0),P&&Q){const we=()=>{h.subTree=Vi(h),Q(P,h.subTree,h,w,null)};ce?p.type.__asyncLoader().then(()=>!h.isUnmounted&&we()):we()}else{const we=h.subTree=Vi(h);I(null,we,m,y,h,w,S),p.el=we.el}if(Y&&Qe(Y,w),!ce&&(V=U&&U.onVnodeMounted)){const we=p;Qe(()=>yt(V,ue,we),w)}(p.shapeFlag&256||ue&&vs(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&Qe(h.a,w),h.isMounted=!0,p=m=y=null}},A=h.effect=new ha(T,()=>Ea(E),h.scope),E=h.update=()=>A.run();E.id=h.uid,Zt(h,!0),E()},le=(h,p,m)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,Tg(h,p.props,y,m),Ag(h,p.children,m),es(),Mc(),ts()},ae=(h,p,m,y,w,S,x,T,A=!1)=>{const E=h&&h.children,V=h?h.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:H}=p;if(U>0){if(U&128){Xt(E,P,m,y,w,S,x,T,A);return}else if(U&256){rt(E,P,m,y,w,S,x,T,A);return}}H&8?(V&16&&N(E,w,S),P!==E&&u(m,P)):V&16?H&16?Xt(E,P,m,y,w,S,x,T,A):N(E,w,S,!0):(V&8&&u(m,""),H&16&&tt(P,m,y,w,S,x,T,A))},rt=(h,p,m,y,w,S,x,T,A)=>{h=h||xn,p=p||xn;const E=h.length,V=p.length,P=Math.min(E,V);let U;for(U=0;U<P;U++){const H=p[U]=A?Lt(p[U]):vt(p[U]);I(h[U],H,m,null,w,S,x,T,A)}E>V?N(h,w,S,!0,!1,P):tt(p,m,y,w,S,x,T,A,P)},Xt=(h,p,m,y,w,S,x,T,A)=>{let E=0;const V=p.length;let P=h.length-1,U=V-1;for(;E<=P&&E<=U;){const H=h[E],Y=p[E]=A?Lt(p[E]):vt(p[E]);if(hs(H,Y))I(H,Y,m,null,w,S,x,T,A);else break;E++}for(;E<=P&&E<=U;){const H=h[P],Y=p[U]=A?Lt(p[U]):vt(p[U]);if(hs(H,Y))I(H,Y,m,null,w,S,x,T,A);else break;P--,U--}if(E>P){if(E<=U){const H=U+1,Y=H<V?p[H].el:y;for(;E<=U;)I(null,p[E]=A?Lt(p[E]):vt(p[E]),m,Y,w,S,x,T,A),E++}}else if(E>U)for(;E<=P;)We(h[E],w,S,!0),E++;else{const H=E,Y=E,ue=new Map;for(E=Y;E<=U;E++){const Je=p[E]=A?Lt(p[E]):vt(p[E]);Je.key!=null&&ue.set(Je.key,E)}let ce,we=0;const ot=U-Y+1;let bn=!1,Ic=0;const us=new Array(ot);for(E=0;E<ot;E++)us[E]=0;for(E=H;E<=P;E++){const Je=h[E];if(we>=ot){We(Je,w,S,!0);continue}let mt;if(Je.key!=null)mt=ue.get(Je.key);else for(ce=Y;ce<=U;ce++)if(us[ce-Y]===0&&hs(Je,p[ce])){mt=ce;break}mt===void 0?We(Je,w,S,!0):(us[mt-Y]=E+1,mt>=Ic?Ic=mt:bn=!0,I(Je,p[mt],m,null,w,S,x,T,A),we++)}const Tc=bn?Og(us):xn;for(ce=Tc.length-1,E=ot-1;E>=0;E--){const Je=Y+E,mt=p[Je],Cc=Je+1<V?p[Je+1].el:y;us[E]===0?I(null,mt,m,Cc,w,S,x,T,A):bn&&(ce<0||E!==Tc[ce]?it(mt,m,Cc,2):ce--)}}},it=(h,p,m,y,w=null)=>{const{el:S,type:x,transition:T,children:A,shapeFlag:E}=h;if(E&6){it(h.component.subTree,p,m,y);return}if(E&128){h.suspense.move(p,m,y);return}if(E&64){x.move(h,p,m,Z);return}if(x===nt){s(S,p,m);for(let P=0;P<A.length;P++)it(A[P],p,m,y);s(h.anchor,p,m);return}if(x===Bi){k(h,p,m);return}if(y!==2&&E&1&&T)if(y===0)T.beforeEnter(S),s(S,p,m),Qe(()=>T.enter(S),w);else{const{leave:P,delayLeave:U,afterLeave:H}=T,Y=()=>s(S,p,m),ue=()=>{P(S,()=>{Y(),H&&H()})};U?U(S,Y,ue):ue()}else s(S,p,m)},We=(h,p,m,y=!1,w=!1)=>{const{type:S,props:x,ref:T,children:A,dynamicChildren:E,shapeFlag:V,patchFlag:P,dirs:U}=h;if(T!=null&&Eo(T,null,m,h,!0),V&256){p.ctx.deactivate(h);return}const H=V&1&&U,Y=!vs(h);let ue;if(Y&&(ue=x&&x.onVnodeBeforeUnmount)&&yt(ue,p,h),V&6)v(h.component,m,y);else{if(V&128){h.suspense.unmount(m,y);return}H&&Jt(h,null,p,"beforeUnmount"),V&64?h.type.remove(h,p,m,w,Z,y):E&&(S!==nt||P>0&&P&64)?N(E,p,m,!1,!0):(S===nt&&P&384||!w&&V&16)&&N(A,p,m),y&&_n(h)}(Y&&(ue=x&&x.onVnodeUnmounted)||H)&&Qe(()=>{ue&&yt(ue,p,h),H&&Jt(h,null,p,"unmounted")},m)},_n=h=>{const{type:p,el:m,anchor:y,transition:w}=h;if(p===nt){lr(m,y);return}if(p===Bi){X(h);return}const S=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:T}=w,A=()=>x(m,S);T?T(h.el,S,A):A()}else S()},lr=(h,p)=>{let m;for(;h!==p;)m=d(h),r(h),h=m;r(p)},v=(h,p,m)=>{const{bum:y,scope:w,update:S,subTree:x,um:T}=h;y&&$i(y),w.stop(),S&&(S.active=!1,We(x,h,p,m)),T&&Qe(T,p),Qe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(h,p,m,y=!1,w=!1,S=0)=>{for(let x=S;x<h.length;x++)We(h[x],p,m,y,w)},D=h=>h.shapeFlag&6?D(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),$=(h,p,m)=>{h==null?p._vnode&&We(p._vnode,null,null,!0):I(p._vnode||null,h,p,null,null,null,m),Mc(),Gu(),p._vnode=h},Z={p:I,um:We,m:it,r:_n,mt:Yt,mc:tt,pc:ae,pbc:pt,n:D,o:t};let pe,Q;return e&&([pe,Q]=e(Z)),{render:$,hydrate:pe,createApp:xg($,pe)}}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fh(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Lt(r[i]),a.el=o.el),n||fh(o,a)),a.type===ci&&(a.el=o.el)}}function Og(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const kg=t=>t.__isTeleport,nt=Symbol(void 0),ci=Symbol(void 0),Un=Symbol(void 0),Bi=Symbol(void 0),Es=[];let lt=null;function ln(t=!1){Es.push(lt=t?null:[])}function Pg(){Es.pop(),lt=Es[Es.length-1]||null}let ks=1;function qc(t){ks+=t}function dh(t){return t.dynamicChildren=ks>0?lt||xn:null,Pg(),ks>0&&lt&&lt.push(t),t}function _s(t,e,n,s,r,i){return dh(ui(t,e,n,s,r,i,!0))}function ph(t,e,n,s,r){return dh(Ue(t,e,n,s,r,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function hs(t,e){return t.type===e.type&&t.key===e.key}const li="__vInternal",gh=({key:t})=>t??null,Dr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Ve(t)||W(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function ui(t,e=null,n=null,s=0,r=null,i=t===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gh(e),ref:e&&Dr(e),scopeId:Yu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Ta(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Se(n)?8:16),ks>0&&!o&&lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&lt.push(c),c}const Ue=Mg;function Mg(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===pg)&&(t=Un),Lr(t)){const a=Bn(t,e,!0);return n&&Ta(a,n),ks>0&&!i&&lt&&(a.shapeFlag&6?lt[lt.indexOf(t)]=a:lt.push(a)),a.patchFlag|=-2,a}if(zg(t)&&(t=t.__vccOpts),e){e=Lg(e);let{class:a,style:c}=e;a&&!Se(a)&&(e.class=ia(a)),de(c)&&($u(c)&&!G(c)&&(c=Ge({},c)),e.style=ra(c))}const o=Se(t)?1:eg(t)?128:kg(t)?64:de(t)?4:W(t)?2:0;return ui(t,e,n,s,r,o,i,!0)}function Lg(t){return t?$u(t)||li in t?Ge({},t):t:null}function Bn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Fg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gh(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Dr(e)):[r,Dr(e)]:Dr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mh(t=" ",e=0){return Ue(ci,null,t,e)}function vt(t){return t==null||typeof t=="boolean"?Ue(Un):G(t)?Ue(nt,null,t.slice()):typeof t=="object"?Lt(t):Ue(ci,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function Ta(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ta(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(li in e)?e._ctx=Ye:r===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[mh(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ia([e.class,s.class]));else if(r==="style")e.style=ra([e.style,s.style]);else if(ti(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yt(t,e,n,s=null){ht(t,e,7,[n,s])}const $g=hh();let Vg=0;function Ug(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||$g,i={uid:Vg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ah(s,r),emitsOptions:Qu(s,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qp.bind(null,i),t.ce&&t.ce(i),i}let Ie=null;const jn=t=>{Ie=t,t.scope.on()},un=()=>{Ie&&Ie.scope.off(),Ie=null};function yh(t){return t.vnode.shapeFlag&4}let Ps=!1;function Bg(t,e=!1){Ps=e;const{props:n,children:s}=t.vnode,r=yh(t);Ig(t,n,r,e),Sg(t,s);const i=r?jg(t,e):void 0;return Ps=!1,i}function jg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ma(new Proxy(t.ctx,yg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Hg(t):null;jn(t),es();const i=Bt(s,t,0,[t.props,r]);if(ts(),un(),bu(i)){if(i.then(un,un),e)return i.then(o=>{Hc(t,o,e)}).catch(o=>{ii(o,t,0)});t.asyncDep=i}else Hc(t,i,e)}else vh(t,e)}function Hc(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=ju(e)),vh(t,n)}let zc;function vh(t,e,n){const s=t.type;if(!t.render){if(!e&&zc&&!s.render){const r=s.template||ba(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ge(Ge({isCustomElement:i,delimiters:a},o),c);s.render=zc(r,l)}}t.render=s.render||ut}jn(t),es(),vg(t),ts(),un()}function qg(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function Hg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qg(t))},slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ju(ma(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ws)return ws[n](t)},has(e,n){return n in e||n in ws}}))}function zg(t){return W(t)&&"__vccOpts"in t}const st=(t,e)=>qp(t,e,Ps);function wh(t,e,n){const s=arguments.length;return s===2?de(e)&&!G(e)?Lr(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Lr(n)&&(n=[n]),Ue(t,e,n))}const Kg=Symbol(""),Gg=()=>St(Kg),Wg="3.2.47",Qg="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,Kc=sn&&sn.createElement("template"),Yg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?sn.createElementNS(Qg,t):sn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Kc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Kc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Xg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Jg(t,e,n){const s=t.style,r=Se(n);if(n&&!r){if(e&&!Se(e))for(const i in e)n[i]==null&&_o(s,i,"");for(const i in n)_o(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Gc=/\s*!important$/;function _o(t,e,n){if(G(n))n.forEach(s=>_o(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Zg(t,e);Gc.test(n)?t.setProperty(Zn(s),n.replace(Gc,""),"important"):t[s]=n}}const Wc=["Webkit","Moz","ms"],ji={};function Zg(t,e){const n=ji[e];if(n)return n;let s=$n(e);if(s!=="filter"&&s in t)return ji[e]=s;s=Cu(s);for(let r=0;r<Wc.length;r++){const i=Wc[r]+s;if(i in t)return ji[e]=i}return e}const Qc="http://www.w3.org/1999/xlink";function em(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qc,e.slice(6,e.length)):t.setAttributeNS(Qc,e,n);else{const i=ep(e);n==null||i&&!wu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function nm(t,e,n,s){t.addEventListener(e,n,s)}function sm(t,e,n,s){t.removeEventListener(e,n,s)}function rm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=im(e);if(s){const l=i[e]=cm(s,r);nm(t,a,l,c)}else o&&(sm(t,a,o,c),i[e]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function im(t){let e;if(Yc.test(t)){e={};let s;for(;s=t.match(Yc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let qi=0;const om=Promise.resolve(),am=()=>qi||(om.then(()=>qi=0),qi=Date.now());function cm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(lm(s,n.value),e,5,[s])};return n.value=t,n.attached=am(),n}function lm(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Xc=/^on[a-z]/,um=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Xg(t,s,r):e==="style"?Jg(t,n,s):ti(e)?oa(e)||rm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hm(t,e,s,r))?tm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),em(t,e,s,r))};function hm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Xc.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xc.test(e)&&Se(n)?!1:e in t}const fm=Ge({patchProp:um},Yg);let Jc;function dm(){return Jc||(Jc=Rg(fm))}const pm=(...t)=>{const e=dm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=gm(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gm(t){return Se(t)?document.querySelector(t):t}var mm=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ym=Symbol();var Zc;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zc||(Zc={}));function vm(){const t=lp(!0),e=t.run(()=>va({}));let n=[],s=[];const r=ma({install(i){r._a=i,i.provide(ym,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!mm?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof window<"u";function wm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Hi(t,e){const n={};for(const s in e){const r=e[s];n[s]=ft(r)?r.map(t):t(r)}return n}const bs=()=>{},ft=Array.isArray,Em=/\/$/,_m=t=>t.replace(Em,"");function zi(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Cm(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function bm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function el(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Im(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&qn(e.matched[s],n.matched[r])&&Eh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Eh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tm(t[n],e[n]))return!1;return!0}function Tm(t,e){return ft(t)?tl(t,e):ft(e)?tl(e,t):t===e}function tl(t,e){return ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Cm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var Is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Is||(Is={}));function Sm(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_m(t)}const Am=/^[^#]+#/;function Dm(t,e){return t.replace(Am,"#")+e}function xm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const hi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xm(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nl(t,e){return(history.state?history.state.position-e:-1)+t}const bo=new Map;function Nm(t,e){bo.set(t,e)}function Om(t){const e=bo.get(t);return bo.delete(t),e}let km=()=>location.protocol+"//"+location.host;function _h(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),el(c,"")}return el(n,t)+s+r}function Pm(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=_h(t,location),b=n.value,I=e.value;let O=0;if(d){if(n.value=g,e.value=d,o&&o===b){o=null;return}O=I?d.position-I.position:0}else s(g);r.forEach(R=>{R(n.value,b,{delta:O,type:Ms.pop,direction:O?O>0?Is.forward:Is.back:Is.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const b=r.indexOf(d);b>-1&&r.splice(b,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ie({},d.state,{scroll:hi()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function sl(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?hi():null}}function Mm(t){const{history:e,location:n}=window,s={value:_h(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:km()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ie({},e.state,sl(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ie({},r.value,e.state,{forward:c,scroll:hi()});i(u.current,u,!0);const f=ie({},sl(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Lm(t){t=Sm(t);const e=Mm(t),n=Pm(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ie({location:"",base:t,go:s,createHref:Dm.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Fm(t){return typeof t=="string"||t&&typeof t=="object"}function bh(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ih=Symbol("");var rl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rl||(rl={}));function Hn(t,e){return ie(new Error,{type:t,[Ih]:!0},e)}function It(t,e){return t instanceof Error&&Ih in t&&(e==null||!!(t.type&e))}const il="[^/]+?",$m={sensitive:!1,strict:!1,start:!0,end:!0},Vm=/[.+*?^${}()[\]/\\]/g;function Um(t,e){const n=ie({},$m,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Vm,"\\$&"),g+=40;else if(d.type===1){const{value:b,repeatable:I,optional:O,regexp:R}=d;i.push({name:b,repeatable:I,optional:O});const B=R||il;if(B!==il){g+=10;try{new RegExp(`(${B})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${b}" (${B}): `+X.message)}}let k=I?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;f||(k=O&&l.length<2?`(?:/${k})`:"/"+k),O&&(k+="?"),r+=k,g+=20,O&&(g+=-8),I&&(g+=-20),B===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",b=i[d-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:I,optional:O}=g,R=b in l?l[b]:"";if(ft(R)&&!I)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const B=ft(R)?R.join("/"):R;if(!B)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=B}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Bm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function jm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Bm(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ol(s))return 1;if(ol(r))return-1}return r.length-s.length}function ol(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qm={type:0,value:""},Hm=/[a-zA-Z0-9_]/;function zm(t){if(!t)return[[]];if(t==="/")return[[qm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Hm.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function Km(t,e,n){const s=Um(zm(t.path),n),r=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Gm(t,e){const n=[],s=new Map;e=ll({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,d){const g=!d,b=Wm(u);b.aliasOf=d&&d.record;const I=ll(e,u),O=[b];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of k)O.push(ie({},b,{components:d?d.record.components:b.components,path:X,aliasOf:d?d.record:b}))}let R,B;for(const k of O){const{path:X}=k;if(f&&X[0]!=="/"){const me=f.record.path,Pe=me[me.length-1]==="/"?"":"/";k.path=f.record.path+(X&&Pe+X)}if(R=Km(k,f,I),d?d.alias.push(R):(B=B||R,B!==R&&B.alias.push(R),g&&u.name&&!cl(R)&&o(u.name)),b.children){const me=b.children;for(let Pe=0;Pe<me.length;Pe++)i(me[Pe],R,d&&d.children[Pe])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return B?()=>{o(B)}:bs}function o(u){if(bh(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&jm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Th(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!cl(u)&&s.set(u.record.name,u)}function l(u,f){let d,g={},b,I;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hn(1,{location:u});I=d.record.name,g=ie(al(f.params,d.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&al(u.params,d.keys.map(B=>B.name))),b=d.stringify(g)}else if("path"in u)b=u.path,d=n.find(B=>B.re.test(b)),d&&(g=d.parse(b),I=d.record.name);else{if(d=f.name?s.get(f.name):n.find(B=>B.re.test(f.path)),!d)throw Hn(1,{location:u,currentLocation:f});I=d.record.name,g=ie({},f.params,u.params),b=d.stringify(g)}const O=[];let R=d;for(;R;)O.unshift(R.record),R=R.parent;return{name:I,path:b,params:g,matched:O,meta:Ym(O)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function al(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Wm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Qm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function cl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ym(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function ll(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Th(t,e){return e.children.some(n=>n===t||Th(t,n))}const Ch=/#/g,Xm=/&/g,Jm=/\//g,Zm=/=/g,ey=/\?/g,Sh=/\+/g,ty=/%5B/g,ny=/%5D/g,Ah=/%5E/g,sy=/%60/g,Dh=/%7B/g,ry=/%7C/g,xh=/%7D/g,iy=/%20/g;function Sa(t){return encodeURI(""+t).replace(ry,"|").replace(ty,"[").replace(ny,"]")}function oy(t){return Sa(t).replace(Dh,"{").replace(xh,"}").replace(Ah,"^")}function Io(t){return Sa(t).replace(Sh,"%2B").replace(iy,"+").replace(Ch,"%23").replace(Xm,"%26").replace(sy,"`").replace(Dh,"{").replace(xh,"}").replace(Ah,"^")}function ay(t){return Io(t).replace(Zm,"%3D")}function cy(t){return Sa(t).replace(Ch,"%23").replace(ey,"%3F")}function ly(t){return t==null?"":cy(t).replace(Jm,"%2F")}function Fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uy(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Sh," "),o=i.indexOf("="),a=Fr(o<0?i:i.slice(0,o)),c=o<0?null:Fr(i.slice(o+1));if(a in e){let l=e[a];ft(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ul(t){let e="";for(let n in t){const s=t[n];if(n=ay(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(s)?s.map(i=>i&&Io(i)):[s&&Io(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hy(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ft(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const fy=Symbol(""),hl=Symbol(""),Aa=Symbol(""),Rh=Symbol(""),To=Symbol("");function fs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ft(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Hn(4,{from:n,to:e})):f instanceof Error?a(f):Fm(f)?a(Hn(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Ki(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dy(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Ft(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wm(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ft(d,n,s,i,o)()}))}}return r}function dy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fl(t){const e=St(Aa),n=St(Rh),s=st(()=>e.resolve(Ut(t.to))),r=st(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(qn.bind(null,u));if(d>-1)return d;const g=dl(c[l-2]);return l>1&&dl(u)===g&&f[f.length-1].path!==g?f.findIndex(qn.bind(null,c[l-2])):d}),i=st(()=>r.value>-1&&my(n.params,s.value.params)),o=st(()=>r.value>-1&&r.value===n.matched.length-1&&Eh(n.params,s.value.params));function a(c={}){return gy(c)?e[Ut(t.replace)?"replace":"push"](Ut(t.to)).catch(bs):Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const py=Zu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fl,setup(t,{slots:e}){const n=Gs(fl(t)),{options:s}=St(Aa),r=st(()=>({[pl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[pl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Nh=py;function gy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function my(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ft(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function dl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pl=(t,e,n)=>t??e??n,yy=Zu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(To),r=st(()=>t.route||s.value),i=St(hl,0),o=st(()=>{let l=Ut(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=st(()=>r.value.matched[o.value]);Sr(hl,st(()=>o.value+1)),Sr(fy,a),Sr(To,r);const c=va();return Ar(()=>[c.value,a.value,t.name],([l,u,f],[d,g,b])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!qn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return gl(n.default,{Component:d,route:l});const g=f.props[u],b=g?g===!0?l.params:typeof g=="function"?g(l):g:null,O=wh(d,ie({},b,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return gl(n.default,{Component:O,route:l})||O}}});function gl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Oh=yy;function vy(t){const e=Gm(t.routes,t),n=t.parseQuery||uy,s=t.stringifyQuery||ul,r=t.history,i=fs(),o=fs(),a=fs(),c=Vp(Mt);let l=Mt;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hi.bind(null,v=>""+v),f=Hi.bind(null,ly),d=Hi.bind(null,Fr);function g(v,N){let D,$;return bh(v)?(D=e.getRecordMatcher(v),$=N):$=v,e.addRoute($,D)}function b(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(v=>v.record)}function O(v){return!!e.getRecordMatcher(v)}function R(v,N){if(N=ie({},N||c.value),typeof v=="string"){const h=zi(n,v,N.path),p=e.resolve({path:h.path},N),m=r.createHref(h.fullPath);return ie(h,p,{params:d(p.params),hash:Fr(h.hash),redirectedFrom:void 0,href:m})}let D;if("path"in v)D=ie({},v,{path:zi(n,v.path,N.path).path});else{const h=ie({},v.params);for(const p in h)h[p]==null&&delete h[p];D=ie({},v,{params:f(v.params)}),N.params=f(N.params)}const $=e.resolve(D,N),Z=v.hash||"";$.params=u(d($.params));const pe=bm(s,ie({},v,{hash:oy(Z),path:$.path})),Q=r.createHref(pe);return ie({fullPath:pe,hash:Z,query:s===ul?hy(v.query):v.query||{}},$,{redirectedFrom:void 0,href:Q})}function B(v){return typeof v=="string"?zi(n,v,c.value.path):ie({},v)}function k(v,N){if(l!==v)return Hn(8,{from:N,to:v})}function X(v){return et(v)}function me(v){return X(ie(B(v),{replace:!0}))}function Pe(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let $=typeof D=="function"?D(v):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=B($):{path:$},$.params={}),ie({query:v.query,hash:v.hash,params:"path"in $?{}:v.params},$)}}function et(v,N){const D=l=R(v),$=c.value,Z=v.state,pe=v.force,Q=v.replace===!0,h=Pe(D);if(h)return et(ie(B(h),{state:typeof h=="object"?ie({},Z,h.state):Z,force:pe,replace:Q}),N||D);const p=D;p.redirectedFrom=N;let m;return!pe&&Im(s,$,D)&&(m=Hn(16,{to:p,from:$}),Xt($,$,!0,!1)),(m?Promise.resolve(m):wn(p,$)).catch(y=>It(y)?It(y,2)?y:rt(y):le(y,p,$)).then(y=>{if(y){if(It(y,2))return et(ie({replace:Q},B(y.to),{state:typeof y.to=="object"?ie({},Z,y.to.state):Z,force:pe}),N||p)}else y=kt(p,$,!0,Q,Z);return pt(p,$,y),y})}function tt(v,N){const D=k(v,N);return D?Promise.reject(D):Promise.resolve()}function wn(v,N){let D;const[$,Z,pe]=wy(v,N);D=Ki($.reverse(),"beforeRouteLeave",v,N);for(const h of $)h.leaveGuards.forEach(p=>{D.push(Ft(p,v,N))});const Q=tt.bind(null,v,N);return D.push(Q),In(D).then(()=>{D=[];for(const h of i.list())D.push(Ft(h,v,N));return D.push(Q),In(D)}).then(()=>{D=Ki(Z,"beforeRouteUpdate",v,N);for(const h of Z)h.updateGuards.forEach(p=>{D.push(Ft(p,v,N))});return D.push(Q),In(D)}).then(()=>{D=[];for(const h of v.matched)if(h.beforeEnter&&!N.matched.includes(h))if(ft(h.beforeEnter))for(const p of h.beforeEnter)D.push(Ft(p,v,N));else D.push(Ft(h.beforeEnter,v,N));return D.push(Q),In(D)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),D=Ki(pe,"beforeRouteEnter",v,N),D.push(Q),In(D))).then(()=>{D=[];for(const h of o.list())D.push(Ft(h,v,N));return D.push(Q),In(D)}).catch(h=>It(h,8)?h:Promise.reject(h))}function pt(v,N,D){for(const $ of a.list())$(v,N,D)}function kt(v,N,D,$,Z){const pe=k(v,N);if(pe)return pe;const Q=N===Mt,h=Tn?history.state:{};D&&($||Q?r.replace(v.fullPath,ie({scroll:Q&&h&&h.scroll},Z)):r.push(v.fullPath,Z)),c.value=v,Xt(v,N,D,Q),rt()}let gt;function En(){gt||(gt=r.listen((v,N,D)=>{if(!lr.listening)return;const $=R(v),Z=Pe($);if(Z){et(ie(Z,{replace:!0}),$).catch(bs);return}l=$;const pe=c.value;Tn&&Nm(nl(pe.fullPath,D.delta),hi()),wn($,pe).catch(Q=>It(Q,12)?Q:It(Q,2)?(et(Q.to,$).then(h=>{It(h,20)&&!D.delta&&D.type===Ms.pop&&r.go(-1,!1)}).catch(bs),Promise.reject()):(D.delta&&r.go(-D.delta,!1),le(Q,$,pe))).then(Q=>{Q=Q||kt($,pe,!1),Q&&(D.delta&&!It(Q,8)?r.go(-D.delta,!1):D.type===Ms.pop&&It(Q,20)&&r.go(-1,!1)),pt($,pe,Q)}).catch(bs)}))}let Yt=fs(),ls=fs(),ve;function le(v,N,D){rt(v);const $=ls.list();return $.length?$.forEach(Z=>Z(v,N,D)):console.error(v),Promise.reject(v)}function ae(){return ve&&c.value!==Mt?Promise.resolve():new Promise((v,N)=>{Yt.add([v,N])})}function rt(v){return ve||(ve=!v,En(),Yt.list().forEach(([N,D])=>v?D(v):N()),Yt.reset()),v}function Xt(v,N,D,$){const{scrollBehavior:Z}=t;if(!Tn||!Z)return Promise.resolve();const pe=!D&&Om(nl(v.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return zu().then(()=>Z(v,N,pe)).then(Q=>Q&&Rm(Q)).catch(Q=>le(Q,v,N))}const it=v=>r.go(v);let We;const _n=new Set,lr={currentRoute:c,listening:!0,addRoute:g,removeRoute:b,hasRoute:O,getRoutes:I,resolve:R,options:t,push:X,replace:me,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ls.add,isReady:ae,install(v){const N=this;v.component("RouterLink",Nh),v.component("RouterView",Oh),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(c)}),Tn&&!We&&c.value===Mt&&(We=!0,X(r.location).catch(Z=>{}));const D={};for(const Z in Mt)D[Z]=st(()=>c.value[Z]);v.provide(Aa,N),v.provide(Rh,Gs(D)),v.provide(To,c);const $=v.unmount;_n.add(v),v.unmount=function(){_n.delete(v),_n.size<1&&(l=Mt,gt&&gt(),gt=null,c.value=Mt,We=!1,ve=!1),$()}}};return lr}function In(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wy(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>qn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>qn(l,c))||r.push(c))}return[n,s,r]}const kh=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Ey={},_y={class:"main-header"};function by(t,e){return ln(),_s("nav",_y)}const Iy=kh(Ey,[["render",by],["__scopeId","data-v-00323146"]]);const Ty={class:"wrapper"},Cy={__name:"MainLayout",setup(t){return(e,n)=>(ln(),_s("div",Ty,[Ue(Iy),mg(e.$slots,"default",{},void 0,!0)]))}},Sy=kh(Cy,[["__scopeId","data-v-8007c290"]]),Ay={__name:"App",setup(t){return(e,n)=>(ln(),ph(Sy,null,{default:_a(()=>[Ue(Ut(Oh))]),_:1}))}},Dy="modulepreload",xy=function(t){return"/KinoCmsAdminLTE/"+t},ml={},Ry=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=xy(i),i in ml)return;ml[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Dy,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 */const Ph=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ny=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ny(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new Oy;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const b=l<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(t){const e=Ph(t);return Mh.encodeByteArray(e,!0)},$r=function(t){return ky(t).replace(/\./g,"")},Py=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function My(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ly=()=>My().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$y=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Py(t[1]);return e&&JSON.parse(e)},Lh=()=>{try{return Ly()||Fy()||$y()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vy=t=>{var e,n;return(n=(e=Lh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Uy=t=>{const e=Vy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},By=()=>{var t;return(t=Lh())===null||t===void 0?void 0:t.config};/**
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
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$r(JSON.stringify(n)),$r(JSON.stringify(o)),a].join(".")}function Hy(){try{return typeof indexedDB=="object"}catch{return!1}}function zy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ky="FirebaseError";class ns extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ky,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fh.prototype.create)}}class Fh{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ns(r,a,s)}}function Gy(t,e){return t.replace(Wy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Wy=/\{\$([^}]+)}/g;function Co(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yl(i)&&yl(o)){if(!Co(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
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
 */function Vr(t){return t&&t._delegate?t._delegate:t}class Ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Qy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xy(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(t){return t===tn?void 0:t}function Xy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Zy={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ev=re.INFO,tv={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},nv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=tv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=ev,this._logHandler=nv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const sv=(t,e)=>e.some(n=>t instanceof n);let vl,wl;function rv(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iv(){return wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,So=new WeakMap,Uh=new WeakMap,Gi=new WeakMap,Da=new WeakMap;function ov(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vh.set(n,t)}).catch(()=>{}),Da.set(e,t),e}function av(t){if(So.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});So.set(t,e)}let Ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return So.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cv(t){Ao=t(Ao)}function lv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wi(this),e,...n);return Uh.set(s,e.sort?e.sort():[e]),jt(s)}:iv().includes(t)?function(...e){return t.apply(Wi(this),e),jt(Vh.get(this))}:function(...e){return jt(t.apply(Wi(this),e))}}function uv(t){return typeof t=="function"?lv(t):(t instanceof IDBTransaction&&av(t),sv(t,rv())?new Proxy(t,Ao):t)}function jt(t){if(t instanceof IDBRequest)return ov(t);if(Gi.has(t))return Gi.get(t);const e=uv(t);return e!==t&&(Gi.set(t,e),Da.set(e,t)),e}const Wi=t=>Da.get(t);function hv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=jt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const fv=["get","getKey","getAll","getAllKeys","count"],dv=["put","add","delete","clear"],Qi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=dv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||fv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Qi.set(e,i),i}cv(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class pv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",_l="0.9.8";/**
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
 */const gn=new $h("@firebase/app"),mv="@firebase/app-compat",yv="@firebase/analytics-compat",vv="@firebase/analytics",wv="@firebase/app-check-compat",Ev="@firebase/app-check",_v="@firebase/auth",bv="@firebase/auth-compat",Iv="@firebase/database",Tv="@firebase/database-compat",Cv="@firebase/functions",Sv="@firebase/functions-compat",Av="@firebase/installations",Dv="@firebase/installations-compat",xv="@firebase/messaging",Rv="@firebase/messaging-compat",Nv="@firebase/performance",Ov="@firebase/performance-compat",kv="@firebase/remote-config",Pv="@firebase/remote-config-compat",Mv="@firebase/storage",Lv="@firebase/storage-compat",Fv="@firebase/firestore",$v="@firebase/firestore-compat",Vv="firebase",Uv="9.20.0";/**
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
 */const xo="[DEFAULT]",Bv={[Do]:"fire-core",[mv]:"fire-core-compat",[vv]:"fire-analytics",[yv]:"fire-analytics-compat",[Ev]:"fire-app-check",[wv]:"fire-app-check-compat",[_v]:"fire-auth",[bv]:"fire-auth-compat",[Iv]:"fire-rtdb",[Tv]:"fire-rtdb-compat",[Cv]:"fire-fn",[Sv]:"fire-fn-compat",[Av]:"fire-iid",[Dv]:"fire-iid-compat",[xv]:"fire-fcm",[Rv]:"fire-fcm-compat",[Nv]:"fire-perf",[Ov]:"fire-perf-compat",[kv]:"fire-rc",[Pv]:"fire-rc-compat",[Mv]:"fire-gcs",[Lv]:"fire-gcs-compat",[Fv]:"fire-fst",[$v]:"fire-fst-compat","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
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
 */const Ur=new Map,Ro=new Map;function jv(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Ro.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,t);for(const n of Ur.values())jv(n,t);return!0}function qv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new Fh("app","Firebase",Hv);/**
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
 */class zv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kv=Uv;function Bh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw qt.create("bad-app-name",{appName:String(r)});if(n||(n=By()),!n)throw qt.create("no-options");const i=Ur.get(r);if(i){if(Co(n,i.options)&&Co(s,i.config))return i;throw qt.create("duplicate-app",{appName:r})}const o=new Jy(r);for(const c of Ro.values())o.addComponent(c);const a=new zv(n,s,o);return Ur.set(r,a),a}function Gv(t=xo){const e=Ur.get(t);if(!e&&t===xo)return Bh();if(!e)throw qt.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let r=(s=Bv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(a.join(" "));return}Br(new Ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Wv="firebase-heartbeat-database",Qv=1,Fs="firebase-heartbeat-store";let Yi=null;function jh(){return Yi||(Yi=hv(Wv,Qv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fs)}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Yi}async function Yv(t){try{return(await jh()).transaction(Fs).objectStore(Fs).get(qh(t))}catch(e){if(e instanceof ns)gn.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function bl(t,e){try{const s=(await jh()).transaction(Fs,"readwrite");return await s.objectStore(Fs).put(e,qh(t)),s.done}catch(n){if(n instanceof ns)gn.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(s.message)}}}function qh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xv=1024,Jv=30*24*60*60*1e3;class Zv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Jv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:n,unsentEntries:s}=ew(this._heartbeatsCache.heartbeats),r=$r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Il(){return new Date().toISOString().substring(0,10)}function ew(t,e=Xv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Tl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hy()?zy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nw(t){Br(new Ls("platform-logger",e=>new pv(e),"PRIVATE")),Br(new Ls("heartbeat",e=>new Zv(e),"PRIVATE")),kn(Do,_l,t),kn(Do,_l,"esm2017"),kn("fire-js","")}nw("");var sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,xa=xa||{},q=sw||self;function jr(){}function fi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rw(t){return Object.prototype.hasOwnProperty.call(t,Xi)&&t[Xi]||(t[Xi]=++iw)}var Xi="closure_uid_"+(1e9*Math.random()>>>0),iw=0;function ow(t,e,n){return t.call.apply(t.bind,arguments)}function aw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=ow:Be=aw,Be.apply(null,arguments)}function mr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Wt(){this.s=this.s,this.o=this.o}var cw=0;Wt.prototype.s=!1;Wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cw!=0)&&rw(this)};Wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ra(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Cl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(fi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var lw=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",jr,e),q.removeEventListener("test",jr,e)}catch{}return t}();function qr(t){return/^[\s\xa0]*$/.test(t)}var Sl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ji(t,e){return t<e?-1:t>e?1:0}function di(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Et(t){return di().indexOf(t)!=-1}function Na(t){return Na[" "](t),t}Na[" "]=jr;function uw(t){var e=dw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hw=Et("Opera"),zn=Et("Trident")||Et("MSIE"),zh=Et("Edge"),No=zh||zn,Kh=Et("Gecko")&&!(di().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),fw=di().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function Gh(){var t=q.document;return t?t.documentMode:void 0}var Hr;e:{var Zi="",eo=function(){var t=di();if(Kh)return/rv:([^\);]+)(\)|;)/.exec(t);if(zh)return/Edge\/([\d\.]+)/.exec(t);if(zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fw)return/WebKit\/(\S+)/.exec(t);if(hw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(eo&&(Zi=eo?eo[1]:""),zn){var to=Gh();if(to!=null&&to>parseFloat(Zi)){Hr=String(to);break e}}Hr=Zi}var dw={};function pw(){return uw(function(){let t=0;const e=Sl(String(Hr)).split("."),n=Sl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ji(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ji(r[2].length==0,i[2].length==0)||Ji(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Oo;if(q.document&&zn){var Al=Gh();Oo=Al||parseInt(Hr,10)||void 0}else Oo=void 0;var gw=Oo;function $s(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kh){e:{try{Na(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.X.h.call(this)}}ke($s,je);var mw={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),yw=0;function vw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++yw,this.ba=this.ea=!1}function pi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Oa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wh(t){const e={};for(const n in t)e[n]=t[n];return e}const Dl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Dl.length;i++)n=Dl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function gi(t){this.src=t,this.g={},this.h=0}gi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Po(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ko(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Hh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Po(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ka="closure_lm_"+(1e6*Math.random()|0),no={};function Yh(t,e,n,s,r){if(s&&s.once)return Jh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yh(t,e[i],n,s,r);return null}return n=La(n),t&&t[Qs]?t.N(e,n,Ws(s)?!!s.capture:!!s,r):Xh(t,e,n,!1,s,r)}function Xh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ws(r)?!!r.capture:!!r,a=Ma(t);if(a||(t[ka]=a=new gi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ww(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ef(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ww(){function t(n){return e.call(t.src,t.listener,n)}const e=Ew;return t}function Jh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jh(t,e[i],n,s,r);return null}return n=La(n),t&&t[Qs]?t.O(e,n,Ws(s)?!!s.capture:!!s,r):Xh(t,e,n,!0,s,r)}function Zh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zh(t,e[i],n,s,r);else s=Ws(s)?!!s.capture:!!s,n=La(n),t&&t[Qs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Po(i,n,s,r),-1<n&&(pi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ma(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Po(e,n,s,r)),(n=-1<t?e[t]:null)&&Pa(n))}function Pa(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Qs])ko(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ef(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ma(e))?(ko(n,t),n.h==0&&(n.src=null,e[ka]=null)):pi(t)}}}function ef(t){return t in no?no[t]:no[t]="on"+t}function Ew(t,e){if(t.ba)t=!0;else{e=new $s(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Pa(t),t=n.call(s,e)}return t}function Ma(t){return t=t[ka],t instanceof gi?t:null}var so="__closure_events_fn_"+(1e9*Math.random()>>>0);function La(t){return typeof t=="function"?t:(t[so]||(t[so]=function(e){return t.handleEvent(e)}),t[so])}function xe(){Wt.call(this),this.i=new gi(this),this.P=this,this.I=null}ke(xe,Wt);xe.prototype[Qs]=!0;xe.prototype.removeEventListener=function(t,e,n,s){Zh(this,t,e,n,s)};function Ne(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var r=e;e=new je(s,t),Qh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=yr(o,s,!0,e)&&r}if(o=e.g=t,r=yr(o,s,!0,e)&&r,r=yr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=yr(o,s,!1,e)&&r}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pi(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function yr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ko(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Fa=q.JSON.stringify;function _w(){var t=sf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bw{constructor(){this.h=this.g=null}add(e,n){const s=tf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Iw,t=>t.reset());class Iw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Tw(t){q.setTimeout(()=>{throw t},0)}function nf(t,e){Mo||Cw(),Lo||(Mo(),Lo=!0),sf.add(t,e)}var Mo;function Cw(){var t=q.Promise.resolve(void 0);Mo=function(){t.then(Sw)}}var Lo=!1,sf=new bw;function Sw(){for(var t;t=_w();){try{t.h.call(t.g)}catch(n){Tw(n)}var e=tf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lo=!1}function mi(t,e){xe.call(this),this.h=t||1,this.g=e||q,this.j=Be(this.lb,this),this.l=Date.now()}ke(mi,xe);M=mi.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ne(this,"tick"),this.ca&&($a(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $a(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){mi.X.M.call(this),$a(this),delete this.g};function Va(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function rf(t){t.g=Va(()=>{t.g=null,t.i&&(t.i=!1,rf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Aw extends Wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rf(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(t){Wt.call(this),this.h=t,this.g={}}ke(Vs,Wt);var xl=[];function of(t,e,n,s){Array.isArray(n)||(n&&(xl[0]=n.toString()),n=xl);for(var r=0;r<n.length;r++){var i=Yh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function af(t){Oa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pa(e)},t),t.g={}}Vs.prototype.M=function(){Vs.X.M.call(this),af(this)};Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yi(){this.g=!0}yi.prototype.Aa=function(){this.g=!1};function Dw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function xw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Nw(t,n)+(s?" "+s:"")})}function Rw(t,e){t.info(function(){return"TIMEOUT: "+e})}yi.prototype.info=function(){};function Nw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Fa(n)}catch{return e}}var vn={},Rl=null;function vi(){return Rl=Rl||new xe}vn.Pa="serverreachability";function cf(t){je.call(this,vn.Pa,t)}ke(cf,je);function Us(t){const e=vi();Ne(e,new cf(e))}vn.STAT_EVENT="statevent";function lf(t,e){je.call(this,vn.STAT_EVENT,t),this.stat=e}ke(lf,je);function Ke(t){const e=vi();Ne(e,new lf(e,t))}vn.Qa="timingevent";function uf(t,e){je.call(this,vn.Qa,t),this.size=e}ke(uf,je);function Ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var wi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ua(){}Ua.prototype.h=null;function Nl(t){return t.h||(t.h=t.i())}function ff(){}var Xs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ba(){je.call(this,"d")}ke(Ba,je);function ja(){je.call(this,"c")}ke(ja,je);var Fo;function Ei(){}ke(Ei,Ua);Ei.prototype.g=function(){return new XMLHttpRequest};Ei.prototype.i=function(){return{}};Fo=new Ei;function Js(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Vs(this),this.O=Ow,t=No?125:void 0,this.T=new mi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var Ow=45e3,$o={},zr={};M=Js.prototype;M.setTimeout=function(t){this.O=t};function Vo(t,e,n){t.K=1,t.v=bi(Dt(e)),t.s=n,t.P=!0,pf(t,null)}function pf(t,e){t.F=Date.now(),Zs(t),t.A=Dt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),bf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new df,t.g=qf(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Aw(Be(t.La,t,t.g),t.N)),of(t.S,t.g,"readystatechange",t.ib),e=t.H?Wh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Us(),Dw(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Ct(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const u=Ct(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||No||this.g&&(this.h.h||this.g.fa()||Ml(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Us(3):Us(2)),_i(this);var n=this.g.aa();this.Y=n;t:if(gf(this)){var s=Ml(this.g);t="";var r=s.length,i=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Ts(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,xw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qr(a)){var l=a;break t}}l=null}if(n=l)Dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Uo(this,n);else{this.i=!1,this.o=3,Ke(12),rn(this),Ts(this);break e}}this.P?(mf(this,u,o),No&&this.i&&u==3&&(of(this.S,this.T,"tick",this.hb),this.T.start())):(Dn(this.j,this.m,o,null),Uo(this,o)),u==4&&rn(this),this.i&&!this.I&&(u==4?Vf(this.l,this):(this.i=!1,Zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),rn(this),Ts(this)}}}catch{}finally{}};function gf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function mf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=kw(t,n),r==zr){e==4&&(t.o=4,Ke(14),s=!1),Dn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==$o){t.o=4,Ke(15),Dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Dn(t.j,t.m,r,null),Uo(t,r);gf(t)&&r!=zr&&r!=$o&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qa(e),e.K=!0,Ke(11))):(Dn(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),Ts(t))}M.hb=function(){if(this.g){var t=Ct(this.g),e=this.g.fa();this.C<e.length&&(_i(this),mf(this,t,e),this.i&&t!=4&&Zs(this))}};function kw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?zr:(n=Number(e.substring(n,s)),isNaN(n)?$o:(s+=1,s+n>e.length?zr:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,rn(this)};function Zs(t){t.V=Date.now()+t.O,yf(t,t.O)}function yf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ys(Be(t.gb,t),e)}function _i(t){t.B&&(q.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Rw(this.j,this.A),this.K!=2&&(Us(),Ke(17)),rn(this),this.o=2,Ts(this)):yf(this,this.V-t)};function Ts(t){t.l.G==0||t.I||Vf(t.l,t)}function rn(t){_i(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$a(t.T),af(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Uo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bo(n.h,t))){if(!t.J&&Bo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wr(n),Ci(n);else break e;Wa(n),Ke(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ys(Be(n.cb,n),6e3));if(1>=Cf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else on(n,11)}else if((t.J||n.g==t)&&Wr(n),!qr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const b=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=s.h;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qa(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,fe(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=jf(s,s.H?s.ka:null,s.V),o.J){Sf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(_i(a),Zs(a)),s.g=o}else Ff(s);0<n.i.length&&Si(n)}else l[0]!="stop"&&l[0]!="close"||on(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?on(n,7):Ga(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Us(4)}catch{}}function Pw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Mw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mw(t),s=Pw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hn){this.h=e!==void 0?e:t.h,Kr(this,t.j),this.s=t.s,this.g=t.g,Gr(this,t.m),this.l=t.l,e=t.i;var n=new Bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ol(this,n),this.o=t.o}else t&&(n=String(t).match(wf))?(this.h=!!e,Kr(this,n[1]||"",!0),this.s=gs(n[2]||""),this.g=gs(n[3]||"",!0),Gr(this,n[4]),this.l=gs(n[5]||"",!0),Ol(this,n[6]||"",!0),this.o=gs(n[7]||"")):(this.h=!!e,this.i=new Bs(null,this.h))}hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ms(e,kl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ms(e,kl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ms(n,n.charAt(0)=="/"?Vw:$w,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ms(n,Bw)),t.join("")};function Dt(t){return new hn(t)}function Kr(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ol(t,e,n){e instanceof Bs?(t.i=e,jw(t.i,t.h)):(n||(e=ms(e,Uw)),t.i=new Bs(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function bi(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kl=/[#\/\?@]/g,$w=/[#\?:]/g,Vw=/[#\?]/g,Uw=/[#\?@]/g,Bw=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qt(t){t.g||(t.g=new Map,t.h=0,t.i&&Lw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Bs.prototype;M.add=function(t,e){Qt(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ef(t,e){Qt(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _f(t,e){return Qt(t),e=ss(t,e),t.g.has(e)}M.forEach=function(t,e){Qt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){Qt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){Qt(this);let e=[];if(typeof t=="string")_f(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Qt(this),this.i=null,t=ss(this,t),_f(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bf(t,e,n){Ef(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),Ra(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jw(t,e){e&&!t.j&&(Qt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ef(this,s),bf(this,r,n))},t)),t.j=e}var qw=class{constructor(e,n){this.h=e,this.g=n}};function If(t){this.l=t||Hw,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hw=10;function Tf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cf(t){return t.h?1:t.g?t.g.size:0}function Bo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qa(t,e){t.g?t.g.add(e):t.h=e}function Sf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}If.prototype.cancel=function(){if(this.i=Af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Af(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ra(t.i)}function Ha(){}Ha.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Ha.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function zw(){this.g=new Ha}function Kw(t,e,n){const s=n||"";try{vf(t,function(r,i){let o=r;Ws(r)&&(o=Fa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Gw(t,e){const n=new yi;if(q.Image){const s=new Image;s.onload=mr(vr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=mr(vr,n,s,"TestLoadImage: error",!1,e),s.onabort=mr(vr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=mr(vr,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function vr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function er(t){this.l=t.ac||null,this.j=t.jb||!1}ke(er,Ua);er.prototype.g=function(){return new Ii(this.l,this.j)};er.prototype.i=function(t){return function(){return t}}({});function Ii(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(Ii,xe);var za=0;M=Ii.prototype;M.open=function(t,e){if(this.readyState!=za)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,js(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=za};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Df(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Df(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tr(this):js(this),this.readyState==3&&Df(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,tr(this))};M.Ua=function(t){this.g&&(this.response=t,tr(this))};M.ga=function(){this.g&&tr(this)};function tr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,js(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function js(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ww=q.JSON.parse;function ye(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xf,this.K=this.L=!1}ke(ye,xe);var xf="",Qw=/^https?$/i,Yw=["POST","PUT"];M=ye.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fo.g(),this.C=this.u?Nl(this.u):Nl(Fo),this.g.onreadystatechange=Be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Pl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=Hh(Yw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Of(this),0<this.B&&((this.K=Xw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.qa,this)):this.A=Va(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pl(this,i)}};function Xw(t){return zn&&pw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof xa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function Pl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rf(t),Ti(t)}function Rf(t){t.D||(t.D=!0,Ne(t,"complete"),Ne(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),Ti(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ti(this,!0)),ye.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?Nf(this):this.fb())};M.fb=function(){Nf(this)};function Nf(t){if(t.h&&typeof xa<"u"&&(!t.C[1]||Ct(t)!=4||t.aa()!=2)){if(t.v&&Ct(t)==4)Va(t.Ha,0,t);else if(Ne(t,"readystatechange"),Ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(wf)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!Qw.test(r?r.toLowerCase():"")}n=s}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var o=2<Ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rf(t)}}finally{Ti(t)}}}}function Ti(t,e){if(t.g){Of(t);const n=t.g,s=t.C[0]?jr:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=s}catch{}}}function Of(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Ct(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ww(e)}};function Ml(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kf(t){let e="";return Oa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ka(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=kf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pf(t){this.Ca=0,this.i=[],this.j=new yi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ds("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ds("baseRetryDelayMs",5e3,t),this.bb=ds("retryDelaySeedMs",1e4,t),this.$a=ds("forwardChannelMaxRetries",2,t),this.ta=ds("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new If(t&&t.concurrentRequestLimit),this.Fa=new zw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=Pf.prototype;M.ma=8;M.G=1;function Ga(t){if(Mf(t),t.G==3){var e=t.U++,n=Dt(t.F);fe(n,"SID",t.I),fe(n,"RID",e),fe(n,"TYPE","terminate"),nr(t,n),e=new Js(t,t.j,e,void 0),e.K=2,e.v=bi(Dt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=qf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Zs(e)}Bf(t)}function Ci(t){t.g&&(Qa(t),t.g.cancel(),t.g=null)}function Mf(t){Ci(t),t.u&&(q.clearTimeout(t.u),t.u=null),Wr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Si(t){Tf(t.h)||t.m||(t.m=!0,nf(t.Ja,t),t.C=0)}function Jw(t,e){return Cf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ys(Be(t.Ja,t,e),Uf(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Js(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Wh(i),Qh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lf(this,r,e),n=Dt(this.F),fe(n,"RID",t),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),nr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(kf(i)))+"&"+e:this.o&&Ka(n,this.o,i)),qa(this.h,r),this.Ya&&fe(n,"TYPE","init"),this.O?(fe(n,"$req",e),fe(n,"SID","null"),r.Z=!0,Vo(r,n,null)):Vo(r,n,e),this.G=2}}else this.G==3&&(t?Ll(this,t):this.i.length==0||Tf(this.h)||Ll(this))};function Ll(t,e){var n;e?n=e.m:n=t.U++;const s=Dt(t.F);fe(s,"SID",t.I),fe(s,"RID",n),fe(s,"AID",t.T),nr(t,s),t.o&&t.s&&Ka(s,t.o,t.s),n=new Js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Lf(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qa(t.h,n),Vo(n,s,e)}function nr(t,e){t.ia&&Oa(t.ia,function(n,s){fe(e,s,n)}),t.l&&vf({},function(n,s){fe(e,s,n)})}function Lf(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Be(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Kw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ff(t){t.g||t.u||(t.Z=1,nf(t.Ia,t),t.A=0)}function Wa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ys(Be(t.Ia,t),Uf(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,$f(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ys(Be(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),Ci(this),$f(this))};function Qa(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function $f(t){t.g=new Js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Dt(t.sa);fe(e,"RID","rpc"),fe(e,"SID",t.I),fe(e,"CI",t.L?"0":"1"),fe(e,"AID",t.T),fe(e,"TYPE","xmlhttp"),nr(t,e),t.o&&t.s&&Ka(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=bi(Dt(e)),n.s=null,n.P=!0,pf(n,t)}M.cb=function(){this.v!=null&&(this.v=null,Ci(this),Wa(this),Ke(19))};function Wr(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Vf(t,e){var n=null;if(t.g==e){Wr(t),Qa(t),t.g=null;var s=2}else if(Bo(t.h,e))n=e.D,Sf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=vi(),Ne(s,new uf(s,n)),Si(t)}else Ff(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Jw(t,e)||s==2&&Wa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:on(t,5);break;case 4:on(t,10);break;case 3:on(t,6);break;default:on(t,2)}}}function Uf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function on(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Be(t.kb,t);n||(n=new hn("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Kr(n,"https"),bi(n)),Gw(n.toString(),s)}else Ke(2);t.G=0,t.l&&t.l.va(e),Bf(t),Mf(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Bf(t){if(t.G=0,t.la=[],t.l){const e=Af(t.h);(e.length!=0||t.i.length!=0)&&(Cl(t.la,e),Cl(t.la,t.i),t.h.i.length=0,Ra(t.i),t.i.length=0),t.l.ua()}}function jf(t,e,n){var s=n instanceof hn?Dt(n):new hn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Gr(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new hn(null,void 0);s&&Kr(i,s),e&&(i.g=e),r&&Gr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&fe(s,n,e),fe(s,"VER",t.ma),nr(t,s),s}function qf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ye(new er({jb:!0})):new ye(t.ra),e.Ka(t.H),e}function Hf(){}M=Hf.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Qr(){if(zn&&!(10<=Number(gw)))throw Error("Environmental error: no available transport.")}Qr.prototype.g=function(t,e){return new Ze(t,e)};function Ze(t,e){xe.call(this),this.g=new Pf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!qr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rs(this)}ke(Ze,xe);Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jf(t,null,t.V),Si(t)};Ze.prototype.close=function(){Ga(this.g)};Ze.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fa(t),t=n);e.i.push(new qw(e.ab++,t)),e.G==3&&Si(e)};Ze.prototype.M=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,Ze.X.M.call(this)};function zf(t){Ba.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(zf,Ba);function Kf(){ja.call(this),this.status=1}ke(Kf,ja);function rs(t){this.g=t}ke(rs,Hf);rs.prototype.xa=function(){Ne(this.g,"a")};rs.prototype.wa=function(t){Ne(this.g,new zf(t))};rs.prototype.va=function(t){Ne(this.g,new Kf)};rs.prototype.ua=function(){Ne(this.g,"b")};Qr.prototype.createWebChannel=Qr.prototype.g;Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;wi.NO_ERROR=0;wi.TIMEOUT=8;wi.HTTP_ERROR=6;hf.COMPLETE="complete";ff.EventType=Xs;Xs.OPEN="a";Xs.CLOSE="b";Xs.ERROR="c";Xs.MESSAGE="d";xe.prototype.listen=xe.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var Zw=function(){return new Qr},eE=function(){return vi()},ro=wi,tE=hf,nE=vn,Fl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},sE=er,wr=ff,rE=ye;const $l="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let is="9.20.0";/**
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
 */const mn=new $h("@firebase/firestore");function Vl(){return mn.logLevel}function L(t,...e){if(mn.logLevel<=re.DEBUG){const n=e.map(Ya);mn.debug(`Firestore (${is}): ${t}`,...n)}}function xt(t,...e){if(mn.logLevel<=re.ERROR){const n=e.map(Ya);mn.error(`Firestore (${is}): ${t}`,...n)}}function Yr(t,...e){if(mn.logLevel<=re.WARN){const n=e.map(Ya);mn.warn(`Firestore (${is}): ${t}`,...n)}}function Ya(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw xt(e),new Error(e)}function Te(t,e){t||K()}function ne(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ns{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class oE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aE{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new Gf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Le(e)}}class cE{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class lE{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new cE(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hE{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new uE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class dE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=fE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Kn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new De(0,0))}static max(){return new z(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qs{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends qs{construct(e,n,s){return new ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const pE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends qs{construct(e,n,s){return new ze(e,n,s)}static isValidIdentifier(e){return pE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ge.fromString(e))}static fromName(e){return new j(ge.fromString(e).popFirst(5))}static empty(){return new j(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ge(e.slice()))}}function gE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=z.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new zt(r,j.empty(),e)}function mE(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new zt(z.min(),j.empty(),-1)}static max(){return new zt(z.max(),j.empty(),-1)}}function yE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const vE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xa(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==vE)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new _((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new _((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function sr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ja.ct=-1;function Ai(t){return t==null}function Xr(t){return t===0&&1/t==-1/0}function EE(t){return typeof t=="number"&&Number.isInteger(t)&&!Xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ul(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Re.RED,this.left=r??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Re(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ce(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _E("Invalid base64 string: "+r):r}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const bE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(t){if(Te(!!t),typeof t=="string"){let e=0;const n=bE.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function Qf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yf(t){const e=t.mapValue.fields.__previous_value__;return Qf(e)?Yf(e):e}function Hs(t){const e=Kt(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class IE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _r={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:TE(t)?9007199254740991:10:K()}function bt(t,e){if(t===e)return!0;const n=yn(t);if(n!==yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Kt(s.timestampValue),o=Kt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Gn(s.bytesValue).isEqual(Gn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=_e(s.doubleValue),o=_e(r.doubleValue);return i===o?Xr(i)===Xr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Kn(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ul(i)!==Ul(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!bt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Ks(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function Wn(t,e){if(t===e)return 0;const n=yn(t),s=yn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=_e(r.integerValue||r.doubleValue),a=_e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jl(t.timestampValue,e.timestampValue);case 4:return jl(Hs(t),Hs(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Gn(r),a=Gn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(_e(r.latitude),_e(i.latitude));return o!==0?o:oe(_e(r.longitude),_e(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Wn(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===_r.mapValue&&i===_r.mapValue)return 0;if(r===_r.mapValue)return 1;if(i===_r.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=oe(a[u],l[u]);if(f!==0)return f;const d=Wn(o[a[u]],c[l[u]]);if(d!==0)return d}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function jl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Kt(t),s=Kt(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function Qn(t){return jo(t)}function jo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Kt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=jo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${jo(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function ql(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qo(t){return!!t&&"integerValue"in t}function Za(t){return!!t&&"arrayValue"in t}function Hl(t){return!!t&&"nullValue"in t}function zl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function io(t){return!!t&&"mapValue"in t}function Cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Cs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(n)}setAll(e){let n=ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Cs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];io(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){rr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new _t(Cs(this.value))}}/**
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
 */class Fe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,z.min(),z.min(),z.min(),_t.empty(),0)}static newFoundDocument(e,n,s,r){return new Fe(e,1,n,z.min(),s,r,0)}static newNoDocument(e,n){return new Fe(e,2,n,z.min(),z.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,z.min(),z.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jr{constructor(e,n){this.position=e,this.inclusive=n}}function Kl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Wn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function CE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Xf{}class be extends Xf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new AE(e,n,s):n==="array-contains"?new RE(e,s):n==="in"?new NE(e,s):n==="not-in"?new OE(e,s):n==="array-contains-any"?new kE(e,s):new be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new DE(e,s):new xE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wn(n,this.value)):n!==null&&yn(this.value)===yn(n)&&this.matchesComparison(Wn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends Xf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new dt(e,n)}matches(e){return Jf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jf(t){return t.op==="and"}function Zf(t){return SE(t)&&Jf(t)}function SE(t){for(const e of t.filters)if(e instanceof dt)return!1;return!0}function Ho(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Qn(t.value);if(Zf(t))return t.filters.map(e=>Ho(e)).join(",");{const e=t.filters.map(n=>Ho(n)).join(",");return`${t.op}(${e})`}}function ed(t,e){return t instanceof be?function(n,s){return s instanceof be&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(t,e):t instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ed(i,s.filters[o]),!0):!1}(t,e):void K()}function td(t){return t instanceof be?function(e){return`${e.field.canonicalString()} ${e.op} ${Qn(e.value)}`}(t):t instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(td).join(" ,")+"}"}(t):"Filter"}class AE extends be{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class DE extends be{constructor(e,n){super(e,"in",n),this.keys=nd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xE extends be{constructor(e,n){super(e,"not-in",n),this.keys=nd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class RE extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Za(n)&&Ks(n.arrayValue,this.value)}}class NE extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ks(this.value.arrayValue,n)}}class OE extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ks(this.value.arrayValue,n)}}class kE extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Za(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ks(this.value.arrayValue,s))}}/**
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
 */class PE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Wl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new PE(t,e,n,s,r,i,o)}function ec(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ho(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ai(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qn(s)).join(",")),e.ft=n}return e.ft}function tc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ed(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gl(t.startAt,e.startAt)&&Gl(t.endAt,e.endAt)}function zo(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ir{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ME(t,e,n,s,r,i,o,a){return new ir(t,e,n,s,r,i,o,a)}function sd(t){return new ir(t)}function Ql(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function id(t){return t.collectionGroup!==null}function Pn(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=nc(e),s=rd(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Ss(n)),e.dt.push(new Ss(ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ss(ze.keyField(),i))}}}return e.dt}function Rt(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=Wl(e.path,e.collectionGroup,Pn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Pn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ss(i.field,o))}const s=e.endAt?new Jr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Jr(e.startAt.position,e.startAt.inclusive):null;e.wt=Wl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Ko(t,e){e.getFirstInequalityField(),nc(t);const n=t.filters.concat([e]);return new ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Go(t,e,n){return new ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Di(t,e){return tc(Rt(t),Rt(e))&&t.limitType===e.limitType}function od(t){return`${ec(Rt(t))}|lt:${t.limitType}`}function Wo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>td(s)).join(", ")}]`),Ai(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qn(s)).join(",")),`Target(${n})`}(Rt(t))}; limitType=${t.limitType})`}function xi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Pn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Kl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Pn(n),s)||n.endAt&&!function(r,i,o){const a=Kl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Pn(n),s))}(t,e)}function LE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ad(t){return(e,n)=>{let s=!1;for(const r of Pn(t)){const i=FE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FE(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Wn(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wf(this.inner)}size(){return this.innerSize}}/**
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
 */const $E=new Oe(j.comparator);function Gt(){return $E}const cd=new Oe(j.comparator);function ys(...t){let e=cd;for(const n of t)e=e.insert(n.key,n);return e}function VE(t){let e=cd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function an(){return As()}function ld(){return As()}function As(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const UE=new Ce(j.comparator);function te(...t){let e=UE;for(const n of t)e=e.add(n);return e}const BE=new Ce(oe);function ud(){return BE}/**
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
 */function hd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function fd(t){return{integerValue:""+t}}function jE(t,e){return EE(e)?fd(e):hd(t,e)}/**
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
 */class Ri{constructor(){this._=void 0}}function qE(t,e,n){return t instanceof Qo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Zr?dd(t,e):t instanceof ei?pd(t,e):function(s,r){const i=zE(s,r),o=Yl(i)+Yl(s._t);return qo(i)&&qo(s._t)?fd(o):hd(s.serializer,o)}(t,e)}function HE(t,e,n){return t instanceof Zr?dd(t,e):t instanceof ei?pd(t,e):n}function zE(t,e){return t instanceof Yo?qo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Qo extends Ri{}class Zr extends Ri{constructor(e){super(),this.elements=e}}function dd(t,e){const n=gd(e);for(const s of t.elements)n.some(r=>bt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ei extends Ri{constructor(e){super(),this.elements=e}}function pd(t,e){let n=gd(e);for(const s of t.elements)n=n.filter(r=>!bt(r,s));return{arrayValue:{values:n}}}class Yo extends Ri{constructor(e,n){super(),this.serializer=e,this._t=n}}function Yl(t){return _e(t.integerValue||t.doubleValue)}function gd(t){return Za(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Zr&&s instanceof Zr||n instanceof ei&&s instanceof ei?Kn(n.elements,s.elements,bt):n instanceof Yo&&s instanceof Yo?bt(n._t,s._t):n instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function md(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new WE(t.key,dn.none()):new rc(t.key,t.data,dn.none());{const n=t.data,s=_t.empty();let r=new Ce(ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ni(t.key,s,new $t(r.toArray()),dn.none())}}function GE(t,e,n){t instanceof rc?function(s,r,i){const o=s.value.clone(),a=Jl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(s,r,i){if(!xr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Jl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(yd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ds(t,e,n,s){return t instanceof rc?function(r,i,o,a){if(!xr(r.precondition,i))return o;const c=r.value.clone(),l=Zl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ni?function(r,i,o,a){if(!xr(r.precondition,i))return o;const c=Zl(r.fieldTransforms,a,i),l=i.data;return l.setAll(yd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return xr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Xl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kn(n,s,(r,i)=>KE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class rc extends sc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ni extends sc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jl(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,HE(o,a,n[r]))}return s}function Zl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,qE(i,o,e))}return s}class WE extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QE{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&GE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ds(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ds(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ld();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=md(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(n,s)=>Xl(n,s))&&Kn(this.baseMutations,e.baseMutations,(n,s)=>Xl(n,s))}}/**
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
 */class YE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XE{constructor(e){this.count=e}}/**
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
 */var Ee,J;function vd(t){if(t===void 0)return xt("GRPC error has no .code"),C.UNKNOWN;switch(t){case Ee.OK:return C.OK;case Ee.CANCELLED:return C.CANCELLED;case Ee.UNKNOWN:return C.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return C.INTERNAL;case Ee.UNAVAILABLE:return C.UNAVAILABLE;case Ee.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ee.NOT_FOUND:return C.NOT_FOUND;case Ee.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ee.ABORTED:return C.ABORTED;case Ee.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ee.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(J=Ee||(Ee={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ic{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return br}static getOrCreateInstance(){return br===null&&(br=new ic),br}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let br=null;/**
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
 */class Oi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,or.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Oi(z.min(),r,ud(),Gt(),te())}}class or{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new or(s,n,te(),te(),te())}}/**
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
 */class Rr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class wd{constructor(e,n){this.targetId=e,this.Et=n}}class Ed{constructor(e,n,s=qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class eu{constructor(){this.At=0,this.Rt=nu(),this.vt=qe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=te(),n=te(),s=te();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new or(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=nu()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class JE{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gt(),this.qt=tu(),this.Ut=new Ce(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(zo(o))if(r===0){const a=new j(o.path);this.Qt(s,a,Fe.newNoDocument(a,z.min()))}else Te(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=ic.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&zo(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Fe.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Oi(e,n,this.Ut,this.Lt,s);return this.Lt=Gt(),this.qt=tu(),this.Ut=new Ce(oe),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new eu,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ce(oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new eu),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function tu(){return new Oe(j.comparator)}function nu(){return new Oe(j.comparator)}/**
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
 */const ZE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),t0=(()=>({and:"AND",or:"OR"}))();class n0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _d(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mn(t){return Te(!!t),z.fromTimestamp(function(e){const n=Kt(e);return new De(n.seconds,n.nanos)}(t))}function bd(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Id(t){const e=ge.fromString(t);return Te(Ad(e)),e}function oo(t,e){const n=Id(e);if(n.get(1)!==t.databaseId.projectId)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Td(n))}function Jo(t,e){return bd(t.databaseId,e)}function s0(t){const e=Id(t);return e.length===4?ge.emptyPath():Td(e)}function su(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Td(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Te(l===void 0||typeof l=="string"),qe.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?C.UNKNOWN:vd(c.code);return new F(l,c.message||"")}(o);n=new Ed(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=oo(t,s.document.name),i=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):z.min(),a=new _t({mapValue:{fields:s.document.fields}}),c=Fe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Rr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=oo(t,s.document),i=s.readTime?Mn(s.readTime):z.min(),o=Fe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Rr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=oo(t,s.document),i=s.removedTargetIds||[];n=new Rr([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new XE(r),o=s.targetId;n=new wd(o,i)}}return n}function i0(t,e){return{documents:[Jo(t,e.path)]}}function o0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Sd(dt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Cn(u.field),direction:l0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ai(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function a0(t){let e=s0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Cd(u);return f instanceof dt&&Zf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Ss(Sn(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ai(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,d=u.values||[];return new Jr(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,d=u.values||[];return new Jr(d,f)}(n.endAt)),ME(e,r,o,i,a,"F",c,l)}function c0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Sn(e.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(e.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sn(e.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sn(e.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return be.create(Sn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(n=>Cd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function l0(t){return ZE[t]}function u0(t){return e0[t]}function h0(t){return t0[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Sn(t){return ze.fromServerFormat(t.fieldPath)}function Sd(t){return t instanceof be?function(e){if(e.op==="=="){if(zl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if(Hl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if(Hl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:u0(e.op),value:e.value}}}(t):t instanceof dt?function(e){const n=e.getFilters().map(s=>Sd(s));return n.length===1?n[0]:{compositeFilter:{op:h0(e.op),filters:n}}}(t):K()}function Ad(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class pn{constructor(e,n,s,r,i=z.min(),o=z.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class f0{constructor(e){this.se=e}}function d0(t){const e=a0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Go(e,e.limit,"L"):e}/**
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
 */class p0{constructor(){this.He=new g0}addToCollectionParentIndex(e,n){return this.He.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(zt.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class g0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ce(ge.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ce(ge.comparator)).toArray()}}/**
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
 */class Yn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Yn(0)}static bn(){return new Yn(-1)}}/**
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
 */class m0{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class v0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ds(s.mutation,r,$t.empty(),De.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=an();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ys();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=an();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Gt();const o=As(),a=As();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ni)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ds(u.mutation,l,u.mutation.getFieldMask(),De.now())):o.set(l.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new y0(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=As();let r=new Oe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||$t.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=ld();u.forEach(d=>{if(!i.has(d)){const g=md(n.get(d),s.get(d));g!==null&&f.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):id(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):_.resolve(an());let a=-1,c=i;return o.next(l=>_.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:VE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=ys();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ys();return this.indexManager.getCollectionParents(e,r).next(o=>_.forEach(o,a=>{const c=function(l,u){return new ir(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Fe.newInvalidDocument(l)))});let o=ys();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ds(l.mutation,c,$t.empty(),De.now()),xi(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class w0{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Mn(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:d0(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),_.resolve()}}/**
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
 */class E0{constructor(){this.overlays=new Oe(j.comparator),this.ts=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=an();return _.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const r=an(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return _.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=an(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=an(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return _.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YE(n,s));let i=this.ts.get(n);i===void 0&&(i=te(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class oc{constructor(){this.es=new Ce(Ae.ns),this.ss=new Ce(Ae.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ae(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ae(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new ge([])),s=new Ae(n,e),r=new Ae(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new ge([])),s=new Ae(n,e),r=new Ae(n,e+1);let i=te();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ae(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||oe(e.ds,n.ds)}static rs(e,n){return oe(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
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
 */class _0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ce(Ae.ns)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QE(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Ae(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ae(n,0),r=new Ae(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ce(oe);return n.forEach(r=>{const i=new Ae(r,0),o=new Ae(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),_.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ae(new j(i),0);let a=new Ce(oe);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),_.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return _.forEach(n.mutations,r=>{const i=new Ae(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ae(n,0),r=this._s.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class b0{constructor(e){this.Ts=e,this.docs=new Oe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let s=Gt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Fe.newInvalidDocument(r))}),_.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Gt();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||yE(mE(u),s)<=0||(r.has(u.key)||xi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Es(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new I0(this)}getSize(e){return _.resolve(this.size)}}class I0 extends m0{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class T0{constructor(e){this.persistence=e,this.As=new os(n=>ec(n),tc),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new oc,this.targetCount=0,this.bs=Yn.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),_.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Yn(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Sn(n),_.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.vs.containsKey(n))}}/**
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
 */class C0{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ja(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new T0(this),this.indexManager=new p0,this.remoteDocumentCache=function(s){return new b0(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new f0(n),this.xs=new w0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new _0(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new S0(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return _.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class S0 extends wE{constructor(e){super(),this.currentSequenceNumber=e}}class ac{constructor(e){this.persistence=e,this.$s=new oc,this.Ms=null}static Fs(e){return new ac(e)}get Bs(){if(this.Ms)return this.Ms;throw K()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),_.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Bs,s=>{const r=j.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return _.or([()=>_.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class cc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cc(e,n.fromCache,s,r)}}/**
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
 */class A0{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Ql(n))return _.resolve(null);let s=Rt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Go(n,null,"F"),s=Rt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Go(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Ql(n)||r.isEqual(z.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Vl()<=re.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wo(n)),this.Fi(e,o,n,gE(r,-1)))})}$i(e,n){let s=new Ce(ad(e));return n.forEach((r,i)=>{xi(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Vl()<=re.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Wo(n)),this.xi.getDocumentsMatchingQuery(e,n,zt.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class D0{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Oe(oe),this.qi=new os(i=>ec(i),tc),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v0(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function x0(t,e,n,s){return new D0(t,e,n,s)}async function Dd(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function xd(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function R0(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,f)=>{const d=r.get(f);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,f)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(b,I,O){return b.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=Gt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(N0(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(f=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function N0(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Gt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function O0(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,_.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new pn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Zo(t,e,n){const s=ne(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!sr(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function ru(t,e,n){const s=ne(t);let r=z.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),f=u.qi.get(l);return f!==void 0?_.resolve(u.Li.get(f)):u.Ds.getTargetData(c,l)}(s,o,Rt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:z.min(),n?i:te())).next(a=>(k0(s,LE(e),a),{documents:a,Wi:i})))}function k0(t,e,n){let s=t.Ui.get(e)||z.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class iu{constructor(){this.activeTargetIds=ud()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P0{constructor(){this.Br=new iu,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new iu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M0{qr(e){}shutdown(){}}/**
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
 */class ou{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ir=null;function ao(){return Ir===null?Ir=268435456+Math.round(2147483648*Math.random()):Ir++,"0x"+Ir.toString(16)}/**
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
 */const L0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class F0{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Me="WebChannelConnection";class $0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=ao(),a=this.ao(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(L("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Yr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=L0[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=ao();return new Promise((o,a)=>{const c=new rE;c.setWithCredentials(!0),c.listenOnce(tE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ro.NO_ERROR:const u=c.getResponseJson();L(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ro.TIMEOUT:L(Me,`RPC '${e}' ${i} timed out`),a(new F(C.DEADLINE_EXCEEDED,"Request time out"));break;case ro.HTTP_ERROR:const f=c.getStatus();if(L(Me,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const b=function(I){const O=I.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(O)>=0?O:C.UNKNOWN}(g.status);a(new F(b,g.message))}else a(new F(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{L(Me,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);L(Me,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=ao(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zw(),a=eE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new sE({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");L(Me,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let f=!1,d=!1;const g=new F0({Wr:I=>{d?L(Me,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(f||(L(Me,`Opening RPC '${e}' stream ${r} transport.`),u.open(),f=!0),L(Me,`RPC '${e}' stream ${r} sending:`,I),u.send(I))},Hr:()=>u.close()}),b=(I,O,R)=>{I.listen(O,B=>{try{R(B)}catch(k){setTimeout(()=>{throw k},0)}})};return b(u,wr.EventType.OPEN,()=>{d||L(Me,`RPC '${e}' stream ${r} transport opened.`)}),b(u,wr.EventType.CLOSE,()=>{d||(d=!0,L(Me,`RPC '${e}' stream ${r} transport closed`),g.so())}),b(u,wr.EventType.ERROR,I=>{d||(d=!0,Yr(Me,`RPC '${e}' stream ${r} transport errored:`,I),g.so(new F(C.UNAVAILABLE,"The operation could not be completed")))}),b(u,wr.EventType.MESSAGE,I=>{var O;if(!d){const R=I.data[0];Te(!!R);const B=R,k=B.error||((O=B[0])===null||O===void 0?void 0:O.error);if(k){L(Me,`RPC '${e}' stream ${r} received error:`,k);const X=k.status;let me=function(et){const tt=Ee[et];if(tt!==void 0)return vd(tt)}(X),Pe=k.message;me===void 0&&(me=C.INTERNAL,Pe="Unknown error status: "+X+" with message "+k.message),d=!0,g.so(new F(me,Pe)),u.close()}else L(Me,`RPC '${e}' stream ${r} received:`,R),g.io(R)}}),b(a,nE.STAT_EVENT,I=>{I.stat===Fl.PROXY?L(Me,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===Fl.NOPROXY&&L(Me,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function co(){return typeof document<"u"?document:null}/**
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
 */function ki(t){return new n0(t,!0)}/**
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
 */class Rd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class V0{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Rd(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(xt(n.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new F(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U0 extends V0{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=r0(this.serializer,e),s=function(r){if(!("targetChange"in r))return z.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?z.min():i.readTime?Mn(i.readTime):z.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=su(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=zo(a)?{documents:i0(r,a)}:{query:o0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=_d(r,i.resumeToken):i.snapshotVersion.compareTo(z.min())>0&&(o.readTime=Xo(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=c0(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=su(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
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
 */class B0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(C.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(C.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class j0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(xt(n),this.ru=!1):L("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class q0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{cr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await ar(c),c.mu.set("Unknown"),c.du.delete(4),await Pi(c)}(this))})}),this.mu=new j0(s,r)}}async function Pi(t){if(cr(t))for(const e of t.wu)await e(!0)}async function ar(t){for(const e of t.wu)await e(!1)}function Nd(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),hc(n)?uc(n):as(n).No()&&lc(n,e))}function Od(t,e){const n=ne(t),s=as(n);n.fu.delete(e),s.No()&&kd(n,e),n.fu.size===0&&(s.No()?s.$o():cr(n)&&n.mu.set("Unknown"))}function lc(t,e){t.gu.Ot(e.targetId),as(t).jo(e)}function kd(t,e){t.gu.Ot(e),as(t).Wo(e)}function uc(t){t.gu=new JE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),as(t).start(),t.mu.ou()}function hc(t){return cr(t)&&!as(t).xo()&&t.fu.size>0}function cr(t){return ne(t).du.size===0}function Pd(t){t.gu=void 0}async function H0(t){t.fu.forEach((e,n)=>{lc(t,e)})}async function z0(t,e){Pd(t),hc(t)?(t.mu.au(e),uc(t)):t.mu.set("Unknown")}async function K0(t,e,n){if(t.mu.set("Online"),e instanceof Ed&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await au(t,s)}else if(e instanceof Rr?t.gu.Kt(e):e instanceof wd?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(z.min()))try{const s=await xd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),kd(r,a);const l=new pn(c.target,a,1,c.sequenceNumber);lc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await au(t,s)}}async function au(t,e,n){if(!sr(e))throw e;t.du.add(1),await ar(t),t.mu.set("Offline"),n||(n=()=>xd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Pi(t)})}async function cu(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=cr(n);n.du.add(3),await ar(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Pi(n)}async function G0(t,e){const n=ne(t);e?(n.du.delete(2),await Pi(n)):e||(n.du.add(2),await ar(n),n.mu.set("Unknown"))}function as(t){return t.yu||(t.yu=function(e,n,s){const r=ne(e);return r.nu(),new U0(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:H0.bind(null,t),Zr:z0.bind(null,t),zo:K0.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),hc(t)?uc(t):t.mu.set("Unknown")):(await t.yu.stop(),Pd(t))})),t.yu}/**
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
 */class fc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new fc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(t,e){if(xt("AsyncQueue",`${e}: ${t}`),sr(t))return new F(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ln{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=ys(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ln)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ln;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class lu{constructor(){this.Iu=new Oe(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):K():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Xn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xn(e,n,Ln.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Di(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class W0{constructor(){this.Eu=void 0,this.listeners=[]}}class Q0{constructor(){this.queries=new os(e=>od(e),Di),this.onlineState="Unknown",this.Au=new Set}}async function Y0(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new W0),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Md(o,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&dc(n)}async function X0(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function J0(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&dc(n)}function Z0(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function dc(t){t.Au.forEach(e=>{e.next()})}class e_{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Xn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Ld{constructor(e){this.key=e}}class Fd{constructor(e){this.key=e}}class t_{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=te(),this.mutatedKeys=te(),this.Ku=ad(e),this.Gu=new Ln(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new lu,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const d=r.get(u),g=xi(this.query,f)?f:null,b=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;d&&g?d.data.isEqual(g.data)?b!==I&&(s.track({type:3,doc:g}),O=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),O=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),O=!0):d&&!g&&(s.track({type:1,doc:d}),O=!0,(c||l)&&(a=!0)),O&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(f,d){const g=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(f)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Xn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new lu,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=te(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Fd(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Ld(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=te();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Xn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class n_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class s_{constructor(e){this.key=e,this.ec=!1}}class r_{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new os(a=>od(a),Di),this.ic=new Map,this.rc=new Set,this.oc=new Oe(j.comparator),this.uc=new Map,this.cc=new oc,this.ac={},this.hc=new Map,this.lc=Yn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function i_(t,e){const n=f_(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await O0(n.localStore,Rt(e));n.isPrimaryClient&&Nd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await o_(n,e,s,a==="current",o.resumeToken)}return r}async function o_(t,e,n,s,r){t.dc=(f,d,g)=>async function(b,I,O,R){let B=I.view.zu(O);B.Mi&&(B=await ru(b.localStore,I.query,!1).then(({documents:me})=>I.view.zu(me,B)));const k=R&&R.targetChanges.get(I.targetId),X=I.view.applyChanges(B,b.isPrimaryClient,k);return hu(b,I.targetId,X.Yu),X.snapshot}(t,f,d,g);const i=await ru(t.localStore,e,!0),o=new t_(e,i.Wi),a=o.zu(i.documents),c=or.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);hu(t,n,l.Yu);const u=new n_(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function a_(t,e){const n=ne(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Di(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Zo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Od(n.remoteStore,s.targetId),ea(n,s.targetId)}).catch(Xa)):(ea(n,s.targetId),await Zo(n.localStore,s.targetId,!0))}async function $d(t,e){const n=ne(t);try{const s=await R0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Te(o.ec):r.removedDocuments.size>0&&(Te(o.ec),o.ec=!1))}),await Ud(n,s,e)}catch(s){await Xa(s)}}function uu(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Ru(o)&&(c=!0)}),c&&dc(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function c_(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Oe(j.comparator);o=o.insert(i,Fe.newNoDocument(i,z.min()));const a=te().add(i),c=new Oi(z.min(),new Map,new Ce(oe),o,a);await $d(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),pc(s)}else await Zo(s.localStore,e,!1).then(()=>ea(s,e,n)).catch(Xa)}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Vd(t,s)})}function Vd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Od(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),pc(t))}function hu(t,e,n){for(const s of n)s instanceof Ld?(t.cc.addReference(s.key,e),l_(t,s)):s instanceof Fd?(L("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Vd(t,s.key)):K()}function l_(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(s),pc(t))}function pc(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(ge.fromString(e)),s=t.lc.next();t.uc.set(s,new s_(n)),t.oc=t.oc.insert(n,s),Nd(t.remoteStore,new pn(Rt(sd(n.path)),s,2,Ja.ct))}}async function Ud(t,e,n){const s=ne(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=cc.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,f=>_.forEach(f.Vi,d=>l.persistence.referenceDelegate.addReference(u,f.targetId,d)).next(()=>_.forEach(f.Si,d=>l.persistence.referenceDelegate.removeReference(u,f.targetId,d)))))}catch(u){if(!sr(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const d=l.Li.get(f),g=d.snapshotVersion,b=d.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(f,b)}}}(s.localStore,i))}async function u_(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Dd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new F(C.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ud(n,s.Qi)}}function h_(t,e){const n=ne(t),s=n.uc.get(e);if(s&&s.ec)return te().add(s.key);{let r=te();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function f_(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c_.bind(null,e),e.nc.zo=J0.bind(null,e.eventManager),e.nc.wc=Z0.bind(null,e.eventManager),e}class fu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ki(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return x0(this.persistence,new A0,e.initialUser,this.serializer)}createPersistence(e){return new C0(ac.Fs,this.serializer)}createSharedClientState(e){return new P0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=u_.bind(null,this.syncEngine),await G0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Q0}createDatastore(e){const n=ki(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new $0(r));var r;return function(i,o,a,c){return new B0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>uu(this.syncEngine,a,0),o=ou.D()?new ou:new M0,new q0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new r_(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);L("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ar(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class p_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class g_{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=dE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Md(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lo(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function du(t,e){t.asyncQueue.verifyOperationInProgress();const n=await y_(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>cu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cu(e.remoteStore,i)),t._onlineComponents=e}function m_(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function y_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await lo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!m_(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await lo(t,new fu)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await lo(t,new fu);return t._offlineComponents}async function v_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await du(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await du(t,new d_))),t._onlineComponents}async function w_(t){const e=await v_(t),n=e.eventManager;return n.onListen=i_.bind(null,e.syncEngine),n.onUnlisten=a_.bind(null,e.syncEngine),n}function E_(t,e,n={}){const s=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new p_({next:f=>{i.enqueueAndForget(()=>X0(r,u)),f.fromCache&&a.source==="server"?c.reject(new F(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new e_(o,l,{includeMetadataChanges:!0,xu:!0});return Y0(r,u)}(await w_(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const pu=new Map;/**
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
 */function __(t,e,n){if(!n)throw new F(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function b_(t,e,n,s){if(e===!0&&s===!0)throw new F(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gu(t){if(j.isDocumentKey(t))throw new F(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mi(t);throw new F(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,b_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iE;switch(n.type){case"firstParty":return new lE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pu.get(e);n&&(L("ComponentProvider","Removing Datastore"),pu.delete(e),n.terminate())}(this),Promise.resolve()}}function I_(t,e,n,s={}){var r;const i=(t=ta(t,gc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Yr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Le.MOCK_USER;else{o=qy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(c)}t._authCredentials=new oE(new Gf(o,a))}}/**
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
 */class Ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class cs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new cs(this.firestore,e,this._query)}}class Fn extends cs{constructor(e,n,s){super(e,n,sd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new j(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function T_(t,e,...n){if(t=Vr(t),__("collection","path",e),t instanceof gc){const s=ge.fromString(e,...n);return gu(s),new Fn(t,null,s)}{if(!(t instanceof Ot||t instanceof Fn))throw new F(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return gu(s),new Fn(t.firestore,null,s)}}/**
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
 */class C_{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Rd(this,"async_queue_retry"),this.qc=()=>{const n=co();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=co();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=co();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new fn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!sr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw xt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=fc.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&K()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Bd extends gc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new C_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jd(this),this._firestoreClient.terminate()}}function S_(t,e){const n=typeof t=="object"?t:Gv(),s=typeof t=="string"?t:e||"(default)",r=qv(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Uy("firestore");i&&I_(r,...i)}return r}function A_(t){return t._firestoreClient||jd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jd(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new IE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new g_(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(qe.fromBase64String(e))}catch(n){throw new F(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jn(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hd{constructor(e){this._methodName=e}}/**
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
 */class mc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const D_=/^__.*__$/;function zd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class yc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new yc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return na(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(zd(this.Yc)&&D_.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class x_{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ki(e)}ua(e,n,s,r=!1){return new yc({Yc:e,methodName:n,oa:s,path:ze.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function R_(t){const e=t._freezeSettings(),n=ki(t._databaseId);return new x_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function N_(t,e,n,s=!1){return vc(n,t.ua(s?4:3,e))}function vc(t,e){if(Kd(t=Vr(t)))return k_("Unsupported field value:",e,t),O_(t,e);if(t instanceof Hd)return function(n,s){if(!zd(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=vc(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Vr(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jE(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=De.fromDate(n);return{timestampValue:Xo(s.serializer,r)}}if(n instanceof De){const r=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,r)}}if(n instanceof mc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jn)return{bytesValue:_d(s.serializer,n._byteString)};if(n instanceof Ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:bd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Mi(n)}`)}(t,e)}function O_(t,e){const n={};return Wf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(t,(s,r)=>{const i=vc(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Kd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof mc||t instanceof Jn||t instanceof Ot||t instanceof Hd)}function k_(t,e,n){if(!Kd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Mi(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}const P_=new RegExp("[~\\*/\\[\\]]");function M_(t,e,n){if(e.search(P_)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qd(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(C.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Gd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L_ extends Gd{data(){return super.data()}}function wc(t,e){return typeof e=="string"?M_(t,e):e instanceof qd?e._internalPath:e._delegate._internalPath}/**
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
 */function F_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ec{}class $_ extends Ec{}function V_(t,e,...n){let s=[];e instanceof Ec&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof _c).length,o=r.filter(a=>a instanceof Li).length;if(i>1||i>0&&o>0)throw new F(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Li extends $_{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Li(e,n,s)}_apply(e){const n=this._parse(e);return Wd(e._query,n),new cs(e.firestore,e.converter,Ko(e._query,n))}_parse(e){const n=R_(e.firestore);return function(r,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){vu(u,l);const d=[];for(const g of u)d.push(yu(a,r,g));f={arrayValue:{values:d}}}else f=yu(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||vu(u,l),f=N_(o,i,u,l==="in"||l==="not-in");return be.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function U_(t,e,n){const s=e,r=wc("where",t);return Li._create(r,s,n)}class _c extends Ec{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _c(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Wd(i,a),i=Ko(i,a)}(e._query,n),new cs(e.firestore,e.converter,Ko(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yu(t,e,n){if(typeof(n=Vr(n))=="string"){if(n==="")throw new F(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!id(e)&&n.indexOf("/")!==-1)throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ge.fromString(n));if(!j.isDocumentKey(s))throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ql(t,new j(s))}if(n instanceof Ot)return ql(t,n._key);throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mi(n)}.`)}function vu(t,e){if(!Array.isArray(t)||t.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wd(t,e){if(e.isInequality()){const s=nc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=rd(t);i!==null&&B_(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function B_(t,e,n){if(!n.isEqual(e))throw new F(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class j_{convertValue(e,n="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return rr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new mc(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const n=Kt(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ge.fromString(e);Te(Ad(s));const r=new zs(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class q_ extends Gd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(wc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Nr extends q_{data(e={}){return super.data(e)}}class H_{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Tr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Nr(this._firestore,this._userDataWriter,s.key,s,new Tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Nr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Nr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:z_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function z_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class K_ extends j_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function G_(t){t=ta(t,cs);const e=ta(t.firestore,Bd),n=A_(e),s=new K_(e);return F_(t._query),E_(n,t._query).then(r=>new H_(e,s,t,r))}(function(t,e=!0){(function(n){is=n})(Kv),Br(new Ls("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Bd(new aE(n.getProvider("auth-internal")),new hE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),kn($l,"3.10.1",t),kn($l,"3.10.1","esm2017")})();var W_="firebase",Q_="9.20.0";/**
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
 */kn(W_,Q_,"app");const Y_={apiKey:"AIzaSyA05P1xTD86r4FSacfzaRiDv7hwqYFaNMo",authDomain:"my-kino-cms.firebaseapp.com",projectId:"my-kino-cms",storageBucket:"my-kino-cms.appspot.com",messagingSenderId:"18464466854",appId:"1:18464466854:web:6bcd7d760dcc68f2be9167",measurementId:"G-R936Q3ST84"},X_=Bh(Y_),J_=S_(X_),Z_=ui("h1",null,"Statistic Page",-1),eb=ui("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro cum amet itaque necessitatibus dolore animi labore laboriosam error, voluptatum consectetur nisi eligendi tempore consequatur quam nesciunt autem quia saepe.",-1),tb={__name:"StatisticPage",setup(t){const e=va([]);async function n(){const s=V_(T_(J_,"users"),U_("dob",">","1990")),r=await G_(s);console.log(r),r.forEach(i=>{console.log(i.data()),e.value.push(i.data())})}return nh(()=>{n()}),(s,r)=>(ln(),_s("div",null,[Z_,eb,Ue(Ut(Nh),{to:"/about-cinema"},{default:_a(()=>[mh("Abou Cinema Page")]),_:1}),(ln(!0),_s(nt,null,gg(e.value,i=>(ln(),_s("p",{key:i.firstName},Sc(i.firstName)+" "+Sc(i.lastName),1))),128))]))}},nb=vy({history:Lm("/KinoCmsAdminLTE/"),routes:[{path:"/",name:"statistic",component:tb},{path:"/about-cinema",name:"about-cinema",component:()=>Ry(()=>import("./AboutCinema-577868ed.js"),[])}]});const bc=pm(Ay);bc.use(vm());bc.use(nb);bc.mount("#app");export{kh as _,_s as c,ln as o};
