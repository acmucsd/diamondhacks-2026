import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import SlidingDiamond from 'public/assets/sliding-diamond.png';
import SlidingDiamondRope from 'public/assets/sliding-diamond-rope.png';
import Image from 'next/image';
import Typography from '@/components/Typography';
import LeftVector from 'public/assets/Vector-87.svg';
import RightVector from 'public/assets/Vector 89.svg';
import Carpet from 'public/assets/carpet.svg';
import Racoon from 'public/assets/racoon.png'
import Banner1 from 'public/assets/banner.svg'
import Banner2 from 'public/assets/banner2.svg'
import Bookshelf from '@/components/Room2Shelf';
const Room2: React.FC = () => {
  return (
    <section className={styles.container} id="impact">
      <div className={styles.innerContainer}>
        <LeftVector className={styles.leftVector} />
        <div className={styles.statsContainer}>
          <span className={styles.overTheYears}>
            Over the years,
            <br /> we had ...
          </span>
          <div>
            <Typography variant="display/heavy/large" className={styles.projects}>
              160+
            </Typography>
            <Typography variant="body/large">projects</Typography>
          </div>
          <div>
            <Typography variant="display/heavy/large" className={styles.attendees}>
              600+
            </Typography>
            <Typography variant="body/large">total attendees</Typography>
          </div>
          <div>
            <Typography variant="display/heavy/large" className={styles.prizes}>
              $5000+
            </Typography>
            <Typography variant="body/large">in prizes</Typography>
          </div>
        </div>
        <div className={styles.brownCarpet}></div>
        <Carpet className={styles.carpet} />
        <Image src={Racoon} className={styles.racoon} alt="racoon" />
        <Banner1 className={styles.banner1} />
        <Banner2 className={styles.banner2} />
        <Bookshelf />
        <RightVector className={styles.rightVector} />
      </div>
    </section>
  );
};

export default Room2;
