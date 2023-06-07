import { User } from 'next-auth';
import React, { ReactNode } from 'react';

interface Data {
  title?: string;
  value?: string | ReactNode;
  key: string;
}

interface TableProps {
  colums: string[];
  data: any[];
}

const tableFake: TableProps = {
  colums: ['image', 'name', 'acesso'],
  data: [
    {
      image: (
        <p className={'h-9 w-9 bg-white relative rounded-full border-2 '}></p>
      ),
      name: 'Vitor Meneses',
      acesso: 'admin super'
    }
  ]
};

export default function Table() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-white flex justify-between px-5 w-full font-alt border-b-[1px] border-mainBlue/10">
          {tableFake.colums.map((item) => {
            return (
              <div key={item}>
                <p className=" text-mainBlue/80 py-2  text-center">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="flex w-full">
          {tableFake.data.map((itemData, index) => (
            <div
              key={itemData?.id}
              className={
                'py-2 flex w-full  gap-2 items-center justify-between px-5 cursor-pointer border-b-[1px] transition-colors border-mainBlue/10 hover:bg-mediaBlue/10'
              }
            >
              {tableFake.colums.map((item, index) => {
                if (item == 'image') {
                  return <div key={itemData[index]}>{itemData[item]}</div>;
                }
                return (
                  <div key={itemData[0]}>
                    <p className={'text-white'}>{itemData[item]}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
