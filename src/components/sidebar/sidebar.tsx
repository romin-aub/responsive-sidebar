'use client';

import { Logout } from './logout';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';
import { SidebarProfile } from './sidebar-profile';

export const Sidebar: React.FC = () => {
  return (
    <div className='h-full flex flex-col'>
      <SidebarHeader />
      <div className='flex-1 overflow-auto scrollbar-none my-3'>
        <SidebarMenu />
      </div>
      <div className='flex gap-2'>
        <SidebarProfile />
        <Logout />
      </div>
    </div>
  );
};
