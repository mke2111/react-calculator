import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home';

it('test the render of the Home page', () => {
  const home = renderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
