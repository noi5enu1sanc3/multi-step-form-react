// import React from 'react';
import './StepsBar.scss';

function StepsBar() {
  return (
    <nav className="steps-bar-container">
      <ul>
        <li>
          <button type="button">
            <span>1</span>
            <span>STEP 1</span>
            <span>YOUR INFO</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>2</span>
            <span>STEP 2</span>
            <span>SELECT PLAN</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>3</span>
            <span>STEP 3</span>
            <span>ADD-ONS</span>
          </button>
        </li>
        <li>
          <button type="button">
            <span>4</span>
            <span>STEP 4</span>
            <span>SUMMARY</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default StepsBar;
