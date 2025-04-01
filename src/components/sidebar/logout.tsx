import { Button } from '@/core/inputs/button';
import { logout } from '@/store/slices/auth-slice';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/login');
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
