'use client';

import { getMenuList } from '@/config/menu';
import { getRoleId } from '@/utils/get-role-id';
import { useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MenuAccordion } from './menu-accordion';
import { MenuItem } from './menu-item';

export const SidebarMenu: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { user } = useUser();
  const roleId = getRoleId(user?.unsafeMetadata.role as string);

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
      {getMenuList()
        .filter((item) => item.roles.includes(roleId as number))
        .map((item) =>
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
