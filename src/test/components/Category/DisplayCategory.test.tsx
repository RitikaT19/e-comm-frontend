import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { DisplayCategory } from "../../../component/Category/DisplayCategory";

describe("Testing Display Category", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  let wrapper2: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const deleteCategory = jest.fn();
  const updateCategoryIconClick = jest.fn();
  const showLoader: boolean = false;
  const categoryInfo = {
    name: "test",
  };
  const defaultProps = {
    categoryInfo,
    deleteCategory,
    updateCategoryIconClick,
    showLoader: false,
  };

  beforeEach(() => {
    wrapper = mount(<DisplayCategory {...defaultProps} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have 0 button component", () => {
    expect(wrapper.find("Button")).toHaveLength(0);
  });
  it("should click delete and edit icon for a card", () => {
    expect(wrapper.find("#delete-category-button")).toBeTruthy();
    expect(wrapper.find("#edit-category-button")).toBeTruthy();
  });
});
