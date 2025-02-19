'use client';

import { Label } from '@/core/data-display/label';
import { Button } from '@/core/inputs/button';
import { Input } from '@/core/inputs/input';
import { useTheme } from '@/store/hooks/useTheme';
import { checkAuth, login } from '@/store/slices/auth-slice';
import type { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

interface ILoginProps {
  username: string;
}

const LoginPage = () => {
  useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>();
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    dispatch(checkAuth());
    if (isAuthenticated) {
      router.push('/');
    }
  }, [dispatch, isAuthenticated, router]);

  const onSubmit = (data: ILoginProps) => {
    dispatch(
      login({
        username: data.username,
        token: btoa(data.username),
      }),
    );
    router.push('/');
  };

  if (isAuthenticated) {
    return null;
  }
  return (
    <div className='min-h-screen text-black flex items-center justify-center bg-[var(--secondary-10)]'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-[var(--primary-50)] p-6 rounded shadow-md w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4'
      >
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <div className='mb-4'>
          <Label htmlFor='username'>Username</Label>
          <Input
            id='username'
            {...register('username', {
              setValueAs: (value) => value.trim(),
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long',
              },
            })}
            className='h-10 border border-[var(--secondary-50)] hover:border-[var(--secondary-10)]'
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}
        </div>
        <Button type='submit' className='w-full'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
