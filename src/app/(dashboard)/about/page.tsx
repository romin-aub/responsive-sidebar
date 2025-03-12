'use client';

import { useTranslation } from 'react-i18next';
const About: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('about.description')}</div>;
};

export default About;
