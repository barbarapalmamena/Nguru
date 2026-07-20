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
    slug: 'comercial-alfajores-premium',
    title: 'Alfajores',
    category: 'comida',
    subcategory: 'dulces',
    categoryLabel: 'Fotografía de Alimentos',
    subcategoryLabel: 'Dulces & Panadería',
    year: '2025',
    format: 'Fotografía de Alimentos',
    image: '/images/comida/alfajores/DSC07503-min.jpg',
    alt: 'Fotografía de alfajores',
    description: 'Sesión de fotografía comercial de producto enfocada en alfajores.',
    galleryFolder: 'comida/alfajores',
    gallery: [],
  },
  {
    slug: 'comercial-dulces-del-sur',
    title: 'Alfajores 2',
    category: 'comida',
    subcategory: 'dulces',
    categoryLabel: 'Fotografía de Alimentos',
    subcategoryLabel: 'Dulces & Panadería',
    year: '2025',
    format: 'Fotografía de Alimentos',
    image: '/images/comida/alfajores 2/DSC07173.jpg',
    alt: 'Fotografía de alfajores (Sesión 2)',
    description: 'Galería de fotografía comercial de alfajores (Sesión 2).',
    galleryFolder: 'comida/alfajores 2',
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
    image: '/images/comida/Coctel/_DSC4786.jpg',
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
