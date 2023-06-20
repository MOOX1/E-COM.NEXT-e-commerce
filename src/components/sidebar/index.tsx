import { ReactNode } from 'react';
import { LayoutPanelLeft, BarChart4, ShoppingBag, Users } from 'lucide-react';
import Image from 'next/image';
import logoInline from '../../assets/logoInline.svg';
import ButtonSignOut from '../ButtonSignOut';
import Profile from '../Profile';
import { MenuItemProps } from './types';
import MenuItem from './MenuItem';
import { memo } from 'react';

interface SidebarProps {
  buttonOpen: ReactNode;
  colapssed: boolean;
}

const menuItems: MenuItemProps[] = [
  {
    label: 'Dashboard',
    Icon: <LayoutPanelLeft className="h-auto w-6 text-white" />,
    pathname: '/',
    isActive: true
  },
  {
    label: 'Overview',
    Icon: <BarChart4 className="h-auto w-6 text-white" />,
    pathname: '/overview',
    isActive: false
  },
  {
    label: 'Produtos',
    Icon: <ShoppingBag className="h-auto w-6 text-white" />,
    pathname: '/produtos',
    isActive: false
  },
  {
    label: 'Colaboradores',
    Icon: <Users className="h-auto w-6 text-white" />,
    pathname: '/colaboradores',
    isActive: false
  }
];

function Sidebar({ buttonOpen, colapssed }: SidebarProps) {
  return (
    <nav className="h-screen w-full overflow-hidden bg-strongBlue py-14">
      <Profile colapssed={colapssed} />
      <MenuItem colapssed={colapssed} menuItems={menuItems} />
      <div className="flex justify-center">{buttonOpen}</div>

      <div
        className={
          (colapssed && 'bottom-10') +
          ' absolute bottom-0 flex w-full flex-col items-center justify-center duration-1000 '
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
    </nav>
  );
}

export default memo(Sidebar);
