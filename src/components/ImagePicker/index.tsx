'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.scss';

interface ImagePickerProps {
  images: string[];
}

const ImagePicker: React.FC<ImagePickerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let touchStartX = 0;
  let touchEndX = 0;

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchStartX - touchEndX < -50) {
      prevImage();
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image: string, index: number) => (
          <div className={styles.image} key={index}>
            <Image src={image} alt={`Hackathon Image ${index + 1}`} sizes="400px" fill />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {Array.from({ length: images.length }, (_, i) => (
          <span key={i} className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
