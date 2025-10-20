import Typography from '@/components/Typography';
import styles from './style.module.scss';

const StatsDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="display/heavy/small">
        Over the years,
        <br /> we had ...
      </Typography>
      <div className={styles.statBox}>
        <Typography variant="display/heavy/small">
          <span className={styles.statNumber1}>160+</span>
        </Typography>
        <Typography className={styles.info} variant="body/medium">
          projects
        </Typography>
      </div>
      <div className={styles.statBox}>
        <Typography variant="display/heavy/small">
          <span className={styles.statNumber2}>600+</span>
        </Typography>
        <Typography className={styles.info} variant="body/medium">
          total attendees
        </Typography>
      </div>
      <div className={styles.statBox}>
        <Typography variant="display/heavy/small">
          <span className={styles.statNumber3}>$5000+</span>
        </Typography>
        <Typography className={styles.info} variant="body/medium">
          in prizes
        </Typography>
      </div>
    </div>
  );
};

export default StatsDescription;
