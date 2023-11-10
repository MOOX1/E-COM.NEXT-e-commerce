import Image from 'next/image';
import Icon from '@/app/icon.svg';
import SessionEmail from './SessionEmail';

interface IProfileProps {
  collapsed: boolean;
}

export default function Profile({ collapsed }: IProfileProps) {
  return (
    <div className=" flex items-center justify-center gap-2 pb-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mediaBlue p-[1px]">
        <Image src={Icon} alt="logo" />
      </div>
      <div
        className={
          (collapsed && ' absolute w-0 opacity-0 !duration-0') +
          ' w-auto transition-opacity duration-700'
        }
      >
        <p className="cursor-default font-alt text-base text-mainBlue transition-colors hover:text-mediaBlue">
          E-COM.NEXT
        </p>
        <SessionEmail />
      </div>
    </div>
  );
}
