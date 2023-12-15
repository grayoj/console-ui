import { ArrowRightIcon, PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { BasicButton } from '../button/BasicButton';

interface DashboardPanelProps {}

export const DashboardPanel: React.FC<DashboardPanelProps> = () => {
  return (
    <div className='ml-[2.5rem] mr-[2.5rem]'>
      <div className='flex space-x-2'>
        <h2 className='text-xl font-bold text-gray-700'>
          Create Something New
        </h2>
        <ArrowRightIcon className='w-6' />
      </div>
      <hr className='mb-6 mt-4'></hr>
      <div className='my-4'>
        <div className='bg-[#EEF1F559] bg-opacity-30 border p-20'>
          <div className='flex items-center justify-center'>
            <BasicButton className='bg-[#D50036] flex space-x-2'>
              <span className='font-semibold'>Create Service</span>
              <PlusIcon className='w-4 mt-0.5' />
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
  );
};
