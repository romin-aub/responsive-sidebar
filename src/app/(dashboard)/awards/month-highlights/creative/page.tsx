'use client';

import { useTranslation } from 'react-i18next';
const MostCreativeMonthHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.monthHighlights.creative.description')}</div>;
};

export default MostCreativeMonthHighlights;
