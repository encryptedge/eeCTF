import { Context } from "hono";
import { TeamService } from "../services/teams.service";

export class TeamController extends TeamService {
    public createTeam = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.createTeamS(reqBody);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public getTeamById = async (ctx: Context) => {
        try {
            const teamId = ctx.req.param("teamId");
            const data = await this.getTeamByIdS(teamId);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public joinTeam = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const user = ctx.get("user");
            const data = await this.joinTeamS({
                join_code: reqBody.join_code,
                user_id: user.id
            });
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    }



    public getTeams = async (ctx: Context) => {
        try {
            const data = await this.getTeamsS();
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    }
}