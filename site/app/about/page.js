import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './about.module.css';

export const metadata = {
  title: 'Sobre Ngürü',
  description:
    'Conoce el estudio: quién está detrás de Ngürü, el enfoque de trabajo y cómo empezar un proyecto.',
};

export default function AboutPage() {
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
            Sobre mí
          </p>
          <h1 className={styles.pageTitle}>
            El trabajo<br />
            habla<br />
            <span className={styles.accent}>primero.</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.inner}>
            {/* Image */}
            <div className={styles.imageBlock}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/images/FotoMiguel.jpeg"
                  alt="Miguel Fuentes, creador de Ngürü, sosteniendo su cámara"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={styles.img}
                />
              </div>
              <div className={styles.accentFrame} aria-hidden="true" />
            </div>

            {/* Text */}
            <div className={styles.textBlock}>
              <div className={styles.body}>
                <p>
                  Hola, soy <strong>Miguel Fuentes</strong>, Filmmaker y Diseñador Gráfico.
                </p>
                <p>
                  <strong>Ngürü</strong> es mi estudio creativo independiente basado en <strong>Frutillar, Región de Los Lagos</strong>. Desde aquí ayudo a marcas y empresas a potenciar su presencia digital a través de soluciones visuales estratégicas.
                </p>
                <p>
                  Mi trabajo se centra en tres pilares: <strong>Fotografía Comercial</strong> de alta calidad, producción de <strong>Reels & Video</strong> dinámicos para redes sociales, y desarrollo de <strong>Branding & Diseño Gráfico</strong> estratégico.
                </p>
                <p>
                  El nombre del estudio viene del mapudungun: <em>ngürü</em> significa zorro. Rápido, adaptable y nativo de este territorio. Abordo cada proyecto de forma personalizada, escuchando y entendiendo las necesidades de cada negocio para crear piezas visuales que conecten y tengan un impacto real.
                </p>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>proyectos terminados</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>3</span>
                  <span className={styles.statLabel}>líneas de servicio</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>Frutillar</span>
                  <span className={styles.statLabel}>como base creativa</span>
                </div>
              </div>

              <div className={styles.cta}>
                <p className={styles.ctaText}>¿Hablamos del proyecto?</p>
                <WhatsAppButton context="general" variant="default" label="Escribir por WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
