import { QUESTIONS } from './questions';
import styles from './style.module.scss';
import FAQAccordion from '@/components/FAQAccordion';
import Room3Background from '/public/assets/room 3 bkgd.svg';
import Shelf from '/public/assets/Shelf.svg';
import Cauldron from '/public/assets/cauldron-steaming.svg';
import Typography from '@/components/Typography';
const Room3: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trapezoidClipPath} id="faq">
        <Room3Background className={styles.room3Background} />
        <Shelf className={styles.shelf} />
        <Cauldron className={styles.cauldron} />
        <div className={styles.faqContent}>
          <Typography variant="display/light/medium" className={styles.title}>
            Frequently asked questions
          </Typography>
          <FAQAccordion data={QUESTIONS} className={styles.faqContainer} />
        </div>
      </div>
    </div>
  );
};

export default Room3;
