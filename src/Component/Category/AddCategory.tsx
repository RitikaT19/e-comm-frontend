import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/add-category.css";
import cross from "../../assets/Icons/cross.png";
import { Loading } from "../common/Loading/Loading";

// Define all the props required by the component
interface Props {
  handleAddCategory: any;
  CrossIconClick: any;
  editMode: any;
  showLoader:boolean;
}

export const AddCategory: React.FC<Props> = ({
  handleAddCategory,
  CrossIconClick,
  editMode,
  showLoader
  
}) => {
  // stores name
  const [name, setName] = useState<string>("");

  // function for when submitCategory button is clicked
  const submitCategory = async () => {
    // call handle add category with name
    await handleAddCategory({ name });
    console.log(name, "name from add category");
  };
  return (
    <div>
      {/* if show loader is true, show loader */}
      {showLoader ? (
        <Loading/>
      ):
      <div className="add-category-container">
      <div className="add-category-div">
        <div className="close-button">
          {/* cross button */}
          <img src={cross} alt="cross" onClick={CrossIconClick} />
        </div>
        {/* input for category name */}
        <Textfield
          id="category-name"
          label="Add Category"
          placeholder="Enter category name here"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </div>
      {/* button for submitting category */}
      <Button
        id="add-category-button"
        value="Add Category"
        handleClick={submitCategory}
      />
    </div>
      }
    </div>
    
  );
};
