'use client';

import { useTranslation } from 'react-i18next';

const MostCreativeYearHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.yearHighlights.creative.description')}</div>;
};

export default MostCreativeYearHighlights;
