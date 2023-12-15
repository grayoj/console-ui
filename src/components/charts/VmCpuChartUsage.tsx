import React from 'react';
import { Chart } from 'react-google-charts';

interface CPUUsageChartProps {}

const CPUUsageChart: React.FC<CPUUsageChartProps> = () => {
  const data = [
    ['Year', 'CPU Usage Percentage'],
    [new Date(2022, 0), 20],
    [new Date(2022, 1), 25],
    [new Date(2022, 2), 18],
  ];

  const options = {
    title: 'CPU Usage',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '80%', height: '70%' },
    legend: { position: 'none' },
    colors: ['red'],
  };

  return (
    <div className='col-span-2 p-4 bg-white border rounded-sm'>
      <h2 className='text-lg font-semibold'>CPU Usage</h2>
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

export default CPUUsageChart;
