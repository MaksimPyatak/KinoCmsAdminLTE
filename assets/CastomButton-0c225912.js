import{_ as u,b as l,r as p,a as f,o,c as s,F as m,m as n,C as y,z as h,A as b,h as g}from"./index-77b5db20.js";const B="/KinoCmsAdminLTE/assets/loading-9f0ae08f.gif";const v=e=>(h("data-v-61dedd5c"),e=e(),b(),e),w=["disabled","type"],C={key:0,class:"button__text"},S={key:1,class:"button__loading"},k=v(()=>g("img",{src:B,alt:""},null,-1)),x=[k],I={__name:"CastomButton",props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{type:String}},setup(e){const t=e,i=l(()=>t.loading?!0:t.disabled);let d;const a=p(null);function c(){d=getComputedStyle(a.value).width}const r=l(()=>t.loading?"wait":t.disabled?"no-drop":"pointer");return f(()=>{c()}),(_,z)=>(o(),s("button",{class:"button",disabled:n(i),ref_key:"button",ref:a,style:y({width:n(d),cursor:n(r)}),type:t.type},[t.loading?(o(),s("div",S,x)):(o(),s("div",C,[m(_.$slots,"default",{},void 0,!0)]))],12,w))}},E=u(I,[["__scopeId","data-v-61dedd5c"]]);export{E as C};