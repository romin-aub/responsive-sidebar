"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumb";
import findBreadcrumbs from "@/lib/find-breadcrumbs";
import { MenuList } from "@/menu-list";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const Header: React.FC = () => {
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
    <div className="pl-5 h-full flex justify-start items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.label}>
              <BreadcrumbItem>
                {index < breadcrumbs.length - 1 ? (
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Header;
