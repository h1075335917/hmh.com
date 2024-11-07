import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "贺敏华的官方网站",
  tagline: "贺敏华自用的笔记网站",
  favicon: "img/m_two_logo.ico",

  // 设置生产环境的站点 URL
  url: "https://mhuahe.github.io/",
  // 设置站点的 /<baseUrl>/ 路径名，您的站点在此路径下提供
  // 对于 GitHub pages 部署，它通常是 '/<projectName>/'
  baseUrl: "/mhuahe.com/",

  // GitHub pages 部署配置。
  // 如果您不使用 GitHub pages，则不需要这些。
  organizationName: "mhuahe", // 拥有部署仓库的 GitHub 用户或组织 ORGANIZATION_NAME
  projectName: "mhuahe.com", // 部署仓库的名字 PROJECT_NAME
  deploymentBranch: "gh-pages", // 部署分支的名称 DEPLOYMENT_BRANCH
  trailingSlash: false, // 是否在 URL 末尾添加尾随斜杠

  onBrokenLinks: "throw", // 当链接断开时，抛出错误
  onBrokenMarkdownLinks: "warn", // 当 Markdown 链接断开时，发出警告

  // 即使您不使用国际化，也可以使用此字段设置
  // 有用元数据，例如 html lang。例如，如果您的网站是中文，您可能希望将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  future: {
    // @docusaurus/faster
    experimental_faster: {
      swcJsLoader: true, // 使用SWC转译 JS (而不是Babel )
      swcJsMinimizer: true, // 使用SWC来缩小 JS （而不是Terser）
      swcHtmlMinimizer: true, // 使用SWC来缩小 HTML （而不是HtmlMinimizer）
      lightningCssMinimizer: true, // 使用Lightning CSS来缩小CSS（而不是CSSMinimizer）
      rspackBundler: false, // 使用Rspack作为捆绑器（而不是Webpack）
      mdxCrossCompilerCache: true, // 使用MDX交叉编译器缓存，为浏览器/Node.js 环境编译 MDX 文件一次，而不是两次
    },
  },

  plugins: [
    // Rsdoctor插件可以帮助您解决 Docusaurus 站点捆绑阶段的问题，同时支持 Webpack 和 Rspack。
    // [
    //   "rsdoctor",
    //   {
    //     rsdoctorOptions: {
    //       mode: "lite",
    //     },
    //   },
    // ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // 将传递给 @docusaurus/plugin-content-docs (false 禁用)
        docs: {
          path: "docs",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
        },
        // 将传递给 @docusaurus/plugin-content-blog (false 禁用)
        blog: {
          path: "blog",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showReadingTime: true,
          // 博客订阅选项
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 博客侧边栏标题
          blogSidebarTitle: "最新博客",
          // 在行内标签上警告
          onInlineTags: "warn",
          // 在行内作者上警告
          onInlineAuthors: "warn",
          // 在未截断的博客文章上警告
          onUntruncatedBlogPosts: "warn",
        },
        // 将传递给 @docusaurus/plugin-content-pages (false 禁用)
        pages: {
          path: "src/pages",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // 将传递给 @docusaurus/plugin-sitemap (false 禁用)
        sitemap: {},
        // 将传递给 @docusaurus/theme-classic
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 当您的网站链接被分享到社交媒体平台（如Facebook、Twitter等）时，这些平台会生成一个预览卡片，显示网站的基本信息。这个卡片通常包含网站标题、描述和一张图片。
    image: "img/docusaurus-social-card.jpg",
    // 导航栏
    navbar: {
      title: "贺敏华的官方网站",
      logo: {
        alt: "mhuahe site logo",
        src: "img/m_two_logo.svg",
        srcDark: "img/m_two_logo.svg",
        width: 32,
        height: 32,
      },
      // 滚动页面时，导航栏隐藏
      hideOnScroll: false,
      // 导航栏项目
      items: [
        {
          type: "docSidebar",
          sidebarId: "java",
          position: "left",
          label: "Java",
        },
        {
          type: "docSidebar",
          sidebarId: "web",
          position: "left",
          label: "前端",
        },
        {
          type: "docSidebar",
          sidebarId: "c",
          position: "left",
          label: "C语言",
        },
        {
          type: "docSidebar",
          sidebarId: "linux",
          position: "left",
          label: "Linux",
        },
        {
          type: "docSidebar",
          sidebarId: "sql",
          position: "left",
          label: "SQL",
        },
        {
          type: "docSidebar",
          sidebarId: "python",
          position: "left",
          label: "Python",
        },
        {
          type: "docSidebar",
          sidebarId: "tool",
          position: "left",
          label: "工具",
        },
        {
          type: "docSidebar",
          sidebarId: "project",
          position: "left",
          label: "项目",
        },
        {
          type: "docSidebar",
          sidebarId: "knowledge",
          position: "left",
          label: "知识",
        },
        {
          type: "docSidebar",
          sidebarId: "other",
          position: "left",
          label: "其他",
        },
        {
          type: "docSidebar",
          sidebarId: "example",
          position: "right",
          label: "示例",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "/pintree/index.html",
          label: "书签",
          position: "right",
          target: "_blank",
        },
        {
          href: "https://github.com/mhuahe/mhuahe.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // 公告栏
    announcementBar: {
      id: "announcement-bar",
      content:
        '🎉️<b>本网站正在建设中，欢迎提出宝贵意见！<a target="_blank" href="https://github.com/mhuahe/mhuahe.com">源码地址</a></b> 🥳️',
      isCloseable: true,
    },
    footer: {
      // style: "dark",
      // links: [
      //   {
      //     title: "文档",
      //     items: [
      //       {
      //         label: "开发文档",
      //         to: "https://docusaurus.io/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "社区",
      //     items: [
      //       {
      //         label: "博客园",
      //         href: "https://www.cnblogs.com/minhua",
      //       },
      //       {
      //         label: "掘金",
      //         href: "https://juejin.cn/user/2331397363880808",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://x.com/mihuahe",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "https://mhuahe.github.io/mhuahe.com/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/mhuahe",
      //       },
      //     ],
      //   },
      // ],
      // logo: {
      //   alt: "Meta Open Source Logo",
      //   src: "/img/meta_opensource_logo_negative.svg",
      //   href: "https://opensource.fb.com",
      // },
      copyright: `© ${new Date().getFullYear()} mhuahe. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      //自定义高亮
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line", //只适用于下一行
          block: { start: "highlight-start", end: "highlight-end" }, //适用在区间
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        //可隐藏侧边栏
        hideable: true,
      },
    },
    //目录层级
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    //[mermaid 主题](https://mermaid.js.org/config/theming.html)
    mermaid: {
      theme: {
        light: "neutral",
        dark: "forest",
      },
    },
    colorMode: {
      // 使用prefers-color-scheme媒体查询、使用用户系统首选项.
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    //交互代码编辑器
    require.resolve("@docusaurus/theme-live-codeblock"),
    //mermaid图表插件
    require.resolve("@docusaurus/theme-mermaid"),
    //本地搜索插件
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        // 在目标页面上突出显示搜索词。
        highlightSearchTermsOnTargetPage: true,
        // 搜索结果限制
        searchResultLimits: 10,
        // 是否使用搜索栏快捷方式
        searchBarShortcut: true,
        // 是否显示搜索栏快捷方式
        searchBarShortcutHint: true,
        // 搜索栏位置："auto" | "left" | "right"
        searchBarPosition: "auto",
      },
    ],
  ],

  markdown: {
    // 启用mermaid图表
    mermaid: true,
  },
};

export default config;
