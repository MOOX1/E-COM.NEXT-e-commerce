import { TableProps } from './types';
import Image from 'next/image';
import Div from '../motion/Div';
import { User } from 'lucide-react';

export default function ItemsTable({ columns, data }: TableProps) {
  const item1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 }
  };

  return (
    <>
      {data?.map((itemData) => (
        <Div
          variants={item1}
          key={itemData?.id}
          exit={item1.hidden}
          className={
            'py-2 flex w-full  gap-2 items-center justify-between px-5 cursor-pointer border-b-[1px] transition-colors border-mainBlue/10 hover:bg-mediaBlue/10'
          }
        >
          {columns?.map((item) => {
            if (item == 'image') {
              return (
                <>
                  {itemData[item] && (
                    <Image
                      src={itemData[item]}
                      width={36}
                      height={36}
                      alt="image user"
                    />
                  )}
                  {!itemData[item] && (
                    <div
                      className={
                        'h-9 w-9 bg-white relative rounded-full border-2 flex justify-center items-center '
                      }
                    >
                      <User className="w-6 h-6 text-mainBlue" />
                    </div>
                  )}
                </>
              );
            }
            return (
              <div
                style={{ width: `${100 / columns.length}%` }}
                key={itemData[0]}
              >
                <p
                  className={`text-white overflow-hidden whitespace-nowrap text-center w-full text-ellipsis`}
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
