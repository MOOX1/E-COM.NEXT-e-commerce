import { User2 } from 'lucide-react';
import Image from 'next/image';
import Icon from '@/app/icon.svg';

interface ProfileProps {
  colapssed: boolean;
}

export default function Profile({ colapssed }: ProfileProps) {
  return (
    <div className=" flex justify-center gap-2 items-center pb-5">
      <div className="h-12 w-12 bg-mediaBlue p-[1px] rounded-full flex items-center justify-center">
        <Image src={Icon} alt="logo" />
        {/* <User2 className="h-5 w-5 text-black" /> */}
      </div>
      <div
        className={
          (colapssed && ' !duration-100 opacity-0 absolute w-0') +
          ' transition-opacity duration-1000'
        }
      >
        <p className="font-alt text-base text-mainBlue cursor-default hover:text-mediaBlue transition-colors">
          E-COM.NEXT
        </p>
        <p className="font-alt text-sm text-mainBlue opacity-90">
          emailexemplo@gmail.com
        </p>
      </div>
    </div>
  );
}
