import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { AddCategory } from "../../../component/Category/AddCategory";

describe("testing Add Category", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  let wrapper2: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const handleAddCategory: any = jest.fn();
  const CrossIconClick: any = jest.fn();
  const isEdit: boolean = false;
  const showLoader: boolean = false;
  const handleEditCategory: any = jest.fn();
  const errorMessage = "";
  const successMessage = "";
  const categoryDetail: any = {
    name: "Test",
  };
  const categoryDetail1: any = {
    name: "Test",
  };
  const defaultProps = {
    handleAddCategory,
    CrossIconClick,
    isEdit,
    showLoader,
    categoryDetail,
    handleEditCategory,
    errorMessage,
    successMessage,
  };

  const defaultProps1 = {
    handleAddCategory,
    CrossIconClick,
    isEdit: true,
    showLoader,
    categoryDetail: categoryDetail1,
    handleEditCategory,
    errorMessage,
    successMessage,
  };

  beforeEach(() => {
    wrapper = mount(<AddCategory {...defaultProps} />);
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
  it("should call the handle change prop when a user types something in the password input field", () => {
    wrapper.find("#add-category-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#category-name_element").simulate("change", event2);
    wrapper.find("#category-name_element").simulate("change", event);
  });

  it("should call the handle change prop when a user types something in the password input field", () => {
    wrapper2 = mount(<AddCategory {...defaultProps1} />);
    wrapper.find("#add-category-button_element").simulate("click");
    const event = { target: { value: "tests" } };
    const event2 = { target: { value: "test 123" } };
    wrapper.find("#category-name_element").simulate("change", event2);
    wrapper.find("#category-name_element").simulate("change", event);
  });

  it("should check for Loader visible", () => {
    wrapper.setProps({ showLoader: true });
    expect(wrapper.find(".add-category-loader")).toHaveLength(1);
  });

});
