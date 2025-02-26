import { getMenuList } from '@/config/menu';
import type { IMenuList } from '@/types/menu-type';
const hasAccess = (item: IMenuList, path: string, roleId: number): boolean => {
  if ('href' in item) {
    return item.href === path && item.roles.includes(roleId);
  }
  return false;
};

export const routeHasAccess = (path: string, roleId: number): boolean => {
  const menuList = getMenuList();
  return menuList.some((menu) => {
    if (hasAccess(menu, path, roleId)) return true;
    if ('items' in menu) {
      return menu.items?.some((item) => hasAccess(item, path, roleId));
    }
    return false;
  });
};
