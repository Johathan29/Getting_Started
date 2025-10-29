import clsx from 'clsx';
import Link from '@docusaurus/Link';
import markdown from './markdown-page.md'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './first_page.module.css';

export default function first_page() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
      
        <main>
         <h1 className={clsx('', styles.textBold, styles.heroBanner)}>title</h1>
        </main>
      </Layout>
    );
  }