import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './Skills.module.css';

const services = [
  {
    id: 'comercial',
    number: '01',
    name: 'Fotografía Comercial',
    positioning: 'Imágenes de producto y campañas de marca de nivel editorial.',
    description: 'Fotografía publicitaria, de productos (e-commerce), industrial y corporativa. Luz y composición pensadas para comunicar la calidad de tu negocio.',
    formats: ['Publicidad', 'E-commerce', 'Catálogo', 'Corporativo'],
    context: 'comercial',
  },
  {
    id: 'video',
    number: '02',
    name: 'Reels & Video',
    positioning: 'Storytelling audiovisual dinámico optimizado para captar atención.',
    description: 'Producción de video publicitario, Reels para redes sociales y corporativos en formato cinematográfico. Desde la idea hasta el montaje final.',
    formats: ['Reels', 'Videos Corporativos', 'Campañas Web'],
    context: 'video',
  },
  {
    id: 'branding',
    number: '03',
    name: 'Branding y Diseño',
    positioning: 'Identidad visual con sentido estético y estratégico.',
    description: 'Desarrollo de logotipos, identidad de marca y diseño gráfico estratégico (flyers, afiches, folletos y piezas promocionales) tanto para impresión como para digital.',
    formats: ['Logotipos', 'Flyers y Afiches', 'Identidad de Marca', 'Packaging'],
    context: 'branding',
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="servicios" aria-labelledby="skills-title">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Servicios
          </p>
          <h2 id="skills-title" className={styles.title}>
            Lo que<br />
            <span className={styles.accent}>hacemos</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.id} className={styles.card} aria-labelledby={`service-${s.id}`}>
              <span className={styles.number} aria-hidden="true">{s.number}</span>
              <div className={styles.cardInner}>
                <h3 id={`service-${s.id}`} className={styles.serviceName}>{s.name}</h3>
                <p className={styles.positioning}>{s.positioning}</p>
                <p className={styles.description}>{s.description}</p>

                <ul className={styles.formats} aria-label={`Formatos de ${s.name}`}>
                  {s.formats.map(f => (
                    <li key={f} className={styles.format}>{f}</li>
                  ))}
                </ul>

                <WhatsAppButton context={s.context} variant="default" label={`Cotizar ${s.name}`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
