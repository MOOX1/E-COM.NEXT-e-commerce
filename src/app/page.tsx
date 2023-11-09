import ButtonSignOut from '@/components/ButtonSignOut';

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DashBoard',
  description: '...',
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1>home</h1>
      <ButtonSignOut />
    </div>
  );
}
