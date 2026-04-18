import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { key } = await request.json();
    if (!key || typeof key !== 'string' || key.length > 64) {
      return new Response(null, { status: 204 });
    }
    await supabase.from('miaread_link_clicks').insert({ link_key: key });
  } catch {
    // swallow
  }
  return new Response(null, { status: 204 });
};
