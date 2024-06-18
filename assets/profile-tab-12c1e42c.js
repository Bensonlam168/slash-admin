import{cv as e,c as s,K as a,j as l,I as n,ae as i,T as t,B as c,cu as r,O as o,z as m}from"./index-5895aa22.js";import{f as d}from"./utils-4e5698a8.js";import{C as x}from"./index-76361e84.js";import{R as j,C as h}from"./row-8a61f9d3.js";import{T as f}from"./Timeline-4c4948e4.js";import{T as p}from"./Table-3bbdc57d.js";import{A as v}from"./index-40b7aeea.js";import{P as u}from"./progress-a6947651.js";import"./addEventListener-f3d23ace.js";import"./List-cfb0a701.js";import"./iconUtil-c57e7538.js";import"./index-99aaf130.js";import"./index-c3a7aa72.js";import"./index-2abd1eae.js";import"./index-98067c6d.js";import"./index-292f8f5a.js";import"./useIcons-cdff9ef7.js";import"./Pagination-f07e1614.js";import"./index-6ca96e02.js";import"./extendsObject-2c31166c.js";import"./index-116fd816.js";function N(){const{username:N}=e(),g=s(),b=[{icon:l.jsx(n,{icon:"fa-solid:user",size:18}),label:"Full Name",val:N},{icon:l.jsx(n,{icon:"eos-icons:role-binding",size:18}),label:"Role",val:"Developer"},{icon:l.jsx(n,{icon:"tabler:location-filled",size:18}),label:"Country",val:"USA"},{icon:l.jsx(n,{icon:"ion:language",size:18}),label:"Language",val:"English"},{icon:l.jsx(n,{icon:"ph:phone-fill",size:18}),label:"Contact",val:"(123)456-7890"},{icon:l.jsx(n,{icon:"ic:baseline-email",size:18}),label:"Email",val:N}],y=[{avatar:a.image.avatarLegacy(),name:a.person.fullName(),connections:`${a.number.int(100)} Connections`,connected:a.datatype.boolean()},{avatar:a.image.avatarLegacy(),name:a.person.fullName(),connections:`${a.number.int(100)} Connections`,connected:a.datatype.boolean()},{avatar:a.image.avatarLegacy(),name:a.person.fullName(),connections:`${a.number.int(100)} Connections`,connected:a.datatype.boolean()},{avatar:a.image.avatarLegacy(),name:a.person.fullName(),connections:`${a.number.int(100)} Connections`,connected:a.datatype.boolean()},{avatar:a.image.avatarLegacy(),name:a.person.fullName(),connections:`${a.number.int(100)} Connections`,connected:a.datatype.boolean()}],T=[{avatar:l.jsx(n,{icon:"devicon:react",size:36}),name:"React Developers",members:`${a.number.int(100)} Members`,tag:l.jsx(i,{color:"warning",children:"Developer"})},{avatar:l.jsx(n,{icon:"devicon:figma",size:36}),name:"UI Designer",members:`${a.number.int(100)} Members`,tag:l.jsx(i,{color:"cyan",children:"Designer"})},{avatar:l.jsx(n,{icon:"logos:jest",size:36}),name:"Test Team",members:`${a.number.int(100)} Members`,tag:l.jsx(i,{color:"success",children:"Test"})},{avatar:l.jsx(n,{icon:"logos:nestjs",size:36}),name:"Nest.js Developers",members:`${a.number.int(100)} Members`,tag:l.jsx(i,{color:"warning",children:"Developer"})},{avatar:l.jsx(n,{icon:"logos:twitter",size:36}),name:"Digital Marketing",members:`${a.number.int(100)} Members`,tag:l.jsx(i,{children:"Marketing"})}],w=[{title:"NAME",dataIndex:"name",render:(e,s)=>l.jsxs("div",{className:"flex items-center",children:[l.jsx("img",{src:s.avatar,alt:"",className:"h-9 w-9 rounded-full"}),l.jsxs("div",{className:"ml-2 flex flex-col",children:[l.jsx("span",{className:"font-semibold",children:s.name}),l.jsx("span",{className:"text-xs opacity-50",children:s.date})]})]})},{title:"LEADER",dataIndex:"leader",render:e=>l.jsx("span",{className:"opacity-50",children:e})},{title:"TEAM",dataIndex:"team",render:e=>l.jsx(v.Group,{children:e.map(((e,s)=>l.jsx(v,{src:e},s)))})},{title:"STATUS",dataIndex:"status",render:e=>l.jsx(u,{percent:e,strokeColor:g.colorPrimary,trailColor:"transparent"})},{title:"ACTIONS",dataIndex:"action",render:()=>l.jsx(m,{size:"middle",children:l.jsx(r,{children:l.jsx(n,{icon:"fontisto:more-v-a"})})})}];return l.jsxs(l.Fragment,{children:[l.jsxs(j,{gutter:[16,16],children:[l.jsx(h,{span:24,md:12,lg:8,children:l.jsx(x,{className:"flex-col",children:l.jsxs("div",{className:"flex w-full flex-col",children:[l.jsx(t.Title,{level:5,children:"About"}),l.jsx(t.Text,{children:a.lorem.paragraph()}),l.jsx("div",{className:"mt-2 flex flex-col gap-4",children:b.map(((e,s)=>l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"mr-2",children:e.icon}),l.jsxs("div",{className:"mr-2",children:[e.label,":"]}),l.jsx("div",{className:"opacity-50",children:e.val})]},s)))})]})})}),l.jsx(h,{span:24,md:12,lg:16,children:l.jsxs(x,{className:"flex-col !items-start",children:[l.jsx(t.Title,{level:5,children:"Activity Timeline"}),l.jsx(f,{className:"!mt-4 w-full",items:[{color:g.colorError,children:l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(t.Text,{strong:!0,children:"8 Invoices have been paid"}),l.jsx("div",{className:"opacity-50",children:"Wednesday"})]}),l.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),l.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[l.jsx(c,{icon:"ic_file_pdf",size:30}),l.jsx("span",{className:"font-medium opacity-60",children:"invoice.pdf"})]})]})},{color:g.colorPrimaryActive,children:l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(t.Text,{strong:!0,children:"Create a new project for client 😎"}),l.jsx("div",{className:"opacity-50",children:"April, 18"})]}),l.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."}),l.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[l.jsx("img",{alt:"",src:a.image.avatarLegacy(),className:"h-8 w-8 rounded-full"}),l.jsxs("span",{className:"font-medium opacity-60",children:[a.person.fullName()," (client)"]})]})]})},{color:g.colorInfo,children:l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(t.Text,{strong:!0,children:"Order #37745 from September"}),l.jsx("div",{className:"opacity-50",children:"January, 10"})]}),l.jsx(t.Text,{type:"secondary",className:"text-xs",children:"Invoices have been paid to the company."})]})},{color:g.colorWarning,children:l.jsx("div",{className:"flex flex-col",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(t.Text,{strong:!0,children:"Public Meeting"}),l.jsx("div",{className:"opacity-50",children:"September, 30"})]})})}]})]})})]}),l.jsxs(j,{gutter:[16,16],className:"mt-4",children:[l.jsx(h,{span:24,md:12,children:l.jsxs(x,{className:"flex-col !items-start",children:[l.jsxs("div",{className:"flex w-full items-center justify-between",children:[l.jsx(t.Title,{level:5,children:"Connections"}),l.jsx(r,{children:l.jsx(n,{icon:"fontisto:more-v-a"})})]}),l.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:y.map(((e,s)=>l.jsxs("div",{className:"flex",children:[l.jsx("img",{alt:"",src:e.avatar,className:"h-10 w-10 flex-none rounded-full"}),l.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[l.jsx("span",{className:"font-semibold",children:e.name}),l.jsx("span",{className:"mt-1 text-xs opacity-50",children:e.connections})]}),l.jsx("div",{className:"flex h-9 w-9 flex-none items-center justify-center rounded",style:{backgroundColor:e.connected?g.colorPrimaryText:"transparent",border:e.connected?"":`1px solid ${g.colorPrimaryText}`},children:l.jsx(n,{icon:"tdesign:user",color:e.connected?"#fff":g.colorPrimaryText,size:20})})]},s)))}),l.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:g.colorPrimaryText},children:"View all connections"})]})}),l.jsx(h,{span:24,md:12,children:l.jsxs(x,{className:"flex-col !items-start",children:[l.jsxs("div",{className:"flex w-full items-center justify-between",children:[l.jsx(t.Title,{level:5,children:"Teams"}),l.jsx(r,{children:l.jsx(n,{icon:"fontisto:more-v-a"})})]}),l.jsx("div",{className:"mt-2 flex w-full flex-col gap-4",children:T.map(((e,s)=>l.jsxs("div",{className:"flex",children:[e.avatar,l.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[l.jsx("span",{className:"font-semibold",children:e.name}),l.jsx("span",{className:"mt-1 text-xs opacity-50",children:e.members})]}),e.tag]},s)))}),l.jsx("div",{className:"mt-4 w-full text-center text-lg",style:{color:g.colorPrimaryText},children:"View all members"})]})})]}),l.jsx(j,{gutter:[16,16],className:"mt-4",children:l.jsx(h,{span:24,children:l.jsxs(x,{className:"flex-col !items-start",children:[l.jsx(t.Title,{level:5,children:"Projects"}),l.jsx("div",{className:"!mt-4 w-full",children:l.jsx(o,{children:l.jsx(p,{rowSelection:{type:"checkbox"},columns:w,dataSource:(()=>{const e=[];for(let s=0;s<=25;s+=1)e.push({key:a.string.uuid(),avatar:a.image.urlPicsumPhotos(),name:a.company.buzzPhrase(),date:a.date.past().toDateString(),leader:a.person.fullName(),team:d(a.number.int({min:2,max:5})),status:a.number.int({min:50,max:99})});return e})()})})})]})})})]})}export{N as default};