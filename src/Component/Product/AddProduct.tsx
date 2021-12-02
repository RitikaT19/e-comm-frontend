import React, { useState } from "react";
import cross from "../../assets/Icons/cross.png";
import { TextArea } from "../common/TextArea/TextArea";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/add-product.css";
import Select from "react-select";
import Button from "../common/Button/Button";
import { Loading } from "../common/Loading/Loading";
import "react-dropdown/style.css";

interface Props {
  CrossIconClick: any;
  submitProduct: any;
  showLoader: boolean;
  categoryNames: any;
  // allCategories: Array<any>
}

export const AddProduct: React.FC<Props> = ({
  CrossIconClick,
  // allCategories,
  submitProduct,
  showLoader,
  categoryNames,
}) => {
  // stores name
  const [name, setName] = useState<string>("");
  // stores price
  const [price, setPrice] = useState<number>();
  // stores quantity
  const [quantity, setQuantity] = useState<number>();
  // stores description
  const [description, setDescription] = useState<string>("");
  // stores category
  const [category, setCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectCategoryId, setSelectCategory] = useState<string>("");

  const onClickProduct = async() =>{
    console.log(selectedCategory, "selected cat")
      await submitProduct({name, price, quantity, description, category:selectedCategory})
      
  }
  let options: any = []
  categoryNames.map((category: any, index: number)=>{
      options.push({value: category._id, label: category.name})
  })
  

  console.log(options,"category names")
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
            {/* textfield for name */}
            <Textfield
              label="Name"
              placeholder="Enter the name of the product"
              value={name}
              id="name"
              onChange={(e: any) => setName(e.target.value)}
            />
            {/*textfield for price  */}
            <Textfield
              label="Price"
              placeholder="Enter the price of the product"
              value={price}
              id="price"
              onChange={(e: any) => setPrice(e.target.value)}
            />
            {/* Dropdown list for category options */}
            <div className="dropdown">
              <Select
                placeholder="Select category"
                options={options}
                value={{ label: selectedCategory, value: selectedCategory }}
                onChange={(e: any) => setSelectedCategory(e.value)}
              />
            </div>
            {/* Textfield for quantity */}
            <Textfield
              label="Quantity"
              placeholder="Enter the quantity of the product"
              value={quantity}
              id="quantity"
              onChange={(e: any) => setQuantity(e.target.value)}
            />
            {/* textarea for description */}
            <TextArea
              label="Description"
              placeholder="Enter the description of the product"
              value={description}
              id="description"
              onChange={(e: any) => setDescription(e.target.value)}
            />
            
            {/* Submit button for adding product */}
            <Button
              id="add-new-product-button"
              value="Add Product"
              handleClick={onClickProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
};
