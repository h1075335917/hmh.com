import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  java: [{ type: 'autogenerated', dirName: 'java' }],
  web: [{ type: 'autogenerated', dirName: 'web' }],
  c: [{ type: 'autogenerated', dirName: 'c' }],
  linux: [{ type: 'autogenerated', dirName: 'linux' }],
  mysql: [{ type: 'autogenerated', dirName: 'mysql' }],
  python: [{ type: 'autogenerated', dirName: 'python' }],
  tool: [{ type: 'autogenerated', dirName: 'tool' }],
  project: [{ type: 'autogenerated', dirName: 'project' }],
  other: [{ type: 'autogenerated', dirName: 'other' }],

  // But you can create a sidebar manually
  example: [
    'example/EXAMPLE-Video',
    'example/EXAMPLE-Resume',
    {
      type: 'category',
      label: 'DocCardList示例',
      link: {
        type: 'generated-index',
      },
      items: [
        'example/EXAMPLE-DocCardList',
      ],
    },
  ],
}

export default sidebars;
