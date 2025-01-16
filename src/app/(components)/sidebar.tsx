"use client";

import Image from "next/image";
import SidebarMenu from "./sidebar/sidebar-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push("/profile");
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      <div className="p-2 flex items-center justify-start gap-4">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-bold text-2xl">AWWWARDS</span>
      </div>

      {/* Sidebar Menu Section */}
      <div className="flex-1 overflow-auto my-3">
        <SidebarMenu />
      </div>

      {/* Profile Section */}
      <div
        className="p-2 flex items-center justify-center gap-4 border-2 cursor-pointer"
        onClick={handleProfileClick}
      >
        <FontAwesomeIcon icon={faUser} />
        <span>My Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;
