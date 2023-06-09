import { Metadata } from 'next';
import Profile from '../../components/profileAccount/Profile';
import LogChanges from '../../components/logChanges/LogChanges';
import Table from '@/components/table/Table';
import Div from '@/components/motion/Div';
import React, { Suspense } from 'react';
import { Input } from 'antd';
import {
  TopForButtom,
  RigthForLeft,
  ButtomForTop
} from '@/components/motion/animations';
import Loading from '../loading';
import { Fetch } from '@/services/fetch';
import { TableProps } from '@/components/table/types';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

const Colaboradores = async () => {
  let admins: TableProps = { colums: [], data: [] };
  try {
    const response = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 60
      }
    });

    admins = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex gap-3 w-full h-full overflow-hidden">
      <div className="w-2/3 h-full flex flex-col gap-3 overflow-hidden">
        <Div
          initial={TopForButtom.initial}
          animate={TopForButtom.animate}
          transition={TopForButtom.transition}
          className="w-full rounded-lg h-1/2 flex flex-row-reverse gap-3"
        >
          <Suspense
            fallback={
              <div className="w-2/4 h-full relative flex justify-center items-center bg-strongBlue rounded-lg shadow-main">
                <Loading />
              </div>
            }
          >
            <LogChanges />
          </Suspense>
          <Suspense
            fallback={
              <div className="flex w-full h-full items-center justify-center">
                <Loading />
              </div>
            }
          >
            <Profile />
          </Suspense>
        </Div>
        <Div
          animate={ButtomForTop.animate}
          initial={ButtomForTop.initial}
          transition={ButtomForTop.transition}
          className="w-full bg-strongBlue rounded-lg h-1/6  shadow-main"
        ></Div>
        <Div
          animate={ButtomForTop.animate}
          initial={ButtomForTop.initial}
          transition={{ ...ButtomForTop.transition, delay: 0.1 }}
          className="w-full bg-strongBlue rounded-lg h-2/5  shadow-main"
        ></Div>
      </div>
      <Div
        initial={RigthForLeft.initial}
        animate={RigthForLeft.animate}
        transition={RigthForLeft.transition}
        className="w-4/12 h-full bg-strongBlue rounded-lg   shadow-main "
      >
        <Suspense
          fallback={
            <div className="flex w-full h-full items-center justify-center">
              <Loading />
            </div>
          }
        >
          <div className="w-full flex justify-center items-center p-2 border-mainBlue/10 border-b">
            <input
              type="text"
              className="bg-mainBlue/10 w-3/4 text-sm border-mainBlue/50 rounded-3xl border focus-visible:outline-none text-white px-2 py-1"
            />
          </div>
          <Table
            colums={admins && admins.colums}
            data={admins && admins?.data}
          />
        </Suspense>
      </Div>
    </div>
  );
};

export default Colaboradores;
