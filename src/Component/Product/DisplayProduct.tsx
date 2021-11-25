import React from "react";
import Button from "../common/Button/Button";
import "../styles/display-category.css";

interface Props {
  productDetails: any;
}
export const DisplayProduct: React.FC<Props> = ({ productDetails }) => {
  console.log(typeof productDetails, "product details");

  const productHeading: string[] = [
    "Name",
    "Price",
    "Quantity",
    "Description",
    "Category",
    "Created by",
  ];

  return (
    <div className="display-product-main-container">
      <div>
        {productDetails.length > 0 ? (
          <div className="list-add-product-heading-table">
            <div className="list-add-product-heading">
              {productHeading.map((item: any, index: number) => (
                <p id={"list-product-header" + index} key={index}>
                  {item}
                </p>
              ))}
            </div>

            <div className="list-product-details">
              {productDetails.map((item: any, index: number) => (
                <div key={index}>
                  <p id={"product-name" + index}>{item.name}</p>
                  <p id={"product-price" + index}>{item.price}</p>
                  <p id={"display-category-quantity" + index}>
                    {item.quantity}
                  </p>
                  <p id={"display-category-description" + index}>
                    {item.description}
                  </p>
                  <p id={"display-category-category" + index}>
                    {item.category}
                  </p>
                  <p id={"display-category-created-by" + index}>
                    {item.createdBy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
