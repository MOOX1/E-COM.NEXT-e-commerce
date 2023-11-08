import { NextResponse, NextFetchEvent } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const cache = new Map();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, '10s'),
  ephemeralCache: cache,
  analytics: true,
});

// this middleware is for pages, not apis
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });

  // Rete limit
  if (
    req.nextUrl.pathname.startsWith('/api/auth/signin/email') ||
    req.nextUrl.pathname.startsWith('/api/auth/signin/google')
  ) {
    const id = req.ip ?? 'anonymous';

    const limit = await ratelimit.limit(id ?? 'anonymous');
    event.waitUntil(limit.pending);

    if (!limit.success) {
      const response = NextResponse.next();
      response.cookies.set(
        'error-rate-limit',
        'Excedeu a quantidade de tentativas, tente em 1 minuto',
      );
      return response;
    }

    return NextResponse.next({});
  }

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api')
  ) {
    return NextResponse.next({});
  }

  if (req.nextUrl.pathname.startsWith('/signin')) {
    if (token) return NextResponse.redirect(new URL('/', req.url));
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  if (req.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/produtos', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
