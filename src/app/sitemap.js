export default function sitemap() {
  const baseUrl = 'https://www.nexzenfoundation.in';

  const routes = [
    // ── Core (highest priority) ──
    { url: '/',                              priority: 1.0,  changeFrequency: 'weekly',  lastModified: '2026-05-25' },
    { url: '/ntse',                          priority: 0.95, changeFrequency: 'weekly',  lastModified: '2026-05-25' },
    { url: '/donate',                        priority: 0.92, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/about',                         priority: 0.90, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/consultancy',                   priority: 0.90, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/consultancy/individual',        priority: 0.88, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/consultancy/institutional',     priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-05-25' },

    // ── Programmes ──
    { url: '/programmes',                    priority: 0.88, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/scholarships',       priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/healthcare',         priority: 0.85, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/school-upgradation', priority: 0.82, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/social-services',    priority: 0.80, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/ipec',               priority: 0.80, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/programmes/consultancy',        priority: 0.78, changeFrequency: 'monthly', lastModified: '2026-05-25' },

    // ── Content & Trust ──
    { url: '/news',                          priority: 0.85, changeFrequency: 'weekly',  lastModified: '2026-05-25' },
    { url: '/faq',                           priority: 0.82, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/transparency',                  priority: 0.80, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/contact',                       priority: 0.80, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/volunteer',                     priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/leadership',                    priority: 0.72, changeFrequency: 'monthly', lastModified: '2026-05-25' },
    { url: '/gallery',                       priority: 0.68, changeFrequency: 'monthly', lastModified: '2026-05-25' },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
