import { NextResponse, NextFetchEvent } from 'next/server';
import { NextRequest } from 'next/server';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const chache = new Map();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, '10s'),
  ephemeralCache: chache,
  analytics: true
});

export async function middleware(req: NextRequest, event: NextFetchEvent) {
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
        'Excedeu a quantidade de tentativas, tente em 1 minuto'
      );
      return response;
    }

    return NextResponse.next({});
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/auth/signin/google', '/api/auth/signin/google']
};
