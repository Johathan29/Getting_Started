/*import clsx from 'clsx';
import Link from '@docusaurus/Link';
import markdown from './markdown-page.md'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
  
      
        <main className={clsx('container main',styles.main)}>
          <h1>Categorias</h1>
            <div className={clsx('cardContainer ', styles.cardContainer)}>
                {FeatureList.map((props, idx) => (
                    <Card key={idx} {...props} />
            ))}
            
        </div>
        <Tabs groupId="current-os" queryString className={clsx('tabs',styles.tabs)}>
          <TabItem value="android" label="Android">
            Android
          </TabItem>
          <TabItem value="ios" label="iOS">
            iOS
          </TabItem>
        </Tabs>
    </main>
    
    );
  }*/
