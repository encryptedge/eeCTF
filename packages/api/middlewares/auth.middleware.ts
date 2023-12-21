import { Context, Next } from "hono";
import { authAdapter } from "../helpers/authAdapter";

export class AuthMiddleware {
    public authenticate = async (ctx: Context, next: Next) => {
        try {
            let token = ctx.req.raw.headers.get("Authorization");
            if(!token) {
                throw new Error("No token provided");
            }
            token = token.replace("Bearer ", "");
            const data = await authAdapter.verify(token);
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