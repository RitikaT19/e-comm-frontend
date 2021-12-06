import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme"; //import mount and ReactWrapper for testing
//import component that is to be tested
import { CheckBox } from "../../../component/common/CheckBox/CheckBox";

describe("Testing CheckBox Component", () => {
  //create a wrapper object
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  //the default props that this component expects
  const defaultProps = {
    id: "test",
    handleChange: jest.fn(),
    label: "test text field",
    checked: true,
  };
  //mount the component and store it in the wrapper before each test
  beforeEach(() => {
    wrapper = mount(<CheckBox {...defaultProps} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should should have one input field", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("should should have one label", () => {
    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should have the id same as the id+_element prop", () => {
    expect(wrapper.find("input").props().id).toBe(defaultProps.id + "_element");
  });

  it("should call the handle change prop when a user types in the input field", () => {
    const event = { target: { value: "test input" } };
    wrapper.find("input").simulate("change", event);
    expect(defaultProps.handleChange).toHaveBeenCalledTimes(1);
  });
});
