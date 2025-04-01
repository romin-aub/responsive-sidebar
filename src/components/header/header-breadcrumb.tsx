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
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const HeaderBreadcrumb: React.FC = () => {
  const location = useLocation();
  const MenuList = getMenuList();
  const { t } = useTranslation();
  const breadcrumbs = useMemo(() => {
    const homeCrumb = { label: t(MenuList[0].label), href: '/' };
    if (location.pathname === '/') {
      return [homeCrumb];
    }

    const pathBreadcrumbs = findBreadcrumbs(MenuList, location.pathname).map(
      (item) => ({
        label: item.label,
        href: 'href' in item ? item.href : undefined,
      }),
    );

    return [homeCrumb, ...pathBreadcrumbs];
  }, [t, MenuList, location.pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.label}>
            <BreadcrumbItem>
              {index < breadcrumbs.length - 1 ? (
                <BreadcrumbLink href={crumb.href}>
                  {t(crumb.label)}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{t(crumb.label)}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
