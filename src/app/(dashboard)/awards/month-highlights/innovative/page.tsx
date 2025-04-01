'use client';

import { useTranslation } from 'react-i18next';

const MostInnovativeMonthHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.monthHighlights.innovative.description')}</div>;
};

export default MostInnovativeMonthHighlights;
