import Typography from '@/components/Typography';
import Banners from '../../../../public/assets/banners.svg';
import BannersMobile from '../../../../public/assets/banners-mobile.svg';
import styles from './style.module.scss';
import localFont from 'next/font/local';

const JainiPurva = localFont({
  src: '../../../../public/assets/JainiPurva-Regular.ttf',
});

interface LandingProps {
  onClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={`${JainiPurva.className} ${styles.title}`}>Which house will you get?</h1>
      <Banners className={styles.banners} />
      <BannersMobile className={styles.bannersMobile} />
      <button onClick={onClick} className={styles.startButton}>
        <Typography variant="body/large">Start Sorting Quiz!</Typography>
      </button>
    </div>
  );
};

export default Landing;
