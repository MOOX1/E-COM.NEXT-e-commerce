import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ButtonSignOut from '@/components/buttonSignOut/buttonSignOut';
import Link from 'next/link';
import React from 'react';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  const session = cookies().has('next-auth.session-token');

  // const response: ('more' | '...')[] = await new Promise(() => {
  //   const data = setTimeout(() => {
  //     // indicates very long content
  //     const data = Array.from({ length: 100 }, (_, index) => {
  //       return index % 20 === 0 && index ? 'more' : '...';
  //     });
  //     return data;
  //   }, 2000);
  //   return data;
  // });

  if (!session) redirect('/signin');
  return (
    <div>
      <h1>home</h1>
      <ButtonSignOut />
      <Link href={'/teste'}>teste</Link>
      {/* <Suspense fallback={<Loading />}>{response}</Suspense> */}
    </div>
  );
}
