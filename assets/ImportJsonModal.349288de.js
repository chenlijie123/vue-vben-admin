var F=Object.defineProperty,y=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(o,e,a)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,d=(o,e)=>{for(var a in e||(e={}))I.call(e,a)&&_(o,a,e[a]);if(C)for(var a of C(e))M.call(e,a)&&_(o,a,e[a]);return o},i=(o,e)=>y(o,E(e));import{u as g}from"./useFormDesignState.a5685dac.js";import{f as j,g as B}from"./index.c8facd79.js";import{C as D,M as U}from"./index.20a9f230.js";import{a as w,dG as J,w as S,bc as k,au as O,E as N,aw as l,o as x,j as $,z as n,n as r,B as c,i as h,fh as T,fi as V}from"./index.e4c75133.js";import{U as z}from"./index.dc2534e2.js";import"./index.724a653b.js";import"./isNumber.c5f53a02.js";import"./useWindowSizeFn.7fc45049.js";import"./_baseIteratee.5a1d74c6.js";import"./get.30beaf8d.js";import"./DeleteOutlined.29d4cb61.js";import"./Form.aef92efb.js";import"./Col.ab78fa67.js";import"./useFlexGapSupport.3ce44ffd.js";import"./useSize.aaba198d.js";import"./useRefs.ec3a6ac6.js";const A=w({name:"ImportJsonModal",components:{CodeEditor:D,Upload:z,Modal:J},setup(){const{createMessage:o}=N(),e=S({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "\u8F93\u5165\u6846",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=g(),p=()=>{e.visible=!1},m=()=>{e.visible=!0},u=()=>{try{const t=JSON.parse(e.json);t.schemas&&j(t.schemas,s=>{B(s)}),a.setFormConfig(i(d({},t),{activeKey:1,currentItem:{component:""}})),p(),o.success("\u5BFC\u5165\u6210\u529F")}catch(t){o.error("\u5BFC\u5165\u5931\u8D25\uFF0C\u6570\u636E\u683C\u5F0F\u4E0D\u5BF9")}};return i(d({handleImportJson:u,beforeUpload:t=>{const s=new FileReader;return s.readAsText(t),s.onload=function(){e.json=this.result,u()},!1},handleCancel:p,showModal:m},k(e)),{MODE:U})}}),K=o=>(T("data-v-eb5ad78e"),o=o(),V(),o),L=K(()=>h("p",{class:"hint-box"},"\u5BFC\u5165\u683C\u5F0F\u5982\u4E0B:",-1)),R={class:"v-json-box"};function G(o,e,a,p,m,u){const f=l("CodeEditor"),t=l("a-button"),s=l("Upload"),b=l("Modal");return x(),$(b,{title:"JSON\u6570\u636E",visible:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"\u5173\u95ED",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[r(t,{onClick:o.handleCancel},{default:n(()=>[c("\u53D6\u6D88")]),_:1},8,["onClick"]),r(s,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[r(t,{type:"primary"},{default:n(()=>[c("\u5BFC\u5165json\u6587\u4EF6")]),_:1})]),_:1},8,["beforeUpload"]),r(t,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[c("\u786E\u5B9A")]),_:1},8,["onClick"])]),default:n(()=>[L,h("div",R,[r(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["visible","onOk","onCancel"])}var uo=O(A,[["render",G],["__scopeId","data-v-eb5ad78e"]]);export{uo as default};
