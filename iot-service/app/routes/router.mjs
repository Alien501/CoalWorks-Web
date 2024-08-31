import express from "express"
import { emitSensorData } from "./webSocket.mjs";

const router = express.Router();

router.post('/sensor/iot-data', emitSensorData);

export {
    router
}