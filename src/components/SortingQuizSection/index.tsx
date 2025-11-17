import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
// import Arrow from '../../../public/assets/material-symbols_arrow-right-alt.svg';
const SortingQuizSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSpacing}>
        <span className={styles.question}>
          What type of <span className={styles.highlight}>magic</span>
        </span>
        <span className={styles.question}>
          <span className={styles.highlight}>student</span> are you?
        </span>
      </div>
      <Typography variant="label/large" className={styles.applyText}>
        <div>
          <Link href="/sorting-quiz" className={styles.ctaButton}>
            Take the Sorting Quiz
            {/* <Arrow className={styles.arrow} /> */}
          </Link>
        </div>
      </Typography>
    </div>
  );
};

export default SortingQuizSection;
