import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Data from './Data.json';
import '../Style/DoughnutChart.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const userSatisfactionData = Data.user_satisfaction;
  const usageStatisticsData = Data.usage_statistics;

  // Data for User Satisfaction Pie Chart
  const userSatisfactionLabels = userSatisfactionData.ratings.map(item => `Rating ${item.rating}`);
  const userSatisfactionChartData = {
    labels: userSatisfactionLabels,
    datasets: [{
      label: 'User Satisfaction Ratings',
      data: userSatisfactionData.ratings.map(item => item.count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      hoverOffset: 4
    }]
  };

  // Options for User Satisfaction Pie Chart
  const userSatisfactionOptions = {
    plugins: {
      title: {
        display: true,
        text: 'User Satisfaction Ratings'
      },
      legend: {
        position: 'right'
      }
    }
  };

  // Data for Usage Statistics Pie Chart (By Platform)
  const usageStatisticsByPlatformLabels = Object.keys(usageStatisticsData.by_platform);
  const usageStatisticsByPlatformChartData = {
    labels: usageStatisticsByPlatformLabels,
    datasets: [{
      label: 'Usage Statistics By Platform',
      data: Object.values(usageStatisticsData.by_platform),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)'
      ],
      hoverOffset: 4
    }]
  };

  // Options for Usage Statistics Pie Chart (By Platform)
  const usageStatisticsByPlatformOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Usage Statistics By Platform'
      },
      legend: {
        position: 'right'
      }
    }
  };

  // Data for Usage Statistics Pie Chart (By Country)
  const usageStatisticsByCountryLabels = Object.keys(usageStatisticsData.by_country);
  const usageStatisticsByCountryChartData = {
    labels: usageStatisticsByCountryLabels,
    datasets: [{
      label: 'Usage Statistics By Country',
      data: Object.values(usageStatisticsData.by_country),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      hoverOffset: 4
    }]
  };

  // Options for Usage Statistics Pie Chart (By Country)
  const usageStatisticsByCountryOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Usage Statistics By Country'
      },
      legend: {
        position: 'right'
      }
    }
  };

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">User Satisfaction Ratings</h2>
        <Pie
          data={userSatisfactionChartData}
          options={userSatisfactionOptions}
        />
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Usage Statistics By Platform</h2>
        <Pie
          data={usageStatisticsByPlatformChartData}
          options={usageStatisticsByPlatformOptions}
        />
      </div>
      <div className="chart-container">
        <h2 className="chart-title">Usage Statistics By Country</h2>
        <Pie
          data={usageStatisticsByCountryChartData}
          options={usageStatisticsByCountryOptions}
        />
      </div>
    </div>
  );
}

export default PieChart;
