'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from '../auth-check';
const Participate: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('participate.description')}</div>;
};

export default AuthCheck(Participate);
