import React from 'react'
import Head from '@docusaurus/Head'
import { useBlogPostStructuredData } from '@docusaurus/plugin-content-blog/client'

export default function BlogPostStructuredData (): React.ReactElement {
  const structuredData = useBlogPostStructuredData()
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  )
}
