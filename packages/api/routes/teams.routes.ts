import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { TeamController } from "../controllers/teams.controller";
import { AUTH_PERMS } from "../extras/permissions";

export const teamRouter = new Hono();
const auth = new AuthMiddleware();
const controller = new TeamController();

teamRouter.post("/", auth.authenticate(AUTH_PERMS.AUTHENTICATED), controller.createTeam);
teamRouter.get("/", auth.authenticate(AUTH_PERMS.AUTHENTICATED), controller.getTeams);
teamRouter.get("/whoami", auth.authenticate(AUTH_PERMS.TEAM_MEMBER), controller.whoami);
teamRouter.get("/progress", auth.authenticate(AUTH_PERMS.TEAM_MEMBER), controller.getProgress);
teamRouter.get("/:teamId", auth.authenticate(AUTH_PERMS.AUTHENTICATED), controller.getTeamById);
teamRouter.post("/join", auth.authenticate(AUTH_PERMS.AUTHENTICATED), controller.joinTeam);