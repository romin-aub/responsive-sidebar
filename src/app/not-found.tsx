'use client';

import { Button } from '@/core/inputs/button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/login');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='bg-white flex flex-col items-center p-6 rounded shadow-md w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4'>
        <h1 className='text-2xl font-bold mb-4'>404</h1>
        <div className='mb-4'>
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Button onClick={handleClick} className='w-full'>
          <FontAwesomeIcon icon={faArrowLeft} className='w-5 h-5 mr-2' />
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
