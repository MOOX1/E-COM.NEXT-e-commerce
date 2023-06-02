import { Tooltip } from 'antd';
import { usePathname } from 'next/navigation';
import { MenuItemProps } from '../types';
import Link from 'next/link';
import { memo } from 'react';

interface MenuItemsProps {
  colapssed: boolean;
  menuItems: MenuItemProps[];
}

function MenuItem({ colapssed, menuItems }: MenuItemsProps) {
  const router = usePathname();
  let positionSelected = '0.1rem';

  const data = () => {
    let newItemActive = 0;
    const newMenuItems: MenuItemProps[] = menuItems.map((item, index) => {
      if (item.pathname == router) newItemActive = index;
      return {
        ...item,
        isActive: item.pathname == router
      };
    });
    menuItems = newMenuItems;

    positionSelected = `${3.5 * newItemActive}rem`;
  };

  data();

  return (
    <div className="w-full flex flex-col items-center gap-2 relative  ">
      <div
        style={{ top: `${positionSelected}` }}
        className={
          (colapssed && ' ml-4') +
          ` h-12 w-full opacity-70 duration-500 absolute ml-20 bg-gradient-to-r from-mainBlue to-[rgba(217, 217, 217, 0) 79.7%)] rounded-l-lg `
        }
      ></div>
      {menuItems.map((item) => {
        return (
          <div key={item.label} className="w-full z-10">
            <Tooltip
              overlayClassName={' ' + (!colapssed && 'hidden')}
              title={item.label}
              color="#010217"
              placement="left"
            >
              <Link
                prefetch={false}
                className={
                  (colapssed && ' !pl-0 justify-center') +
                  ' peer cursor-pointer transition-colors duration-200 flex py-3 w-full gap-3 z-10 pl-16 ' +
                  (!item.isActive && 'hover:bg-mediaBlue/10')
                }
                href={item.pathname}
              >
                <div>{item.Icon}</div>

                <p
                  className={
                    (colapssed ? ' !duration-100 opacity-0 absolute w-0' : '') +
                    ' text-base font-normal text-mainBlue font-alt flex items-center ' +
                    (item.isActive ? ' !font-semibold ' : '')
                  }
                >
                  {item.label}
                </p>
              </Link>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}

export default memo(MenuItem);
