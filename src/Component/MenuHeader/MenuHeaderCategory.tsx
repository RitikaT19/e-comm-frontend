import React from "react";
import { useHistory } from "react-router";
import "../styles/menu-header-category.css"
interface Props {
  categoryInfo: any;
}
export const MenuHeaderCategory: React.FC<Props> = ({ categoryInfo }) => {
  const history = useHistory();
  return (
    <div className="display-category-container">
      {/* check if categoryInfo exists */}
      {categoryInfo &&
      // check category info length
        categoryInfo.length > 0 &&
        // map categoryInfo
        categoryInfo?.map((item: any, index: number) => (
          <div key={index}>
            {/* render categories accordingg to the category id */}
              <p onClick={()=>history.push(`/product/${item._id}`)} 
              // display name
              id={"display-category-name"}>{item.name}</p>
          </div>
        ))}
    </div>
  );
};
