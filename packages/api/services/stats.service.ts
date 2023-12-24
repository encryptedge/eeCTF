import { gql } from 'graphql-request';

import { client } from '../helpers/gqlClient';
import { Query_Root } from '../graphql/types';

export class StatsService {
    public getTeamScoreS = async (teamId: string) => {
        try {
            const query = gql`
                query getTeamScore($teamId: String!) {
                    scores(where: {team_id: {_eq: $teamId}}) {
                        id
                        challenge {
                            id
                            name
                            machine {
                                id
                                name
                            }
                            point
                        }
                        team {
                            name
                        }
                        submission {
                            id
                            submited_flag
                        }
                    }
                }
            `;

            const { scores } : Query_Root = await client.request(query, {
                teamId,
            });

            if(!scores){
                throw new Error("No team scores found");
            }

            const teamScore: ITeamStats = {
                team_id: teamId,
                team_name: scores[0].team.name,
                score: 0,
                submissions: [],
            }

            for (const score of scores) {
                teamScore.score += score.challenge.point;
                teamScore.submissions.push({
                    challenge_id: score.challenge.id,
                    challenge_name: score.challenge.name,
                    machine_id: score.challenge.machine.id,
                    machine_name: score.challenge.machine.name,
                    submited_flag: score.submission.submited_flag,
                    id: score.submission.id,
                })
            }

            return teamScore;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    public getAllTeamScoreS = async () => {
        try {
            const query = gql`
                query getAllTeamScore {
                    scores {
                        id
                        team {
                            id
                            name
                        }
                        challenge {
                            id
                            point
                        }
                    }
                }
            `;

            const { scores } : Query_Root = await client.request(query);

            if(!scores){
                throw new Error("No team scores found");
            }

            const teamsLeaderboard: IStatsLeaderboard[] = [];

            for (const score of scores) {
                const teamIndex = teamsLeaderboard.findIndex(team => team.team_id === score.team.id);
                if(teamIndex === -1) {
                    teamsLeaderboard.push({
                        team_id: score.team.id,
                        team_name: score.team.name,
                        score: score.challenge.point,
                        rank: 0,
                    })
                }
                else {
                    teamsLeaderboard[teamIndex].score += score.challenge.point;
                }
            }

            teamsLeaderboard.sort((a, b) => b.score - a.score);
            teamsLeaderboard.forEach((team, index) => {
                team.rank = index + 1;
            })

            return teamsLeaderboard;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}