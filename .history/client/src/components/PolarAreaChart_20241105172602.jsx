import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart() {
    const data = {
        labels: ['Sales', 'Orders', 'Stocks'],
        padding:'20px',
        datasets: [
            {
                label: 'My Dataset',
                data: [7,8,6], // Example data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 3,
                boxShadow:'-20px 20px 20px black '
                
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels:{
                    usePointStyle: true, // This makes the legend use point style
                    pointStyle: 'circle', // Specifies the circle shape for the legend
                    padding: 20,
                }
                
            },
        },
        scales: {
            r: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    display:false
                    // backdropColor: 'transparent',
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-2xl px-7 py-2 h-96 w-full shadow-lg">
            <h2 className='py-4 text-lg'>Products Categories</h2>
         
            <PolarArea data={data} options={options} />
            
        </div>

    );
}

export default PolarAreaChart;
