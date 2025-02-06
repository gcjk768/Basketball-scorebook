import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBasketballBall } from "react-icons/fa";

function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [foulsA, setFoulsA] = useState(0);
  const [foulsB, setFoulsB] = useState(0);
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Functions to update score, fouls, and quarter
  const increaseScoreA = (points) => setTeamA(teamA + points);
  const increaseScoreB = (points) => setTeamB(teamB + points);
  const increaseFoulA = () => setFoulsA(foulsA + 1);
  const increaseFoulB = () => setFoulsB(foulsB + 1);
  const nextQuarter = () => setQuarter(quarter < 4 ? quarter + 1 : "OT");
  const resetGame = () => {
    setTeamA(0);
    setTeamB(0);
    setQuarter(1);
    setFoulsA(0);
    setFoulsB(0);
    setTime(600);
    setIsRunning(false);
  };

  return (
    <div className="container mt-5 text-center">
      {/* Title */}
      <h1 className="fw-bold text-danger">
        🏀 NBA/FIBA Scoreboard <FaBasketballBall />
      </h1>

      {/* Scoreboard */}
      <div className="scoreboard bg-dark text-white p-4 rounded shadow-lg">
        {/* Timer & Quarter Display */}
        <div className="mb-3">
          <h2 className="display-4">{formatTime(time)}</h2>
          <p className="lead">
            <strong>Quarter:</strong> {quarter}
          </p>
          <button className="btn btn-warning mx-2" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="btn btn-secondary mx-2" onClick={nextQuarter}>
            Next Quarter
          </button>
        </div>

        {/* Team Scores */}
        <div className="row">
          {/* Team A */}
          <div className="col-md-5 mx-auto p-3 bg-primary rounded">
            <h2 className="fw-bold">Team A</h2>
            <p className="display-1">{teamA}</p>
            <div className="btn-group">
              <button className="btn btn-light" onClick={() => increaseScoreA(1)}>+1</button>
              <button className="btn btn-light" onClick={() => increaseScoreA(2)}>+2</button>
              <button className="btn btn-light" onClick={() => increaseScoreA(3)}>+3</button>
            </div>
            <p className="mt-3">Fouls: {foulsA}</p>
            <button className="btn btn-danger" onClick={increaseFoulA}>Add Foul</button>
          </div>

          {/* Team B */}
          <div className="col-md-5 mx-auto p-3 bg-danger rounded">
            <h2 className="fw-bold">Team B</h2>
            <p className="display-1">{teamB}</p>
            <div className="btn-group">
              <button className="btn btn-light" onClick={() => increaseScoreB(1)}>+1</button>
              <button className="btn btn-light" onClick={() => increaseScoreB(2)}>+2</button>
              <button className="btn btn-light" onClick={() => increaseScoreB(3)}>+3</button>
            </div>
            <p className="mt-3">Fouls: {foulsB}</p>
            <button className="btn btn-danger" onClick={increaseFoulB}>Add Foul</button>
          </div>
        </div>

        {/* Reset Button */}
        <div className="mt-4">
          <button className="btn btn-warning btn-lg" onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </div>
  );
}

export default App;
