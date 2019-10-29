import React from 'react';
import 'react-native';
import { MyTrips } from './MyTrips';
import { shallow } from 'enzyme';

describe('MyTrips', () => {

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should match the snapshot when loading', () => {
    let wrapper = shallow(<MyTrips navigation={{ navigate: jest.fn(), getParam: jest.fn() }} />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when trips array is populated', () => {
    let wrapper = shallow(<MyTrips navigation={{ navigate: jest.fn(), getParam: jest.fn() }} />)

    wrapper.instance().setState({ trips: [{id: 1, name: 'Paris'}, {id: 2, name: 'Rome'}]})

    expect(wrapper).toMatchSnapshot();
  })

})