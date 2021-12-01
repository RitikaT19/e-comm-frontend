import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import {
  createNewCategory,
  getCategory,
  deleteCategory,
  editCategory,
} from "../../actions/category";
import { CategoryContext } from "../../contexts/Category";
import { LoadingContext } from "../../contexts/Loading";
import "../styles/category.css";
import { DisplayCategory } from "./DisplayCategory";
import { AddCategory } from "./AddCategory";
import Button from "../common/Button/Button";

export const Category: React.FC = () => {
  //rename state and dispatch as categoryState and categoryDispatch respectively
  const { state: categoryState, dispatch: categoryDispatch } =
    useContext(CategoryContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  // stores flag for showing add category page
  const [showAddCategoryPage, setShowAddCategoryPage] = useState(false);
  // toggle function for showing add category page
  const addCategoryToggle = () => {
    setShowAddCategoryPage(!showAddCategoryPage);
  };
  // function for fetching category
  const fetchCategory = async () => {
    // call getCategory action
    await getCategory()(categoryDispatch, loadingDispatch);
  };
  // call useEffect when fetchCategory function is successful
  useEffect(() => {
    fetchCategory();
  }, []);
  // function for adding category
  const addCategory = async (data: string) => {
    // call createNewCategory action
    await createNewCategory(data)(categoryDispatch, loadingDispatch);
    // call fetchCategory everytime after a new category is added
    fetchCategory();
  };
  // function for deleting a category
  const removeCategory = async (id: any) => {
    // call deleteCategory action
    await deleteCategory(id)(categoryDispatch, loadingDispatch);
    //  call fetchCategory after deleting a category
    fetchCategory();
  };

  const updateCategory = {};
  return (
    <div className="category-main-div">
      <SideBar />
      <div className="display-category-action">
        <p className="display-category-header">
          <b> Categories</b>
        </p>
        <Button
          id="display-category-button"
          value="Add Category"
          handleClick={addCategoryToggle}
        />
      </div>

      <div className="category-container-div">
        {/* if showAddCategoryPage is true then render AddCategory page else render display category page */}
        {showAddCategoryPage ? (
          <AddCategory
            CrossIconClick={addCategoryToggle}
            handleAddCategory={addCategory}
            editMode={false}
          />
        ) : (
          <DisplayCategory
            categoryInfo={categoryState.fetchCategorySuccess}
            deleteCategory={removeCategory}
            editCategory={updateCategory}
          />
        )}
      </div>
    </div>
  );
};
