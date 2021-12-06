import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { SignUp } from "../../../component/Sign-up/SignUp";

describe("Testing SignUp Component", () => {
  // create a wrapper object
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const handleSignUpButton: any = jest.fn();
  const errorMessage = "";
  const successMessage = "";

  const defaultProps = {
    handleSignUpButton,
    errorMessage,
    successMessage,
  };

  beforeEach(() => {
    wrapper = mount(<SignUp {...defaultProps} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should check error message if any field is empty", () => {
    wrapper.find("#sign_up_button_element").simulate("click");
    expect(wrapper.find("#sign-in-empty-field-error").text()).toEqual(
      "Please fill all the fields"
    );
  });

  it("should have 1 button component", () =>{
    expect(wrapper.find("Button")).toHaveLength(1)
})

it("should have 4 TextField component", () =>{
    let textFields = wrapper.find("TextField").length;
    expect(wrapper.find("TextField")).toHaveLength(textFields)
})
it("should call the handle change prop when a user types something in the email input field",()=>{
    wrapper.find("#sign_up_button_element").simulate("click")
    const event = {target: {value:"tests"}};
    const event2 = {target: {value: "test 123"}};
    wrapper.find("#email_element").simulate("change", event2)
    wrapper.find("#email_element").simulate("change", event)
})
it("should call the handle change prop when a user types something in the firstName input field",()=>{
    wrapper.find("#sign_up_button_element").simulate("click")
    const event = {target: {value:"tests"}};
    const event2 = {target: {value: "test 123"}};
    wrapper.find("#first_name_element").simulate("change", event2)
    wrapper.find("#first_name_element").simulate("change", event)
})
it("should call the handle change prop when a user types something in the firstName input field",()=>{
    wrapper.find("#sign_up_button_element").simulate("click")
    const event = {target: {value:"tests"}};
    const event2 = {target: {value: "test 123"}};
    wrapper.find("#last_name_element").simulate("change", event2)
    wrapper.find("#last_name_element").simulate("change", event)
})
it("should call the handle change prop when a user types something in the firstName input field",()=>{
    wrapper.find("#sign_up_button_element").simulate("click")
    const event = {target: {value:"tests"}};
    const event2 = {target: {value: "test 123"}};
    wrapper.find("#password_element").simulate("change", event2)
    wrapper.find("#password_element").simulate("change", event)
})
});
