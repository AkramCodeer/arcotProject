import React from 'react';
import { Chart as ChartJS, PointElement, CategoryScale, LineElement, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Data from './Data.json';

ChartJS.register(
    PointElement, CategoryScale, LineElement, LinearScale
);

const LineChart = () => {
    const weekWiseData = Data.response_times.week_wise;
    console.log("Week Wise Data:", weekWiseData);

    const weekWiseLabels = weekWiseData.map(entry => entry.week);
    console.log("Week Wise Labels:", weekWiseLabels);

    const weekWiseDataset = {
        label: 'Week Wise Average Time',
        data: weekWiseData.map(entry => entry.average_time),
        borderColor: 'rgba(255, 99, 132, 0.2)',
        fill: false
    };

    const data = {
        labels: weekWiseLabels,
        datasets: [weekWiseDataset]
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Week'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average Time'
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <h2>Weekly Average Time</h2>
            <Line
                data={data}
                options={options}
            />
        </div>
    );
}

export default LineChart;
