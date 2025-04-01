'use client';

import { Button } from '@/core/inputs/button';
import { useTheme } from '@/store/hooks/useTheme';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const router = useRouter();
  useTheme();
  const { t } = useTranslation();

  const handleClick = () => {
    router.navigate({ to: '/login' });
  };

  return (
    <div className='min-h-screen flex flex-col items-center text-black justify-center bg-secondary-10'>
      <div className='bg-primary-50 flex flex-col items-center p-6 rounded shadow-md w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4'>
        <h1 className='text-2xl font-bold mb-4'>{t('notFound.title')}</h1>
        <div className='mb-4'>
          <p>{t('notFound.description')}</p>
        </div>
        <Button onClick={handleClick} className='w-full'>
          <FontAwesomeIcon icon={faArrowLeft} className='w-5 h-5 mr-2' />
          {t('notFound.button')}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
