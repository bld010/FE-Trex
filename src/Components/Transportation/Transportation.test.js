import React from "react";
import "react-native";
import Transportation from "./Transportation";
import { shallow } from "enzyme";

describe("Transportation", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });


  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<Transportation navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when tranportation array is populated', () => {
    let wrapper = shallow(<Transportation navigation={{ navigate: jest.fn(), getParam: jest.fn() }} />)

    wrapper.instance().setState({ transports: [{
      "id": 1,
      "mode": "bus",
      "departureTime": "2019-07-11",
      "departureCity": "Rome",
      "arrivalTime": "2020-01-02",
      "arrivalCity": "Paris",
      "legId": "1"
    },
    {
      "id": 2,
      "mode": "flight",
      "departureTime": "2019-10-15",
      "departureCity": "Denver",
      "arrivalTime": "2021-02-20",
      "arrivalCity": "Rome",
      "legId": "1"
    }]})

    expect(wrapper).toMatchSnapshot();
  })


});
