import Image from 'next/image';
import styles from './style.module.scss';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((image: string, index: number) => (
          <div className={styles.image} key={index}>
            <Image src={image} alt={`Hackathon Image ${index + 1}`} sizes="400px" fill />
          </div>
        ))}
        {images.map((image: string, index: number) => (
          <div className={styles.image} key={index}>
            <Image src={image} alt={`Hackathon Image ${index + 1}`} sizes="400px" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;