//@ts-nocheck
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LBar from "@/components/mine/LBar/Lbar";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead } from "@/components/ui/table";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SOCKET_URL = "ws://localhost:3000";

export const SensorData = () => {
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        const socket = io(SOCKET_URL);

        socket.on('iot-update', (data) => {
            const currentTime = new Date().toLocaleTimeString();
            const sensorWithTime = { ...data, time: currentTime };
            setSensorData((prevData) => [sensorWithTime, ...prevData]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const labels = sensorData.map((_, index) => index + 1);

    const tempData = {
        labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: sensorData.map((data) => data.temperature),
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
                data: sensorData.map((data) => data.gas),
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
                data: sensorData.map((data) => data.vibration),
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
                data: sensorData.map((data) => data.sound),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="overflow-hidden">
            <LBar />
            <div className="my-14 ml-16 mr-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Temperature</h3>
                        <Line data={tempData} />
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Gas Levels</h3>
                        <Line data={gasData} />
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Vibration Levels</h3>
                        <Line data={vibrationData} />
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Sound Levels</h3>
                        <Line data={soundData} />
                    </div>
                </div>
                <span className="font-bold text-xl font-mono">Detailed Logs</span>
                <div className="h-[300px] overflow-y-scroll">
                    <Table className="">
                        <TableHeader>
                            <TableRow className="bg-blue-100 ">
                                <TableHead>S.NO</TableHead>
                                <TableHead>Current Time</TableHead>
                                <TableHead>Gas</TableHead>
                                <TableHead>Vibration</TableHead>
                                <TableHead>Temperature</TableHead>
                                <TableHead>Sound in (Db)</TableHead>
                                <TableHead>SOS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sensorData.map((data, index) => (
                                <TableRow key={index} className="text-black">
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.time}</TableCell>
                                    <TableCell>{data.gas}</TableCell>
                                    <TableCell>{data.vibration}</TableCell>
                                    <TableCell>{data.temperature}</TableCell>
                                    <TableCell>{data.sound}</TableCell>
                                    <TableCell>{data.sos}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

