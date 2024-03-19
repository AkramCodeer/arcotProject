import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Data from './Data.json';
import '../Style/DoughnutChart.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const insightSummaryData = Data.insight_summary;
  const insightSummaryChartData = {
    labels: [
      'Successful Queries',
      'Failed Queries'
    ],
    datasets: [{
      label: 'Insight Summary',
      data: [insightSummaryData.successful_queries, insightSummaryData.failed_queries],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      hoverOffset: 4
    }]
  };

  const insightSummaryOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Insight Summary'
      },
      legend: {
        position: 'right'
      }
    }
  };

  return (
    <div>
      <div className="chart-container">
        <h2 className="chart-title">Insight Summary</h2>
        <Doughnut
          data={insightSummaryChartData}
          options={insightSummaryOptions}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
