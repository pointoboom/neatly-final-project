// Creating PostgreSQL Client here
import * as pg from "pg";
const { Pool } = pg.default;
const pool = new Pool({
  
  connectionString:
    "postgres://vkhwmske:o-XPZ9RddpFJHaVzfG3jBn2ROvHPAS1y@tiny.db.elephantsql.com/vkhwmske",
});

export { pool };
