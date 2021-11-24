import React from "react";
import Button from "../common/Button/Button";

interface Props {
    categoryDetails : any,
    addCategoryClick: any

}
export const DisplayCategory: React.FC<Props> = ({addCategoryClick, categoryDetails}) =>{
    return(
        <div className = "display-category-container">
            <div className = "display-category-action">
            <p className = "display-category-header">
                Categories
            </p>
            <Button
            id = "display-category-button"
            value = "Add Category"
            handleClick = {addCategoryClick}/>
            </div>
            
         <div className = "display-category">
            {categoryDetails?.map((item: any, index: number)=>(
                <p id = {"display-category-name"}>{item.name}</p>
            ))}
        </div> 
        </div>
    )
}