# DocCardList

## 使用DocCardList
在sidebar.js中，你的菜单的类型必须是category的，并且你的这个目录下，必须有其他的文件
```js title="sidebars.ts"
example: [
    'example/EXAMPLE-Video',
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
]
```

```md title="xxx.md"
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```