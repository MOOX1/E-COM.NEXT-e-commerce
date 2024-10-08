'use client';

import React from 'react';
import Div from '../atoms/Div';
import { ITableProps } from './types';
import { memo } from 'react';
import ItemsTable from './ItemsTable';

const list = {
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

const Table = ({ columns, data, onClick }: ITableProps) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex w-full justify-between border-b-[1px] border-mainBlue/10 px-5 font-alt text-white">
          {columns?.map(item => {
            if (item == 'image') {
              return (
                <div key={item}>
                  <p className={` w-full py-2 text-center text-mainBlue/80 `}>
                    Usuário
                  </p>
                </div>
              );
            }

            if (item == 'imageProducts') {
              return (
                <div key={item}>
                  <p className={` w-full py-2 text-center text-mainBlue/80 `}>
                    Image
                  </p>
                </div>
              );
            }
            return (
              <div style={{ width: `${100 / columns.length}%` }} key={item}>
                <p className={` w-full py-2 text-center text-mainBlue/80 `}>
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <Div initial="hidden" animate="visible" variants={list}>
          <ItemsTable
            onClickItem={item => onClick && onClick(item)}
            columns={columns}
            data={data}
          />
        </Div>
      </div>
    </div>
  );
};

export default memo(Table);
