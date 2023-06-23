import { ILogs } from '../types';
import Div from '@/components/atoms/Div';
import { memo } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const List = (item: ILogs) => {
  const colorBorder = {
    add: 'border-green-400',
    edit: 'border-yellow-400',
    delete: 'border-red-400'
  }[item.type];

  const item1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 }
  };

  return (
    <Div
      variants={item1}
      key={item.autor.id}
      className="flex cursor-pointer  items-center justify-between gap-2 border-b-[1px] border-mainBlue/10 px-5 py-2 transition-colors hover:bg-mediaBlue/10"
    >
      {item.autor.image && (
        <Image src={item.autor.image} width={36} height={36} alt="image user" />
      )}
      {!item.autor.image && (
        <div
          className={
            'relative flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white ' +
            colorBorder
          }
        >
          <User className="h-6 w-6 text-mainBlue" />
        </div>
      )}
      <div className="w-3/5">
        <p className="text-mainBlue/80"> {item.titulo} </p>
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap text-sm text-white">
          {item.description}
        </p>
      </div>
      <p className="text-right text-xs text-white">
        {' '}
        {new Date(item.date).toLocaleDateString(undefined, {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        })}
      </p>
    </Div>
  );
};

export default memo(List);
