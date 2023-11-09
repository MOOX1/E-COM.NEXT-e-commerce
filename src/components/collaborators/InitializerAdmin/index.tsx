'use client';

import { useRef } from 'react';

import { useAdmins } from '@/hooks/admins';
import { IAdminInDataBase } from '@/types/admins';

interface IInitializerAdminsProps {
  admins: IAdminInDataBase[];
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
