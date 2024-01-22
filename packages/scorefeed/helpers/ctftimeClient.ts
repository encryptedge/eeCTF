import axios from "axios";

export class CTFTimeClient {
    private readonly baseURL: string = "https://oauth.ctftime.org";
    private readonly axiosInstance = axios.create({
        baseURL: this.baseURL,
        timeout: 10_000,
        headers: {
            "Content-Type": "application/json"
        }
    });

    public async getAuthURL() {
        try {
            const urlparams = new URLSearchParams();
            urlparams.append("client_id", process.env.CTFTIME_CLIENT_ID ?? "");
            urlparams.append("redirect_uri", process.env.CTFTIME_REDIRECT_URI ?? "");
            urlparams.append("response_type", "code");
            urlparams.append("scope", "profile");
            urlparams.append("state", "eeCTF");
            return `${this.baseURL}/authorize?${urlparams.toString()}`;
        } catch (error) {
            if(error instanceof Error) {
                throw new TypeError(error.message);
            }
        }
    }

    public async getAccessToken(code: string) {
        try {
            const { data } = await this.axiosInstance.post(
                `/token?client_id=${process.env.CTFTIME_CLIENT_ID}&client_secret=${process.env.CTFTIME_CLIENT_SECRET}&code=${code}`,
                {
                    grant_type: "authorization_code",
                    redirect_uri: process.env.CTFTIME_REDIRECT_URI,
                }
            );
            return data;
        } catch (error: any) {
            console.log(error);
            if(error instanceof Error) {
                throw new TypeError(error.message);
            }
        }
    }

    public async getProfile(access_token: string) {
        try {
            const res = await this.axiosInstance.get("/user", {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return res.data;
        } catch (error) {
            if(error instanceof Error) {
                throw new TypeError(error.message);
            }
        }
    }
}