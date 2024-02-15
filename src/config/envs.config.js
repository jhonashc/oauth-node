import z from "zod";

const envSchema = z.object({
  PORT: z.string(),
  OAUTH_ENDPOINT: z.string().url(),
  CONSUMER_KEY: z.string(),
  CONSUMER_SECRET: z.string(),
  TOKEN_KEY: z.string(),
  TOKEN_SECRET: z.string(),
});

const envServer = envSchema.safeParse({
  PORT: process.env.PORT,
  OAUTH_ENDPOINT: process.env.OAUTH_ENDPOINT,
  CONSUMER_KEY: process.env.CONSUMER_KEY,
  CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  TOKEN_KEY: process.env.TOKEN_KEY,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  process.exit(1);
}

export const envs = envServer.data;
