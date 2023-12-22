import crypto from "node:crypto";

import { gql } from "graphql-request";
import { SnowflakeId } from "hyperflake";

import { Mutation_Root, Users_Insert_Input } from "../graphql/types";
import { client } from "../helpers/gqlClient";
import sendmail from "../helpers/mailer";
import { genOTP } from "../libs";
import { authAdapter } from "../helpers/authAdapter";

export class UserService {
    public registerUserS = async (userRegisterInput: IUserRegisterInput) => {
        try {
            const { email, password, firstName, lastName } = userRegisterInput;

            if(!email || !password || !firstName || !lastName) {
                throw new Error("Invalid input");
            }

            const salt = crypto.randomBytes(16).toString("hex");
            const hash = crypto
                    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
                    .toString("hex");
            const query = gql`
            mutation registerUser($variables: users_insert_input!) {
                insert_users_one(object: $variables) {
                    id
                    first_name
                    last_name
                    email
                    is_admin
                }
            }
            `;

            const variables: Users_Insert_Input = {
                email,
                first_name: firstName,
                last_name: lastName,
                email_verification_code: genOTP(),
                hash,
                salt,
                is_admin: false,
                id: SnowflakeId().generate()
            };

            const data: Mutation_Root = await client.request(query, {
                variables
            });

            if(data.insert_users_one) {
                if(data.insert_users_one){
                    sendmail({
                        to: email,
                        subject: "Email Verification",
                        text: `Your email verification code is ${variables.email_verification_code}`,
                        html: `<p>Your email verification code is <b>${variables.email_verification_code}</b></p>`
                    });
                    return data.insert_users_one;
                }
                else {
                    throw new Error("Something went wrong");
                }
            } else {
                throw new Error("Something went wrong");
            }
        }
        catch (error: any) {
            let errMsg : string = error.response.errors[0].message;
            if(errMsg.includes("duplicate")) {
                errMsg = "Email already exists";
            }
            else {
                errMsg = "Something went wrong";
            }
            throw new Error(errMsg);
        }
    };

    public verifyUserS = async (userVerifyInput: IUserVerifyInput) => {
        try {
            const { otp } = userVerifyInput;
            const query = gql`
            mutation verifyUser($otp: String!) {
                update_users(where: {email_verification_code: {_eq: $otp}}, _set: {is_email_verified: true}) {
                    affected_rows
                }
            }
            `;

            const data: Mutation_Root = await client.request(query, {
                otp
            });

            if(data.update_users?.affected_rows) {
                return {
                    message: "User verified successfully"
                };
            }
            else {
                throw new Error("Invalid OTP");
            }
        }
        catch (error: any) {
            throw new Error(error.response.errors[0].message);
        }        
    };

    public loginUserS = async (userLoginInput: IUserLoginInput) => {
        try {
            const { email, password } = userLoginInput;
            const query = gql`
            query loginUser($email: String!) {
                users(where: {email: {_eq: $email}}) {
                    id
                    first_name
                    last_name
                    email
                    is_admin
                    hash
                    salt
                    is_email_verified
                }
            }
            `;

            const data: any = await client.request(query, {
                email
            });

            if(data.users.length) {
                const user = data.users[0];

                const isEmailVerified = user.is_email_verified;

                if(!isEmailVerified) {
                    throw new Error("Email not verified");
                }

                const hash = crypto
                    .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
                    .toString("hex");

                if(hash === user.hash) {
                    return {
                        message: "Login successful",
                        token: authAdapter.sign({
                            id: user.id,
                            isAdmin: user.is_admin
                        })
                    };
                }
                else {
                    throw new Error("Invalid credentials");
                }
            }
            else {
                throw new Error("Invalid credentials");
            }
        }
        catch (error: any) {
            if(error.response){
                throw new Error(error.response.errors[0].message);
            }
            else
                throw new Error(error.message);
        }        
    };

    public whoamiS = async (ctx: any) => {
        try {
            const user = ctx.get("user");
            const query = gql`
            query whoami($id: String!) {
                users_by_pk(id: $id) {
                    id
                    first_name
                    last_name
                    email
                    is_admin

                    team {
                        id
                        name
                    }

                    scores {
                        id
                        challenge {
                            id
                            point
                            name
                            machine {
                                id
                                name
                            }
                        }
                    }

                    submissions {
                        id
                        submited_flag
                        challenge {
                            id
                            point
                            name
                            machine {
                                id
                                name
                            }
                        }
                    }
                }
            }
            `;

            const data: any = await client.request(query, {
                id: user.id
            });

            if(data.users_by_pk) {
                return data.users_by_pk;
            }
            else {
                throw new Error("User not found");
            }
        }
        catch (error: any) {
            if(error.response) {
                throw new Error(error.response.errors[0].message);
            }
            else
                throw new Error(error.message);
        }        
    };

    public getTeamIDByUserID = async (userID: string) : Promise<string> => {
        try {
            const query = gql`
            query getTeamIDByUserID($userID: String!) {
                users_by_pk(id: $userID) {
                    team_id
                }
            }
            `;

            const data: any = await client.request(query, {
                userID
            });

            if(data.users_by_pk) {
                return data.users_by_pk.team_id;
            }
            else {
                throw new Error("User not found");
            }
        }
        catch (error: any) {
            if(error.response) {
                throw new Error(error.response.errors[0].message);
            }
            else
                throw new Error(error.message);
        }
    }
}