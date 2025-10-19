import Typography from '@/components/Typography';
import styles from './style.module.scss';

interface LandingProps {
  onClick: () => void,
}

const Landing: React.FC<LandingProps> = ({ onClick }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Which house will you get?</h1>
      <button onClick={onClick} className={styles.startButton}><Typography variant="body/large">Start Sorting Quiz!</Typography></button>
    </section>
  )
}

export default Landing;