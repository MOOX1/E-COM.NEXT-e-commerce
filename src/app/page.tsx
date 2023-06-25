import ButtonSignOut from '@/components/ButtonSignOut';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DashBoard',
  description: '...',
};

export default async function Home() {
  return (
    <div className=" bg-conetnt flex flex-col gap-5">
      <h1>home</h1>
      <ButtonSignOut />
    </div>
  );
}
