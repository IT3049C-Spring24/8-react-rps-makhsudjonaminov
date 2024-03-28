// src/components/GameView.jsx
import React, { useState } from 'react';
import RockPaperScissors from './RockPaperScissors'; // Assuming RockPaperScissors is defined in this file or imported from another file

const GameView = ({ userName }) => {
  // State to manage which view to display
  const [showGame, setShowGame] = useState(false);

  // State hooks for game state
  const [userChoice, setUserChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  // Function to handle user's choice
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  // Function to handle "Go" click
  const handleGoClick = () => {
    // Generate CPU's choice
    const cpuChoice = RockPaperScissors.generateCPUChoice();

    // Determine winner and update scores
    const winner = RockPaperScissors.determineWinner(userChoice, cpuChoice);
    if (winner === 'user') {
      setUserScore(userScore + 1);
    } else if (winner === 'cpu') {
      setCpuScore(cpuScore + 1);
    }

    // Update game history
    const newHistory = {
      userChoice,
      cpuChoice,
      winner,
    };
    setGameHistory([...gameHistory, newHistory]);
  };

  return (
    <div id="game-screen">
      {/* Conditional rendering based on showGame state */}
      {showGame ? (
        <div>
          {/* Game UI */}
          {/* Display user and CPU scores */}
          <div id="score-tally">
            <p id="score">{userName}: {userScore} v CPU: {cpuScore}</p>
          </div>
          {/* Game logic components */}
          {/* User choice selection */}
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            onChange={(e) => handleUserChoice(e.target.value)}
          >
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
          {/* Go button */}
          <button className="btn btn-primary" id="play-button" type="button" onClick={handleGoClick}>
            Go
          </button>
        </div>
      ) : (
        // Welcome screen UI
        <div>
          {/* WelcomeView component */}
          {/* Pass setShowGame as prop to update showGame state */}
          <WelcomeView setShowGame={setShowGame} />
        </div>
      )}
    </div>
  );
};

export default GameView;
