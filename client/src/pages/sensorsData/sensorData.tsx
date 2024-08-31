//@ts-nocheck
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LBar from "@/components/mine/LBar/Lbar";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead } from "@/components/ui/table";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { TemperatureChart } from "@/components/mine/charts/temperature"
import GasLevelChart from "@/components/mine/charts/gasLevels"
import SoundChart from "@/components/mine/charts/soundChart";
import RenderChart from "@/components/mine/charts/renderChart"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SOCKET_URL = "ws://localhost:4444";

export const SensorData = () => {
    const [sensorData, setSensorData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [tableData, setTableData] = useState([])
    const [selectedChart, setSelectedChart] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleChartClick = (data, title) => {
        setGraphData(data);
        setSelectedChart({ data, title });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedChart(null);
    };

    useEffect(() => {
        const socket = io(SOCKET_URL);

        socket.on('iot-update', (data) => {
            const currentTime = new Date().toLocaleTimeString();
            const sensorWithTime = { ...data, time: currentTime };
            setSensorData((prevData) => [...prevData, sensorWithTime]);
            setTableData((prevData) => [sensorWithTime, ...prevData]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const labels = sensorData.map((data) => data.time);

    const tempData = {
        labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: sensorData.map((data) => data.temperature ?? 0),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
        ],
    };

    const gasData = {
        labels,
        datasets: [
            {
                label: 'Gas Levels',
                data: sensorData.map((data) => data.methanePPM ?? 0),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const vibrationData = {
        labels,
        datasets: [
            {
                label: 'Vibration Levels',
                data: sensorData.map((data) => data.vibration ?? 0),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const soundData = {
        labels,
        datasets: [
            {
                label: 'Sound Levels (dB)',
                data: sensorData.map((data) => data.soundDB ?? 0),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const accelXData = {
        labels,
        datasets: [
            {
                label: 'Acceleration X',
                data: sensorData.map((data) => data.accelX ?? 0),
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
            },
        ],
    };

    const accelYData = {
        labels,
        datasets: [
            {
                label: 'Acceleration Y',
                data: sensorData.map((data) => data.accelY ?? 0),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const accelZData = {
        labels,
        datasets: [
            {
                label: 'Acceleration Z',
                data: sensorData.map((data) => data.accelZ ?? 0),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const pressureData = {
        labels,
        datasets: [
            {
                label: 'Pressure (hPa)',
                data: sensorData.map((data) => data.pressure ?? 0),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const altitudeData = {
        labels,
        datasets: [
            {
                label: 'Altitude (m)',
                data: sensorData.map((data) => data.altitude ?? 0),
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="overflow-hidden font-poppins">
            <LBar />
            <div className="my-14 ml-16 mr-4 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(tempData, 'Temperature')}>
                        <h3 className="text-lg font-semibold mb-4">Temperature</h3>
                        <Line data={tempData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(gasData, 'Gas Levels')}>
                        <h3 className="text-lg font-semibold mb-4">Gas Levels</h3>
                        <Line data={gasData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(soundData, 'Sound Levels')}>
                        <h3 className="text-lg font-semibold mb-4">Sound Levels</h3>
                        <Line data={soundData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(accelXData, 'Acceleration X')}>
                        <h3 className="text-lg font-semibold mb-4">Acceleration X</h3>
                        <Line data={accelXData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(accelYData, 'Acceleration Y')}>
                        <h3 className="text-lg font-semibold mb-4">Acceleration Y</h3>
                        <Line data={accelYData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(accelZData, 'Acceleration Z')}>
                        <h3 className="text-lg font-semibold mb-4">Acceleration Z</h3>
                        <Line data={accelZData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(pressureData, 'Pressure')}>
                        <h3 className="text-lg font-semibold mb-4">Pressure</h3>
                        <Line data={pressureData} />
                    </div>
                    <div className="p-4 border rounded-lg hover:cursor-pointer" onClick={() => handleChartClick(altitudeData, 'Altitude')}>
                        <h3 className="text-lg font-semibold mb-4">Altitude</h3>
                        <Line data={altitudeData} />
                    </div>
                </div>
                {selectedChart && (
                    <RenderChart
                        show={showModal}
                        onClose={closeModal}
                        data={selectedChart.data}
                        title={selectedChart.title}
                    />
                )}
                <span className="font-bold text-xl">Detailed Logs</span>
                <div className="h-[300px] overflow-y-scroll">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-blue-100">
                                <TableHead>S.NO</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Acceleration X</TableHead>
                                <TableHead>Acceleration Y</TableHead>
                                <TableHead>Acceleration Z</TableHead>
                                <TableHead>Temperature</TableHead>
                                <TableHead>Pressure</TableHead>
                                <TableHead>Altitude</TableHead>
                                <TableHead>Sound in (Db)</TableHead>
                                <TableHead>Methane (PPM)</TableHead>
                                <TableHead>CarbonMonoxide (PPM)</TableHead>
                                <TableHead>Methane Level</TableHead>
                                <TableHead>CarbonMonoxide Level</TableHead>
                                <TableHead>Sound Level</TableHead>
                                <TableHead>Temperature Level</TableHead>
                                <TableHead>Pressure Level</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((data, index) => (
                                <TableRow key={index} className="text-black">
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.time}</TableCell>
                                    <TableCell>{data.accelX}</TableCell>
                                    <TableCell>{data.accelY}</TableCell>
                                    <TableCell>{data.accelZ}</TableCell>
                                    <TableCell>{data.temperature}</TableCell>
                                    <TableCell>{data.pressure}</TableCell>
                                    <TableCell>{data.altitude}</TableCell>
                                    <TableCell>{data.soundDB}</TableCell>
                                    <TableCell>{data.methanePPM}</TableCell>
                                    <TableCell>{data.carbonMonoxidePPM}</TableCell>
                                    <TableCell>{data.methaneLevel}</TableCell>
                                    <TableCell>{data.carbonMonoxideLevel}</TableCell>
                                    <TableCell>{data.soundLevel}</TableCell>
                                    <TableCell>{data.temperatureLevel}</TableCell>
                                    <TableCell>{data.pressureLevel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};
