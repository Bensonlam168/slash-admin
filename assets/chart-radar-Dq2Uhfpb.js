import{b as o,j as r}from"./index-BPAfWa-O.js";import{u as a,C as s}from"./useChart-U5pOxFAa.js";import"./vendor-react-C12YrPp7.js";import"./vendor-ui-D5V7SM0_.js";import"./vendor-antd-3B35lyCA.js";import"./vendor-utils-DcpWhr7h.js";import"./vendor-charts-CfOASNco.js";const i=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function u(){const{colorText:t}=o(),e=a({stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[t,t,t,t,t,t]}}}});return r.jsx(s,{type:"radar",series:i,options:e,height:320})}export{u as default};