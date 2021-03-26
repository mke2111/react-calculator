import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function SingleButton({ name, clickHandler }) {
  return (
    <button type="button" onClick={clickHandler}>{ name }</button>
  );
}

SingleButton.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

SingleButton.defaultProps = {
  name: '',
  clickHandler: () => '',
};

export default SingleButton;
