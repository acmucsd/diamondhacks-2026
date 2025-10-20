import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '../../../public/assets/instagram.svg';
import Discord from '../../../public/assets/discord.svg';
import Facebook from '../../../public/assets/facebook.svg';
import AcmLogo from '../../../public/assets/acm-logo.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="https://acmucsd.com/about">
          <Typography variant="body/large">About Us</Typography>
        </Link>
        <Link href="https://acmucsd.com/">
          <Image src={AcmLogo} alt="ACM" width={144} height={144} />
        </Link>
        <Link href="https://acmucsd.com/#contact">
          <Typography variant="body/large">Contact Us</Typography>
        </Link>
      </div>
      <Typography variant="body/large">Made with ♡ by ACM at UC San Diego</Typography>
      <div className={styles.socials}>
        <Link href="https://www.acmurl.com/instagram/">
          <Instagram />
        </Link>
        <Link href="https://www.acmurl.com/discord/">
          <Discord />
        </Link>
        <Link href="https://www.acmurl.com/facebook/">
          <Facebook />
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">
          <Typography variant="body/large">MLH Code of Conduct</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
