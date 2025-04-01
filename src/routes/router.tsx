'use client';

import { createBrowserRouter } from 'react-router-dom';

import protectedRoutes from './protected';
import publicRoutes from './public';

const routes = [...publicRoutes, ...protectedRoutes];

export const router = createBrowserRouter(routes);
