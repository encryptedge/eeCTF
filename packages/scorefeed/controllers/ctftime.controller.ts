import { Context } from "hono";

import { CTFTimeClient } from "../helpers/ctftimeClient";

export class CTFTimeControtoller extends CTFTimeClient {
    public generateAuthURL = async (ctx: Context) => {
        try {
            const authURL = await this.getAuthURL();
            return ctx.redirect(authURL as string);
        }
        catch {
            return ctx.json({
                    status: 500,
                    message: "Something went wrong, come to us :)"
                }, 500);
        }
    };

    public retriveAccessToken = async (ctx: Context) => {
        try {
            const { code } = ctx.req.query();
            if(!code) {
                return ctx.json({
                    status: 400,
                    message: "Bad Request"
                }, 400);
            }
            const data = await this.getAccessToken(code);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch(error: any) {
            console.log(error);
            return ctx.json({
                    status: 500,
                    message: "Something went wrong, come to us :)"
                }, 500);
        }
    };

    public retriveProfile = async (ctx: Context) => {
        try {
            const { access_token } = ctx.req.query();
            if(!access_token) {
                return ctx.json({
                    status: 400,
                    message: "Bad Request"
                }, 400);
            }
            const data = await this.getProfile(access_token);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch {
            return ctx.json({
                    status: 500,
                    message: "Something went wrong, come to us :)"
                }, 500);
        }
    };
}