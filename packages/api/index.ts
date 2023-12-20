import "dotenv/config";

import { serve } from "@hono/node-server";
import { Hono } from "hono";

import "./config/env";

import { hgqlInit } from "./helpers/gqlClient";
import { routes } from "./routes";

const app = new Hono();

hgqlInit();

app.route("/", routes);

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
    hostname: "0.0.0.0",
});

console.log("Server running at http://localhost:" + process.env.PORT);