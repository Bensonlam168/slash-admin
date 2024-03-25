import{r as e,b3 as t,b5 as n,b4 as o,c3 as r,aJ as a,G as i,K as c,c4 as l,aj as s,b2 as u,R as m,p as f,c5 as d,ax as p,bq as g,ar as v,A as h,B as w,c0 as b,aa as C,c6 as S,c7 as x,b_ as y,bE as E,O as N,bj as I,bi as k,E as R,bn as M,aL as O,c1 as z}from"./index-89612953.js";import{g as j,a as L,b as P}from"./addEventListener-4a8d7b05.js";var T=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],A=e.createContext(null),$=0;function D(n){var o=n.src,r=n.isCustomPlaceholder,a=n.fallback,i=e.useState(r?"loading":"normal"),c=t(i,2),l=c[0],s=c[1],u=e.useRef(!1),m="error"===l;e.useEffect((function(){(function(e){return new Promise((function(t){var n=document.createElement("img");n.onerror=function(){return t(!1)},n.onload=function(){return t(!0)},n.src=e}))})(o).then((function(e){e||s("error")}))}),[o]),e.useEffect((function(){r&&!u.current?s("loading"):m&&s("normal")}),[o]);var f=function(){s("normal")};return[function(e){u.current=!1,"loading"===l&&null!=e&&e.complete&&(e.naturalWidth||e.naturalHeight)&&(u.current=!0,f())},m&&a?{src:a}:{onLoad:f,src:o},l]}function Y(e,t,n,r){var a=t+n,i=(n-r)/2;if(n>r){if(t>0)return o({},e,i);if(t<0&&a<r)return o({},e,-i)}else if(t<0||a>r)return o({},e,t<0?i:-i);return{}}var X={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};var H=function(t){var r=t.visible,a=t.maskTransitionName,u=t.getContainer,m=t.prefixCls,f=t.rootClassName,d=t.icons,p=t.countRender,g=t.showSwitch,v=t.showProgress,h=t.current,w=t.transform,b=t.count,C=t.scale,S=t.minScale,x=t.maxScale,y=t.closeIcon,E=t.onSwitchLeft,N=t.onSwitchRight,I=t.onClose,k=t.onZoomIn,R=t.onZoomOut,M=t.onRotateRight,O=t.onRotateLeft,z=t.onFlipX,j=t.onFlipY,L=t.toolbarRender,P=e.useContext(A),T=d.rotateLeft,$=d.rotateRight,D=d.zoomIn,Y=d.zoomOut,X=d.close,H=d.left,B=d.right,Z=d.flipX,W=d.flipY,V="".concat(m,"-operations-operation");e.useEffect((function(){var e=function(e){e.keyCode===s.ESC&&I()};return r&&window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);var F=[{icon:W,onClick:j,type:"flipY"},{icon:Z,onClick:z,type:"flipX"},{icon:T,onClick:O,type:"rotateLeft"},{icon:$,onClick:M,type:"rotateRight"},{icon:Y,onClick:R,type:"zoomOut",disabled:C===S},{icon:D,onClick:k,type:"zoomIn",disabled:C===x}].map((function(t){var n,r=t.icon,a=t.onClick,c=t.type,l=t.disabled;return e.createElement("div",{className:i(V,(n={},o(n,"".concat(m,"-operations-operation-").concat(c),!0),o(n,"".concat(m,"-operations-operation-disabled"),!!l),n)),onClick:a,key:c},r)})),G=e.createElement("div",{className:"".concat(m,"-operations")},F);return e.createElement(c,{visible:r,motionName:a},(function(t){var r=t.className,a=t.style;return e.createElement(l,{open:!0,getContainer:null!=u?u:document.body},e.createElement("div",{className:i("".concat(m,"-operations-wrapper"),r,f),style:a},null===y?null:e.createElement("button",{className:"".concat(m,"-close"),onClick:I},y||X),g&&e.createElement(e.Fragment,null,e.createElement("div",{className:i("".concat(m,"-switch-left"),o({},"".concat(m,"-switch-left-disabled"),0===h)),onClick:E},H),e.createElement("div",{className:i("".concat(m,"-switch-right"),o({},"".concat(m,"-switch-right-disabled"),h===b-1)),onClick:N},B)),e.createElement("div",{className:"".concat(m,"-footer")},v&&e.createElement("div",{className:"".concat(m,"-progress")},p?p(h+1,b):"".concat(h+1," / ").concat(b)),L?L(G,n({icons:{flipYIcon:F[0],flipXIcon:F[1],rotateLeftIcon:F[2],rotateRightIcon:F[3],zoomOutIcon:F[4],zoomInIcon:F[5]},actions:{onFlipY:j,onFlipX:z,onRotateLeft:O,onRotateRight:M,onZoomOut:R,onZoomIn:k},transform:w},P?{current:h,total:b}:{})):G)))}))},B=["fallback","src","imgRef"],Z=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],W=function(e){var n=e.fallback,o=e.src,r=e.imgRef,a=u(e,B),i=D({src:o,fallback:n}),c=t(i,2),l=c[0],s=c[1];return m.createElement("img",f({ref:function(e){r.current=e,l(e)}},a,s))},V=function(c){var l=c.prefixCls,p=c.src,g=c.alt,v=c.fallback,h=c.movable,w=void 0===h||h,b=c.onClose,C=c.visible,S=c.icons,x=void 0===S?{}:S,y=c.rootClassName,E=c.closeIcon,N=c.getContainer,I=c.current,k=void 0===I?0:I,R=c.count,M=void 0===R?1:R,O=c.countRender,z=c.scaleStep,P=void 0===z?.5:z,T=c.minScale,$=void 0===T?1:T,D=c.maxScale,B=void 0===D?50:D,V=c.transitionName,F=void 0===V?"zoom":V,G=c.maskTransitionName,_=void 0===G?"fade":G,U=c.imageRender,Q=c.imgCommonProps,J=c.toolbarRender,q=c.onTransform,K=c.onChange,ee=u(c,Z),te=e.useRef(),ne=e.useRef({deltaX:0,deltaY:0,transformX:0,transformY:0}),oe=e.useState(!1),re=t(oe,2),ae=re[0],ie=re[1],ce=e.useContext(A),le=ce&&M>1,se=ce&&M>=1,ue=function(o,i,c,l){var s=e.useRef(null),u=e.useRef([]),m=e.useState(X),f=t(m,2),d=f[0],p=f[1],g=function(e,t){null===s.current&&(u.current=[],s.current=a((function(){p((function(e){var o=e;return u.current.forEach((function(e){o=n(n({},o),e)})),s.current=null,null==l||l({transform:o,action:t}),o}))}))),u.current.push(n(n({},d),e))};return{transform:d,resetTransform:function(e){p(X),l&&!r(X,d)&&l({transform:X,action:e})},updateTransform:g,dispatchZoomChange:function(e,t,n,r){var a=o.current,l=a.width,s=a.height,u=a.offsetWidth,m=a.offsetHeight,f=a.offsetLeft,p=a.offsetTop,v=e,h=d.scale*e;h>c?(v=c/d.scale,h=c):h<i&&(v=i/d.scale,h=i);var w=null!=n?n:innerWidth/2,b=null!=r?r:innerHeight/2,C=v-1,S=C*l*.5,x=C*s*.5,y=C*(w-d.x-f),E=C*(b-d.y-p),N=d.x-(y-S),I=d.y-(E-x);if(e<1&&1===h){var k=u*h,R=m*h,M=j(),O=M.width,z=M.height;k<=O&&R<=z&&(N=0,I=0)}g({x:N,y:I,scale:h},t)}}}(te,$,B,q),me=ue.transform,fe=ue.resetTransform,de=ue.updateTransform,pe=ue.dispatchZoomChange,ge=e.useState(!0),ve=t(ge,2),he=ve[0],we=ve[1],be=me.rotate,Ce=me.scale,Se=me.x,xe=me.y,ye=i(o({},"".concat(l,"-moving"),ae));e.useEffect((function(){he||we(!0)}),[he]);var Ee=function(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),k>0&&(we(!1),fe("prev"),null==K||K(k-1,k))},Ne=function(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),k<M-1&&(we(!1),fe("next"),null==K||K(k+1,k))},Ie=function(){if(C&&ae){ie(!1);var e=ne.current,t=e.transformX,o=e.transformY;if(!(Se!==t&&xe!==o))return;var r=te.current.offsetWidth*Ce,a=te.current.offsetHeight*Ce,i=te.current.getBoundingClientRect(),c=i.left,l=i.top,s=be%180!=0,u=function(e,t,o,r){var a=j(),i=a.width,c=a.height,l=null;return e<=i&&t<=c?l={x:0,y:0}:(e>i||t>c)&&(l=n(n({},Y("x",o,e,i)),Y("y",r,t,c))),l}(s?a:r,s?r:a,c,l);u&&de(n({},u),"dragRebound")}},ke=function(e){C&&ae&&de({x:e.pageX-ne.current.deltaX,y:e.pageY-ne.current.deltaY},"move")},Re=function(e){C&&le&&(e.keyCode===s.LEFT?Ee():e.keyCode===s.RIGHT&&Ne())};e.useEffect((function(){var e,t,n,o;if(w){n=L(window,"mouseup",Ie,!1),o=L(window,"mousemove",ke,!1);try{window.top!==window.self&&(e=L(window.top,"mouseup",Ie,!1),t=L(window.top,"mousemove",ke,!1))}catch(r){}}return function(){var r,a,i,c;null===(r=n)||void 0===r||r.remove(),null===(a=o)||void 0===a||a.remove(),null===(i=e)||void 0===i||i.remove(),null===(c=t)||void 0===c||c.remove()}}),[C,ae,Se,xe,be,w]),e.useEffect((function(){var e=L(window,"keydown",Re,!1);return function(){e.remove()}}),[C,le,k]);var Me=m.createElement(W,f({},Q,{width:c.width,height:c.height,imgRef:te,className:"".concat(l,"-img"),alt:g,style:{transform:"translate3d(".concat(me.x,"px, ").concat(me.y,"px, 0) scale3d(").concat(me.flipX?"-":"").concat(Ce,", ").concat(me.flipY?"-":"").concat(Ce,", 1) rotate(").concat(be,"deg)"),transitionDuration:!he&&"0s"},fallback:v,src:p,onWheel:function(e){if(C&&0!=e.deltaY){var t=Math.abs(e.deltaY/100),n=1+Math.min(t,1)*P;e.deltaY>0&&(n=1/n),pe(n,"wheel",e.clientX,e.clientY)}},onMouseDown:function(e){w&&0===e.button&&(e.preventDefault(),e.stopPropagation(),ne.current={deltaX:e.pageX-me.x,deltaY:e.pageY-me.y,transformX:me.x,transformY:me.y},ie(!0))},onDoubleClick:function(e){C&&(1!==Ce?de({x:0,y:0,scale:1},"doubleClick"):pe(1+P,"doubleClick",e.clientX,e.clientY))}}));return m.createElement(m.Fragment,null,m.createElement(d,f({transitionName:F,maskTransitionName:_,closable:!1,keyboard:!0,prefixCls:l,onClose:b,visible:C,wrapClassName:ye,rootClassName:y,getContainer:N},ee,{afterClose:function(){fe("close")}}),m.createElement("div",{className:"".concat(l,"-img-wrapper")},U?U(Me,n({transform:me},ce?{current:k}:{})):Me)),m.createElement(H,{visible:C,transform:me,maskTransitionName:_,closeIcon:E,getContainer:N,prefixCls:l,rootClassName:y,icons:x,countRender:O,showSwitch:le,showProgress:se,current:k,count:M,scale:Ce,minScale:$,maxScale:B,toolbarRender:J,onSwitchLeft:Ee,onSwitchRight:Ne,onZoomIn:function(){pe(1+P,"zoomIn")},onZoomOut:function(){pe(1/(1+P),"zoomOut")},onRotateRight:function(){de({rotate:be+90},"rotateRight")},onRotateLeft:function(){de({rotate:be-90},"rotateLeft")},onFlipX:function(){de({flipX:!me.flipX},"flipX")},onFlipY:function(){de({flipY:!me.flipY},"flipY")},onClose:b}))};var F=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],G=["src"],_=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],U=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Q=function(r){var a=r.src,c=r.alt,l=r.onPreviewClose,s=r.prefixCls,m=void 0===s?"rc-image":s,d=r.previewPrefixCls,p=void 0===d?"".concat(m,"-preview"):d,h=r.placeholder,w=r.fallback,b=r.width,C=r.height,S=r.style,x=r.preview,y=void 0===x||x,E=r.className,N=r.onClick,I=r.onError,k=r.wrapperClassName,R=r.wrapperStyle,M=r.rootClassName,O=u(r,_),z=h&&!0!==h,j="object"===g(y)?y:{},L=j.src,Y=j.visible,X=void 0===Y?void 0:Y,H=j.onVisibleChange,B=void 0===H?l:H,Z=j.getContainer,W=void 0===Z?void 0:Z,F=j.mask,G=j.maskClassName,Q=j.movable,J=j.icons,q=j.scaleStep,K=j.minScale,ee=j.maxScale,te=j.imageRender,ne=j.toolbarRender,oe=u(j,U),re=null!=L?L:a,ae=v(!!X,{value:X,onChange:B}),ie=t(ae,2),ce=ie[0],le=ie[1],se=D({src:a,isCustomPlaceholder:z,fallback:w}),ue=t(se,3),me=ue[0],fe=ue[1],de=ue[2],pe=e.useState(null),ge=t(pe,2),ve=ge[0],he=ge[1],we=e.useContext(A),be=!!y,Ce=i(m,k,M,o({},"".concat(m,"-error"),"error"===de)),Se=e.useMemo((function(){var e={};return T.forEach((function(t){void 0!==r[t]&&(e[t]=r[t])})),e}),T.map((function(e){return r[e]}))),xe=function(n,o){var r=e.useState((function(){return String($+=1)})),a=t(r,1)[0],i=e.useContext(A),c={data:o,canPreview:n};return e.useEffect((function(){if(i)return i.register(a,c)}),[]),e.useEffect((function(){i&&i.register(a,c)}),[n,o]),a}(be,e.useMemo((function(){return n(n({},Se),{},{src:re})}),[re,Se]));return e.createElement(e.Fragment,null,e.createElement("div",f({},O,{className:Ce,onClick:be?function(e){var t=P(e.target),n=t.left,o=t.top;we?we.onPreview(xe,n,o):(he({x:n,y:o}),le(!0)),null==N||N(e)}:N,style:n({width:b,height:C},R)}),e.createElement("img",f({},Se,{className:i("".concat(m,"-img"),o({},"".concat(m,"-img-placeholder"),!0===h),E),style:n({height:C},S),ref:me},fe,{width:b,height:C,onError:I})),"loading"===de&&e.createElement("div",{"aria-hidden":"true",className:"".concat(m,"-placeholder")},h),F&&be&&e.createElement("div",{className:i("".concat(m,"-mask"),G),style:{display:"none"===(null==S?void 0:S.display)?"none":void 0}},F)),!we&&be&&e.createElement(V,f({"aria-hidden":!ce,visible:ce,prefixCls:p,onClose:function(){le(!1),he(null)},mousePosition:ve,src:re,alt:c,fallback:w,getContainer:W,icons:J,movable:Q,scaleStep:q,minScale:K,maxScale:ee,rootClassName:M,imageRender:te,imgCommonProps:Se,toolbarRender:ne},oe)))};Q.PreviewGroup=function(r){var a,i=r.previewPrefixCls,c=void 0===i?"rc-image-preview":i,l=r.children,s=r.icons,m=void 0===s?{}:s,d=r.items,h=r.preview,w=r.fallback,b="object"===g(h)?h:{},C=b.visible,S=b.onVisibleChange,x=b.getContainer,y=b.current,E=b.movable,N=b.minScale,I=b.maxScale,k=b.countRender,R=b.closeIcon,M=b.onChange,O=b.onTransform,z=b.toolbarRender,j=b.imageRender,L=u(b,F),P=function(r){var a=e.useState({}),i=t(a,2),c=i[0],l=i[1],s=e.useCallback((function(e,t){return l((function(r){return n(n({},r),{},o({},e,t))})),function(){l((function(t){var o=n({},t);return delete o[e],o}))}}),[]);return[e.useMemo((function(){return r?r.map((function(e){if("string"==typeof e)return{data:{src:e}};var t={};return Object.keys(e).forEach((function(n){["src"].concat(p(T)).includes(n)&&(t[n]=e[n])})),{data:t}})):Object.keys(c).reduce((function(e,t){var n=c[t],o=n.canPreview,r=n.data;return o&&e.push({data:r,id:t}),e}),[])}),[r,c]),s]}(d),$=t(P,2),D=$[0],Y=$[1],X=v(0,{value:y}),H=t(X,2),B=H[0],Z=H[1],W=e.useState(!1),_=t(W,2),U=_[0],Q=_[1],J=(null===(a=D[B])||void 0===a?void 0:a.data)||{},q=J.src,K=u(J,G),ee=v(!!C,{value:C,onChange:function(e,t){null==S||S(e,t,B)}}),te=t(ee,2),ne=te[0],oe=te[1],re=e.useState(null),ae=t(re,2),ie=ae[0],ce=ae[1],le=e.useCallback((function(e,t,n){var o=D.findIndex((function(t){return t.id===e}));oe(!0),ce({x:t,y:n}),Z(o<0?0:o),Q(!0)}),[D]);e.useEffect((function(){ne?U||Z(0):Q(!1)}),[ne]);var se=e.useMemo((function(){return{register:Y,onPreview:le}}),[Y,le]);return e.createElement(A.Provider,{value:se},l,e.createElement(V,f({"aria-hidden":!ne,movable:E,visible:ne,prefixCls:c,closeIcon:R,onClose:function(){oe(!1),ce(null)},mousePosition:ie,imgCommonProps:K,src:q,fallback:w,icons:m,minScale:N,maxScale:I,getContainer:x,current:B,count:D.length,countRender:k,onTransform:O,toolbarRender:z,imageRender:j,onChange:function(e,t){Z(e),null==M||M(e,t)}},L)))},Q.displayName="Image";const J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};var q=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:J}))};const K=e.forwardRef(q);const ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};var te=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:ee}))};const ne=e.forwardRef(te);const oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};var re=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:oe}))};const ae=e.forwardRef(re);const ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};var ce=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:ie}))};const le=e.forwardRef(ce);const se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};var ue=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:se}))};const me=e.forwardRef(ue),fe=e=>({position:e||"absolute",inset:0}),de=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:o,marginXXS:r,prefixCls:a,colorTextLightSolid:i}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:i,background:new b("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${a}-mask-info`]:Object.assign(Object.assign({},E),{padding:`0 ${o}px`,[t]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},pe=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:o,marginXL:r,margin:a,paddingLG:i,previewOperationColorDisabled:c,previewOperationHoverColor:l,motionDurationSlow:s,iconCls:u,colorTextLightSolid:m}=e,f=new b(n).setAlpha(.1),d=f.clone().setAlpha(.2);return{[`${t}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:e.previewOperationColor},[`${t}-progress`]:{marginBottom:a},[`${t}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:m,backgroundColor:f.toRgbString(),borderRadius:"50%",padding:o,outline:0,border:0,cursor:"pointer",transition:`all ${s}`,"&:hover":{backgroundColor:d.toRgbString()},[`& > ${u}`]:{fontSize:e.previewOperationSize}},[`${t}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${i}px`,backgroundColor:f.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:o,padding:o,cursor:"pointer",transition:`all ${s}`,userSelect:"none",[`&:not(${t}-operations-operation-disabled):hover > ${u}`]:{color:l},"&-disabled":{color:c,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${u}`]:{fontSize:e.previewOperationSize}}}}},ge=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:o,previewCls:r,zIndexPopup:a,motionDurationSlow:i}=e,c=new b(t).setAlpha(.1),l=c.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:a+1,display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:-e.imagePreviewSwitchSize/2,color:e.previewOperationColor,background:c.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${i}`,userSelect:"none","&:hover":{background:l.toRgbString()},"&-disabled":{"&, &:hover":{color:o,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:e.marginSM},[`${r}-switch-right`]:{insetInlineEnd:e.marginSM}}},ve=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:o,componentCls:r}=e;return[{[`${r}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},fe()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${o} ${t} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},fe()),{transition:`transform ${o} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:e.zIndexPopup+1},"&":[pe(e),ge(e)]}]},he=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:Object.assign({},de(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:Object.assign({},fe())}}},we=e=>{const{previewCls:t}=e;return{[`${t}-root`]:x(e,"zoom"),"&":y(e,!0)}},be=w("Image",(e=>{const t=`${e.componentCls}-preview`,n=C(e,{previewCls:t,modalMaskBg:new b("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[he(n),ve(n),S(C(n,{componentCls:t})),we(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new b(e.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new b(e.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new b(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:1.5*e.fontSizeIcon})));var Ce=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Se={rotateLeft:e.createElement(K,null),rotateRight:e.createElement(ne,null),zoomIn:e.createElement(le,null),zoomOut:e.createElement(me,null),close:e.createElement(N,null),left:e.createElement(I,null),right:e.createElement(k,null),flipX:e.createElement(ae,null),flipY:e.createElement(ae,{rotate:90})},xe=t=>{var{previewPrefixCls:n,preview:o}=t,r=Ce(t,["previewPrefixCls","preview"]);const{getPrefixCls:a}=e.useContext(R),c=a("image",n),l=`${c}-preview`,s=a(),[u,m]=be(c),f=e.useMemo((()=>{var e;if(!1===o)return o;const t="object"==typeof o?o:{},n=i(m,null!==(e=t.rootClassName)&&void 0!==e?e:"");return Object.assign(Object.assign({},t),{transitionName:M(s,"zoom",t.transitionName),maskTransitionName:M(s,"fade",t.maskTransitionName),rootClassName:n})}),[o]);return u(e.createElement(Q.PreviewGroup,Object.assign({preview:f,previewPrefixCls:l,icons:Se},r)))};var ye=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Ee=t=>{const{prefixCls:n,preview:o,className:r,rootClassName:a,style:c}=t,l=ye(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:s,locale:u=O,getPopupContainer:m,image:f}=e.useContext(R),d=s("image",n),p=s(),g=u.Image||O.Image,[v,h]=be(d),w=i(a,h),b=i(r,h,null==f?void 0:f.className),C=e.useMemo((()=>{if(!1===o)return o;const t="object"==typeof o?o:{},{getContainer:n}=t,r=ye(t,["getContainer"]);return Object.assign(Object.assign({mask:e.createElement("div",{className:`${d}-mask-info`},e.createElement(z,null),null==g?void 0:g.preview),icons:Se},r),{getContainer:n||m,transitionName:M(p,"zoom",t.transitionName),maskTransitionName:M(p,"fade",t.maskTransitionName)})}),[o,g]),S=Object.assign(Object.assign({},null==f?void 0:f.style),c);return v(e.createElement(Q,Object.assign({prefixCls:d,preview:C,rootClassName:w,className:b,style:S},l)))};Ee.PreviewGroup=xe;const Ne=Ee;export{Ne as I};