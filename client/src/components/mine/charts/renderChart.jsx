import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Button } from "@/components/ui/button";
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables, zoomPlugin);

const RenderChart = React.memo(({ show, onClose, data, title }) => {
    if (!show) return null;

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

    const chartData = useMemo(() => data, [data]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm hover:cursor-pointer">
            <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
                <Button className="absolute top-2 right-4" onClick={onClose}>
                    Close
                </Button>
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <div style={{ height: '500px', width: '100%' }}>
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
});

export default RenderChart;
