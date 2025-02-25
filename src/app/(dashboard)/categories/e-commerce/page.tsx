'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const ECommerce: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.e-commerce.description')}</div>;
};

export default AuthCheck(ECommerce);
