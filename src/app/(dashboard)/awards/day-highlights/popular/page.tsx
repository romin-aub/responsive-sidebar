'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostPopularDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.popular.description')}</div>;
};

export default AuthCheck(MostPopularDayHighlights);
