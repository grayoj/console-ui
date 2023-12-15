import React from 'react';
import CPUUsageChart from '../charts/VmCpuChartUsage';
import MemoryUsageChart from '../charts/VmMemoryChartUsage';
import DiskUsageChart from '../charts/VmDiskUsageChart';

interface VmDataPanelProps {}

export const VmDataPanel: React.FC<VmDataPanelProps> = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mr-[2.5rem] ml-[2.5rem]'>
      <div className='col-span-1 p-4 bg-[#EEF1F559] bg-opacity-30 border rounded-sm'>
        <h2 className='text-lg font-semibold'>Quick VM Information</h2>
        <div className='mt-4'>
          <div className='my-4'>
            <div className='flex justify-between'>
              <p className='font-semibold'>Name:</p>
              <p>SUBURBANCLOUD cPanel Server 1</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Description:</p>
              <p>cPanel Server 1 for Hosting</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>ID:</p>
              <p>87af86fc-f2f8-4ed6-84f0-f4e80d39f28a</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Host:</p>
              <p>NTNX-20FM5A190081-A</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Host IP:</p>
              <p>172.31.1.22</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Memory:</p>
              <p>32 GiB</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Cores:</p>
              <p>32</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='my-2'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Network Adapters:</p>
            <p>2</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>IP Addresses:</p>
            <p>102.220.204.10, 102.220.204.11</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Storage Container:</p>
            <p>COSGROVE-CONTAINER</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Virtual Disks:</p>
            <p>1</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>NGT Enabled:</p>
            <p>No</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>NGT Mounted:</p>
            <p>No</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-semibold'>Protection Status:</p>
            <p>Unprotected</p>
          </div>
        </div>
      </div>
      <CPUUsageChart />
      <MemoryUsageChart />
      <DiskUsageChart />
    </div>
  );
};
