var m=(t,n,r)=>new Promise((d,a)=>{var p=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.4b023469.js";import"./componentMap.d2d4ae54.js";import{u as c}from"./useTable.38837a7a.js";import{o as l}from"./select.7cc65681.js";import{d as C}from"./table.700c3460.js";import{t as F}from"./tree.8ae16bfb.js";import{au as E,a as f,aw as b,o as h,h as B,n as D,bS as x,E as w}from"./index.e4c75133.js";import{P as A}from"./index.724a653b.js";import"./index.88e45b7c.js";import"./Checkbox.f055b953.js";import"./index.539ebec8.js";import"./index.77b20779.js";import"./eagerComputed.9c87a866.js";import"./BasicForm.bd09aa6c.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.4d28784f.js";import"./index.071f865c.js";import"./index.dc2534e2.js";import"./_baseIteratee.5a1d74c6.js";import"./get.30beaf8d.js";import"./DeleteOutlined.29d4cb61.js";import"./Form.aef92efb.js";import"./Col.ab78fa67.js";import"./useFlexGapSupport.3ce44ffd.js";import"./useSize.aaba198d.js";import"./index.e1cb3c1d.js";import"./uniqBy.0b7ab2f0.js";import"./index.130ed745.js";import"./useWindowSizeFn.7fc45049.js";import"./FullscreenOutlined.1953441f.js";import"./index.a75532f7.js";import"./useForm.f16d83f4.js";import"./RadioButtonGroup.e357ce64.js";import"./useFormItem.e7937f05.js";import"./index.2976de85.js";import"./index.4f5c9be8.js";import"./index.e13f7400.js";import"./useContentViewHeight.ec63feb0.js";import"./ArrowLeftOutlined.e2b2ed9d.js";import"./index.14ecbbc5.js";import"./transButton.70c4c2ad.js";import"./index.421493aa.js";import"./index.57809736.js";import"./index.5e95530e.js";import"./index.6bd158f7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.36608b95.js";import"./index.af75b2ab.js";import"./isNumber.c5f53a02.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f3a1f343.js";import"./index.fc49b1b9.js";import"./index.4f4162f7.js";import"./index.330b00fb.js";import"./index.88df5d1c.js";import"./download.986cc0da.js";import"./base64Conver.08b9f4ec.js";import"./index.2aa20a36.js";import"./index.57c1f991.js";import"./useRefs.ec3a6ac6.js";const v=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>m(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>x(A,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200},{title:"\u5355\u9009\u6846",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200}],I=f({components:{BasicTable:s},setup(){const[t]=c({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:v,showIndexColumn:!1,bordered:!0}),{createMessage:n}=w();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Lt){return m(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function p(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:p,beforeEditSubmit:a}}}),_={class:"p-4"};function P(t,n,r,d,a,p){const o=b("BasicTable");return h(),B("div",_,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Ht=E(I,[["render",P]]);export{Ht as default};
