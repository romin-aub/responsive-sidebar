'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostInnovativeDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.innovative.description')}</div>;
};

export default AuthCheck(MostInnovativeDayHighlights);
