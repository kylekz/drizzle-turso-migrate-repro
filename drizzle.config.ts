import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "turso",
  schema: "schema.ts",
  out: "./migrations",
  verbose: true,
  breakpoints: true,
  strict: true,
  casing: "snake_case",
  dbCredentials: {
    url: process.env.DB_URL,
    authToken: process.env.DB_TOKEN,
  },
});
