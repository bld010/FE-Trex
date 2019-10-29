import React from "react";
import "react-native";
import FollowerFooter from "./FollowerFooter";
import { shallow } from "enzyme";

describe("FollowerFooter", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<FollowerFooter navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
