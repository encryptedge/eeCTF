import { Hono } from "hono";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));