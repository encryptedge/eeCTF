import { Context, Next } from "hono";

import { AUTH_PERMS } from "../extras/permissions";
import { authAdapter } from "../helpers/authAdapter";
import { UserService } from "../services/users.service";

const userService = new UserService();

export class AuthMiddleware {
    public authenticate = (state: number) => async (ctx: Context, next: Next) => {
        try {
            let token = ctx.req.raw.headers.get("Authorization");
            if(!token) {
                throw new Error("No token provided");
            }
            token = token.replace("Bearer ", "");
            const data = authAdapter.verify(token);
            if(state == AUTH_PERMS.ADMIN && !data.isAdmin) {
                throw new Error("User is not admin");
            } else if(state == AUTH_PERMS.TEAM_MEMBER) {
                const userTeamID = await userService.getTeamIDByUserID(data.id);
                if(!userTeamID) {
                    throw new Error("User not in team");
                }
                ctx.set("team_id", userTeamID);
            }
            ctx.set("user", data);
            return next();
        }
        catch (error: any) {
            switch (error.message) {
                case "No token provided": { return ctx.json({ status: 400, message: error.message }, 400); }
                case "invalid token": { return ctx.json({ status: 401, message: error.message }, 401); }
                case "User is not admin": { return ctx.json({ status: 403, message: error.message }, 403); }
                case "User not in team": { return ctx.json({ status: 403, message: error.message }, 403); }
                default: { return ctx.json({ status: 500, message: error.message }, 500); }
            }
        }
    };
}