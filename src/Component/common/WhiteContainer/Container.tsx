import React from "react"
import "../../styles/container.css"
interface Props{
children:any
}
export const Container:React.FC<Props> = ({children}) => {
    return(
        <div className = "container-body">
            {children}
        </div>
    )
}