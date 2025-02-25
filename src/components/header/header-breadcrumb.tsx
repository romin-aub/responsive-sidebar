import { getMenuList } from '@/config/menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/core/navigation/breadcrumb';
import { findBreadcrumbs } from '@/utils/find-breadcrumbs';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

export const HeaderBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const MenuList = getMenuList();

  const breadcrumbs = useMemo(() => {
    const homeCrumb = { label: MenuList[0].label, href: '/' };
    if (pathname === '/') {
      return [homeCrumb];
    }

    const pathBreadcrumbs = findBreadcrumbs(MenuList, pathname).map((item) => ({
      label: item.label,
      href: 'href' in item ? item.href : undefined,
    }));

    return [homeCrumb, ...pathBreadcrumbs];
  }, [pathname, MenuList]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.label}>
            <BreadcrumbItem>
              {index < breadcrumbs.length - 1 ? (
                <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
