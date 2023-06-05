import Link from 'next/link';
import { SubMenuItemProps } from '../types';

interface SubMenuProps {
  SubMenuItems?: SubMenuItemProps[];
  collapsed?: boolean;
}

export default function SubmenuItem({ SubMenuItems }: SubMenuProps) {
  return (
    <div
      className={
        'overflow-hidden first:mt-1 hover:visible hover:!h-auto submenu h-0 peer-hover:duration-1000 invisible peer-hover:h-auto peer-hover:visible'
      }
    >
      {SubMenuItems?.map((item) => (
        <div key={item.label} className="w-full z-10 overflow-hidden">
          <Link
            key={item.label}
            prefetch={false}
            className={
              ' peer cursor-pointer transition-colors flex py-3 w-full gap-3 z-10 pl-6 ml-[5rem] border-l border-mainBlue/50'
            }
            href={item.pathname}
          >
            <p
              className={
                'text-base font-normal text-mainBlue font-alt flex items-center'
              }
            >
              {item.label}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
