import Typography from '@/components/Typography';
import styles from './style.module.scss';

const AboutDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="display/heavy/small">
        What is <span className={styles.diamond}>Diamond</span>
        <span className={styles.hacks}>Hacks</span>?
      </Typography>
      <div className={styles.description}>
        <Typography className={styles.info} variant="body/medium">
          Before we embark on our grand heist, let me tell you a bit about DiamondHacks, a thrilling
          <span className={styles.emphasis}> 36-hour hackathon</span> heist organized by the
          Association for Computing Machinery at UCSD. Get ready for an adventure where some of the
          sharpest minds from universities all over San Diego gather to join our quest.
        </Typography>
        <Typography className={styles.info} variant="body/medium">
          There will be hundreds of hackers teaming up to devise projects that showcase their skills
          and cunning. You’ll have the chance to choose different{' '}
          <span className={styles.emphasis}>creative tracks</span> and{' '}
          <span className={styles.emphasis}>attend workshops </span>
          led by fellow hackers to sharpen your tech prowess. There’ll also be{' '}
          <span className={styles.emphasis}>social events</span> where we can plot our next moves,
          forge alliances with other talented outlaws, and snatch some loot.
        </Typography>
      </div>
      <div className={styles.prompt}>
        <Typography className={styles.label} variant="label/large">
          Are you ready to join us on this weekend-long escapade?
        </Typography>
        <Typography variant="body/small">
          Keep your guard up and watch out for any traps along the way! Let’s make our mark and pull
          off the ultimate hack!
        </Typography>
      </div>
    </div>
  );
};

export default AboutDescription;
