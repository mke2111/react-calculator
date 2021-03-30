import React from 'react';
import renderer from 'react-test-renderer';
import SingleButton from '../Components/SingleButton';

describe('Test Button component with snapshot', () => {
  it('Renders button component correctly', () => {
    const buttonComponent = renderer.create(<SingleButton btnName="+" clickHandler={() => '6'} />).toJSON();

    expect(buttonComponent).toMatchSnapshot();
  });
});
