"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1641],{7248:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>t,toc:()=>u});let t=JSON.parse('{"id":"java/JAVA-SQL-Interceptor","title":"JAVA-SQL\u62E6\u622A\u5668","description":"Executor query \u65B9\u6CD5","source":"@site/docs/java/JAVA-SQL-Interceptor.md","sourceDirName":"java","slug":"/java/JAVA-SQL-Interceptor","permalink":"/mhuahe.com/docs/java/JAVA-SQL-Interceptor","draft":false,"unlisted":false,"editUrl":"https://github.dev/mhuahe/mhuahe.com/blob/master-ts/docs/java/JAVA-SQL-Interceptor.md","tags":[],"version":"current","lastUpdatedBy":"heminhua","lastUpdatedAt":1725382806000,"frontMatter":{},"sidebar":"java","previous":{"title":"JAVA-PDF","permalink":"/mhuahe.com/docs/java/JAVA-PDF"},"next":{"title":"JAVA-Servlet","permalink":"/mhuahe.com/docs/java/JAVA-Servlet"}}');var a=n(4848),c=n(8453);let s={},o="JAVA-SQL\u62E6\u622A\u5668",l={},u=[{value:"Executor query \u65B9\u6CD5",id:"executor-query-\u65B9\u6CD5",level:3},{value:"\u62E6\u622A\u5668\u914D\u7F6E\u548C\u8C03\u7528\u987A\u5E8F",id:"\u62E6\u622A\u5668\u914D\u7F6E\u548C\u8C03\u7528\u987A\u5E8F",level:3},{value:"\u5206\u9875\u63D2\u4EF6 5.0",id:"\u5206\u9875\u63D2\u4EF6-50",level:3},{value:"\u62E6\u622A query \u65B9\u6CD5\u7684\u89C4\u8303",id:"\u62E6\u622A-query-\u65B9\u6CD5\u7684\u89C4\u8303",level:3},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:3}];function d(e){let r={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"java-sql\u62E6\u622A\u5668",children:"JAVA-SQL\u62E6\u622A\u5668"})}),"\n",(0,a.jsx)(r.h3,{id:"executor-query-\u65B9\u6CD5",children:"Executor query \u65B9\u6CD5"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"<E> List<E> query(\r\n      MappedStatement ms, \r\n      Object parameter, \r\n      RowBounds rowBounds, \r\n      ResultHandler resultHandler, \r\n      CacheKey cacheKey, \r\n      BoundSql boundSql) throws SQLException;\r\n\r\n<E> List<E> query(\r\n      MappedStatement ms, \r\n      Object parameter, \r\n      RowBounds rowBounds, \r\n      ResultHandler resultHandler) throws SQLException;\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u62E6\u622A\u5668\u914D\u7F6E\u548C\u8C03\u7528\u987A\u5E8F",children:"\u62E6\u622A\u5668\u914D\u7F6E\u548C\u8C03\u7528\u987A\u5E8F"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"\u62E6\u622A\u4E0D\u540C\u5BF9\u8C61"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"-- mybatis\u62E6\u622A\u5668\u53EF\u4EE5\u62E6\u622A\u5982\u4E0B4\u4E2D\u7C7B\u578B\r\nExecutor\uFF1Asql\u7684\u5185\u90E8\u6267\u884C\u5668\r\nParameterHandler\uFF1A\u62E6\u622A\u53C2\u6570\u7684\u5904\u7406\r\nStatementHandler\uFF1A\u62E6\u622Asql\u7684\u6784\u5EFA\r\nResultSetHandler\uFF1A\u62E6\u622A\u7ED3\u679C\u7684\u5904\u7406\r\n\r\n\u5982\uFF1A\r\nStatementHandler \u5C5E\u4E8E Executor \u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E2A\u5B50\u8FC7\u7A0B\u3002\r\n\u6240\u4EE5\u8FD9\u4E24\u79CD\u4E0D\u540C\u7C7B\u522B\u7684\u63D2\u4EF6\u5728\u914D\u7F6E\u65F6\uFF0C\u4E00\u5B9A\u662F\u5148\u6267\u884C Executor \u7684\u62E6\u622A\u5668\uFF0C\u7136\u540E\u624D\u4F1A\u8F6E\u5230 StatementHandler\u3002\r\n\u6240\u4EE5\u8FD9\u79CD\u60C5\u51B5\u4E0B\u914D\u7F6E\u62E6\u622A\u5668\u7684\u987A\u5E8F\u5C31\u4E0D\u91CD\u8981\u4E86\uFF0C\u5728 MyBatis \u903B\u8F91\u4E0A\u5C31\u5DF2\u7ECF\u63A7\u5236\u4E86\u5148\u540E\u987A\u5E8F\u3002\n"})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"\u62E6\u622A\u540C\u4E00\u79CD\u5BF9\u8C61\u7684\u540C\u4E00\u4E2A\u65B9\u6CD5"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'\u5982\uFF1A\u5982\u4E0B\u51E0\u4E2A\u62E6\u622A\u5668\uFF0C\u90FD\u662F\u62E6\u622A\u7684 Executor \u7684 query \u65B9\u6CD5\r\n<plugins>\r\n    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor1"/>\r\n    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor2"/>\r\n    <plugin interceptor="com.github.pagehelper.ExecutorQueryInterceptor3"/>\r\n</plugins>\r\n\r\n-- \u6267\u884C\u987A\u5E8F\uFF08 3>2>1>Executor>1>2>3\uFF09\r\nInterceptor3 \u524D\u7F6E\u5904\u7406\r\nInterceptor2 \u524D\u7F6E\u5904\u7406\r\nInterceptor1 \u524D\u7F6E\u5904\u7406  \r\nObject result = executor.query(4\u4E2A\u53C2\u6570\u65B9\u6CD5);     \r\nInterceptor1 \u540E\u7EED\u5904\u7406   \r\nInterceptor2 \u540E\u7EED\u5904\u7406  \r\nInterceptor3 \u540E\u7EED\u5904\u7406   \r\nreturn result;\n'})}),"\n",(0,a.jsx)(r.h3,{id:"\u5206\u9875\u63D2\u4EF6-50",children:"\u5206\u9875\u63D2\u4EF6 5.0"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"\u987A\u5E8F\u6253\u4E71-\u6267\u884C6\u53C2query\u65B9\u6CD5"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'//\u62E6\u622A\u5668\u76F4\u63A5\u66FF\u4EE3\u4E86\u539F\u6709 Executor \u7684\u90E8\u5206\u903B\u8F91\uFF0C\u76F4\u63A5\u53BB\u8C03\u7528\u4E86 6 \u4E2A\u53C2\u6570\u7684\u65B9\u6CD5\uFF0C\u56E0\u800C\u5BFC\u81F4 4 \u4E2A\u53C2\u6570\u7684\u540E\u7EED\u65B9\u6CD5\u88AB\u8DF3\u8FC7\u4E86\r\n//\u4F46\u662F\u7531\u4E8E\u8FD9\u91CC\u7684 executor \u662F\u4EE3\u7406\u5BF9\u8C61 \u6240\u4EE5 6 \u4E2A\u53C2\u6570\u7684 query \u65B9\u6CD5\u53EF\u4EE5\u88AB\u4EE3\u7406\u4E86\uFF0C\u8FD9\u5C31\u6270\u4E71\u6267\u884C\u987A\u5E8F\r\n@Intercepts(@Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}))\r\npublic class QueryInterceptor implements Interceptor {\r\n    @Override\r\n    public Object intercept(Invocation invocation) throws Throwable {\r\n        Object[] args = invocation.getArgs();\r\n        MappedStatement ms = (MappedStatement) args[0];\r\n        Object parameterObject = args[1];\r\n        RowBounds rowBounds = (RowBounds) args[2];\r\n        ResultHandler resultHandler = (ResultHandler) args[3];\r\n        Executor executor = (Executor) invocation.getTarget();\r\n        BoundSql boundSql = ms.getBoundSql(parameterObject);\r\n        //\u53EF\u4EE5\u5BF9\u53C2\u6570\u505A\u5404\u79CD\u5904\u7406\r\n        CacheKey cacheKey = executor.createCacheKey(ms, parameterObject, rowBounds, boundSql);\r\n        return executor.query(ms, parameterObject, rowBounds, resultHandler, cacheKey, boundSql);\r\n    }\r\n    @Override\r\n    public Object plugin(Object target) {\r\n        return Plugin.wrap(target, this);\r\n    }\r\n\r\n    @Override\r\n    public void setProperties(Properties properties) {\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"\u62E6\u622A-query-\u65B9\u6CD5\u7684\u89C4\u8303",children:"\u62E6\u622A query \u65B9\u6CD5\u7684\u89C4\u8303"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'//QueryInterceptor \u7684\u903B\u8F91\u5C31\u662F\u8FDB\u53BB\u7684\u662F 4 \u4E2A\u53C2\u6570\u7684\u65B9\u6CD5\uFF0C\u51FA\u53BB\u7684\u662F 6 \u4E2A\u53C2\u6570\u7684\u65B9\u6CD5\u3002\u8FD9\u79CD\u5904\u7406\u65B9\u6CD5\u4E0D\u4EC5\u4EC5\u4E0D\u65B9\u4FBF\u548C\u4E00\u822C\u7684 Excutor \u62E6\u622A\u5668\u642D\u914D\u4F7F\u7528\uFF0C \u5F53\u51FA\u73B0\u4E24\u4E2A\u4EE5\u4E0A\u7C7B\u4F3C QueryInterceptor \u7684\u63D2\u4EF6\u65F6\uFF0C\u7531\u4E8E\u63A5\u53E3\u53D8\u4E86\uFF0C\u7C7B\u4F3C QueryInterceptor \u63D2\u4EF6\u4E5F\u65E0\u6CD5\u8FDE\u8D2F\u7684\u6267\u884C\u4E0B\u53BB\u3002 \u56E0\u800C\u6709\u5FC5\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u89E3\u51B3\u7684\u529E\u6CD5\u5C31\u662F\u4F7F\u7528\u7EDF\u4E00\u7684\u89C4\u8303\u3002\u7ECF\u8FC7\u89C4\u8303\u540E QueryInterceptor \u5982\u4E0B\uFF1A\r\n@Intercepts(\r\n    {\r\n        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class}),\r\n        @Signature(type = Executor.class, method = "query", args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class}),\r\n    }\r\n)\r\npublic class QueryInterceptor implements Interceptor {\r\n    @Override\r\n    public Object intercept(Invocation invocation) throws Throwable {\r\n        Object[] args = invocation.getArgs();\r\n        MappedStatement ms = (MappedStatement) args[0];\r\n        Object parameter = args[1];\r\n        RowBounds rowBounds = (RowBounds) args[2];\r\n        ResultHandler resultHandler = (ResultHandler) args[3];\r\n        Executor executor = (Executor) invocation.getTarget();\r\n        CacheKey cacheKey;\r\n        BoundSql boundSql;\r\n        //\u7531\u4E8E\u903B\u8F91\u5173\u7CFB\uFF0C\u53EA\u4F1A\u8FDB\u5165\u4E00\u6B21\r\n        if(args.length == 4){\r\n            //4 \u4E2A\u53C2\u6570\u65F6\r\n            boundSql = ms.getBoundSql(parameter);\r\n            cacheKey = executor.createCacheKey(ms, parameter, rowBounds, boundSql);\r\n        } else {\r\n            //6 \u4E2A\u53C2\u6570\u65F6\r\n            cacheKey = (CacheKey) args[4];\r\n            boundSql = (BoundSql) args[5];\r\n        }\r\n        //TODO \u81EA\u5DF1\u8981\u8FDB\u884C\u7684\u5404\u79CD\u5904\u7406\r\n        //\u6CE8\uFF1A\u4E0B\u9762\u7684\u65B9\u6CD5\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u903B\u8F91\u8C03\u7528\u591A\u6B21\uFF0C\u5728\u5206\u9875\u63D2\u4EF6\u4E2D\uFF0Ccount \u548C page \u5404\u8C03\u7528\u4E86\u4E00\u6B21\r\n        return executor.query(ms, parameter, rowBounds, resultHandler, cacheKey, boundSql);\r\n    }\r\n    @Override\r\n    public Object plugin(Object target) {\r\n        return Plugin.wrap(target, this);\r\n    }\r\n    @Override\r\n    public void setProperties(Properties properties) {\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"1. \u62E6\u622Aquery\u95EE\u9898\r\n\u5F53\u914D\u7F6E\u4E86mybatisplus\u63D2\u4EF6\uFF0C\u5B83\u4F1A\u62E6\u622Aquery4\uFF0C6\u53C2\uFF0C\u6700\u540E\u6574\u4F53\u8C03\u75286\u53C2\u65B9\u6CD5\uFF0C\u6240\u4EE5\uFF0C\u62E6\u622A\u5668\u53EA\u9700\u8981\u62E6\u622A6\u53C2\u5373\u53EF\n"})})]})}function i(e={}){let{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(6540);let a={},c=t.createContext(a);function s(e){let r=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);