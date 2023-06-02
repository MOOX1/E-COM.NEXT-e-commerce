import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ButtonSignOut from '@/components/buttonSignOut/buttonSignOut';
import Link from 'next/link';
import React from 'react';

export default async function Home() {
  const session = cookies().has('next-auth.session-token');

  if (!session) redirect('/signin');
  return (
    <div className=" flex flex-col gap-5 bg-conetnt">
      <h1>home</h1>
      <ButtonSignOut />
      <Link href={'/teste'}>teste</Link>
      <Link href={'/dashboard'}>dash</Link>
      <Link href={'/settings'}>settings</Link>
      <Link href={'/overview'}>overview</Link>
    </div>
  );
}
