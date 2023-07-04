import { ITableProps } from '@/components/Table/types';
import { IAdminInDataBase } from '@/types/admins';
import { create } from 'zustand';

interface IActionProps {
  addAdmin: (admin: ITableProps) => void;
}

interface IAdminProps {
  state: {
    admins: ITableProps;
  };
  actions: IActionProps;
}

export const useAdmins = create<IAdminProps>(set => ({
  state: {
    admins: { columns: [], data: [] },
  },
  actions: {
    addAdmin: admin =>
      set(state => ({
        state: {
          admins: {
            columns: [...state.state.admins.columns, admin.columns] as string[],
            data: [...state.state.admins.data, admin.data],
          },
        },
      })),
  },
}));
