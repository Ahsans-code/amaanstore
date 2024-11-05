import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart() {
    const data = {
        labels: ['Sales', 'Orders', 'Stocks'],
        datasets: [
            {
                label: 'My Dataset',
                data: [7, 8, 6], // Example data
                backgroundColor: [
                    '#4b9e6037',
                    '#D4A01737',
                    '#4b9e6037',
                ],
                borderColor: [
                    '#4B9E60',
                    '#D4A017',
                    '#4B9E60',
                ],
                borderWidth: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    font: {
                        size: 16,
                    },
                },
            },
        },
        scales: {
            r: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.2)',
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-2xl px-5 sm:px-7 py-4 h-[60vh] md:h-96 w-full shadow-lg">
            <h2 className="text-center md:text-left py-4 text-lg">Products Categories</h2>
            <div className="relative h-[50vh] md:h-[calc(100%-2rem)]">
                <PolarArea className="p-2 md:p-6 -translate-y-6 md:-translate-y-8" data={data} options={options} />
            </div>
        </div>
    );
}

export default PolarAreaChart;
