import { Context } from "hono";

import { StatsService } from "../services/stats.service";

export class StatsControtoller extends StatsService {
    public getTeamScore = async (ctx: Context) => {
        try {
            const teamId = ctx.get("team_id");
            const data = await this.getTeamScoreS(teamId);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public getAllTeamsScore = async (ctx: Context) => {
        try {
            const data = await this.getAllTeamScoreS();
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    }
}