import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 🔍 Check connection
pool.connect()
  .then(client => {
    console.info('✅ PostgreSQL connected successfully');
    client.release(); // release back to pool
  })
  .catch(err => {
    console.error('❌ PostgreSQL connection error:', err.stack);
  });

export default pool;
