import { usePathname } from 'next/navigation';
import { IMenuItemProps } from '../types';
import Link from 'next/link';
import { memo } from 'react';

interface IMenuItemsProps {
  collapsed: boolean;
  menuItems: IMenuItemProps[];
}

function MenuItem({ collapsed, menuItems }: IMenuItemsProps) {
  const router = usePathname();
  let positionSelected = '0.1rem';

  const data = () => {
    let newItemActive = 0;
    const newMenuItems: IMenuItemProps[] = menuItems.map((item, index) => {
      if (item.pathname == router) newItemActive = index;
      return {
        ...item,
        isActive: item.pathname == router,
      };
    });
    menuItems = newMenuItems;

    positionSelected = `${3.5 * newItemActive}rem`;
  };

  data();

  return (
    <div className="relative flex w-full flex-col items-center gap-2  ">
      <div
        style={{ top: `${positionSelected}` }}
        className={
          (collapsed && ' ml-4') +
          ` to-[rgba(217, 217, 217, 0) 79.7%)] absolute ml-20 h-12 w-full rounded-l-lg bg-gradient-to-r from-mainBlue opacity-70 duration-500 `
        }
      ></div>
      {menuItems.map(item => {
        return (
          <div key={item.label} className="z-10 w-full">
            <Link
              prefetch={false}
              className={
                (collapsed && ' justify-center !pl-0') +
                ' peer z-10 flex w-full cursor-pointer gap-3 py-3 pl-16 transition-colors duration-200 ' +
                (!item.isActive && 'hover:bg-mediaBlue/10')
              }
              href={item.pathname}
            >
              <div>{item.Icon}</div>

              <p
                className={
                  (collapsed ? ' absolute w-0 opacity-0 !duration-100' : '') +
                  ' flex items-center font-alt text-base font-normal text-mainBlue ' +
                  (item.isActive ? ' !font-semibold ' : '')
                }
              >
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default memo(MenuItem);
