'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from './auth-check';

const Explore: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('dashboard.title')}</div>;
};

export default AuthCheck(Explore);
