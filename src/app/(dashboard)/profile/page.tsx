'use client';

import { useTranslation } from 'react-i18next';
const Profile: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('profile.description')}</div>;
};

export default Profile;
