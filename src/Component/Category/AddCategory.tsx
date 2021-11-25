import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/add-category.css";
import cross from "../../assets/Icons/cross.png";

interface Props {
  handleAddCategory: any;
  CrossIconClick: any;
}

export const AddCategory: React.FC<Props> = ({
  handleAddCategory,
  CrossIconClick,
}) => {
  const [name, setName] = useState<string>("");

  const submitCategory = async () => {
    await handleAddCategory({ name });
    console.log(name, "name from add category");
  };
  return (
    <div className="add-category-container">
      <div className="add-category-div">
        <div className="close-button">
          <img src={cross} alt="cross" onClick={CrossIconClick} />
        </div>
        <Textfield
          id="category-name"
          label="Add Category"
          placeholder="Enter category name here"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </div>
      <Button
        id="add-category-button"
        value="Add Category"
        handleClick={submitCategory}
      />
    </div>
  );
};
