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
    };



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
    };

    public whoami = async (ctx: Context) => {
        try {
            const userTeamID = await ctx.get("team_id");
            const data = await this.whomaiS(userTeamID);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public leaveTeam = async (ctx: Context) => {
        try {
            const user = ctx.get("user");
            const data = await this.leaveTeamS({
                user_id: user.id
            });
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public editTeam = async (ctx: Context) => {
        try {
            const userTeamID = await ctx.get("team_id");
            const reqBody = await ctx.req.json();
            const data = await this.EditTeamInfo({
                id: userTeamID,
                team_name: reqBody.team_name,
                join_code: reqBody.join_code
            });
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };
}