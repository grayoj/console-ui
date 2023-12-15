import React from 'react';
import { Chart } from 'react-google-charts';

interface DiskUsageChartProps {}

const DiskUsageChart: React.FC<DiskUsageChartProps> = () => {
  const data = [
    ['Week', 'Disk Usage Percentage'],
    ['Week 1', 40],
    ['Week 2', 30],
    ['Week 3', 20],
    ['Week 4', 25],
    ['Week 5', 18],
  ];

  const options = {
    title: 'Disk Usage',
    hAxis: { title: 'Week', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '80%', height: '70%' },
    legend: { position: 'none' },
    colors: ['black'],
  };

  return (
    <div className='col-span-3 p-4 bg-white border rounded-sm'>
      <h2 className='text-lg font-semibold'>Disk Usage</h2>
      <div className='my-20'>
        <Chart
          chartType='AreaChart'
          width='100%'
          height='300px'
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default DiskUsageChart;
