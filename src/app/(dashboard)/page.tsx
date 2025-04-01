'use client';

import { useTranslation } from 'react-i18next';

const Explore: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('explore.description')}</div>;
};

export default Explore;
