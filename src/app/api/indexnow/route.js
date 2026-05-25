import { NextResponse } from 'next/server';

// IndexNow key - submit this to indexnow.org to activate
const INDEXNOW_KEY = 'nexzenfoundation2026indexnow';

export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
