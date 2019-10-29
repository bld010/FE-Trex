import React from "react";
import "react-native";
import WandererFooter from "./WandererFooter";
import { shallow } from "enzyme";

describe("WandererFooter", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<WandererFooter navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
