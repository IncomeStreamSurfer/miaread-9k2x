const RESEND_API = 'https://api.resend.com/emails';

export async function sendWelcomeEmail(to: string) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY missing — skipping welcome email');
    return { skipped: true };
  }

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Mia <onboarding@resend.dev>',
      to: [to],
      subject: 'Welcome to the reading list 📖',
      html: welcomeHtml(),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('Resend error:', res.status, text);
    return { error: text };
  }
  return await res.json();
}

function welcomeHtml() {
  return `
  <div style="font-family: Georgia, serif; background:#faf3e7; color:#3a2e2a; padding:40px 20px;">
    <div style="max-width:520px; margin:0 auto; background:#fff; border-radius:16px; padding:40px; border:1px solid #f3e7d1;">
      <h1 style="font-family: 'Playfair Display', Georgia, serif; color:#b88585; margin:0 0 16px; font-size:28px;">Welcome, friend 📖</h1>
      <p style="font-size:16px; line-height:1.6; margin:0 0 16px;">
        Thank you for subscribing to my little corner of the reading world. Every other Sunday I'll send you my current read, three books I can't stop thinking about, and a cozy recommendation just for you.
      </p>
      <p style="font-size:16px; line-height:1.6; margin:0 0 24px;">
        In the meantime, I'd love to hear what <em>you're</em> reading. Just reply to this email.
      </p>
      <p style="font-size:16px; margin:0;">
        Happy reading,<br/>
        <strong style="color:#b88585;">— Mia</strong>
      </p>
    </div>
    <p style="text-align:center; color:#b88585; font-size:12px; margin-top:20px;">
      @miaread · unsubscribe anytime
    </p>
  </div>`;
}
