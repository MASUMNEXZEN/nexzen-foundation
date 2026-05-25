export default function sitemap() {
  const baseUrl = 'https://www.nexzenfoundation.in';
  const now = new Date().toISOString();

  const routes = [
    { url: '/',                              priority: 1.0,  changeFrequency: 'weekly' },
    { url: '/about',                         priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/ntse',                          priority: 0.95, changeFrequency: 'weekly' },
    { url: '/programmes',                    priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/programmes/scholarships',       priority: 0.85, changeFrequency: 'monthly' },
    { url: '/programmes/healthcare',         priority: 0.85, changeFrequency: 'monthly' },
    { url: '/programmes/school-upgradation', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/programmes/social-services',    priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/programmes/ipec',               priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/programmes/consultancy',        priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/consultancy',                   priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/consultancy/individual',        priority: 0.88, changeFrequency: 'monthly' },
    { url: '/consultancy/institutional',     priority: 0.85, changeFrequency: 'monthly' },
    { url: '/donate',                        priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/transparency',                  priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/leadership',                    priority: 0.75, changeFrequency: 'monthly' },
    { url: '/gallery',                       priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/contact',                       priority: 0.85, changeFrequency: 'monthly' },
    { url: '/faq',                           priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/volunteer',                     priority: 0.75, changeFrequency: 'monthly' },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
