import { Context } from "hono";

import { TeamService } from "../services/teams.service";

export class TeamController extends TeamService {
    public createTeam = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.createTeamS(reqBody);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                error: error.message
            }, 500);
        }
    };

    public getTeamById = async (ctx: Context) => {
        try {
            const teamId = ctx.req.param("teamId");
            const data = await this.getTeamByIdS(teamId);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return error.message === "Team not found" ? ctx.json({status: 404, error: error.message}, 404) : ctx.json({status: 500, error: error.message}, 500);
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
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            switch (error.message) {
                case "Invalid join code": { return ctx.json({ status: 400, error: error.message }, 400); }
                case "Team is full": { return ctx.json({ status: 403, error: error.message }, 403); }
                default: { return ctx.json({ status: 500, error: error.message }, 500); }
            }
        }
    };



    public getTeams = async (ctx: Context) => {
        try {
            const data = await this.getTeamsS();
            return ctx.json({ status: 200, message: data });
        }
        catch (error: any) {
            return error.message === "No teams found" ? ctx.json({status: 404, error: error.message}, 404) : ctx.json({status: 500, error: error.message}, 500);
        }
    };

    public whoami = async (ctx: Context) => {
        try {
            const userTeamID = await ctx.get("team_id");
            const data = await this.whomaiS(userTeamID);
            return ctx.json({ status: 200, message: data });
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                error: error.message
            }, 500);
        }
    };

    public leaveTeam = async (ctx: Context) => {
        try {
            const user = ctx.get("user");
            const data = await this.leaveTeamS({
                user_id: user.id
            });
            return ctx.json({ status: 200, message: data });
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                error: error.message
            }, 500);
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
            return ctx.json({ status: 200, message: data });
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                error: error.message
            }, 500);
        }
    };
}