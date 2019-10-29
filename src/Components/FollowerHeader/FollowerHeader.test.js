import React from "react";
import "react-native";
import FollowerHeader from "./FollowerHeader";
import { shallow } from "enzyme";

describe("FollowerHeader", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<FollowerHeader navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
