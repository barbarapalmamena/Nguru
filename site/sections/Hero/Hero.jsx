import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero principal de Ngürü">
      {/* Imagen de fondo */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-main.jpeg"
          alt="Fotografía o video destacado de Ngürü de fondo"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
          quality={90}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Fotografía &amp; Film · Chile
          </p>

          {/* Título principal */}
          <h1 className={styles.title}>
            Cada imagen<br />
            cuenta algo<br />
            <span className={styles.accent}>real.</span>
          </h1>

          {/* Bajada */}
          <p className={styles.subtitle}>
            Fotografía comercial, Reels, video corporativo y branding.<br />
            Desde Frutillar para la Región de Los Lagos y todo Chile.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <WhatsAppButton context="general" variant="large" label="Agenda una sesión" />
            <a href="/portfolio" className={styles.ctaSecondary}>
              Ver portafolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
