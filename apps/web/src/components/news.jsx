import { useEffect, useState } from "react";
import apiClient from "../libs/api.client";
import { GrAnnounce } from "react-icons/gr";

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
                <div
                key={item.id}
                className='news-item'>
                    <h3>
                        <GrAnnounce size={26} style={{color:"red"}}/> {" "} {item.msg}
                    </h3>
                    <span style={{fontSize:"0.5em", padding:"0.7em", borderRadius:"5px", color:"white", backgroundColor:"blue", marginBottom:"5px"}}>
                        posted_at : {
                            (new Date(item.created_at)).toUTCString()
                        }
                    </span>
                </div>
            ))}
        </div>
    );
}

export default News
