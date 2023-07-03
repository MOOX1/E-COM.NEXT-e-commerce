import { ReactNode } from 'react';
import { Users, Box } from 'lucide-react';
import Image from 'next/image';
import logoInline from '../../assets/logoInline.svg';
import ButtonSignOut from '../ButtonSignOut';
import Profile from '../Profile';
import { IMenuItemProps } from './types';
import MenuItem from './MenuItem';
import { memo } from 'react';

interface ISidebarProps {
  buttonOpen: ReactNode;
  collapsed: boolean;
}

const menuItems: IMenuItemProps[] = [
  {
    label: 'Produtos',
    Icon: <Box className="h-auto w-6 text-white" />,
    pathname: '/produtos',
    isActive: true,
  },
  {
    label: 'Colaboradores',
    Icon: <Users className="h-auto w-6 text-white" />,
    pathname: '/colaboradores',
    isActive: false,
  },
];

function Sidebar({ buttonOpen, collapsed }: ISidebarProps) {
  return (
    <nav className="h-screen w-full overflow-hidden bg-strongBlue py-14">
      <Profile collapsed={collapsed} />
      <MenuItem collapsed={collapsed} menuItems={menuItems} />
      <div className="flex justify-center">{buttonOpen}</div>

      <div
        className={
          (collapsed && 'bottom-10') +
          ' absolute bottom-0 flex w-full flex-col items-center justify-center duration-1000 '
        }
      >
        <ButtonSignOut />

        {!collapsed && (
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
