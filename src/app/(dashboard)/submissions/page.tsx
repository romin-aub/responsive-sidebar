'use client';

import { useTranslation } from 'react-i18next';
import { AuthCheck } from '../auth-check';
const TotalSubmissions: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('submissions.description')}</div>;
};

export default AuthCheck(TotalSubmissions);
