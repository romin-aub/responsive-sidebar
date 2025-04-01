'use client';

import { useTranslation } from 'react-i18next';

const ECommerce: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.e-commerce.description')}</div>;
};

export default ECommerce;
