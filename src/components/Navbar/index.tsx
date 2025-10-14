'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SwipeableDrawer } from '@mui/material';
import MLHBanner from '../MLHBanner';
import { ArrowDropDown } from '@mui/icons-material';
import DiamondHacksLogo from '@/public/assets/general-logo-community.png';

interface LinkMetadata {
  name: string;
  href: string;
}

const links: LinkMetadata[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Impact', href: '/#impact' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Sponsors', href: '/#sponsors' },
];

const yearLinks: LinkMetadata[] = [
  { name: '2025', href: 'https://2025.diamondhacks.acmucsd.com' },
  { name: '2024', href: 'https://2024.diamondhacks.acmucsd.com' },
];

const DEBOUNCE_MS = 150; // Prevent back-to-back updates within 150ms
const MOBILE_BREAKPOINT = 950;

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastUpdate = useRef(0);
  const [yearMenuOpen, setYearMenuOpen] = useState(false);

  const onLinkClick = (link: LinkMetadata) => {
    lastUpdate.current = Date.now();
    setMobileMenuOpen(false);

    if (link.name !== 'Home') {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Show/hide navbar on scroll
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const now = Date.now();

      const readyToUpdate = now - lastUpdate.current > DEBOUNCE_MS;

      // Show navbar when scrolling up or at top of page
      const scrollingUp = currentScrollPos < prevScrollPos;
      const topOfPage = currentScrollPos < 10;
      const shouldBeVisible = scrollingUp || topOfPage;

      if (readyToUpdate) {
        setVisible(shouldBeVisible);
        setPrevScrollPos(currentScrollPos);
        lastUpdate.current = now;
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Close mobile menu when screen gets larger than mobile breakpoint
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`${styles.container} ${visible ? styles.visible : styles.hidden}`}>
        <div className={styles.logo}>
          <Image src="/assets/general-logo-community.png" alt="ACM Logo" width={48} height={48} />
          <Typography variant="body/large" className={styles.logoText}>
            <b>diamond</b>
            <br />
            hacks 3.0
          </Typography>
        </div>
        <Typography variant="body/large" className={styles.desktopLinks}>
          {links.map(link => (
            <Link
              href={link.href}
              className={styles.link}
              onClick={() => onLinkClick(link)}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.yearDropdown}>
            <button className={styles.yearToggle} onClick={() => setYearMenuOpen(o => !o)}>
              Archive
              <ArrowDropDown />
            </button>

            {yearMenuOpen && (
              <div className={styles.yearOptions}>
                {yearLinks.map(link => (
                  <Link
                    href={link.href}
                    className={styles.yearItem}
                    key={link.name}
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Typography>
        <Typography variant="label/medium" className={styles.apply}>
          <div>
            <Link
              href="https://discord.gg/diamondhacks"
              target="_blank"
              className={styles.ctaButton}
            >
              Apply Now
            </Link>
          </div>
        </Typography>

        <div className={styles.mobileIcons}>
          <div className={`${styles.menuIcon} ${mobileMenuOpen ? '' : styles.hidden}`}>
            <CloseIcon onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className={`${styles.menuIcon} ${mobileMenuOpen ? styles.hidden : ''}`}>
            <MenuIcon onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </div>
      {/* <MLHBanner /> */}
      <SwipeableDrawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpen={() => setMobileMenuOpen(true)}
      >
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <Link
              href={link.href}
              className={styles.link}
              onClick={() => onLinkClick(link)}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          {yearLinks.map(link => (
            <Link href={link.href} className={styles.link} key={link.name} target="_blank">
              {link.name}
            </Link>
          ))}
        </div>
      </SwipeableDrawer>
    </>
  );
}
