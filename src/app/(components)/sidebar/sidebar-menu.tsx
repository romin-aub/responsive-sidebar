"use client";

import { useEffect, useState } from "react";
import { MenuList } from "@/menu-list";

import { usePathname, useRouter } from "next/navigation";
import SidebarMenuAccordion from "./menu-accordion";
import MenuItem from "./menu-item";

const SidebarMenu: React.FC<{ closeSheet?: () => void }> = ({ closeSheet }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  const handleItemClick = (href: string) => {
    setActiveMenu(href);
    router.push(href);
    closeSheet?.();
  };

  return (
    <div>
      {MenuList.map((item) =>
        "items" in item ? (
          <SidebarMenuAccordion
            key={item.label}
            sidebarHeader={item}
            activeMenu={activeMenu || ""}
            onClick={handleItemClick}
          />
        ) : (
          <MenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.href}
            onClick={handleItemClick}
          />
        )
      )}
    </div>
  );
};

export default SidebarMenu;
