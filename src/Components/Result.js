/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';

function Result(props) {
  return (
    <div>
      <h2>{props.value}</h2>
    </div>
  );
}

Result.defaultProps = {
  value: '0',
};

export default Result;
