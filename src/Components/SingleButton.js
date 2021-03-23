/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';

function SingleButton(props) {
  return (
    <button className="square" type="button">
      {props.name}
    </button>
  );
}

SingleButton.propType = {
  name: 0,
};

export default SingleButton;
