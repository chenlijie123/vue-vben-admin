import{a,v as s,fr as m,N as _,o as c,h as f,aA as k,aD as C,au as v,aw as i,j as x,z as r,n as O,i as g,t as h}from"./index.e4c75133.js";import{P as y}from"./index.2976de85.js";import"./index.4f5c9be8.js";import"./index.e13f7400.js";import"./useSize.aaba198d.js";import"./eagerComputed.9c87a866.js";import"./useWindowSizeFn.7fc45049.js";import"./useContentViewHeight.ec63feb0.js";import"./ArrowLeftOutlined.e2b2ed9d.js";import"./index.14ecbbc5.js";import"./transButton.70c4c2ad.js";const S=a({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=s(null);return m(n,()=>{t("clickOutside")}),_(()=>{t("mounted")}),(o,d)=>(c(),f("div",{ref_key:"wrap",ref:n},[k(o.$slots,"default")],512))}}),w=C(S);const B=a({components:{ClickOutSide:w,PageWrapper:y},setup(){const e=s("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function $(e,t,n,o,d,E){const l=i("ClickOutSide"),u=i("PageWrapper");return c(),x(u,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:r(()=>[O(l,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:r(()=>[g("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},h(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var M=v(B,[["render",$],["__scopeId","data-v-6c56edd4"]]);export{M as default};
