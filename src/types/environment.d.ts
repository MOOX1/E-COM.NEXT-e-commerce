// Set the typing of your environment variables here 👇
type MyVariables = {
  // API
  NEXT_PUBLIC_SECRET: string;
  API_SECRET_KEY: string;

  // EMAIL
  EMAIL_SERVER_PORT: string;
  EMAIL_FROM: string;
  EMAIL_SERVER_USER: string;
  EMAIL_SERVER_PASSWORD: string;
  EMAIL_SERVER_HOST: string;

  // UPSTASH REDIS
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;

  // GOOGLE
  GOOGLE_CLIENT_ID: string;

  // NEXT AUTH
  NEXTAUTH_SECRET: string;
  NEXTAUTH_URL: string;

  // MONGODB
  MONGODB_URI: string;
};

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends MyVariables {}
  }
}

export {};
