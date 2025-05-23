import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const MLHBanner: React.FC = () => {
  return (
    <a
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue"
      target="_blank"
    >
      <Image
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        width={150}
        height={150}
        className={styles.banner}
      />
    </a>
  );
};

export default MLHBanner;
