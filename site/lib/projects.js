// lib/projects.js — datos de proyectos

export const projects = [
  // ── Fotografía de Alimentos › Dulces & Panadería ─────────────
  {
    slug: 'comercial-pasteleria-local',
    title: 'Alfajor, Galletas, Cuchuflí y Más',
    category: 'comida',
    subcategory: 'dulces',
    categoryLabel: 'Fotografía de Alimentos',
    subcategoryLabel: 'Dulces & Panadería',
    year: '2025',
    format: 'Fotografía de Alimentos',
    image: '/images/comida/Alfajor, Galletas, Cuchufli y Más/DSC07557-min.jpg',
    alt: 'Fotografía de alfajores, galletas y cuchuflís',
    description: 'Producción de fotografía comercial de alimentos para alfajores, galletas y cuchuflís.',
    galleryFolder: 'comida/Alfajor, Galletas, Cuchufli y Más',
    gallery: [],
  },
  {
    slug: 'comercial-berlines',
    title: 'Berlines',
    category: 'comida',
    subcategory: 'dulces',
    categoryLabel: 'Fotografía de Alimentos',
    subcategoryLabel: 'Dulces & Panadería',
    year: '2025',
    format: 'Fotografía de Alimentos',
    image: '/images/comida/Berlin/DSC07322-min.jpg',
    alt: 'Fotografía de berlines',
    description: 'Sesión de fotografía comercial de berlines.',
    galleryFolder: 'comida/Berlin',
    gallery: [],
  },
  // ── Fotografía de Alimentos › Cóctel & Banquetería ───────────
  {
    slug: 'comercial-coctel',
    title: 'Cóctel',
    category: 'comida',
    subcategory: 'coctel',
    categoryLabel: 'Fotografía de Alimentos',
    subcategoryLabel: 'Cóctel & Banquetería',
    year: '2025',
    format: 'Fotografía de Alimentos',
    image: '/images/comida/Coctel/_DSC4787.jpg',
    alt: 'Fotografía de cóctel y banquetería',
    description: 'Sesión de fotografía comercial de cócteles y preparaciones.',
    galleryFolder: 'comida/Coctel',
    gallery: [],
  },
  // ── Branding ─────────────────────────────────────────────────
  {
    slug: 'branding-logotipos',
    title: 'Logotipos',
    category: 'branding',
    categoryLabel: 'Branding y Diseño',
    year: '2025',
    format: 'Diseño de Marca',
    image: '/images/Logotipo/Mesa de trabajo 1 (3).png',
    alt: 'Diseño de logotipos',
    description: 'Galería de diseños de logotipos e identidad visual.',
    galleryFolder: 'Logotipo',
    gallery: [],
  },
  // ── Fotografía de Escenario ─────────────────────────────────
  {
    slug: 'escenario-juanito-ayala',
    title: 'Juanito Ayala',
    category: 'famosos',
    categoryLabel: 'Fotografía de Escenario',
    year: '2025',
    format: 'Fotografía de Escenario',
    image: '/images/fotografia de escenario/editadas  Juanito ayala/DSC04006.jpg',
    alt: 'Fotografía de Juanito Ayala en escenario',
    description: 'Sesión de fotografía de escenario con Juanito Ayala.',
    galleryFolder: 'fotografia de escenario/editadas  Juanito ayala',
    gallery: [],
  },
  {
    slug: 'escenario-glo',
    title: 'Glo',
    category: 'famosos',
    categoryLabel: 'Fotografía de Escenario',
    year: '2025',
    format: 'Fotografía de Escenario',
    image: '/images/fotografia de escenario/editadas glo/editadas glo/DSC00458.jpg',
    alt: 'Fotografía de Glo en escenario',
    description: 'Sesión de fotografía de escenario con Glo.',
    galleryFolder: 'fotografia de escenario/editadas glo/editadas glo',
    gallery: [],
  },
  {
    slug: 'escenario-santa-feria',
    title: 'Santa Feria',
    category: 'famosos',
    categoryLabel: 'Fotografía de Escenario',
    year: '2025',
    format: 'Fotografía de Escenario',
    image: '/images/fotografia de escenario/santa feria/DSC04312.jpg',
    alt: 'Fotografía de Santa Feria en escenario',
    description: 'Sesión de fotografía de escenario con Santa Feria.',
    galleryFolder: 'fotografia de escenario/santa feria',
    gallery: [],
  },
  // ── Fotografía de Modelos ───────────────────────────────────
  {
    slug: 'fotografia-de-modelos',
    title: 'Sesión de Modelos',
    category: 'modelos',
    categoryLabel: 'Fotografía de Modelos',
    year: '2025',
    format: 'Fotografía de Modelos / Sesión Exterior',
    image: '/images/fotografia de modelos/DSC08137-min.jpg',
    alt: 'Fotografía de sesión con modelos',
    description: 'Sesión de fotografía artística y comercial con modelos en exteriores e interiores.',
    galleryFolder: 'fotografia de modelos',
    gallery: [],
  },
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug) || null;
}

export function getProjectsByCategory(category) {
  return projects.filter(p => p.category === category);
}

export function getProjectsBySubcategory(category, subcategory) {
  return projects.filter(p => p.category === category && p.subcategory === subcategory);
}
