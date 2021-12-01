import React, { useContext } from "react";
import { Login } from "../Login/Login";
import { LoginContext } from "../../contexts/Login";
import { LoadingContext } from "../../contexts/Loading";
import { signIn } from "../../actions/login";
import { History } from "history";
import { Navbar } from "../common/Navbar/Navbar";

interface Props {
  history?: History;
}
export const LoginAdmin: React.FC<Props> = (props) => {
  //rename state and dispatch as loginState and loginDispatch respectively
  const { state: loginState, dispatch: loginDispatch } =
    useContext(LoginContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for login
  const clickLoginButton = async (email: string, password: string) => {
    // call signIn action
    await signIn(
      email,
      password,
      props?.history
    )(loginDispatch, loadingDispatch).then(() => {
      // storing login email and password in local storage
      localStorage.setItem("login", JSON.stringify({ email, password }));
    });
  };
  return (
    <div>
      <Navbar />
      <Login
        handleLoginButton={clickLoginButton}
        errorMessage={loginState.error}
        successMessage={loginState.loginSuccess}
      />
    </div>
  );
};
