'use client';

import React from 'react';
import Div from '../motion/Div';
import { TableProps } from './types';
import { memo } from 'react';
import ItemsTable from './itemsTable';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-white flex justify-between px-5 w-full font-alt border-b-[1px] border-mainBlue/10">
          {columns?.map((item) => {
            if (item == 'image') {
              return (
                <div key={item}>
                  <p className={` w-full text-mainBlue/80 py-2 text-center `}>
                    Usuário
                  </p>
                </div>
              );
            }
            return (
              <div style={{ width: `${100 / columns.length}%` }} key={item}>
                <p className={` w-full text-mainBlue/80 py-2 text-center `}>
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <Div initial="hidden" animate="visible" variants={list}>
          <ItemsTable columns={columns} data={data} />
        </Div>
      </div>
    </div>
  );
};

export default memo(Table);
