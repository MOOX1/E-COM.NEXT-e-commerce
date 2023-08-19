'use client';

import { ITableProps } from '../types';

import Div from '../../atoms/Div';
import ImageUser from './ImageUser';
import ImageProducts from './ImageProducts';
import Ativo from './Ativo';

interface IItemsTableProps extends ITableProps {
  onClickItem?: (item: ITableProps['columns']) => void;
}

export default function ItemsTable({
  columns,
  data,
  onClickItem,
}: IItemsTableProps) {
  const item1 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  return data?.map((itemData, index) => (
    <Div
      key={index}
      exit={item1.hidden}
      handleClick={() => {
        if (onClickItem) return onClickItem(itemData);
      }}
      variants={item1}
      className={
        'flex w-full cursor-pointer  items-center justify-between gap-2 border-b-[1px] border-mainBlue/10 px-5 py-2 transition-colors hover:bg-mediaBlue/10'
      }
    >
      {columns?.map(item => {
        if (item == 'image') {
          return (
            <ImageUser
              key={index}
              index={index}
              item={item}
              image={itemData[item]}
            />
          );
        }

        if (item == 'imageProducts')
          return <ImageProducts index={index} item={item} image={itemData[item]} />;

        if (item == 'Ativo') return <Ativo active={itemData[item]} />;

        return (
          <div
            className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
            key={index}
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
  ));
}
