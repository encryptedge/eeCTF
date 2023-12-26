import { Hono } from "hono";

import { StatsControtoller } from "../controllers/stats.controller";
import { AUTH_PERMS } from "../extras/permissions";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export const statsRouter = new Hono();

const authMiddleware = new AuthMiddleware();
const statsController = new StatsControtoller();

statsRouter.get("/team", authMiddleware.authenticate(AUTH_PERMS.TEAM_MEMBER), statsController.getTeamScore);
statsRouter.get("/leaderboard", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), statsController.getAllTeamsScore);