import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import { useWindowSize } from '@docusaurus/theme-common'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import DocItemPaginator from '@theme/DocItem/Paginator'
import DocVersionBanner from '@theme/DocVersionBanner'
import DocVersionBadge from '@theme/DocVersionBadge'
import DocItemFooter from '@theme/DocItem/Footer'
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile'
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop'
import DocItemContent from '@theme/DocItem/Content'
import DocBreadcrumbs from '@theme/DocBreadcrumbs'
import ContentVisibility from '@theme/ContentVisibility'
import type { Props } from '@theme/DocItem/Layout'
import { DiscussionEmbed } from 'disqus-react';

import styles from './styles.module.css'
import PageViewCounter from '@site/src/components/PageViewCounter'

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc()
  const windowSize = useWindowSize()

  const hidden = frontMatter.hide_table_of_contents
  const canRender = !hidden && toc.length > 0

  const mobile = canRender ? <DocItemTOCMobile /> : undefined

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined

  return {
    hidden,
    mobile,
    desktop,
  }
}

export default function DocItemLayout({ children }: Props): React.ReactElement {
  const docTOC = useDocTOC()
  const { metadata } = useDoc()

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

  const { permalink, title } = metadata
  const fmtId = permalink.replace(/^\//, '').replace(/[\s\/]/gi, '-');
  const disqusId = fmtId == '' ? 'main' : fmtId;

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          {/* <div style={{ marginTop: '20px' }} ref={commentElement}></div> */}
          {/* 评论 */}
          <DiscussionEmbed
            shortname='mhuahe' //在disqus 配置的
            config={{
              url: 'https://brightzoe.top' + permalink, //完整网址
              identifier: disqusId, //识别符
              title: title,
            }}
          />
          {/* 访问计数器 */}
          <PageViewCounter />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  )
}
