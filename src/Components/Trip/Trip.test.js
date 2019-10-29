import React from 'react';
import 'react-native';
import Trip from './Trip';
import { shallow } from 'enzyme';

describe('Trip', () => {
  it('should return true', () => {
    expect(true).toEqual(true)
  })

it('should match the snapshot when loading', () => {
  let wrapper = shallow(<Trip navigation={{ navigate: jest.fn() }} />)

  expect(wrapper).toMatchSnapshot();
})
})