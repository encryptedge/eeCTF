import { Hono } from "hono";

import { challengeRouter } from "./challenges.routes";
import { statsRouter } from "./stats.routes";
import { teamRouter } from "./teams.routes";
import { userRoutes } from "./users.routes";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));

routes.route("/challenge", challengeRouter);
routes.route("/stats", statsRouter);
routes.route("/team", teamRouter);
routes.route("/user", userRoutes);

routes.get("/health", ctx => ctx.text("OK"));
routes.get("/flag.txt", ctx => ctx.text("flag{th1s_1s_n0t_th3_fl4g}"));
routes.get("*", ctx => ctx.text("Are you lost?"));