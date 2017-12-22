import React from 'react';
import 'react-native';
import FullButton from './FullButton';
import renderer from 'react-test-renderer';

describe('<FullButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FullButton title="Envoyer" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when it is a secondary Button', () => {
    const tree = renderer.create(<FullButton title="Envoyer" secondaryButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
