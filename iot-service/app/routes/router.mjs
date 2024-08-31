import express from "express"
import { sensorData } from "./sensors.mjs";

const router = express.Router();

router.post('/sensor/iot-data', sensorData);

export {
    router
}