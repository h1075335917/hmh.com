// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '贺敏华的官方网站',
  tagline: '贺敏华自用的笔记网站',
  favicon: 'img/mhuahe.ico',

  // Set the production url of your site here
  url: 'https://mhuahe.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mhuahe.com/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mhuahe', // Usually your GitHub org/user name.
  projectName: 'mhuahe.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mhuahe/mhuahe.com/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mhuahe/mhuahe.com/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '贺敏华的官方网站',
        logo: {
          alt: 'Hmh Site Logo',
          src: 'img/mhuahe.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Java',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/mhuahe/mhuahe.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      //页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开发文档',
                to: 'https://docusaurus.io/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '博客园',
                href: 'https://www.cnblogs.com/minhua',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/2331397363880808',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/mihuahe',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mhuahe',
              },
            ],
          },
        ],
        copyright:
          `&copy;<a href="/mhuahe.com">mhuahe.com</a>
            - <a href="https://github.com/mhuahe/mhuahe.com" target="_blank">GitHub</a>
            - <a href="/mhuahe.com/license/README" target="_blank">License</a>
            - Built with Docusaurus.`
      },
      //黑亮主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      //可隐藏侧边栏
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
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
      }),
    ],
  ],
}

export default config
