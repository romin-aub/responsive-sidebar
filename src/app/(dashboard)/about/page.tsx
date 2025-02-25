'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from '../auth-check';
const About: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('about.description')}</div>;
};

export default AuthCheck(About);
