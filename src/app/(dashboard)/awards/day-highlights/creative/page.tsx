'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostCreativeDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.creative.description')}</div>;
};

export default AuthCheck(MostCreativeDayHighlights);
