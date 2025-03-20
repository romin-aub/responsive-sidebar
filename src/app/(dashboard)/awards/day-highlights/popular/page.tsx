'use client';

import { useTranslation } from 'react-i18next';
const MostPopularDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.popular.description')}</div>;
};

export default MostPopularDayHighlights;
