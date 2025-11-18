import { QUESTIONS } from './questions';
import styles from './style.module.scss';
import FAQAccordion from '@/components/FAQAccordion';
import Room3Decor from '/public/assets/Room3Decor.svg';
import Room3Crack from '/public/assets/Room3Crack.svg';
import Typography from '@/components/Typography';
const Room3: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trapezoidOuter} id="faq">
        <Room3Decor className={styles.decor} />
        <div className={styles.trapezoidInner}>
          <Room3Crack className={styles.crack} />
        </div>
        <div className={styles.gradient} />
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
