import React from 'react'
import type { Props } from '@theme/NotFound/Content'
import notFoundStyle from './styles.module.css'
import Link from '@docusaurus/Link'

export default function NotFoundContent ({ className }: Props): React.ReactElement {
  return (
    <main className={notFoundStyle.notFoundMain}>
      <section>
        <h1>Page Not Found!</h1>
        <div>
          <span>4</span>
          <span className={notFoundStyle.notFoundCircle}>0</span>
          <span>4</span>
        </div>
        <p>We are unable to find the page<br/>you're looking for.</p>
        <div>
          <Link to="/">Back to Home Page</Link>
        </div>
      </section>
    </main>
  )
}
