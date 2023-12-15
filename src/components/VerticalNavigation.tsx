import { Disclosure } from '@headlessui/react';
import { VerticalNavigationData } from '@suburban/utils/VerticalNavigationData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface VerticalNavigationProps {}

export const VerticalNavigation: React.FC<VerticalNavigationProps> = () => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <aside className='hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
      <div className='flex min-h-0 flex-1 flex-col bg-[#EEF1F559] bg-opacity-30 border'>
        <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
          <div className='flex flex-shrink-0 items-center px-4'>
            <div className='flex justify-center items-center mx-12 mt-8 mb-2'>
              <Link href='/'>
                <Image
                  src='/logo.svg'
                  height={150}
                  width={150}
                  alt='Suburban Logo'
                />
              </Link>
            </div>
          </div>
          <nav className='pt-8 mt-5 flex-1 space-y-2 px-1'>
            {VerticalNavigationData.map((item) =>
              //@ts-ignore
              !item.children ? (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current ? ' text-gray-700' : ' text-gray-700',
                      'group w-full flex items-center pl-2 pr-1 py-4 text-left text-lg text-gray-600 rounded-md space-x-2 focus:outline-none mx-4'
                    )}
                  >
                    <span className='flex items-center'>
                      {item.icon && (
                        <item.icon className='w-5 h-5 mr-2 text-gray-700 hover:text-gray-600' />
                      )}{' '}
                      {item.name}
                    </span>
                  </Link>
                </div>
              ) : (
                <Disclosure as='div' key={item.name} className='space-y-1 mx-4'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? 'bg-darkTheme text-gray-700 hover:text-gray-600 outline-none'
                            : 'bg-darkTheme text-gray-700 hover:text-gray-600 outline-none',
                          'group w-full flex items-center pl-2 pr-1 py-4 text-left text-lg rounded-md focus:outline-none outline-none'
                        )}
                      >
                        <span className='flex items-center'>
                          {item.icon && (
                            <item.icon className='w-5 h-5 mr-2 text-gray-700 hover:text-gray-600' />
                          )}{' '}
                          {item.name}
                        </span>
                        <svg
                          className={classNames(
                            open ? 'text-gray-700 rotate-90' : 'text-gray-600',
                            'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150 outline-none'
                          )}
                          viewBox='0 0 20 20'
                          aria-hidden='true'
                        >
                          <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                        </svg>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              )
            )}
          </nav>
          <hr />
          <span className='my-2 text-center'>
            &copy; Copyright Console, 2023{' '}
          </span>
        </div>
      </div>
    </aside>
  );
};
