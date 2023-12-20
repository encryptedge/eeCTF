import { z } from "zod";
declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof ZodEnvironmentVariables> {}
    }
}

const ZodEnvironmentVariables = z.object({
    PORT: z.string(),
    NODE_ENV: z.string(),
    HASURA_GRAPHQL_ADMIN_SECRET: z.string(),
    HASURA_GRAPHQL_ENDPOINT: z.string(),
    MAIL_HOST: z.string(),
    MAIL_PORT: z.string(),
    MAIL_USER: z.string(),
    MAIL_PASS: z.string(),
    MAIL_LOGGER: z.string(),
    MAIL_FROM_EMAIL: z.string(),
    MAIL_FROM_NAME: z.string(),
});

ZodEnvironmentVariables.parse(process.env);

console.log("✅ Environment variables verified!");