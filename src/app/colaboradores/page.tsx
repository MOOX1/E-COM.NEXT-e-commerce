import { Metadata } from 'next';
import React, { Suspense } from 'react';

import Profile from '../../components/profileAccount/Profile';
import LogChanges from '../../components/logChanges/LogChanges';
import Div from '@/components/motion/Div';
import Load from '@/components/load/Load';
import {
  TopForBottom,
  RightForLeft,
  BottomForTop
} from '@/components/motion/animations';

import Collaborators from '@/components/collaborators/Collaborators';
import AddCollaborators from '@/components/collaborators/addCollaborators/AddCollaborators';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

const Colaboradores = async () => {
  return (
    <div className="flex gap-3 w-full h-full overflow-hidden">
      <div className="w-2/3 h-full flex flex-col gap-3 overflow-hidden">
        <Div
          initial={TopForBottom.initial}
          animate={TopForBottom.animate}
          transition={TopForBottom.transition}
          className="w-full rounded-lg h-1/2 flex flex-row-reverse gap-3"
        >
          <div className="w-2/4 h-full relative bg-strongBlue rounded-lg shadow-main">
            <Suspense fallback={<Load />}>
              <LogChanges />
            </Suspense>
          </div>

          <Suspense fallback={<Load />}>
            <Profile />
          </Suspense>
        </Div>
        <Div
          animate={BottomForTop.animate}
          initial={BottomForTop.initial}
          transition={BottomForTop.transition}
          className="w-full bg-strongBlue rounded-lg h-1/6  shadow-main"
        >
          <Suspense fallback={<Load />}>
            <AddCollaborators />
          </Suspense>
        </Div>
        <Div
          animate={BottomForTop.animate}
          initial={BottomForTop.initial}
          transition={{ ...BottomForTop.transition, delay: 0.1 }}
          className="w-full bg-strongBlue rounded-lg h-2/5  shadow-main"
        ></Div>
      </div>
      <Div
        initial={RightForLeft.initial}
        animate={RightForLeft.animate}
        transition={RightForLeft.transition}
        className="w-4/12 h-full bg-strongBlue rounded-lg   shadow-main "
      >
        <Suspense fallback={<Load />}>
          <Collaborators />
        </Suspense>
      </Div>
    </div>
  );
};

export default Colaboradores;
