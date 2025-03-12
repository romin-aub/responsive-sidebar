'use client';

import { useTranslation } from 'react-i18next';
const MostCreativeDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.creative.description')}</div>;
};

export default MostCreativeDayHighlights;
