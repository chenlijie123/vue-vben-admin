import{d as u}from"./vuedraggable.umd.584fcdbb.js";import{a as g,b6 as h,w as v,au as f,aw as l,o as x,h as b,n as s,z as _,i as y,B as I,t as C,ax as $}from"./index.e4c75133.js";const w=g({name:"CollapseItem",components:{draggable:u,Icon:h},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:o}){return{state:v({}),handleStart:(a,n)=>{o("start",n[a.oldIndex].component)},handleAdd:a=>{},cloneItem:a=>e.handleListPush(a)}}}),A=["onDragstart","onClick"];function k(e,o,d,r,i,p){const a=l("Icon"),n=l("draggable");return x(),b("div",null,[s(n,$({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:o[0]||(o[0]=t=>e.handleStart(t,e.list)),onAdd:e.handleAdd}),{item:_(({element:t,index:c})=>[y("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,c),onClick:m=>e.$emit("handle-list-push",t)},[s(a,{icon:t.icon},null,8,["icon"]),I(" "+C(t.label),1)],40,A)]),_:1},16,["model-value","onAdd"])])}var D=f(w,[["render",k],["__scopeId","data-v-1c0edfc0"]]);export{D as default};
