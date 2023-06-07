import { Metadata } from 'next';
import Profile from '../../components/profileAccount/Profile';
import { LogChanges } from '../../components/logChanges/LogChanges';
import Table from '@/components/table/Table';
import Div from '@/components/motion/Div';
import React, { Suspense } from 'react';
import {
  TopForButtom,
  RigthForLeft,
  ButtomForTop
} from '@/components/motion/animations';
import Loading from '../loading';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

export default async function Colaboradores() {
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
        <Table />
      </Div>
    </div>
  );
}
