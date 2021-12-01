import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { Container } from "../common/WhiteContainer/Container";
import { createNewCategory, getCategory } from "../../actions/category";
import { CategoryContext } from "../../contexts/Category";
import { LoadingContext } from "../../contexts/Loading";
import "../styles/category.css";
import { DisplayCategory } from "./DisplayCategory";
import { AddCategory } from "./AddCategory";
import Button from "../common/Button/Button";


export const Category: React.FC = () => {
  const { state: categoryState, dispatch: categoryDispatch } =
    useContext(CategoryContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  const [showAddCategoryPage, setShowAddCategoryPage] = useState(false);

  const addCategoryToggle = () => {
    setShowAddCategoryPage(!showAddCategoryPage);
  };

  const fetchCategory = async () => {
    await getCategory()(categoryDispatch, loadingDispatch).then(() => {
      console.log(categoryState, "fetch Category");
    });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const addCategory = async (data: string) => {
    await createNewCategory(data)(categoryDispatch, loadingDispatch).then(
      () => {
        console.log(data, "added a new category");
      }
    );
    fetchCategory()
  };

  return (
    <div className="category-main-div">
      {console.log(categoryState, "fetch Category")}

      <SideBar />
      <div className = "display-category-action">
            <p className = "display-category-header">
               <b> Categories</b>
            </p>
            <Button
            id = "display-category-button"
            value = "Add Category"
            handleClick = {addCategoryToggle}/>
            </div>
            
      <div className="category-container-div">
          {showAddCategoryPage ? (
            <AddCategory
              CrossIconClick={addCategoryToggle}
              handleAddCategory={addCategory}
            />
          ) : (
            <DisplayCategory
              categoryInfo={categoryState.fetchCategorySuccess}
              
            />
          )}
      
      </div>
    </div>
  );
};

