'use client';

import { useTranslation } from 'react-i18next';
const TotalSubmissions: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('submissions.description')}</div>;
};

export default TotalSubmissions;
