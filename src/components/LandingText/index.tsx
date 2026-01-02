import Typography from '@/components/Typography';
import Link from 'next/link';
import styles from './style.module.scss';
import Arrow from '../../../public/assets/material-symbols_arrow-right-alt.svg';
interface LandingTextProps {
  className?: string;
}

const LandingText = ({ className = '' }: LandingTextProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.textContent}>
        <Typography variant="title/small" className={styles.subheadingDesktop}>
          Spring 2026 • hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
        </Typography>
        <Typography variant="title/small" className={styles.subheadingMobile}>
          <span>April 4–5, 2026</span>
          <span>
            Hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
          </span>
        </Typography>
        <Typography className={styles.header} variant="display/heavy/large">
          DiamondHacks 2026
        </Typography>
      </div>
      <div className={styles.interestForm}>
        {/* <Typography variant="title/small" className={styles.subtitle}>
          Interested in joining? Fill out the interest form!
        </Typography> */}
        <div className={styles.buttonContainer}>
          <Link
            href="https://acmurl.com/diamondhacks26-interest"
            target="_blank"
            className={`${styles.button} ${styles.interestFormButton}`}
          >
            Interest Form
            <Arrow className={styles.arrow} />
          </Link>
          <Link
            href="mailto:hackathon@acmucsd.org"
            className={styles.button}
            data-variant="secondary"
          >
            Sponsor us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
