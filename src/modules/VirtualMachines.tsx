import { HorizontalNavigationBar } from '@suburban/components/HorizonalNavigation';
import { PageWrapper } from '@suburban/components/PageWrapper';
import { VerticalNavigation } from '@suburban/components/VerticalNavigation';
import { VmBar } from '@suburban/components/vms/VmBar';
import { VmDataPanel } from '@suburban/components/vms/VmDataPanel';
import { VmMetricsCard } from '@suburban/components/vms/VmMetricsCard';
import React from 'react';

interface VirtualMachinesProps {}

const VirtualMachines: React.FC<VirtualMachinesProps> = () => {
  return (
    <div>
      <HorizontalNavigationBar name='Dashboard' />
      <div className='flex'>
        <VerticalNavigation />
        <div className='flex-grow'>
          <PageWrapper>
            <VmBar />
            <VmMetricsCard />
            <VmDataPanel />
          </PageWrapper>
        </div>
      </div>
    </div>
  );
};

export default VirtualMachines;
