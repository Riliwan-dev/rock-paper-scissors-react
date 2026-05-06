// src/components/GameArea.jsx
// import React from 'react';
import './GameArea.css';

// 1. Corrected Imports based on image_5.png (moving up one level from 'components')
import scissorsIcon from '../assets/icon-scissors.svg';
import spockIcon from '../assets/icon-spock.svg';
import paperIcon from '../assets/icon-paper.svg';
import lizardIcon from '../assets/icon-lizard.svg';
import rockIcon from '../assets/icon-rock.svg';

const GameArea = ({ onSelect }) => {
  // 2. Define the five choices with their respective icons
  const choices = [
    { id: 'scissors', img: scissorsIcon },
    { id: 'spock', img: spockIcon },
    { id: 'paper', img: paperIcon },
    { id: 'lizard', img: lizardIcon },
    { id: 'rock', img: rockIcon },
  ];

  return (
    <section className="game-area-container">
      {/* We are creating a simple wrapper around the buttons */}
      <div className="pentagon-wrapper">
        {choices.map((choice) => (
          <button 
            key={choice.id} 
            className={`choice-btn ${choice.id}`} 
            onClick={() => onSelect(choice.id)}
          >
            <div className="icon-wrapper">
              {/* This is where the SVG image is rendered */}
              <img src={choice.img} alt={choice.id} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default GameArea;