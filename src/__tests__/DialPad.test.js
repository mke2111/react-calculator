import React from 'react';
import renderer from 'react-test-renderer';
import DialPad from '../Components/DialPad';

describe('Test DialPad with snapshots', () => {
  it('Renders DialPad correctly', () => {
    const dialPad = renderer.create(<DialPad clickHandler={() => 'anything'} />).toJSON();

    expect(dialPad).toMatchSnapshot();
  });
});
