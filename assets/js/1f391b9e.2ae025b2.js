"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6061],{2638:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(4848);n(6540);var i=n(4164),l=n(3192),s=n(3891),a=n(9608);function c(e){let{className:t}=e;return(0,r.jsx)(a.A,{type:"caution",title:(0,r.jsx)(l.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,r.jsx)(l.Uh,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.AE,{}),(0,r.jsx)(c,{...e})]})}},5016:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(4848);n(6540);var i=n(4164),l=n(3192),s=n(3891),a=n(9608);function c(e){let{className:t}=e;return(0,r.jsx)(a.A,{type:"caution",title:(0,r.jsx)(l.Yh,{}),className:(0,i.A)(t,s.G.common.draftBanner),children:(0,r.jsx)(l.TT,{})})}var o=n(2638);function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(o.A,{}),i.draft&&(0,r.jsx)(c,{})]})}},6411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(4848);n(6540);var i=n(4164),l=n(6560),s=n(3891),a=n(7636),c=n(8978),o=n(701),d=n(5016),u=n(220);function m(e){let{content:t}=e,{metadata:n,assets:m}=t,{title:h,editUrl:f,description:x,frontMatter:v,lastUpdatedBy:g,lastUpdatedAt:p}=n,{keywords:j,wrapperClassName:b,hide_table_of_contents:A}=v,_=m.image??v.image,y=!!(f||p||g);return(0,r.jsx)(l.e3,{className:(0,i.A)(b??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.be,{title:h,description:x,keywords:j,image:_}),(0,r.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,r.jsxs)("div",{className:(0,i.A)("row","mdxPageWrapper_j9I6"),children:[(0,r.jsxs)("div",{className:(0,i.A)("col",!A&&"col--8"),children:[(0,r.jsx)(d.A,{metadata:n}),(0,r.jsx)("article",{children:(0,r.jsx)(c.A,{children:(0,r.jsx)(t,{})})}),y&&(0,r.jsx)(u.A,{className:(0,i.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:p,lastUpdatedBy:g})]}),!A&&t.toc.length>0&&(0,r.jsx)("div",{className:"col col--2",children:(0,r.jsx)(o.A,{toc:t.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})})]})})]})})}},719:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(4848),i=n(6540),l=n(3114);function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var a=n(8618);let c=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:s}=t;return n.length?(0,r.jsx)("ul",{className:s?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.A,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function o(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.p)(),f=d??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return t.level>=r&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.p)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:a}=e;function c(){let e=Array.from(document.getElementsByClassName(r)),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>s(e).top>=n);if(r){var i;return(i=s(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:n.current}),o=e.find(e=>c&&c.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===o?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}},[e,n])}((0,i.useMemo)(()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:x}},[a,o,f,x])),(0,r.jsx)(c,{toc:v,className:n,linkClassName:a,...m})}},701:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(4848);n(6540);var i=n(4164),l=n(719);function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,r.jsx)(l.A,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},3192:(e,t,n)=>{n.d(t,{AE:()=>c,Rc:()=>s,TT:()=>d,Uh:()=>a,Yh:()=>o});var r=n(4848);n(6540);var i=n(5418),l=n(3248);function s(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(l.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},8709:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(4848),i=n(6540);let l={React:i,...i,ButtonExample:e=>(0,r.jsx)("button",{...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}}}]);