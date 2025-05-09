import Typography from '@/components/Typography';
import Link from 'next/link';
import styles from './style.module.scss';

interface LandingTextProps {
  className?: string;
}

const LandingText = ({ className = '' }: LandingTextProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <Typography variant="title/small" className={styles.subheadingDesktop}>
        April 4–5, 2026 • hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
      </Typography>
      <Typography variant="title/small" className={styles.subheadingMobile}>
        <span>April 4–5, 2026</span>
        <span>
          Hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
        </span>
      </Typography>
      <Typography className={styles.header} variant="display/heavy/large">
        DiamondHacks
      </Typography>
      <div className={styles.interestForm}>
        <Typography variant="title/small" className={styles.subtitle}>
          Interested in joining? Fill out the interest form!
        </Typography>
        <div className={styles.buttonContainer}>
          <Link
            href="https://acmurl.com/diamondhacks26-interest"
            target="_blank"
            className={styles.button}
          >
            Interest Form
          </Link>
          <Link
            href="https://acmurl.com/diamondhacks26-interest"
            className={styles.button}
            data-variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsor us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
