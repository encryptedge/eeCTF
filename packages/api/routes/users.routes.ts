import { Hono } from "hono";

import { UserController } from "../controllers/users.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { AUTH_PERMS } from "../extras/permissions";

export const userRoutes = new Hono();
const contoller = new UserController();
const auth = new AuthMiddleware();

userRoutes.post("/register", contoller.registerUser);
userRoutes.post("/verify", contoller.verifyUser);
userRoutes.post("/login", contoller.loginUser);
userRoutes.get("/whoami", auth.authenticate(AUTH_PERMS.AUTHENTICATED), contoller.whoami);