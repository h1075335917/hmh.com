import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Java',
    to: '/docs/java',
    Svg: require('@site/static/img/java.svg').default,
    description: (
      <>
        我的<code>Java</code>笔记.
      </>
    ),
  },
  {
    title: '前端',
    to: '/docs/web',
    Svg: require('@site/static/img/web.svg').default,
    description: (
      <>
        我的<code>前端</code>笔记.
      </>
    ),
  },
  {
    title: 'Blog',
    to: '/blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        我的<code>Blog</code>.
      </>
    ),
  },
]

function Feature ({ title, Svg, description, to }: FeatureItem) {
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

export default function HomepageFeatures (): JSX.Element {
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
