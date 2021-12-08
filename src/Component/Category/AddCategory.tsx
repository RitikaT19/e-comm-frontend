import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/add-category.css";
import cross from "../../assets/Icons/cross.png";
import { Loading } from "../common/Loading/Loading";
import { isCategoryValid } from "../../helpers/validate";

// Define all the props required by the component
interface Props {
  handleAddCategory: any;
  CrossIconClick: any;
  isEdit: boolean;
  showLoader: boolean;
  categoryDetail: any;
  handleEditCategory: any;
  errorMessage: any;
  successMessage: any;
}

export const AddCategory: React.FC<Props> = ({
  handleAddCategory,
  CrossIconClick,
  isEdit,
  showLoader,
  categoryDetail,
  handleEditCategory,
  errorMessage,
  successMessage,
}) => {
  // stores name
  const [name, setName] = useState<string>(isEdit ? categoryDetail.name : "");
  // stores name error
  const [nameError, setNameError] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  const checkCategory = async () => {
    const validateCategoryResult = isCategoryValid(name);
    if (!validateCategoryResult) {
      setNameError("Please enter valid category");
    } else {
      setNameError("");
    }
  };
  console.log(successMessage, "error from category");

  // function for when submitCategory button is clicked
  const submitCategory = async () => {
    if (!name) {
      setShowEmptyFieldError(true);
    } else {
      // call handle add category with name
      await handleAddCategory({ name });
      console.log(name, "name from add category");
    }
  };
  const editCategoryButtonClick = async () => {
    const data = { id: categoryDetail?._id, name };
    await handleEditCategory({ id: categoryDetail?._id, name });
    console.log(categoryDetail, "categoty etai");
  };
  return (
    <div>
      {/* if show loader is true, show loader */}
      {showLoader ? (
        <div className="add-category-loader">
          <Loading />
        </div>
      ) : (
        <div className="add-category-container">
          <div className="add-category-background">
            <div className="add-category-div">
              <div className="close-button">
                {/* cross button */}
                <img src={cross} alt="cross" onClick={CrossIconClick} />
              </div>
              {/* input for category name */}
              <Textfield
                id="category-name"
                label={isEdit ? "Edit Category" : "Add Category"}
                placeholder="Enter category name here"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                error={nameError}
                onBlur={checkCategory}
              />
            </div>
            {errorMessage ? (
              <p className="add-user-error"> {errorMessage}</p>
            ) : successMessage ? (
              <p className="add-user-success">{successMessage}</p>
            ) : (
              showEmptyFieldError && (
                <p className="add-user-error">Please fill all the fields</p>
              )
            )}
            {/* button for submitting category */}
            <Button
              id={isEdit ? "edit-category-button" : "add-category-button"}
              value={isEdit ? "Edit Category" : "Add Category"}
              handleClick={isEdit ? editCategoryButtonClick : submitCategory}
            />
          </div>
        </div>
      )}
    </div>
  );
};
