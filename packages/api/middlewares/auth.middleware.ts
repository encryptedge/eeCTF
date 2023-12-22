import { Context, Next } from "hono";
import { authAdapter } from "../helpers/authAdapter";
import { AUTH_PERMS } from "../extras/permissions";
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
            return ctx.json({
                error: error.message
            });
        }
    };
}