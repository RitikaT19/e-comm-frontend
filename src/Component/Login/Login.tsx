import React, { useState } from "react";
import Button from "../common/Button/Button";
import { Textfield } from "../common/Textfield/Textfield";
import "../styles/login.css";
import background from "../../assets/Icons/background.jpg";

// Define all the required props by the component
interface Props {
  handleLoginButton: any;
  errorMessage: any;
  successMessage: any;
}

export const Login: React.FC<Props> = ({
  handleLoginButton,
  errorMessage,
  successMessage,
}) => {
  // stores email
  const [email, setEmail] = useState<string>("");
  // stored password
  const [password, setPassword] = useState<string>("");
  // stores empty field error
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false);

  // function for when clickLoginButton is called
  const clickLoginButton = async () => {
    // if either of the parameter is not provided, throw error
    if (!(email || password)) {
      setShowEmptyFieldError(true);
    } else {
      // call handleLoginButton with data
      await handleLoginButton(email, password);
    }
  };

  return (
    <div className="login-main-div">
      <img className="background" src={background} alt="background" />
      <div className="textfield-div">
        {/* heading for the login page */}
        <p className="login-heading">Welcome back! Login!</p>
        {/* input for email */}
        <Textfield
          label="Email"
          placeholder="Enter email address"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        {/* input for the password */}
        <Textfield
          label="Password"
          type="password"
          placeholder="Enter password here"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        {/* error and success message */}
        {errorMessage ? (
          <p className="sign-in-error">{errorMessage}</p>
        ) : successMessage ? (
          <p className="sign-in-success">{successMessage}</p>
        ) : (
          // empty field error
          showEmptyFieldError && (
            <p className="sign-in-error">Please fill all the fields</p>
          )
        )}
        <div className="login_button_div">
          {/* button for submitting login details */}
          <Button
            value="Login"
            id="login_button"
            handleClick={clickLoginButton}
          />
        </div>
      </div>
    </div>
  );
};
