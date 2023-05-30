import { NextResponse, NextFetchEvent } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const chache = new Map();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, '10s'),
  ephemeralCache: chache,
  analytics: true
});

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });

  // if (
  //   req.nextUrl.pathname.startsWith('/api/auth/signin/email') ||
  //   req.nextUrl.pathname.startsWith('/api/auth/signin/email')
  // ) {
  //   const id = req.ip ?? 'anonymous';
  //   const { limit, pending, success } = await ratelimit.limit(
  //     id ?? 'anonymous'
  //   );
  //   event.waitUntil(pending);

  //   console.log(success);
  //   if (!success) {
  //     return NextResponse.json({ messa: 'excedeu o limite de tentativas' });
  //   }
  // }

  if (req.nextUrl.pathname.startsWith('/api/auth/session')) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next({});
  }

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/:path*', '/']
};
