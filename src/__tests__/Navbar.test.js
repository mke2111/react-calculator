import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

it('test the render of the Navbar page', () => {
  const navbar = renderer
    .create(<Navbar />)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
