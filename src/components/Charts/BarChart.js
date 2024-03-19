import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Data from './Data.json';
import '../Style/BarChart.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
);

const CategoryDistributionBarChart = () => {
    const categoryDistributionData = Data.category_distribution;
    const labels = Object.keys(categoryDistributionData);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Category Distribution',
            data: Object.values(categoryDistributionData),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Category'
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <h2>Category Distribution</h2>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}

const BarChart = () => {
    return (
        <div>
            <CategoryDistributionBarChart />
        </div>
    );
}

export default BarChart;
