'use client';

import { useRef } from 'react';

import { useAdmins } from '@/hooks/admins';
import { ITableProps } from '@/components/Table/types';

interface IInitializerAdminsProps {
  admins: ITableProps;
}

const InitializerAdmins = ({ admins }: IInitializerAdminsProps) => {
  const initializer = useRef(false);

  if (!initializer.current) {
    useAdmins.setState({ state: { admins: admins } });
    initializer.current = true;
  }

  return null;
};

export default InitializerAdmins;
