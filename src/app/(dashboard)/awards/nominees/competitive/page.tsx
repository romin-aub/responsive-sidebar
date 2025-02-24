'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const CompetitiveNominees: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.nominees.competitive.description')}</div>;
};
export default AuthCheck(CompetitiveNominees);
