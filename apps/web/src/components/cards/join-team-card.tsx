import React from "react";
import apiClient from "../../libs/api.client";
import { useState } from "react";

function JoinTeamCard() {
  const [teamCode, setTeamCode] = useState("");
  
  return (
    <div className="signup-card login-card">
      <h2>Join a Team</h2>
      <form onSubmit={() => {}}>
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
