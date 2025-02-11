import { NextResponse } from 'next/server';

// middleware options
export const config = {
  matcher: ['/:path*'],
};

export function middleware() {
  return NextResponse.next();
}
