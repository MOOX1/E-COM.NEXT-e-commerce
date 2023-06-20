'use client';

import { TableProps } from '../types';
import Image from 'next/image';
import Div from '../../Div';
import { User } from 'lucide-react';

interface ItemsTableProps extends TableProps {
  onClickItem?: (item: TableProps['columns']) => void;
}

export default function ItemsTable({
  columns,
  data,
  onClickItem
}: ItemsTableProps) {
  const item1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 }
  };

  return (
    <>
      {data?.map((itemData) => (
        <Div
          handleClick={() => {
            if (onClickItem) return onClickItem(itemData);
          }}
          variants={item1}
          key={itemData?.id}
          exit={item1.hidden}
          className={
            'flex w-full cursor-pointer  items-center justify-between gap-2 border-b-[1px] border-mainBlue/10 px-5 py-2 transition-colors hover:bg-mediaBlue/10'
          }
        >
          {columns?.map((item) => {
            if (item == 'image') {
              return (
                <div key={item}>
                  {itemData[item] && (
                    <Image
                      src={itemData[item]}
                      width={36}
                      height={36}
                      className="rounded-full"
                      alt="image user"
                    />
                  )}
                  {!itemData[item] && (
                    <div
                      key={item}
                      className={
                        'relative flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white '
                      }
                    >
                      <User className="h-6 w-6 text-mainBlue" />
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div
                style={{ width: `${100 / columns.length}%` }}
                key={itemData[0]}
              >
                <p
                  className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-white`}
                >
                  {itemData[item]}
                </p>
              </div>
            );
          })}
        </Div>
      ))}
    </>
  );
}
