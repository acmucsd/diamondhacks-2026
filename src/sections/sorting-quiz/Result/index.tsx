import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';
import styles from './style.module.scss';
import Geisel from '../../../../public/assets/geisel.svg';
import Raccoon from '../../../../public/assets/raccoon.svg';
import SunGod from '../../../../public/assets/sun-god.svg';
import Triton from '../../../../public/assets/triton.svg';

const images = {'G': Geisel, 'R': Raccoon, 'S': SunGod, 'T': Triton,}

interface ResultProps {
  house: House,
}

const Result: React.FC<ResultProps> = ({house}) => {
  const { name, nature, description } = results[house];
  const Image = images[house];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.imageContainer}>
        <Image alt={`${name} icon`} className={styles.image} />
      </div>
      <p className={styles.description}>Nature: {nature}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Result;