import mysql from 'mysql2/promise';
import pg from 'pg';
import sql from 'mssql';
const { Client } = pg;

/**
 * Sanitizes database names and table names to prevent SQL injection
 * @param {string} identifier Database or table name
 * @returns {string} Sanitized identifier
 */
const sanitizeIdentifier = (identifier) => {
  return identifier.replace(/[^a-zA-Z0-9_-]/g, '');
};

/**
 * Get table fields based on database type, database name and table name
 */
const getTableFields = async (connection, dbType, dbName, tableName) => {
  let fields = [];
  const sanitizedDb = sanitizeIdentifier(dbName);
  const sanitizedTable = sanitizeIdentifier(tableName);

  try {
    switch (dbType.toLowerCase()) {
      case 'mysql': {
        await connection.query(`USE \`${sanitizedDb}\``);
        const [columns] = await connection.query(`
          SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_KEY
          FROM INFORMATION_SCHEMA.COLUMNS 
          WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
          ORDER BY ORDINAL_POSITION
        `, [sanitizedDb, sanitizedTable]);

        fields = columns.map(col => ({
          name: col.COLUMN_NAME,
          type: col.DATA_TYPE,
          isNullable: col.IS_NULLABLE === 'YES',
          isPrimary: col.COLUMN_KEY === 'PRI'
        }));
        break;
      }

      case 'postgresql': {
        const result = await connection.query(`
          SELECT column_name, data_type, is_nullable,
            CASE WHEN pk.column_name IS NOT NULL THEN true ELSE false END as is_primary
          FROM information_schema.columns c
          LEFT JOIN (
            SELECT ku.column_name
            FROM information_schema.table_constraints tc
            JOIN information_schema.key_column_usage ku
              ON tc.constraint_name = ku.constraint_name
            WHERE tc.constraint_type = 'PRIMARY KEY'
              AND ku.table_name = $1
              AND ku.table_schema = 'public'
          ) pk ON c.column_name = pk.column_name
          WHERE table_name = $1
          AND table_schema = 'public'
          ORDER BY ordinal_position
        `, [sanitizedTable]);

        fields = result.rows.map(col => ({
          name: col.column_name,
          type: col.data_type,
          isNullable: col.is_nullable === 'YES',
          isPrimary: col.is_primary
        }));
        break;
      }

      case 'mssql': {
        await connection.batch(`USE [${sanitizedDb}]`);
        const result = await connection.query(`
          SELECT 
            c.COLUMN_NAME,
            c.DATA_TYPE,
            c.IS_NULLABLE,
            CASE WHEN pk.COLUMN_NAME IS NOT NULL THEN 1 ELSE 0 END as IS_PRIMARY
          FROM INFORMATION_SCHEMA.COLUMNS c
          LEFT JOIN (
            SELECT ku.COLUMN_NAME
            FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
            JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE ku
              ON tc.CONSTRAINT_NAME = ku.CONSTRAINT_NAME
            WHERE tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
              AND ku.TABLE_NAME = '${sanitizedTable}'
          ) pk ON c.COLUMN_NAME = pk.COLUMN_NAME
          WHERE c.TABLE_NAME = '${sanitizedTable}'
          ORDER BY c.ORDINAL_POSITION
        `);

        fields = result.recordset.map(col => ({
          name: col.COLUMN_NAME,
          type: col.DATA_TYPE,
          isNullable: col.IS_NULLABLE === 'YES',
          isPrimary: col.IS_PRIMARY === 1
        }));
        break;
      }
    }
    return fields;
  } catch (error) {
    console.error(`Error getting fields for ${dbName}.${tableName}:`, error);
    throw error;
  }
};

/**
 * Get table fields endpoint
 */
const getFields = async (req, res) => {
  const { connectionString, dbType, database, table } = req.body;

  if (!connectionString?.trim() || !dbType?.trim() || !database?.trim() || !table?.trim()) {
    return res.status(400).json({
      message: 'Bad request!',
      error: 'Missing required parameters',
    });
  }

  let connection;
  try {
    switch (dbType.toLowerCase()) {
      case 'mysql':
        connection = await mysql.createConnection(connectionString);
        break;
      case 'postgresql':
        connection = new Client({ connectionString });
        await connection.connect();
        break;
      case 'mssql':
        const pool = new sql.ConnectionPool(connectionString);
        await pool.connect();
        connection = pool.request();
        break;
      default:
        return res.status(400).json({
          message: 'Bad request!',
          error: 'Unsupported database type',
        });
    }

    const fields = await getTableFields(connection, dbType, database, table);
    
    return res.status(200).json({
      message: 'Fields retrieved successfully',
      data: fields
    });

  } catch (error) {
    console.error('Error getting table fields:', error);
    return res.status(500).json({
      message: 'Error getting table fields',
      error: error.message,
    });
  } finally {
    try {
      if (connection) {
        switch (dbType.toLowerCase()) {
          case 'mysql':
            await connection.end();
            break;
          case 'postgresql':
            await connection.end();
            break;
          case 'mssql':
            await sql.close();
            break;
        }
      }
    } catch (cleanupError) {
      console.error('Error cleaning up connection:', cleanupError);
    }
  }
};

/**
 * Checks database connection and retrieves database and table information
 */
const checkDbConnection = async (req, res) => {
  const { connectionString, dbType } = req.body;

  if (!connectionString?.trim()) {
    return res.status(400).json({
      message: 'Bad request!',
      error: 'Missing connection string',
    });
  }

  if (!dbType?.trim()) {
    return res.status(400).json({
      message: 'Bad request!',
      error: 'Missing database type',
    });
  }

  let connection;
  const dbsWithTables = [];

  try {
    switch (dbType.toLowerCase()) {
      case 'mysql': {
        connection = await mysql.createConnection(connectionString);
        const [dbs] = await connection.query('SHOW DATABASES');
        
        for (const db of dbs) {
          const dbName = sanitizeIdentifier(db.Database);
          await connection.query(`USE \`${dbName}\``);
          const [tables] = await connection.query('SHOW TABLES');
          dbsWithTables.push({
            name: dbName,
            tables: tables.map(t => Object.values(t)[0]),
            type: 'mysql'
          });
        }
        break;
      }

      case 'postgresql': {
        connection = new Client({ connectionString });
        await connection.connect();
        
        const dbResult = await connection.query(`
          SELECT datname 
          FROM pg_database 
          WHERE datistemplate = false 
          AND datname NOT IN ('postgres', 'template0', 'template1')
        `);

        for (const db of dbResult.rows) {
          const dbName = sanitizeIdentifier(db.datname);
          const tableResult = await connection.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            AND table_type = 'BASE TABLE'
            AND table_catalog = $1
          `, [dbName]);

          dbsWithTables.push({
            name: dbName,
            tables: tableResult.rows.map(t => t.table_name),
            type: 'postgresql'
          });
        }
        break;
      }

      case 'mssql': {
        const pool = new sql.ConnectionPool(connectionString);
        await pool.connect();
        connection = pool.request();

        const dbsResult = await connection.query(`
          SELECT name
          FROM sys.databases
          WHERE database_id > 4
          AND state_desc = 'ONLINE'
          AND is_read_only = 0
        `);

        for (const db of dbsResult.recordset) {
          const dbName = sanitizeIdentifier(db.name);
          try {
            await connection.batch(`USE [${dbName}]`);
            const tablesResult = await connection.query(`
              SELECT TABLE_NAME
              FROM INFORMATION_SCHEMA.TABLES
              WHERE TABLE_TYPE = 'BASE TABLE'
            `);

            dbsWithTables.push({
              name: dbName,
              tables: tablesResult.recordset.map(t => t.TABLE_NAME),
              type: 'mssql'
            });
          } catch (err) {
            console.warn(`Could not access database ${dbName}: ${err.message}`);
          }
        }
        break;
      }

      default:
        return res.status(400).json({
          message: 'Bad request!',
          error: 'Unsupported database type. Supported types are: mysql, postgresql, mssql',
        });
    }

    return res.status(200).json({
      message: 'Connection successful',
      data: dbsWithTables
    });

  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({
      message: 'Error connecting to database',
      error: error.message,
      type: error.name,
    });

  } finally {
    try {
      if (connection) {
        switch (dbType.toLowerCase()) {
          case 'mysql':
            await connection.end();
            break;
          case 'postgresql':
            await connection.end();
            break;
          case 'mssql':
            await sql.close();
            break;
        }
      }
    } catch (cleanupError) {
      console.error('Error cleaning up connection:', cleanupError);
    }
  }
};

export { checkDbConnection, getFields };