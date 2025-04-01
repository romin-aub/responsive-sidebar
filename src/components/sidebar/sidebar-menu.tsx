'use client';

import { getMenuList } from '@/config/menu';
import type { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuAccordion } from './menu-accordion';
import { MenuItem } from './menu-item';

export const SidebarMenu: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const roleId = useSelector((state: RootState) => state.auth.role);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const handleItemClick = (href: string) => {
    setActiveMenu(href);
    navigate(href);
    closeSheet?.();
  };

  return (
    <div>
      {getMenuList()
        .filter((item) => item.roles.includes(roleId))
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
