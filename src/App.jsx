// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import ResultsView from './components/ResultsView';

// The rules logic for the Bonus (5-option) version
const MAP_RULES = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['scissors', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function App() {
  // 1. Persist score in localStorage
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('rps-score');
    return savedScore ? parseInt(savedScore) : 0;
  });

  const [userChoice, setUserChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    localStorage.setItem('rps-score', score);
  }, [score]);

  // 2. Handle the gameplay flow
  const handleSelect = (choice) => {
    setUserChoice(choice);
    
    // Pick a random hand for the computer
    const options = Object.keys(MAP_RULES);
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    
    // Small delay to build suspense
    setTimeout(() => {
      setHouseChoice(randomChoice);
      determineWinner(choice, randomChoice);
    }, 1000);
  };

  // 3. Logic to update score and set the message
  const determineWinner = (user, house) => {
    if (user === house) {
      setResult("DRAW");
    } else if (MAP_RULES[user].includes(house)) {
      setResult("YOU WIN");
      setScore(prev => prev + 1);
    } else {
      setResult("YOU LOSE");
      setScore(prev => (prev > 0 ? prev - 1 : 0));
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setHouseChoice(null);
    setResult("");
  };

  return (
    <main className="app-container">
      <Header score={score} />
      
      {/* 
          SWITCHING LOGIC:
          Show the Pentagon (GameArea) if no choice is made.
          Show the Outcome (ResultsView) once a choice is clicked.
      */}
      {!userChoice ? (
        <GameArea onSelect={handleSelect} />
      ) : (
        <ResultsView 
          userChoice={userChoice} 
          houseChoice={houseChoice} 
          result={result} 
          onReset={resetGame} 
        />
      )}

      {/* This button will be linked to the Modal in Step 6 */}
      <button className="rules-btn">Rules</button>
    </main>
  );
}

export default App;