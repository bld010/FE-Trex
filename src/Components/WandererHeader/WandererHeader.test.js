import React from "react";
import "react-native";
import WandererHeader from "./WandererHeader";
import { shallow } from "enzyme";

describe("WandererHeader", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<WandererHeader navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
