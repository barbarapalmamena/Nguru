import { projects } from '@/lib/projects';

export default function sitemap() {
  const base = 'https://nguru.cl';

  const projectPages = projects.map(p => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...projectPages,
  ];
}
