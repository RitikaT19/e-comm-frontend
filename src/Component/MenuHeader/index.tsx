import React, { useContext, useEffect} from "react";
import { MenuHeaderCategory } from "./MenuHeaderCategory";
import { CategoryContext } from "../../contexts/Category";
import { LoadingContext } from "../../contexts/Loading";
import { getCategory } from "../../actions/category";
import "../styles/menu-header.css"

export const MenuHeader: React.FC = () => {
    //rename state and dispatch as categoryState and categoryDispatch respectively
  const { state: categoryState, dispatch: categoryDispatch } =
    useContext(CategoryContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for fetching category
  const fetchCategory = async () => {
    // call getCategory action
    await getCategory()(categoryDispatch, loadingDispatch)
  };
  // call useeffect when fetchCategory function is successful
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="home-page-container">
      <MenuHeaderCategory categoryInfo={categoryState.fetchCategorySuccess} />
    </div>
  );
};
