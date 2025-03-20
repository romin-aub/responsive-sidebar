import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { routeHasAccess } from './utils/check-route-access';
import { getRoleId } from './utils/get-role-id';

const isPublicRoute = createRouteMatcher([
  '/login(.*)',
  '/sign-up(.*)',
  '/not-found(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }
  const authObject = await auth.protect();
  if (!authObject.userId || !authObject.sessionId) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  const role = (authObject.sessionClaims.metadata as { role: string }).role;
  if (!role || !getRoleId(role)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (!routeHasAccess(req.nextUrl.pathname, getRoleId(role) as number)) {
    return NextResponse.redirect(new URL('/not-found', req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
