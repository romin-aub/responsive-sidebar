import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isPublicRoute = createRouteMatcher(['/login', '/sign-up']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
