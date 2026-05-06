// src/components/Header.jsx
// import React from 'react';
import './Header.css';

const Header = ({ score }) => {
  return (
    <header className="header-container">
      <div className="title-area">
        <h1>
          Rock <br />
          Paper <br />
          Scissors <br />
          Lizard <br />
          Spock
        </h1>
      </div>
      <div className="score-box">
        <span className="score-label">Score</span>
        <span className="score-number">{score}</span>
      </div>
    </header>
  );
};

export default Header;