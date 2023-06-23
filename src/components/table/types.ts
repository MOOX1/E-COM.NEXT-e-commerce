import { IAdminInDataBase } from '@/types/admins';

export interface ITableProps {
  columns: string[];
  data: any[];
  onClick?: (data: IAdminInDataBase) => void;
}
