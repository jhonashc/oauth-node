import z from "zod";

export const envsSchema = z.object({
  PORT: z.string(),
  OAUTH_ENDPOINT: z.string().url(),
  CONSUMER_KEY: z.string(),
  CONSUMER_SECRET: z.string(),
  TOKEN_KEY: z.string(),
  TOKEN_SECRET: z.string(),
});
