import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { firstRow } from "../data/features";

const features = [
  {
    title: <>Intro </>,
    imageUrl: 'img/relay-icon.e8d6824b.svg',
    description: (
      <>
	If you are an end user of the Acent Swap ecosystem then this section is for you. We
	dive into how to buy, store and make the best of your investment in the Relay Ecosystem.
      </>
    ),
  },
  {
    title: <>BaaS </>,
    imageUrl: 'img/relay-icon.e8d6824b.svg',
    description: (
      <>
	Businesses interested in using BaaS and joining the Acent Swap Ecosystem should dive into this section to help them
	understand how the Acent Swap Ecosystem can help their business.
      </>
    ),
  },
  {
    title: <>Devs</>,
    imageUrl: 'img/relay-icon.e8d6824b.svg',
    description: (
      <>
	Calling all developers. If you want to explore the more technical side of the Acent Swap Ecosystem then
	you should start here. Find references and code snippets to integrate with Acent Swap.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FirstRow({ title, description, linkUrl, imageUrl }) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (

    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)} activeClassName="active">
        <div className="show-card">
          <div className="icon-wrapper">
            <img src={useBaseUrl(imageUrl)} alt={title} className="icon" />
          </div>
          <div className="title">{title}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </div>

  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Project Reference Guide`}
      description="Brought to you by Acent Swap">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro')}>
              Intro 
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/baas')}>
              BaaS 
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/resources')}>
              Devs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
