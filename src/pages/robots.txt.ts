import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const base = site?.href?.replace(/\/$/, '') || 'https://miaread.vercel.app';
  const body = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
