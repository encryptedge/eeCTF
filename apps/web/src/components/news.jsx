import { useEffect, useState } from "react";
import apiClient from "../libs/api.client";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        apiClient.get("/news", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
        }).then((response) => {
            setNews(response.data.message);
        });
    }, []);

    return (
        <div className='news'>
            {news.map((item) => (
                <div className='news-item'>
                    <h3>
                        message : {
                            item.msg
                        }
                    </h3>
                    <p>
                        posted_at : {
                            (new Date(item.created_at)).toUTCString()
                        }
                    </p>
                </div>
            ))}
        </div>
    );
}

export default News
