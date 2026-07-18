'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GalleryGrid.module.css';

const FILTERS = [
  { id: 'all',        label: 'Todo' },
  { id: 'comercial',  label: 'Fotografía Comercial' },
  { id: 'video',      label: 'Reels & Video' },
  { id: 'branding',   label: 'Branding & Diseño' },
];

/**
 * GalleryGrid
 * @param {Object} props
 * @param {Array} props.items — Array of project objects
 * @param {string} [props.initialCategory] — Initial filter
 * @param {boolean} [props.showFilters] — Show filter buttons
 * @param {number} [props.limit] — Max items to show
 */
export default function GalleryGrid({
  items = [],
  initialCategory = 'all',
  showFilters = true,
  limit,
}) {
  const [active, setActive] = useState(initialCategory);

  const filtered = useCallback(() => {
    const base = active === 'all' ? items : items.filter(i => i.category === active);
    return limit ? base.slice(0, limit) : base;
  }, [items, active, limit]);

  const visibleItems = filtered();

  return (
    <div className={styles.wrapper}>
      {showFilters && (
        <nav className={styles.filters} aria-label="Filtrar galería por categoría" role="navigation">
          <ul className={styles.filterList}>
            {FILTERS.map(f => (
              <li key={f.id}>
                <button
                  id={`filter-${f.id}`}
                  className={`${styles.filterBtn} ${active === f.id ? styles.filterActive : ''}`}
                  onClick={() => setActive(f.id)}
                  aria-pressed={active === f.id}
                >
                  {f.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {visibleItems.length === 0 ? (
        <p className={styles.empty}>No hay proyectos en esta categoría todavía.</p>
      ) : (
        <ul className={styles.grid} aria-label="Galería de proyectos">
          {visibleItems.map(item => (
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
