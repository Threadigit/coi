'use server';

export async function subscribeToNewsletter(email: string) {
  if (!email || !email.includes('@')) {
    return { success: false, error: 'Invalid email address.' };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'Newsletter configuration missing.' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email
      }),
    });

    const text = await response.text();
    let data: any = {};
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error('Brevo JSON parse error:', text);
      }
    }

    if (!response.ok) {
      if (data.code === 'duplicate_parameter' || (typeof data.message === 'string' && data.message.includes('already exist'))) {
        return { success: true, alreadySubscribed: true }; // Return special flag
      }
      return { success: false, error: data.message || `Failed to subscribe HTTP ${response.status}` };
    }

    return { success: true, alreadySubscribed: false };
  } catch (error) {
    console.error('Brevo Fetch Error:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Network error: ${msg}` };
  }
}
