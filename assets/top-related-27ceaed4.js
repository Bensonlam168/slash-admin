import{r as e,A as t,y as a,R as n,X as r,bi as o,b8 as l,ba as s,b9 as c,bb as i,Y as u,Q as d,aj as f,U as m,V as v,W as p,aP as x,w as h,j as g,I as b,c as y,T as w,O as j,ae as C}from"./index-5895aa22.js";import{C as N}from"./index-76361e84.js";const E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};var R=function(n,r){return e.createElement(t,a({},n,{ref:r,icon:E}))};
/**![star](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwOC4xIDM1My4xbC0yNTMuOS0zNi45TDU0MC43IDg2LjFjLTMuMS02LjMtOC4yLTExLjQtMTQuNS0xNC41LTE1LjgtNy44LTM1LTEuMy00Mi45IDE0LjVMMzY5LjggMzE2LjJsLTI1My45IDM2LjljLTcgMS0xMy40IDQuMy0xOC4zIDkuM2EzMi4wNSAzMi4wNSAwIDAwLjYgNDUuM2wxODMuNyAxNzkuMS00My40IDI1Mi45YTMxLjk1IDMxLjk1IDAgMDA0Ni40IDMzLjdMNTEyIDc1NGwyMjcuMSAxMTkuNGM2LjIgMy4zIDEzLjQgNC40IDIwLjMgMy4yIDE3LjQtMyAyOS4xLTE5LjUgMjYuMS0zNi45bC00My40LTI1Mi45IDE4My43LTE3OS4xYzUtNC45IDguMy0xMS4zIDkuMy0xOC4zIDIuNy0xNy41LTkuNS0zMy43LTI3LTM2LjN6IiAvPjwvc3ZnPg==) */const O=e.forwardRef(R);function k(e,t){var a=e.disabled,l=e.prefixCls,s=e.character,c=e.characterRender,i=e.index,u=e.count,d=e.value,f=e.allowHalf,m=e.focused,v=e.onHover,p=e.onClick,x=i+1,h=new Set([l]);0===d&&0===i&&m?h.add("".concat(l,"-focused")):f&&d+.5>=x&&d<x?(h.add("".concat(l,"-half")),h.add("".concat(l,"-active")),m&&h.add("".concat(l,"-focused"))):(x<=d?h.add("".concat(l,"-full")):h.add("".concat(l,"-zero")),x===d&&m&&h.add("".concat(l,"-focused")));var g="function"==typeof s?s(e):s,b=n.createElement("li",{className:r(Array.from(h)),ref:t},n.createElement("div",{onClick:a?null:function(e){p(e,i)},onKeyDown:a?null:function(e){e.keyCode===o.ENTER&&p(e,i)},onMouseMove:a?null:function(e){v(e,i)},role:"radio","aria-checked":d>i?"true":"false","aria-posinset":i+1,"aria-setsize":u,tabIndex:a?-1:0},n.createElement("div",{className:"".concat(l,"-first")},g),n.createElement("div",{className:"".concat(l,"-second")},g)));return c&&(b=c(b,e)),b}const H=n.forwardRef(k);var S=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function z(t,d){var f,m,v=t.prefixCls,p=void 0===v?"rc-rate":v,x=t.className,h=t.defaultValue,g=t.value,b=t.count,y=void 0===b?5:b,w=t.allowHalf,j=void 0!==w&&w,C=t.allowClear,N=void 0===C||C,E=t.character,R=void 0===E?"★":E,O=t.characterRender,k=t.disabled,z=t.direction,D=void 0===z?"ltr":z,$=t.tabIndex,L=void 0===$?0:$,M=t.autoFocus,T=t.onHoverChange,I=t.onChange,B=t.onFocus,F=t.onBlur,W=t.onKeyDown,P=t.onMouseLeave,V=l(t,S),X=(m=e.useRef({}),[function(e){return m.current[e]},function(e){return function(t){m.current[e]=t}}]),A=s(X,2),K=A[0],G=A[1],_=n.useRef(null),Q=function(){var e;k||(null===(e=_.current)||void 0===e||e.focus())};n.useImperativeHandle(d,(function(){return{focus:Q,blur:function(){var e;k||(null===(e=_.current)||void 0===e||e.blur())}}}));var U=c(h||0,{value:g}),Y=s(U,2),q=Y[0],J=Y[1],Z=c(null),ee=s(Z,2),te=ee[0],ae=ee[1],ne=function(e,t){var a,n,r,o,l="rtl"===D,s=e+1;if(j){var c=K(e),i=(n=function(e){var t,a,n=e.ownerDocument,r=n.body,o=n&&n.documentElement,l=e.getBoundingClientRect();return t=l.left,a=l.top,{left:t-=o.clientLeft||r.clientLeft||0,top:a-=o.clientTop||r.clientTop||0}}(a=c),r=a.ownerDocument,o=r.defaultView||r.parentWindow,n.left+=function(e){var t=e.pageXOffset,a="scrollLeft";if("number"!=typeof t){var n=e.document;"number"!=typeof(t=n.documentElement[a])&&(t=n.body[a])}return t}(o),n.left),u=c.clientWidth;(l&&t-i>u/2||!l&&t-i<u/2)&&(s-=.5)}return s},re=function(e){J(e),null==I||I(e)},oe=n.useState(!1),le=s(oe,2),se=le[0],ce=le[1],ie=n.useState(null),ue=s(ie,2),de=ue[0],fe=ue[1],me=function(e,t){var a=ne(t,e.pageX);a!==te&&(fe(a),ae(null)),null==T||T(a)},ve=function(e){k||(fe(null),ae(null),null==T||T(void 0)),e&&(null==P||P(e))},pe=function(e,t){var a=ne(t,e.pageX),n=!1;N&&(n=a===q),ve(),re(n?0:a),ae(n?a:null)};n.useEffect((function(){M&&!k&&Q()}),[]);var xe=new Array(y).fill(0).map((function(e,t){return n.createElement(H,{ref:G(t),index:t,count:y,disabled:k,prefixCls:"".concat(p,"-star"),allowHalf:j,value:null===de?q:de,onClick:pe,onHover:me,key:e||t,character:R,characterRender:O,focused:se})})),he=r(p,x,(i(f={},"".concat(p,"-disabled"),k),i(f,"".concat(p,"-rtl"),"rtl"===D),f));return n.createElement("ul",a({className:he,onMouseLeave:ve,tabIndex:k?-1:L,onFocus:k?null:function(){ce(!0),null==B||B()},onBlur:k?null:function(){ce(!1),null==F||F()},onKeyDown:k?null:function(e){var t=e.keyCode,a="rtl"===D,n=q;t===o.RIGHT&&n<y&&!a?(re(n+=j?.5:1),e.preventDefault()):t===o.LEFT&&n>0&&!a||t===o.RIGHT&&n>0&&a?(re(n-=j?.5:1),e.preventDefault()):t===o.LEFT&&n<y&&a&&(re(n+=j?.5:1),e.preventDefault()),null==W||W(e)},ref:_,role:"radiogroup"},u(V,{aria:!0,data:!0,attr:!0})),xe)}const D=n.forwardRef(z),$=e=>{const{componentCls:t}=e;return{[`${t}-star`]:{position:"relative",display:"inline-block",color:"inherit",cursor:"pointer","&:not(:last-child)":{marginInlineEnd:e.marginXS},"> div":{transition:`all ${e.motionDurationMid}, outline 0s`,"&:hover":{transform:e.starHoverScale},"&:focus":{outline:0},"&:focus-visible":{outline:`${v(e.lineWidth)} dashed ${e.starColor}`,transform:e.starHoverScale}},"&-first, &-second":{color:e.starBg,transition:`all ${e.motionDurationMid}`,userSelect:"none"},"&-first":{position:"absolute",top:0,insetInlineStart:0,width:"50%",height:"100%",overflow:"hidden",opacity:0},[`&-half ${t}-star-first, &-half ${t}-star-second`]:{opacity:1},[`&-half ${t}-star-first, &-full ${t}-star-second`]:{color:"inherit"}}}},L=e=>({[`&-rtl${e.componentCls}`]:{direction:"rtl"}}),M=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},m(e)),{display:"inline-block",margin:0,padding:0,color:e.starColor,fontSize:e.starSize,lineHeight:1,listStyle:"none",outline:"none",[`&-disabled${t} ${t}-star`]:{cursor:"default","> div:hover":{transform:"scale(1)"}}}),$(e)),L(e))}},T=d("Rate",(e=>{const t=f(e,{});return[M(t)]}),(e=>({starColor:e.yellow6,starSize:.5*e.controlHeightLG,starHoverScale:"scale(1.1)",starBg:e.colorFillContent})));var I=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};const B=e.forwardRef(((t,a)=>{const{prefixCls:n,className:o,rootClassName:l,style:s,tooltips:c,character:i=e.createElement(O,null)}=t,u=I(t,["prefixCls","className","rootClassName","style","tooltips","character"]),{getPrefixCls:d,direction:f,rate:m}=e.useContext(p),v=d("rate",n),[h,g,b]=T(v),y=Object.assign(Object.assign({},null==m?void 0:m.style),s);return h(e.createElement(D,Object.assign({ref:a,character:i,characterRender:(t,a)=>{let{index:n}=a;return c?e.createElement(x,{title:c[n]},t):t}},u,{className:r(o,l,g,b,null==m?void 0:m.className),style:y,prefixCls:v,direction:f})))}));function F(e){return g.jsx(W,{children:g.jsx(B,{character:g.jsx(b,{icon:"solar:star-bold",size:18}),...e})})}const W=h.div`
  .ant-rate {
    color: rgb(250, 175, 0);
    .ant-rate-star:not(:last-child) {
      margin-inline-end: 0;
    }
  }
`,P=[{logo:g.jsx(b,{icon:"logos:chrome",size:24}),title:"Chrome",platform:"Mac",type:"free",star:4,reviews:"9.91k"},{logo:g.jsx(b,{icon:"logos:google-drive",size:24}),title:"Drive",platform:"Mac",type:"free",star:3.5,reviews:"1.95k"},{logo:g.jsx(b,{icon:"logos:dropbox",size:24}),title:"Dropbox",platform:"Windows",type:"$66.71",star:4.5,reviews:"9.12k"},{logo:g.jsx(b,{icon:"logos:slack-icon",size:24}),title:"Slack",platform:"Mac",type:"free",star:3.5,reviews:"6.98k"},{logo:g.jsx(b,{icon:"logos:discord-icon",size:24}),title:"Discord",platform:"Windows",type:"$52.17",star:.5,reviews:"8.49k"}];function V(){const e=y();return g.jsxs(N,{className:"flex-col",children:[g.jsx("header",{className:"self-start",children:g.jsx(w.Title,{level:5,children:"Top Related Applications"})}),g.jsx("main",{className:"w-full",children:g.jsx(j,{children:P.map((t=>g.jsxs("div",{className:"mb-4 flex",children:[g.jsx("div",{className:"mr-2 flex items-center justify-center",style:{background:e.colorBorderSecondary,borderRadius:"12px",width:"48px",height:"48px"},children:t.logo}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("span",{className:"font-medium",children:t.title}),g.jsxs("div",{className:"flex items-center justify-center text-gray",children:["Mac"===t.platform?g.jsx(b,{icon:"wpf:mac-os",size:12}):g.jsx(b,{icon:"mingcute:windows-fill",size:12}),g.jsx("span",{className:"mx-1 text-xs font-light",children:t.platform}),g.jsx(C,{color:"free"===t.type?"green":"red",children:t.type})]})]}),g.jsxs("div",{className:"ml-auto flex flex-col self-center",children:[g.jsx(F,{allowHalf:!0,disabled:!0,defaultValue:t.star}),g.jsxs("span",{className:"mt-1 text-right text-xs text-gray-400",children:[t.reviews,"reviews"]})]})]},t.title)))})})]})}export{V as default};