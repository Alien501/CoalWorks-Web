import { client } from "../index.mjs";
export const fetchData = async (req, res) => {
  const { startDate, startTime, endDate, endTime } = req.body;

  if (!startDate || !startTime || !endDate || !endTime) {
    return res
      .status(400)
      .json({ error: "All date and time fields are required" });
  }

  const startDatetime = `${startDate} ${startTime}`;
  const endDatetime = `${endDate} ${endTime}`;

  try {
    const query = `
        SELECT * FROM sensor_data
        WHERE timestamp BETWEEN $1 AND $2
      `;
    const values = [startDatetime, endDatetime];

    const result = await client.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
