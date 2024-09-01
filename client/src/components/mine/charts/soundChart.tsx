//@ts-nocheck
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(...registerables, zoomPlugin);

const SoundChart = ({ data }) => {
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
            <div className="h-[300px]">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default SoundChart;
