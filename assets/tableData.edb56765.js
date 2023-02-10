import{o as i}from"./select.7cc65681.js";import{n as l}from"./index.e4c75133.js";function s(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"\u5F00\u59CB\u65F6\u95F4",width:150,sorter:!0,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",width:150,sorter:!0,dataIndex:"endTime"}]}function m(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:80}]}function c(){return[{title:"ID",dataIndex:"id",width:200},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5730\u5740",dataIndex:"address",sorter:!0,children:[{title:"\u7F16\u53F7",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:120},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:120}]}]}function u(){return[{title:"ID",dataIndex:"id",helpMessage:"headerHelpMessage\u65B9\u5F0F1",width:200},{dataIndex:"name",width:120},{dataIndex:"address",width:120,sorter:!0},{title:"\u7F16\u53F7",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:120},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:120}]}const n=(t,e)=>({colSpan:e===9?0:1});function h(){return[{title:"ID",dataIndex:"id",width:300,customCell:(t,e)=>({colSpan:e===9?6:1})},{title:"\u59D3\u540D",dataIndex:"name",width:300,customCell:n},{title:"\u5730\u5740",dataIndex:"address",colSpan:2,width:120,sorter:!0,customCell:(t,e)=>({rowSpan:e===2?2:1,colSpan:e===3||e===9?0:1})},{title:"\u7F16\u53F7",dataIndex:"no",colSpan:0,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}],customCell:n},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime",width:200,customCell:n},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200,customCell:n}]}const d=(t=6)=>{const e=[];for(let a=0;a<t;a++)e.push({field:`field${a}`,label:`\u5B57\u6BB5${a}`,component:"Input",colProps:{xl:12,xxl:8}});return e};function w(){return{labelWidth:100,schemas:[...d(5),{field:"field11",label:"Slot\u793A\u4F8B",component:"Select",slot:"custom",colProps:{xl:12,xxl:8}}]}}function f(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return t})()}function x(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l2-${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()}]});return t})()}const p=[{title:"\u5E8F\u53F7",type:"seq",fixed:"left",width:"50",align:"center"},{title:"\u56FA\u5B9A\u5217",field:"name",width:150,showOverflow:"tooltip",fixed:"left"},{title:"\u81EA\u9002\u5E94\u5217",field:"address"},{title:"\u81EA\u5B9A\u4E49\u5217(\u81EA\u5B9A\u4E49\u5BFC\u51FA)",field:"no",width:200,showOverflow:"tooltip",align:"center",slots:{default:({row:t})=>{const e=`\u81EA\u5B9A\u4E49${t.no}`;return[l("div",{class:"text-red-500"},[e])]}},exportMethod:({row:t})=>`\u81EA\u5B9A\u4E49${t.no}\u5BFC\u51FA`},{title:"\u81EA\u5B9A\u4E49\u7F16\u8F91",width:150,field:"name1",align:"center",editRender:{name:"AInput",placeholder:"\u8BF7\u70B9\u51FB\u8F93\u5165"}},{title:"\u5F00\u59CB\u65F6\u95F4",width:150,field:"beginTime",showOverflow:"tooltip",align:"center"},{title:"\u7ED3\u675F\u65F6\u95F4",width:150,field:"endTime",showOverflow:"tooltip",align:"center"},{width:160,title:"\u64CD\u4F5C",align:"center",slots:{default:"action"},fixed:"right"}],g=[{field:"field0",title:"field0",itemRender:{name:"AInput"},span:6},{field:"field1",title:"field1",itemRender:{name:"AApiSelect",props:{api:i,resultField:"list",labelField:"name",valueField:"id"}},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"\u67E5\u8BE2",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"\u91CD\u7F6E"}}]}}];export{d as getAdvanceSchema,s as getBasicColumns,f as getBasicData,m as getBasicShortColumns,u as getCustomHeaderColumns,w as getFormConfig,h as getMergeHeaderColumns,c as getMultipleHeaderColumns,x as getTreeTableData,p as vxeTableColumns,g as vxeTableFormSchema};
