'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function ButtonSignOut() {
  const router = useRouter();
  const handleSigningAuth = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/signin');
      router.refresh();
    });
  };

  return (
    <div
      onClick={handleSigningAuth}
      className="cursor-pointer rounded-full p-2 transition-colors hover:bg-mediaBlue/10"
    >
      <LogOut className="h-auto w-6 text-mainBlue" />
    </div>
  );
}
