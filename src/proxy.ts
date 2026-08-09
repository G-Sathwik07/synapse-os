import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';

export async function proxy(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isProtectedRoute =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/memory') ||
    pathname.startsWith('/search') ||
    pathname.startsWith('/knowledge-graph') ||
    pathname.startsWith('/projects') ||
    pathname.startsWith('/integrations') ||
    pathname.startsWith('/settings');

  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
