'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from '../auth-check';
const Profile: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('profile.description')}</div>;
};

export default AuthCheck(Profile);
