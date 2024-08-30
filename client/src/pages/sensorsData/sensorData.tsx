//@ts-nocheck
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LBar from "@/components/mine/LBar/Lbar";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead } from "@/components/ui/table";

// Replace this with your actual WebSocket server URL
const SOCKET_URL = "ws://localhost:3000"; 

export const SensorData = (() => {
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        const socket = io(SOCKET_URL);

        // Listen for 'iot-update' events from the server
        socket.on('iot-update', (data) => {
            setSensorData((prevData) => [...prevData, data]);
        });

        // Cleanup on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen overflow-hidden">
            <LBar />
            <div className="my-14 min-h-screen ml-16 mr-4 border-2 border-black">
                <div>
                    <Table className="border">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Gas</TableHead>
                                <TableHead>Temperature</TableHead>
                                <TableHead>Vibration</TableHead>
                                <TableHead>Humidity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sensorData.map((data, index) => (
                                <TableRow key={index} className="text-black">
                                    <TableCell>{data.gas}</TableCell>
                                    <TableCell>{data.temp}</TableCell>
                                    <TableCell>{data.vibration}</TableCell>
                                    <TableCell>{data.humidity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
});
