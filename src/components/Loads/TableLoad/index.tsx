import Skeleton from '@/components/atoms/Skeleton';
import { ReactNode } from 'react';

interface ITableLoad {
  quantityColumns: number;
  quantityRow: number;
  header?: ReactNode;
  circle?: boolean;
  indexCircle?: number;
}

export default function TableLoad({
  quantityColumns,
  quantityRow,
  header,
  circle = false,
  indexCircle,
}: ITableLoad) {
  return (
    <>
      {header}
      <Skeleton
        height="2rem"
        quantityRow={1}
        width="90%"
        borderButton
        quantityColumn={quantityColumns}
      />

      <Skeleton
        quantityRow={quantityRow}
        height="2rem"
        width="90%"
        borderButton
        circle={circle}
        indexCircle={indexCircle}
        quantityColumn={quantityColumns}
      />
    </>
  );
}
