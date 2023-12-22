import "dotenv/config";

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { compress } from "hono/compress";
import { logger } from "hono/logger";
import { showRoutes } from "hono/dev"
import { poweredBy } from "hono/powered-by";
import { secureHeaders } from "hono/secure-headers";
import { prettyJSON } from "hono/pretty-json";

import "./config/env";

import { hgqlInit } from "./helpers/gqlClient";
import { routes } from "./routes";

const app = new Hono();

hgqlInit();

app.use('*', logger())
app.use('*', poweredBy())
app.use('*', secureHeaders())
app.use('*', compress({
    encoding: "gzip",
}))
app.use('*', cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}))
app.use('*', prettyJSON(
    {
        space: 4,
    }
))

app.route("/", routes);

showRoutes(app);

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
    hostname: "0.0.0.0",
});

console.log("🚀","Server running at http://localhost:" + process.env.PORT);