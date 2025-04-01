'use client';

import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('contact-us.description')}</div>;
};

export default ContactUs;
