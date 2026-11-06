import styles from './style.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src="/assets/graph-paper.png"
        alt=""
        className={styles.graphPaper}
      />
      <img
        src="/assets/computer-guy.svg"
        alt="Computer guy mascot"
        className={styles.computerGuy}
      />
      <img
        src="/assets/sleepy-guy.svg"
        alt="Sleepy guy mascot"
        className={styles.sleepyGuy}
      />
      <img
        src="/assets/squiggle.svg"
        alt=""
        className={styles.squiggleLeft}
      />
      <img
        src="/assets/squiggle.svg"
        alt=""
        className={styles.squiggleRight}
      />
      <div className={styles.content}>
        <p className={styles.subtitle}>Hosted by ACM at UC San Diego...</p>
        <h1 className={styles.title}>Diamond Hacks</h1>
        <p className={styles.date}>April 3–4  2027</p>
      </div>
      <div className={styles.buttons}>
        <a href="#" className={styles.button}>
          Interest Form
        </a>
        <a href="#" className={styles.button}>
          Sponsor Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
