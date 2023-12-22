import { Hono } from "hono";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ChallengeController } from "../controllers/challenges.controller";

export const challengeRouter = new Hono();
const authMiddleware = new AuthMiddleware();
const challengeController = new ChallengeController();

challengeRouter.post("/machine", authMiddleware.authenticate, challengeController.createMachine);
challengeRouter.get("/machine/:machineId", authMiddleware.authenticate, challengeController.getMachineById);
challengeRouter.get("/machines", authMiddleware.authenticate, challengeController.getMachines);
challengeRouter.put("/submit/:challengeId", authMiddleware.authenticate, challengeController.sumbitFlag);