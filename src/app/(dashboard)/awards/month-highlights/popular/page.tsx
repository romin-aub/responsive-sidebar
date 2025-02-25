'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostPopularMonthHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.monthHighlights.popular.description')}</div>;
};

export default AuthCheck(MostPopularMonthHighlights);
