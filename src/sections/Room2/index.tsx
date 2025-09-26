import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import SlidingDiamond from 'public/assets/sliding-diamond.png';
import SlidingDiamondRope from 'public/assets/sliding-diamond-rope.png';
import Image from 'next/image';
import Typography from '@/components/Typography';

const Room2: React.FC = () => {
  return (
    <section className={styles.container} id="impact">
      <div className={styles.innerContainer}>
        <div className={styles.statsContainer}>
          <span className={styles.overTheYears}>
            Over the years,
            <br /> we had ...
          </span>
          <div>
            <Typography variant="display/light/large" className={styles.projects}>
              160+
            </Typography>
            <Typography variant="body/large">projects</Typography>
          </div>
          <div>
            <Typography variant="display/light/large" className={styles.attendees}>
              600+
            </Typography>
            <Typography variant="body/large">total attendees</Typography>
          </div>
          <div>
            <Typography variant="display/light/large" className={styles.prizes}>
              $5000+
            </Typography>
            <Typography variant="body/large">in prizes</Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room2;
