import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Result({ result, next, operation }) {
  return (
    <>
      <h2>{ next || operation || result || '0' }</h2>
    </>
  );
}

Result.defaultProps = {
  result: '0',
  next: null,
  operation: null,
};

Result.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Result;
