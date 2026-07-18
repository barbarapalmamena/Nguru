import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid';
import { projects } from '@/lib/projects';
import styles from './Gallery.module.css';

export default function Gallery({ limit = 6 }) {
  return (
    <section className={styles.section} id="portfolio" aria-labelledby="gallery-title">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Portafolio
            </p>
            <h2 id="gallery-title" className={styles.title}>
              Trabajo<br />
              <span className={styles.accent}>reciente</span>
            </h2>
          </div>
          <Link href="/portfolio" className={styles.viewAll}>
            Ver todo el portafolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <GalleryGrid
          items={projects}
          showFilters={false}
          limit={limit}
        />

        {/* CTA móvil */}
        <div className={styles.mobileCta}>
          <Link href="/portfolio" className={styles.mobileCtaBtn}>
            Ver portafolio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
