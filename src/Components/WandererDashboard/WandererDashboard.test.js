import React from "react";
import "react-native";
import WandererDashboard from "./WandererDashboard";
import { shallow } from "enzyme";

describe("WandererDashboard", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<WandererDashboard navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
