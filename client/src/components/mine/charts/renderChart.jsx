//@ts-nocheck
import React, { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Button } from "@/components/ui/button";
import zoomPlugin from 'chartjs-plugin-zoom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chart as ChartJS, registerables } from 'chart.js';
import axios from 'axios';

ChartJS.register(...registerables, zoomPlugin);

const RenderChart = React.memo(({ show, onClose, data, title }) => {
    const [startTime, setStartTime] = useState("00:00:00");
    const [endTime, setEndTime] = useState("23:59:59");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [chartData, setChartData] = useState(data); // Initialize with the passed data

    if (!show) return null;

    const fetchSensorData = async () => {
        try {
            const payload = {
                startDate,
                startTime,
                endDate,
                endTime,
            };

            const response = await axios.post('http://localhost:4444/api/v1/sensor/fetchdata', payload);

            console.log('Data fetched successfully:', response.data);
            setChartData(response.data); // Update the chart data state
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally, you can handle the error state here
        }
    };

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

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm hover:cursor-pointer">
            <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
                <div className='flex space-x-4 items-center'>
                    <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                            type="date"
                            id="startDate"
                            placeholder=""
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="startTime">Start Time</Label>
                        <Input
                            type="time"
                            id="startTime"
                            placeholder=""
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                            type="date"
                            id="endDate"
                            placeholder=""
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="endTime">End Time</Label>
                        <Input
                            type="time"
                            id="endTime"
                            placeholder=""
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                    <div className='mt-4'>
                        <Button className="" onClick={fetchSensorData}>
                            Fetch Data
                        </Button>
                    </div>
                    <div className='mt-4'>
                        <Button className="" onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </div>
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <div style={{ height: '500px', width: '100%' }}>
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
});

export default RenderChart;
