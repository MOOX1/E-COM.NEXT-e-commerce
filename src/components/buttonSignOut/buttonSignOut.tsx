'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function ButtonSignOut() {
  const router = useRouter();
  const handleSigninAuth = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/signin');
      router.refresh();
    });
  };

  return (
    <div
      onClick={handleSigninAuth}
      className="cursor-pointer hover:bg-mediaBlue/10 p-2 rounded-full transition-colors"
    >
      <LogOut className="text-mainBlue w-6 h-auto" />
    </div>
  );
}
