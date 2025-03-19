'use client';

import { TRole } from '@/config/roles';
import { useTheme } from '@/store/hooks/useTheme';
import { SignUp, SignedOut } from '@clerk/nextjs';

const SignUpPage = () => {
  useTheme();
  return (
    <SignedOut>
      <div className='min-h-screen text-black flex items-center justify-center bg-secondary-10'>
        <SignUp
          appearance={{
            elements: {
              card: 'bg-primary-50',
              footerActionLink: 'text-primary-10',
            },
          }}
          unsafeMetadata={{
            role: TRole.User,
          }}
        />
      </div>
    </SignedOut>
  );
};

export default SignUpPage;
