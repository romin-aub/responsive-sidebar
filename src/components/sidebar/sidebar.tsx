"use client";

import SidebarHeader from "./sidebar-header";
import SidebarMenu from "./sidebar-menu";
import SidebarProfile from "./sidebar-profile";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <SidebarHeader />
      <div className="flex-1 overflow-auto scrollbar-none my-3">
        <SidebarMenu />
      </div>
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
