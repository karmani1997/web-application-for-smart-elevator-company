import React from 'react';
import { Bar } from 'react-chartjs-2';
import randomColor from 'randomcolor';

// Function to generate random colors while avoiding too white or too black colors
const generateRandomColors = (count) => {
  const colors = [];
  let i = 0;

  const isColorValid = (color) => {
    // Convert color to RGB values
    const rgb = hexToRgb(color);

    // Calculate color brightness
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

    // Define thresholds for brightness (adjust as needed)
    const minBrightness = 30; // Minimum brightness (0-255) for valid colors
    const maxBrightness = 200; // Maximum brightness (0-255) for valid colors

    return brightness >= minBrightness && brightness <= maxBrightness;
  };

  const hexToRgb = (hex) => {
    // Remove the hash character if present
    hex = hex.replace(/^#/, '');

    // Parse the hex value into individual RGB components
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  while (i < count) {
    const color = randomColor({ format: 'hex' }); // Generate colors in HEX format
    if (!colors.includes(color) && isColorValid(color)) {
      colors.push(color);
      i++;
    }
  }

  return colors;
};


const transformDataForBarChart = (data) => {
    const labels = data.map((item) => item.state);
    const counts = data.map((item) => item.count);
    
    return {
        labels: labels,
        datasets: [
        {
            label: 'Counts by State',
            backgroundColor: generateRandomColors(labels.length),
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
