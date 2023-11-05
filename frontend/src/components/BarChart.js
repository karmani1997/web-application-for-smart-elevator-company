import React from 'react';
import { Bar } from 'react-chartjs-2';

const transformDataForBarChart = (data) => {
    const labels = data.map((item) => item.state);
    const counts = data.map((item) => item.count);
    const colors = {
      'warning': 'rgb(255, 165, 0)',        // Orange
      'out-of-order': 'rgb(255, 0, 0)',      // Red
      'operational': 'rgb(0, 128, 0)',    // Green
    };
    
    return {
        labels: labels,
        datasets: [
        {
            label: 'Counts by State',
            backgroundColor: [colors[labels[0]],colors[labels[1]],colors[labels[2]]],
            data: counts,
        },
        ],
    };
};

const BarChart = ({ data }) => {
    const chartData = transformDataForBarChart(data);
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div>
        <Bar data={chartData} options={options} />
      </div>
    );
  };
  

export default BarChart;
