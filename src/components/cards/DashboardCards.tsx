import { UserIcon } from '@heroicons/react/24/outline';

export const Card = ({
  text,
  detail,
  color,
  textColor,
  detailColor,
  countColor,
  count,
}: {
  text: string;
  detail: string;
  color: string;
  textColor: string;
  detailColor: string;
  countColor: string;
  count: string;
}) => {
  const cardClasses = `${color} rounded-sm overflow-hidden m-4 py-10 flex`;
  const textClasses = `text-base ${textColor}`;
  const detailClasses = `text-xs ${detailColor}`;
  const countClasses = `text-lg ${countColor}`;
  return (
    <div className={cardClasses}>
      <div className='p-4'>
        <div className={countClasses}>{count}</div>
        <div className={textClasses}>{text}</div>
        <div className={detailClasses}>{detail}</div>
      </div>
      <div className='ml-10 mt-10'>
        <UserIcon />
      </div>
    </div>
  );
};

export const DashboardCardRow: React.FC = () => {
  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-4 gap-4'>
        <Card
          textColor='text-white'
          countColor='text-white'
          detailColor='text-white'
          text='Total Services'
          detail='Total Number of Services'
          color='bg-[#D50036]'
          count='0'
        />
        <Card
          textColor='text-black'
          countColor='text-black'
          detailColor='text-black'
          text='Virtual Machines'
          detail='Total Number of Virtual Machines'
          color='bg-[#EEF1F559] bg-opacity-30 border'
          count='0'
        />
        <Card
          textColor='text-black'
          countColor='text-black'
          detailColor='text-black'
          text='Running VMs'
          detail='Number of Virtual Machines Running'
          color='bg-[#EEF1F559] bg-opacity-30 border'
          count='0'
        />
        <Card
          textColor='text-black'
          countColor='text-black'
          detailColor='text-black'
          text='CaaS Services'
          detail='Total Number of CaaS Services'
          color='bg-[#EEF1F559] bg-opacity-30 border'
          count='0'
        />
      </div>
    </div>
  );
};
