import { Hono } from "hono";

import { ctftimeRouter } from "./ctftime.routes";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));

routes.route("/ctftime", ctftimeRouter);

routes.get("/health", ctx => ctx.text("OK", 200));
routes.get("/flag.txt", ctx => ctx.text("flag{th1s_1s_n0t_th3_fl4g}", 418));
routes.get("*", ctx => ctx.text("Are you lost, baby gurl?", 404));