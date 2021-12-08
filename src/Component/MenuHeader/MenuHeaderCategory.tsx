import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/menu-header-category.css";
interface Props {
  categoryInfo: any;
}
export const MenuHeaderCategory: React.FC<Props> = ({ categoryInfo }) => {
  const[active, setActive] = useState<string>("")
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
            {/* render categories according to the category id */}
            <p
              className={item.name==active ?  `active_category`:`category_name`}
              onClick={() => {history.push(`/product/${item._id}`);
            setActive(item.name)
            }
            }
              // display name
              id={"display-category-name"}
            >
              {item.name}
            </p>
          </div>
        ))}
    </div>
  );
};
