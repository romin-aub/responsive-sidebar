"use client";

import Image from "next/image";
import SidebarMenu from "./sidebar/sidebar-menu";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className=" p-2 flex items-center justify-start gap-4">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-bold text-2xl">AWWWARDS</span>
      </div>
      <div className="h-[50rem] overflow-auto my-3">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
