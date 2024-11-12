import { migrate } from "drizzle-orm/libsql/migrator";
import { drizzle } from "drizzle-orm/libsql/node";
import * as schema from "./schema";
import "dotenv/config";

console.log("Migrating seed database...");

const db = drizzle({
  connection: {
    url: process.env.DB_URL,
    authToken: process.env.DB_TOKEN,
  },
  casing: "snake_case",
  schema,
});

(async () => {
  await migrate(db, {
    migrationsFolder: "./migrations",
  });

  console.log("Tenant schema migrated.");
})();
