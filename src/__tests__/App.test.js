import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Calculator snapshot', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
