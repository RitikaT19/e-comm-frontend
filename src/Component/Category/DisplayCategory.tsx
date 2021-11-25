import React from "react";
import Button from "../common/Button/Button";

interface Props {
    categoryInfo : any,
    addCategoryClick: any

}
export const DisplayCategory: React.FC<Props> = ({addCategoryClick, categoryInfo}) =>{

    console.log(typeof categoryInfo, "info, category info")
    // JSON.stringify(categoryInfo)
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
             {categoryInfo && categoryInfo.length>0 && (
                 categoryInfo?.map((item: any)=>(
                    <p id = {"display-category-name"}>{item.name}</p>
                ))
             )}
            

            {/* <p>category name is : {categoryInfo.name}</p> */}
        </div> 
        </div>
    )
}