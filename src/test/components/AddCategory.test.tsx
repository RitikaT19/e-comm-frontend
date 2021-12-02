import React, { Component } from "react";
import { mount, ReactWrapper } from "enzyme";
import { AddCategory } from "../../component/Category/AddCategory";
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Testing AddCategory Component", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  let wrapper2: ReactWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  const handleAddCategory: any = jest.fn();
  const CrossIconClick: any = jest.fn();
  const isEdit: boolean = false
  const showLoader: boolean = false;
  const handleEditCategory: any = jest.fn();
  const categoryDetail: any = {
    name: "Test",
  };
  const categoryDeatil1: any = {
    name: "Test",
  };
  const defaultProps = {
    handleAddCategory,
    CrossIconClick,
    isEdit,
    showLoader,
    categoryDetail,
    handleEditCategory,
  };

  const defaultProps1 = {
    handleAddCategory,
    CrossIconClick,
    isEdit: true,
    showLoader,
    categoryDetail: categoryDetail,
    handleEditCategory,
  }

  beforeEach(() =>{
      wrapper = mount(<AddCategory {...defaultProps}/>)
  })
  // it("should match snapshot", () =>{
  //     expect(wrapper).toMatchSnapshot();
  // })

  it("should call the handle change prop whe a user types name", ()=>{
      wrapper.find("#add-category-button_element").simulate("click");
      const event = {target: {value: "tests"}};
      const event2 = {target:{value: "test 123"}}
      wrapper.find("#name_element").simulate("change", event2);
      wrapper.find("name_element").simulate("change", event)
  })
});
