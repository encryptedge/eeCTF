import { Context } from "hono";

import { ChallengeService } from "../services/challenges.service";

export class ChallengeController extends ChallengeService {
    public createMachine = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.createMachineS(reqBody);
            return ctx.json({
                status: 201,
                message: data
            }, 201);
        }
        catch (error: any) {
            return ctx.json({
                status: 500,
                error: error.message
            }, 500);
        }
    };

    public getMachineById = async (ctx: Context) => {
        try {
            const machineId = ctx.req.param("machineId");
            const data = await this.getMachineByIdS(machineId);
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            return ctx.json({
                status: 404,
                error: error.message
            }, 404);
        }
    };

    public getMachines = async (ctx: Context) => {
        try {
            const data = await this.getMachinesS();
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

    public getProgress = async (ctx: Context) => {
        try {
            const userTeamID = await ctx.get("team_id");
            const data = await this.getTeamProgressS(userTeamID);
            return ctx.json({
                status: 200,
                message: data
            
            });
        }
        catch (error: any) {
            return error.message === "No data found" ? ctx.json({
                    status: 404,
                    error: error.message
                }, 404) : ctx.json({
                    status: 500,
                    error: error.message
                }, 500);
        }
    };

    public sumbitFlag = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const challengeId = ctx.req.param("challengeId");
            const user = ctx.get("user");
            const userTeamID = ctx.get("team_id");
            if(!userTeamID) {
                throw new Error("User not in team");
            }
            const data = await this.submitFlagS({
                submited_flag: reqBody.flag,
                user_id: user.id,
                team_id: userTeamID,
                challenge_id: challengeId
            });
            return ctx.json({
                status: 200,
                message: data
            });
        }
        catch (error: any) {
            switch (error.message) {
                case "Wrong flag": {
                    return ctx.json({
                        status: 418,
                        error: error.message
                    }, 418);
                }
                case "User not in team": {
                    return ctx.json({
                        status: 403,
                        error: error.message
                    }, 403);
                }
                case "Failed to find challenge": {
                    return ctx.json({
                        status: 404,
                        error: error.message
                    }, 404);
                }
                case "Invalid request body": {
                    return ctx.json({
                        status: 400,
                        error: error.message
                    }, 400);
                }
                case "Already solved": {
                    return ctx.json({
                        status: 304,
                        error: error.message
                    }, 304);
                }
                default: {
                    return ctx.json({
                        status: 500,
                        error: error.message
                    }, 500);
                }
            }
        }
    };
}