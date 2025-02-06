import React, { useState } from "react";
import "./App.css";

function App() {
  // State for team scores
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  // Functions to update scores
  const increaseScoreA = (points) => setTeamA(teamA + points);
  const increaseScoreB = (points) => setTeamB(teamB + points);
  const resetScores = () => {
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <div className="scoreboard">
      <h1>🏀 Basketball Scoreboard 🏀</h1>
      
      <div className="teams">
        {/* Team A */}
        <div className="team">
          <h2>Team A</h2>
          <p className="score">{teamA}</p>
          <div className="buttons">
            <button onClick={() => increaseScoreA(1)}>+1</button>
            <button onClick={() => increaseScoreA(2)}>+2</button>
            <button onClick={() => increaseScoreA(3)}>+3</button>
          </div>
        </div>

        {/* Team B */}
        <div className="team">
          <h2>Team B</h2>
          <p className="score">{teamB}</p>
          <div className="buttons">
            <button onClick={() => increaseScoreB(1)}>+1</button>
            <button onClick={() => increaseScoreB(2)}>+2</button>
            <button onClick={() => increaseScoreB(3)}>+3</button>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button className="reset-btn" onClick={resetScores}>Reset Scores</button>
    </div>
  );
}

export default App;
