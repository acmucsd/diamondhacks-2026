import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PAST_SPONSORS, SPONSORS } from './sponsors';

const Sponsors: React.FC = () => {
  return (
    <section className={styles.container} id="sponsors">
      <div className={styles.content}>
        <Typography variant="display/heavy/small" className={styles.title}>
          Thank you to our sponsors
        </Typography>
        <div className={styles.sponsorLogos}>
          {SPONSORS.map(sponsor => (
            <Link href={sponsor.link} key={sponsor.name}>
              <Image
                src={`/sponsors/new/${sponsor.logo}`}
                alt={sponsor.name}
                className={styles.sponsorLogo}
                width={200}
                height={100}
              />
            </Link>
          ))}
        </div>
        <Typography variant="display/heavy/small" className={styles.title}>
          Past sponsors
        </Typography>
        <div className={styles.sponsorLogos}>
          {PAST_SPONSORS.map(sponsor => (
            <Link href={sponsor.link} key={sponsor.name}>
              <Image
                src={`/sponsors/old/${sponsor.logo}`}
                alt={sponsor.name}
                className={styles.sponsorLogo}
                width={200}
                height={100}
              />
            </Link>
          ))}
        </div>
        <Typography variant="headline/light/small" className={styles.bottomText}>
          Interested in working with us? Reach out down below!
        </Typography>
        <Link
          href="mailto:hackathon@acmucsd.org"
          className={styles.button}
          data-variant="secondary"
        >
          <Typography variant="title/small" className={styles.buttonText}>
            Sponsor DiamondHacks!
          </Typography>
        </Link>
      </div>
    </section>
  );
};

export default Sponsors;
