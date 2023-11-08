'use client';

import React, { useState, memo } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <div className="flex">
      <div
        className={
          (!collapsed && 'w-72') + ' animate-all relative w-20 duration-500'
        }
      >
        <Sidebar
          collapsed={collapsed}
          buttonOpen={
            <div
              onClick={() => setCollapsed(!collapsed)}
              className="mt-2  flex w-full cursor-pointer items-center justify-center py-3  text-base hover:bg-mediaBlue/10"
            >
              {' '}
              {collapsed ? (
                <ChevronRight className="h-auto w-6 text-white" />
              ) : (
                <ChevronLeft className="h-auto w-6 text-white" />
              )}{' '}
            </div>
          }
        />
      </div>

      <div className=" h-screen w-full overflow-auto bg-bodyColor p-5 font-sans  text-white">
        {children}
      </div>
    </div>
  );
}

export default memo(Layout);
