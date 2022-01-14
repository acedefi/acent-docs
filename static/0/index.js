import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Ethereum (ETH,ERC20) </>,
    imageUrl: 'img/ethereum-logo.svg',
    description: (
      <>
	Ethereum (ETH) - Gas fees from hell, front running, and juicy liquidity make up this 
	section which will take you through what true Chad's already know. Once you're ready 
	you'll be able to take a shot at the big leagues and conquer DeFI on the 
	Ethereum (ETH) blockchain.
      </>
    ),
  },
  {
    title: <>Avalanche (AVAX,ARC20) </>,
    imageUrl: 'img/avax-logo.svg',
    description: (
      <>
	Avalanche (AVAX) - The chain we all thought we loved but couldn't figure out. X-chain, 
	C-Chain, P-Chain, AVAX has them all and it can be confusing if you don't know which is 
	which. Dive into the blockchain ZERO was the first DEX to launch on.
      </>
    ),
  },
  {
    title: <>Smart Chain (BNB,BEP2,BEP20) </>,
    imageUrl: 'img/binance-logo.svg',
    description: (
      <>
	Binance Smart Chain (BSC) - The new kid on the block. Binance Smart Chain has been taking 
	the DeFI space by storm. If you want to find out all the ins and outs, you need to know 
	about Smart Chain - then your true Degenerate will shine through.
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

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Degen Reference Guide">
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
              to={useBaseUrl('docs/eth')}>
              ETH 
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/avax')}>
              AVAX 
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/bsc')}>
              BSC 
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
