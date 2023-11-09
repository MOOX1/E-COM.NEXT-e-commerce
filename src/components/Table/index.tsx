'use client';

import React from 'react';
import Div from '../atoms/Div';
import { ITableProps } from './types';

import ItemsTable from './ItemsTable';

const listAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
};

const Table = <T extends object>({ columns, data, onClick }: ITableProps<T>) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="sticky top-0 z-10 flex w-full   border-b-[1px] border-mainBlue/10 bg-strongBlue px-5 font-alt text-white">
          {columns?.map(item => {
            return (
              <div
                className={item.width ? `w-[${item.width}] ` : 'flex-1'}
                key={item.index + item.label}
              >
                <p className={` w-full py-2 text-center text-mainBlue/80 `}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <Div initial="hidden" animate="visible" variants={listAnimation}>
          <ItemsTable<T> onClickItem={onClick} columns={columns} data={data} />
        </Div>
      </div>
    </div>
  );
};

export default Table;
