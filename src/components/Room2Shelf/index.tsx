import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Shelf from 'public/assets/Group 90.svg';
import Books1 from 'public/assets/Group 94.svg';
import Books2 from 'public/assets/Group 95.svg';
const Bookshelf: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.books}>
        <Books1 className={styles.books1} />
        <Books2 className={styles.books2} />
      </div>
      <Shelf className={styles.shelf} />
    </div>
  );
};

export default Bookshelf;
