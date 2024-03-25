import{r as e,b5 as t,ax as n,an as r,b2 as a,bu as o,b4 as l,by as i,b3 as c,aj as u,p as s,ar as d,bq as p,B as f,aa as h,bo as v,E as m,bl as b,G as x,aI as g,aq as C,aB as y,aA as w,bm as I,bn as E,bp as k,cV as S,j as N,cF as j,cX as L,a7 as T,cW as D}from"./index-89612953.js";import{F as M}from"./index-ce1c93de.js";import{R as O}from"./index-a0145e24.js";import{e as P,f as V,B as A,u as H,b as K,c as W,D as R,d as F}from"./useIcons-06fb10c6.js";import{a as $,c as _,T as U,i as q,g as B,S as G}from"./iconUtil-4eefa13a.js";import{g as z}from"./index-035e4002.js";import{I as X}from"./index-acfdb5c4.js";import"./row-d2d19eb0.js";import"./index-c5ac5302.js";import"./List-473a20db.js";import"./CheckOutlined-776d0ab1.js";function J(e){return!e||e.disabled||e.disableCheckbox||!1===e.checkable}function Y(e){return null==e}var Q=function(){return null},Z=["children","value"];function ee(n){return r(n).map((function(n){if(!e.isValidElement(n)||!n.type)return null;var r=n,o=r.key,l=r.props,i=l.children,c=l.value,u=a(l,Z),s=t({key:o,value:c},u),d=ee(i);return d.length&&(s.children=d),s})).filter((function(e){return e}))}function te(e){if(!e)return e;var n=t({},e);return"props"in n||Object.defineProperty(n,"props",{get:function(){return o(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),n}}),n}function ne(t){var n=e.useRef();n.current=t;var r=e.useCallback((function(){return n.current.apply(n,arguments)}),[]);return r}function re(n,r,a){return e.useMemo((function(){return n?a?function(e,n){var r=n.id,a=n.pId,o=n.rootPId,l={},i=[];return e.map((function(e){var n=t({},e),a=n[r];return l[a]=n,n.key=n.key||a,n})).forEach((function(e){var t=e[a],n=l[t];n&&(n.children=n.children||[],n.children.push(e)),(t===o||!n&&null===o)&&i.push(e)})),i}(n,t({id:"id",pId:"pId",rootPId:null},!0!==a?a:{})):n:ee(r)}),[r,a,n])}var ae=e.createContext(null),oe=e.createContext(null),le={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},ie=function(t,r){var a=P(),o=a.prefixCls,l=a.multiple,d=a.searchValue,p=a.toggleOpen,f=a.open,h=a.notFoundContent,v=e.useContext(oe),m=v.virtual,b=v.listHeight,x=v.listItemHeight,g=v.treeData,C=v.fieldNames,y=v.onSelect,w=v.dropdownMatchSelectWidth,I=v.treeExpandAction,E=e.useContext(ae),k=E.checkable,S=E.checkedKeys,N=E.halfCheckedKeys,j=E.treeExpandedKeys,L=E.treeDefaultExpandAll,T=E.treeDefaultExpandedKeys,D=E.onTreeExpand,M=E.treeIcon,O=E.showTreeIcon,V=E.switcherIcon,A=E.treeLine,H=E.treeNodeFilterProp,K=E.loadData,W=E.treeLoadedKeys,R=E.treeMotion,F=E.onTreeLoad,$=E.keyEntities,_=e.useRef(),q=i((function(){return g}),[f,g],(function(e,t){return t[0]&&e[1]!==t[1]})),B=e.useState(null),G=c(B,2),z=G[0],X=G[1],Y=$[z],Q=e.useMemo((function(){return k?{checked:S,halfChecked:N}:null}),[k,S,N]);e.useEffect((function(){var e;f&&!l&&S.length&&(null===(e=_.current)||void 0===e||e.scrollTo({key:S[0]}),X(S[0]))}),[f]);var Z=String(d).toLowerCase(),ee=e.useState(T),te=c(ee,2),ne=te[0],re=te[1],ie=e.useState(null),ce=c(ie,2),ue=ce[0],se=ce[1],de=e.useMemo((function(){return j?n(j):d?ue:ne}),[ne,ue,j,d]);e.useEffect((function(){d&&se(function(e,t){var n=[];return function e(r){r.forEach((function(r){var a=r[t.children];a&&(n.push(r[t.value]),e(a))}))}(e),n}(g,C))}),[d]);var pe=function(e){e.preventDefault()},fe=function(e,t){var n=t.node;k&&J(n)||(y(n.key,{selected:!S.includes(n.key)}),l||p(!1))};if(e.useImperativeHandle(r,(function(){var e;return{scrollTo:null===(e=_.current)||void 0===e?void 0:e.scrollTo,onKeyDown:function(e){var t;switch(e.which){case u.UP:case u.DOWN:case u.LEFT:case u.RIGHT:null===(t=_.current)||void 0===t||t.onKeyDown(e);break;case u.ENTER:if(Y){var n=(null==Y?void 0:Y.node)||{},r=n.selectable,a=n.value;!1!==r&&fe(0,{node:{key:z},selected:!S.includes(a)})}break;case u.ESC:p(!1)}},onKeyUp:function(){}}})),0===q.length)return e.createElement("div",{role:"listbox",className:"".concat(o,"-empty"),onMouseDown:pe},h);var he={fieldNames:C};return W&&(he.loadedKeys=W),de&&(he.expandedKeys=de),e.createElement("div",{onMouseDown:pe},Y&&f&&e.createElement("span",{style:le,"aria-live":"assertive"},Y.node.value),e.createElement(U,s({ref:_,focusable:!1,prefixCls:"".concat(o,"-tree"),treeData:q,height:b,itemHeight:x,virtual:!1!==m&&!1!==w,multiple:l,icon:M,showIcon:O,switcherIcon:V,showLine:A,loadData:d?null:K,motion:R,activeKey:z,checkable:k,checkStrictly:!0,checkedKeys:Q,selectedKeys:k?[]:S,defaultExpandAll:L},he,{onActiveChange:X,onSelect:fe,onCheck:fe,onExpand:function(e){re(e),se(e),D&&D(e)},onLoad:F,filterTreeNode:function(e){return!!Z&&String(e[H]).toLowerCase().includes(Z)},expandAction:I})))},ce=e.forwardRef(ie);ce.displayName="OptionList";var ue="SHOW_ALL",se="SHOW_PARENT",de="SHOW_CHILD";function pe(e,t,n,r){var a=new Set(e);return t===de?e.filter((function(e){var t=n[e];return!(t&&t.children&&t.children.some((function(e){var t=e.node;return a.has(t[r.value])}))&&t.children.every((function(e){var t=e.node;return J(t)||a.has(t[r.value])})))})):t===se?e.filter((function(e){var t=n[e],r=t?t.parent:null;return!(r&&!J(r.node)&&a.has(r.key))})):e}var fe=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];var he=e.forwardRef((function(r,i){var u,f,h=r.id,v=r.prefixCls,m=void 0===v?"rc-tree-select":v,b=r.value,x=r.defaultValue,g=r.onChange,C=r.onSelect,y=r.onDeselect,w=r.searchValue,I=r.inputValue,E=r.onSearch,k=r.autoClearSearchValue,S=void 0===k||k,N=r.filterTreeNode,j=r.treeNodeFilterProp,L=void 0===j?"value":j,T=r.showCheckedStrategy,D=r.treeNodeLabelProp,M=r.multiple,O=r.treeCheckable,P=r.treeCheckStrictly,H=r.labelInValue,K=r.fieldNames,W=r.treeDataSimpleMode,R=r.treeData,F=r.children,U=r.loadData,q=r.treeLoadedKeys,B=r.onTreeLoad,G=r.treeDefaultExpandAll,z=r.treeExpandedKeys,X=r.treeDefaultExpandedKeys,J=r.onTreeExpand,Z=r.treeExpandAction,ee=r.virtual,le=r.listHeight,ie=void 0===le?200:le,se=r.listItemHeight,he=void 0===se?20:se,ve=r.onDropdownVisibleChange,me=r.dropdownMatchSelectWidth,be=void 0===me||me,xe=r.treeLine,ge=r.treeIcon,Ce=r.showTreeIcon,ye=r.switcherIcon,we=r.treeMotion,Ie=a(r,fe),Ee=V(h),ke=O&&!P,Se=O||P,Ne=P||H,je=Se||M,Le=d(x,{value:b}),Te=c(Le,2),De=Te[0],Me=Te[1],Oe=e.useMemo((function(){return O?T||de:ue}),[T,O]),Pe=e.useMemo((function(){return function(e){var t=e||{},n=t.label,r=t.value||"value";return{_title:n?[n]:["title","label"],value:r,key:r,children:t.children||"children"}}(K)}),[JSON.stringify(K)]),Ve=d("",{value:void 0!==w?w:I,postState:function(e){return e||""}}),Ae=c(Ve,2),He=Ae[0],Ke=Ae[1],We=re(R,F,W),Re=function(n,r){return e.useMemo((function(){return _(n,{fieldNames:r,initWrapper:function(e){return t(t({},e),{},{valueEntities:new Map})},processEntity:function(e,t){var n=e.node[r.value];t.valueEntities.set(n,e)}})}),[n,r])}(We,Pe),Fe=Re.keyEntities,$e=Re.valueEntities,_e=e.useCallback((function(e){var t=[],n=[];return e.forEach((function(e){$e.has(e)?n.push(e):t.push(e)})),{missingRawValues:t,existRawValues:n}}),[$e]),Ue=function(n,r,a){var o=a.treeNodeFilterProp,i=a.filterTreeNode,c=a.fieldNames.children;return e.useMemo((function(){if(!r||!1===i)return n;var e;if("function"==typeof i)e=i;else{var a=r.toUpperCase();e=function(e,t){var n=t[o];return String(n).toUpperCase().includes(a)}}return function n(a){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.reduce((function(a,i){var u=i[c],s=o||e(r,te(i)),d=n(u||[],s);return(s||d.length)&&a.push(t(t({},i),{},l({isLeaf:void 0},c,d))),a}),[])}(n)}),[n,r,c,o,i])}(We,He,{fieldNames:Pe,treeNodeFilterProp:L,filterTreeNode:N}),qe=e.useCallback((function(e){if(e){if(D)return e[D];for(var t=Pe._title,n=0;n<t.length;n+=1){var r=e[t[n]];if(void 0!==r)return r}}}),[Pe,D]),Be=e.useCallback((function(e){var t=function(e){return Array.isArray(e)?e:void 0!==e?[e]:[]}(e);return t.map((function(e){return function(e){return!e||"object"!==p(e)}(e)?{value:e}:e}))}),[]),Ge=e.useCallback((function(e){return Be(e).map((function(e){var t,n,r=e.label,a=e.value,o=e.halfChecked,l=$e.get(a);if(l)r=null!==(n=r)&&void 0!==n?n:qe(l.node),t=l.node.disabled;else if(void 0===r){r=Be(De).find((function(e){return e.value===a})).label}return{label:r,value:a,halfChecked:o,disabled:t}}))}),[$e,qe,Be,De]),ze=e.useMemo((function(){return Be(De)}),[Be,De]),Xe=e.useMemo((function(){var e=[],t=[];return ze.forEach((function(n){n.halfChecked?t.push(n):e.push(n)})),[e,t]}),[ze]),Je=c(Xe,2),Ye=Je[0],Qe=Je[1],Ze=e.useMemo((function(){return Ye.map((function(e){return e.value}))}),[Ye]),et=function(t,r,a,o){return e.useMemo((function(){var e=t.map((function(e){return e.value})),l=r.map((function(e){return e.value})),i=e.filter((function(e){return!o[e]}));if(a){var c=$(e,!0,o);e=c.checkedKeys,l=c.halfCheckedKeys}return[Array.from(new Set([].concat(n(i),n(e)))),l]}),[t,r,a,o])}(Ye,Qe,ke,Fe),tt=c(et,2),nt=tt[0],rt=tt[1],at=e.useMemo((function(){var e=pe(nt,Oe,Fe,Pe).map((function(e){var t,n,r;return null!==(t=null===(n=Fe[e])||void 0===n||null===(r=n.node)||void 0===r?void 0:r[Pe.value])&&void 0!==t?t:e})).map((function(e){var t=Ye.find((function(t){return t.value===e}));return{value:e,label:null==t?void 0:t.label}})),n=Ge(e),r=n[0];return!je&&r&&Y(r.value)&&Y(r.label)?[]:n.map((function(e){var n;return t(t({},e),{},{label:null!==(n=e.label)&&void 0!==n?n:e.value})}))}),[Pe,je,nt,Ye,Ge,Oe,Fe]),ot=(u=at,f=e.useRef({valueLabels:new Map}),e.useMemo((function(){var e=f.current.valueLabels,n=new Map,r=u.map((function(r){var a,o=r.value,l=null!==(a=r.label)&&void 0!==a?a:e.get(o);return n.set(o,l),t(t({},r),{},{label:l})}));return f.current.valueLabels=n,[r]}),[u])),lt=c(ot,1)[0],it=ne((function(t,r,a){var l=Ge(t);if(Me(l),S&&Ke(""),g){var i=t;if(ke){var c=pe(t,Oe,Fe,Pe);i=c.map((function(e){var t=$e.get(e);return t?t.node[Pe.value]:e}))}var u=r||{triggerValue:void 0,selected:void 0},s=u.triggerValue,d=u.selected,p=i;if(P){var f=Qe.filter((function(e){return!i.includes(e.value)}));p=[].concat(n(p),n(f))}var h=Ge(p),v={preValue:Ye,triggerValue:s},m=!0;(P||"selection"===a&&!d)&&(m=!1),function(t,n,r,a,l,i){var c=null,u=null;function s(){u||(u=[],function t(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",l=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.map((function(a,s){var d="".concat(o,"-").concat(s),p=a[i.value],f=r.includes(p),h=t(a[i.children]||[],d,f),v=e.createElement(Q,a,h.map((function(e){return e.node})));if(n===p&&(c=v),f){var m={pos:d,node:v,children:h};return l||u.push(m),m}return null})).filter((function(e){return e}))}(a),u.sort((function(e,t){var n=e.node.props.value,a=t.node.props.value;return r.indexOf(n)-r.indexOf(a)})))}Object.defineProperty(t,"triggerNode",{get:function(){return o(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),s(),c}}),Object.defineProperty(t,"allCheckedNodes",{get:function(){return o(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),s(),l?u:u.map((function(e){return e.node}))}})}(v,s,t,We,m,Pe),Se?v.checked=d:v.selected=d;var b=Ne?h:h.map((function(e){return e.value}));g(je?b:b[0],Ne?null:h.map((function(e){return e.label})),v)}})),ct=e.useCallback((function(e,t){var r,a=t.selected,o=t.source,l=Fe[e],i=null==l?void 0:l.node,c=null!==(r=null==i?void 0:i[Pe.value])&&void 0!==r?r:e;if(je){var u=a?[].concat(n(Ze),[c]):nt.filter((function(e){return e!==c}));if(ke){var s,d=_e(u),p=d.missingRawValues,f=d.existRawValues.map((function(e){return $e.get(e).key}));if(a)s=$(f,!0,Fe).checkedKeys;else s=$(f,{checked:!1,halfCheckedKeys:rt},Fe).checkedKeys;u=[].concat(n(p),n(s.map((function(e){return Fe[e].node[Pe.value]}))))}it(u,{selected:a,triggerValue:c},o||"option")}else it([c],{selected:!0,triggerValue:c},"option");a||!je?null==C||C(c,te(i)):null==y||y(c,te(i))}),[_e,$e,Fe,Pe,je,Ze,it,ke,C,y,nt,rt]),ut=e.useCallback((function(e){if(ve){var t={};Object.defineProperty(t,"documentClickClose",{get:function(){return o(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),ve(e,t)}}),[ve]),st=ne((function(e,t){var n=e.map((function(e){return e.value}));"clear"!==t.type?t.values.length&&ct(t.values[0].value,{selected:!1,source:"selection"}):it(n,{},"selection")})),dt=e.useMemo((function(){return{virtual:ee,dropdownMatchSelectWidth:be,listHeight:ie,listItemHeight:he,treeData:Ue,fieldNames:Pe,onSelect:ct,treeExpandAction:Z}}),[ee,be,ie,he,Ue,Pe,ct,Z]),pt=e.useMemo((function(){return{checkable:Se,loadData:U,treeLoadedKeys:q,onTreeLoad:B,checkedKeys:nt,halfCheckedKeys:rt,treeDefaultExpandAll:G,treeExpandedKeys:z,treeDefaultExpandedKeys:X,onTreeExpand:J,treeIcon:ge,treeMotion:we,showTreeIcon:Ce,switcherIcon:ye,treeLine:xe,treeNodeFilterProp:L,keyEntities:Fe}}),[Se,U,q,B,nt,rt,G,z,X,J,ge,we,Ce,ye,xe,L,Fe]);return e.createElement(oe.Provider,{value:dt},e.createElement(ae.Provider,{value:pt},e.createElement(A,s({ref:i},Ie,{id:Ee,prefixCls:m,mode:je?"multiple":void 0,displayValues:lt,onDisplayValuesChange:st,searchValue:He,onSearch:function(e){Ke(e),null==E||E(e)},OptionList:ce,emptyOptions:!We.length,onDropdownVisibleChange:ut,dropdownMatchSelectWidth:be}))))}));he.TreeNode=Q,he.SHOW_ALL=ue,he.SHOW_PARENT=se,he.SHOW_CHILD=de;const ve=e=>{const{componentCls:t,treePrefixCls:n,colorBgElevated:r}=e,a=`.${n}`;return[{[`${t}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},B(n,h(e,{colorBgContainer:r})),{[a]:{borderRadius:0,[`${a}-list-holder-inner`]:{alignItems:"stretch",[`${a}-treenode`]:{[`${a}-node-content-wrapper`]:{flex:"auto"}}}}},z(`${n}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${a}-switcher${a}-switcher_close`]:{[`${a}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};var me=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const be=(t,n)=>{var r,{prefixCls:a,size:o,disabled:l,bordered:i=!0,className:c,rootClassName:u,treeCheckable:s,multiple:d,listHeight:p=256,listItemHeight:v=26,placement:S,notFoundContent:N,switcherIcon:j,treeLine:L,getPopupContainer:T,popupClassName:D,dropdownClassName:M,treeIcon:O=!1,transitionName:P,choiceTransitionName:V="",status:A,treeExpandAction:$,builtinPlacements:_,dropdownMatchSelectWidth:U,popupMatchSelectWidth:B,allowClear:z}=t,X=me(t,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear"]);const{getPopupContainer:J,getPrefixCls:Y,renderEmpty:Q,direction:Z,virtual:ee,popupMatchSelectWidth:te,popupOverflow:ne}=e.useContext(m),re=Y(),ae=Y("select",a),oe=Y("select-tree",a),le=Y("tree-select",a),{compactSize:ie,compactItemClassnames:ce}=b(ae,Z),[ue,se]=H(ae),[de]=function(e,t){return f("TreeSelect",(e=>{const n=h(e,{treePrefixCls:t});return[ve(n)]}),q)(e)}(le,oe),pe=x(D||M,`${le}-dropdown`,{[`${le}-dropdown-rtl`]:"rtl"===Z},u,se),fe=!(!s&&!d),be=K(X.suffixIcon,X.showArrow),xe=null!==(r=null!=B?B:U)&&void 0!==r?r:te,{status:ge,hasFeedback:Ce,isFormItemInput:ye,feedbackIcon:we}=e.useContext(g),Ie=k(ge,A),{suffixIcon:Ee,removeIcon:ke,clearIcon:Se}=W(Object.assign(Object.assign({},X),{multiple:fe,showSuffixIcon:be,hasFeedback:Ce,feedbackIcon:we,prefixCls:ae,componentName:"TreeSelect"})),Ne=!0===z?{clearIcon:Se}:z;let je;je=void 0!==N?N:(null==Q?void 0:Q("Select"))||e.createElement(R,{componentName:"Select"});const Le=C(X,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon"]),Te=e.useMemo((()=>void 0!==S?S:"rtl"===Z?"bottomRight":"bottomLeft"),[S,Z]),De=F(_,ne),Me=y((e=>{var t;return null!==(t=null!=o?o:ie)&&void 0!==t?t:e})),Oe=e.useContext(w),Pe=null!=l?l:Oe,Ve=x(!a&&le,{[`${ae}-lg`]:"large"===Me,[`${ae}-sm`]:"small"===Me,[`${ae}-rtl`]:"rtl"===Z,[`${ae}-borderless`]:!i,[`${ae}-in-form-item`]:ye},I(ae,Ie,Ce),ce,c,u,se);return ue(de(e.createElement(he,Object.assign({virtual:ee,disabled:Pe},Le,{dropdownMatchSelectWidth:xe,builtinPlacements:De,ref:n,prefixCls:ae,className:Ve,listHeight:p,listItemHeight:v,treeCheckable:s?e.createElement("span",{className:`${ae}-tree-checkbox-inner`}):s,treeLine:!!L,suffixIcon:Ee,multiple:fe,placement:Te,removeIcon:ke,allowClear:Ne,switcherIcon:t=>e.createElement(G,{prefixCls:oe,switcherIcon:j,treeNodeProps:t,showLine:L}),showTreeIcon:O,notFoundContent:je,getPopupContainer:T||J,treeMotion:null,dropdownClassName:pe,choiceTransitionName:E(re,"",V),transitionName:E(re,"slide-up",P),treeExpandAction:$}))))},xe=e.forwardRef(be),ge=v(xe);xe.TreeNode=Q,xe.SHOW_ALL=ue,xe.SHOW_PARENT=se,xe.SHOW_CHILD=de,xe._InternalPanelDoNotUseOrYouWillBeFired=ge;const Ce=xe;function ye({title:t,show:n,formValue:r,onOk:a,onCancel:o}){const[l]=M.useForm(),i=S();return e.useEffect((()=>{l.setFieldsValue({...r})}),[r,l]),N.jsx(j,{title:t,open:n,onOk:a,onCancel:o,children:N.jsxs(M,{initialValues:r,form:l,labelCol:{span:4},wrapperCol:{span:18},layout:"horizontal",children:[N.jsx(M.Item,{label:"Type",name:"type",required:!0,children:N.jsxs(O.Group,{optionType:"button",buttonStyle:"solid",children:[N.jsx(O,{value:L.CATALOGUE,children:"CATALOGUE"}),N.jsx(O,{value:L.MENU,children:"MENU"})]})}),N.jsx(M.Item,{label:"Name",name:"name",required:!0,children:N.jsx(T,{})}),N.jsx(M.Item,{label:"Label",name:"label",required:!0,tooltip:"internationalization config",children:N.jsx(T,{})}),N.jsx(M.Item,{label:"Parent",name:"parentId",required:!0,children:N.jsx(Ce,{fieldNames:{label:"name",value:"id",children:"children"},treeData:i})}),N.jsx(M.Item,{label:"Route",name:"route",required:!0,children:N.jsx(T,{})}),N.jsx(M.Item,{label:"Component",name:"component",required:r.type===L.MENU,children:N.jsx(T,{})}),N.jsx(M.Item,{label:"Icon",name:"icon",tooltip:"local icon should start with ic",children:N.jsx(T,{})}),N.jsx(M.Item,{label:"Hide",name:"hide",tooltip:"hide in menu",children:N.jsxs(O.Group,{optionType:"button",buttonStyle:"solid",children:[N.jsx(O,{value:!1,children:"Show"}),N.jsx(O,{value:!0,children:"Hide"})]})}),N.jsx(M.Item,{label:"Order",name:"order",children:N.jsx(X,{style:{width:"100%"}})}),N.jsx(M.Item,{label:"Status",name:"status",required:!0,children:N.jsxs(O.Group,{optionType:"button",buttonStyle:"solid",children:[N.jsx(O,{value:D.ENABLE,children:" Enable "}),N.jsx(O,{value:D.DISABLE,children:" Disable "})]})})]})})}export{ye as default};