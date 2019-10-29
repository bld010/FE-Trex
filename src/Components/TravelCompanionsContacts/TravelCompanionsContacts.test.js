import React from "react";
import "react-native";
import TravelCompanionsContacts from "./TravelCompanionsContacts";
import { shallow } from "enzyme";

describe("TravelCompanionsContacts", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
  it("should match the snapshot when loading", () => {
    let wrapper = shallow(<TravelCompanionsContacts navigation={{ navigate: jest.fn() }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
