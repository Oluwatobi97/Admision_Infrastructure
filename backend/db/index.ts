import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const pool = new Pool({
    connectionString: "postgres://postgres:Password@localhost:5432/admission_portal",
});

export const database = drizzle(pool);
