import 'react-native';
import React from 'react';
import MyTrips from '../MyTrips/MyTrips';

// it('renders correctly', () => {
//   const tree = renderer.create(
//     <MyTrips />
//     ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import { mount } from 'enzyme';

describe('Component tested with airbnb enzyme', () => {
  test('App mount with enzyme', () => {
    const wrapper = mount(<MyTrips />);
    // other tests operations
  });
})