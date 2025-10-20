import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';
import styles from './style.module.scss';
import DynamicSVG from '@/components/sorting-quiz/DynamicSvg';
import localFont from 'next/font/local';

const JainiPurva = localFont({
  src: '../../../../public/assets/JainiPurva-Regular.ttf',
});

const images = { G: 'geisel-icon', R: 'raccoon-icon', S: 'sun-god-icon', T: 'triton-icon' };

interface ResultProps {
  house: House;
}

const Result: React.FC<ResultProps> = ({ house }) => {
  const { name, nature, description } = results[house];
  const imageName = images[house];

  return (
    <div className={`${JainiPurva.className} ${styles.container}`}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.imageContainer}>
        <DynamicSVG name={imageName} alt={`${name} icon`} className={styles.image} />
      </div>
      <p className={styles.description}>Nature: {nature}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Result;
