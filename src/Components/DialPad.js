import React from 'react';
import '../index.css';
import SingleButton from './SingleButton';

function DialPad() {
  return (
    <div>
      <div className="board-row">
        <SingleButton name="AC" />
        <SingleButton name="+" />
        <SingleButton name="%" />
        <SingleButton name="/" className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="7" />
        <SingleButton name="8" />
        <SingleButton name="9" />
        <SingleButton name="*" className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="4" />
        <SingleButton name="5" />
        <SingleButton name="6" />
        <SingleButton name="-" className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="1" />
        <SingleButton name="2" />
        <SingleButton name="3" />
        <SingleButton name="+" className="operation" />
      </div>
      <div className="board-row">
        <span><SingleButton name="0" /></span>
        <SingleButton name="." />
        <SingleButton name="=" className="operation" />
      </div>
    </div>
  );
}

export default DialPad;
