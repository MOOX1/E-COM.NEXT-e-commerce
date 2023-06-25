import Link from 'next/link';
import { ISubMenuItemProps } from '../types';

interface ISubMenuProps {
  SubMenuItems?: ISubMenuItemProps[];
  collapsed?: boolean;
}

export default function SubmenuItem({ SubMenuItems }: ISubMenuProps) {
  return (
    <div
      className={
        'submenu invisible h-0 overflow-hidden first:mt-1 hover:visible hover:!h-auto peer-hover:visible peer-hover:h-auto peer-hover:duration-1000'
      }
    >
      {SubMenuItems?.map(item => (
        <div key={item.label} className="z-10 w-full overflow-hidden">
          <Link
            key={item.label}
            prefetch={false}
            className={
              ' peer z-10 ml-[5rem] flex w-full cursor-pointer gap-3 border-l border-mainBlue/50 py-3 pl-6 transition-colors'
            }
            href={item.pathname}
          >
            <p
              className={
                'flex items-center font-alt text-base font-normal text-mainBlue'
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
