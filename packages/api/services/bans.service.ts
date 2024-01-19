import { gql } from "graphql-request";
import { SnowflakeId } from "hyperflake";

import { Bans_Insert_Input, Mutation_Root, Query_Root } from "../graphql/types";
import { client } from "../helpers/gqlClient";

const snowflake = SnowflakeId();

export class BanService  {
    public createBanRecordS = async (userId: string, ip: string) => {
        try {
            const ban_entry : Bans_Insert_Input = {
                id: snowflake.generate(),
                user_id: userId,
                ip,
            }
            const query = gql`
                mutation createBanRecord($object: bans_insert_input!) {
                    insert_bans_one(object: $object) {
                        id
                    }
                }
            `;

            const { insert_bans_one } : Mutation_Root = await client.request(query, {
                object: ban_entry,
            });

            if(!insert_bans_one){
                throw new Error("Failed to create ban record");
            }

            return insert_bans_one;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }

    public checkBanListS = async (userId: string) => {
        try {
            const query = gql`
                query checkUserForBan($userId: String!) {
                    users_by_pk(id: $userId) {
                        is_banned
                    }
                }
            `;

            const { users_by_pk } : Query_Root = await client.request(query, {
                userId,
            });

            if(!users_by_pk){
                throw new Error("No ban record found");
            }

            return users_by_pk.is_banned;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}