import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="about-title">
      <div className="container">
        <div className={styles.inner}>
          {/* Image */}
          <div className={styles.imageBlock}>
            <div className={styles.imgWrapper}>
              <Image
                src="/images/FotoMiguel.jpeg"
                alt="Miguel Fuentes, fotógrafo de Ngürü, apuntando con su cámara"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.img}
              />
            </div>
            {/* Decorative accent */}
            <div className={styles.accentFrame} aria-hidden="true" />
          </div>

          {/* Text */}
          <div className={styles.textBlock}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Sobre Ngürü
            </p>

            <h2 id="about-title" className={styles.title}>
              El trabajo<br />
              habla<br />
              <span className={styles.accent}>primero.</span>
            </h2>

            <div className={styles.body}>
              <p>
                Soy <strong>Miguel Fuentes</strong>, Filmmaker y Diseñador Gráfico. Creo contenido visual y soluciones de diseño desde mi estudio creativo <strong>Ngürü</strong>, ubicado en <strong>Frutillar, Región de Los Lagos</strong>.
              </p>
              <p>
                Trabajo enfocado en tres áreas: <strong>Fotografía Comercial</strong> de alta gama, producción de <strong>Reels & Video corporativo</strong>, y desarrollo de <strong>Branding estratégico</strong> para marcas y empresas.
              </p>
              <p>
                Creo en los proyectos personalizados. Empiezo cada trabajo escuchando las necesidades reales de tu negocio para diseñar piezas visuales que conecten de verdad en el entorno digital.
              </p>
            </div>

            <div className={styles.actions}>
              <WhatsAppButton context="general" variant="default" label="Hablar del proyecto" />
              <Link href="/about" className={styles.learnMore}>
                Conocer más
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
