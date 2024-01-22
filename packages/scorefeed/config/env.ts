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
    CTFTIME_REDIRECT_URI: z.string(),
    CTFTIME_CLIENT_ID: z.string(),
    CTFTIME_CLIENT_SECRET: z.string(),
});

ZodEnvironmentVariables.parse(process.env);

console.log("✅ Environment variables verified!");