import LandingText from '@/components/LandingText';
import styles from './style.module.scss';
import SunGodImage from '../../../public/assets/sun-god.svg';
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.roofWrapper}>
        <div className={styles.roofTop}>
          <LandingText className={styles.landingText} />
        </div>
        <SunGodImage className={styles.sunGod} />
      </div>
    </div>
  );
};

export default Hero;