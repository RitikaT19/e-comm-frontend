import React, { useState } from "react";
import cross from "../../assets/Icons/cross.png";
import { TextArea } from "../common/TextArea/TextArea";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/add-product.css";
// import Select from "react-select";
import Button from "../common/Button/Button";
import { Loading } from "../common/Loading/Loading";
// import "react-dropdown/style.css";
import {
  isQuantityValid,
  isPriceValid,
  isProductValid,
} from "../../helpers/validate";
import { DropDown } from "../common/DropDown/DropDown";

interface Props {
  CrossIconClick: any;
  submitProduct: any;
  showLoader: boolean;
  categoryNames: any;
  isEdit: boolean;
  productInformation: any;
  handleEditProduct: any;
  errorMessage: any;
  successMessage: any;
}

export const AddProduct: React.FC<Props> = ({
  CrossIconClick,
  handleEditProduct,
  submitProduct,
  showLoader,
  categoryNames,
  isEdit,
  productInformation,
  errorMessage,
  successMessage,
}) => {
  // stores name
  const [name, setName] = useState<string>(
    isEdit ? productInformation.name : ""
  );
  // stores name error
  const [nameError, setNameError] = useState<string>("");
  // stores price
  const [price, setPrice] = useState<string>(
    isEdit ? productInformation.price : ""
  );
  // stores price error
  const [priceError, setPriceError] = useState<string>("");
  // stores quantity
  const [quantity, setQuantity] = useState<string>(
    isEdit ? productInformation.quantity : ""
  );
  const [quantityError, setQuantityError] = useState<string>("");
  // stores description
  const [description, setDescription] = useState<string>(
    isEdit ? productInformation.description : ""
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(
    isEdit ? productInformation.category : ""
  );

  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  // function to verify product name
  const checkName = async () => {
    const verifyNameResult = isProductValid(name);
    if (!verifyNameResult) {
      setNameError("Enter a valid product");
    } else {
      setNameError("");
    }
  };

  // verify quantity
  const checkQuantity = async () => {
    const verifyQuantityResult = isQuantityValid(quantity);
    if (!verifyQuantityResult) {
      setQuantityError("Enter valid quantity");
    } else {
      setQuantityError("");
    }
  };

  // verify price
  const checkPrice = async () => {
    const verifyPriceResult = isPriceValid(price);
    if (!verifyPriceResult) {
      setPriceError("Enter valid Price");
    } else {
      setPriceError("");
    }
  };

  // function for when onClickProduct is clicked
  const onClickProduct = async () => {
    if (!(name || quantity || selectedCategory || price || description)) {
      setShowEmptyFieldError(true);
    } else {
      await submitProduct({
        name,
        price,
        quantity,
        description,
        category: selectedCategory,
      });
    }
  };

  const onEditProduct = async () => {
    await handleEditProduct({
      id: productInformation?._id,
      name,
      price,
      quantity,
      description,
      category: selectedCategory,
    });
  };

  let options: any = [];
  categoryNames.map((category: any, index: number) => {
    options.push({ value: category._id, label: category.name });
  });

  console.log(options, "category names");
  return (
    <div>
      {showLoader ? (
        <Loading />
      ) : (
        <div className="add-product-main-container">
          <div className="add-product-div">
            <div className="close-button">
              <img src={cross} alt="cross" onClick={CrossIconClick} />
            </div>
            <label htmlFor="text">Category</label>
            <div className="dropdown-category">
              <DropDown
                label="Select category"
                options={options}
                id="category-dropdown"
                handleChange={(e: any) => setSelectedCategory(e.value)}
                showLabel={false}
                value={selectedCategory}
              />
            </div>
            {/* textfield for name */}
            <Textfield
              label="Name"
              placeholder="Enter the name of the product"
              value={name}
              id="name"
              onChange={(e: any) => setName(e.target.value)}
              error={nameError}
              onBlur={checkName}
            />
            {/*textfield for price  */}
            <Textfield
              label="Price"
              placeholder="Enter the price of the product"
              value={price}
              id="price"
              onChange={(e: any) => setPrice(e.target.value)}
              error={priceError}
              onBlur={checkPrice}
            />

            {/* Textfield for quantity */}
            <Textfield
              label="Quantity"
              placeholder="Enter the quantity of the product"
              value={quantity}
              id="quantity"
              onChange={(e: any) => setQuantity(e.target.value)}
              error={quantityError}
              onBlur={checkQuantity}
            />
            {/* textarea for description */}
            <TextArea
              label="Description"
              placeholder="Enter the description of the product"
              value={description}
              id="description"
              onChange={(e: any) => setDescription(e.target.value)}
            />
            {errorMessage ? (
              <p className="sign-in-error">{errorMessage}</p>
            ) : successMessage ? (
              <p className="sign-in-success">{successMessage}</p>
            ) : (
              showEmptyFieldError && (
                <p className="sign-in-error">Please fill all the fields</p>
              )
            )}

            {/* Submit button for adding product */}
            <Button
              id={isEdit ? "edit-product-button" : "add-new-product-button"}
              value={isEdit ? "Edit Product" : "Add Product"}
              handleClick={isEdit ? onEditProduct : onClickProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
};
