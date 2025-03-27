import { getMenuList } from '@/config/menu';
import type { IMenuList } from '@/types/menu-type';

const hasAccess = (item: IMenuList, path: string, roleId: number): boolean => {
  if ('href' in item) {
    return item.href === path && item.roles.includes(roleId);
  }
  return false;
};

const checkNestedAccess = (
  items: IMenuList[],
  path: string,
  roleId: number,
): boolean => {
  for (const item of items) {
    if (hasAccess(item, path, roleId)) {
      return true;
    }
    if ('items' in item && item.items && item.items.length > 0) {
      if (checkNestedAccess(item.items, path, roleId)) {
        return true;
      }
    }
  }
  return false;
};

export const routeHasAccess = (path: string, roleId: number): boolean => {
  const menuList = getMenuList();
  return checkNestedAccess(menuList, path, roleId);
};
