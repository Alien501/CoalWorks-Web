import mysql from 'mysql2/promise';
import pg from 'pg';
import sql from 'mssql';

const { Client } = pg

const checkDbConnection = async (req, res) => {
  const { connectionString, dbType } = req.body;

  if (!connectionString || connectionString.trim().length === 0) {
    return res.status(400).json({
      message: 'Bad request!',
      error: 'Missing connection string',
    });
  }

  if (!dbType || dbType.trim().length === 0) {
    return res.status(400).json({
      message: 'Bad request!',
      error: 'Missing database type',
    });
  }

  try {
    let connection;
    switch (dbType) {
      case 'mysql':
        connection = await mysql.createConnection(connectionString);
        break;
      case 'postgresql':
        connection = new Client({
          connectionString,
        });
        await connection.connect();
        break;
      case 'mssql':
        await sql.connect(connectionString);
        connection = new sql.Request();
        break;
      default:
        return res.status(400).json({
          message: 'Bad request!',
          error: 'Unsupported database type',
        });
    }

    let result;
    let dbs;
    switch (dbType) {
      case 'mysql':
        [result] = await connection.execute('SELECT 1 AS result');
        break;
      case 'postgresql':
        result = await connection.query('SELECT datname FROM pg_database');
        dbs = result.rows.map(i => i.datname);
        break;
      case 'mssql':
        result = await connection.query('SELECT 1 AS result');
        break;
    }

    switch (dbType) {
      case 'mysql':
        await connection.end();
        break;
      case 'postgresql':
        await connection.end();
        break;
      case 'mssql':
        sql.close();
        break;
    }

    return res.status(200).json({
      message: 'Connection successful',
      data: dbs
    });
  } catch (error) {
    // console.error('Error:', error);
    return res.status(500).json({
      message: 'Error connecting to database',
      error: error.message,
    });
  }
};

export {
    checkDbConnection
};