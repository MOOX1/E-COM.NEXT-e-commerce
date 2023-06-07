import { User } from 'next-auth';
type LogsType = 'delete' | 'edit' | 'add';

export interface Logs {
  type: LogsType;
  description: string;
  autor: User;
  titulo: string;
  date: Date;
}
