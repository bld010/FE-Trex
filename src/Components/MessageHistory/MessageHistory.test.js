import React from "react";
import "react-native";
import MessageHistory from "./MessageHistory";
import { shallow } from "enzyme";

describe("MessageHistory", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<MessageHistory navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
