import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function SalesChart() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weekly Data',
                data: [54, 63, 60, 65, 60, 68, 60], // Example data points
                borderColor: '#6fb327',
                backgroundColor: 'rgba(75, 158, 96, 0.2)', // Light green for the area under the line
                borderWidth: 3,
                tension: 0.4, // Smooth curve
                pointBackgroundColor: '#fff',
                pointBorderColor: '#6fb327',
                pointBorderWidth: 2,
                pointRadius: 5,
                fill: true, // Fills the area under the line
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,

                labels: {
                    color: '#6fb327', // Label color
                    font: {
                        size: 14,
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Removes the grid lines from the x-axis
                },
                ticks: {

                    color: '#6fb327', // Tick color
                },
            },
            y: {
                max: 70, // Maximum value of y-axis
                min: 50,
                beginAtZero: false,

                ticks: {
                    stepSize: 5, // Steps of 5
                    color: '#6fb327',
                },
                grid: {
                    color: 'rgba(75, 158, 96, 0.1)', // Light green grid lines
                },
            },
        },
    };

    return (
        <div className='bg-white rounded-2xl px-7 py-2 shadow-lg h-full custom-scrollbar '>
            <h2 className='py-4 text-lg font-semibold'>Sales</h2>
            <div className='h-[80%]'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default SalesChart;
