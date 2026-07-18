'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/about',     label: 'Sobre mí' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Ngürü — ir al inicio">
          <Image
            src="/images/logo nguru.png"
            alt="Ngürü"
            width={200}
            height={60}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.mobileNavLink} ${pathname === href ? styles.active : ''}`}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
