import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const base = site?.href?.replace(/\/$/, '') || 'https://miaread.vercel.app';
  const urls = ['/'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${base}${u}</loc><changefreq>weekly</changefreq></url>`).join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
