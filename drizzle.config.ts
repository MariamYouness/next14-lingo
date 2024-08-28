import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql", // Ensure this matches what `drizzle-kit` expects
    // Ensure this matches what `drizzle-kit` expects
    dbCredentials: {
        url: process.env.DATABASE_URL!, // Use `url` if that's what `drizzle-kit` requires
    },
};

export default config;
