'use client';

import { getMenuList } from '@/config/menu';
import type { RootState } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuAccordion } from './menu-accordion';
import { MenuItem } from './menu-item';

export const SidebarMenu: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const roleId = useSelector((state: RootState) => state.auth.role);
  const MenuList = getMenuList();

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
      {MenuList.filter((item) => item.roles.includes(roleId)).map((item) =>
        'items' in item ? (
          <MenuAccordion
            key={item.label}
            sidebarHeader={item}
            activeMenu={activeMenu || ''}
            onClick={handleItemClick}
          />
        ) : (
          <MenuItem
            key={item.label}
            item={item}
            isAccordionItem={false}
            isActive={activeMenu === item.href}
            onClick={handleItemClick}
          />
        ),
      )}
    </div>
  );
};
