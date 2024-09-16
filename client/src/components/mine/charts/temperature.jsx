import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(...registerables, zoomPlugin);

export default TemperatureChart = ({ tempData }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x', 
                },
                zoom: {
                    wheel: {
                        enabled: true, 
                    },
                    pinch: {
                        enabled: true, 
                    },
                    mode: 'x', 
                },
            },
        },
        scales: {
            x: {
                type: 'category', 
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-4 rounded-lg bg-slate">
            {/* <h3 className="text-lg font-semibold mb-4">Temperature</h3> */}
            <div className="h-[300px]">
                <Line data={tempData} options={options} />
            </div>
        </div>
    );
};

