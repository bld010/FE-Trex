import React from "react";
import "react-native";
import FollowerForm from "./Followerform";
import { shallow } from "enzyme";

describe("FollowerForm", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<FollowerForm navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
