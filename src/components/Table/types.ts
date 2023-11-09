import { ReactNode } from 'react';

interface IColumn<T> {
  label: string;
  index: string;
  render?: (value: T) => ReactNode;
  width?: string;
}

export interface ITableProps<TData> {
  columns: IColumn<TData>[];
  data: TData[];
  onClick?: (data: TData) => void;
}
