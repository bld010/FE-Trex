import React from "react";
import "react-native";
import {Leg} from "./Leg";
import { shallow } from "enzyme";

describe("Leg", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it.skip("should match the snapshot when loading", () => {
    let wrapper = shallow(<Leg navigation={{ navigate: jest.fn() }}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
