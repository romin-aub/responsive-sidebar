'use client';

import { useTheme } from '@/store/hooks/useTheme';
import { SignIn, SignedOut } from '@clerk/nextjs';

const LoginPage = () => {
  useTheme();
  return (
    <SignedOut>
      <div className='min-h-screen text-black flex items-center justify-center bg-secondary-10'>
        <SignIn
          appearance={{
            elements: {
              card: 'bg-primary-50',
              footerActionLink: 'text-primary-10',
            },
          }}
        />
      </div>
    </SignedOut>
  );
};

export default LoginPage;
