import { ITableProps } from '@/components/Table/types';
import { IAdminInDataBase } from '@/types/admins';
import { create } from 'zustand';

interface IActionProps {
  addAdmin: (admin: IAdminInDataBase) => void;
}

interface IAdminProps {
  state: {
    admins: IAdminInDataBase[];
  };
  actions: IActionProps;
}

export const useAdmins = create<IAdminProps>(set => ({
  state: {
    admins: [],
  },
  actions: {
    addAdmin: admin => {
      set(state => ({
        state: {
          admins: [...state.state.admins, admin],
        },
      }));
    },
  },
}));
