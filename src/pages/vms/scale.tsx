import { HorizontalNavigationBar } from '@suburban/components/HorizonalNavigation';
import { PageWrapper } from '@suburban/components/PageWrapper';
import { VerticalNavigation } from '@suburban/components/VerticalNavigation';
import { ScaleVmForm } from '@suburban/components/vms/ScaleVmForm';
import { VmBar } from '@suburban/components/vms/VmBar';
import React from 'react';

interface ScaleVMProps {}

const ScaleVM: React.FC<ScaleVMProps> = () => {
  return (
    <div>
      <HorizontalNavigationBar name='Dashboard' />
      <div className='flex'>
        <VerticalNavigation />
        <div className='flex-grow'>
          <PageWrapper>
            <VmBar />
            <ScaleVmForm />
          </PageWrapper>
        </div>
      </div>
    </div>
  );
};

export default ScaleVM;
