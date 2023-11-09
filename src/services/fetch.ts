import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export const Fetch = async (url: string, body?: RequestInit) => {
  const Headers = headers();

  return await fetch(`${process.env.NEXTAUTH_URL}${url}`, {
    ...body,
    headers: {
      ...body?.headers,
      cookie: Headers.get('cookie') ?? '',
    },
  }).then(data => data.json());
};
