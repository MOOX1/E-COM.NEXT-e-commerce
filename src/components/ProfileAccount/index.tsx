'use client';
import { Edit, Trash, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Suspense } from 'react';
import Load from '../atoms/Load';

export default function Profile() {
  const { data } = useSession();

  return (
    <div className="relative flex h-full w-2/4  items-center justify-center gap-4 rounded-lg bg-strongBlue p-3 text-center shadow-main">
      <Suspense fallback={<Load />}>
        <div className="h-24 w-24 rounded-full bg-white">
          {data?.user.image && (
            <Image
              src={data?.user?.image}
              width={96}
              height={96}
              alt=""
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-left font-alt text-white">
          <p className="font-alt text-lg font-semibold uppercase">
            {data?.user?.levelAccess}
          </p>
          <p className="w-min whitespace-nowrap rounded bg-mainBlue px-2 py-1 text-base font-semibold text-black">
            {data?.user?.name}
          </p>
          <p className="text-base text-mainBlue underline opacity-80">
            {data?.user?.email}
          </p>
        </div>
      </Suspense>
    </div>
  );
}
