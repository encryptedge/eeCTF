import { Hono } from "hono";

import { UserController } from "../controllers/users.controller";

export const userRoutes = new Hono();
const contoller = new UserController();

userRoutes.post("/register", contoller.registerUser);
userRoutes.post("/verify", contoller.verifyUser);