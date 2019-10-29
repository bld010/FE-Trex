import React from "react";
import "react-native";
import DefaultWandererMessages from "./DefaultWandererMessages";
import { shallow } from "enzyme";

describe("DefaultWandererMessages", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<DefaultWandererMessages navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
