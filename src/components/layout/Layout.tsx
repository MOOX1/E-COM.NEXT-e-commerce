'use client';

import React, { useState, memo } from 'react';
import { Layout as LayoutAntd, Button } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../sidebar/Sidebar';

const { Content, Sider } = LayoutAntd;

function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <LayoutAntd>
      <Sider
        width={280}
        className="sticky left-0 h-screen top-0 bottom-0 overflow-hidden duration-500"
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
                  <ChevronRight className="text-white w-6 h-auto" />
                ) : (
                  <ChevronLeft className="text-white w-6 h-auto" />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-mediaBlue/10 h-16 w-16 text-base"
            />
          }
        />
      </Sider>
      <LayoutAntd>
        <Content className=" bg-content text-black font-sans p-5 h-screen overflow-auto">
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
}

export default memo(Layout);
