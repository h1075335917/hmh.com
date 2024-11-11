import clsx from 'clsx'
import styles from './styles.module.css'
import React from 'react'
import Translate from '@docusaurus/Translate'

type FeatureItem = {
  title: React.ReactNode;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.supportMe">支持我</Translate>,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.feature.supportMe.description">
          在这里给我一个星标
        </Translate>
        &nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mhuahe/mhuahe.com">GitHub</a>
      </>
    ),
  },
  {
    title: <Translate id="homepage.feature.aboutMe">关于我</Translate>,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.feature.aboutMe.description">
          在业的Java开发
        </Translate>
      </>
    ),
  },
  {
    title: <Translate id="homepage.feature.contactMe">联系我</Translate>,
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.feature.contactMe.description">
          微信: mhuahe
        </Translate>
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img"/> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): React.ReactElement {
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
