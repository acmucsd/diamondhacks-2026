import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import Image from 'next/image';
import LeftVector from 'public/assets/Vector-87.svg';
import LeftRockMobile from 'public/assets/left-rock-mobile.svg';
import RightVector from 'public/assets/Vector 89.svg';
import Carpet from 'public/assets/carpet.svg';
import Racoon from 'public/assets/racoon.png';
import Banner1 from 'public/assets/banner.svg';
import Banner2 from 'public/assets/banner2.svg';
import Bookshelf from 'public/assets/bookshelf.svg';
const Room2: React.FC = () => {
  return (
    <section className={styles.container} id="impact">
      <div className={styles.innerContainer}>
        <LeftVector className={styles.leftVector} />
        <LeftRockMobile className={styles.leftRockMobile} />
        <div className={styles.statsContainer}>
          <StatsDescription />
        </div>
        <div className={styles.brownCarpet}></div>
        <Carpet className={styles.carpet} />
        <Image src={Racoon} className={styles.racoon} alt="racoon" />
        <Banner1 className={styles.banner1} />
        <Banner2 className={styles.banner2} />
        <Bookshelf className={styles.bookShelf} />
        <RightVector className={styles.rightVector} />
      </div>
    </section>
  );
};

export default Room2;
