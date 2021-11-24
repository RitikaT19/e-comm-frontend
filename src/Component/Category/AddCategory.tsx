import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";

interface Props{

}

export const AddCategory:React.FC<Props> = () =>{
    const [name, setName] = useState<string>("")

    const submitCategory = () => {}
    return(
        <div className = "add-category-container">
            <div className = "add-category-div">
                <Textfield
                id = "category-name"
                label = "Add Category"
                placeholder = "Enter category name here"
                value = {name}
                onChange = {(e:any)=>setName(e.target.value)}/>
            </div>
            <Button
            id = "add-category-button"
            value = "Add Category"
            handleClick = {submitCategory}/>
        </div>
    )
}