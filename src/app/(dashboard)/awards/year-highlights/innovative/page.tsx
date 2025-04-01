'use client';

import { useTranslation } from 'react-i18next';

const MostInnovativeYearHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.yearHighlights.innovative.description')}</div>;
};

export default MostInnovativeYearHighlights;
