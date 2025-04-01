'use client';

import { useTranslation } from 'react-i18next';

const CompetitiveNominees: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.nominees.competitive.description')}</div>;
};

export default CompetitiveNominees;
