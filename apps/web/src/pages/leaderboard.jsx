import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return (window.location.href = "/login");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API_URL + "/stats/leaderboard",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setLeaderboard(response.data);
      })
      .catch(() => {
        console.log("Failed to get leaderboard");
      });
  }, []);

  return (
    <>
      <div>
        <img src="/ee.png" className="logo react" alt="ee logo" />
      </div>
      <h1>Leaderboard</h1>
      <div className="leaderboard-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>{team.team_name}</td>
                <td>{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboard;
