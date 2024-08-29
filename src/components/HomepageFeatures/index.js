import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Java',
    to: '/docs/intro',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我的<code>Java</code>笔记.
      </>
    ),
  },
  {
    title: 'JavaScript',
    to: '#',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我的<code>JavaScript</code>笔记.
      </>
    ),
  },
  {
    title: 'Blog',
    to: '/blog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我的<code>Blog</code>.
      </>
    ),
  },
]

function Feature ({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Link
          to={to}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
