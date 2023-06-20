import { Metadata } from 'next';
import React, { Suspense } from 'react';

import Profile from '../../components/ProfileAccount';
import LogChanges from '../../components/logChanges';
import Div from '@/components/Div';
import Load from '@/components/Load';
import {
  TopForBottom,
  RightForLeft,
  BottomForTop
} from '@/components/Div/animations';

import Collaborators from '@/components/collaborators';
import AddCollaborators from '@/components/collaborators/AddCollaborators';
import LevelAccess from '@/components/collaborators/LevelAccess';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

const Colaboradores = async () => {
  return (
    <div className="flex h-full w-full gap-3 overflow-hidden">
      <div className="flex h-full w-2/3 flex-col gap-3 overflow-hidden">
        <Div
          initial={TopForBottom.initial}
          animate={TopForBottom.animate}
          transition={TopForBottom.transition}
          className="flex h-1/2 w-full flex-row-reverse gap-3 rounded-lg"
        >
          <div className="relative h-full w-2/4 rounded-lg bg-strongBlue shadow-main">
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
          className="h-1/6 w-full rounded-lg bg-strongBlue  shadow-main"
        >
          <Suspense fallback={<Load />}>
            <AddCollaborators />
          </Suspense>
        </Div>
        <Div
          animate={BottomForTop.animate}
          initial={BottomForTop.initial}
          transition={{ ...BottomForTop.transition, delay: 0.1 }}
          className="h-2/5 w-full rounded-lg bg-strongBlue  shadow-main"
        >
          <LevelAccess />
        </Div>
      </div>
      <Div
        initial={RightForLeft.initial}
        animate={RightForLeft.animate}
        transition={RightForLeft.transition}
        className="h-full w-4/12 rounded-lg bg-strongBlue   shadow-main "
      >
        <Suspense fallback={<Load />}>
          <Collaborators />
        </Suspense>
      </Div>
    </div>
  );
};

export default Colaboradores;
