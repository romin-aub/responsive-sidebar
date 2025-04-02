import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/login(.*)',
  '/sign-up(.*)',
  '/not-found(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    try {
      await auth.protect();
      return NextResponse.redirect(new URL('/', req.url));
    } catch {
      return NextResponse.next();
    }
  } else {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
