import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ChallengeController } from "../controllers/challenges.controller";
import { AUTH_PERMS } from "../extras/permissions";

export const challengeRouter = new Hono();
const authMiddleware = new AuthMiddleware();
const challengeController = new ChallengeController();

challengeRouter.post("/manage/machine", authMiddleware.authenticate(AUTH_PERMS.ADMIN), challengeController.createMachine);
challengeRouter.get("/manage/machine/:machineId", authMiddleware.authenticate(AUTH_PERMS.ADMIN), challengeController.getMachineById);
challengeRouter.get("/manage/machines", authMiddleware.authenticate(AUTH_PERMS.ADMIN), challengeController.getMachines);
challengeRouter.put("/submit/:challengeId", authMiddleware.authenticate(AUTH_PERMS.TEAM_MEMBER), challengeController.sumbitFlag);