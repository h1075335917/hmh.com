import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Copyright from '@site/src/components/Copyright';

import React from 'react';

export default function Vcard(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Copyright behavior="Hello" description="Hello" url="Hello" />
      </main>
    </Layout>
  );
}