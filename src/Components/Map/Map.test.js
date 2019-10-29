import React from "react";
import "react-native";
import Map from "./Map";
import { shallow } from "enzyme";

describe("Map", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it.skip("should match the snapshot when loading", () => {
    let wrapper = shallow(<Map />);

    expect(wrapper).toMatchSnapshot();
  });
});
