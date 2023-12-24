import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { TeamController } from "../controllers/teams.controller";
import { AUTH_PERMS } from "../extras/permissions";

export const teamRouter = new Hono();
const authMiddleware = new AuthMiddleware();
const teamController = new TeamController();

teamRouter.post("/", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), teamController.createTeam);
teamRouter.get("/", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), teamController.getTeams);
teamRouter.get("/whoami", authMiddleware.authenticate(AUTH_PERMS.TEAM_MEMBER), teamController.whoami);
teamRouter.put("/edit", authMiddleware.authenticate(AUTH_PERMS.TEAM_MEMBER), teamController.editTeam);
teamRouter.get("/i/:teamId", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), teamController.getTeamById);
teamRouter.post("/join", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), teamController.joinTeam);