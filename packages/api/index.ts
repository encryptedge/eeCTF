import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { routes } from "./routes";

const app = new Hono();

app.route("/", routes);

serve({
    fetch: app.fetch,
    port: 3000,
    hostname: "0.0.0.0",
});

console.log("Server running at http://localhost:3000");