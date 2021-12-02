import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { getProductById, createProduct, removeProduct } from "../../actions/product";
import { ProductContext } from "../../contexts/Product";
import { LoadingContext } from "../../contexts/Loading";
import { DisplayProduct } from "./DisplayProduct";
import { AddProduct } from "./AddProduct";
import "../styles/product.css";
import Button from "../common/Button/Button";
import { MenuHeader } from "../MenuHeader";
import { useParams } from "react-router";

export const Product: React.FC = () => {
  const { id }: any = useParams();
  //rename state and dispatch as productState and productDispatch respectively
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  // flag for showing add product page
  const [showProductPage, setShowProductPage] = useState(false);
  // function for fetching products
  const fetchProducts = async (id: string) => {
    // call getProductById action
    await getProductById(id)(productDispatch, loadingDispatch);
  };

  // call useeffectt when getProductById is successful
  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  // function for toggling add product page
  const addProductToggle = () => {
    setShowProductPage(!showProductPage);
  };

  // function for adding a new product
  const addProduct = async (data: any) => {
    // call createProduct action
    await createProduct(data)(productDispatch, loadingDispatch);
    // call fetchProducts after adding a new product
    fetchProducts(id);
  };

  // function for deleting product
  const deleteProduct = async(id: any) =>{
    // call removeProduct action
    await removeProduct(id)(productDispatch, loadingDispatch);
    // call the fetchProducts after deleting a product
    fetchProducts(id);
  }

  const allCategories = () => {};
  return (
    <>
      <SideBar />
      <MenuHeader />
      <div className="actionButton">
        <p className="add-product-heading">Products</p>
        <Button
          id="add-product-button"
          value="Add Product"
          handleClick={addProductToggle}
        />
      </div>
      {showProductPage ? (
        <AddProduct
          CrossIconClick={addProductToggle}
          submitProduct={addProduct}
          // allCategories = {allCategories}
        />
      ) : (
        <DisplayProduct productDetails={productState.fetchProductSuccess}
        deleteProduct = {deleteProduct} />
      )}
    </>
  );
};
