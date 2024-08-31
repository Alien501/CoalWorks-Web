const express = require("express")
const cors = require("cors")
const { Pool } = require("pg");


const app = express()


app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))


 const pool = new Pool({
    connectionString: "postgresql://prasanthsampath2005:vkz5LjT6NMqf@ep-shiny-snow-a5apfu5t.us-east-2.aws.neon.tech/coal?sslmode=require"
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log('Connected to PostgreSQL database at:', result.rows[0].now);
    });
});


// app.use('/alerts', alertsRoute);
app.get('/alerts', async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM alerts');
        res.json(result.rows);
    }
    catch(error){
        console.error('Error fetching alerts:', error);
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
})

app.get('/events', async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);
    }
    catch(error){
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
})

app.get('/injuries', async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM injuries');
        res.json(result.rows);
    }
    catch(error){
        console.error('Error fetching injuries:', error);
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
})

app.get('/issues', async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM issues');
        res.json(result.rows);
    }
    catch(error){
        console.error('Error fetching issues:', error);
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
})

// module.exports = pool;
app.listen(3001,()=>{
    console.log("server is running!");
})


