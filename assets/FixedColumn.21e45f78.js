import{B as l}from"./TableImg.4b023469.js";import{k as d}from"./componentMap.d2d4ae54.js";import{u as s}from"./useTable.38837a7a.js";import{d as c}from"./table.700c3460.js";import{au as F,a as b,aw as m,o as n,h as f,n as h,z as B,j as A,l as C}from"./index.e4c75133.js";import"./index.88e45b7c.js";import"./Checkbox.f055b953.js";import"./index.539ebec8.js";import"./index.77b20779.js";import"./eagerComputed.9c87a866.js";import"./BasicForm.bd09aa6c.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.4d28784f.js";import"./index.071f865c.js";import"./index.dc2534e2.js";import"./_baseIteratee.5a1d74c6.js";import"./get.30beaf8d.js";import"./DeleteOutlined.29d4cb61.js";import"./index.724a653b.js";import"./useRefs.ec3a6ac6.js";import"./Form.aef92efb.js";import"./Col.ab78fa67.js";import"./useFlexGapSupport.3ce44ffd.js";import"./useSize.aaba198d.js";import"./index.e1cb3c1d.js";import"./uniqBy.0b7ab2f0.js";import"./index.130ed745.js";import"./useWindowSizeFn.7fc45049.js";import"./FullscreenOutlined.1953441f.js";import"./index.a75532f7.js";import"./useForm.f16d83f4.js";import"./RadioButtonGroup.e357ce64.js";import"./useFormItem.e7937f05.js";import"./index.2976de85.js";import"./index.4f5c9be8.js";import"./index.e13f7400.js";import"./useContentViewHeight.ec63feb0.js";import"./ArrowLeftOutlined.e2b2ed9d.js";import"./index.14ecbbc5.js";import"./transButton.70c4c2ad.js";import"./index.421493aa.js";import"./index.57809736.js";import"./index.5e95530e.js";import"./index.6bd158f7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.36608b95.js";import"./index.af75b2ab.js";import"./isNumber.c5f53a02.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f3a1f343.js";import"./index.fc49b1b9.js";import"./index.4f4162f7.js";import"./index.330b00fb.js";import"./index.88df5d1c.js";import"./download.986cc0da.js";import"./base64Conver.08b9f4ec.js";import"./index.2aa20a36.js";import"./index.57c1f991.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:d},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function o(e){}function i(e){}return{registerTable:t,handleDelete:o,handleOpen:i}}}),w={class:"p-4"};function x(t,o,i,e,D,I){const p=m("TableAction"),a=m("BasicTable");return n(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(n(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Nt=F(_,[["render",x]]);export{Nt as default};
