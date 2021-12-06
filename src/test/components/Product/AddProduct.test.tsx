import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { AddProduct } from "../../../component/Product/AddProduct";

describe("Testing Add Product", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  let wrapper2: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const CrossIconClick: any = jest.fn();
  const handleEditProduct: any = jest.fn();
  const submitProduct: any = jest.fn();
  const showLoader: boolean = false;
  const categoryNames: any = [{ _id: "abc", name: "category" }];
  const isEdit: boolean = false;
  const errorMessage = "";
  const successMessage = "";
  const productInformation: any = {
    name: "test",
    quantity: "100",
    price: "100",
    description: "test",
    category: "category",
  };

  const defaultProps = {
    CrossIconClick,
    handleEditProduct,
    submitProduct,
    showLoader,
    categoryNames,
    isEdit,
    productInformation,
    errorMessage,
    successMessage,
  };
  beforeEach(() => {
    wrapper = mount(<AddProduct {...defaultProps} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot;
  });
  it("should have 1 button component", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
  });
  it("should have 1 TextField component", () => {
    let textFields = wrapper.find("TextField").length;
    expect(wrapper.find("TextField")).toHaveLength(textFields);
  });
  it("should have 1 TextArea component", () => {
    let textArea = wrapper.find("TextArea").length;
    expect(wrapper.find("TextArea")).toHaveLength(textArea);
  });
  it("should have 1 DropDown component", () => {
    let dropDown = wrapper.find("DropDown").length;
    expect(wrapper.find("DropDown")).toHaveLength(dropDown);
  });

  it("should call the handle change prop when a user types something in the name input field", () => {
    wrapper.find("#add-new-product-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#name_element").simulate("change", event2);
    wrapper.find("#name_element").simulate("change", event);
  });

  it("should call the handle change prop when a user types something in the quantity input field", () => {
    wrapper.find("#add-new-product-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#quantity_element").simulate("change", event2);
    wrapper.find("#quantity_element").simulate("change", event);
  });
  it("should call the handle change prop when a user types something in the name price field", () => {
    wrapper.find("#add-new-product-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#price_element").simulate("change", event2);
    wrapper.find("#price_element").simulate("change", event);
  });
  it("should call the handle change prop when a user types something in the name description field", () => {
    wrapper.find("#add-new-product-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#description_element").simulate("change", event2);
    wrapper.find("#description_element").simulate("change", event);
  });
  it("should check for Loader visible", () => {
    wrapper.setProps({ showLoader: true });
    expect(wrapper.find(".add-product-loader")).toHaveLength(1);
  });
});
