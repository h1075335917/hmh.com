"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8504],{258:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(4848);r(6540);var l=r(719);function a(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:a}=e;return(0,n.jsx)("div",{className:"tableOfContentsInline_prmo",children:(0,n.jsx)(l.A,{toc:t,minHeadingLevel:r,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},719:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(4848),l=r(6540),a=r(3114);function u(e){let t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}var o=r(8618);let s=l.memo(function e(t){let{toc:r,className:l,linkClassName:a,isChild:u}=t;return r.length?(0,n.jsx)("ul",{className:u?void 0:l,children:r.map(t=>(0,n.jsxs)("li",{children:[(0,n.jsx)(o.A,{to:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,n.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:a})]},t.id))}):null});function i(e){let{toc:t,className:r="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:d,...f}=e,m=(0,a.p)(),h=c??m.tableOfContents.minHeadingLevel,v=d??m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:r,minHeadingLevel:n,maxHeadingLevel:l}=t;return r.flatMap(t=>{let r=e({toc:t.children,minHeadingLevel:n,maxHeadingLevel:l});return t.level>=n&&t.level<=l?[{...t,children:r}]:r})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),r=Array(7).fill(-1);t.forEach((e,t)=>{let n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t});let n=[];return t.forEach(e=>{let{parentIndex:r,...l}=e;r>=0?t[r].children.push(l):n.push(l)}),n}(t),minHeadingLevel:r,maxHeadingLevel:n}),[t,r,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return!function(e){let t=(0,l.useRef)(void 0),r=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:n,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:o}=e;function s(){let e=Array.from(document.getElementsByClassName(n)),s=function(e,t){let{anchorTopOffset:r}=t,n=e.find(e=>u(e).top>=r);if(n){var l;return(l=u(n)).top>0&&l.bottom<window.innerHeight/2?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e,n=[];for(let e=t;e<=r;e+=1)n.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),{anchorTopOffset:r.current}),i=e.find(e=>s&&s.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===i?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)})}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}},[e,r])}((0,l.useMemo)(()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:v}},[o,i,h,v])),(0,n.jsx)(s,{toc:p,className:r,linkClassName:o,...f})}},8328:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(4848);r(6540);var l=r(4164);function a(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)("tabItem_Ymn6",a),hidden:r,children:t})}},4235:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(4848),l=r(6540),a=r(4164),u=r(2204),o=r(6347),s=r(3321),i=r(7641),c=r(3094),d=r(7237);function f(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var h=r(2075);function v(e){let{className:t,block:r,selectedValue:l,selectValue:o,tabValues:s}=e,i=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),d=e=>{let t=e.currentTarget,r=s[i.indexOf(t)].value;r!==l&&(c(t),o(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{let r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map(e=>{let{value:t,label:r,attributes:u}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:f,onClick:d,...u,className:(0,a.A)("tabs__item","tabItem_LNqP",u?.className,{"tabs__item--active":l===t}),children:r??t},t)})})}function p(e){let{lazy:t,children:r,selectedValue:u}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===u);return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==u}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,l.useMemo)(()=>{let e=t??f(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}});return!function(e){let t=(0,c.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[u,h]=(0,l.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[v,p]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,l.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}({queryString:r,groupId:n}),[b,g]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,a]=(0,d.Dv)(r);return[n,(0,l.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:n}),x=(()=>{let e=v??b;return m({value:e,tabValues:a})?e:null})();return(0,s.A)(()=>{x&&h(x)},[x]),{selectedValue:u,selectValue:(0,l.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);h(e),p(e),g(e)},[p,g,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(v,{...t,...e}),(0,n.jsx)(p,{...t,...e})]})}function g(e){let t=(0,h.A)();return(0,n.jsx)(b,{...e,children:f(e.children)},String(t))}}}]);