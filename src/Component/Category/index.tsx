// import React, { useContext, useEffect, useState } from "react";
// import Button from "../common/Button/Button";
// import { SideBar } from "../common/SideBar/Sidebar";
// import { Container } from "../common/WhiteContainer/Container";
// import { getCategory } from "../../actions/category";
// import { CategoryContext } from "../../contexts/Category";
// import { LoadingContext } from "../../contexts/Loading";
// import "../styles/category.css";
// import { DisplayCategory } from "./DisplayCategory";
// import { AddCategory } from "./AddCategory";

// export const Category: React.FC = () => {
//   const { state: categoryState, dispatch: categoryDispatch } =
//     useContext(CategoryContext);
//   const { dispatch: loadingDispatch } = useContext(LoadingContext);
//   const [showAddCategoryPage, setShowAddCategoryPage] = useState(false);

//   const addCategoryToggle = () => {
//     setShowAddCategoryPage(!showAddCategoryPage);
//   };

//   const fetchCategory = async () => {
//     await getCategory()(categoryDispatch, loadingDispatch).then(() => {
//       console.log(categoryState, "fetch Category");
//     });
//   };
//   useEffect(() => {
//     fetchCategory();
//   }, []);


//   return (
//     <div className="category-main-div">
//     {console.log(categoryState, "fetch Category")}

//       <SideBar />
//       <div className="category-container-div">
//         <Container>
//           {showAddCategoryPage ? (
//             <AddCategory />
//           ) : (
//             <DisplayCategory
//               categoryDetails = {categoryState.fetchCategorySuccess}
//               addCategoryClick={addCategoryToggle}
             
//             />
//           )}
//         </Container>
//       </div>
//     </div>
//   );
// };

import React, { useContext, useEffect } from "react";
import Button from "../common/Button/Button";
import { SideBar } from "../common/SideBar/Sidebar";
import { Container } from "../common/WhiteContainer/Container";
import{getCategory, createNewCategory} from "../../actions/category"
import {CategoryContext} from "../../contexts/Category";
import{LoadingContext} from "../../contexts/Loading"
import "../styles/category.css"
import { DisplayCategory } from "./DisplayCategory";
import { AddCategory } from "./AddCategory";


export const Category: React.FC = () => {
  const {state: categoryState, dispatch: categoryDispatch} = useContext(CategoryContext);
  const { dispatch: loadingDispatch} = useContext(LoadingContext)

  const addCategoryToggle = () => {
        // setShowAddCategoryPage(!showAddCategoryPage);
      };

  // const fetchCategory = async() =>{
  //   await getCategory()(categoryDispatch, loadingDispatch).then(()=>{
  //     console.log(categoryState, "fetch Category")
  //   })
  // }
  // useEffect(()=>{
  //   fetchCategory();
  // },[])

  const addCategory = async(data: string)=>{
    await createNewCategory(data)(categoryDispatch, loadingDispatch).then(()=>{
      console.log(data, "added a new category")
    })
  }
  return (
    <div className="category-main-div">
      {/* {console.log(categoryState.fetchCategorySuccess, "fetch Category")} */}
      <SideBar />
      <div className="category-container-div">
        <Container>
          <AddCategory
          
          CrossIconClick = {addCategoryToggle}
          handleAddCategory = {addCategory}/>
         {/* <DisplayCategory
          addCategoryClick={addCategoryToggle}
          categoryInfo = {categoryState.fetchCategorySuccess}
         /> */}

        </Container>
      </div>
    </div>
  );
};