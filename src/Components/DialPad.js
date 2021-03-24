import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import SingleButton from './SingleButton';

// eslint-disable-next-line react/prop-types
function DialPad({ clickHandler }) {
  return (
    <div>
      <div className="board-row">
        <SingleButton name="AC" clickHandler={() => clickHandler('AC')} />
        <SingleButton name="+/-" clickHandler={() => clickHandler('+/-')} />
        <SingleButton name="%" clickHandler={() => clickHandler('%')} />
        <SingleButton name="/" clickHandler={() => clickHandler('/')} className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="7" clickHandler={() => clickHandler('7')} />
        <SingleButton name="8" clickHandler={() => clickHandler('8')} />
        <SingleButton name="9" clickHandler={() => clickHandler('9')} />
        <SingleButton name="*" clickHandler={() => clickHandler('*')} className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="4" clickHandler={() => clickHandler('4')} />
        <SingleButton name="5" clickHandler={() => clickHandler('5')} />
        <SingleButton name="6" clickHandler={() => clickHandler('6')} />
        <SingleButton name="-" clickHandler={() => clickHandler('-')} className="operation" />
      </div>
      <div className="board-row">
        <SingleButton name="1" clickHandler={() => clickHandler('1')} />
        <SingleButton name="2" clickHandler={() => clickHandler('2')} />
        <SingleButton name="3" clickHandler={() => clickHandler('3')} />
        <SingleButton name="+" clickHandler={() => clickHandler('+')} className="operation" />
      </div>
      <div className="board-row">
        <span><SingleButton name="0" /></span>
        <SingleButton name="." clickHandler={() => clickHandler('.')} />
        <SingleButton name="=" clickHandler={() => clickHandler('=')} className="operation" />
      </div>
    </div>
  );
}

DialPad.prototypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default DialPad;
