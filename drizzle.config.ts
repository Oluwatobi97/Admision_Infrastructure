import type { Config } from "drizzle-kit";

export default {
    schema: "./backend/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgres://postgres:Password@localhost:5432/admission_portal",
    },
} satisfies Config;
