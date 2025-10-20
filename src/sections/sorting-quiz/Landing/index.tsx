import Typography from '@/components/Typography';
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
      <picture>
        <source srcSet='/assets/banners.svg' media="(min-width: 650px)" />
        <source srcSet='/assets/banners-mobile.svg' media="(max-width: 650px)" />
        <img src="/assets/banners.svg" alt="Banners" width={1440} height={381} loading='lazy' decoding='async' className={styles.banners} />
      </picture>
      <button onClick={onClick} className={styles.startButton}>
        <Typography variant="body/large">Start Sorting Quiz!</Typography>
      </button>
    </div>
  );
};

export default Landing;
