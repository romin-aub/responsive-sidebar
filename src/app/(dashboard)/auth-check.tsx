'use client';

import { checkAuth, logout } from '@/store/slices/auth-slice';
import type { RootState } from '@/store/store';
import type React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AuthCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ProtectedComponent: React.FC<P> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated,
    );
    const { t } = useTranslation();

    useEffect(() => {
      dispatch(checkAuth());
      if (!isAuthenticated) {
        dispatch(logout());
        navigate('/login');
      }
    }, [isAuthenticated, dispatch, navigate]);

    if (!isAuthenticated) {
      return <div>{t('common.loading')}</div>;
    }
    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};
