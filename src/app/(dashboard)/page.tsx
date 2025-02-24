'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from './auth-check';

const Explore: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('explore.description')}</div>;
};

export default AuthCheck(Explore);
