import { NextResponse } from 'next/server';

const RAZORPAY_KEY_ID     = 'rzp_live_StGuTXsWa2VD8P';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request) {
  try {
    const { planId } = await request.json();

    if (!planId) {
      return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
    }

    if (!RAZORPAY_KEY_SECRET) {
      console.error('RAZORPAY_KEY_SECRET env variable is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create subscription via Razorpay API
    const credentials = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

    const response = await fetch('https://api.razorpay.com/v1/subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan_id: planId,
        quantity: 1,
        total_count: 120,          // 10 years max — donor can cancel anytime
        notes: {
          purpose: 'Monthly Recurring Charitable Donation',
          trust_reg: 'IV-1901-01209-2025',
          '80g_cert': 'AAFTN1149JF20261',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Razorpay API error:', data);
      return NextResponse.json(
        { error: data.error?.description || 'Failed to create subscription' },
        { status: response.status }
      );
    }

    // Return only what the front-end needs — never expose the secret
    return NextResponse.json({
      subscription_id: data.id,
      status: data.status,
    });

  } catch (err) {
    console.error('Subscription creation error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
