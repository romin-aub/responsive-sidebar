import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/core/navigation/breadcrumb";
import findBreadcrumbs from "@/utils/find-breadcrumbs";
import { MenuList } from "@/config/menu";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const HeaderBreadcrumb: React.FC = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    if (pathname === "/") {
      return [
        {
          label: MenuList[0].label,
          href: pathname,
        },
      ];
    }

    const pathBreadcrumbs = findBreadcrumbs(MenuList, pathname);
    return [
      { label: MenuList[0].label, href: "/" },
      ...pathBreadcrumbs.map((item) => ({
        label: item.label,
        href: "href" in item ? item.href : undefined,
      })),
    ];
  }, [pathname]);
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

export default HeaderBreadcrumb;
