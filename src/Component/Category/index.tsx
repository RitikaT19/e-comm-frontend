import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button/Button";
import { SideBar } from "../common/SideBar/Sidebar";
import { Container } from "../common/WhiteContainer/Container";
import { getCategory } from "../../actions/category";
import { CategoryContext } from "../../contexts/Category";
import { LoadingContext } from "../../contexts/Loading";
import "../styles/category.css";
import { DisplayCategory } from "./DisplayCategory";
import { AddCategory } from "./AddCategory";

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
  return (
    <div className="category-main-div">
      <SideBar />
      <div className="category-container-div">
        <Container>
          {showAddCategoryPage ? (
            <AddCategory />
          ) : (
            <DisplayCategory
              addCategoryClick={addCategoryToggle}
              categoryDetails = {categoryState.fetchCategorySuccess}
            />
          )}
        </Container>
      </div>
    </div>
  );
};
