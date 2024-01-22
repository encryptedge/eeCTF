import { Hono } from "hono";

import { CTFTimeControtoller } from "../controllers/ctftime.controller";

export const ctftimeRouter = new Hono();

const statsController = new CTFTimeControtoller();

ctftimeRouter.get("/connect", statsController.generateAuthURL);
ctftimeRouter.get("/callback", statsController.retriveAccessToken);
ctftimeRouter.get("/whoami", statsController.retriveProfile);