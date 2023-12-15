import React from 'react';
import { Chart } from 'react-google-charts';

interface MemoryUsageChartProps {}

const MemoryUsageChart: React.FC<MemoryUsageChartProps> = () => {
  const data = [
    ['Year', 'CPU Usage Percentage'],
    [new Date(2022, -1), 40],
    [new Date(2022, 0), 30],
    [new Date(2022, 0), 20],
    [new Date(2022, 1), 25],
    [new Date(2022, 2), 18],
  ];

  const options = {
    title: 'Memory Usage',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '80%', height: '70%' },
    legend: { position: 'none' },
  };

  return (
    <div className='col-span-3 p-4 bg-white border rounded-sm'>
      <h2 className='text-lg font-semibold'>Memory Usage</h2>
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

export default MemoryUsageChart;
