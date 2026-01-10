import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';
import styles from './style.module.scss';
import DynamicSVG from '@/components/sorting-quiz/DynamicSvg';
import Link from 'next/link';
import Typography from '@/components/Typography';
import { track } from '@vercel/analytics';
import { useEffect } from 'react';

const images = { G: 'geisel-icon', R: 'raccoon-icon', S: 'sun-god-icon', T: 'triton-icon' };

interface ResultProps {
  house: House;
}

const Result: React.FC<ResultProps> = ({ house }) => {
  const { name, nature, description } = results[house];
  const imageName = images[house];

  useEffect(() => {
    track('house_selected', {
      house: name,
      house_code: house,
    });
  }, [house, name]);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.imageContainer}>
        <DynamicSVG name={imageName} alt={`${name} icon`} className={styles.image} />
      </div>
      <p className={`${styles.text} ${styles.nature}`}>Nature: {nature}</p>
      <p className={`${styles.text} ${styles.description}`}>{description}</p>
      <Typography variant="body/large">
        <Link href="/" className={styles.homeLink}>
          Back to Home
        </Link>
      </Typography>
    </div>
  );
};

export default Result;
