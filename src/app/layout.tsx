import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const dmSans = DM_Sans({ subsets: ['latin'] });

const jainiPurva = localFont({
  src: '../../public/fonts/JainiPurva-Regular.ttf',
  variable: '--font-jaini-purva',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DiamondHacks 2026',
  description: "ACM at UCSD's annual hackathon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#151625" />
      </head>
      <body className={`${dmSans.className} ${jainiPurva.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
