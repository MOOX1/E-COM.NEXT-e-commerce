'use client';
import { Edit, Trash } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Profile() {
  const { data, status } = useSession();
  console.log(data);
  console.log(status);

  return (
    <div className="flex flex-col gap-4 h-full w-2/4 text-center justify-center items-center relative bg-strongBlue p-3 rounded-lg">
      <div className="absolute top-3 right-3 flex gap-2">
        <Edit className="text-mainBlue h-auto w-5 cursor-pointer" />
        <Trash className="text-mainBlue h-auto w-5 cursor-pointer" />
      </div>
      <div className="h-24 w-24 rounded-full bg-white">
        <Image
          src={data?.user?.image as string}
          width={96}
          height={96}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="font-alt text-white text-center flex justify-center items-center flex-col gap-1">
        <p className="font-semibold font-alt text-lg uppercase">
          {data?.user?.levelAccess}
        </p>
        <p className="px-2 py-1 bg-mainBlue font-semibold w-min whitespace-nowrap rounded text-base">
          {data?.user?.name}
        </p>
        <p className="text-mainBlue underline text-base opacity-80">
          {data?.user?.email}
        </p>
      </div>
    </div>
  );
}
