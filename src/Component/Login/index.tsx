import React from "react";
import {Login} from "../Login/Login"

export const LoginAdmin:React.FC = () =>{
    const clickLoginButton = {}
    return(
        <div>
            <Login
            clickLoginButton = {clickLoginButton}/>
        </div>
    )
}