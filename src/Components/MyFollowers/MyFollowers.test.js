import React from "react";
import "react-native";
import {MyFollowers} from "./MyFollowers";
import { shallow } from "enzyme";

describe("MyFollowers", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<MyFollowers navigation={{ navigate: jest.fn(), getParam: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
