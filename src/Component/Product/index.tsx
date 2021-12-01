import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { getProduct, createProduct } from "../../actions/product";
import { ProductContext } from "../../contexts/Product";
import { LoadingContext } from "../../contexts/Loading";
import { DisplayProduct } from "./DisplayProduct";
import { AddProduct } from "./AddProduct";
import "../styles/product.css"
import Button from "../common/Button/Button";

export const Product: React.FC = () => {
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  // flag for showing add product page
  const [showProductPage, setShowProductPage] = useState(false);

  // function for fetching product
  const fetchProduct = async () => {
    await getProduct()(productDispatch, loadingDispatch).then(() => {
      console.log(productState.fetchProductSuccess, "products");
    });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  // function for toggling add product page
  const addProductToggle = () => {
    setShowProductPage(!showProductPage);
  };

  // function for adding a new product
  const addProduct = async (data: any) => {
    await createProduct(data)(productDispatch, loadingDispatch).then(() => {
      console.log(productState.createProductSuccess, "add product from index");
    });
    fetchProduct();
  };

  const allCategories = () =>{}
  return (
    <>
      <SideBar />
      
        <div className = "actionButton">
        <p className="add-product-heading">Products</p>
        <Button
        id = "add-product-button"
        value="Add Product"
        handleClick = {addProductToggle}/>
        </div>
        {showProductPage ? (
          <AddProduct
            CrossIconClick={addProductToggle}
            submitProduct={addProduct}
            // allCategories = {allCategories}
          />
        ) : (
          <DisplayProduct productDetails={productState.fetchProductSuccess} />
        )}
      
    </>
  );
};
