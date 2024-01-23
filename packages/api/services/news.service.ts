import { gql } from "graphql-request";
import { SnowflakeId } from "hyperflake";

import { Query_Root, Mutation_Root } from "../graphql/types";
import { client } from "../helpers/gqlClient";
import { notifyForNews } from "../helpers/notifyNews";

const snowflake = SnowflakeId();

export class NewsService {
    public getNewsS = async () => {
        try {
            const query = gql`
              query getNews {
                  news {
                      id
                      msg
                      created_at
                  }
              }
            `;

            const { news } : Query_Root = await client.request(query);

            if(!news){
                throw new Error("No news found");
            }

            return news;
        } catch (error) {
            if(error instanceof Error) {
                throw new TypeError(error.message);
            }
        }
    }

    public addNewsS = async (msg: string) => {
        try {
            const query = gql`
              mutation addNews($msg_obj: news_insert_input!) {
                  insert_news_one(object: $msg_obj) {
                        id
                        msg
                        created_at
                  }
              }
            `;

            const { insert_news_one } : Mutation_Root = await client.request(query, {
                msg_obj: {
                    id: snowflake.generate(),
                    msg,
                },
            });

            if(!insert_news_one){
                throw new Error("No news added");
            }

            await notifyForNews({
                notifText: msg,
            });

            return insert_news_one;
        } catch (error) {
            if(error instanceof Error) {
                throw new TypeError(error.message);
            }
        }
    }
}