import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { sendWelcomeEmail } from '../../lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== 'string' || !/.+@.+\..+/.test(email)) {
      return new Response(JSON.stringify({ error: 'invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const cleaned = email.trim().toLowerCase();

    const { error } = await supabase
      .from('miaread_subscribers')
      .insert({ email: cleaned, source: 'linkbio' });

    if (error && error.code !== '23505') {
      console.error('supabase insert err', error);
      return new Response(JSON.stringify({ error: 'could not save — try again' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    sendWelcomeEmail(cleaned).catch((e) => console.error('welcome email', e));

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'bad request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
