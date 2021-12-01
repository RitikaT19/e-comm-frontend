import React from "react";
import productImg from "../../assets/Icons/mobile.jpeg";
import Button from "../common/Button/Button";
import "../styles/display-product.css";

interface Props {
  productDetails: any;
}
export const DisplayProduct: React.FC<Props> = ({ productDetails }) => {
  console.log(typeof productDetails, "product details");

  const editProduct = {};
  const deleteProduct = {};
  return (
    <div className="display-product-main-container">
      <div>
        {productDetails.length > 0 ? (
          <div className="list-product-details">
            {productDetails.map((item: any, index: number) => (
              <div className="product-card">
                <div key={index}>
                  <img className="image" src={productImg} alt="product image" />
                  <p id={"product-name"}>{item.name}</p>
                  <p id={"product-price"}>
                    <b>Price: </b>Rs.{item.price}
                  </p>
                  <p id={"display-category-quantity"}>
                    <b>Quantity:</b>
                    {item.quantity}
                  </p>
                  <p id={"display-category-description"}>
                    <b>Description:</b>
                    {item.description}
                  </p>
                  <p id={"display-category-category"}>
                    <b>Category:</b>
                    {item.category}
                  </p>
                  <div className = "buttons-div">
                  <Button
                    id="edit-product-button"
                    value="Edit"
                    handleClick={editProduct}
                  />
                  <Button
                    id="delete-product-button"
                    value="Delete"
                    handleClick={deleteProduct}
                  />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
