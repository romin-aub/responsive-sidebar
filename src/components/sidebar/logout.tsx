import { Button } from '@/core/inputs/button';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogoutClick = async () => {
    await signOut({ redirect: false });
    router.replace('/login');
  };
  return (
    <Button
      title='Logout'
      className='border-2 border-secondary-30 cursor-pointer h-9 w-9 flex items-center justify-center'
      onClick={handleLogoutClick}
    >
      <FontAwesomeIcon icon={faSignOut} />
    </Button>
  );
};
