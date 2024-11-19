import { client } from "../index.mjs";
const insertSensorData = async (data) => {
  const query = `
      INSERT INTO sensor_data (
        accelX, accelY, accelZ, temperature, pressure, altitude,
        soundDB, methanePPM, carbonMonoxidePPM,
        methaneLevel, carbonMonoxideLevel, soundLevel,
        temperatureLevel, pressureLevel, timestamp
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9,
        $10, $11, $12,
        $13, $14, $15
      )
    `;
  const values = [
    parseFloat(data.accelX),
    parseFloat(data.accelY),
    parseFloat(data.accelZ),
    parseFloat(data.temperature),
    parseFloat(data.pressure),
    parseFloat(data.altitude),
    parseInt(data.soundDB),
    parseInt(data.methanePPM),
    parseInt(data.carbonMonoxidePPM),
    data.methaneLevel,
    data.carbonMonoxideLevel,
    data.soundLevel,
    data.temperatureLevel,
    data.pressureLevel,
    new Date().toISOString(),
  ];

  try {
    await client.query(query, values);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};
export {
    insertSensorData
}