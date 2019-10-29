import React from "react";
import "react-native";
import DefaultFollowerMessages from "./DefaultFollowerMessages";
import { shallow } from "enzyme";

describe("DefaultFollowerMessages", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<DefaultFollowerMessages navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
