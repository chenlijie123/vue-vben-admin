var r=(s,a,u)=>new Promise((_,t)=>{var c=e=>{try{n(u.next(e))}catch(o){t(o)}},i=e=>{try{n(u.throw(e))}catch(o){t(o)}},n=e=>e.done?_(e.value):Promise.resolve(e.value).then(c,i);n((u=u.apply(s,a)).next())});import{a as p,aw as l,o as d,h as B,n as m,z as x,B as F,i as C,fq as f}from"./index.e4c75133.js";const h={class:"request-box"},y=C("p",null,"\u6253\u5F00\u6D4F\u89C8\u5668\u7684network\u9762\u677F\uFF0C\u53EF\u4EE5\u770B\u5230\u53D1\u51FA\u4E86\u516D\u6B21\u8BF7\u6C42",-1),v=p({__name:"index",setup(s){const a=()=>r(this,null,function*(){yield f()});return(u,_)=>{const t=l("a-button");return d(),B("div",h,[m(t,{onClick:a,type:"primary"},{default:x(()=>[F(" \u70B9\u51FB\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C425\u6B21 ")]),_:1}),y])}}});export{v as default};
