import React from "react";
import "react-native";
import AddLodgingInfo from "./AddLodgingInfo";
import { shallow } from "enzyme";

describe("AddLodgingInfo", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(
      <AddLodgingInfo navigation={{ navigate: jest.fn() }} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
