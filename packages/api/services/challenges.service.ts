import { gql } from "graphql-request";
import { SnowflakeId } from "hyperflake";

import { Challenges_Insert_Input, Machines_Insert_Input, Mutation_Root, Query_Root } from "../graphql/types";
import { client } from "../helpers/gqlClient";
import { notifyForBlood } from "../helpers/notifyBlood";

const snowflake = SnowflakeId();

interface IBloodCheck extends Query_Root {
    blood_check: {
        challenge_id: string;
        submission: {
            submited_flag: string;
        };
    }[];
}

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
            };

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

            const challengeInput : Challenges_Insert_Input[] = [];
            
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
                });
            }

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
            } else if(insert_challenges.returning.length === challengeInput.length){
                return {
                    machine: insert_machines_one,
                    challenges: insert_challenges.returning,
                };
            } else {
                throw new Error("Failed to create all challenges");
            }
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    };
    
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
    };

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
    };

    public submitFlagS = async (reqBody: IMachineSubmitFlagInput) => {
        try {
            let is_blood_aquired = false;
            const { challenge_id, submited_flag, team_id, user_id } = reqBody;

            if (!challenge_id || !submited_flag || !team_id || !user_id) {
                throw new Error("Invalid request body");
            }

            const queryPreCheck = gql`
              query checkScore($challenge_id: String!, $team_id: String!) {
                  scores(where: {challenge_id: {_eq: $challenge_id}, team_id: { _eq: $team_id }}) {
                      id
                  }

                  blood_check: scores(where: {challenge_id: {_eq: $challenge_id}}) {
                    challenge_id
                    submission {
                        submited_flag
                    }
                  }
              }
            `;

            const { scores, blood_check } : IBloodCheck = await client.request(queryPreCheck, {
                challenge_id,
                team_id,
            });

            if(blood_check.length > 0){
                is_blood_aquired = true;
            }

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
                      team {
                        name
                      }
                      challenge {
                        name
                      }
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

            if(!is_blood_aquired){
                notifyForBlood({
                    teamName: insert_scores_one.team.name,
                    challengeName: insert_scores_one.challenge.name,
                });
            }

            return {
                message: "GG!"
            };
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public getTeamProgressS = (team_id: string) => {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const query = gql`
                  query getTeamProgress($team_id: String!) {
                      machines {
                          id
                          name
                          description
                          challenges {
                              id
                              name
                              point
                              description
                          }
                          depends_on
                          tags
                          no_of_solves
                      }

                      scores(where: {
                          team_id: {
                              _eq: $team_id
                          }
                      }) {
                          id
                          challenge_id
                          team_id
                          user_id
                          challenge {
                              id
                              name
                              point
                              machine {
                                  id
                                  name
                              }
                          }
                      }
                  }
                `;

                const data: Query_Root = await client.request(query, {
                    team_id
                });

                let total_machines_progress : {
                    [key: string]: number;
                }= {};

                if(data.machines && data.scores) {
                    for (const machine of data.machines) {
                        total_machines_progress = {
                            ...total_machines_progress,
                            [machine.id]: machine.challenges.length,
                        };
                    }
                    const challengeCollection : IParedMachineProgress[] = [];

                    for(const machine of data.machines) {
                        const machineProgress: IParedMachineProgress = {
                            id: machine.id,
                            name: machine.name,
                            description: machine.description,
                            challenges: [],
                            total_challenges: total_machines_progress[machine.id],
                            depends_on: machine.depends_on ?? "",
                            tags: machine.tags,
                        };

                        for(const challenge of machine.challenges) {
                            const challengeProgress : IParsedChallengeProgress = {
                                id: challenge.id,
                                name: challenge.name,
                                point: challenge.point,
                                description: challenge.description,
                                solved: false,
                            };

                            for(const score of data.scores) {
                                if(score.challenge_id === challenge.id) {
                                    challengeProgress.solved = true;
                                    break;
                                }
                            }

                            machineProgress.challenges?.push(challengeProgress);
                        }
                        challengeCollection.push(machineProgress);
                    }
                    
                    for (const machine of challengeCollection) {
                        const solvedChallenges = machine.challenges?.filter(challenge => challenge.solved);
                        const unsolvedChallenges = machine.challenges?.filter(challenge => !challenge.solved);

                        if(solvedChallenges?.length) {
                            machine.challenges = solvedChallenges;
                            if(unsolvedChallenges?.length) {
                                machine.challenges.push(unsolvedChallenges[0]);
                            }
                        }
                        else {
                            machine.challenges = [machine.challenges![0]];
                        }
                    }

                    // Check if all the challenges in depends_on machine are solved, if not then dont push to challengeCollection
                    for (const machine of challengeCollection) {
                        if(machine.depends_on) {
                            const depends_on_machine = challengeCollection.find(challenge => challenge.id === machine.depends_on);
                            if(depends_on_machine && depends_on_machine.challenges?.length !== depends_on_machine.total_challenges) {
                                challengeCollection.splice(challengeCollection.indexOf(machine), 1);
                            }
                        }
                    }

                    resolve(challengeCollection);
                }
                else {
                    throw new Error("No data found");
                }
            }
            catch (error: any) {
                if(error.response) {
                    reject(error.response.errors[0].message);
                }
                else
                    reject(error.message);
            }
        });
    };
}