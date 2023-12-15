import { DashboardPanel } from '@suburban/components/dashboard/DashboardPanel';
import { HorizontalNavigationBar } from '@suburban/components/HorizonalNavigation';
import { PageWrapper } from '@suburban/components/PageWrapper';
import { VerticalNavigation } from '@suburban/components/VerticalNavigation';
import { DashboardCardRow } from '@suburban/components/cards/DashboardCards';
import React from 'react';
import Footer from '@suburban/components/Footer';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div>
      <HorizontalNavigationBar name='Dashboard' />
      <div className='flex'>
        <VerticalNavigation />
        <div className='flex-grow'>
          <PageWrapper>
            <DashboardCardRow />
            <DashboardPanel />
            <Footer status={'healthy'} />
          </PageWrapper>
        </div>
      </div>
    </div>
  );
};
