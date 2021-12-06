import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import {
  getProductById,
  createProduct,
  removeProduct,
  editProduct,
  clearErrors
} from "../../actions/product";
import { getCategory } from "../../actions/category";
import { CategoryContext } from "../../contexts/Category";
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
  const [showDisplayProductLoader, setShowDisplayProductLoader] =
    useState(false);
  // stores the flag for the edit category
  const [editProductData, setEditProductData] = useState<boolean>(false);
  // stores the detail of a single product
  const [productData, setProductData] = useState<any>();

  // function for fetching products
  const fetchProducts = async (id: string) => {
    setShowDisplayProductLoader(true);
    // call getProductById action
    await getProductById(id)(productDispatch, loadingDispatch).then(() => {
      setShowDisplayProductLoader(false);
    });
  };

  // call useeffectt when getProductById is successful
  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  // function for toggling add product page
  const addProductToggle = () => {
    setEditProductData(false);
    setProductData("");
    setShowProductPage(!showProductPage);
  };

  // function for adding a new product
  const addProduct = async (data: any) => {
    setShowAddProductLoader(true);
    // call createProduct action
    await createProduct(data)(productDispatch, loadingDispatch).then(() => {
      setShowAddProductLoader(false);
    });
    setTimeout(() => {
      setShowProductPage(false);
      clearErrors(productDispatch)
    }, 2000);
    // call fetchProducts after adding a new product
    fetchProducts(id);
  };

  // function for deleting product
  const deleteProduct = async (id: any, category: any) => {
    // call removeProduct action
    await removeProduct(id)(productDispatch, loadingDispatch);
    // call the fetchProducts after deleting a product
    fetchProducts(category);
  };

  // function for fetching category
  const fetchCategory = async () => {
    // call getCategory action
    await getCategory()(categoryDispatch, loadingDispatch).then(() => {});
  };

  // function for updating product
  const updateProduct = async (data: any) => {
    setShowAddProductLoader(true);
    await editProduct(data)(productDispatch, loadingDispatch).then(() => {
      setShowAddProductLoader(false);
    });
    setShowProductPage(false);
    fetchProducts(id);
  };

  const updateProductIconClick = (data: any) => {
    // sets the product detail for the card clicked
    setProductData(data);
    // set setShowProductPage as true
    setShowProductPage(true);
    // sets the edit flag as true
    setEditProductData(true);
  };
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
          showLoader={showAddProductLoader}
          isEdit={editProductData}
          productInformation={productData}
          categoryNames={categoryState.fetchCategorySuccess}
          handleEditProduct={updateProduct}
          errorMessage={
            editProductData
              ? productState.updateProductError
              : productState.error
          }
          successMessage={
            editProductData
              ? productState.updateProductSuccess
              : productState.updateProductError
          }
        />
      ) : (
        <DisplayProduct
          productDetails={productState.fetchProductSuccess}
          deleteProduct={deleteProduct}
          showLoader={showDisplayProductLoader}
          updateProductIconClick={updateProductIconClick}
        />
      )}
    </>
  );
};
