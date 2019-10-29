import React from "react";
import "react-native";
import Disclaimer from "./Disclaimer";
import { shallow } from "enzyme";

describe("Disclaimer", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<Disclaimer navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
