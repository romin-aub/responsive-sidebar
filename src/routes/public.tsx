'use client';

import type { RouteObject } from 'react-router-dom';
import Login from '../app/login/page';
import NotFound from '../app/not-found';

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  },
];

export default publicRoutes;
