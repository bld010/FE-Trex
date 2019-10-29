import React from "react";
import "react-native";
import AddTransportInfo from "./AddTransportInfo";
import { shallow } from "enzyme";

describe("AddTransportInfo", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });

  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<AddTransportInfo navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
