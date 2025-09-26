import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
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
          <Link href="https://discord.gg/diamondhacks" target="_blank" className={styles.ctaButton}>
            Take the Sorting Quiz
          </Link>
        </div>
      </Typography>
    </div>
  );
};

export default SortingQuizSection;
