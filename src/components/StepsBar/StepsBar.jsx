// import React from 'react';
import './StepsBar.scss';

function StepsBar() {
  return (
    <nav className="steps-bar-container">
      <ul className="steps-bar-list">
        <li className="bar-item">
          <button type="button" className="bar-item__button">
            <span className="bar-item__step-number">1</span>
            <span className="bar-item__step-title">STEP 1</span>
            <span className="bar-item__step-subtitle">YOUR INFO</span>
          </button>
        </li>
        <li className="bar-item">
          <button type="button" className="bar-item__button">
            <span className="bar-item__step-number">2</span>
            <span className="bar-item__step-title">STEP 2</span>
            <span className="bar-item__step-subtitle">SELECT PLAN</span>
          </button>
        </li>
        <li className="bar-item">
          <button type="button" className="bar-item__button">
            <span className="bar-item__step-number">3</span>
            <span className="bar-item__step-title">STEP 3</span>
            <span className="bar-item__step-subtitle">ADD-ONS</span>
          </button>
        </li>
        <li className="bar-item">
          <button type="button" className="bar-item__button">
            <span className="bar-item__step-number">4</span>
            <span className="bar-item__step-title">STEP 4</span>
            <span className="bar-item__step-subtitle">SUMMARY</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default StepsBar;
