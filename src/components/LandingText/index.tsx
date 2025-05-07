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
        April 5–6, 2025 • hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
      </Typography>
      <Typography variant="title/small" className={styles.subheadingMobile}>
        <span>April 5–6, 2025</span>
        <span>
          Hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
        </span>
      </Typography>
      <Typography className={styles.header} variant="display/heavy/large">
        DiamondHacks
      </Typography>
      <div className={styles.interestForm}>
        <Typography variant="title/small" className={styles.subtitle}>
          Interested in joining? Applications are now open!
        </Typography>
        <div className={styles.buttonContainer}>
          <Link
            href="https://portal.diamondhacks.acmucsd.com/"
            target="_blank"
            className={styles.button}
          >
            Apply Now
          </Link>
          <Link
            href="mailto:hackathon@acmucsd.org"
            className={styles.button}
            data-variant="secondary"
          >
            Sponsor Us
          </Link>
          <Link
            href="http://acmurl.com/diamondhacks-volunteer-interest"
            className={styles.button}
            data-variant="secondary"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
