import { Hono } from "hono";

import { NewsController } from "../controllers/news.controller";
import { AUTH_PERMS } from "../extras/permissions";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export const newsRouter = new Hono();
const authMiddleware = new AuthMiddleware();

const newsController = new NewsController();

newsRouter.get("/", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), newsController.getNews);
newsRouter.post("/", authMiddleware.authenticate(AUTH_PERMS.ADMIN), newsController.addNews);