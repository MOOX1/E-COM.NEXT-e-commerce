import { ReactNode } from 'react';

export interface ISubMenuItemProps {
  label: string;
  pathname: string;
  isActive: boolean;
}

export interface IMenuItemProps {
  label: string;
  Icon: ReactNode;
  pathname: string;
  isActive: boolean;
  subMenu?: ISubMenuItemProps[];
}
