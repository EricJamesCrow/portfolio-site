import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface RequestBody {
    name: string;
    email: string;
    subject: string;
    message: string;
    }

export async function POST(req: Request) {
  const body:RequestBody = await req.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'contact@crowdevelopment.io',
      to: 'EricCrow@pm.me',
      subject: `${body.email}: ${body.subject}`,
      html: `<p>From: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <strong>${body.message}</strong>`,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
