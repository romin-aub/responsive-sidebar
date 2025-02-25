'use client';

import { AuthCheck } from '@/app/(dashboard)/auth-check';
import { useTranslation } from 'react-i18next';
const MostRatedNominees: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('awards.nominees.mostRated.description')}</div>;
};
export default AuthCheck(MostRatedNominees);
