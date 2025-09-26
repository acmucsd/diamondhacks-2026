import Typography from '@/components/Typography';
import { QUESTIONS } from './questions';
import styles from './style.module.scss';
import FAQAccordion from '@/components/FAQAccordion';

const FAQ: React.FC = () => {
  return (
    <section className={styles.container} id="faq">
      <Typography variant="display/heavy/small" className={styles.title}>
        Frequently Asked Questions
      </Typography>
      <FAQAccordion data={QUESTIONS} />
    </section>
  );
};

export default FAQ;
