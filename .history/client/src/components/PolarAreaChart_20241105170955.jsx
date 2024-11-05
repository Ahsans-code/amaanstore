import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart() {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
            {
                label: 'My Dataset',
                data: [11, 16, 7], // Example data
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
                borderWidth: 2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            r: {
                angleLines: {
                //   display: true, // Display the angle lines
                },
                // grid: {
                // //   circular: true, // Make the grid circular
                //   drawTicks: false, // Remove ticks from the grid
                // },
                ticks: {
                  display: false, // Remove numbers from the grid lines
                },
               
                gridLines: {
                  color: 'rgba(0, 0, 0, 0.1)', // Customize grid line color
                //   lineWidth: 1, // Adjust the line width
                },
                
              }
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
