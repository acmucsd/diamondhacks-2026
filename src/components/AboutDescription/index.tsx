import Typography from '@/components/Typography';
import styles from './style.module.scss';

const AboutDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title} >
        What is <span className={styles.diamond}>DiamondHacks</span>?
      </span>
      <div className={styles.description}>
        <Typography className={styles.info} variant="body/medium">
          Get ready for DiamondHacks, a thrilling
          <span className={styles.emphasis}> 36-hour hackathon</span> tournament organized by the Association for Computing Machinery at UCSD. The sharpest minds from universities across San Diego will gather to join our magic tournament.
        </Typography>
        <Typography className={styles.info} variant="body/medium">
          Hundreds of hackers will team up to make projects showcasing their skills. Choose from different{' '}
          <span className={styles.hacks}>creative tracks</span> and{' '}
          <span className={styles.hacks}>attend workshops </span>
          to refine your craft. Join{' '}
          <span className={styles.emphasis}>social events</span> to make alliances with other talented students and celebrate magic! 
        </Typography>
        <Typography className={styles.bottomText} variant='body/medium'>
          Keep your wand at the ready and your eyes sharp for any tricks along the way. Let’s make our mark and cast the ultimate hack!
        </Typography>
      </div>
    </div>
  );
};

export default AboutDescription;
