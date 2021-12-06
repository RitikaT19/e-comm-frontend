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
  // flag for display category loader
  const [showDisplayCategoryLoader, setDisplayCategoryShowLoader] = useState(false)
  // flag for display category loader
  const [showAddCategoryLoader, setAddCategoryShowLoader] = useState(false)
  // stores the state for edit category flag
  const [editCategoryData, setEditCategoryData] = useState<boolean>(false)
  // stored the detail of a single category
  const [categoryData, setCategoryData] = useState<any>()
  
  
  // toggle function for showing add category page
  const addCategoryToggle = () => {
    // toggles add category page
    setShowAddCategoryPage(!showAddCategoryPage);
    // sets edit flag as false
    setEditCategoryData(false)
    // sets category data as empty
    setCategoryData({});
  };

  // function for fetching category
  const fetchCategory = async () => {
    setDisplayCategoryShowLoader(true)
    // call getCategory action
    await getCategory()(categoryDispatch, loadingDispatch).then(()=>{
      setDisplayCategoryShowLoader(false)
    });
  };

  // call useEffect when fetchCategory function is successful
  useEffect(() => {
    fetchCategory();
  }, []);

  // function for adding category
  const addCategory = async (data: string) => {
    setAddCategoryShowLoader(true)
    // call createNewCategory action
    await createNewCategory(data)(categoryDispatch, loadingDispatch).then(()=>{
      setAddCategoryShowLoader(false)
    });
    // call fetchCategory everytime after a new category is added
    fetchCategory();
    setShowAddCategoryPage(false)
  };

  // function for deleting a category
  const removeCategory = async (id: any) => {
    // call deleteCategory action
    await deleteCategory(id)(categoryDispatch, loadingDispatch);
    //  call fetchCategory after deleting a category
    fetchCategory();
  };

  // function for updating category
  const updateCategory = async(data: any) =>{
    setAddCategoryShowLoader(true)
    // call action editCategory
    await editCategory(data)(categoryDispatch, loadingDispatch).then(()=>(
    setAddCategoryShowLoader(false)
    ))
    fetchCategory()
    setShowAddCategoryPage(false)
  };

  const updateCategoryIconClick = (data: any) =>{
    // sets the category detail for the card clicked
    setCategoryData(data);
    // sets the setShowAddCategoryPage true 
    setShowAddCategoryPage(true)
    // sets the edit flag true
    setEditCategoryData(true)
    
  }
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

      {console.log(categoryState.error, "...")}

      <div className="category-container-div">
        {/* if showAddCategoryPage is true then render AddCategory page else render display category page */}
        {showAddCategoryPage ? (
          <AddCategory
            CrossIconClick={addCategoryToggle}
            handleAddCategory={addCategory}
            isEdit = {editCategoryData}
            showLoader = {showAddCategoryLoader}
            categoryDetail = {categoryData}
            handleEditCategory = {updateCategory}
            errorMessage = {editCategoryData ? categoryState.updateCategoryError : categoryState.error}
            successMessage = {editCategoryData ? categoryState.updateCategorySuccess : categoryState.createCategorySuccess}
          />
        ) : (
          <DisplayCategory
            categoryInfo={categoryState.fetchCategorySuccess}
            deleteCategory={removeCategory}
            updateCategoryIconClick={updateCategoryIconClick}
            showLoader = {showDisplayCategoryLoader}
          />
        )}
      </div>
    </div>
  );
};
