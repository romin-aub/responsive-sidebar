'use client';

import { useTranslation } from 'react-i18next';

const Participate: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('participate.description')}</div>;
};

export default Participate;
