import React from "react";
import { useState } from "react";

function CreateTeamCard() {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  return (
    <div className="login-card">
      <h2>Create A Team</h2>
      <form onSubmit={() => {}}>
        <div className="form-control">
          <div className="form-el-container">
            <label htmlFor="team_name">Team Name</label>
          </div>
          <div className="form-el-container">
            <input
              className="forminput"
              type="text"
              id="team_name"
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
              placeholder="Enter your Team Name"
            />
          </div>
        </div>
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
          Create Team
        </button>
      </form>
    </div>
  );
}

export default CreateTeamCard;
