import React from "react";
import "react-native";
import FollowerDashboard from "./FollowerDashboard";
import { shallow } from "enzyme";

describe("FollowerDashboard", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<FollowerDashboard navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
