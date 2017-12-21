import React from 'react';
import 'react-native';
import Checkbox from './Checkbox';
import renderer from 'react-test-renderer';

describe('<Checkbox />', () => {
  it('renders correctly when it is not checked', () => {
    const tree = renderer.create(<Checkbox text={'Matin'} onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when it is checked', () => {
    const tree = renderer.create(<Checkbox text={'Matin'} onPress={() => {}} isChecked />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
