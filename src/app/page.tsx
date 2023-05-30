import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ButtonSignOut from '@/components/buttonSignOut/buttonSignOut';
import Link from 'next/link';
import React from 'react';

export default async function Home() {
  const session = cookies().has('next-auth.session-token');

  if (!session) redirect('/signin');
  return (
    <div>
      <h1>home</h1>
      <ButtonSignOut />
      <Link href={'/teste'}>teste</Link>
      {
        // indicates very long content
        Array.from({ length: 100 }, (_, index) => (
          <React.Fragment key={index}>
            {index % 20 === 0 && index ? 'more' : '...'}
            <br />
          </React.Fragment>
        ))
      }
    </div>
  );
}
