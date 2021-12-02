import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { getProductById, createProduct, removeProduct } from "../../actions/product";
import {getCategory} from "../../actions/category"
import {CategoryContext} from "../../contexts/Category"
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
  //rename state and dispatch as categoryState and categoryDispatch respectively
  const { state: categoryState, dispatch: categoryDispatch } =
    useContext(CategoryContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  // flag for showing add product page
  const [showProductPage, setShowProductPage] = useState(false);
  // flag for add product header
  const [showAddProductLoader, setShowAddProductLoader] = useState(false);
  // flag for display product header
  const [showDisplayProductLoader, setShowDisplayProductLoader] = useState(false);
  

  // function for fetching products
  const fetchProducts = async (id: string) => {
    setShowDisplayProductLoader(true)
    // call getProductById action
    await getProductById(id)(productDispatch, loadingDispatch).then(() =>{
      setShowDisplayProductLoader(false)
    });
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
    setShowAddProductLoader(true)
    // call createProduct action
    await createProduct(data)(productDispatch, loadingDispatch).then(()=>{
      setShowAddProductLoader(false)
      
    });
    
    // call fetchProducts after adding a new product
    fetchProducts(id);
    setShowProductPage(false)
  };

  // function for deleting product
  const deleteProduct = async(id: any, category: any) =>{
    // call removeProduct action
    await removeProduct(id)(productDispatch, loadingDispatch);
    // call the fetchProducts after deleting a product
    fetchProducts(category);
  }

  // function for fetching category
  const fetchCategory = async () => {
    // call getCategory action
    await getCategory()(categoryDispatch, loadingDispatch).then(()=>{
    });
  };

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
          showLoader = {showAddProductLoader}
          categoryNames = {categoryState.fetchCategorySuccess}
          // allCategories = {allCategories}
        />
      ) : (
        <DisplayProduct 
        productDetails={productState.fetchProductSuccess}
        deleteProduct = {deleteProduct}
        showLoader = {showDisplayProductLoader} />
      )}
    </>
  );
};
