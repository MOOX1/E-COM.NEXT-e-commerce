'use client';

import React, { useState, memo } from 'react';
import { Layout as LayoutAntd, Button } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../sidebar';

const { Content, Sider } = LayoutAntd;

function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <LayoutAntd>
      <Sider
        width={280}
        className="sticky bottom-0 left-0 top-0 h-screen overflow-hidden duration-500"
        trigger={null}
        collapsed={collapsed}
      >
        <Sidebar
          colapssed={collapsed}
          buttonOpen={
            <Button
              type="text"
              icon={
                collapsed ? (
                  <ChevronRight className="h-auto w-6 text-white" />
                ) : (
                  <ChevronLeft className="h-auto w-6 text-white" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className="h-16 w-16 text-base hover:bg-mediaBlue/10"
            />
          }
        />
      </Sider>
      <LayoutAntd>
        <Content className=" h-screen overflow-auto bg-bodyColor p-5 font-sans text-black">
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
}

export default memo(Layout);
