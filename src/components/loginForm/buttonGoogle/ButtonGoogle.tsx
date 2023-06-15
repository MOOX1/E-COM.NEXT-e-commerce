'use client';

import Image from 'next/image';
import googleIcon from '@/assets/googleIcon.svg';

interface ButtonGoogleProps {
  onClick: () => void;
}

export default function ButtonGoogle({ onClick }: ButtonGoogleProps) {
  return (
    <div
      onClick={onClick}
      aria-label="buttom-google"
      className="min-w-[230px] p-1 cursor-pointer h-auto bg-mainBlue rounded-3xl mt-7 flex items-center"
    >
      <Image src={googleIcon} width={40} height={41} alt="" />
      <p className="text-black font-sans text-center text-xs w-full font-normal pr-5">
        login com google
      </p>
    </div>
  );
}
