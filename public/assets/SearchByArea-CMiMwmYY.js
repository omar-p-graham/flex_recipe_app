import{_ as u}from"./PrimaryLayout-4Lko_5Co.js";import{H as f}from"./H1-oi_sRhuO.js";import{_ as m,k as p,r as g,d as h,h as v,o as t,c,a as s,g as n,f as r,i as x,F as k,j as $,e as _,t as y}from"./index-pssP6OgE.js";const B={class:"container mx-auto"},w={class:"p-2 mt-5"},A={class:"container grid justify-center grid-cols-2 gap-3 px-2 mx-auto mt-10 lg:grid-cols-3 py-7"},S={class:"grid area"},b={class:"area-flag"},j=["src","alt"],C={class:"area-name"},F={class:"text-xl"},N={__name:"Areas",setup(l){const a=p(),o=g([]);return h(()=>{a.getAreas(),o.value=a.$state.areas}),(H,L)=>{const i=v("router-link");return t(),c("div",B,[s("div",w,[n(f,null,{default:r(()=>[x("Select an area below")]),_:1})]),s("div",A,[(t(!0),c(k,null,$(o.value,(e,d)=>(t(),_(i,{to:`/get-cooking/results/area/${e}`,key:d,class:"p-0 text-center hover:font-bold"},{default:r(()=>[s("div",S,[s("div",b,[s("img",{src:`../src/assets/flags/${e.toLowerCase()}.svg`||"../assets/flags/unknown.svg",alt:`${e}-Flag`,class:"object-fit"},null,8,j)]),s("div",C,[s("h3",F,y(e),1)])])]),_:2},1032,["to"]))),128))])])}}},V=m(N,[["__scopeId","data-v-4f96c4f0"]]),M={__name:"SearchByArea",setup(l){return(a,o)=>(t(),_(u,null,{default:r(()=>[n(V)]),_:1}))}};export{M as default};
