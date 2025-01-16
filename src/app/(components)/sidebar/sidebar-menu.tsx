"use client";

import { useState } from "react";
import { MenuList } from "@/menu-list";

import { useRouter } from "next/navigation";
import { IMenuList, IMenuListHeader } from "@/types";
import SidebarMenuAccordion from "./menu-accordion";
import MenuItem from "./menu-item";

const SidebarMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  const handleItemClick = (href: string) => {
    setActiveMenu(href);
    router.push(href);
  };

  const isMenuListHeader = (item: IMenuList): item is IMenuListHeader => {
    return (item as IMenuListHeader).items !== undefined;
  };
  return (
    <div>
      {MenuList.map((item) =>
        isMenuListHeader(item) ? (
          <SidebarMenuAccordion
            key={item.label}
            sidebarHeader={item}
            activeMenu={activeMenu || ""}
            onClick={handleItemClick}
          />
        ) : (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            isActive={activeMenu === item.href}
            onClick={handleItemClick}
          />
        )
      )}
    </div>
  );
};

export default SidebarMenu;
