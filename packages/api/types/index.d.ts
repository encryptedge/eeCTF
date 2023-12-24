interface PaginationType {
    page: number;
    limit: number;
    sort_order?: "asc" | "desc";
    sort_by?: string;
    filters?: { [k: string]: any };
}

interface IUserRegisterInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface IUserLoginInput {
    email: string;
    password: string;
}

interface IUserVerifyInput {
    otp: string;
}

interface ITeamCreateInput {
    team_name: string;
    join_code: string;
}

interface ITeamEditInput {
    id: string;
    team_name: string;
    join_code: string;
}

interface ITeamLeaveInput {
    user_id: string;
}

interface ITeamJoinInput {
    join_code: string;
    user_id: string;
}

interface IChallengeCreateInput {
    name: string;
    description: string;
    flag: string;
    point: number;
    stage: number;
}

interface IMachineCreateInput {
    name: string;
    description: string;
    tags: string;
    created_by: string;
    challenges: IChallengeCreateInput[];
}

interface IMachineSubmitFlagInput {
    team_id: string;
    user_id: string;
    challenge_id: string;
    submited_flag: string;
}

interface IJWTPayload {
    id: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
}

interface IParedMachineProgress {
    id: string;
    name: string;
    description: string;
    challenges?: IParsedChallengeProgress[];
}

interface IParsedChallengeProgress {
    id: string;
    name: string;
    point: number;
    description: string;
    solved: boolean;
}

interface IStatSubmissions {
    id: string;
    challenge_id: string
    challenge_name: string;
    machine_id: string
    machine_name: string;
    submited_flag: string;
}

interface IStatsLeaderboard {
    rank: number;
    team_id: string;
    team_name: string;
    score: number;
}

interface ITeamStats {
    team_id: string;
    team_name: string;
    score: number;
    submissions: IStatSubmissions[];
}