import { Context } from "hono";
import { ChallengeService } from "../services/challenges.service";
import { UserService } from "../services/users.service";

export class ChallengeController extends ChallengeService {
    public createMachine = async (ctx: Context) => {
        try {
            const reqBody = await ctx.req.json();
            const data = await this.createMachineS(reqBody);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public getMachineById = async (ctx: Context) => {
        try {
            const machineId = ctx.req.param("machineId");
            const data = await this.getMachineByIdS(machineId);
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    };

    public getMachines = async (ctx: Context) => {
        try {
            const data = await this.getMachinesS();
            return ctx.json(data);
        }
        catch (error: any) {
            return ctx.json({
                error: error.message
            });
        }
    }

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
            return ctx.json(data);
        }
        catch (error: any) {
            if(error.response) {
                return ctx.json({
                    error: error.response.errors[0].message
                });
            }
            else
                return ctx.json({
                    error: error.message
                });
        }
    }
}