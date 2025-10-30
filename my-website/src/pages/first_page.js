import clsx from 'clsx';
import Link from '@docusaurus/Link';
import markdown from './markdown-page.md'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './first_page.module.css';
import Card from '../components/ui/card';

export default function first_page() {
    const FeatureList = [
        {
          title: 'FrontEnd',
          slug:'frontend',
          Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
          description: (
            <>
              Docusaurus was designed from the ground up to be easily installed and
              used to get your website up and running quickly.
            </>
          ),
        },
        {
          title: 'BackEnd',
          slug:'backend',
          Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
          description: (
            <>
              Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
              ahead and move your docs into the <code>docs</code> directory.
            </>
          ),
        },
        {
          title: 'API',
          slug:'api',
          Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
          description: (
            <>
              Extend or customize your website layout by reusing React. Docusaurus can
              be extended while reusing the same header and footer.
            </>
          ),
        },
      ];
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
      
        <main className={clsx('container')}>
         
            <div className={clsx('cardContainer ', styles.cardContainer)}>
                {FeatureList.map((props, idx) => (
                    <Card key={idx} {...props} />
            ))}
            
        </div>
    </main>
      </Layout>
    );
  }