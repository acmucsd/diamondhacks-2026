import LandingText from '@/components/LandingText';
import HeistPeekers from '../../../public/assets/heist_peekers.svg';
import HeistJewelDisplay from '../../../public/assets/heist_jewel_display.svg';
import styles from './style.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.imageWrapper} ${styles.peekersWrapper}`}>
        <HeistPeekers
          preserveAspectRatio="xMidYMid meet"
          className={`${styles.image} ${styles.peekers}`}
        />
      </div>
      <LandingText className={styles.text} />
      <div className={`${styles.imageWrapper} ${styles.displayWrapper}`}>
        <HeistJewelDisplay
          preserveAspectRatio="xMidYMid meet"
          className={`${styles.image} ${styles.display}`}
        />
      </div>
    </div>
  );
};

export default Hero;
