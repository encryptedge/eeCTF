import { Context } from "hono";

import { StatsService } from "../services/stats.service";

export class StatsControtoller extends StatsService {
    public getTeamScore = async (ctx: Context) => {
        try {
            const teamId = ctx.get("team_id");
            const data = await this.getTeamScoreS(teamId);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return error.message === "No team scores found" ? ctx.json({
                    status: 404,
                    error: error.message
                }, 404) : ctx.json({
                    status: 500,
                    error: error.message
                }, 500);
        }
    };

    public getAllTeamsScore = async (ctx: Context) => {
        try {
            const data = await this.getAllTeamScoreS();
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return error.message === "No team scores found" ? ctx.json({
                    status: 404,
                    error: error.message
                }, 404) : ctx.json({
                    status: 500,
                    error: error.message
                }, 500);
        }
    };
}