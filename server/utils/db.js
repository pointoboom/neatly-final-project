import * as pg from "pg";
const { Pool } = pg.default;
import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DB_KEY,
});

// const pool = new Pool({
//   connectionString: "postgresql://postgres:postgres@localhost:5432/project",
// });

export { pool };
