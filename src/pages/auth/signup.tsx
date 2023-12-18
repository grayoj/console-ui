import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className='flex flex-col-reverse items-start w-screen h-full md:flex-row bg-primary md:overflow-y-hidden'>
        {/* Order of elements changed for mobile view */}
        <div className='flex flex-col w-full px-5 pt-10 bg-white md:w-1/2 md:p-20 dark:bg-theme-color md:min-h-screen md:justify-center'>
          <div className='flex flex-col items-center justify-center mx-auto max-w-xl space-y-6'>
            {/* Login Form */}
            <div className='flex justify-center items-center'>
              <strong>
                <img
                  className='h-16 w-auto'
                  alt='Suburban Logo'
                  title='Suburban Logo'
                  src='/logo.svg'
                />
              </strong>
            </div>
            <div className='mb-auto mx-auto max-w-xl w-full'>
              <div className='py-2 sm:px-10'>
                <form>
                  <div className='space-y-6'>
                    <div className='mb-4'>
                      <p className='text-[#07122F] my-10 text-2xl font-light'>
                        Sign In
                      </p>
                      <p className='text-[#8D93A1] mb-4'>
                        Enter your email and password to login to your account.
                      </p>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        className='my-2 border rounded-md px-4 py-3 w-full focus:border-neutral-300 focus:outline-none focus:ring-0 bg-[#7C95B10D] bg-opacity-20 text-[#B1BBC6] text-md'
                        placeholder='First Name'
                        autoComplete='off'
                        autoCapitalize='none'
                        autoCorrect='off'
                      />
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        className='my-2 border rounded-md px-4 py-3 w-full focus:border-neutral-300 focus:outline-none focus:ring-0 bg-[#7C95B10D] bg-opacity-20 text-[#B1BBC6] text-md'
                        placeholder='Last Name'
                        autoComplete='off'
                        autoCapitalize='none'
                        autoCorrect='off'
                      />
                      <input
                        type='number'
                        id='phone'
                        name='phone'
                        className='my-2 border rounded-md px-4 py-3 w-full focus:border-neutral-300 focus:outline-none focus:ring-0 bg-[#7C95B10D] bg-opacity-20 text-[#B1BBC6] text-md'
                        placeholder='Phone Number'
                        autoComplete='off'
                        autoCapitalize='none'
                        autoCorrect='off'
                        inputMode='numeric'
                      />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='mt-2 border rounded-md px-4 py-3 w-full focus:border-neutral-300 focus:outline-none focus:ring-0 bg-[#7C95B10D] bg-opacity-20 text-[#B1BBC6] text-md'
                        placeholder='Email Address'
                        autoComplete='off'
                        autoCapitalize='none'
                        autoCorrect='off'
                        inputMode='email'
                      />
                    </div>
                    <div className='relative flex items-center'>
                      <input
                        id='password'
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        className='border rounded-md px-4 py-3 w-full focus:border-neutral-300 focus:outline-none focus:ring-0 bg-[#7C95B10D] bg-opacity-20 text-[#B1BBC6] text-md'
                      />
                      {showPassword ? (
                        <EyeIcon
                          type='button'
                          className='text-black mt-2 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ width: '16px', height: '16px' }}
                        />
                      ) : (
                        <EyeSlashIcon
                          type='button'
                          className='text-black mt-2 text-xs absolute right-2 top-1/2 transform -translate-y-full cursor-pointer'
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ width: '16px', height: '16px' }}
                        />
                      )}
                    </div>
                    <div className='my-6'>
                      <div className='flex justify-center'>
                        <button
                          type='submit'
                          className='bg-[#D50036] w-full text-white text-sm font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline cursor-pointer'
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <div className='text-center'>
                      <p className='text-sm text-[#8D93A1] cursor-pointer'>
                        Have an account?{' '}
                        <Link href='/auth/login'>
                          {' '}
                          <span className='text-[#D50036]'>Login</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 min-h-screen bg-[#23272B] bg-contain bg-no-repeat bg-right px-5 md:px-20 pt-14 space-y-10 flex flex-col md:justify-center'>
          <img src='https://web.suburbancloud.ng/wp-content/uploads/2023/12/vpn-1.svg' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
