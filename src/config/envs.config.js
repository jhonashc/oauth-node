import { envsSchema } from "../schemas/envs.schema.js";

const envServer = envsSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  OAUTH_ENDPOINT: process.env.OAUTH_ENDPOINT,
  CONSUMER_KEY: process.env.CONSUMER_KEY,
  CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  TOKEN_KEY: process.env.TOKEN_KEY,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  REALM: process.env.REALM,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  process.exit(1);
}

export const envs = envServer.data;
