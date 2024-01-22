
import { useEffect, useState } from "react";
import apiClient from "../libs/api.client";
import Navbar from "../components/navbar";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return (window.location.href = "/");

    apiClient
      .get("/stats/leaderboard", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (!Array.isArray(response.data)) return (window.location.href = "/");
        setLeaderboard(response.data);
      })
      .catch(() => {
        console.log("Failed to get leaderboard");
      });
  }, []);

  return (
    <>
      <Navbar pageTitle={"Leaderboard"} />
      <div className='leaderboard-wrapper'>
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
