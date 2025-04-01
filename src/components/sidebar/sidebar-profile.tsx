import { Button } from '@/core/inputs/button';
import type { RootState } from '@/store/store';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const SidebarProfile: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleProfileClick = () => {
    navigate('/profile');
    closeSheet?.();
  };
  return (
    <Button
      className='p-2 flex items-center w-full justify-center gap-4 border-2 border-secondary-30 cursor-pointer'
      onClick={handleProfileClick}
    >
      <FontAwesomeIcon icon={faUser} />
      {user ? (
        <span className='capitalize'>{user?.username} </span>
      ) : (
        <span>Profile</span>
      )}
    </Button>
  );
};
