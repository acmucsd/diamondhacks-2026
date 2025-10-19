import { House } from '@/app/sorting-quiz/page';
import results from '../../../../public/assets/results.json';

interface ResultProps {
  house: House,
}

const Result: React.FC<ResultProps> = ({house}) => {
  const { name, nature, description } = results[house];
  
  return (
    <section>
      <p>{name}</p>
      <p>Nature: {nature}</p>
      <p>{description}</p>
    </section>
  )
}

export default Result;