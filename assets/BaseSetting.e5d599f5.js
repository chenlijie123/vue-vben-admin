var l=(o,s,r)=>new Promise((c,n)=>{var d=t=>{try{e(r.next(t))}catch(m){n(m)}},a=t=>{try{e(r.throw(t))}catch(m){n(m)}},e=t=>t.done?c(t.value):Promise.resolve(t.value).then(d,a);e((r=r.apply(o,s)).next())});import{a as C,cD as g,C as h,s as B,N as F,f as A,au as b,E as w,aw as p,o as I,j as S,z as u,n as i,i as _,B as y,fh as k,fi as E}from"./index.e4c75133.js";/* empty css              */import{B as R}from"./BasicForm.bd09aa6c.js";import"./componentMap.d2d4ae54.js";import{u as x}from"./useForm.f16d83f4.js";import"./RadioButtonGroup.e357ce64.js";import{a as N}from"./index.dc5de2a9.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.0f306adb.js";import{b as $}from"./data.08d7c751.js";import{u as M}from"./upload.461f2495.js";import{R as T}from"./index.a75532f7.js";import{C as j}from"./index.e1cb3c1d.js";/* empty css              */import"./FormItem.vue_vue_type_script_lang.4d28784f.js";import"./index.071f865c.js";import"./index.dc2534e2.js";import"./_baseIteratee.5a1d74c6.js";import"./get.30beaf8d.js";import"./DeleteOutlined.29d4cb61.js";import"./index.724a653b.js";import"./useRefs.ec3a6ac6.js";import"./Form.aef92efb.js";import"./Col.ab78fa67.js";import"./useFlexGapSupport.3ce44ffd.js";import"./useSize.aaba198d.js";import"./uniqBy.0b7ab2f0.js";import"./index.130ed745.js";import"./useWindowSizeFn.7fc45049.js";import"./FullscreenOutlined.1953441f.js";import"./index.88e45b7c.js";import"./Checkbox.f055b953.js";import"./index.539ebec8.js";import"./index.6bd158f7.js";import"./index.5e95530e.js";import"./index.421493aa.js";import"./index.57809736.js";import"./index.4f4162f7.js";import"./useFormItem.e7937f05.js";import"./index.77b20779.js";import"./eagerComputed.9c87a866.js";import"./transButton.70c4c2ad.js";import"./index.330b00fb.js";import"./index.88df5d1c.js";import"./index.af75b2ab.js";import"./isNumber.c5f53a02.js";import"./uuid.2b29000c.js";import"./download.986cc0da.js";import"./base64Conver.08b9f4ec.js";import"./index.2aa20a36.js";import"./index.57c1f991.js";import"./index.e13f7400.js";import"./index.14ecbbc5.js";const z=C({components:{BasicForm:R,CollapseContainer:g,Button:h,ARow:T,ACol:j,CropperAvatar:N},setup(){const{createMessage:o}=w(),s=B(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:$,showActionButtonGroup:!1});F(()=>l(this,null,function*(){const a=yield V();c(a)}));const n=A(()=>{const{avatar:a}=s.getUserInfo;return a||U});function d({src:a,data:e}){const t=s.getUserInfo;t.avatar=a,s.setUserInfo(t)}return{avatar:n,register:r,uploadApi:M,updateAvatar:d,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),D=o=>(k("data-v-8891ad62"),o=o(),E(),o),G={class:"change-avatar"},P=D(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function W(o,s,r,c,n,d){const a=p("BasicForm"),e=p("a-col"),t=p("CropperAvatar"),m=p("a-row"),f=p("Button"),v=p("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[i(m,{gutter:24},{default:u(()=>[i(e,{span:14},{default:u(()=>[i(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),i(e,{span:10},{default:u(()=>[_("div",G,[P,i(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),i(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[y(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var Ho=b(z,[["render",W],["__scopeId","data-v-8891ad62"]]);export{Ho as default};
