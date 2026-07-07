import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import {
    Zap,
    Blocks,
    Cable,
    Waypoints,
    BookOpenText,
    Scale,
    ArrowUpRight,
} from 'lucide-react';
import styles from './styles.module.css';

function CoreSnippet() {
    return (
        <pre className={styles.snippet}>
            <code>
                <span className={styles.kw}>local</span> player ={' '}
                <span className={styles.ns}>Zenith</span>.
                <span className={styles.fn}>GetPlayer</span>(source){'\n'}
                {'\n'}
                player.<span className={styles.fn}>addMoney</span>(
                <span className={styles.str}>'bank'</span>,{' '}
                <span className={styles.num}>500</span>){'\n'}
                player.<span className={styles.fn}>setJob</span>(
                <span className={styles.str}>'police'</span>,{' '}
                <span className={styles.num}>2</span>){'\n'}
                player.<span className={styles.fn}>setMetadata</span>(
                <span className={styles.str}>'stress'</span>,{' '}
                <span className={styles.num}>0</span>)
            </code>
        </pre>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Why Zenith</span>
                    <Heading as="h2" className={styles.sectionTitle}>
                        Everything a server needs.
                        <br />
                        <span className="zenith-gradient-text">
                            Nothing it doesn&apos;t.
                        </span>
                    </Heading>
                </div>

                <div className={styles.bento}>
                    <article className={`${styles.tile} ${styles.tileCore}`}>
                        <div className={styles.tileHead}>
                            <span className={styles.iconWrap}>
                                <Zap size={20} strokeWidth={2.25} />
                            </span>
                            <span className={styles.kicker}>Core</span>
                        </div>
                        <Heading as="h3" className={styles.tileTitle}>
                            A lean core that&apos;s already complete
                        </Heading>
                        <p className={styles.tileText}>
                            Characters, economy, jobs, metadata and permissions
                            — one clean, predictable API. No 40-file dependency
                            chains to boot a player.
                        </p>
                        <CoreSnippet />
                    </article>

                    <article className={`${styles.tile} ${styles.tileModular}`}>
                        <div className={styles.tileHead}>
                            <span className={styles.iconWrap}>
                                <Blocks size={20} strokeWidth={2.25} />
                            </span>
                            <span className={styles.kicker}>Modular</span>
                        </div>
                        <Heading as="h3" className={styles.tileTitle}>
                            Switch on only what you run
                        </Heading>
                        <p className={styles.tileText}>
                            Every system is a self-contained module. Extend it,
                            replace it, or leave it off — the core never
                            notices.
                        </p>
                        <div className={styles.chips}>
                            <span className={`${styles.chip} ${styles.chipOn}`}>
                                characters
                            </span>
                            <span className={`${styles.chip} ${styles.chipOn}`}>
                                jobs
                            </span>
                            <span className={`${styles.chip} ${styles.chipOn}`}>
                                economy
                            </span>
                            <span className={styles.chip}>housing</span>
                            <span className={styles.chip}>gangs</span>
                        </div>
                    </article>

                    <article className={`${styles.tile} ${styles.tileOx}`}>
                        <div className={styles.tileHead}>
                            <span className={styles.iconWrap}>
                                <Cable size={20} strokeWidth={2.25} />
                            </span>
                            <span className={styles.kicker}>Native to ox</span>
                        </div>
                        <Heading as="h3" className={styles.tileTitle}>
                            No glue code required
                        </Heading>
                        <div className={styles.ecoGrid}>
                            <code className={styles.eco}>ox_lib</code>
                            <code className={styles.eco}>oxmysql</code>
                            <code className={styles.eco}>ox_inventory</code>
                            <code className={styles.eco}>ox_target</code>
                        </div>
                    </article>

                    <article className={`${styles.tile} ${styles.tileBridge}`}>
                        <span className={styles.iconWrap}>
                            <Waypoints size={20} strokeWidth={2.25} />
                        </span>
                        <Heading as="h3" className={styles.tileTitle}>
                            QBCore &amp; ESX bridge
                        </Heading>
                        <p className={styles.tileText}>
                            Run your existing resources unchanged and migrate at
                            your own pace.
                        </p>
                    </article>

                    <article className={`${styles.tile} ${styles.tileDocs}`}>
                        <span className={styles.iconWrap}>
                            <BookOpenText size={20} strokeWidth={2.25} />
                        </span>
                        <Heading as="h3" className={styles.tileTitle}>
                            Documented &amp; typed
                        </Heading>
                        <p className={styles.tileText}>
                            A full reference with clear exports and events.
                            Build, don&apos;t reverse-engineer.
                        </p>
                    </article>

                    <article className={`${styles.tile} ${styles.tileOpen}`}>
                        <span className={styles.iconWrap}>
                            <Scale size={20} strokeWidth={2.25} />
                        </span>
                        <Heading as="h3" className={styles.tileTitle}>
                            Open-source, forever
                        </Heading>
                        <p className={styles.tileText}>
                            GPL-3.0. Read it, fork it, ship it — no paywalls, no
                            escrow.
                        </p>
                        <a
                            className={styles.tileLink}
                            href="https://github.com/Zenith-FiveM"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View the source{' '}
                            <ArrowUpRight size={15} strokeWidth={2.5} />
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
