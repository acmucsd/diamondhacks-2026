'use client';

import { useState } from 'react';
import styles from './style.module.scss';

const revealImages = [
  { src: '/assets/computer-guy.svg', alt: 'Computer guy mascot', className: styles.computerGuy, delay: '0.4s' },
  { src: '/assets/sleepy-guy.svg', alt: 'Sleepy guy mascot', className: styles.sleepyGuy, delay: '0.55s' },
  { src: '/assets/squiggle.svg', alt: '', className: styles.squiggleLeft, delay: '0.5s' },
  { src: '/assets/squiggle.svg', alt: '', className: styles.squiggleRight, delay: '0.6s' },
];

const Hero = () => {
  const [phase, setPhase] = useState<'initial' | 'tearing' | 'opening' | 'revealed'>('initial');

  const started = phase !== 'initial';
  const opened = phase === 'opening' || phase === 'revealed';
  const revealed = phase === 'revealed';

  const handleTearClick = () => {
    if (started) return;
    setPhase('tearing');
    setTimeout(() => {
      setPhase('opening');
      setTimeout(() => {
        setPhase('revealed');
      }, 700);
    }, 1200);
  };

  return (
    <section className={styles.container}>
      <img src="/assets/graphPaperFrame_highQuality.svg" alt="" className={styles.graphPaper} />
      {revealImages.map(({ src, alt, className, delay }) => (
        <img
          key={className}
          src={src}
          alt={alt}
          className={`${className} ${revealed ? styles.slideInFromTop : styles.hiddenAbove}`}
          style={revealed ? { animationDelay: delay } : undefined}
        />
      ))}
      <div className={styles.content}>
        <p className={styles.subtitle}>Hosted by ACM at UC San Diego...</p>
        <h1 className={styles.title}>Diamond Hacks</h1>
        <p className={styles.date}>April 3–4  2027</p>
      </div>
      <div className={`${styles.buttons} ${revealed ? styles.fadeIn : styles.hiddenButtons}`}>
        <a href="#" className={styles.button}>Interest Form</a>
        <a href="#" className={styles.button}>Sponsor Us</a>
      </div>
      <div className={`${styles.overlayTop} ${opened ? styles.slideUp : ''}`} />
      <div className={`${styles.overlayMiddle} ${started ? styles.tearAway : ''}`} />
      <div className={`${styles.overlayBottom} ${opened ? styles.slideDown : ''}`} />
      <div className={`${styles.dashedTop} ${started ? styles.fadeOut : ''}`} />
      <div className={`${styles.dashedBottom} ${started ? styles.fadeOut : ''}`} />
      <img
        src="/assets/flip.svg"
        alt=""
        className={`${styles.flipCrease} ${started ? styles.tearAway : ''}`}
        onClick={handleTearClick}
      />
    </section>
  );
};

export default Hero;
