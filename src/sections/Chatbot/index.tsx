'use client';
import styles from './style.module.scss';

export default function Chatbot() {
  return (
    <section className={styles.wrapper} aria-labelledby="chatbot-title">
      <div className={styles.card}>
        <div className={styles.left}>
          <h3 id="chatbot-title" className={styles.title}>
            Meet the DiamondHacks Agent
          </h3>
          <p className={styles.desc}>
            Chat with the DiamondHacks AI agent to get instant answers about schedules, venue
            details, logistics, and what to bring. Access it through ASI:One, powered by Agentverse.
          </p>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => window.open('https://www.fetch.ai/diamondhacks2026', '_blank')}
            >
              Chat with the DiamondHacks Agent
            </button>
          </div>
        </div>

        <div className={styles.preview}>
          <div className={styles.logoFrame}>
            <img src="/assets/fetch-logo.svg" className={styles.logoSvg} alt="ASI One logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
