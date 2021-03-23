/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function SingleButton(props) {
  return (
    <button className="square" type="button">
      {props.name}
    </button>
  );
}

SingleButton.propType = {
  name: PropTypes.string.isRequired,
};

export default SingleButton;
