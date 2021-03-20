/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';

function SingleButton(props) {
  return (
    <button className="square" type="button">
      {props.value}
    </button>
  );
}

export default SingleButton;
