'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostPopularYearHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.yearHighlights.popular.description')}</div>;
};

export default AuthCheck(MostPopularYearHighlights);
