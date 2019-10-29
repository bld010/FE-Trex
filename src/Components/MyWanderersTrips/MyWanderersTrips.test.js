import React from 'react';
import 'react-native';
import MyWanderersTrips from './MyWanderersTrips';
import { shallow } from 'enzyme';

describe('MyWanderersTrips', () => {
  it('should return true', () => {
    expect(true).toEqual(true)
  })

it('should match the snapshot when loading', () => {
  let wrapper = shallow(<MyWanderersTrips navigation={{ navigate: jest.fn() }} />)

  expect(wrapper).toMatchSnapshot();
})
})