import{G as e,c as s,j as i,z as t,T as n,h as r,J as l,B as a}from"./index-5895aa22.js";import{R as o}from"./index-98067c6d.js";import{P as c}from"./Pagination-f07e1614.js";import"./index-2abd1eae.js";import"./index-292f8f5a.js";import"./List-cfb0a701.js";import"./useIcons-cdff9ef7.js";function d(){const{setLocale:d,locale:h,language:{icon:x,label:m}}=e(),{colorPrimary:j}=s();return i.jsxs(t,{direction:"vertical",size:"middle",style:{display:"flex"},children:[i.jsx(n.Link,{href:"https://www.i18next.com/",style:{color:j},children:"https://www.i18next.com"}),i.jsx(n.Link,{href:"https://ant.design/docs/react/i18n-cn",style:{color:j},children:"https://ant.design/docs/react/i18n-cn"}),i.jsxs(r,{title:"Flexible",children:[i.jsxs(o.Group,{onChange:e=>d(e.target.value),value:h,children:[i.jsx(o,{value:l.en_US,children:"English"}),i.jsx(o,{value:l.zh_CN,children:"Chinese"})]}),i.jsxs("div",{className:"flex items-center text-4xl",children:[i.jsx(a,{icon:x,className:"mr-4 rounded-md",size:"30"}),m]})]}),i.jsx(r,{title:"System",children:i.jsx(c,{defaultCurrent:1,total:50,showSizeChanger:!0,showQuickJumper:!0})})]})}export{d as default};