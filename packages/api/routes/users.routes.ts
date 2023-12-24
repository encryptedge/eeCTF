import { Hono } from "hono";

import { UserController } from "../controllers/users.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { AUTH_PERMS } from "../extras/permissions";

export const userRoutes = new Hono();
const userContoller = new UserController();
const authMiddleware = new AuthMiddleware();

userRoutes.post("/register", userContoller.registerUser);
userRoutes.post("/verify", userContoller.verifyUser);
userRoutes.post("/login", userContoller.loginUser);
userRoutes.get("/whoami", authMiddleware.authenticate(AUTH_PERMS.AUTHENTICATED), userContoller.whoami);