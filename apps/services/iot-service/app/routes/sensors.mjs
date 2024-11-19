import { emitSensorData } from "./webSocket.mjs";
const sensorData = async(req, res) => {
    console.log("hello")
    const data = req.body;
    console.log(req.body);
    emitSensorData(data);
    res.status(200).json({
        msg:"Response Received"
    })
}

export {
    sensorData
}