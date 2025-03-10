'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AuthCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ProtectedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { status } = useSession();
    const { t } = useTranslation();

    useEffect(() => {
      if (status === 'unauthenticated') {
        signOut({ redirect: false });
        router.replace('/login');
      }
    }, [status, router]);

    if (status === 'loading') {
      return <div>{t('common.loading')}</div>;
    }
    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};
