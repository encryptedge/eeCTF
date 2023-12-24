import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { AUTH_PERMS } from "../extras/permissions";
import { StatsControtoller } from "../controllers/stats.controller";

export const statsRouter = new Hono();

const authMiddleware = new AuthMiddleware();
const statsController = new StatsControtoller();

statsRouter.get("/team", authMiddleware.authenticate(AUTH_PERMS.TEAM_MEMBER), statsController.getTeamScore);
statsRouter.get("/leaderboard", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), statsController.getAllTeamsScore);