import { Button } from '@/core/inputs/button';
import { logout } from '@/store/slices/auth-slice';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogoutClick = () => {
    dispatch(logout());
    router.replace('/login');
  };
  return (
    <Button
      title='Logout'
      className='border-2 border-[var(--secondary-30)] cursor-pointer h-9 w-9 flex items-center justify-center'
      onClick={handleLogoutClick}
    >
      <FontAwesomeIcon icon={faSignOut} />
    </Button>
  );
};
