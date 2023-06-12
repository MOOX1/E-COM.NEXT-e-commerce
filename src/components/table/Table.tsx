import React from 'react';
import Div from '../motion/Div';
import Image from 'next/image';
import { User } from 'lucide-react';
import { TableProps } from './types';
import { memo } from 'react';

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

const item1 = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -50 }
};

const Table = ({ columns: columns, data }: TableProps) => {
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
          {data?.map((itemData) => (
            <Div
              variants={item1}
              key={itemData?.id}
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
        </Div>
      </div>
    </div>
  );
};

export default memo(Table);
