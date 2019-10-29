import React from "react";
import "react-native";
import TripForm from "./TripForm";
import { shallow } from "enzyme";

describe("TripForm", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<TripForm navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
