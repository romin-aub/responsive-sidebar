'use client';

import { useTranslation } from 'react-i18next';

const ECommerce: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.eCommerce.description')}</div>;
};

export default ECommerce;
