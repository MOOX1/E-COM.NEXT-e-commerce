import { TopForButtom } from '@/components/motion/animations';
import { Logs } from '../types';
import Div from '@/components/motion/Div';

export default function List(item: Logs) {
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
      <div
        className={
          'h-9 w-9 bg-white relative rounded-full border-2 ' + colorBorder
        }
      ></div>
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
}
