import React from "react";
import "react-native";
import LegForm from "./LegForm";
import { shallow } from "enzyme";

describe("LegForm", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it.skip("should match the snapshot when loading", () => {
    let wrapper = shallow(<LegForm navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
