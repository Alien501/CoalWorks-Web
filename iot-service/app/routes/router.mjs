import express from "express"
import { sensorData } from "./sensors.mjs";
import { fetchData } from "../queries/getData.mjs";

const router = express.Router();

router.post('/sensor/pushdata', sensorData);
router.post('/sensor/fetchdata', fetchData);

export {
    router
}