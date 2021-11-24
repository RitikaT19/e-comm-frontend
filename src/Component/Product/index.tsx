import React, { useContext, useEffect } from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { Container } from "../common/WhiteContainer/Container";
import { getProduct } from "../../actions/product";
import { ProductContext } from "../../contexts/Product";
import { LoadingContext } from "../../contexts/Loading";

export const Product: React.FC = () => {
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  const fetchProduct = async () => {
    await getProduct()(productDispatch, loadingDispatch).then(() => {
      console.log(productState.fetchProductSuccess, "products");
    });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      {console.log(productState.fetchProductSuccess, "return")}
      <SideBar />
      <Container>hi</Container>
    </>
  );
};
