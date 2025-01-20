"use client";

import SidebarMenu from "./sidebar/sidebar-menu";
import SidebarHeader from "./sidebar/sidebar-header";
import SidebarProfile from "./sidebar/sidebar-profile";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <SidebarHeader />
      <div className="flex-1 overflow-auto my-3">
        <SidebarMenu />
      </div>
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
