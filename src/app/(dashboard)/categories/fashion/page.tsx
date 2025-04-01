'use client';

import { useTranslation } from 'react-i18next';

const Fashion: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('categories.fashion.description')}</div>;
};

export default Fashion;
