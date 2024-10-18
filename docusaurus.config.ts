import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "贺敏华的官方网站",
  tagline: "贺敏华自用的笔记网站",
  favicon: "img/mhuahe.ico",

  // Set the production url of your site here
  url: "https://mhuahe.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mhuahe.com/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mhuahe", // Usually your GitHub org/user name.
  projectName: "mhuahe.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          path: "docs",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
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
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {
          path: "src/pages",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // Will be passed to @docusaurus/plugin-sitemap (false to disable)
        sitemap: {},
        // Will be passed to @docusaurus/theme-classic
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
      // logo: {
      //   alt: "mhuahe site logo",
      //   src: "img/mhuahe.svg",
      //   srcDark: 'img/mhuahe_dark.svg',
      //   width: 32,
      //   height: 32,
      // },
      // 滚动页面时，导航栏隐藏
      hideOnScroll: false,
      // 导航栏项目
      items: [
        {
          type: "docSidebar",
          sidebarId: "example",
          position: "left",
          label: "示例",
        },
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
          sidebarId: "mysql",
          position: "left",
          label: "MySQL",
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
          sidebarId: "other",
          position: "left",
          label: "其他",
        },
        { to: "/blog", label: "Blog", position: "left" },
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
