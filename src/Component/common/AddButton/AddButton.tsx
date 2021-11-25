import React from "react"
import "../../styles/add-button.css"
import add from "../../../assets/Icons/add.png"

interface Props {
    addIconClick: any;
    addText: string;
}
export const AddButton:React.FC<Props> = ({addIconClick, addText}) =>{
    return(
        <div
        className="add-button"
        onClick={addIconClick}
      >
        {/* add icon */}
        <img
          className="add-icon"
          src={add}
          alt="add"
        />
        {/* text beside add icon */}
        <div className="add-text-div">
          <p>{addText}</p>
        </div>
      </div>
            
        
    )
}