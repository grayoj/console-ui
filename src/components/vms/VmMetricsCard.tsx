import React from 'react';
import { LineVector } from '../icons/LineVector';

const Card = ({ title, number, description }: any) => {
  return (
    <div className='bg-[#EEF1F559] bg-opacity-30 rounded-sm overflow-hidden m-4 p-6 text-center border '>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-4xl font-bold'>{number}</p>
      <div className='items-center flex justify-center my-1'>
        <LineVector />
      </div>
      <p className='text-xs'>{description}</p>
    </div>
  );
};

interface VmMetricsCardProps {}

export const VmMetricsCard: React.FC<VmMetricsCardProps> = () => {
  return (
    <div className='my-2 mr-[1.5rem] ml-[1.5rem]'>
      <div className='grid grid-cols-4 gap-4'>
        <Card
          title='VM Runtime'
          number='20 Hours'
          description='Total time spent running'
        />
        <Card
          title='Total Compute Storage'
          number='500GB'
          description='Total amount of compute storage'
        />
        <Card
          title='GPU Performance'
          number='16 Teraflops'
          description='Live measurement of GPU performance'
        />
        <Card
          title='RAM Usage'
          number='63.7%'
          description='Total percent of RAM being used by the VM'
        />
      </div>
    </div>
  );
};
