import { User2 } from 'lucide-react';
import Image from 'next/image';
import Icon from '@/app/icon.svg';

interface IProfileProps {
  colapssed: boolean;
}

export default function Profile({ colapssed }: IProfileProps) {
  return (
    <div className=" flex items-center justify-center gap-2 pb-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mediaBlue p-[1px]">
        <Image src={Icon} alt="logo" />
        {/* <User2 className="h-5 w-5 text-black" /> */}
      </div>
      <div
        className={
          (colapssed && ' absolute w-0 opacity-0 !duration-100') +
          ' transition-opacity duration-1000'
        }
      >
        <p className="cursor-default font-alt text-base text-mainBlue transition-colors hover:text-mediaBlue">
          E-COM.NEXT
        </p>
        <p className="font-alt text-sm text-mainBlue opacity-90">
          emailexemplo@gmail.com
        </p>
      </div>
    </div>
  );
}
