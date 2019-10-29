import React from 'react';
import 'react-native';
import { MyTrips } from './MyTrips';
import { shallow } from 'enzyme';

describe('MyTrips', () => {
  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should match the snapshot', () => {
    let wrapper = shallow(<MyTrips navigation={{ navigate: jest.fn() }} />)

    expect(wrapper).toMatchSnapshot();
  })
})