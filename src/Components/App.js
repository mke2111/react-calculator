/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DialPad from './DialPad';
import Result from './Result';
import '../index.css';
import calculate from '../Logic/Calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  return (
    <div className="container">
      <h1>Basic  Calculator</h1>
      <Result value="0" />
      <DialPad />
    </div>
  );
};

export default App;
