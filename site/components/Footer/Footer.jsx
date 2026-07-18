import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/about', label: 'Sobre mí' },
];

const categories = [
  { href: '/portfolio?cat=comercial', label: 'Fotografía Comercial' },
  { href: '/portfolio?cat=video', label: 'Reels & Video' },
  { href: '/portfolio?cat=branding', label: 'Branding y Diseño' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Ngürü inicio">
            <Image
              src="/images/logo nguru.png"
              alt="Ngürü — Filmmaker y Diseño Gráfico"
              width={180}
              height={78}
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.tagline}>
            Fotografía editorial y filmación cinematográfica<br />
            en Chile — Los Lagos, Patagonia y más allá.
          </p>
          <WhatsAppButton context="general" variant="footer" />
        </div>

        {/* Links */}
        <div className={styles.linksGroup}>
          <h3 className={styles.groupTitle}>Sitio</h3>
          <ul className={styles.linkList}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h3 className={styles.groupTitle}>Servicios</h3>
          <ul className={styles.linkList}>
            {categories.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            &copy; {year} Ngürü. Todos los derechos reservados.
          </p>
          <p className={styles.copy}>
            Hecho con <span aria-label="amor" className={styles.heart}>♥</span> en la Patagonia
          </p>
        </div>
      </div>
    </footer>
  );
}
