//@ts-nocheck
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(...registerables, zoomPlugin);

// Memoized GasLevelChart component
const GasLevelChart = React.memo(({ gasData }) => {
    // Memoize the options to prevent unnecessary re-renders
    const options = useMemo(() => ({
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
    }), []);

    // Memoize the data to prevent unnecessary re-renders
    const chartData = useMemo(() => gasData, [gasData]);

    return (
        <div className="p-4 rounded-lg bg-slate">
            <div className="h-[300px]">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
});

export default GasLevelChart;
