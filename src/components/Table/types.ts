export interface ITableProps {
  columns: string[];
  data: any[];
  onClick?: (data: any[]) => void;
}
