import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { getProductById, createProduct } from "../../actions/product";
import { ProductContext } from "../../contexts/Product";
import { LoadingContext } from "../../contexts/Loading";
import { DisplayProduct } from "./DisplayProduct";
import { AddProduct } from "./AddProduct";
import "../styles/product.css"
import Button from "../common/Button/Button";
import { MenuHeader } from "../MenuHeader";
import { useParams } from "react-router";

export const Product: React.FC = () => {
  const {id}: any = useParams();
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  // flag for showing add product page
  const [showProductPage, setShowProductPage] = useState(false);

  // // function for fetching product
  // const fetchProduct = async () => {
  //   await getProduct()(productDispatch, loadingDispatch).then(() => {
  //     console.log(productState.fetchProductSuccess, "products");
  //   });
  // };
  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  const fetchProducts = async (id: string) => {
    await getProductById(id)(productDispatch, loadingDispatch) 
  };

  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  // function for toggling add product page
  const addProductToggle = () => {
    setShowProductPage(!showProductPage);
  };

  // function for adding a new product
  const addProduct = async (data: any) => {
    await createProduct(data)(productDispatch, loadingDispatch).then(() => {
      console.log(productState.createProductSuccess, "add product from index");
    });
    fetchProducts(id);
  };

  const allCategories = () =>{}
  return (
    <>
      <SideBar />
      <MenuHeader/>
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
