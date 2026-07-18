import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import GalleryCarousel from '@/components/GalleryCarousel/GalleryCarousel';
import { projects, getProjectBySlug } from '@/lib/projects';
import styles from './project.module.css';

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Ngürü`,
      description: project.description,
      images: [{ url: project.image, alt: project.alt }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Escanear carpeta de imágenes si está especificada
  let galleryImages = [...(project.gallery || [])];
  if (project.galleryFolder) {
    try {
      let dirPath = path.join(process.cwd(), 'public/images', project.galleryFolder);
      if (!fs.existsSync(dirPath)) {
        // Fallback si Next.js se está ejecutando desde la raíz del workspace nguru
        dirPath = path.join(process.cwd(), 'site/public/images', project.galleryFolder);
      }
      
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
        const imagesInFolder = files
          .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
          .map(file => `/images/${project.galleryFolder}/${file}`);
        
        galleryImages = Array.from(new Set([...galleryImages, ...imagesInFolder]));
      } else {
        console.warn(`La carpeta de imágenes no fue encontrada en: ${dirPath}`);
      }
    } catch (error) {
      console.error("Error al leer la carpeta de galería:", error);
    }
  }

  return (
    <article className={styles.page}>
      {/* Hero image */}
      <div className={styles.heroWrapper}>
        <Image
          src="/images/hero-main.jpeg"
          alt="Ngürü Hero"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
          quality={95}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          {/* Título y metadatos ocultos para diseño minimalista */}
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className={styles.content}>
          <div className={styles.projectImageBlock}>
            <Image
              src={project.image}
              alt={project.alt}
              width={1200}
              height={700}
              className={styles.projectMainImg}
              priority
            />
          </div>
          <div className={styles.projectInfoBlock}>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.cta}>
              <p className={styles.ctaText}>
                ¿Te interesa un proyecto similar?
              </p>
              <WhatsAppButton
                context={project.category}
                variant="large"
                label="Hablar de este proyecto"
              />
            </div>
          </div>
        </div>

        {/* Galería en formato carrusel interactivo */}
        {galleryImages && galleryImages.length > 0 && (
          <section className={styles.projectGallerySection} aria-label="Galería de fotos del proyecto">
            <h2 className={styles.gallerySectionTitle}>Galería del proyecto</h2>
            <GalleryCarousel images={galleryImages} projectTitle={project.title} />
          </section>
        )}

        {/* Back nav */}
        <div className={styles.backNav}>
          <Link href="/portfolio" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al portafolio
          </Link>
        </div>
      </div>
    </article>
  );
}
