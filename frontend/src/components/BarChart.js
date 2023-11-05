import React from 'react';
import { Bar } from 'react-chartjs-2';

const transformDataForBarChart = (data) => {
    const labels = data.map((item) => item.state);
    const counts = data.map((item) => item.count);
    
    return {
        labels: labels,
        datasets: [
        {
            label: 'Counts by State',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
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
        <h2>Insights</h2>
        <Bar data={chartData} options={options} />
      </div>
    );
  };
  

export default BarChart;
