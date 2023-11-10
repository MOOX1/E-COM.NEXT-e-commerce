'use client';

import { useSession } from 'next-auth/react';

export default function SessionEmail() {
  const { data: session } = useSession();

  return (
    <p className="font-alt text-sm text-mainBlue opacity-90">
      {session && session?.user.email}
    </p>
  );
}
