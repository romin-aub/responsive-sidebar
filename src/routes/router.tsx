import DashboardLayout from '@/app/(dashboard)/layout';
import Login from '@/app/login/page';
import NotFound from '@/app/not-found';
import { getMenuList } from '@/config/menu';
import { Providers } from '@/store/providers';
import type { IMenuList } from '@/types/menu-type';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import type React from 'react';
import { AuthCheck } from './auth-check';

const rootRoute = createRootRoute({
  component: () => (
    <Providers>
      <Outlet />
    </Providers>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: DashboardLayout,
  id: 'dashboard',
});

const protectedRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  component: AuthCheck,
  id: 'protected',
});

const createProtectedRoute = (path: string, component: React.FC) => {
  return createRoute({
    getParentRoute: () => protectedRoute,
    path,
    component,
  });
};

const menuList = getMenuList();

const protectAllRoutes = (
  menuList: IMenuList[],
): ReturnType<typeof createProtectedRoute>[] => {
  return menuList.flatMap((menu) => {
    if ('items' in menu && menu.items) {
      return protectAllRoutes(menu.items);
    }
    if ('href' in menu && menu.component) {
      return createProtectedRoute(menu.href, menu.component);
    }
    return [];
  });
};

const allProtectedRoutes = protectAllRoutes(menuList);

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    loginRoute,
    dashboardLayoutRoute.addChildren([
      protectedRoute.addChildren(allProtectedRoutes),
    ]),
  ]),
  defaultNotFoundComponent: NotFound,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
