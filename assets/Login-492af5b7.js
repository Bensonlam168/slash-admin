import{L as e,H as s,F as r,C as t,S as o,u as a,a as i,b as l,j as n,N as x,c as m,d as c,e as d}from"./index-89612953.js";import p from"./LoginForm-e1904bea.js";import j from"./MobileForm-2969d8a4.js";import f from"./QrCodeForm-b3fc6104.js";import g from"./RegisterForm-d37f1a17.js";import h from"./ResetForm-2ba3739e.js";import{T as u}from"./index-66af888a.js";import"./index-ce1c93de.js";import"./row-d2d19eb0.js";import"./index-e9dc4a1b.js";import"./index-c5ac5302.js";import"./index-035e4002.js";import"./ReturnButton-76ae8076.js";import"./ReloadOutlined-b178c5a9.js";import"./CheckOutlined-776d0ab1.js";import"./styleChecker-56624ac5.js";const E=e;E.Header=s,E.Footer=r,E.Content=t,E.Sider=o;const w=E,P=""+new URL("dashboard-63c403eb.png",import.meta.url).href,T=""+new URL("overlay_2-613a921a.jpg",import.meta.url).href,{VITE_APP_HOMEPAGE:_}={VITE_GLOB_APP_TITLE:"Vite React TS Template",VITE_APP_BASE_API:"/api",VITE_APP_HOMEPAGE:"/dashboard/workbench",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function b(){const{t:e}=a(),s=i(),{colorBgElevated:r}=l();if(s.accessToken)return n.jsx(x,{to:_,replace:!0});const t=m(r).alpha(.9).toString(),o=`linear-gradient(${t}, ${t}) center center / cover no-repeat,url(${T})`;return n.jsxs(w,{className:"relative flex !min-h-screen !w-full !flex-row",children:[n.jsxs("div",{className:"hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex",style:{background:o},children:[n.jsx("div",{className:"text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl",children:"Slash Admin"}),n.jsx("img",{className:"max-w-[480px] xl:max-w-[560px]",src:P,alt:""}),n.jsx(u.Text,{className:"flex flex-row gap-[16px] text-2xl",children:e("sys.login.signInSecondTitle")})]}),n.jsx("div",{className:"m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]",children:n.jsxs(c,{children:[n.jsx(p,{}),n.jsx(j,{}),n.jsx(f,{}),n.jsx(g,{}),n.jsx(h,{})]})}),n.jsx("div",{className:"absolute right-2 top-0",children:n.jsx(d,{})})]})}export{b as default};