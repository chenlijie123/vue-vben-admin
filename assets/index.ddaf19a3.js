var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))T.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))w.call(a,e)&&m(t,e,a[e]);return t};import{a as B,v as g,cL as S,f as C,k as E,L as F,a7 as k,N as z,cM as D,cz as L,au as M,o as I,h as P,t as j,bm as q,aD as A}from"./index.e4c75133.js";const G={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},H=B({name:"CountTo",props:G,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let o=S(e);const c=C(()=>x(E(o)));F(()=>{e.value=t.startVal}),k([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&s()}),z(()=>{t.autoplay&&s()});function s(){d(),e.value=t.endVal}function h(){e.value=t.startVal,d()}function d(){o=S(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:D[t.transition]}:{}))}function x(n){if(!n&&n!==0)return"";const{decimals:b,decimal:V,separator:i,suffix:v,prefix:N}=t;n=Number(n).toFixed(b),n+="";const l=n.split(".");let r=l[0];const _=l.length>1?V+l[1]:"",f=/(\d+)(\d{3})/;if(i&&!L(i))for(;f.test(r);)r=r.replace(f,"$1"+i+"$2");return N+r+_+v}return{value:c,start:s,reset:h}}});function J(t,a,e,u,o,c){return I(),P("span",{style:q({color:t.color})},j(t.value),5)}var K=M(H,[["render",J]]);const R=A(K);export{R as C};
