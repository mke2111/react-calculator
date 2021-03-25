/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
// import React, { useState } from 'react';
import React from 'react';
import DialPad from './DialPad';
import Result from './Result';
import '../index.css';
import calculate from '../Logic/Calculate';

// const App = () => {
//   const [total, setTotal] = useState(null);
//   const [next, setNext] = useState(null);
//   const [operation, setOperation] = useState(null);

//   const handleClick = buttonName => {
//     const result = calculate(
//       {
//         total,
//         next,
//         operation,
//       },
//       buttonName,
//     );
//     setTotal(result.total);
//     setNext(result.next);
//     setOperation(result.operation);
//   };

//   return (
//     <div className="container">
//       <h1>Basic  Calculator</h1>
//       <Result result={total} next={next} />
//       <DialPad clickHandler={handleClick} />
//     </div>
//   );
// };

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
        <Result result={this.state.total} next={this.state.next} />
        <DialPad clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
