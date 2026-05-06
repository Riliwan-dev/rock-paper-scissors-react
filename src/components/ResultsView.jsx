// src/components/ResultsView.jsx
// import React from 'react';
import './ResultsView.css';

// Import icons to display them again
import scissorsIcon from '../assets/icon-scissors.svg';
import spockIcon from '../assets/icon-spock.svg';
import paperIcon from '../assets/icon-paper.svg';
import lizardIcon from '../assets/icon-lizard.svg';
import rockIcon from '../assets/icon-rock.svg';

const iconMap = {
  scissors: scissorsIcon,
  spock: spockIcon,
  paper: paperIcon,
  lizard: lizardIcon,
  rock: rockIcon,
};

const ResultsView = ({ userChoice, houseChoice, result, onReset }) => {
  return (
    <section className="results-container">
      <div className="choice-block">
        <span className="choice-label">You Picked</span>
        <div className={`choice-btn ${userChoice} ${result === 'YOU WIN' ? 'winner-glow' : ''}`}>
          <div className="icon-wrapper">
            <img src={iconMap[userChoice]} alt={userChoice} />
          </div>
        </div>
      </div>

      {/* Only show the result and Play Again button once the house has picked */}
      {houseChoice && (
        <div className="status-block">
          <h2 className="result-text">{result}</h2>
          <button className="play-again-btn" onClick={onReset}>
            Play Again
          </button>
        </div>
      )}

      <div className="choice-block">
        <span className="choice-label">The House Picked</span>
        {houseChoice ? (
          <div className={`choice-btn ${houseChoice} ${result === 'YOU LOSE' ? 'winner-glow' : ''}`}>
            <div className="icon-wrapper">
              <img src={iconMap[houseChoice]} alt={houseChoice} />
            </div>
          </div>
        ) : (
          /* This is the dark "placeholder" circle seen in desktop-step-3.jpg */
          <div className="placeholder-circle"></div>
        )}
      </div>
    </section>
  );
};

export default ResultsView;