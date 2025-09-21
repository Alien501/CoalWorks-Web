import { emitSensorData } from "./webSocket.mjs";
import { publishSensorData } from "../kafka/producer.mjs";

const sensorData = async(req, res) => {
    try {
        console.log("Received sensor data:", req.body);
        const data = req.body;
        
        // Publish to Kafka topic for other consumers (like your friend)
        await publishSensorData(data);
        console.log("Data published to Kafka topic 'iot-data'");
        
        // Also emit via WebSocket for real-time display
        emitSensorData(data);
        console.log("Data emitted via WebSocket");
        
        res.status(200).json({
            success: true,
            message: "Sensor data received and published successfully",
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error processing sensor data:", error);
        res.status(500).json({
            success: false,
            message: "Failed to process sensor data",
            error: error.message
        });
    }
}

export {
    sensorData
}