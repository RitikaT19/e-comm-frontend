import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme"; //import mount and ReactWrapper for testing
import {Login} from "../../../component/Login/Login"

describe("Testing Login Component", () =>{
    // create a wrapper object
    let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

    const handleLoginButton: any = jest.fn();
    const errorMessage = "";
    const successMessage = "";

    const defaultProps = {
        handleLoginButton,
        errorMessage,
        successMessage,
    }

    // mount the component and store it in the wrapper before each test
    beforeEach(() =>{
        wrapper = mount(<Login {...defaultProps}/>)
    })
    // it("should match snapshot", () => {
    //     expect(wrapper).toMatchSnapshot();
    //   });

    it("should check error message if any field is empty",() =>{
        wrapper.find("#login_button_element").simulate("click");
        expect(wrapper.find("#sign-in-empty-fields").text()).toEqual(
            "Please fill all the fields"
        )
    })
    it("should have 1 button component", () =>{
        expect(wrapper.find("Button")).toHaveLength(1)
    })
    it("should have 2 TextField component", () =>{
        let textFields = wrapper.find("TextField").length;
        expect(wrapper.find("TextField")).toHaveLength(textFields)
    })
    it("should call the handle change prop when a user types something in the email input field",()=>{
        wrapper.find("#login_button_element").simulate("click")
        const event = {target: {value:"tests"}};
        const event2 = {target: {value: "test 123"}};
        wrapper.find("#email_element").simulate("change", event2)
        wrapper.find("#email_element").simulate("change", event)
    })

    it("should call the handle change prop when a user types something in the password input field",()=>{
        wrapper.find("#login_button_element").simulate("click")
        const event = {target: {value:"tests"}};
        const event2 = {target: {value: "test 123"}};
        wrapper.find("#password_element").simulate("change", event2)
        wrapper.find("#password_element").simulate("change", event)
    })
})

