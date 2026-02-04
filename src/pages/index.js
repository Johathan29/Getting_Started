import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import UpdatesList from '../components/UpdatesSection/index';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
     <section className={styles.hero}>
      {/* Grid background */}
      <div className={styles.grid}>
        <svg width="100%" height="100%" fill="none">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className={styles.container}>
        <h1 className={clsx("text-white",styles.title)}>
          Documentación Técnica
        </h1>

        <p className={styles.description}>
          Recursos integrales para desarrolladores, analistas y arquitectos de
          sistemas del Ministerio. Construyendo el futuro digital de la
          administración pública.
        </p>

        <div className={styles.searchBox}>
          <span className={styles.icon}>search</span>

          <input
            type="text"
            placeholder="¿Qué estás buscando hoy? (ej. API de Impuestos)"
            className={styles.input}
          />

          <kbd className={styles.kbd}>CMD + K</kbd>
        </div>
      </div>
    </section>
    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <UpdatesList></UpdatesList>
      </main>
    </Layout>
  );
}

