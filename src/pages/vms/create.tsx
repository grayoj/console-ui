import { HorizontalNavigationBar } from '@suburban/components/HorizonalNavigation';
import { PageWrapper } from '@suburban/components/PageWrapper';
import { VerticalNavigation } from '@suburban/components/VerticalNavigation';
import { CreateVmForm } from '@suburban/components/vms/CreateVmForm';
import { VmBar } from '@suburban/components/vms/VmBar';
import React from 'react';

interface CreateVMProps {}

const CreateVM: React.FC<CreateVMProps> = () => {
  return (
    <div>
      <HorizontalNavigationBar name='Dashboard' />
      <div className='flex'>
        <VerticalNavigation />
        <div className='flex-grow'>
          <PageWrapper>
            <VmBar />
            <CreateVmForm />
          </PageWrapper>
        </div>
      </div>
    </div>
  );
};

export default CreateVM;
