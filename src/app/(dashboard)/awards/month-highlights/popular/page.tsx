'use client';

import { useTranslation } from 'react-i18next';

const MostPopularMonthHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.monthHighlights.popular.description')}</div>;
};

export default MostPopularMonthHighlights;
