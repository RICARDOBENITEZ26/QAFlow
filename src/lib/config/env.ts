import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  DIRECT_URL: z.string().url().optional(),
  AUTH_SECRET: z.string().optional(),
  AUTH_TRUST_HOST: z
    .string()
    .optional()
    .transform((value) => value === "true"),
  AUTH_GITHUB_ID: z.string().optional(),
  AUTH_GITHUB_SECRET: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);
