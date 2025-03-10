'use client';

import { Label } from '@/core/data-display/label';
import { Button } from '@/core/inputs/button';
import { Input } from '@/core/inputs/input';
import { useTheme } from '@/store/hooks/useTheme';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const router = useRouter();
  const { t } = useTranslation();

  const onSubmit = async (data: ILoginProps) => {
    const res = await signIn('credentials', {
      username: data.username,
      redirect: false,
    });
    if (res?.ok) {
      router.push('/');
    }
  };
  return (
    <div className='min-h-screen text-black flex items-center justify-center bg-secondary-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-primary-50 p-6 rounded shadow-md w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4'
      >
        <h1 className='text-2xl font-bold mb-4'>{t('login.title')}</h1>
        <div className='mb-4'>
          <Label htmlFor='username'>{t('login.username')}</Label>
          <Input
            id='username'
            {...register('username', {
              setValueAs: (value) => value.trim(),
              required: t('login.error.required'),
              minLength: {
                value: 3,
                message: t('login.error.minLength'),
              },
            })}
            className='h-10 border border-secondary-50 hover:border-secondary-10'
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}
        </div>
        <Button type='submit' className='w-full'>
          {t('login.button')}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
