var u=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(s,o,e)=>o in s?u(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,c=(s,o)=>{for(var e in o||(o={}))C.call(o,e)&&i(s,e,o[e]);if(l)for(var e of l(o))_.call(o,e)&&i(s,e,o[e]);return s},d=(s,o)=>f(s,v(o));import w from"./PreviewCode.a41b6dea.js";import{r as J,a as b}from"./index.c8facd79.js";import{a as h,dG as M,w as N,f as $,bc as j,au as x,aw as p,o as y,j as O,z as P,n as k}from"./index.e4c75133.js";import"./index.20a9f230.js";import"./useWindowSizeFn.7fc45049.js";import"./isNumber.c5f53a02.js";const B=h({name:"JsonModal",components:{PreviewCode:w,Modal:M},emits:["cancel"],setup(s,{emit:o}){const e=N({visible:!1,jsonData:{}}),a=t=>{b(t.schemas),e.jsonData=t,e.visible=!0},n=$(()=>JSON.stringify(J(e.jsonData),null,"	")),r=()=>{e.visible=!1,o("cancel")};return d(c({},j(e)),{editorJson:n,handleCancel:r,showModal:a})}});function D(s,o,e,a,n,r){const t=p("PreviewCode"),m=p("Modal");return y(),O(m,{title:"JSON\u6570\u636E",footer:null,visible:s.visible,onCancel:s.handleCancel,destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px"},{default:P(()=>[k(t,{editorJson:s.editorJson},null,8,["editorJson"])]),_:1},8,["visible","onCancel"])}var V=x(B,[["render",D]]);export{V as default};
