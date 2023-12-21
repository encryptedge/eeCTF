import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { TeamController } from "../controllers/teams.controller";

export const teamRouter = new Hono();
const auth = new AuthMiddleware();
const controller = new TeamController();

teamRouter.post("/", auth.authenticate, controller.createTeam);
teamRouter.get("/", auth.authenticate, controller.getTeams);
teamRouter.get("/:teamId", auth.authenticate, controller.getTeamById);
teamRouter.post("/join", auth.authenticate, controller.joinTeam);