import React, { type ReactNode, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
// @ts-ignore
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client'
import BlogLayout from '@theme/BlogLayout'
import BlogPostItem from '@theme/BlogPostItem'
import BlogPostPaginator from '@theme/BlogPostPaginator'
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata'
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData'
import TOC from '@theme/TOC'
import ContentVisibility from '@theme/ContentVisibility'
import type { Props } from '@theme/BlogPostPage'
import type { BlogSidebar } from '@docusaurus/plugin-content-blog'
import { DiscussionEmbed } from 'disqus-react';
import PageViewCounter from '@site/src/components/PageViewCounter'

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar: BlogSidebar;
  children: ReactNode;
}): React.ReactElement {
  const { metadata, toc } = useBlogPost()
  const { nextItem, prevItem, frontMatter, permalink, title } = metadata
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter

  // const commentElement = useRef(null)
  // useEffect(() => {
  //   // Update the document title using the browser API : https://giscus.app/zh-CN
  //   let s = document.createElement('script')
  //   s.src = 'https://giscus.app/client.js'
  //   s.setAttribute('data-repo', 'mhuahe/mhuahe.com')
  //   s.setAttribute('data-repo-id', 'R_kgDOMpV-6w')
  //   s.setAttribute('data-category', 'Announcements')
  //   s.setAttribute('data-category-id', 'DIC_kwDOMpV-684CiOLI')
  //   s.setAttribute('data-mapping', 'pathname')
  //   s.setAttribute('data-reactions-enabled', '1')
  //   s.setAttribute('data-emit-metadata', '0')
  //   s.setAttribute('data-input-position', 'bottom')
  //   s.setAttribute('data-theme', 'light')
  //   s.setAttribute('data-lang', 'zh-CN')
  //   s.setAttribute('crossorigin', 'anonymous')
  //   s.async = true
  //   commentElement.current.appendChild(s)
  // }, [])

  const fmtId = permalink.replace(/^\//, '').replace(/[\s\/]/gi, '-');
  const disqusId = fmtId == '' ? 'main' : fmtId;

  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <ContentVisibility metadata={metadata} />

      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}

      {/* <div style={{ marginTop: '20px' }} ref={commentElement}></div> */}
      {/* 评论 */}
      <DiscussionEmbed
        shortname='mhuahe' //在disqus 配置的
        config={{
          url: 'https://brightzoe.top' + permalink, //完整网址
          identifier: disqusId, //识别符
          title: title,
          // language: 'en_US',
        }}
      />
      {/* 访问计数器 - 添加margin和样式控制 */}
      <div>
        <PageViewCounter />
      </div>
    </BlogLayout>
  )
}

export default function BlogPostPage(props: Props): React.ReactElement {
  const BlogPostContent = props.content
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  )
}
