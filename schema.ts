import { text } from "drizzle-orm/pg-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
});
