import React, { useState } from "react";
import apiClient from "../../libs/api.client";
import { toast } from "react-toastify";

function JoinTeamCard() {
  const [teamCode, setTeamCode] = useState("");

  async function submitData(evt) {
    evt.preventDefault();
    try {
      const { data } = await apiClient.post("/team/join", {
        join_code: teamCode,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      toast.success("Team joined successfully");
      window.location.href = "/whoami";
    } catch (err) {
      toast.error("Error creating team");
    }
  }
  
  return (
    <div className="signup-card login-card">
      <h2>Join a Team</h2>
      <form onSubmit={submitData}>
        <div className="form-control">
          <div className="form-el-container">
            <label htmlFor="team_code">Team Code</label>
          </div>
          <div className="form-el-container">
            <input
              className="forminput"
              type="text"
              id="team_code"
              value={teamCode}
              onChange={(event) => setTeamCode(event.target.value)}
              placeholder="Enter your Team Code"
            />
          </div>
        </div>
        <button className="btn" type="submit">
          Join Team
        </button>
      </form>
    </div>
  );
}

export default JoinTeamCard;
