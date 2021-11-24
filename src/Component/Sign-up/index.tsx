import React, { useContext } from "react";
import { SignUp } from "./SignUp";
import { LoadingContext } from "../../contexts/Loading";
import { SignUpContext } from "../../contexts/SignUp";
import { addUser, clearErrors } from "../../actions/signUp";

export const SignUpAdmin: React.FC = () => {
  const { state: signUpState, dispatch: signUpDispatch } =
    useContext(SignUpContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);



  const clickSignUpButton = async (data: any) => {
    await addUser(data)(signUpDispatch, loadingDispatch).then(() => {
      console.log("add a new user", data);
    });
    // clearErrors(signUpDispatch)
  };
  return (
    <div>
      <SignUp handleSignUpButton={clickSignUpButton} 
      errorMessage = {signUpState.error}
      successMessage = {signUpState.addUserSuccess}/>
    </div>
  );
};
