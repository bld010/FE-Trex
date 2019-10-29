import React from "react";
import "react-native";
import Weather from "./Weather";
import { shallow } from "enzyme";

describe("Weather", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<Weather navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
