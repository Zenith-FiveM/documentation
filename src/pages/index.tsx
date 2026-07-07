import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={styles.heroBanner}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={clsx('container', styles.heroInner)}>
                <Link
                    className={styles.badge}
                    to="https://github.com/Zenith-FiveM/documentation"
                >
                    <span className={styles.badgeDot} />
                    Open-source · GPL-3.0 · Built on ox
                </Link>

                <Heading as="h1" className={styles.heroTitle}>
                    The framework that hits its{' '}
                    <span className="zenith-gradient-text">Zenith</span>
                </Heading>

                <p className={styles.heroSubtitle}>
                    A modern roleplay framework for FiveM. Lightweight core,
                    modular by design, and native to the ox ecosystem — without
                    the bloat or the boilerplate.
                </p>

                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/intro"
                    >
                        Get Started
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://github.com/Zenith-FiveM/documentation"
                    >
                        View on GitHub
                    </Link>
                </div>

                <div className={styles.stackRow}>
                    <span className={styles.stackLabel}>Plays nice with</span>
                    <span className={styles.stackPills}>
                        <span className={styles.pill}>ox_lib</span>
                        <span className={styles.pill}>ox_inventory</span>
                        <span className={styles.pill}>ox_target</span>
                        <span className={styles.pill}>oxmysql</span>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} — Modern FiveM Roleplay Framework`}
            description="Zenith is a modern, lightweight, modular roleplay framework for FiveM, built on the ox ecosystem with a QBCore/ESX compatibility bridge."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
