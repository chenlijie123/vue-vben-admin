import{aL as f,w as m,aM as i,L as v,f as d,ap as g,am as w,k as S}from"./index.e4c75133.js";function E(u,n="value",o="change",c){const a=f(),s=a==null?void 0:a.emit,t=m({value:u[n]}),r=i(t),l=e=>{t.value=e};return v(()=>{t.value=u[n]}),[d({get(){return t.value},set(e){g(e,r.value)||(t.value=e,setTimeout(()=>{s==null||s(o,e,...w(S(c))||[])}))}}),l,r]}export{E as u};
