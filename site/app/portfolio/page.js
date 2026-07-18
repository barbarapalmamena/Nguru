import Image from 'next/image';
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid';
import { projects } from '@/lib/projects';
import styles from './portfolio.module.css';

export const metadata = {
  title: 'Portafolio — Ngürü',
  description:
    'Proyectos de Fotografía Comercial, Reels & Video y Branding realizados por Miguel Fuentes en Frutillar y Chile.',
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image
            src="/images/hero-main.jpeg"
            alt="Fondo Ngürü"
            fill
            priority
            className={styles.headerBgImg}
          />
          <div className={styles.headerOverlay} aria-hidden="true" />
        </div>
        <div className={`container ${styles.headerContent}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Portafolio
          </p>
          <h1 className={styles.pageTitle}>
            Todo el<br />
            <span className={styles.accent}>trabajo</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Filtra por categoría o explora el archivo completo.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section aria-label="Galería de proyectos" className={styles.gallerySection}>
        <div className="container">
          <GalleryGrid items={projects} showFilters={true} />
        </div>
      </section>
    </div>
  );
}
