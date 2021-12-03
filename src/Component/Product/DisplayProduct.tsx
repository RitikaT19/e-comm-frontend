import React from "react";
import productImg from "../../assets/Icons/mobile.jpeg";
import Button from "../common/Button/Button";
import "../styles/display-product.css";
import { Loading } from "../common/Loading/Loading";

// define required props by the component
interface Props {
  productDetails: any;
  deleteProduct: any;
  showLoader: boolean;
  updateProductIconClick: any
}
export const DisplayProduct: React.FC<Props> = ({
  productDetails,
  deleteProduct,
  showLoader,
  updateProductIconClick
}) => {
  const editProduct = async(item: any) =>{
    
  };
  const onDeleteProduct = async (index: number) => {
    deleteProduct(productDetails[index]?._id, productDetails[index]?.category);
  };
  return (
    <div>
      {showLoader ? (
        <Loading />
      ) : (
        <div className="display-product-main-container">
          <div>
            {/* check the length of the productDetails array */}
            {productDetails.length > 0 ? (
              <div className="list-product-details">
                {/* map product details */}
                {productDetails.map((item: any, index: number) => (
                  <div className="product-card">
                    <div key={index}>
                      {/* product image */}
                      <img
                        className="image"
                        src={productImg}
                        alt="product image"
                      />
                      {/* product name */}
                      <p id={"product-name"}>{item.name}</p>
                      {/* product price */}
                      <p id={"product-price"}>
                        <b>Price: </b>Rs.{item.price}
                      </p>
                      {/* product quantity */}
                      <p id={"display-category-quantity"}>
                        <b>Quantity:</b>
                        {item.quantity}
                      </p>
                      {/* product description */}
                      <p id={"display-category-description"}>
                        <b>Description: </b>
                        {item.description}
                      </p>
                      <div className="buttons-div">
                        {/* Button for editing product */}
                        <Button
                          id="edit-product-button"
                          value="Edit"
                          handleClick={()=>updateProductIconClick(item)}
                        />
                        {/* product for deleting category */}
                        <Button
                          id="delete-product-button"
                          value="Delete"
                          handleClick={() => onDeleteProduct(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
