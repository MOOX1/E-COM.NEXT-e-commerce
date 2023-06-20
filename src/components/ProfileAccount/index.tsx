'use client';
import { Edit, Trash } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Suspense } from 'react';
import Load from '../Load';

export default function Profile() {
  const { data } = useSession();

  return (
    <div className="relative flex h-full w-2/4 flex-col items-center justify-center gap-4 rounded-lg bg-strongBlue p-3 text-center shadow-main">
      <div className="absolute right-3 top-3 flex gap-2">
        <Edit className="h-auto w-4 cursor-pointer text-mainBlue" />
        <Trash className="h-auto w-4 cursor-pointer text-mainBlue" />
      </div>
      <Suspense fallback={<Load />}>
        <div className="h-24 w-24 rounded-full bg-white">
          <Image
            src={data?.user?.image as string}
            width={96}
            height={96}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-center font-alt text-white">
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
