import { Button } from '@/core/inputs/button';
import { useUser } from '@clerk/nextjs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export const SidebarProfile: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const router = useRouter();
  const { user } = useUser();

  const handleProfileClick = () => {
    router.push('/profile');
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
