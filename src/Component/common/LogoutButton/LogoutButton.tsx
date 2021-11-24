import React from "react"
import "../../styles/logout-button.css"
interface Props {
    logoutClick: any;
    buttonText: any
}
export const LogoutButton:React.FC<Props> = ({logoutClick, buttonText}) =>{
    return(
        <div
        className="logout-button"
        onClick={logoutClick}
      >
        {/* add icon */}
        <div className="logout-text-div">
          <p>{buttonText}</p>
        </div>
      </div>
            
        
    )
}