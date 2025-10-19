import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';
import styles from './style.module.scss';

interface ResultProps {
  house: House,
}

const Result: React.FC<ResultProps> = ({house}) => {
  const { name, nature, description } = results[house];
  
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>Nature: {nature}</p>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default Result;