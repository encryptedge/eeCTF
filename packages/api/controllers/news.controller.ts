import { Context } from "hono";

import { NewsService } from "../services/news.service";

export class NewsController extends NewsService {
    public getNews = async (ctx: Context) => {
        try {
            const data = await this.getNewsS();
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                message: error.message
            }, 500);
        }
    };

    public addNews = async (ctx: Context) => {
        try {
            const { msg } = await ctx.req.json();
            if (!msg) {
                return ctx.json({
                    status: 400,
                    message: "No message provided"
                }, 400);
            }
            const data = await this.addNewsS(msg);
            return ctx.json({
                status: 201,
                message: data
            }, 201);
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                message: error.message
            }, 500);
        }
    };
}