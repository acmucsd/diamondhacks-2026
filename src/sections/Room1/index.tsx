import AboutDescription from '@/components/AboutDescription';
import Carousel from '@/components/Carousel';
import ImagePicker from '@/components/ImagePicker';
import styles from './style.module.scss';
import SortingQuizSection from '@/components/SortingQuizSection';
import TritonCarpet from '../../../public/assets/room1-triton.svg';

const Room1: React.FC = () => {
  const images: string[] = [
    '/assets/hackathon1.png',
    '/assets/hackathon2.png',
    '/assets/hackathon3.png',
    '/assets/hackathon4.png',
  ];

  return (
    <section className={styles.container} id="about">
      <div className={styles.greyBackground}>
        <TritonCarpet className={styles.tritonCarpet} />
        <AboutDescription />
        <SortingQuizSection />  
      </div>
      
      
    </section>
  );
};

export default Room1;
