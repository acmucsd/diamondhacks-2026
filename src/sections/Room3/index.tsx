import Typography from '@/components/Typography';
import { QUESTIONS } from './questions';
import styles from './style.module.scss';
import Image from 'next/image';
import FAQAccordion from '@/components/FAQAccordion';
import MainContainer from '/public/assets/Rectangle 237.svg';
import InnerContainer from '/public/assets/room 3 bkgd.svg';
import Shelf from '/public/assets/Shelf.svg';
import Cauldron from '/public/assets/Cauldron.png';
import Steam from '/public/assets/steam.svg';
const Room3: React.FC = () => {
  return (
    <div className={styles.container}>
      <MainContainer className={styles.outerContainer} id="faq" />
      <div className={styles.innerContainer}>
        <InnerContainer className={styles.containerGraphic} />
        <span className={styles.title}>
          Frequently Asked Questions
        </span>
        <Shelf className={styles.shelf} />
        <Image src={Cauldron} className={styles.cauldron} alt="cauldron" />
        <Steam className={styles.steam} />
        <FAQAccordion data={QUESTIONS} className={styles.faqContainer} />
      </div>
    
    </div>
    
  );
};

export default Room3;
