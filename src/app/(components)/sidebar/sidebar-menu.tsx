import { useState } from "react";
import { MenuList } from "@/menu-list";

import { useRouter } from "next/navigation";
import SidebarMenuAccordion from "./menu-accordion";
import MenuItem from "./menu-item";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/breadcrumb-slice";

const SidebarMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleItemClick = (label: string, href: string) => {
    dispatch(
      setBreadcrumbs([
        { label: "Explore", href: "/" },
        { label, href },
      ])
    );
    setActiveMenu(href);
    router.push(href);
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
