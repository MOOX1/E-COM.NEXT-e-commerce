'use client';

import React, { useState } from 'react';
import { Layout as LayoutAntd, Button } from 'antd';
import { DoorOpenIcon } from 'lucide-react';

const { Content, Sider } = LayoutAntd;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <LayoutAntd>
      <Sider
        className="sticky left-0 h-screen top-0 bottom-0 overflow-hidden"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="h-full w-full bg-strongBlue sticky left-0">
          {' '}
          <div className="bg-strongBlue w-full h-full">
            <Button
              type="text"
              icon={<DoorOpenIcon className="text-white" />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
            />
          </div>
        </div>
      </Sider>
      <LayoutAntd>
        <Content className=" bg-bodyColor font-sans p-5 h-screen overflow-auto">
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
}
