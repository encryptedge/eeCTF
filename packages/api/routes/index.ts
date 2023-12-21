import { Hono } from "hono";

import { userRoutes } from "./users.routes";
import { teamRouter } from "./teams.routes";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));

routes.route("/user", userRoutes);
routes.route("/team", teamRouter);