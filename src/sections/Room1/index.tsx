import AboutDescription from '@/components/AboutDescription';
import styles from './style.module.scss';
import SortingQuizSection from '@/components/SortingQuizSection';
import TritonCarpet from '../../../public/assets/room1-triton.svg';

const Room1: React.FC = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.greyBackground}>
        <AboutDescription />
        <SortingQuizSection />
        <TritonCarpet className={styles.tritonCarpet} />
      </div>
    </section>
  );
};

export default Room1;
