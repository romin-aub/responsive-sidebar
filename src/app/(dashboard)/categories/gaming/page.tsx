'use client';

import { useTranslation } from 'react-i18next';
const Gaming: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.gaming.description')}</div>;
};

export default Gaming;
