'use client';

import { useTranslation } from 'react-i18next';
const MyRank: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('my-rank.description')}</div>;
};

export default MyRank;
