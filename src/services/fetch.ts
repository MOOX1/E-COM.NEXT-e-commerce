import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export const runtime = 'edge';

export const Fetch = (url: string, body: RequestInit) =>
  fetch(`${process.env.NEXTAUTH_URL}${url}`, body);
