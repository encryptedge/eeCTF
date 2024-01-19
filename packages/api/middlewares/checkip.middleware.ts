import { Context, Next } from "hono";
// import { cache_client } from "../extras/cache";

export class CheckIPMiddleware {
    public checkIP = async (ctx: Context, next: Next) => {
        try {
            const ip = ctx.req.raw.headers.get("x-real-ip");
            console.log(ip);
            return next();
        }
        catch (error: any) {
            return ctx.json({
                status: 403,
                message: error.message
            }, 403);
        }
    };
}