import{j as e,z as s,a5 as t,q as i,cd as r,I as a}from"./index-89612953.js";import{T as d}from"./Table-23cfcb35.js";import{C as o}from"./index-fe1afabd.js";import{T as n}from"./index-66af888a.js";import"./styleChecker-56624ac5.js";import"./addEventListener-4a8d7b05.js";import"./List-473a20db.js";import"./useIcons-06fb10c6.js";import"./CheckOutlined-776d0ab1.js";import"./Pagination-4f6b3348.js";import"./index-e1dc7142.js";import"./index-e9dc4a1b.js";import"./index-c5ac5302.js";import"./index-035e4002.js";import"./index-a0145e24.js";import"./index-8154062a.js";import"./iconUtil-4eefa13a.js";import"./extendsObject-8d078517.js";function c(){const c=[{title:"InvoiceId",dataIndex:"id",key:"id",render:s=>e.jsx("span",{children:s})},{title:"Category",dataIndex:"category",key:"category"},{title:"Price",dataIndex:"price",key:"price",render:s=>e.jsx("span",{children:s})},{title:"Status",key:"status",dataIndex:"status",render:s=>{const i=s;let r="success";return"Progress"===i&&(r="gold"),"Out of Date"===i&&(r="red"),e.jsx(t,{color:r,children:i})}},{title:"Action",key:"action",render:()=>e.jsx(i,{size:"middle",children:e.jsx(r,{children:e.jsx(a,{icon:"fontisto:more-v-a"})})})}];return e.jsxs(o,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(n.Title,{level:5,children:"New Invoice"})}),e.jsx("main",{className:"w-full",children:e.jsx(s,{children:e.jsx(d,{columns:c,dataSource:[{key:"1",id:"INV-1990",category:"Android",price:"$83.74",status:"Paid"},{key:"2",id:"INV-1991",category:"Mac",price:"$97.14",status:"Out of Date"},{key:"3",id:"INV-1992",category:"Windows",price:"$68.71",status:"Progress"},{key:"4",id:"INV-1993",category:"Android",price:"$85.21",status:"Paid"},{key:"5",id:"INV-1994",category:"Mac",price:"$53.17",status:"Paid"}]})})})]})}export{c as default};