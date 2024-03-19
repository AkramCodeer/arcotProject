import React from 'react';
import { Chart as ChartJS, PointElement, CategoryScale, LineElement, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Data from './Data.json';


ChartJS.register(
    PointElement, CategoryScale, LineElement, LinearScale
);
const DailyLineChart = () => {
  const dayWiseData = Data.response_times.day_wise;
  const labels = dayWiseData.map(entry => entry.date);
  const data = {
    labels: labels,
    datasets: [{
      label: 'Daily Average Time',
      data: dayWiseData.map(entry => entry.average_time),
      borderColor: 'rgba(75, 192, 192, 0.2)',
      fill: false
    }]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Average Time'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2>Daily Average Time</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default DailyLineChart;
