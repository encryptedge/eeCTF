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

interface ITeamJoinInput {
    join_code: string;
    user_id: string;
}