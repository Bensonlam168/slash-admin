import{r as e,j as t,f as i,a8 as s,cY as o,cW as r,a5 as a,cd as n,I as l}from"./index-6a929571.js";import{T as d}from"./Table-0dab9960.js";import{RoleModal as m}from"./role-modal-5eae784c.js";import{P as c}from"./index-2b630dc9.js";import"./styleChecker-e8653997.js";import"./addEventListener-57f64e19.js";import"./List-8cd2c423.js";import"./useIcons-11011e96.js";import"./CheckOutlined-6c08306e.js";import"./Pagination-b7dc0782.js";import"./index-e86ecfb4.js";import"./index-c7f30286.js";import"./index-320af2f4.js";import"./index-c4e920a6.js";import"./index-b84ca94c.js";import"./index-4985bd59.js";import"./iconUtil-f9865298.js";import"./extendsObject-8d078517.js";import"./index-c56625c4.js";import"./row-7489db00.js";import"./index-c1aa69dd.js";import"./index-9e362a96.js";const x=o,j={id:"",name:"",label:"",status:r.ENABLE,permission:[]};function p(){const[o,p]=e.useState({formValue:{...j},title:"New",show:!1,onOk:()=>{p((e=>({...e,show:!1})))},onCancel:()=>{p((e=>({...e,show:!1})))}}),u=[{title:"Name",dataIndex:"name",width:300},{title:"Label",dataIndex:"label"},{title:"Order",dataIndex:"order",width:60},{title:"Status",dataIndex:"status",align:"center",width:120,render:e=>t.jsx(a,{color:e===r.DISABLE?"error":"success",children:e===r.DISABLE?"Disable":"Enable"})},{title:"Desc",dataIndex:"desc"},{title:"Action",key:"operation",align:"center",width:100,render:(e,i)=>t.jsxs("div",{className:"flex w-full justify-center text-gray",children:[t.jsx(n,{onClick:()=>h(i),children:t.jsx(l,{icon:"solar:pen-bold-duotone",size:18})}),t.jsx(c,{title:"Delete the Role",okText:"Yes",cancelText:"No",placement:"left",children:t.jsx(n,{children:t.jsx(l,{icon:"mingcute:delete-2-fill",size:18,className:"text-error"})})})]})}],h=e=>{p((t=>({...t,show:!0,title:"Edit",formValue:e})))};return t.jsxs(i,{title:"Role List",extra:t.jsx(s,{type:"primary",onClick:()=>{p((e=>({...e,show:!0,title:"Create New",formValue:{...e.formValue,...j}})))},children:"New"}),children:[t.jsx(d,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:!1,columns:u,dataSource:x}),t.jsx(m,{...o})]})}export{p as default};