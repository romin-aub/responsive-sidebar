import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const SidebarProfile: React.FC = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/profile');
  };
  return (
    <button
      type='button'
      className='p-2 flex items-center w-full justify-center gap-4 border-2 cursor-pointer'
      onClick={handleProfileClick}
    >
      <FontAwesomeIcon icon={faUser} />
      <span>My Profile</span>
    </button>
  );
};

export default SidebarProfile;
