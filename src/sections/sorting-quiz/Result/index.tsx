import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';
import styles from './style.module.scss';
import Geisel from '../../../../public/assets/geisel-icon.svg';
import Raccoon from '../../../../public/assets/raccoon-icon.svg';
import SunGod from '../../../../public/assets/sun-god-icon.svg';
import Triton from '../../../../public/assets/triton-icon.svg';
import localFont from 'next/font/local';

const JainiPurva = localFont({
  src: '../../../../public/assets/JainiPurva-Regular.ttf',
});

const images = { G: Geisel, R: Raccoon, S: SunGod, T: Triton };

interface ResultProps {
  house: House;
}

const Result: React.FC<ResultProps> = ({ house }) => {
  const { name, nature, description } = results[house];
  const Image = images[house];

  return (
    <div className={`${JainiPurva.className} ${styles.container}`}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.imageContainer}>
        <Image alt={`${name} icon`} className={styles.image} />
      </div>
      <p className={styles.description}>Nature: {nature}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Result;
