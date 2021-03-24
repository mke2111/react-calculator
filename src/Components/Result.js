import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Result({ result, next }) {
  return (
    <div>
      <h2>{ next || result || '0' }</h2>
    </div>
  );
}

Result.defaultProps = {
  result: '0',
  next: null,
};

Result.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

export default Result;
