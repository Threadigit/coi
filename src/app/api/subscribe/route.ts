import { NextResponse } from 'next/server';

/**
 * Newsletter signup.
 *
 * This is a plain route handler rather than a Server Action on purpose: it works
 * the same from every page and language, including the rewritten English URLs,
 * and does not depend on how pages are routed.
 */
export async function POST(request: Request) {
  let email = '';
  try {
    const body = await request.json();
    email = typeof body?.email === 'string' ? body.email.trim() : '';
  } catch {
    // fall through to validation below
  }

  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ success: false, error: 'Newsletter configuration missing.' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({ email }),
    });

    const text = await response.text();
    let data: { code?: string; message?: unknown } = {};
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        console.error('Brevo JSON parse error:', text);
      }
    }

    if (!response.ok) {
      if (data.code === 'duplicate_parameter' || (typeof data.message === 'string' && data.message.includes('already exist'))) {
        return NextResponse.json({ success: true, alreadySubscribed: true });
      }
      return NextResponse.json(
        { success: false, error: typeof data.message === 'string' ? data.message : `Failed to subscribe HTTP ${response.status}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, alreadySubscribed: false });
  } catch (error) {
    console.error('Brevo Fetch Error:', error);
    return NextResponse.json({ success: false, error: 'Network error' }, { status: 502 });
  }
}
