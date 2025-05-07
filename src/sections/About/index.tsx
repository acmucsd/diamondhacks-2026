import AboutDescription from '@/components/AboutDescription';
import Carousel from '@/components/Carousel';
import ImagePicker from '@/components/ImagePicker';
import styles from './style.module.scss';

const About: React.FC = () => {
  const images: string[] = [
    '/assets/hackathon1.png',
    '/assets/hackathon2.png',
    '/assets/hackathon3.png',
    '/assets/hackathon4.png',
  ];

  return (
    <section className={styles.container} id="about">
      <AboutDescription />
      <div className={styles.isMobile}>
        <ImagePicker images={images} />
      </div>
      <div className={styles.isDesktop}>
        <Carousel images={images} />
      </div>
    </section>
  );
};

export default About;
