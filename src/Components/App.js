/* eslint-disable no-unused-vars */
import React from 'react';
import DialPad from './DialPad';
import Result from './Result';
import '../index.css';
import calculate from '../Logic/Calculate';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Basic  Calculator</h1>
        <Result value="0" />
        <DialPad />
      </div>
    );
  }
}

export default App;
