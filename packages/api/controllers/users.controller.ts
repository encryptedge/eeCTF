import { Context } from "hono";

import { UserService } from "../services/users.service";

export class UserController extends UserService {
    public registerUser = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.registerUserS(reqBody);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public verifyUser = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.verifyUserS(reqBody);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public loginUser = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.loginUserS(reqBody);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public whoami = async (ctx: Context) => {
        try {
            const data = await this.whoamiS(ctx);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    }
}