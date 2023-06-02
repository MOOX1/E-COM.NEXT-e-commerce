import { ReactNode } from 'react';
import { LayoutPanelLeft, BarChart4, ShoppingBag, Users } from 'lucide-react';
import Image from 'next/image';
import logoInline from '../../assets/logoInline.svg';
import ButtonSignOut from '../buttonSignOut/buttonSignOut';
import Profile from '../profile/Profile';
import { MenuItemProps } from './types';
import MenuItem from './menuItem/MenuItem';
import { memo } from 'react';

interface SidebarProps {
  buttonOpen: ReactNode;
  colapssed: boolean;
}

const menuItems: MenuItemProps[] = [
  {
    label: 'Dashboard',
    Icon: <LayoutPanelLeft className="text-white w-7 h-auto" />,
    pathname: '/',
    isActive: true
  },
  {
    label: 'Overview',
    Icon: <BarChart4 className="text-white w-7 h-auto" />,
    pathname: '/overview',
    isActive: false
  },
  {
    label: 'Produtos',
    Icon: <ShoppingBag className="text-white w-7 h-auto" />,
    pathname: '/produtos',
    isActive: false
  },
  {
    label: 'Colaboradores',
    Icon: <Users className="text-white w-7 h-auto" />,
    pathname: '/colaboradores',
    isActive: false
  }
];

function Sidebar({ buttonOpen, colapssed }: SidebarProps) {
  return (
    <div className="bg-strongBlue w-full h-screen py-14 overflow-hidden">
      <Profile colapssed={colapssed} />
      <MenuItem colapssed={colapssed} menuItems={menuItems} />
      <div className="flex justify-center">{buttonOpen}</div>

      <div
        className={
          (colapssed && 'bottom-10') +
          ' absolute bottom-0 flex duration-1000 flex-col items-center justify-center w-full '
        }
      >
        <ButtonSignOut />

        {!colapssed && (
          <Image
            src={logoInline}
            height={60}
            width={193}
            alt=""
            className="duration-500"
          />
        )}
      </div>
    </div>
  );
}

export default memo(Sidebar);
