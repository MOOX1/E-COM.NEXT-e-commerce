import { ReactNode } from 'react';

export interface SubMenuItemProps {
  label: string;
  pathname: string;
  isActive: boolean;
}

export interface MenuItemProps {
  label: string;
  Icon: ReactNode;
  pathname: string;
  isActive: boolean;
  subMenu?: SubMenuItemProps[];
}
