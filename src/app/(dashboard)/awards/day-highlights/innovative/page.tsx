'use client';

import { useTranslation } from 'react-i18next';

const MostInnovativeDayHighlights: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.dayHighlights.innovative.description')}</div>;
};

export default MostInnovativeDayHighlights;
