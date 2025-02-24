'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostCreativeMonthHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.monthHighlights.creative.description')}</div>;
};

export default AuthCheck(MostCreativeMonthHighlights);
