import React, { useState } from "react";
import Button from "../common/Button/Button";
import categoryCard from "../../assets/Icons/category.png";
import "../styles/category.css";
import { Loading } from "../common/Loading/Loading";
// define all the required props by the component
interface Props {
  categoryInfo: any;
  deleteCategory: any;
  editCategory: any;
  showLoader: boolean;
}
export const DisplayCategory: React.FC<Props> = ({
  categoryInfo,
  deleteCategory,
  editCategory,
  showLoader,
}) => {
  const [category, setCategory] = useState<any>();

  // function when on delete button is called
  const onDelete = (index: number) => {
    deleteCategory(categoryInfo[index]?._id);
  };
  // function for when onedit button is called
  const onEdit = (index: number) => {
    editCategory(categoryInfo[index]?._id);
  };

  return (
    <div>
      {showLoader ? (
        <Loading />
      ) : (
        <div className="display-category-container">
          <div className="display-category">
            {/* checking if category info exists */}
            {categoryInfo &&
              // checking the length of the category length
              categoryInfo.length > 0 &&
              //   mapping category info
              categoryInfo?.map((item: any, index: number) => (
                <div className="category-card-div">
                  {/* product image */}
                  <img
                    className="category-card"
                    src={categoryCard}
                    alt="category card"
                  />
                  {/* display category name */}
                  <p id={"display-category-name"}>
                    <b>{item.name}</b>
                  </p>

                  <div className="buttons-div">
                    {/* Button for editing category */}
                    <Button
                      id="edit-category-button"
                      value="Edit"
                      handleClick={() => onEdit(index)}
                    />
                    {/* Button for deleting category */}
                    <Button
                      id="delete-product-button"
                      value="Delete"
                      handleClick={() => onDelete(index)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
