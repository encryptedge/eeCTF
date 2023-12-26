import { gql } from "graphql-request";
import { SnowflakeId } from "hyperflake";

import { Mutation_Root, Query_Root, Teams_Insert_Input, Users_Set_Input } from "../graphql/types";
import { client } from "../helpers/gqlClient";

export class TeamService {
    public createTeamS = async (reqBody: ITeamCreateInput) => {
        try {
            const { team_name, join_code } = reqBody;
            const query = gql`
              mutation CreateTeam($object: teams_insert_input!) {
                  insert_teams_one(object: $object){
                      id
                      join_code
                      name
                  }
              }
            `;

            const variables: Teams_Insert_Input = {
                id: SnowflakeId().generate(),
                name: team_name,
                join_code: join_code,
            };

            const data: Mutation_Root = await client.request(query, {
                object: variables
            });

            if(data.insert_teams_one) {
                return data.insert_teams_one;
            }
            else {
                throw new Error("Unable to create team");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public getTeamByIdS = async (teamId: string) => {
        try {
            const query = gql`
              query GetTeam($id: String!) {
                  teams_by_pk(id: $id) {
                      id
                      name
        
                      users {
                          id
                          first_name
                          first_name
                          email
                      }

                      scores {
                          id
                          user {
                              first_name
                              first_name
                          }
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

            const data : Query_Root = await client.request(query, {
                id: teamId
            });

            if(data.teams_by_pk) {
                return data.teams_by_pk;
            }
            else {
                throw new Error("Team not found");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public getTeamsS = async () => {
        try {
            const query = gql`
              query GetTeams {
                  teams {
                      id
                      name

                      users {
                          id
                          first_name
                          first_name
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
                  }
              }
            `;

            const data : Query_Root = await client.request(query);

            if(data.teams) {
                return data.teams;
            }
            else {
                throw new Error("No teams found");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public EditTeamInfo = async (teamData: ITeamEditInput) => {
        try {
            const { id, team_name, join_code } = teamData;
            if(!id || !team_name || !join_code) {
                throw new Error("Invalid request");
            }
            const query = gql`
              mutation EditTeam($id: String!, $team_name: String!, $join_code: String!) {
                  update_teams_by_pk(
                      pk_columns: {
                          id: $id
                      }, _set: {
                          name: $team_name,
                          join_code: $join_code
                      }
                  ) {
                      id
                      name
                      join_code
                  }
              }
            `;

            const data : Mutation_Root = await client.request(query, {
                id,
                team_name,
                join_code
            });

            if(data.update_teams_by_pk) {
                return data.update_teams_by_pk;
            }
            else {
                throw new Error("Unable to edit team");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public joinTeamS = async (reqBody: ITeamJoinInput) => {
        try {
            const { user_id, join_code } = reqBody;
            const query = gql`
              query GetTeam($join_code: String!) {
                  teams(where: {join_code: {_eq: $join_code}}) {
                      id
                      users_aggregate {
                          aggregate {
                              count
                          }
                      }
                  }
              }
            `;

            const team_join : Query_Root = await client.request(query, {
                join_code
            });

            if(team_join.teams.length > 0) {
                if(team_join.teams[0].users_aggregate.aggregate?.count === 4) {
                    throw new Error("Team is full");
                }
                const team_id = team_join.teams[0].id;
                const query = gql`
                  mutation JoinTeam($user_id: String!, $team_id: String!) {
                      update_users_by_pk(
                          pk_columns: {
                              id: $user_id
                          }, _set: {
                              team_id: $team_id
                          }
                      ) {
                          id
                          team {
                              id
                          }
                      }
                  }
                `;

                const user_join_args : Users_Set_Input = {
                    id: user_id,
                    team_id
                };

                const data : Mutation_Root = await client.request(query, {
                    user_id: user_join_args.id,
                    team_id: user_join_args.team_id
                });

                if(data.update_users_by_pk) {
                    return data.update_users_by_pk;
                }

                else {
                    throw new Error("Unable to join team");
                }
            }
            else {
                throw new Error("Invalid join code");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public leaveTeamS = async (reqBody: ITeamLeaveInput) => {
        try {
            const { user_id } = reqBody;
            const query = gql`
              mutation LeaveTeam($user_id: String!) {
                  update_users_by_pk(
                      pk_columns: {
                          id: $user_id
                      }, _set: {
                          team_id: null
                      }
                  ) {
                      id
                      team {
                          id
                      }
                  }
              }
            `;

            const data : Mutation_Root = await client.request(query, {
                user_id
            });

            if(data.update_users_by_pk) {
                return data.update_users_by_pk;
            }

            else {
                throw new Error("Unable to leave team");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };

    public whomaiS = async (team_id: string) => {
        try {
            const query = gql`
              query GetTeam($team_id: String!) {
                  teams_by_pk(id: $team_id) {
                      id
                      name
                      join_code
                      users {
                          id
                          first_name
                          last_name
                          email
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
                  }
              }
            `;

            const data : Query_Root = await client.request(query, {
                team_id
            });

            if(data.teams_by_pk) {
                return data.teams_by_pk;
            }
            else {
                throw new Error("Team not found");
            }
        }
        catch (error: any) {
            throw error.response ? new Error(error.response.errors[0].message) : new Error(error.message);
        }
    };
}