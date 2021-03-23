/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div>
      <h2>{props.value}</h2>
    </div>
  );
}

Result.defaultProps = {
  value: 0,
};

Result.propTypes = {
  value: PropTypes.number,
};

export default Result;
