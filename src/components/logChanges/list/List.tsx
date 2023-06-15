import { Logs } from '../types';
import Div from '@/components/motion/Div';
import { memo } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const List = (item: Logs) => {
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
      className="py-2 flex  gap-2 items-center justify-between px-5 cursor-pointer border-b-[1px] transition-colors border-mainBlue/10 hover:bg-mediaBlue/10"
    >
      {item.autor.image && (
        <Image src={item.autor.image} width={36} height={36} alt="image user" />
      )}
      {!item.autor.image && (
        <div
          className={
            'h-9 w-9 bg-white relative rounded-full border-2 flex justify-center items-center ' +
            colorBorder
          }
        >
          <User className="w-6 h-6 text-mainBlue" />
        </div>
      )}
      <div className="w-3/5">
        <p className="text-mainBlue/80"> {item.titulo} </p>
        <p className=" whitespace-nowrap overflow-hidden text-sm text-white text-ellipsis">
          {item.description}
        </p>
      </div>
      <p className="text-white text-right text-xs">
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
