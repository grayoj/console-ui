import React from 'react';
import { BasicButton } from '../button/BasicButton';

export const ScaleVmForm = () => {
  return (
    <div className='mr-[2.5rem] ml-[2.5rem] my-4'>
      <div>
        <form className='bg-[#EEF1F559] bg-opacity-30 border rounded-sm p-6'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name of Virtual Machine
            </label>
            <input
              type='text'
              value='SUBURBANCLOUD cPanel Server 1'
              readOnly
              id='name'
              name='name'
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Description
            </label>
            <input
              type='text'
              value='cPanel Server 1 for Hosting'
              readOnly
              id='name'
              name='name'
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4 grid grid-cols-3 gap-4'>
            {/* Memory Input */}
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='memory'
              >
                Memory (RAM)
              </label>
              <input
                value='32GB'
                type='text'
                id='memory'
                name='memory'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='additionalInput1'
              >
                Number of Cores (vCPU)
              </label>
              <input
                value='32 Cores'
                type='text'
                id='additionalInput1'
                name='additionalInput1'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='additionalInput2'
              >
                Number of vCPUs
              </label>
              <input
                value='2'
                type='text'
                id='additionalInput2'
                name='additionalInput2'
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <BasicButton className='bg-[#D50036]'>
              Upgrade Virtual Machine
            </BasicButton>
          </div>
        </form>
      </div>
    </div>
  );
};
