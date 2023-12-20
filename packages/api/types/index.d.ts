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