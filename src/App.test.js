import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

describe("App", () => {
  it("renders App Commponent", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.exists()).toBe(true);
  });

  it("should render two <div />'s", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find("div").length).toEqual(2);
  });
});
