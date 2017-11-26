import React from 'react';
import 'react-native';
import Page from './Page';
import renderer from 'react-test-renderer';

describe('<Page />', () => {
  it('renders correctly with navBar and margin', () => {
    const tree = renderer.create(<Page backgroundColor={'#fff'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without navBar', () => {
    const tree = renderer.create(<Page backgroundColor={'#fff'} noNavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without noMargin', () => {
    const tree = renderer.create(<Page backgroundColor={'#fff'} noMargin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
