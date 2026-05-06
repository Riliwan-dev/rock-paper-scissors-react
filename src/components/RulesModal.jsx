// src/components/RulesModal.jsx
// import React from 'react';
import './RulesModal.css';
import rulesImg from '../assets/image-rules-bonus.svg';
import closeIcon from '../assets/icon-close.svg';

const RulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>RULES</h2>
          <button className="close-btn" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="rules-image-container">
          <img src={rulesImg} alt="Game Rules" />
        </div>
      </div>
    </div>
  );
};

export default RulesModal;