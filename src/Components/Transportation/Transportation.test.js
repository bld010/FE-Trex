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
});
