import Hero from '@/sections/Hero/Hero';
import Skills from '@/sections/Skills/Skills';
import Gallery from '@/sections/Gallery/Gallery';
import About from '@/sections/About/About';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './home.module.css';

export const metadata = {
  title: {
    absolute: 'Ngürü — Fotografía Comercial, Reels & Branding',
  },
  description:
    'Estudio creativo de Miguel Fuentes en Frutillar, Los Lagos. Fotografía comercial, producción de Reels & video corporativo y diseño de branding.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Gallery limit={6} />
      <About />

      {/* Sección Contacto */}
      <section className={styles.contacto} id="contacto" aria-labelledby="contacto-title">
        <div className={`container ${styles.contactoInner}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Contacto
          </p>
          <h2 id="contacto-title" className={styles.contactoTitle}>
            ¿Tienes un<br />
            <span className={styles.accent}>proyecto</span>?
          </h2>
          <p className={styles.contactoText}>
            Sin formularios. Sin esperas de 48h. Escríbeme directamente y conversamos.
          </p>
          <WhatsAppButton context="general" variant="large" label="Escribir por WhatsApp" />
        </div>
      </section>
    </>
  );
}
