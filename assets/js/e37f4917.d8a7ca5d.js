"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7329],{5199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});let l=JSON.parse('{"id":"java/JAVA-Knowledge-Question","title":"JAVA-\u77E5\u8BC6\u9898","description":"\u4E8C\u7EF4\u6570\u7EC4\u7684\u5B58\u50A8\u5730\u5740","source":"@site/docs/java/JAVA-Knowledge-Question.md","sourceDirName":"java","slug":"/java/JAVA-Knowledge-Question","permalink":"/mhuahe.com/docs/java/JAVA-Knowledge-Question","draft":false,"unlisted":false,"editUrl":"https://github.dev/mhuahe/mhuahe.com/blob/master-ts/docs/java/JAVA-Knowledge-Question.md","tags":[],"version":"current","lastUpdatedBy":"heminhua","lastUpdatedAt":1729094642000,"frontMatter":{},"sidebar":"java","previous":{"title":"JAVA-JVM","permalink":"/mhuahe.com/docs/java/JAVA-JVM"},"next":{"title":"JAVA-\u6D88\u606F\u961F\u5217","permalink":"/mhuahe.com/docs/java/JAVA-MQ"}}');var i=t(4848),a=t(8453);let r=t.p+"assets/images/Knowledge-\u4E8C\u7EF4\u6570\u7EC4\u5B58\u50A8\u5730\u5740-98149edde58d5f821e5b1b48318413b4.png",o={},s="JAVA-\u77E5\u8BC6\u9898",d={},c=[{value:"\u4E8C\u7EF4\u6570\u7EC4\u7684\u5B58\u50A8\u5730\u5740",id:"\u4E8C\u7EF4\u6570\u7EC4\u7684\u5B58\u50A8\u5730\u5740",level:3},{value:"wait()\u3001notify()\u3001notifyAll()",id:"waitnotifynotifyall",level:3},{value:"GET\u548CPOST\u8BF7\u6C42",id:"get\u548Cpost\u8BF7\u6C42",level:3},{value:"\u9759\u6001\u8BED\u53E5\u5757\u548C\u9759\u6001\u53D8\u91CF",id:"\u9759\u6001\u8BED\u53E5\u5757\u548C\u9759\u6001\u53D8\u91CF",level:3},{value:"volatile",id:"volatile",level:3},{value:"HTTP\u9519\u8BEF\u7801",id:"http\u9519\u8BEF\u7801",level:3}];function h(e){let n={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"java-\u77E5\u8BC6\u9898",children:"JAVA-\u77E5\u8BC6\u9898"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4E8C\u7EF4\u6570\u7EC4\u7684\u5B58\u50A8\u5730\u5740",children:"\u4E8C\u7EF4\u6570\u7EC4\u7684\u5B58\u50A8\u5730\u5740"}),"\n","\n",(0,i.jsx)("img",{src:r,alt:"Knowledge-\u4E8C\u7EF4\u6570\u7EC4\u5B58\u50A8\u5730\u5740",width:"50%"}),"\n",(0,i.jsx)(n.h3,{id:"waitnotifynotifyall",children:"wait()\u3001notify()\u3001notifyAll()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\u3001wait(), notify(), \u548C notifyAll() \u65B9\u6CD5\u662F Object \u7C7B\u4E2D\u5B9A\u4E49\u7684 final \u65B9\u6CD5\uFF0C\u56E0\u6B64\u4E0D\u80FD\u88AB\u5B50\u7C7B\u91CD\u5199\u3002\u8FD9\u4E9B\u65B9\u6CD5\u7528\u4E8E\u5B9E\u73B0\u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u8C03\u548C\u901A\u4FE1\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B9E\u73B0\u7EBF\u7A0B\u7684\u7B49\u5F85\u548C\u5524\u9192\u673A\u5236\r\n2\u3001wait(): \u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8C03\u7528\u5BF9\u8C61\u7684 wait() \u65B9\u6CD5\u65F6\uFF0C\u5B83\u5C06\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u5230\u5176\u4ED6\u7EBF\u7A0B\u8C03\u7528\u76F8\u540C\u5BF9\u8C61\u7684 notify() \u6216 notifyAll() \u65B9\u6CD5\u6765\u5524\u9192\u5B83\uFF0C\u6216\u8005\u7B49\u5F85\u7684\u65F6\u95F4\u5230\u8FBE\u3002\r\n3\u3001notify(): \u7528\u4E8E\u5524\u9192\u7B49\u5F85\u5728\u8BE5\u5BF9\u8C61\u4E0A\u7684\u5355\u4E2A\u7EBF\u7A0B\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u7EBF\u7A0B\u5728\u7B49\u5F85\uFF0C\u5219\u53EA\u80FD\u5524\u9192\u5176\u4E2D\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5177\u4F53\u5524\u9192\u54EA\u4E2A\u7EBF\u7A0B\u53D6\u51B3\u4E8E\u7EBF\u7A0B\u8C03\u5EA6\u5668\u3002\r\n4\u3001notifyAll(): \u7528\u4E8E\u5524\u9192\u7B49\u5F85\u5728\u8BE5\u5BF9\u8C61\u4E0A\u7684\u6240\u6709\u7EBF\u7A0B\uFF0C\u8BA9\u5B83\u4EEC\u6709\u673A\u4F1A\u53BB\u7ADE\u4E89\u9501\uFF0C\u4EE5\u4FBF\u7EE7\u7EED\u6267\u884C\u3002\r\n5\u3001\u8FD9\u4E9B\u65B9\u6CD5\u901A\u5E38\u4E0E synchronized \u5173\u952E\u5B57\u4E00\u8D77\u4F7F\u7528\uFF0C\u4EE5\u5B9E\u73B0\u591A\u7EBF\u7A0B\u4E4B\u95F4\u7684\u534F\u8C03\u548C\u540C\u6B65\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get\u548Cpost\u8BF7\u6C42",children:"GET\u548CPOST\u8BF7\u6C42"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- GET\u548CPOST\u6D4F\u89C8\u5668\u7F13\u5B58\u95EE\u9898\r\n1\u3001\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CGET \u8BF7\u6C42\u53EF\u4EE5\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8\u7F13\u5B58\uFF0C\u800C POST \u8BF7\u6C42\u5219\u4E0D\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8\u7F13\u5B58\u3002\r\n2\u3001GET \u8BF7\u6C42\u7684\u54CD\u5E94\u901A\u5E38\u662F\u5E42\u7B49\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u540C\u6837\u7684\u8BF7\u6C42\u8FD4\u56DE\u7684\u5185\u5BB9\u662F\u76F8\u540C\u7684\u3002\u56E0\u6B64\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u5B89\u5168\u5730\u5C06 GET \u8BF7\u6C42\u7684\u54CD\u5E94\u5B58\u50A8\u5728\u7F13\u5B58\u4E2D\uFF0C\u4EE5\u4FBF\u5728\u4EE5\u540E\u7684\u8BF7\u6C42\u4E2D\u91CD\u7528\u76F8\u540C\u7684\u54CD\u5E94\u3002\u8FD9\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u5E76\u51CF\u5C11\u7F51\u7EDC\u6D41\u91CF\u3002\r\n3\u3001POST \u8BF7\u6C42\u7684\u54CD\u5E94\u901A\u5E38\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u56E0\u4E3A POST \u8BF7\u6C42\u7684\u7ED3\u679C\u53EF\u80FD\u662F\u975E\u5E42\u7B49\u7684\uFF0C\u5B83\u53EF\u80FD\u4F1A\u5BFC\u81F4\u72B6\u6001\u7684\u6539\u53D8\u6216\u8005\u5176\u4ED6\u526F\u4F5C\u7528\u3002\u56E0\u6B64\uFF0C\u6D4F\u89C8\u5668\u901A\u5E38\u4E0D\u4F1A\u7F13\u5B58 POST \u8BF7\u6C42\u7684\u54CD\u5E94\uFF0C\u4EE5\u786E\u4FDD\u6BCF\u6B21\u8BF7\u6C42\u90FD\u80FD\u83B7\u53D6\u5230\u6700\u65B0\u7684\u6570\u636E\u6216\u72B6\u6001\u3002\r\n4\u3001\u7136\u800C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E HTTP \u54CD\u5E94\u5934\u6765\u6307\u793A\u6D4F\u89C8\u5668\u662F\u5426\u53EF\u4EE5\u7F13\u5B58\u8BF7\u6C42\u7684\u54CD\u5E94\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E Cache-Control \u548C Expires \u7B49\u5934\u90E8\u6765\u63A7\u5236\u7F13\u5B58\u884C\u4E3A\u3002\r\n-- GET\u548CPOST\u6D4F\u89C8\u5668\u56DE\u9000\u95EE\u9898\r\n1\u3001GET\u5728\u6D4F\u89C8\u5668\u56DE\u9000\u4E0D\u4F1A\u518D\u6B21\u8BF7\u6C42\uFF0CPOST\u4F1A\u518D\u6B21\u63D0\u4EA4\u6E05\u6C42\u3002\r\n2\u3001\u5BF9\u4E8E GET \u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C1D\u8BD5\u4ECE\u7F13\u5B58\u4E2D\u52A0\u8F7D\u9875\u9762\uFF0C\u800C\u4E0D\u4F1A\u518D\u6B21\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u3002\u8FD9\u662F\u56E0\u4E3A GET \u8BF7\u6C42\u7684\u54CD\u5E94\u901A\u5E38\u88AB\u5141\u8BB8\u7F13\u5B58\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C1D\u8BD5\u4F7F\u7528\u7F13\u5B58\u6765\u63D0\u9AD8\u6027\u80FD\u3002\r\n3\u3001\u5BF9\u4E8E POST \u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8B66\u544A\u7528\u6237\u6570\u636E\u53EF\u80FD\u4F1A\u88AB\u91CD\u65B0\u63D0\u4EA4\uFF0C\u5E76\u8BE2\u95EE\u7528\u6237\u662F\u5426\u786E\u8BA4\u91CD\u65B0\u63D0\u4EA4\u3002\u8FD9\u662F\u56E0\u4E3A POST \u8BF7\u6C42\u901A\u5E38\u7528\u4E8E\u5411\u670D\u52A1\u5668\u63D0\u4EA4\u6570\u636E\uFF0C\u91CD\u65B0\u63D0\u4EA4\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u526F\u4F5C\u7528\uFF0C\u5982\u91CD\u590D\u63D0\u4EA4\u8BA2\u5355\u6216\u91CD\u590D\u521B\u5EFA\u8D44\u6E90\u3002\r\n4\u3001\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u867D\u7136\u6D4F\u89C8\u5668\u4F1A\u8B66\u544A\u7528\u6237\u91CD\u65B0\u63D0\u4EA4 POST \u8BF7\u6C42\uFF0C\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u63D0\u4F9B\u76F8\u540C\u7684\u884C\u4E3A\uFF0C\u5177\u4F53\u884C\u4E3A\u53EF\u80FD\u4F1A\u56E0\u6D4F\u89C8\u5668\u7684\u4E0D\u540C\u800C\u6709\u6240\u4E0D\u540C\u3002\r\n-- GET\u548CPOST\u6D4F\u89C8\u5668\u8BF7\u6C42\u53C2\u6570\u5386\u53F2\u8BB0\u5F55\u95EE\u9898\r\n1\u3001\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CGET \u8BF7\u6C42\u7684\u53C2\u6570\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u800C POST \u8BF7\u6C42\u7684\u53C2\u6570\u901A\u5E38\u4E0D\u4F1A\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D\u3002\r\n2\u3001\u5F53\u7528\u6237\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u56DE\u9000\u6216\u524D\u8FDB\u6309\u94AE\u5BFC\u822A\u6D4F\u89C8\u5386\u53F2\u8BB0\u5F55\u65F6\uFF0CGET \u8BF7\u6C42\u7684 URL \u4E2D\u7684\u53C2\u6570\u4F1A\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4E2D\uFF0C\u56E0\u6B64\u7528\u6237\u53EF\u4EE5\u91CD\u65B0\u8BBF\u95EE\u5177\u6709\u76F8\u540C\u53C2\u6570\u7684\u9875\u9762\u3002\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u7528\u6237\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u4E2D\u627E\u56DE\u4E4B\u524D\u7684\u8BF7\u6C42\u3002\r\n3\u3001POST \u8BF7\u6C42\u7684\u53C2\u6570\u901A\u5E38\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D\u3002\u8FD9\u662F\u56E0\u4E3A POST \u8BF7\u6C42\u901A\u5E38\u7528\u4E8E\u5411\u670D\u52A1\u5668\u63D0\u4EA4\u654F\u611F\u6570\u636E\uFF0C\u4F8B\u5982\u8868\u5355\u63D0\u4EA4\uFF0C\u5C06\u8FD9\u4E9B\u53C2\u6570\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u4E2D\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5B89\u5168\u98CE\u9669\u548C\u9690\u79C1\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u6D4F\u89C8\u5668\u901A\u5E38\u4E0D\u4F1A\u5C06 POST \u8BF7\u6C42\u7684\u53C2\u6570\u4FDD\u5B58\u5728\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u4EE5\u4FDD\u62A4\u7528\u6237\u7684\u6570\u636E\u5B89\u5168\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u9759\u6001\u8BED\u53E5\u5757\u548C\u9759\u6001\u53D8\u91CF",children:"\u9759\u6001\u8BED\u53E5\u5757\u548C\u9759\u6001\u53D8\u91CF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\u3001\u9759\u6001\u53D8\u91CF\u548C\u9759\u6001\u521D\u59CB\u5316\u5757\u7684\u521D\u59CB\u5316\u987A\u5E8F\u4E0E\u5B83\u4EEC\u5728\u4EE3\u7801\u4E2D\u7684\u58F0\u660E\u987A\u5E8F\u6709\u5173\u3002\r\n2\u3001\u9759\u6001\u53D8\u91CF\uFF1A\u9759\u6001\u53D8\u91CF\u6309\u7167\u4EE3\u7801\u4E2D\u7684\u58F0\u660E\u987A\u5E8F\u4F9D\u6B21\u521D\u59CB\u5316\u3002\u5F53\u7C7B\u52A0\u8F7D\u65F6\uFF0C\u9759\u6001\u53D8\u91CF\u4F1A\u6309\u7167\u58F0\u660E\u987A\u5E8F\u4F9D\u6B21\u8D4B\u4E88\u521D\u59CB\u503C\u6216\u8005\u88AB\u6267\u884C\u521D\u59CB\u5316\u4EE3\u7801\u3002\r\n3\u3001\u9759\u6001\u521D\u59CB\u5316\u5757\uFF1A\u9759\u6001\u521D\u59CB\u5316\u5757\u4E5F\u6309\u7167\u4EE3\u7801\u4E2D\u7684\u58F0\u660E\u987A\u5E8F\u6267\u884C\u3002\u5F53\u7C7B\u52A0\u8F7D\u65F6\uFF0C\u9759\u6001\u521D\u59CB\u5316\u5757\u4F1A\u6309\u7167\u58F0\u660E\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"volatile",children:"volatile"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- \u5DE5\u4F5C\u539F\u7406\r\n1\u3001\u53EF\u89C1\u6027\uFF08Visibility\uFF09\uFF1A\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86 volatile \u53D8\u91CF\u7684\u503C\uFF0C\u65B0\u503C\u4F1A\u7ACB\u5373\u88AB\u5176\u4ED6\u7EBF\u7A0B\u770B\u5230\u3002\u8FD9\u662F\u56E0\u4E3A volatile \u53D8\u91CF\u4F1A\u5F3A\u5236\u88AB\u7EBF\u7A0B\u4ECE\u4E3B\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u800C\u4E0D\u662F\u4ECE\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u4ECE\u800C\u786E\u4FDD\u4E86\u6240\u6709\u7EBF\u7A0B\u770B\u5230\u7684\u503C\u90FD\u662F\u6700\u65B0\u7684\u3002\r\n2\u3001\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5E8F\uFF1Avolatile \u53D8\u91CF\u7684\u8BFB\u5199\u64CD\u4F5C\u4E0D\u80FD\u548C\u5176\u524D\u540E\u7684\u6307\u4EE4\u91CD\u6392\u5E8F\uFF0C\u4FDD\u8BC1\u4E86\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u7B26\u5408\u9884\u671F\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"http\u9519\u8BEF\u7801",children:"HTTP\u9519\u8BEF\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- 302\r\n1\u3001HTTP\u72B6\u6001\u7801302\u8868\u793A\u4E34\u65F6\u91CD\u5B9A\u5411\uFF08Temporary Redirect\uFF09\u3002\u5F53\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u540E\uFF0C\u4F1A\u8FD4\u56DE302\u72B6\u6001\u7801\u548C\u4E00\u4E2ALocation\u5934\u90E8\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u8D44\u6E90\u4E34\u65F6\u88AB\u8F6C\u79FB\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u3002\u5BA2\u6237\u7AEF\u4F1A\u6839\u636ELocation\u5934\u90E8\u7684\u5730\u5740\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\u3002\r\n2\u3001\u7B80\u5355\u6765\u8BF4\uFF0C302\u72B6\u6001\u7801\u544A\u8BC9\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u8D44\u6E90\u6682\u65F6\u6027\u5730\u88AB\u8F6C\u79FB\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\u5230\u65B0\u7684\u5730\u5740\u3002\r\n3\u3001\u8FD9\u79CD\u91CD\u5B9A\u5411\u901A\u5E38\u7528\u4E8E\u4E34\u65F6\u6027\u7684\u8D44\u6E90\u4F4D\u7F6E\u66F4\u6539\uFF0C\u800C\u4E0D\u662F\u6C38\u4E45\u6027\u7684\u3002\u5982\u679C\u8D44\u6E90\u7684\u4F4D\u7F6E\u6C38\u4E45\u6027\u6539\u53D8\uFF0C\u5E94\u8BE5\u4F7F\u7528301\u72B6\u6001\u7801\u3002\r\n-- 206\r\n1\u3001HTTP\u72B6\u6001\u7801206\u8868\u793A\u90E8\u5206\u5185\u5BB9\uFF08Partial Content\uFF09\u3002\u8FD9\u4E2A\u72B6\u6001\u7801\u662F\u5728\u5BA2\u6237\u7AEF\u53D1\u9001\u4E86\u4E00\u4E2A\u5E26\u6709Range\u5934\u90E8\u7684GET\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u6210\u529F\u5904\u7406\u4E86\u8FD9\u4E2A\u8BF7\u6C42\u5E76\u4E14\u54CD\u5E94\u5305\u542B\u4E86\u8BF7\u6C42\u8303\u56F4\u5185\u7684\u90E8\u5206\u5185\u5BB9\u3002\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u53D1\u751F\u5728\u5BA2\u6237\u7AEF\u9700\u8981\u4E0B\u8F7D\u5927\u6587\u4EF6\u7684\u4E00\u90E8\u5206\u65F6\uFF0C\u6216\u8005\u5728\u89C6\u9891\u6D41\u7B49\u5A92\u4F53\u6587\u4EF6\u7684\u5206\u6BB5\u4F20\u8F93\u4E2D\u3002\r\n2\u3001\u5F53\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5E76\u5728\u8BF7\u6C42\u5934\u90E8\u5305\u542BRange\u5B57\u6BB5\u6765\u6307\u5B9A\u6240\u9700\u7684\u5185\u5BB9\u8303\u56F4\u65F6\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE206\u72B6\u6001\u7801\uFF0C\u5E76\u4E14\u5728\u54CD\u5E94\u5934\u90E8\u5305\u542BContent-Range\u5B57\u6BB5\uFF0C\u6307\u793A\u8FD4\u56DE\u5185\u5BB9\u7684\u8303\u56F4\u3002\u8FD9\u5141\u8BB8\u5BA2\u6237\u7AEF\u5728\u591A\u6B21\u8BF7\u6C42\u4E2D\u9010\u6B65\u83B7\u53D6\u6574\u4E2A\u8D44\u6E90\uFF0C\u800C\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u4E0B\u8F7D\u6574\u4E2A\u6587\u4EF6\u3002\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(6540);let i={},a=l.createContext(i);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);