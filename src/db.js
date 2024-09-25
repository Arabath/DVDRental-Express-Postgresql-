// import pkg from 'pg';
// const { Pool } = pkg;

import pg from 'pg';

export const pool = new pg.Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'dvdrental'
});

// export default pool;