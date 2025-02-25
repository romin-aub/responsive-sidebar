'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const Fashion: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.fashion.description')}</div>;
};

export default AuthCheck(Fashion);
