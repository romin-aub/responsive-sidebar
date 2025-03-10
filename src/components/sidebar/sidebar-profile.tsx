import { Button } from '@/core/inputs/button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const SidebarProfile: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
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
      {session?.user ? (
        <span className='capitalize'>{session?.user?.username} </span>
      ) : (
        <span>Profile</span>
      )}
    </Button>
  );
};
