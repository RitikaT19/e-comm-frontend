import React, { useContext } from "react";
import { SignUp } from "./SignUp";
import { LoadingContext } from "../../contexts/Loading";
import { SignUpContext } from "../../contexts/SignUp";
import { addUser, clearErrors } from "../../actions/signUp";
import { SideBar } from "../common/SideBar/Sidebar";

export const SignUpAdmin: React.FC = () => {
    //rename state and dispatch as signUpState and signUpDispatch respectively
  const { state: signUpState, dispatch: signUpDispatch } =
    useContext(SignUpContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for signing up a user
  const clickSignUpButton = async (data: any) => {
    // call addUser action
    await addUser(data)(signUpDispatch, loadingDispatch)
  };
  return (
    <div>
      <SideBar />
      <SignUp
        handleSignUpButton={clickSignUpButton}
        errorMessage={signUpState.error}
        successMessage={signUpState.addUserSuccess}
      />
    </div>
  );
};
