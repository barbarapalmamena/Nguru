import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://nguru.cl'),
  title: {
    default: 'Ngürü — Fotografía y Filmación',
    template: '%s — Ngürü',
  },
  description:
    'Estudio de fotografía y filmación en Chile. Bodas, retratos, naturaleza y branded content en Los Lagos, Patagonia y todo el país.',
  keywords: ['fotografía', 'filmación', 'bodas', 'retratos', 'patagonia', 'chile', 'nguru'],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Ngürü Fotografía & Film',
    title: 'Ngürü — Fotografía y Filmación',
    description:
      'Estudio de fotografía y filmación en Chile. Bodas, retratos, naturaleza y branded content.',
    images: [{ url: '/images/hero-main.jpeg', width: 1200, height: 630, alt: 'Ngürü Fotografía' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/layout.png',
    shortcut: '/images/layout.png',
    apple: '/images/layout.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
