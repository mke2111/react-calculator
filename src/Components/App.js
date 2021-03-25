/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import DialPad from './DialPad';
import Result from './Result';
import '../index.css';
import calculate from '../Logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => this.setState(calculate(this.state, buttonName));

  render() {
    return (
      <div className="container">
        <h1>Basic  Calculator</h1>
        <Result result={this.state.total} next={this.state.next} operation={this.state.operation} />
        <DialPad clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
