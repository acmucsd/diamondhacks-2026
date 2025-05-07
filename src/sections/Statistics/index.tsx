import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import SlidingDiamond from 'public/assets/sliding-diamond.png';
import SlidingDiamondRope from 'public/assets/sliding-diamond-rope.png';
import Image from 'next/image';

const Statistics: React.FC = () => {
  return (
    <section className={styles.container} id="impact">
      <div className={styles.diamond}>
        <div className={styles.slidingDiamondWrapper}>
          <Image
            src={SlidingDiamond}
            alt="Diamond holding onto rope"
            className={styles.slidingDiamond}
            width={564}
            height={902}
          />
        </div>
        <Image
          src={SlidingDiamondRope}
          alt="Rope hanging from ledge"
          className={styles.rope}
          width={564}
          height={902}
        />
      </div>
      <div className={styles.innerContainer}>
        <StatsDescription />
      </div>
    </section>
  );
};

export default Statistics;
