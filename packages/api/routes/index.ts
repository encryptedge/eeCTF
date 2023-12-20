import { Hono } from "hono";

import { userRoutes } from "./users.routes";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));
routes.route("/user", userRoutes);