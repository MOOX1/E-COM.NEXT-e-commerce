'use client';

import { ITableProps } from '../types';

import Div from '../../atoms/Div';

interface IItemsTableProps<T> extends ITableProps<T> {
  onClickItem?: (item: T) => void;
}

export default function ItemsTable<T extends object>({
  columns,
  data,
  onClickItem,
}: IItemsTableProps<T>) {
  const item1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  return data?.map((itemData, index) => (
    <Div
      key={index + data.length}
      keyValue={index + data.length}
      exit={item1.hidden}
      handleClick={() => {
        if (onClickItem) return onClickItem(itemData);
      }}
      variants={item1}
      className={
        'flex w-full cursor-pointer  items-center justify-between gap-2 border-b-[1px] border-mainBlue/10 px-5 py-2 transition-colors hover:bg-mediaBlue/10'
      }
    >
      {columns?.map((item, index) => {
        return (
          <div
            className={
              (item.width ? `w-[${item.width}] ` : 'flex-1 ') +
              'overflow-hidden text-ellipsis whitespace-nowrap'
            }
            key={index + data.length * 2}
          >
            {item.render && item.render(itemData)}
            {!item.render && (
              <p
                className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-white`}
              >
                {String(itemData[item.index as keyof T] ?? '')}
              </p>
            )}
          </div>
        );
      })}
    </Div>
  ));
}
