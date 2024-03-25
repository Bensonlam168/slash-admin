import{r as e,B as t,aa as n,D as s,E as a,G as l,ab as r,ac as o,ad as i,u as c,a1 as m,a3 as u,j as d,a7 as p,a8 as f}from"./index-89612953.js";import{ReturnButton as g}from"./ReturnButton-76ae8076.js";import{F as x}from"./index-ce1c93de.js";import{R as j,C as h}from"./row-d2d19eb0.js";const S=t=>{const{value:n,formatter:s,precision:a,decimalSeparator:l,groupSeparator:r="",prefixCls:o}=t;let i;if("function"==typeof s)i=s(n);else{const t=String(n),s=t.match(/^(-?)(\d*)(\.(\d+))?$/);if(s&&"-"!==t){const t=s[1];let n=s[2]||"0",c=s[4]||"";n=n.replace(/\B(?=(\d{3})+(?!\d))/g,r),"number"==typeof a&&(c=c.padEnd(a,"0").slice(0,a>0?a:0)),c&&(c=`${l}${c}`),i=[e.createElement("span",{key:"int",className:`${o}-content-value-int`},t,n),c&&e.createElement("span",{key:"decimal",className:`${o}-content-value-decimal`},c)]}else i=t}return e.createElement("span",{className:`${o}-content-value`},i)},y=e=>{const{componentCls:t,marginXXS:n,padding:a,colorTextDescription:l,titleFontSize:r,colorTextHeading:o,contentFontSize:i,fontFamily:c}=e;return{[`${t}`]:Object.assign(Object.assign({},s(e)),{[`${t}-title`]:{marginBottom:n,color:l,fontSize:r},[`${t}-skeleton`]:{paddingTop:a},[`${t}-content`]:{color:o,fontSize:i,fontFamily:c,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:n},[`${t}-content-suffix`]:{marginInlineStart:n}}})}},v=t("Statistic",(e=>{const t=n(e,{});return[y(t)]}),(e=>{const{fontSizeHeading3:t,fontSize:n}=e;return{titleFontSize:n,contentFontSize:t}})),b=t=>{const{prefixCls:n,className:s,rootClassName:o,style:i,valueStyle:c,value:m=0,title:u,valueRender:d,prefix:p,suffix:f,loading:g=!1,onMouseEnter:x,onMouseLeave:j,decimalSeparator:h=".",groupSeparator:y=","}=t,{getPrefixCls:b,direction:$,statistic:N}=e.useContext(a),E=b("statistic",n),[C,w]=v(E),F=e.createElement(S,Object.assign({decimalSeparator:h,groupSeparator:y,prefixCls:E},t,{value:m})),D=l(E,{[`${E}-rtl`]:"rtl"===$},null==N?void 0:N.className,s,o,w);return C(e.createElement("div",{className:D,style:Object.assign(Object.assign({},null==N?void 0:N.style),i),onMouseEnter:x,onMouseLeave:j},u&&e.createElement("div",{className:`${E}-title`},u),e.createElement(r,{paragraph:!1,loading:g,className:`${E}-skeleton`},e.createElement("div",{style:c,className:`${E}-content`},p&&e.createElement("span",{className:`${E}-content-prefix`},p),d?d(F):F,f&&e.createElement("span",{className:`${E}-content-suffix`},f)))))},$=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function N(e,t){const{format:n=""}=t,s=new Date(e).getTime(),a=Date.now();return function(e,t){let n=e;const s=/\[[^\]]*]/g,a=(t.match(s)||[]).map((e=>e.slice(1,-1))),l=t.replace(s,"[]"),r=$.reduce(((e,t)=>{let[s,a]=t;if(e.includes(s)){const t=Math.floor(n/a);return n-=t*a,e.replace(new RegExp(`${s}+`,"g"),(e=>{const n=e.length;return t.toString().padStart(n,"0")}))}return e}),l);let o=0;return r.replace(s,(()=>{const e=a[o];return o+=1,e}))}(Math.max(s-a,0),n)}const E=t=>{const{value:n,format:s="HH:mm:ss",onChange:a,onFinish:l}=t,r=o(),c=e.useRef(null),m=()=>{const e=function(e){return new Date(e).getTime()}(n);e>=Date.now()&&(c.current=setInterval((()=>{r(),null==a||a(e-Date.now()),e<Date.now()&&(null==l||l(),c.current&&(clearInterval(c.current),c.current=null))}),33.333333333333336))};e.useEffect((()=>(m(),()=>{c.current&&(clearInterval(c.current),c.current=null)})),[n]);return e.createElement(b,Object.assign({},t,{valueRender:e=>i(e,{title:void 0}),formatter:(e,t)=>N(e,Object.assign(Object.assign({},t),{format:s}))}))},C=e.memo(E);b.Countdown=C;const{Countdown:w}=b;function F(){const{t:t}=c(),[n,s]=e.useState(0),[a,l]=e.useState(0),{loginState:r,backToLogin:o}=m();if(r!==u.MOBILE)return null;const i=()=>{s(0),l(60)};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"mb-4 text-2xl font-bold xl:text-3xl",children:t("sys.login.mobileSignInFormTitle")}),d.jsxs(x,{name:"normal_login",size:"large",initialValues:{remember:!0},onFinish:e=>{},children:[d.jsx(x.Item,{name:"phone",rules:[{required:!0,message:"Please input your Phone!"}],children:d.jsx(p,{placeholder:t("sys.login.mobile")})}),d.jsx(x.Item,{name:"code",rules:[{required:!0,message:t("sys.login.mobilePlaceholder")}],children:d.jsxs(j,{justify:"space-between",children:[d.jsx(h,{span:14,children:d.jsx(p,{placeholder:t("sys.login.smsCode")})}),d.jsx(h,{span:9,flex:1,children:d.jsx(f,{disabled:0!==n,className:"w-full !text-sm",onClick:()=>{s(60),l(60)},children:0===n?d.jsx("span",{children:t("sys.login.sendSmsButton")}):d.jsxs("div",{className:"flex items-center justify-center",children:[d.jsx(w,{className:"hidden",value:Date.now()+1e3*n,onChange:e=>{s(Number(e)/1e3),l(Math.floor(Number(e)/1e3))},format:"ss",onFinish:i}),d.jsx("span",{className:"ml-1",children:t("sys.login.sendSmsText",{second:a})})]})})})]})}),d.jsx(x.Item,{children:d.jsx(f,{type:"primary",htmlType:"submit",className:"w-full",children:t("sys.login.loginButton")})}),d.jsx(g,{onClick:()=>{i(),o()}})]})]})}export{F as default};