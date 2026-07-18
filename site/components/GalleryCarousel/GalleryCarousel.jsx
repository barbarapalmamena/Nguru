'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GalleryCarousel.module.css';

export default function GalleryCarousel({ images = [], projectTitle = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Main Image Display */}
      <div className={styles.mainWrapper}>
        <button
          onClick={prevSlide}
          className={`${styles.navBtn} ${styles.prevBtn}`}
          aria-label="Imagen anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.activeImageFrame}>
          <Image
            src={images[activeIndex]}
            alt={`${projectTitle} - Imagen ${activeIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className={styles.mainImg}
            priority
            quality={90}
          />
        </div>

        <button
          onClick={nextSlide}
          className={`${styles.navBtn} ${styles.nextBtn}`}
          aria-label="Imagen siguiente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slide Counter */}
        <div className={styles.counter}>
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails list */}
      <div className={styles.thumbsContainer}>
        <div className={styles.thumbsList}>
          {images.map((imgUrl, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.thumbBtn} ${activeIndex === index ? styles.thumbActive : ''}`}
            >
              <Image
                src={imgUrl}
                alt={`Miniatura ${index + 1}`}
                width={80}
                height={54}
                className={styles.thumbImg}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
