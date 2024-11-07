"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[867],{7861:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(4848);a(6540);var n=a(5418),s=a(6930);function l(e){let{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(s.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(s.A,{permalink:l,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},6489:(e,t,a)=>{a.d(t,{A:()=>C});var r=a(4848);a(6540);var n=a(4164),s=a(7984);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(8618);function o(e){let{className:t}=e,{metadata:a,isBlogPostPage:l}=(0,s.e7)(),{permalink:o,title:d}=a;return(0,r.jsx)(l?"h1":"h2",{className:(0,n.A)("title_f1Hy",t),children:l?d:(0,r.jsx)(i.A,{to:o,children:d})})}var d=a(5418),c=a(3477),u=a(1430);function h(e){let{readingTime:t}=e,a=function(){let{selectMessage:e}=(0,c.W)();return t=>{let a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function g(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function m(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e,{metadata:a}=(0,s.e7)(),{date:l,readingTime:i}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)("container_mt6G","margin-vert--md",t),children:[(0,r.jsx)(g,{date:l,formattedDate:o.format(new Date(l))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(h,{readingTime:i})]})]})}var x=a(5722);let j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e,{metadata:{authors:a},assets:l}=(0,s.e7)();if(0===a.length)return null;let i=a.every(e=>{let{name:t}=e;return!t}),o=1===a.length;return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",i?j.imageOnlyAuthorRow:"row",t),children:a.map((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!i&&(o?"col col--12":"col col--6"),i?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(x.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(o,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{})]})}var f=a(9428),v=a(8978);function w(e){let{children:t,className:a}=e,{isBlogPostPage:l}=(0,s.e7)();return(0,r.jsx)("div",{id:l?f.LU:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(v.A,{children:t})})}var T=a(3891),N=a(220),_=a(5283);function y(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function k(e){let{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(y,{})})}function R(){let{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,h=a.length>0;if(!(h||u||i))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":u}),children:(0,r.jsx)(_.A,{tags:a})}),u&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":h}),children:(0,r.jsx)(k,{blogPostTitle:l,to:e.permalink})})]});{let e=!!(i||c||d);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(_.A,{tags:a})})}),e&&(0,r.jsx)(N.A,{className:(0,n.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:c,lastUpdatedBy:d})]})}}function C(e){let{children:t,className:a}=e,i=function(){let{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,n.A)(i,a),children:[(0,r.jsx)(A,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(R,{})]})}},544:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(4848);a(6540);var n=a(7984),s=a(6489);function l(e){let{items:t,component:a=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,r.jsx)(n.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)})})}},1422:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(4848);a(6540);var n=a(4164),s=a(6560),l=a(3891),i=a(2521),o=a(8618),d=a(7984),c=a(6586),u=a(7861),h=a(3067),g=a(544),m=a(5722);function p(e){let{author:t}=e,a=(0,i.wI)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.be,{title:a}),(0,r.jsx)(h.A,{tag:"blog_authors_posts"})]})}function x(){let{authorsListPath:e}=(0,d.x)();return(0,r.jsx)(o.A,{href:e,children:(0,r.jsx)(i.np,{})})}function j(e){let{author:t,items:a,sidebar:n,listMetadata:s}=e;return(0,r.jsxs)(c.A,{sidebar:n,children:[(0,r.jsxs)("header",{className:"margin-bottom--xl",children:[(0,r.jsx)(m.A,{as:"h1",author:t}),t.description&&(0,r.jsx)("p",{children:t.description}),(0,r.jsx)(x,{})]}),0===a.length?(0,r.jsx)("p",{children:(0,r.jsx)(i.Y4,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)(g.A,{items:a}),(0,r.jsx)(u.A,{metadata:s})]})]})}function b(e){return(0,r.jsxs)(s.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogAuthorsPostsPage),children:[(0,r.jsx)(p,{...e}),(0,r.jsx)(j,{...e})]})}},6930:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(4848);a(6540);var n=a(4164),s=a(8618);function l(e){let{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},9243:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(4848);a(6540);var n=a(4164),s=a(8618);let l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},5283:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(4848);a(6540);var n=a(4164),s=a(5418),l=a(9243);function i(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,n.A)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:"tag_QGVx",children:(0,r.jsx)(l.A,{...e})},e.permalink))})]})}},2521:(e,t,a)=>{a.d(t,{Y4:()=>u,ZD:()=>i,np:()=>c,uz:()=>d,wI:()=>o});var r=a(4848);a(6540);var n=a(5418),s=a(3477);function l(){let{selectMessage:e}=(0,s.W)();return t=>e(t,(0,n.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){let t=l();return(0,n.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){let t=l();return(0,n.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let d=()=>(0,n.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(n.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,r.jsx)(n.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},8709:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(4848),n=a(6540);let s={React:n,...n,ButtonExample:e=>(0,r.jsx)("button",{...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}}}]);