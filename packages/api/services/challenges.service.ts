import { SnowflakeId } from "hyperflake";
import { Challenges_Insert_Input, Machines_Insert_Input, Mutation_Root, Query_Root } from "../graphql/types";
import { gql } from "graphql-request";
import { client } from "../helpers/gqlClient";

const snowflake = SnowflakeId();

export class ChallengeService {
    public createMachineS = async (reqBody: IMachineCreateInput) => {
        try {
            const { name, description, tags, challenges, created_by } = reqBody;

            if (!name || !description || !tags || !challenges) {
                throw new Error("Invalid request body");
            }

            const machineInput : Machines_Insert_Input = {
                id: snowflake.generate(),
                name,
                description,
                created_by,
                tags,
            }

            const query = gql`
                mutation createMachine($machineInput: machines_insert_input!) {
                    insert_machines_one(object: $machineInput) {
                        id
                        name
                        description
                        tags
                    }
                }
            `;

            const { insert_machines_one } : Mutation_Root = await client.request(query, {
                machineInput,
            });

            if(!insert_machines_one){
                throw new Error("Failed to create machine");
            }

            let challengeInput : Challenges_Insert_Input[] = [];
            
            for (const element of challenges) {
                const id = snowflake.generate();
                const { name, description, flag, point, stage } = element;
                if (!name || !description || !flag || !point || !stage) {
                    throw new Error("Invalid request body");
                }
                challengeInput.push({
                    id,
                    machine_id: insert_machines_one.id,
                    name,
                    description,
                    flag,
                    point,
                    stage,
                })
                setTimeout(() => { }, 100000);
            };

            const query2 = gql`
                mutation createChallenge($challengeInput: [challenges_insert_input!]!) {
                    insert_challenges(objects: $challengeInput) {
                        returning {
                            id
                            name
                            description
                            flag
                            point
                            stage
                        }
                    }
                }
            `;

            const { insert_challenges } : Mutation_Root = await client.request(query2, {
                challengeInput,
            });

            if(!insert_challenges){
                throw new Error("Failed to create challenges");
            } else if(insert_challenges.returning.length !== challengeInput.length){
                throw new Error("Failed to create all challenges");
            } else {
                return {
                    machine: insert_machines_one,
                    challenges: insert_challenges.returning,
                }
            }
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    
    public getMachineByIdS = async (machineId: string) => {
        try {
            const query = gql`
                query getMachineById($machineId: String!) {
                    machines_by_pk(id: $machineId) {
                        id
                        name
                        description
                        tags
                        challenges {
                            id
                            name
                            description
                            flag
                            point
                            stage
                        }
                    }
                }
            `;

            const { machines_by_pk } : Query_Root = await client.request(query, {
                machineId,
            });

            if(!machines_by_pk){
                throw new Error("Machine not found");
            }

            return machines_by_pk;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getMachinesS = async () => {
        try {
            const query = gql`
                query getMachines {
                    machines {
                        id
                        name
                        description
                        tags
                        challenges {
                            id
                            name
                            description
                            flag
                            point
                            stage
                        }
                    }
                }
            `;

            const { machines } : Query_Root = await client.request(query);

            return machines;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    public submitFlagS = async (reqBody: IMachineSubmitFlagInput) => {
        try {
            const { challenge_id, submited_flag, team_id, user_id } = reqBody;

            if (!challenge_id || !submited_flag || !team_id || !user_id) {
                throw new Error("Invalid request body");
            }

            const queryPreCheck = gql`
                query checkScore($challenge_id: String!, $user_id: String!) {
                    scores(where: {challenge_id: {_eq: $challenge_id}, user_id: {_eq: $user_id}}) {
                        id
                    }
                }
            `;

            const { scores } : Query_Root = await client.request(queryPreCheck, {
                challenge_id,
                user_id,
            });

            if(scores.length > 0){
                throw new Error("Already solved");
            }

            const query = gql`
                query getChallengeById($challenge_id: String!) {
                    challenges_by_pk(id: $challenge_id) {
                        id
                        flag
                        point
                    }
                }
            `;

            const { challenges_by_pk } : Query_Root = await client.request(query, {
                challenge_id,
            });

            if(!challenges_by_pk){
                throw new Error("Failed to find challenge");
            }

            const query2 = gql`
                mutation createSubmission($submission_id: String!, $challenge_id: String!, $submited_flag: String!, $user_id: String!) {
                    insert_submissions_one(object: { challenge_id: $challenge_id, submited_flag: $submited_flag, id: $submission_id, user_id: $user_id}) {
                        id
                        challenge_id
                        submited_flag
                    }
                }
            `;

            const { insert_submissions_one } : Mutation_Root = await client.request(query2, {
                submission_id: snowflake.generate(),
                challenge_id,
                submited_flag,
                user_id,
            });

            if(!insert_submissions_one){
                throw new Error("Failed to submit flag");
            }

            if(challenges_by_pk.flag !== submited_flag){
                throw new Error("Wrong flag");
            }

            const query3 = gql`
                mutation createScore($score_id: String!, $team_id: String!, $user_id: String!, $submission_id: String!, $challenge_id: String!) {
                    insert_scores_one(object: { team_id: $team_id, user_id: $user_id, id: $score_id, submission_id: $submission_id, challenge_id: $challenge_id}) {
                        id
                        team_id
                        user_id
                    }
                }
            `;

            const { insert_scores_one } : Mutation_Root = await client.request(query3, {
                score_id: snowflake.generate(),
                team_id,
                user_id,
                submission_id: insert_submissions_one.id,
                challenge_id
            });

            if(!insert_scores_one){
                throw new Error("Failed to submit score");
            }

            return {
                message: "GG!"
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