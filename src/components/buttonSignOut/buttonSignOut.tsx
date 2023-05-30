'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ButtonSignOut() {
  const router = useRouter();

  const handleSigninAuth = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/signin');
      router.refresh();
    });
  };

  return <h1 onClick={handleSigninAuth}> sair</h1>;
}
