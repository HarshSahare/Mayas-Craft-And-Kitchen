import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4000),
  DATABASE_URL: z.string().min(1, "Database Url is required"),
});

export const env = envSchema.parse(process.env);
