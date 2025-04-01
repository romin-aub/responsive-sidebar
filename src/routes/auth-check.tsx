'use client';

import type { RootState } from '@/store/store';
import { Outlet, useNavigate } from '@tanstack/react-router';
import type React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AuthCheck: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};
