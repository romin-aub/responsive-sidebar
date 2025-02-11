'use client';

import { login } from '@/store/slices/auth-slice';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data: LoginFormInputs) => {
    const token = 'dummy-token';
    dispatch(login({ username: data.username, token }));
    router.push('/');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded shadow-md'
      >
        <h1 className='text-2xl font-bold mb-4'>Login</h1>

        <div className='mb-4'>
          <label htmlFor='username' className='block text-sm font-medium'>
            Username
          </label>
          <input
            id='username'
            {...register('username', { required: 'Username is required' })}
            className='w-full p-2 border rounded'
          />
          {errors.username && (
            <p className='text-red-500 text-sm'>{errors.username.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium'>
            Password
          </label>
          <input
            id='password'
            type='password'
            {...register('password', { required: 'Password is required' })}
            className='w-full p-2 border rounded'
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
