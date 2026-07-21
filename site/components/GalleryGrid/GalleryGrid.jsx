'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GalleryGrid.module.css';

const FILTERS = [
  { id: 'comida',   label: 'Fotografía de Alimentos' },
  { id: 'famosos',  label: 'Fotografía de Escenario' },
  { id: 'modelos',  label: 'Fotografía de Modelos' },
  { id: 'espacios', label: 'Fotografía de Espacios' },
  { id: 'video',    label: 'Reels & Video' },
  { id: 'branding', label: 'Branding & Diseño' },
];

const SUBCATEGORY_FILTERS = {
  comida: [
    { id: 'all', label: 'Todos' },
    { id: 'dulces', label: 'Dulces & Panadería' },
    { id: 'coctel', label: 'Cóctel & Banquetería' },
  ],
  branding: [
    { id: 'all', label: 'Todos' },
    { id: 'logotipos', label: 'Logotipos' },
    { id: 'flyers', label: 'Flyers & Afiches' },
  ],
};

/**
 * GalleryGrid
 * @param {Object} props
 * @param {Array}   props.items           — Array of project objects
 * @param {string}  [props.initialCategory] — Initial filter
 * @param {boolean} [props.showFilters]   — Show filter buttons
 * @param {number}  [props.limit]         — Max items to show
 */
export default function GalleryGrid({
  items = [],
  initialCategory = 'comida',
  showFilters = true,
  limit,
}) {
  const [active, setActive]           = useState(initialCategory);
  const [activeSub, setActiveSub]     = useState('all');

  const subcategoryFilters = SUBCATEGORY_FILTERS[active] || null;

  function handleCategoryChange(id) {
    setActive(id);
    setActiveSub('all');
  }

  const visibleItems = useCallback(() => {
    let base = items.filter(i => i.category === active);

    if (subcategoryFilters && activeSub && activeSub !== 'all') {
      base = base.filter(i => i.subcategory === activeSub);
    }

    return limit ? base.slice(0, limit) : base;
  }, [items, active, activeSub, limit, subcategoryFilters]);

  const displayed = visibleItems();

  return (
    <div className={styles.wrapper}>
      {showFilters && (
        <nav aria-label="Filtrar galería por categoría" role="navigation">
          {/* Filtros principales */}
          <ul className={styles.filterList}>
            {FILTERS.map(f => (
              <li key={f.id}>
                <button
                  id={`filter-${f.id}`}
                  className={`${styles.filterBtn} ${active === f.id ? styles.filterActive : ''}`}
                  onClick={() => handleCategoryChange(f.id)}
                  aria-pressed={active === f.id}
                >
                  {f.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Subfiltros — aparecen solo si la categoría activa los tiene */}
          {subcategoryFilters && (
            <ul className={styles.subfilterList} aria-label="Filtrar por subcategoría">
              {subcategoryFilters.map(sf => (
                <li key={sf.id}>
                  <button
                    id={`subfilter-${sf.id}`}
                    className={`${styles.subfilterBtn} ${activeSub === sf.id ? styles.subfilterActive : ''}`}
                    onClick={() => setActiveSub(sf.id)}
                    aria-pressed={activeSub === sf.id}
                  >
                    {sf.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      )}

      {displayed.length === 0 ? (
        <p className={styles.empty}>No hay proyectos en esta categoría todavía.</p>
      ) : (
        <ul className={styles.grid} aria-label="Galería de proyectos">
          {displayed.map(item => (
            <li key={item.slug} className={styles.item}>
              <Link
                href={`/portfolio/${item.slug}`}
                className={styles.card}
                aria-label={`Ver proyecto: ${item.title}`}
              >
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.img}
                  />
                  <div className={styles.overlay}>
                    {/* Visual hover overlay without text */}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
