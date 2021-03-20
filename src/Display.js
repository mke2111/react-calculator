import React from 'react';
import './index.css';

function Display() {
  return (
    <div className="container">
      <h1>Calculator</h1>
      <h2>0</h2>
      <div className="board-row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operation">/</button>
      </div>
      <div className="board-row">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operation">*</button>
      </div>
      <div className="board-row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operation">-</button>
      </div>
      <div className="board-row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operation">+</button>
      </div>
      <div className="board-row">
        <span><button type="button">0</button></span>
        <button type="button">.</button>
        <button type="button" className="operation">=</button>
      </div>
    </div>
  );
}

export default Display;
