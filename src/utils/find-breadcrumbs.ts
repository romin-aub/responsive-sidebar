import type { IMenuList } from '@/types/menu-type';

const findBreadcrumbs = (menus: IMenuList[], href: string): IMenuList[] => {
  for (const menu of menus) {
    if ('href' in menu && menu.href === href) {
      return [menu];
    }
    if ('items' in menu && menu.items) {
      const found = findBreadcrumbs(menu.items, href);
      if (found.length) {
        return [menu, ...found];
      }
    }
  }
  return [];
};

export default findBreadcrumbs;
