import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

describe("App", () => {
  it("should render a <div />", () => {
    const container = shallow(<App />);
    expect(container.find("div").length).toEqual(1);
  });
});
