import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { DisplayProduct } from "../../../component/Product/DisplayProduct";

describe("Testing Display Products", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const deleteProduct: any = jest.fn();
  const showLoader: boolean = false;
  const updateProductIconClick: any = jest.fn();
  const productDetails = {
    name: "Test",
    quantity: "10",
    price: "10",
    category: "test",
    description: "test",
  };

  const defaultProps = {
    productDetails,
    deleteProduct,
    showLoader: false,
    updateProductIconClick,
  };

  beforeEach(() =>{
    wrapper = mount(<DisplayProduct{...defaultProps}/>)
})
it("should match snapshot",() =>{
    expect(wrapper).toMatchSnapshot()
})
it("should have 0 button component", () =>{
   expect(wrapper.find("Button")).toHaveLength(0)
})
it("should click delete and edit icon for a card", () => {
   expect(wrapper.find("#delete-product-button")).toBeTruthy();
   expect(wrapper.find("#edit-product-button")).toBeTruthy();
 });

});
