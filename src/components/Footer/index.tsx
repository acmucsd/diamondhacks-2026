import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '../../../public/assets/instagram.svg';
import Discord from '../../../public/assets/discord.svg';
import Facebook from '../../../public/assets/facebook.svg';
import DiamondPileLeft from '../../../public/assets/diamond-pile-left.png';
import DiamondPileRight from '../../../public/assets/diamond-pile-right.png';
import AcmLogo from '../../../public/assets/acm-logo.png';
import DiamondHacksLogo from '../../../public/assets/general-logo-community.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <Link href="https://acmucsd.com/" className={styles.links}>
          <Image src={AcmLogo} alt="ACM" width={144} height={144} />
          <span className={styles.acmTitle}>ACM</span>
          <span className={styles.acmText}> at UCSD</span>
        </Link>
      </div>
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
    </div>
  );
};

export default Footer;
