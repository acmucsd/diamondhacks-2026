import LandingText from '@/components/LandingText';
import HeistPeekers from '../../../public/assets/heist_peekers.svg';
import HeistJewelDisplay from '../../../public/assets/heist_jewel_display.svg';
import styles from './style.module.scss';
import SunGodImage from '../../../public/assets/sun-god.svg';
import RoofTop from '../../../public/assets/roof-top.svg';
const Hero = () => {
  return (
    <div className={styles.container}>
      <SunGodImage className={styles.sunGod} />
      <div className={styles.roofWrapper}>
        <RoofTop className={styles.roofTop} />
        <LandingText className={styles.landingText} />
      </div>
    </div>
  );
};

export default Hero;
