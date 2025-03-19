import { routeHasAccess } from '@/utils/check-route-access';
import { getToken } from 'next-auth/jwt';
import { type NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/login', '/not-found'];

export default async function middleware(request: NextRequest) {
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  const role = token.role;
  if (!role) {
    return NextResponse.redirect(new URL('/not-found', request.url));
  }
  if (!routeHasAccess(request.nextUrl.pathname, role)) {
    return NextResponse.redirect(new URL('/not-found', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
