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
  favicon: 'img/favicon.ico',

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
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // 默认从docs目录中生成
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
                label: 'Tutorial',
                to: '/docs/intro',
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
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright:
          `&copy;<a href="/mhuahe.com">mhuahe.com</a>
            - <a href="https://github.com/mhuahe/mhuahe.com" target="_blank">GitHub</a>
            - <a href="/mhuahe.com/license/README">License</a>
            - Built with Docusaurus.`
      },
      //黑亮主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      //algolia文档搜索
      algolia: {
        appId: 'WZKDOGRNUN',
        apiKey: '7bf03af7c1e8bf9a9460bd56598602f7',
        indexName: 'YOUR_INDEX_NAME',
      },
    }),
}

export default config
