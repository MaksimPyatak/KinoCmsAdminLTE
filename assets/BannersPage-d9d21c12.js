import{_ as F,r as _,w as U,u as le,a as L,b as T,t as ne,s as te,d as M,o as v,c as y,e as C,f as S,g as V,h as l,i as G,v as X,j as O,k as P,l as ce,m as N,n as Z,p as H,q as ie,P as J,x as _e,y as ve,z as D,A as R,B as he,C as ge,D as pe,E as fe,F as me,G as be,H as z,I as oe,J as se,K as xe,L as Q,M as Y,N as ye,O as Se}from"./index-e5c22a2d.js";import{F as re,G as ue,C as ee}from"./CastomInput-35eb537f.js";import{C as K}from"./CastomButton-545755a7.js";import"./index.esm-ddc1dfec.js";const E=n=>(D("data-v-9171cdf6"),n=n(),R(),n),Be={class:"through-banner"},ke={class:"through-banner__main-block"},Ce={class:"through-banner__checkbox-section"},we={class:"through-banner__checkbox-box"},Ue=E(()=>l("label",{class:"through-banner__checkbox-lebel",for:"img"},"Фото на фон",-1)),Fe={class:"through-banner__checkbox-box"},$e=E(()=>l("label",{class:"through-banner__checkbox-lebel",for:"color"},"Колір на фон",-1)),Ie={class:"through-banner__adding-section"},Te={key:0,class:"through-banner__photo-box"},Ve={key:0,class:"through-banner__img-box"},Pe={class:"through-banner__img"},Oe=["src"],Me={key:1,class:"through-banner__selected-color-box"},Ne={class:"through-banner__color-box"},Le=E(()=>l("label",{for:"colorWell"},"Color:",-1)),De=E(()=>l("span",null,"Зберегти",-1)),Re={__name:"ThroughBanner",props:{name:{type:String,required:!0}},emits:["goingLoading"],setup(n,{emit:i}){const e=n,u=_(!1);U(u,a=>{console.log(a),i("goingLoading",a)});const c=le();L(()=>{w()});function s(){r.value=null,g.value=null}const d=_(""),r=_(null),g=_(null),B=_(null),p=_({}),j=T(()=>Object.keys(p.value).length>0||g.value?!1:!$.value),m=_({});let k;async function w(){try{k=await ne(te(M,e.name)),k.empty||k.forEach(a=>{m.value=a.data(),a.data().downloadUrl&&(r.value=a.data().downloadUrl),a.data().whichBanner&&(d.value=a.data().whichBanner),a.data().selectingColor&&(B.value=a.data().selectingColor)})}catch(a){console.log(a)}}const $=_(null);U(r,(a,h)=>{a==null&&a!=h&&($.value=!0)}),U(d,a=>{m.value.whichBanner!=a?p.value.whichBanner=a:p.value.whichBanner&&m.value.whichBanner==a&&delete p.value.whichBanner}),U(B,a=>{m.value.selectingColor!=a?p.value.selectingColor=a:p.value.selectingColor&&m.value.selectingColor==a&&delete p.value.selectingColor});function I(a){for(const h of a)r.value=URL.createObjectURL(h),g.value=h}async function q(){try{new Promise((a,h)=>{u.value=!0,g.value==null&&$.value?Z(m.value.fullPath).then(()=>{const o=H(M,e.name,"main");ie(o,{fullPath:J(),downloadUrl:J()})}).then(()=>{delete m.value.fullPath,delete m.value.downloadUrl,console.log(m.value),$.value=null,a()}).catch(o=>{console.log(o),h()}):g.value?_e(g.value,"banners/"+e.name+"/").then(o=>(m.value.fullPath&&Z(m.value.fullPath),o),o=>console.log(o)).then(o=>{p.value.downloadUrl=o.downloadUrl,p.value.fullPath=o.metadata.fullPath,a()},o=>console.log(o)).catch(o=>{console.log(o),h()}):(a(),h())}).then(()=>{Object.keys(p.value).length&&(ve(H(M,e.name,"main"),p.value,{merge:!0}),g.value=null,Object.keys(p.value).forEach(a=>{m.value[a]=p.value[a],delete p.value[a]})),u.value=!1,c.addMessage("Наскрізний банер на задньому фоні",!1)})}catch(a){u.value=!1,c.addMessage(e.name,!0),console.log("Наскрізний банер на задньому фоні"+a)}}return(a,h)=>(v(),y("div",Be,[C(ue,null,{title:S(()=>[V(" Наскрізний банер на задньому фоні ")]),label:S(()=>[]),body:S(()=>[l("div",ke,[l("div",Ce,[l("div",we,[G(l("input",{class:"through-banner__checkbox-input",type:"radio",id:"img",name:"through-banner",value:"img","onUpdate:modelValue":h[0]||(h[0]=o=>d.value=o)},null,512),[[X,d.value]]),Ue]),l("div",Fe,[G(l("input",{class:"through-banner__checkbox-input",type:"radio",id:"color",name:"through-banner",value:"color","onUpdate:modelValue":h[1]||(h[1]=o=>d.value=o)},null,512),[[X,d.value]]),$e])]),l("div",Ie,[d.value=="img"?(v(),y("div",Te,[r.value?(v(),y("div",Ve,[l("div",Pe,[l("img",{src:r.value},null,8,Oe)])])):O("",!0),C(re,{class:"through-banner__upload",multiple:!1,onUploadedFiles:I}),r.value?(v(),P(K,{key:1,class:"through-banner__del-photo-btn",onClick:s},{default:S(()=>[V(" Видалити ")]),_:1})):O("",!0)])):(v(),y("div",Me,[l("div",Ne,[Le,G(l("input",{type:"color","onUpdate:modelValue":h[2]||(h[2]=o=>B.value=o)},null,512),[[ce,B.value]])])]))])])]),footer:S(()=>[C(K,{class:"through-banner__saving-button",onClick:q,disabled:N(j),loading:u.value},{default:S(()=>[De]),_:1},8,["disabled","loading"])]),_:1})]))}},Ee=F(Re,[["__scopeId","data-v-9171cdf6"]]);const je={},qe=n=>(D("data-v-a9e24223"),n=n(),R(),n),Ae={class:"modal"},Ge=qe(()=>l("div",{class:"modal__box"},[l("h1",null,[V("ЗАЧЕКАЙТЕ, "),l("br"),V("ІДЕ ЗАВАНТАЖЕННЯ")])],-1)),Ke=[Ge];function ze(n,i){return v(),y("div",Ae,Ke)}const We=F(je,[["render",ze],["__scopeId","data-v-a9e24223"]]);const Xe=["aria-checked","onKeydown"],Ze={__name:"ToggleCheckbox",props:{value:Boolean},emits:["inputValue"],setup(n,{emit:i}){const e=n,u=T(()=>({"gold-mid":e.value,"gray-lighter":!e.value})),c=T(()=>({transform:e.value?"translateX(14px)":"translateX(0)"}));function s(){i("inputValue",!e.value)}return(d,r)=>(v(),y("div",null,[l("span",{class:"toggle-wrapper",role:"checkbox","aria-checked":n.value.toString(),tabindex:"0",onClick:s,onKeydown:pe(fe(s,["prevent"]),["space"])},[l("span",{class:he(["toggle-background",N(u)])},null,2),l("span",{class:"toggle-indicator",style:ge(N(c))},null,4)],40,Xe)]))}},He=F(Ze,[["__scopeId","data-v-6d87246f"]]);const Je={},Qe=n=>(D("data-v-29c107d0"),n=n(),R(),n),Ye={class:"close"},ea=Qe(()=>l("div",{class:"close__criss-cross"},null,-1)),aa=[ea];function la(n,i){return v(),y("div",Ye,aa)}const na=F(Je,[["render",la],["__scopeId","data-v-29c107d0"]]);const ta={class:"card"},oa={class:"card__body"},sa={class:"card__img-box"},ra={class:"card__img"},ua=["src"],da={__name:"ImageCard",props:{id:String,ratio:String,src:String,text:String,url:String,fullPath:String,isText:{type:Boolean,default:!0},isUrl:{type:Boolean,default:!0}},emits:["updatUrl","updateText","close"],setup(n,{emit:i}){const e=n;me(r=>({"19aa9493":e.ratio}));const u=_("");U(u,r=>{r!=e.url&&i("updatUrl",e.id,r)});function c(){e.url&&(u.value=e.url)}const s=_("");U(s,r=>{r!=e.text&&i("updateText",e.id,r)});function d(){e.text&&(s.value=e.text)}return L(()=>{c(),d()}),(r,g)=>(v(),y("div",ta,[l("div",oa,[C(na,{class:"card__close",onClick:g[0]||(g[0]=B=>r.$emit("close",e.id,e.fullPath))}),l("div",sa,[l("div",ra,[l("img",{src:e.src},null,8,ua)])]),e.isUrl?(v(),P(ee,{key:0,modelValue:u.value,"onUpdate:modelValue":g[1]||(g[1]=B=>u.value=B),class:"card__input-box",name:"url",type:"url",label:"URL:",placeholder:"URL"},null,8,["modelValue"])):O("",!0),e.isText?(v(),P(ee,{key:1,modelValue:s.value,"onUpdate:modelValue":g[2]||(g[2]=B=>s.value=B),class:"card__input-box",name:"text",type:"text",label:"Текст:",placeholder:"Текст"},null,8,["modelValue"])):O("",!0)])]))}},ca=F(da,[["__scopeId","data-v-cc7e085c"]]);const ia={class:"select"},_a={for:"select",class:"select__label-select"},va=["value"],ha=["value"],ga={__name:"CastomSelect",props:["modelValue","selectText","selectValue"],emits:["update:modelValue"],setup(n){const i=n,e=_([]);function u(){const c=i.selectValue!==void 0?i.selectValue:i.selectText;for(let s=0;s<i.selectText.length;s++)e.value.push({value:i.selectText[s],text:c[s]})}return L(()=>{u()}),(c,s)=>(v(),y("div",ia,[l("label",_a,[be(c.$slots,"default",{},void 0,!0)]),l("select",{class:"select__body",name:"select",value:i.modelValue,onInput:s[0]||(s[0]=d=>c.$emit("update:modelValue",d.target.value))},[(v(!0),y(z,null,oe(e.value,d=>(v(),y("option",{value:d.value,key:d.value},se(d.text),9,ha))),128))],40,va)]))}},pa=F(ga,[["__scopeId","data-v-c8e98b8d"]]);const fa=n=>(D("data-v-9d4628d6"),n=n(),R(),n),ma={class:"banner__main-block"},ba=fa(()=>l("span",null,"Зберегти",-1)),xa={__name:"UniversalBanner",props:{name:{type:String,required:!0},folderForSaveFile:{type:String,required:!0},nameBanners:{type:String,required:""}},emits:["goingLoading"],setup(n,{emit:i}){const e=n,u=le(),c=_(!0),s=_(!0),d=T(()=>c.value!=s.value),r=_(!1);U(r,t=>{i("goingLoading",t)}),L(()=>{g(e.name,w.value)});async function g(t,f){(await ne(te(M,t))).forEach(x=>{x.id!="showingBlock"&&x.id!="sliderSpeed"?f.push(x.data()):x.id=="showingBlock"?(c.value=x.data().show,s.value=x.data().show):x.id=="sliderSpeed"&&(o.value=x.data().speed,A.value=x.data().speed)})}async function B(){try{new Promise((t,f)=>{r.value=!0,Object.keys(k.value).length||Object.keys(I.value).length?new Promise((b,x)=>{xe(k.value,e.name,I.value,e.folderForSaveFile+"/"+e.name+"/",w.value).then(()=>{b(),x()})}).then(()=>t(),()=>f()):(t(),f())}).catch(t=>console.log(t)).then(()=>{d.value&&(Q("showingBlock",e.name,"show",c.value,!1),s.value=c.value)},t=>{console.log(t)}).then(()=>{W.value&&(Q("sliderSpeed",e.name,"speed",o.value,!1),A.value=o.value)},t=>{console.log(t),u.addMessage(e.nameBanners,!0,t)}).then(()=>{console.log("e"),r.value=!1,console.log(r.value),u.addMessage(e.nameBanners,!1)},t=>console.log(t))}catch(t){r.value=!1,u.addMessage(e.nameBanners,!0),console.log(e.nameBanners+t)}}function p(t,f){Y(k.value,t,"url",f)}function j(t,f){Y(k.value,t,"text",f)}function m(t){c.value=t}const k=_([]),w=_([]);function $(t){for(const f of t){let b=ye(),x={id:b,image:f},de={id:b,downloadUrl:URL.createObjectURL(f)};k.value.push(x),w.value.push(de)}}const I=_([]);function q(t,f){Se(t,w.value,k.value,e.name,I.value,f)}const a=T(()=>Object.keys(k.value).length>0||Object.keys(I.value).length?(console.log(1),!1):d.value?(console.log(c.value),console.log(s.value),!1):W.value?(console.log(1),!1):!0),h=[5,10,15],o=_("5"),A=_("5"),W=T(()=>o.value!=A.value);return(t,f)=>(v(),P(ue,null,{title:S(()=>[V(se(e.nameBanners),1)]),label:S(()=>[C(He,{value:c.value,onInputValue:m},null,8,["value"])]),body:S(()=>[l("div",ma,[(v(!0),y(z,null,oe(w.value,b=>(v(),P(ca,{key:b.id,id:b.id,src:b.downloadUrl,url:b.url,fullPath:b.fullPath,text:b.text,ratio:"19%",onUpdatUrl:p,onUpdateText:j,onClose:q},null,8,["id","src","url","fullPath","text"]))),128)),C(re,{multiple:!0,onUploadedFiles:$})])]),footer:S(()=>[C(pa,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=b=>o.value=b),selectText:h},{default:S(()=>[V(" Швидкість зміни слайдів ")]),_:1},8,["modelValue"]),C(K,{class:"banner__saving-button",onClick:B,disabled:N(a),loading:r.value},{default:S(()=>[ba]),_:1},8,["disabled","loading"])]),_:1}))}},ae=F(xa,[["__scopeId","data-v-9d4628d6"]]),Ca={__name:"BannersPage",setup(n){const i=_(!1);function e(d){i.value=d}const u={name:"topBanner",folderForSaveFile:"banners",nameBanners:"На головній верх"},c="backgroundBanner",s={name:"newsBanners",folderForSaveFile:"banners",nameBanners:"На головній новини та акції"};return(d,r)=>(v(),y(z,null,[i.value?(v(),P(We,{key:0})):O("",!0),C(ae,{name:u.name,folderForSaveFile:u.folderForSaveFile,nameBanners:u.nameBanners,onGoingLoading:e},null,8,["name","folderForSaveFile","nameBanners"]),C(Ee,{name:c,onGoingLoading:e}),C(ae,{name:s.name,folderForSaveFile:s.folderForSaveFile,nameBanners:s.nameBanners,onGoingLoading:e},null,8,["name","folderForSaveFile","nameBanners"])],64))}};export{Ca as default};
