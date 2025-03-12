import { Button } from '@/core/inputs/button';
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logout: React.FC = () => {
  return (
    <SignedIn>
      <SignOutButton>
        <Button
          title='Logout'
          className='border-2 border-secondary-30 cursor-pointer h-9 w-9 flex items-center justify-center'
        >
          <FontAwesomeIcon icon={faSignOut} />
        </Button>
      </SignOutButton>
    </SignedIn>
  );
};
