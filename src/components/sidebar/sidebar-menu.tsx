'use client';

import { MenuList } from '@/config/menu';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuAccordion } from './menu-accordion';
import { MenuItem } from './menu-item';

export const SidebarMenu: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
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
