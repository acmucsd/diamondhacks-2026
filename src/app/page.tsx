import Room2 from '@/sections/Room2';
import Hero from '@/sections/Hero';
import Room1 from '@/sections/Room1';
import Room3 from '@/sections/Room3';
import styles from './page.module.scss';
import Sponsors from '@/sections/Sponsors';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Room1 /> 
      <Room2 />
      <Room3 />
    </main>
  );
}
