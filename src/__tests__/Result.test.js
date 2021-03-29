import React from 'react';
import renderer from 'react-test-renderer';
import Result from '../Components/Result';

describe('Test Display component with snapshot', () => {
  it('Renders Display component correctly', () => {
    const display = renderer.create(<Result result="100" />).toJSON();

    expect(display).toMatchSnapshot();
  });
});
