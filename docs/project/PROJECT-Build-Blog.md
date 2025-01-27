# docusaurus

## 部署

### 地址

文档：https://docusaurus.io/zh-CN/

代码：https://github.com/h1075335917/hmh.com

### 脚手架

```sh
npx create-docusaurus@latest my-website classic
```

### 目录结构

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.tsx
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `/blog/`- 包含博客 Markdown 文件。如果您禁用了博客插件，则可以删除该目录，也可以在设置选项后更改其名称`path`
  。更多详细信息可以在[博客指南中找到](https://docusaurus.io/docs/blog)
- `/docs/`- 包含文档的 Markdown 文件。自定义 中文档侧边栏的顺序`sidebars.js`。如果您禁用了文档插件，则可以删除该目录，也可以在设置选项后更改其名称
  `path`。更多详细信息可以在[文档指南中找到](https://docusaurus.io/docs/docs-introduction)
- `/src/`- 非文档文件，例如页面或自定义 React 组件。您不必严格将非文档文件放在这里，但是将它们放在集中目录下可以更轻松地指定，以防您需要进行某种
  linting/处理
  - `/src/pages`- 此目录中的任何 JSX/TSX/MDX
    文件都将转换为网站页面。更多详细信息可以在[页面指南中找到](https://docusaurus.io/docs/creating-pages)
- `/static/`- 静态目录。这里的任何内容都将被复制到最终`build`目录的根目录中
- `/docusaurus.config.js`- 包含站点配置的配置文件。这相当于`siteConfig.js`Docusaurus v1 中的
- `/package.json`- Docusaurus 网站是一个 React 应用程序。您可以在其中安装和使用您喜欢的任何 npm 软件包
- `/sidebars.js`- 文档使用它来指定侧边栏中文档的顺序

### 更新 Docusaurus 版本

有多种方法可以更新 Docusaurus 版本。一种有保证的方法是手动将版本号更改`package.json`为所需的版本。请注意，所有
`@docusaurus/`命名空间包应使用相同的版本。

然后，在包含 的目录中`package.json`，运行包管理器的安装命令：`yarn install`。

检查更新是否成功：`npx docusaurus --version`。

## 配置

`docusaurus.config.js`

## 部署到 Github

1. 配置文件中设置：

```sh
url: 'https://mhuahe.github.io/',
baseUrl: '/hmh.com/',

organizationName: 'mhuahe',
projectName: 'mhuahe.com',
```

2. 设置 Github 配置 Setting>Pages

3. 执行命令：

   - `yarn build`打包

   - `cmd /C 'set "GIT_USER=mhuahe" && yarn deploy'`

     设置变量 && 部署到 Github pages

   - https://mhuahe.github.io/mhuahe.com/

     访问 Github Pages 地址

## swizzle

查看可 swizzle 的组件

```shell
yarn swizzle @docusaurus/theme-classic --list
```

## 集成搜索引擎 Algolia

### 申请Algolia

https://docsearch.algolia.com/apply/

### 配置Algolia
https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template

使用推荐配置，否则可能会出现搜索结果为空的，且只在配置`contextualSearch: true`时，才能搜索出结果。

```js
new Crawler({
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
  rateLimit: 8,
  maxDepth: 10,
  startUrls: ['https://YOUR_WEBSITE_URL/'],
  sitemaps: ['https://YOUR_WEBSITE_URL/sitemap.xml'],
  ignoreCanonicalTo: true,
  discoveryPatterns: ['https://YOUR_WEBSITE_URL/**'],
  actions: [
    {
      indexName: 'YOUR_INDEX_NAME',
      pathsToMatch: ['https://YOUR_WEBSITE_URL/**'],
      recordExtractor: ({ $, helpers }) => {
        // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
        const lvl0 =
          $(
            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
          )
            .last()
            .text() || 'Documentation';

        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: '',
              defaultValue: lvl0,
            },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            lvl4: 'article h4',
            lvl5: 'article h5, article td:first-child',
            lvl6: 'article h6',
            content: 'article p, article li, article td:last-child',
          },
          indexHeadings: true,
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
  ],
  initialIndexSettings: {
    YOUR_INDEX_NAME: {
      attributesForFaceting: [
        'type',
        'lang',
        'language',
        'version',
        'docusaurus_tag',
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
      separatorsToIndex: '_',
    },
  },
});
```

### 配置 docusaurus.config.js

```ts
export default {
  themeConfig: {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  },
};
```

## 集成本地搜索引擎 docusaurus-search-local

配置

```js
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
    ({
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      // language: ["en", "zh"],
    }),
  ],
],
```

启动搜索

```
yarn run build
yarn run serve
```

## Markdown 和 JSX

Docusaurus v3 使用 MDX v3。

MDX 语法主要与 CommonMark 兼容，但更严格，因为您的.mdx 文件可以使用 JSX 并编译成真正的 React 组件（检查 Playground ）。

一些有效的 CommonMark 功能不适用于 MDX（更多信息），特别是：

- 缩进代码块：使用三个反引号代替
- 自动链接 (`<http://localhost:3000>`)：使用常规链接语法 (`[http://localhost:3000](http://localhost:3000)`)
- HTML 语法 (`<p style="color: red;">`)：使用 JSX 代替 (`<p style={{color: 'red'}}>`)
- 未转义的`{`and `<`：用( `\{`and `\<`)转义

## category 索引约定

Docusaurus 可以自动给一个类别关联一篇索引文档。

类别索引文档的文件名符合下列条件之一（不区分大小写）：

- 命名为`index`: docs/Guides/index.md
- 命名为`README`: docs/Guides/README.mdx
- 跟父目录同名: docs/Guides/Guides.md

## 评论系统

### disqus

为本博客（docusaurus）添加 disqus 评论系统。

首先需要在 disqus 有一个账号，没有需要先注册。选择 "get started" =>" I want to install Disqus on my site" 。在 disqus 上配置对应的网站信息，配置的 Website Name 就是后面组件中要用到的 shortname。

`yarn add disqus-react`

```tsx title="src/theme/BlogPostPage/index.tsx"
import { DiscussionEmbed } from "disqus-react";

const { title, description, tags, permalink } = metadata;
const fmtId = permalink.replace(/^\//, "").replace(/[\s\/]/gi, "-");
const disqusId = fmtId == "" ? "main" : fmtId;

<DiscussionEmbed
  shortname="yourshortname"
  config={{
    url: "https://brightzoe.top" + permalink,
    identifier: disqusId,
    title: title,
  }}
/>;
```

### giscus

1. 登录 github 账号安装 giscus 应用 [giscus app](https://github.com/apps/giscus)。

2. 然后到 [giscus 的官网](https://giscus.app/zh-CN) 配置语言、github 仓库、页面与 discussion 映射关系、discussion 分类、特性、主题等。

注意：选择 giscus 连接到的仓库。请确保：

- 该仓库是公开的，否则访客将无法查看 discussion。
- giscus app 已安装，否则访客将无法评论和回应。
- Discussions 功能已在你的仓库中启用：General → Features → Discussions

页面 ↔️ discussion 映射关系 一般选择 Pathname 就行。实际生成的评论的时候，会以你的博客请求路径创建一个类似话题的讨论。

得到 `<script> `标签, 类似：

```js
<script src="https://giscus.app/client.js"
        data-repo="xxxxx"
        data-repo-id="xxxx"
        data-category="xxxx"
        data-category-id="xxxxx"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
```

3. Docusaurus 项目安装依赖：
   `yarn swizzle @docusaurus/theme-classic BlogPostPage`

- 选择 Eject (Unsafe) 回车
- 选择 YES: I know what I am doing! 回车

这时项目目录下 src/theme/BlogPostPage 生成了自定义主题的文件

> 注意：这里生成的文件只对你的 Blog 目录下的文章插入评论系统 如果你要在 docs 目录下也插入评论系统，则还需要执行命令：
> `yarn swizzle @docusaurus/theme-classic DocItem/Layout`

修改代码：src/theme/BlogPostPage/index.jsx

```js title="src/theme/BlogPostPage/index.jsx"
function BlogPostPageContent({ sidebar, children }) {
  //开始
  const commentElement = useRef(null);
  useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "[你的仓库]");
    s.setAttribute("data-repo-id", "[你的仓库 ID]=");
    s.setAttribute("data-category", "[你的分类名]");
    s.setAttribute("data-category-id", "[你的分类 ID]");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "light");
    s.setAttribute("data-lang", "zh-CN");
    s.setAttribute("data-loading", "lazy");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    commentElement.current.appendChild(s);
  }, []);
  //结束
  return (
    <BlogLayout>
      //开始
      <div style={{ marginTop: "20px" }} ref={commentElement}></div>
      //结束
    </BlogLayout>
  );
}
```

doc 添加评论功能修改代码：src/theme/DocItem/Layout/index.jsx

```js title="src/theme/DocItem/Layout/index.jsx"
export default function DocItemLayout({ children }) {
  //开始
  const commentElement = useRef(null);
  useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "MingGH/996-ninja-giscus");
    s.setAttribute("data-repo-id", "R_kgDOL5y6Fw");
    s.setAttribute("data-category", "General");
    s.setAttribute("data-category-id", "DIC_kwDOL5y6F84CfRWy");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "preferred_color_scheme");
    s.setAttribute("data-lang", "zh-CN");
    s.setAttribute("data-loading", "lazy");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    commentElement.current.appendChild(s);
  }, []);
  //结束
  return (
    <div>
      <div>
        <div>
          <article>
            //开始
            <div style={{ marginTop: "20px" }} ref={commentElement}></div>
            //结束
          </article>
        </div>
      </div>
    </div>
  );
}
```

## prism 代码高亮

```ts title="docusaurus.config.ts"
export default {
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
```

## 目录层级设置

```ts title="docusaurus.config.ts"
export default {
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  },
};
```

## 内联目录

```jsx title="mdx-code-block"
import TOCInline from "@theme/TOCInline";

<TOCInline
  // Only show h2 and h4 headings
  toc={toc.filter((node) => node.level === 2 || node.level === 4)}
  minHeadingLevel={2}
  // Show h4 headings in addition to the default h2 and h3 headings
  maxHeadingLevel={4}
/>;
```

```mdx-code-block
import TOCInline from '@theme/TOCInline';

<TOCInline
  toc={toc}
  minHeadingLevel={2}
  maxHeadingLevel={3}
/>
```

## 选项卡

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  className="unique-tabs"
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

```mdx-code-block
<Tabs className="unique-tabs" groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>
```

## 代码高亮

```jsx {1,4-6,11}
import React from "react";

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## 自定义高亮

```ts
export default {
  themeConfig: {
    prism: {
      magicComments: [
        //highlight-start
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        //highlight-end
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
  },
};
```

```ts
const name = null;
//This will error
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```

## 交互代码编辑器

1.  `yarn add @docusaurus/theme-live-codeblock`

2.  配置：
    ```ts title="docusaurus.config.js"
    export default {
      // ...
      themes: ["@docusaurus/theme-live-codeblock"],
      // ...
    };
    ```
3.  示例：

````jsx live
function Clock(props) {
const [date, setDate] = useState(new Date());
useEffect(() => {
const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
          clearInterval(timerID);
        };
      });

      function tick() {
        setDate(new Date());
      }

      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
````

:::warning[重要]

你不能从 react-live 的代码编辑器中直接导入组件。你得显式地预先定义好所有组件导入项。

:::


默认情况下，你可以使用 React 的所有导入项。 如果你需要更多可导入项，你通过 swizzle 组件 react-live scope 来获取：

1. `yarn swizzle @docusaurus/theme-live-codeblock ReactLiveScope --eject`
2. 示例：

```js title="src/theme/ReactLiveScope/index.js"
import React from "react";

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: "white",
      color: "black",
      border: "solid red",
      borderRadius: 20,
      padding: 10,
      cursor: "pointer",
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
};

export default ReactLiveScope;
```

3. 使用：
```jsx live
function MyPlayground(props) {
  return (
    <div>
      <ButtonExample onClick={() => alert("hey!")}>Click me</ButtonExample>
    </div>
  );
}
```

## 命令式渲染

```jsx live noInline
const project = "Docusaurus";

const Greeting = () => <p>Hello {project}!</p>;

render(<Greeting />);
```

## 告示语法

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#告示语法).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#命令式渲染).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#交互代码编辑器).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#自定义高亮).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger[自定义]

Some **content** with some _Markdown_ `syntax`.

:::

:::::info[第一层嵌套]

第一层嵌套内容

::::danger[第二层嵌套]

第二层嵌套内容

:::tip[第三层嵌套]

第三层嵌套内容

:::

::::

:::::

```mdx-code-block
:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::
```

```mdx-code-block
import Admonition from '@theme/Admonition';

<Admonition type="tip" icon="💡" title="Did you know...">
  Use plugins to introduce shorter syntax for the most commonly used JSX
  elements in your project.
</Admonition>
```

## 资源

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  width="50%"
  alt="img"
  sources={{
    light: useBaseUrl('/img/java.svg'),
    dark: useBaseUrl('/img/web.svg'),
  }}
/>
```

## 图表

[mermaid 示例](https://mermaid.js.org/intro/syntax-reference.html)

```mermaid
erDiagram
          CUSTOMER }|..|{ DELIVERY-ADDRESS : has
          CUSTOMER ||--o{ ORDER : places
          CUSTOMER ||--o{ INVOICE : "liable for"
          DELIVERY-ADDRESS ||--o{ ORDER : receives
          INVOICE ||--|{ ORDER : covers
          ORDER ||--|{ ORDER-ITEM : includes
          PRODUCT-CATEGORY ||--|{ PRODUCT : contains
          PRODUCT ||--o{ ORDER-ITEM : "ordered in"

```

动态 mermaid

```mdx-code-block
import Mermaid from '@theme/Mermaid';

<Mermaid
  value={`erDiagram
          CUSTOMER }|..|{ DELIVERY-ADDRESS : has
          CUSTOMER ||--o{ ORDER : places
          CUSTOMER ||--o{ INVOICE : "liable for"
          DELIVERY-ADDRESS ||--o{ ORDER : receives
          INVOICE ||--|{ ORDER : covers
          ORDER ||--|{ ORDER-ITEM : includes
          PRODUCT-CATEGORY ||--|{ PRODUCT : contains
          PRODUCT ||--o{ ORDER-ITEM : "ordered in"`}
/>
```

## 依赖说明

```json
{
  // 项目名称
  "name": "my-website",
  // 版本
  "version": "1.0",
  // 私有
  "private": true,
  // 脚本
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    // 使用@docusaurus/core来创建Docusaurus站点
    "@docusaurus/core": "^3.6.0",
    // 使用@docusaurus/faster来加速构建
    "@docusaurus/faster": "^3.6.0",
    // Rsdoctor插件可以帮助您解决 Docusaurus 站点捆绑阶段的问题，同时支持 Webpack 和 Rspack。
    "@docusaurus/plugin-rsdoctor": "^3.6.0",
    // 使用@docusaurus/preset-classic来配置Docusaurus
    "@docusaurus/preset-classic": "^3.6.0",
    // 使用@docusaurus/theme-live-codeblock来高亮代码
    "@docusaurus/theme-live-codeblock": "^3.6.0",
    // 使用@docusaurus/theme-mermaid来渲染图表
    "@docusaurus/theme-mermaid": "^3.6.0",
    // 使用@easyops-cn/docusaurus-search-local来搜索
    "@easyops-cn/docusaurus-search-local": "^0.44.5",
    // 使用@mdx-js/react来渲染MDX
    "@mdx-js/react": "^3.0.0",
    // 使用@types/react-dom来类型检查React DOM
    "@types/react-dom": "^18.3.0",
    // 使用clsx来处理CSS类
    "clsx": "^2.0.0",
    // 使用disqus-react来渲染Disqus评论
    "disqus-react": "^1.1.5",
    // 使用media-chrome来处理媒体
    "media-chrome": "^4.2.2",
    // 使用prism-react-renderer来渲染代码
    "prism-react-renderer": "^2.3.0",
    // 使用react来渲染React组件
    "react": "^18.0.0",
    // 使用react-dom来渲染React DOM
    "react-dom": "^18.0.0",
    // 使用react-player来处理视频
    "react-player": "^2.16.0",
    // 使用screenfull来处理全屏
    "screenfull": "^6.0.2"
  },
  "devDependencies": {
    // 使用@docusaurus/module-type-aliases来处理模块类型
    "@docusaurus/module-type-aliases": "^3.6.0",
    // 使用@docusaurus/tsconfig来处理TypeScript配置
    "@docusaurus/tsconfig": "^3.6.0",
    // 使用@docusaurus/types来处理类型
    "@docusaurus/types": "^3.6.0",
    // 使用typescript来处理TypeScript
    "typescript": "~5.5.2"
  },
  // 浏览器兼容性
  "browserslist": {
    // 生产环境
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    // 开发环境
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  // Node.js版本要求
  "engines": {
    "node": ">=18.0"
  }
}
```
