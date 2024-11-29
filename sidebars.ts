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
  java: [
    {
      type: 'category',
      // 分类标题
      label: '基本知识',
      // 分类默认折叠
      collapsed: true,
      /**
       * `link`作用是为分类创建一个自动生成的索引页面
       * - `type`：`generated-index` 生成索引页面（分类下的文档列表）
       * - `description`：为索引页面添加描述
       * 
       * 当你点击侧边栏中的分类标题时，会跳转到这个自动生成的索引页面，该页面会：
       * - 显示你配置的描述文本
       * - 自动列出该分类下的所有文档链接
       * - 从每个文档中提取描述信息（如果有）
       */
      link: {
        type: 'generated-index',
        description: 'Java相关的基本知识',
      },
      // 分类下的文档链接
      items: [
        'java/JAVA',
        'java/JAVA-JDK-Version',
        'java/JAVA-JVM',
        'java/JAVA-Thread',
        'java/JAVA-Servlet',
        'java/JAVA-Design-Pattern',
        'java/JAVA-Error-Record',
      ],
    },
    {
      type: 'category',
      label: '框架',
      link: {
        type: 'generated-index',
        description: 'Spring相关的知识',
      },
      items: [
        'java/JAVA-MybatisPlus',
        'java/JAVA-SpringBoot-Version',
        'java/JAVA-SpringBoot-Stack',
        'java/JAVA-SpringCloud-Stack',
        'java/JAVA-OAuth2-SourceCode',
      ],
    },
    {
      type: 'category',
      label: '知识算法',
      link: {
        type: 'generated-index',
        description: 'Java相关的知识算法',
      },
      items: [
        'java/JAVA-Algorithm',
        'java/JAVA-Knowledge-Question',
        'java/JAVA-Code-Generation',
        'java/JAVA-SQL-Interceptor',
      ],
    },
    'java/JAVA-MQ',
    {
      type: 'category',
      label: '技术工具',
      link: {
        type: 'generated-index',
        description: 'Java相关的技术工具',
      },
      items: [
        'java/JAVA-Maven',
        'java/JAVA-Maven-Dependent',
        'java/JAVA-PDF',
        'java/JAVA-Hutool',
        'java/JAVA-Encryption',
        'java/JAVA-WebSocket',
      ],
    },
  ],
  web: [{ type: 'autogenerated', dirName: 'web' }],
  c: [{ type: 'autogenerated', dirName: 'c' }],
  linux: [{ type: 'autogenerated', dirName: 'linux' }],
  sql: [{ type: 'autogenerated', dirName: 'sql' }],
  python: [{ type: 'autogenerated', dirName: 'python' }],
  tool: [{ type: 'autogenerated', dirName: 'tool' }],
  project: [{ type: 'autogenerated', dirName: 'project' }],
  other: [
    {
      // 指定为自动生成
      type: 'autogenerated',
      // 指定目录（从 docs 目录开始）
      dirName: 'other',
    },
  ],
  knowledge: [{ type: 'autogenerated', dirName: 'knowledge' }],

  // But you can create a sidebar manually
  example: [
    {
      type: 'html',
      value: '<div>📺 多媒体示例</div>',
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: 'html',
      value: '<hr/>',
    },
    {
      type: 'category',
      label: '示例',
      /**
       * 当 `link` 的 `type` 设置为 `doc` 时，`id` 用于指定要链接到的具体文档。
       * - type：`doc` 指定为文档
       * - id：指定文档的ID。
       * 
       * ID的构建规则：
       * - 从 docs 目录开始
       * - 去掉 `.md` 或 `.mdx` 扩展名
       * - 用 `/` 连接路径
       */
      link: {
        type: 'doc',
        id: 'example/EXAMPLE',
      },
      items: [
        {
          type: 'doc',
          id: 'example/EXAMPLE-Video',
          className: 'sidebar-video-item',
          label: '🎥 Video'
        }
      ],
    },
  ],
}

export default sidebars;
